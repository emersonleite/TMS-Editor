import Editor from "../js/modules/editor.js";

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
  ".editor__console",
  ".editor__result",
  ".editor__button-run",
  ".editor__button-clear",
  ".editor__button-reset"
);
editor.init().run();

const logoGithub = document.querySelector('.footer__repository-image');

// Eventos de mudança de fundo na logo do githb no footer
logoGithub.addEventListener('mouseover', function(event){
  event.currentTarget.src = './img/github-icon-hover.svg';
})

logoGithub.addEventListener('mouseleave', ()=> {
  event.currentTarget.src = './img/github-icon.svg'
});