/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/editor.js":
/*!******************************!*\
  !*** ./js/modules/editor.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return editor; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar editor = /*#__PURE__*/function () {\n  function editor() //condemirrorVersion = \"5.52.0\"\n  {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultOptions;\n    var tagConsole = arguments.length > 1 ? arguments[1] : undefined;\n    var tagResult = arguments.length > 2 ? arguments[2] : undefined;\n    var tagRun = arguments.length > 3 ? arguments[3] : undefined;\n    var tagClear = arguments.length > 4 ? arguments[4] : undefined;\n    var tagReset = arguments.length > 5 ? arguments[5] : undefined;\n\n    _classCallCheck(this, editor);\n\n    this.options = options;\n    this.textArea = document.querySelector(tagConsole);\n    this.consoleResult = document.querySelector(tagResult);\n    this.buttonRun = document.querySelector(tagRun);\n    this.buttonClear = document.querySelector(tagClear);\n    this.buttonReset = document.querySelector(tagReset); //this.condemirrorVersion = condemirrorVersion;\n  }\n  /*   appendScriptsCodemirror() {\r\n      const url = `https://cdn.jsdelivr.net/npm/codemirror@${this.condemirrorVersion}`;\r\n      const scriptsCodemirror = `<script src=\"${url}/lib/codemirror.js\"></script>\r\n      <script src=\"${url}/mode/javascript/javascript.js\"></script>\r\n      <script src=\"${url}/addon/hint/javascript-hint.js\"></script>\r\n      <script src=\"${url}/addon/hint/show-hint.js\"></script>\r\n      <link rel=\"stylesheet\" href=\"${url}/addon/hint/show-hint.css\">\r\n      <link rel=\"stylesheet\" href=\"${url}/lib/codemirror.css\">\r\n      <link rel=\"stylesheet\" href=\"${url}/theme/dracula.css\">`;\r\n      document.head.innerHTML += scriptsCodemirror;\r\n      console.log(document.head)\r\n    } */\n\n\n  _createClass(editor, [{\n    key: \"convertToCodeMirrorEditor\",\n    value: function convertToCodeMirrorEditor() {\n      var editor = CodeMirror.fromTextArea(this.textArea, this.options);\n      editor.setSize(\"480\", \"390\");\n      return editor;\n    }\n  }, {\n    key: \"definePresentation\",\n    // Retornando todos os elementos de span do conteúdo da area de código em um array, exceto com quebra de linha\n    value: function definePresentation() {\n      var ArrayPresentation = _toConsumableArray(document.querySelectorAll('span[role=\"presentation\"]'));\n\n      var FilteredArrayPresentation = ArrayPresentation.filter(function (item) {\n        return item.innerHTML !== '<span cm-text=\"\">​</span>';\n      });\n      return FilteredArrayPresentation;\n    } //>>>>>>> defineContentScript\n\n  }, {\n    key: \"changeConsoleLog\",\n    value: function changeConsoleLog(contentScript) {\n      var contentScriptAtualized = contentScript.split(\"console.log\").join(\"show\");\n      return contentScriptAtualized;\n    } // Definindo conteudo do script com base no array de elementos da área de cádigo\n\n  }, {\n    key: \"defineContentScript\",\n    value: function defineContentScript(presentation) {\n      var contentScript = \"\";\n      presentation.map(function (item) {\n        var regexp1 = /(.+)?\\;?(console\\.log\\(\\'?\\\"?\\w+\\.?\\w+?\\(?\\)?\\'?\\\"?\\))(\\})?(\\;)?/g;\n        var regexp2 = /^(\\s+)?console\\.log\\(\\'?\\\"?\\w+\\.?\\w+?\\(?\\)?\\'?\\\"?\\)/g;\n        var line = item.parentElement.previousElementSibling.childNodes[0].textContent;\n\n        if (regexp2.test(item.textContent)) {\n          contentScript += \"showLine(\".concat(line, \") + \").concat(item.textContent, \"\\n\");\n        } else if (regexp1.test(item.textContent)) {\n          contentScript += \"\".concat(item.textContent.replace(regexp1, \"$1\\nshowLine(\".concat(line, \")+$2\\n$3$4\")));\n        } else {\n          contentScript += \"\".concat(item.textContent, \"\\n\");\n        }\n      });\n      return this.changeConsoleLog(contentScript); // console.log() >>>>>>>> show();\n    } // Criando elemento com a tag especificada\n\n  }, {\n    key: \"tagArea\",\n    value: function tagArea() {\n      var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"script\";\n      var nameClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"script-editor\";\n      var area = document.createElement(tagName);\n      area.classList.add(nameClass);\n      return area;\n    } // Colocando conteúdo dentro de elemento com tag específica\n\n  }, {\n    key: \"appendContentInTagArea\",\n    value: function appendContentInTagArea(tagArea) {\n      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      args.forEach(function (item) {\n        tagArea.append(item);\n      });\n      return tagArea;\n    }\n  }, {\n    key: \"deletePreviousElement\",\n    value: function deletePreviousElement(element) {\n      if (element.previousElementSibling.classList.contains(\"script-editor\")) {\n        element.previousElementSibling.remove();\n      }\n    }\n  }, {\n    key: \"run\",\n    value: function run() {\n      var content = this.defineContentScript(this.definePresentation());\n      this.tagAreaCreated = this.tagArea();\n      this.appendContentInTagArea(this.tagAreaCreated, this.constResult, this.showLineNumber, this.showConsole, \"try {\", content, \"}catch(error){ result.innerHTML += `<p class='line-error'>${error}</p>` }\");\n      this.appendContentInTagArea(document.body, this.tagAreaCreated);\n      this.deletePreviousElement(this.tagAreaCreated); // ok\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      result.innerHTML = \"\";\n    }\n  }, {\n    key: \"inicialContent\",\n    value: function inicialContent() {\n      this.convertToCodeMirrorEditor();\n      var editors = document.querySelectorAll(\".CodeMirror\");\n      editors[1].remove();\n      this.deleteScript();\n      this.reset();\n    }\n  }, {\n    key: \"deleteScript\",\n    value: function deleteScript() {\n      this.tagAreaCreated.remove();\n    }\n  }, {\n    key: \"addEventButtonRun\",\n    value: function addEventButtonRun() {\n      var _this = this;\n\n      this.buttonRun.addEventListener(\"click\", function () {\n        _this.run();\n      });\n    }\n  }, {\n    key: \"addEventButtonReset\",\n    value: function addEventButtonReset() {\n      var _this2 = this;\n\n      this.buttonReset.addEventListener(\"click\", function () {\n        _this2.inicialContent();\n      });\n    }\n  }, {\n    key: \"addEventButtonClear\",\n    value: function addEventButtonClear() {\n      var _this3 = this;\n\n      this.buttonClear.addEventListener(\"click\", function () {\n        _this3.reset();\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      //this.appendScriptsCodemirror();\n      this.addEventButtonRun();\n      this.addEventButtonClear();\n      this.addEventButtonReset();\n      this.convertToCodeMirrorEditor();\n      return this;\n    }\n  }, {\n    key: \"defaultOptions\",\n    get: function get() {\n      return {\n        mode: \"javascript\",\n        theme: \"cobalt\",\n        lineNumbers: true,\n        extraKeys: {\n          \"Ctrl-Space\": \"autocomplete\"\n        },\n        lineWrapping: true\n      };\n    }\n  }, {\n    key: \"showConsole\",\n    get: function get() {\n      return function show(item) {\n        result.innerHTML += \"<p class='line-result'>\".concat(\">>> \" + JSON.stringify(item).replace(/\"/g, \"\"), \"</p>\");\n      };\n    }\n  }, {\n    key: \"showLineNumber\",\n    get: function get() {\n      return function showLine(item) {\n        result.innerHTML += \"<span class='line-number'>\".concat(\"line \" + String(item), \"</span>\");\n      };\n    }\n  }, {\n    key: \"constResult\",\n    get: function get() {\n      return \"result = document.querySelector('.result');\";\n    }\n  }]);\n\n  return editor;\n}();\n\n\n\n//# sourceURL=webpack:///./js/modules/editor.js?");

/***/ }),

