import Editor from "../js/modules/editor.js";

//const textArea = document.querySelector('#console');
const options = {
  mode: "javascript",
  theme: "dracula",
  lineNumbers: true,
  extraKeys: { "Ctrl-Space": "autocomplete" },
  lineWrapping: true
};

// iniciando o editor
const editor = new Editor(
  options,
  "#console",
  "#result",
  "#run",
  "#clear",
  "#reset"
);
editor.init().run();

const logoGithub = document.querySelector('.github-icon');

// Eventos de mudança de fundo na logo do githb no footer
logoGithub.addEventListener('mouseover', function(event){
  event.currentTarget.src = './img/github-icon-hover.svg';
})

logoGithub.addEventListener('mouseleave', ()=> {
  event.currentTarget.src = './img/github-icon.svg'
});