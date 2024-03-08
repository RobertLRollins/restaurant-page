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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu() {\n\n    const content = document.getElementById('content');\n\n    content.innerHTML = '';\n\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    const menuHeading = document.createElement('h2');\n    menuHeading.classList.add('menuHeading');\n    menuHeading.textContent = 'Menu';\n    menu.appendChild(menuHeading);\n\n    // Menu Items\n    //menuItem1\n    const menuDiv1 = document.createElement('div');\n    menuDiv1.classList.add('menuItem');\n    menu.appendChild(menuDiv1);\n\n    const menuItemName1 = document.createElement('h3');\n    menuItemName1.textContent = 'Synth-Protein Tacos:';\n    menuDiv1.appendChild(menuItemName1);\n\n    const paragraph1 = document.createElement('p');\n    paragraph1.classList.add('paragraph1');\n    paragraph1.textContent = 'A delightful fusion of lab-grown protein, seasoned with a blend of sustainable spices, served in algae-based biodegradable taco shells.';\n    menuDiv1.appendChild(paragraph1);\n\n    const menuImageDiv1 = document.createElement('div');\n    menuImageDiv1.classList.add('menuImageDiv');\n    menuDiv1.appendChild(menuImageDiv1);\n\n    const image1 = document.createElement('img');\n    image1.classList.add('menuImage');\n    image1.src = __webpack_require__(/*! ./tacos.png */ \"./src/tacos.png\");\n    image1.alt = 'GastRo-bot';\n    menuImageDiv1.appendChild(image1);\n\n    //menuItem2\n    const menuDiv2 = document.createElement('div');\n    menuDiv2.classList.add('menuItem');\n    menu.appendChild(menuDiv2);\n\n    const menuItemName2 = document.createElement('h3');\n    menuItemName2.textContent = 'Neo-Pho Bowls:';\n    menuDiv2.appendChild(menuItemName2);\n\n    const paragraph2 = document.createElement('p');\n    paragraph2.classList.add('paragraph2');\n    paragraph2.textContent = 'A twist on the classic Pho, featuring cultured beef broth and noodles made from insect protein, garnished with hydroponic herbs and edible flowers.';\n    menuDiv2.appendChild(paragraph2);\n\n    const menuImageDiv2 = document.createElement('div');\n    menuImageDiv2.classList.add('menuImageDiv');\n    menuDiv2.appendChild(menuImageDiv2);\n\n    const image2 = document.createElement('img');\n    image2.classList.add('menuImage');\n    image2.src = __webpack_require__(/*! ./pho.png */ \"./src/pho.png\");\n    image2.alt = 'GastRo-bot';\n    menuImageDiv2.appendChild(image2);\n\n    //menuItem3\n    const menuDiv3 = document.createElement('div');\n    menuDiv3.classList.add('menuItem');\n    menu.appendChild(menuDiv3);\n\n    const menuItemName3 = document.createElement('h3');\n    menuItemName3.textContent = 'Vertical Farm Greens Salad:';\n    menuDiv3.appendChild(menuItemName3);\n\n    const paragraph3 = document.createElement('p');\n    paragraph3.classList.add('paragraph3');\n    paragraph3.textContent = 'A refreshing mix of greens and vegetables harvested from vertical farms, topped with a nutrient-rich, spirulina-based dressing.';\n    menuDiv3.appendChild(paragraph3);\n\n    const menuImageDiv3 = document.createElement('div');\n    menuImageDiv3.classList.add('menuImageDiv');\n    menuDiv3.appendChild(menuImageDiv3);\n\n    const image3 = document.createElement('img');\n    image3.classList.add('menuImage');\n    image3.src = __webpack_require__(/*! ./salad.png */ \"./src/salad.png\");\n    image3.alt = 'GastRo-bot';\n    menuImageDiv3.appendChild(image3);\n\n    //menuItem4\n    const menuDiv4 = document.createElement('div');\n    menuDiv4.classList.add('menuItem');\n    menu.appendChild(menuDiv4);\n\n    const menuItemName4 = document.createElement('h3');\n    menuItemName4.textContent = '3D-Printed Nigiri:';\n    menuDiv4.appendChild(menuItemName4);\n\n    const paragraph4 = document.createElement('p');\n    paragraph4.classList.add('paragraph3');\n    paragraph4.textContent = 'Customizable nigiri featuring 3D-printed fish alternatives, wrapped in lab-cultivated seaweed, served with synthetic wasabi and soy sauce.';\n    menuDiv4.appendChild(paragraph4);\n\n    const menuImageDiv4 = document.createElement('div');\n    menuImageDiv4.classList.add('menuImageDiv');\n    menuDiv4.appendChild(menuImageDiv4);\n\n    const image4 = document.createElement('img');\n    image4.classList.add('menuImage');\n    image4.src = __webpack_require__(/*! ./nigiri.png */ \"./src/nigiri.png\");\n    image4.alt = 'GastRo-bot';\n    menuImageDiv4.appendChild(image4);\n\n    //menuItem5\n    const menuDiv5 = document.createElement('div');\n    menuDiv5.classList.add('menuItem');\n    menu.appendChild(menuDiv5);\n\n    const menuItemName5 = document.createElement('h3');\n    menuItemName5.textContent = 'Energy Bites:';\n    menuDiv5.appendChild(menuItemName5);\n\n    const paragraph5 = document.createElement('p');\n    paragraph5.classList.add('paragraph1');\n    paragraph5.textContent = 'Compact, energy-dense snack balls made from a blend of powdered insects, nuts, and fruits, coated in a layer of edible packaging for minimal waste.';\n    menuDiv5.appendChild(paragraph5);\n\n    const menuImageDiv5 = document.createElement('div');\n    menuImageDiv5.classList.add('menuImageDiv');\n    menuDiv5.appendChild(menuImageDiv5);\n\n    const image5 = document.createElement('img');\n    image5.classList.add('menuImage');\n    image5.src = __webpack_require__(/*! ./bites.png */ \"./src/bites.png\");\n    image5.alt = 'GastRo-bot';\n    menuImageDiv5.appendChild(image5);\n\n    //menuItem6\n    const menuDiv6 = document.createElement('div');\n    menuDiv6.classList.add('menuItem');\n    menu.appendChild(menuDiv6);\n\n    const menuItemName6 = document.createElement('h3');\n    menuItemName6.textContent = 'Crispy Cultured Chicken Sliders:';\n    menuDiv6.appendChild(menuItemName6);\n\n    const paragraph6 = document.createElement('p');\n    paragraph6.classList.add('paragraph6');\n    paragraph6.textContent = 'Mini sliders made from cultured chicken meat, seasoned with cajun-inspired spices, served on mini charcoal-activated buns for detox benefits';\n    menuDiv6.appendChild(paragraph6);\n\n    const menuImageDiv6 = document.createElement('div');\n    menuImageDiv6.classList.add('menuImageDiv');\n    menuDiv6.appendChild(menuImageDiv6);\n\n    const image6 = document.createElement('img');\n    image6.classList.add('menuImage');\n    image6.src = __webpack_require__(/*! ./sliders.png */ \"./src/sliders.png\");\n    image6.alt = 'GastRo-bot';\n    menuImageDiv6.appendChild(image6);\n\n    //menuItem7\n    const menuDiv7 = document.createElement('div');\n    menuDiv7.classList.add('menuItem');\n    menu.appendChild(menuDiv7);\n\n    const menuItemName7 = document.createElement('h3');\n    menuItemName7.textContent = 'Post-Consumer Pie:';\n    menuDiv7.appendChild(menuItemName7);\n\n    const paragraph7 = document.createElement('p');\n    paragraph7.classList.add('paragraph3');\n    paragraph7.textContent = 'A 3D-printed zero-waste dessert made from upcycled food scraps like fruit peels and bread ends, transformed into a delicious pie, symbolizing the full utilization of resources.';\n    menuDiv7.appendChild(paragraph7);\n\n    const menuImageDiv7 = document.createElement('div');\n    menuImageDiv7.classList.add('menuImageDiv');\n    menuDiv7.appendChild(menuImageDiv7);\n\n    const image7 = document.createElement('img');\n    image7.classList.add('menuImage');\n    image7.src = __webpack_require__(/*! ./pie.png */ \"./src/pie.png\");\n    image7.alt = 'GastRo-bot';\n    menuImageDiv7.appendChild(image7);\n\n    //menuItem8\n    const menuDiv8 = document.createElement('div');\n    menuDiv8.classList.add('menuItem');\n    menu.appendChild(menuDiv8);\n\n    const menuItemName8 = document.createElement('h3');\n    menuItemName8.textContent = 'Solar-Brewed Beverages:';\n    menuDiv8.appendChild(menuItemName8);\n\n    const paragraph8 = document.createElement('p');\n    paragraph8.classList.add('paragraph8');\n    paragraph8.textContent = 'A range of drinks brewed using solar energy, including synthetically flavored kombucha, algae-infused water, and caffeine shots with adaptogenic herbs.';\n    menuDiv8.appendChild(paragraph8);\n\n    const menuImageDiv8 = document.createElement('div');\n    menuImageDiv8.classList.add('menuImageDiv');\n    menuDiv8.appendChild(menuImageDiv8);\n\n    const image8 = document.createElement('img');\n    image8.classList.add('menuImage');\n    image8.src = __webpack_require__(/*! ./beverages.png */ \"./src/beverages.png\");\n    image8.alt = 'GastRo-bot';\n    menuImageDiv8.appendChild(image8);\n\n    content.appendChild(menu);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/beverages.png":
/*!***************************!*\
  !*** ./src/beverages.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1b7cc9fcd78f4253890d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/beverages.png?");

/***/ }),

