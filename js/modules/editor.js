export default class editor {
  constructor(
    options = this.defaultOptions,
    tagConsole,
    tagResult,
    tagRun,
    tagClear,
    tagReset,
    //condemirrorVersion = "5.52.0"
  ) {
    this.options = options;
    this.textArea = document.querySelector(tagConsole);
    this.consoleResult = document.querySelector(tagResult);
    this.buttonRun = document.querySelector(tagRun);
    this.buttonClear = document.querySelector(tagClear);
    this.buttonReset = document.querySelector(tagReset);
    //this.condemirrorVersion = condemirrorVersion;
  }

/*   appendScriptsCodemirror() {
    const url = `https://cdn.jsdelivr.net/npm/codemirror@${this.condemirrorVersion}`;
    const scriptsCodemirror = `<script src="${url}/lib/codemirror.js"></script>
    <script src="${url}/mode/javascript/javascript.js"></script>
    <script src="${url}/addon/hint/javascript-hint.js"></script>
    <script src="${url}/addon/hint/show-hint.js"></script>
    <link rel="stylesheet" href="${url}/addon/hint/show-hint.css">
    <link rel="stylesheet" href="${url}/lib/codemirror.css">
    <link rel="stylesheet" href="${url}/theme/dracula.css">`;
    document.head.innerHTML += scriptsCodemirror;
    console.log(document.head)
  } */

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
    presentation.map(item => {
      const regexp1 = /(.+)?\;?(console\.log\(\'?\"?\w+\.?\w+?\(?\)?\'?\"?\))(\})?(\;)?/g;
      const regexp2 = /^(\s+)?console\.log\(\'?\"?\w+\.?\w+?\(?\)?\'?\"?\)/g;
      let line =
        item.parentElement.previousElementSibling.childNodes[0].textContent;
      if (regexp2.test(item.textContent)) {
        contentScript += `showLine(${line}) + ${item.textContent}\n`;
      } else if (regexp1.test(item.textContent)) {
        contentScript += `${item.textContent.replace(
          regexp1,
          `$1\nshowLine(${line})+$2\n$3$4`
        )}`;
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
    this.tagAreaCreated = this.tagArea();
    this.appendContentInTagArea(
      this.tagAreaCreated,
      this.constResult,
      this.showLineNumber,
      this.showConsole,
      "try {",
      content,
      "}catch(error){ result.innerHTML += `<p class='line-error'>${error}</p>` }"
    );
    this.appendContentInTagArea(document.body, this.tagAreaCreated);
    this.deletePreviousElement(this.tagAreaCreated); // ok
  }

  reset() {
    result.innerHTML = "";
  }

  inicialContent() {
    this.convertToCodeMirrorEditor();
    const editors = document.querySelectorAll(".CodeMirror");
    editors[1].remove();
    this.deleteScript();
    this.reset();
  }

  deleteScript() {
    this.tagAreaCreated.remove();
  }

  addEventButtonRun() {
    this.buttonRun.addEventListener("click", () => {
      this.run();
    });
  }

  addEventButtonReset() {
    this.buttonReset.addEventListener("click", () => {
      this.inicialContent();
    });
  }

  addEventButtonClear() {
    this.buttonClear.addEventListener("click", () => {
      this.reset();
    });
  }

  init() {
    //this.appendScriptsCodemirror();
    this.addEventButtonRun();
    this.addEventButtonClear();
    this.addEventButtonReset();
    this.convertToCodeMirrorEditor();
    return this;
  }
}