/***/ "./webpack/script.js":
/*!***************************!*\
  !*** ./webpack/script.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modules_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/modules/editor.js */ \"./js/modules/editor.js\");\n //const textArea = document.querySelector('#console');\n\nvar options = {\n  mode: \"javascript\",\n  theme: \"dracula\",\n  lineNumbers: true,\n  extraKeys: {\n    \"Ctrl-Space\": \"autocomplete\"\n  },\n  lineWrapping: true\n}; // iniciando o editor\n\nvar editor = new _js_modules_editor_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](options, \"#console\", \"#result\", \"#run\", \"#clear\", \"#reset\");\neditor.init().run();\nvar logoGithub = document.querySelector('.github-icon'); // Eventos de mudança de fundo na logo do githb no footer\n\nlogoGithub.addEventListener('mouseover', function (event) {\n  event.currentTarget.src = './img/github-icon-hover.svg';\n});\nlogoGithub.addEventListener('mouseleave', function () {\n  event.currentTarget.src = './img/github-icon.svg';\n});\n\n//# sourceURL=webpack:///./webpack/script.js?");

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./webpack/script.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./webpack/script.js */\"./webpack/script.js\");\n\n\n//# sourceURL=webpack:///multi_./webpack/script.js?");

/***/ })

/******/ });