import Editor from '../js/modules/editor.js';

//const textArea = document.querySelector('#console');
const options = {
  mode: "javascript",
  theme: "dracula",
  lineNumbers: true,
  extraKeys: { "Ctrl-Space": "autocomplete" },
  lineWrapping: true
};

// iniciando o editor
const editor = new Editor(options, '#result', '#console', "#run", "#clear", "#reset");
editor.init().run();