/***/ "./src/bites.png":
/*!***********************!*\
  !*** ./src/bites.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6a863df4201988d91cd2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/bites.png?");

/***/ }),

/***/ "./src/gastro-bot.png":
/*!****************************!*\
  !*** ./src/gastro-bot.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d0e26fe53fb2f739627a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/gastro-bot.png?");

/***/ }),

/***/ "./src/nigiri.png":
/*!************************!*\
  !*** ./src/nigiri.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c576ca48871164ad0ef2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/nigiri.png?");

/***/ }),

/***/ "./src/pho.png":
/*!*********************!*\
  !*** ./src/pho.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f3c173a27964c06bb53b.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pho.png?");

/***/ }),

/***/ "./src/pie.png":
/*!*********************!*\
  !*** ./src/pie.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f5be989198ab0b929a40.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pie.png?");

/***/ }),

/***/ "./src/salad.png":
/*!***********************!*\
  !*** ./src/salad.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c80f13e603ed84923655.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/salad.png?");

/***/ }),

/***/ "./src/sliders.png":
/*!*************************!*\
  !*** ./src/sliders.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"88f84be41425abf388bc.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/sliders.png?");

/***/ }),

/***/ "./src/tacos.png":
/*!***********************!*\
  !*** ./src/tacos.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b162d746de5fc92ecb27.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/tacos.png?");

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