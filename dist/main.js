/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurant-page/./src/app.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\n\n    const content = document.getElementById('content');\n\n    // Clear previous content\n    content.innerHTML = '';\n\n    const heading = document.createElement('h1');\n    heading.textContent = 'GastRo-bot Food Truck';\n\n    const imageDiv = document.createElement('div');\n    imageDiv.classList.add('imageDiv');\n\n    const image = document.createElement('img');\n    image.classList.add('homeImage');\n    image.src = __webpack_require__(/*! ./gastro-bot.png */ \"./src/gastro-bot.png\");\n    image.alt = 'GastRo-bot';\n    imageDiv.appendChild(image);\n\n    const paragraph = document.createElement('p');\n    paragraph.classList.add('homeParagraph');\n    paragraph.textContent = 'Discover GastRo-bot, the pioneering, fully autonomous food truck that’s not just transforming street food but setting new standards in sustainability. Every element of our service, from navigating city streets to crafting exceptional dishes and devising an inspired menu, is meticulously managed by our state-of-the-art onboard AI. But GastRo-bot goes beyond culinary excellence; it champions eco-friendly practices, utilizing sustainable ingredients, and innovative food sources like lab-grown proteins and vertical farm vegetables to ensure every meal is a step towards a more sustainable future. Embrace a dining experience that surprises, delights, and contributes positively to our planet. Welcome to GastRo-bot, where groundbreaking technology meets environmental responsibility in the culinary adventure of tomorrow.';\n\n    content.appendChild(heading);\n    content.appendChild(imageDiv);\n    content.appendChild(paragraph);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction setupTabs() {\n    document.getElementById('homeBtn').addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    document.getElementById('menuBtn').addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    document.getElementById('appBtn').addEventListener('click', (_app_js__WEBPACK_IMPORTED_MODULE_2___default()));\n}\n\n// Initial page load\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    setupTabs();\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu() {\n\n    const content = document.getElementById('content');\n\n    content.innerHTML = '';\n\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    const menuHeading = document.createElement('h2');\n    menuHeading.classList.add('menuHeading');\n    menuHeading.textContent = 'Menu';\n    menu.appendChild(menuHeading);\n\n    // Menu items\n    //menuItem1\n    const menuItem1 = document.createElement('h3');\n    menuItem1.classList.add('menuItem');\n    menuItem1.textContent = 'Synth-Protein Tacos:';\n    menu.appendChild(menuItem1);\n\n    const paragraph1 = document.createElement('p');\n    paragraph1.classList.add('paragraph1');\n    paragraph1.textContent = 'A delightful fusion of lab-grown protein, seasoned with a blend of futuristic spices, served in algae-based biodegradable taco shells.';\n    menuItem1.appendChild(paragraph1);\n\n    const image1 = document.createElement('img');\n    image1.classList.add('menuImage');\n    image1.src = __webpack_require__(/*! ./gastro-bot.png */ \"./src/gastro-bot.png\");\n    image1.alt = 'GastRo-bot';\n    menuItem1.appendChild(image1);\n\n    //menuItem2\n    const menuItem2 = document.createElement('h3');\n    menuItem2.classList.add('menuItem');\n    menuItem2.textContent = 'Neo-Pho Bowls:';\n    menu.appendChild(menuItem2);\n\n    const paragraph2 = document.createElement('p');\n    paragraph2.classList.add('paragraph1');\n    paragraph2.textContent = 'A twist on the classic Pho, featuring cultured beef broth and noodles made from insect protein, garnished with hydroponic herbs and edible flowers.';\n    menuItem2.appendChild(paragraph2);\n\n    const image2 = document.createElement('img');\n    image2.classList.add('menuImage');\n    image2.src = __webpack_require__(/*! ./gastro-bot.png */ \"./src/gastro-bot.png\");\n    image2.alt = 'GastRo-bot';\n    menuItem2.appendChild(image2);\n\n    content.appendChild(menu);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/gastro-bot.png":
/*!****************************!*\
  !*** ./src/gastro-bot.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d0e26fe53fb2f739627a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/gastro-bot.png?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;