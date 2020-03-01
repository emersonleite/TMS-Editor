export default class editor {
  constructor(
    options = this.defaultOptions,
    tagResult,
    tagConsole,
    tagRun,
    tagReset,
    //content = `console.log('hello')`
  ) {
    this.options = options;
    this.consoleResult = document.querySelector(tagResult);
    this.textArea = document.querySelector(tagConsole);
    this.content = this.textArea.innerText;
    this.buttonRun = document.querySelector(tagRun);
    this.buttonReset = document.querySelector(tagReset);
  }

  get defaultOptions() {
    return {
      mode: "javascript",
      theme: "cobalt",
      lineNumbers: true,
      extraKeys: { "Ctrl-Space": "autocomplete" },
      lineWrapping: true
    };
  }

  convertToCodeMirrorEditor() {
    const editor = CodeMirror.fromTextArea(this.textArea, this.options);
    editor.setSize("480", "390");
    return editor;
  }

  set lineNumber(line) {
    this._lineNumber = line;
  }

  get lineNumber() {
    return this._lineNumber;
  }

  get showConsole() {
    return function show(item) {
      result.innerHTML += `<p class='line-result'>${">>> " +
        JSON.stringify(item).replace(/"/g, "")}</p>`;
    };
  }

  get showLineNumber() {
    return function showLine(item) {
      result.innerHTML += `<span class='line-number'>${"line " +
        String(item)}</span>`;
    };
  }

  get constResult() {
    return "result = document.querySelector('.result');";
  }

  // Retornando todos os elementos de span do conteúdo da area de código em um array, exceto com quebra de linha
  definePresentation() {
    const ArrayPresentation = [
      ...document.querySelectorAll('span[role="presentation"]')
    ];
    const FilteredArrayPresentation = ArrayPresentation.filter(
      item => item.innerHTML !== '<span cm-text="">​</span>'
    );
    return FilteredArrayPresentation;
  }

  //>>>>>>> defineContentScript
  changeConsoleLog(contentScript) {
    const contentScriptAtualized = contentScript
      .split("console.log")
      .join("show");
    return contentScriptAtualized;
  }

  // Definindo conteudo do script com base no array de elementos da área de cádigo
  defineContentScript(presentation) {
    let contentScript = "";
    let arr = [];
    presentation.map(item => {
      let line =
        item.parentElement.previousElementSibling.childNodes[0].textContent;
      if (/console/g.test(item.textContent)) {
        contentScript += `showLine(${line}) + ${item.textContent}\n`;
      } else {
        contentScript += `${item.textContent}\n`;
      }
    });
    return this.changeConsoleLog(contentScript); // console.log() >>>>>>>> show();
  }

  // Criando elemento com a tag especificada
  tagArea(tagName = "script", nameClass = "script-editor") {
    const area = document.createElement(tagName);
    area.classList.add(nameClass);
    return area;
  }

  // Colocando conteúdo dentro de elemento com tag específica
  appendContentInTagArea(tagArea, ...args) {
    args.forEach(item => {
      tagArea.append(item);
    });
    return tagArea;
  }

  deletePreviousElement(element) {
    if (element.previousElementSibling.classList.contains("script-editor")) {
      element.previousElementSibling.remove();
    }
  }

  run() {
    const content = this.defineContentScript(this.definePresentation());
    const tagArea = this.tagArea();
    this.appendContentInTagArea(
      tagArea,
      this.constResult,
      this.showLineNumber,
      this.showConsole,
      "try {",
      content,
      "}catch(error){ result.innerHTML = error }"
    );
    this.appendContentInTagArea(document.body, tagArea);
    this.deletePreviousElement(tagArea); // ok
  }

  reset() {
    result.innerHTML = "";
  }

  addEventButtonRun() {
    this.buttonRun.addEventListener("click", () => {
      this.run();
    });
  }

  addEventButtonReset() {
    this.buttonReset.addEventListener("click", () => {
      this.reset();
    });
  }

  init() {
    this.addEventButtonRun();
    this.addEventButtonReset();
    this.convertToCodeMirrorEditor();
    return this;
  }
}
