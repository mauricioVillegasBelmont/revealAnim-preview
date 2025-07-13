/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms/api.ts":
/*!**************************!*\
  !*** ./src/forms/api.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FormSumbiterApi)\n/* harmony export */ });\nclass FormSumbiterApi {\n  static async submit(path, method, formData) {\n    return new Promise(resolve => {\n      fetch(path, {\n        method: method,\n        headers: {\n          \"Cache-Control\": \"no-cache\"\n        },\n        body: formData\n      }).then(response => {\n        return response.json();\n      }).then(response => {\n        resolve(response);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://prom1009/./src/forms/api.ts?\n}");

/***/ }),

/***/ "./src/forms/form.ts":
/*!***************************!*\
  !*** ./src/forms/form.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/forms/api.ts\");\n\nclass Form {\n  api = _api__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  constructor(form, callback) {\n    this.form = form;\n    this.callback = callback;\n    this.bindEvents();\n  }\n  bindEvents() {\n    const self = this;\n    this.form.addEventListener(\"submit\", async e => {\n      e.preventDefault();\n      self.submit();\n    });\n  }\n  get formData() {\n    return new FormData(this.form);\n  }\n  submit() {\n    const data = this.formData;\n    const action = this.form.action;\n    const method = this.form.method.toUpperCase();\n    if (!data || !action || !method) return;\n    this.api.submit(action, method, data).then(data => {\n      this.callback(data);\n    });\n  }\n}\n\n//# sourceURL=webpack://prom1009/./src/forms/form.ts?\n}");

/***/ }),

/***/ "./src/forms/formHandlers.ts":
/*!***********************************!*\
  !*** ./src/forms/formHandlers.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FormHandler)\n/* harmony export */ });\nclass FormHandler {\n  static success(response) {\n    if (!response.redirect) return;\n    window.location.href = response.redirect;\n  }\n  static wrong(response) {\n    const errorClases = [\"c__error\", \"text--center\", \"my--5\"];\n    const msg_cont = document.getElementById(\"error_msg\");\n    if (!msg_cont) return;\n    msg_cont.innerHTML = \"\";\n    const paragraph = document.createElement(\"p\");\n    const textNode = document.createTextNode(response.msg);\n    paragraph.appendChild(textNode);\n    paragraph.classList.add(...errorClases);\n    msg_cont.appendChild(paragraph);\n  }\n}\n\n//# sourceURL=webpack://prom1009/./src/forms/formHandlers.ts?\n}");

/***/ }),

/***/ "./src/registro.ts":
/*!*************************!*\
  !*** ./src/registro.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forms_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms/form */ \"./src/forms/form.ts\");\n/* harmony import */ var _forms_formHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/formHandlers */ \"./src/forms/formHandlers.ts\");\n\n\nconst forms = document.querySelectorAll(\"form\");\nif (forms) {\n  forms.forEach(form => {\n    new Promise(resolve => {\n      const callback = formResponse => resolve(formResponse);\n      new _forms_form__WEBPACK_IMPORTED_MODULE_0__[\"default\"](form, callback);\n    }).then(response => {\n      if (response.status == 'ok') {\n        return _forms_formHandlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].success(response);\n      }\n      return _forms_formHandlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrong(response);\n    });\n  });\n}\n\n//# sourceURL=webpack://prom1009/./src/registro.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/registro.ts");
/******/ 	
/******/ })()
;