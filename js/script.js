import Editor from "./modules/editor.js";

const options = {
  mode: "javascript",
  theme: "dracula",
  lineNumbers: true,
  extraKeys: { "Ctrl-Space": "autocomplete" }
};

const content = "";

const editor = new Editor(".test", options, ".result");
editor.createTextArea("textarea", "text", "text");
editor.init();



