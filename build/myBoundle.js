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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',\n  original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',\n  description: 'Hokkaido Flower'\n}, {\n  preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',\n  original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',\n  description: 'Container Haulage Freight'\n}, {\n  preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',\n  original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',\n  description: 'Aerial Beach View'\n}, {\n  preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',\n  original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',\n  description: 'Flower Blooms'\n}, {\n  preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',\n  original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',\n  description: 'Alpine Mountains'\n}, {\n  preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',\n  original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',\n  description: 'Mountain Lake Sailing'\n}, {\n  preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',\n  original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',\n  description: 'Alpine Spring Meadows'\n}, {\n  preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',\n  original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',\n  description: 'Nature Landscape'\n}, {\n  preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',\n  original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',\n  description: 'Lighthouse Coast Sea'\n}]);\n\n//# sourceURL=webpack://goit-js-09-webpack/./src/js/app.js?");

/***/ }),

/***/ "./src/js/close-modal.js":
/*!*******************************!*\
  !*** ./src/js/close-modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _on_keypress_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-keypress-event */ \"./src/js/on-keypress-event.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./src/js/variables.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  _variables__WEBPACK_IMPORTED_MODULE_1__.openModalRef.classList.remove('is-open');\n  window.removeEventListener('keydown', _on_keypress_event__WEBPACK_IMPORTED_MODULE_0__.default);\n  _variables__WEBPACK_IMPORTED_MODULE_1__.imageAtModal.src = '';\n  _variables__WEBPACK_IMPORTED_MODULE_1__.imageAtModal.alt = '';\n}\n\n//# sourceURL=webpack://goit-js-09-webpack/./src/js/close-modal.js?");

/***/ }),

/***/ "./src/js/gallery-items-render.js":
/*!****************************************!*\
  !*** ./src/js/gallery-items-render.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(images) {\n  return images.map(function (_ref) {\n    var preview = _ref.preview,\n        original = _ref.original,\n        description = _ref.description;\n    return \"\\n    <li class=\\\"gallery__item\\\">\\n        <a class=\\\"gallery__link\\\" href=\\\"\".concat(original, \"\\\">\\n            <img class=\\\"gallery__image\\\" loading=\\\"lazy\\\" src=\\\"\").concat(preview, \"\\\" data-source=\\\"\").concat(original, \"\\\" alt=\\\"\").concat(description, \"\\\" />\\n        </a>\\n    </li>\\n    \");\n  }).join(' ');\n}\n\n//# sourceURL=webpack://goit-js-09-webpack/./src/js/gallery-items-render.js?");

/***/ }),

/***/ "./src/js/get-current-image-index.js":
/*!*******************************************!*\
  !*** ./src/js/get-current-image-index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/js/app.js\");\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(currentImageAlt) {\n  return _app_js__WEBPACK_IMPORTED_MODULE_0__.default.findIndex(function (_ref) {\n    var description = _ref.description;\n    return description === currentImageAlt;\n  });\n}\n\n//# sourceURL=webpack://goit-js-09-webpack/./src/js/get-current-image-index.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/js/app.js\");\n/* harmony import */ var _gallery_items_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-items-render */ \"./src/js/gallery-items-render.js\");\n/* harmony import */ var _on_click_open_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./on-click-open-modal.js */ \"./src/js/on-click-open-modal.js\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n\n\n\n\nvar galleryRef = document.querySelector('.js-gallery'); // const openModalRef = document.querySelector('.js-lightbox');\n// const imageAtModal = document.querySelector('.lightbox__image');\n//вставляеи код галереи в разметку\n\ngalleryRef.insertAdjacentHTML('afterbegin', (0,_gallery_items_render__WEBPACK_IMPORTED_MODULE_1__.default)(_app_js__WEBPACK_IMPORTED_MODULE_0__.default));\ngalleryRef.addEventListener('click', _on_click_open_modal_js__WEBPACK_IMPORTED_MODULE_2__.default); // функция рендеринга галереи.\n// function galleryItemsRender(images) {\n//   return images\n//     .map(({ preview, original, description }) => {\n//       return `\n//     <li class=\"gallery__item\">\n//         <a class=\"gallery__link\" href=\"${original}\">\n//             <img class=\"gallery__image\" loading=\"lazy\" src=\"${preview}\" data-source=\"${original}\" alt=\"${description}\" />\n//         </a>\n//     </li>\n//     `;\n//     })\n//     .join(' ');\n// }\n// функция открытия модального окна по клику на картинке\n// function onClickOpenModal(event) {\n//   event.preventDefault();\n//   if (event.target.nodeName !== 'IMG') {\n//     return;\n//   }\n//   openModalRef.classList.add('is-open');\n//   imageAtModal.src = event.target.dataset.source;\n//   imageAtModal.alt = event.target.alt;\n//   openModalRef.addEventListener('click', onClickCloseModal);\n//   window.addEventListener('keydown', onKeyPressEvent);\n// }\n// функция закрытия модального окна по клику мышкой\n// function onClickCloseModal(event) {\n//   if (\n//     event.target.classList.contains('lightbox__overlay') ||\n//     event.target.classList.contains('lightbox__button')\n//   ) {\n//     closeModal();\n//   }\n// }\n// функция обработки события нажатии кнопки на коавиатуре\n// function onKeyPressEvent(event) {\n//   const currenImagetIndex = getIndexOfCurrentImage(imageAtModal.alt);\n//   //   if (event.code === 'ArrowLeft') {\n//   //     renderPreviousImage(currenImagetIndex);\n//   //   } else if (event.code === 'ArrowRight') {\n//   //     renderNextImage(currenImagetIndex);\n//   //   } else if (event.code === 'Escape') {\n//   //     closeModal();\n//   //   }\n//   switch (event.code) {\n//     case 'ArrowLeft':\n//       renderPreviousImage(currenImagetIndex);\n//       break;\n//     case 'ArrowRight':\n//       renderNextImage(currenImagetIndex);\n//       break;\n//     case 'Escape':\n//       closeModal();\n//       break;\n//     default:\n//   }\n// }\n// функция рендеринга предыдущей картинки\n// function renderPreviousImage(indexOfImage) {\n//   if (indexOfImage === 0) {\n//     indexOfImage = galleryItems.length;\n//   }\n//   const { original, description } = galleryItems.find(\n//     item => galleryItems.indexOf(item) === indexOfImage - 1,\n//   );\n//   imageAtModal.src = original;\n//   imageAtModal.alt = description;\n// }\n// функция рендеринга следующей картинки\n// function renderNextImage(indexOfImage) {\n//   if (indexOfImage === galleryItems.length - 1) {\n//     indexOfImage = -1;\n//   }\n//   const nextElement = galleryItems.find(\n//     item => galleryItems.indexOf(item) === indexOfImage + 1,\n//   );\n//   imageAtModal.src = nextElement.original;\n//   imageAtModal.alt = nextElement.description;\n// }\n// функция закрытия модального окна\n// function closeModal() {\n//   openModalRef.classList.remove('is-open');\n//   window.removeEventListener('keydown', onKeyPressEvent);\n//   imageAtModal.src = '';\n//   imageAtModal.alt = '';\n// }\n// функция поиска индекса текущей картинки в массиве\n// function getIndexOfCurrentImage(currentImageAlt) {\n//   return galleryItems.findIndex(\n//     ({ description }) => description === currentImageAlt,\n//   );\n// }\n\n//# sourceURL=webpack://goit-js-09-webpack/./src/js/index.js?");

/***/ }),

/***/ "./src/js/on-click-close-modal.js":
/*!****************************************!*\
  !*** ./src/js/on-click-close-modal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _close_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-modal */ \"./src/js/close-modal.js\");\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {\n  if (event.target.classList.contains('lightbox__overlay') || event.target.classList.contains('lightbox__button')) {\n    (0,_close_modal__WEBPACK_IMPORTED_MODULE_0__.default)();\n  }\n}\n\n//# sourceURL=webpack://goit-js-09-webpack/./src/js/on-click-close-modal.js?");

/***/ }),

/***/ "./src/js/on-click-open-modal.js":
/*!***************************************!*\
  !*** ./src/js/on-click-open-modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _on_click_close_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-click-close-modal */ \"./src/js/on-click-close-modal.js\");\n/* harmony import */ var _on_keypress_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on-keypress-event */ \"./src/js/on-keypress-event.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ \"./src/js/variables.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {\n  event.preventDefault();\n\n  if (event.target.nodeName !== 'IMG') {\n    return;\n  }\n\n  _variables__WEBPACK_IMPORTED_MODULE_2__.openModalRef.classList.add('is-open');\n  _variables__WEBPACK_IMPORTED_MODULE_2__.imageAtModal.src = event.target.dataset.source;\n  _variables__WEBPACK_IMPORTED_MODULE_2__.imageAtModal.alt = event.target.alt;\n  _variables__WEBPACK_IMPORTED_MODULE_2__.openModalRef.addEventListener('click', _on_click_close_modal__WEBPACK_IMPORTED_MODULE_0__.default);\n  window.addEventListener('keydown', _on_keypress_event__WEBPACK_IMPORTED_MODULE_1__.default);\n}\n\n//# sourceURL=webpack://goit-js-09-webpack/./src/js/on-click-open-modal.js?");

/***/ }),

/***/ "./src/js/on-keypress-event.js":
/*!*************************************!*\
  !*** ./src/js/on-keypress-event.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/js/variables.js\");\n/* harmony import */ var _get_current_image_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-current-image-index */ \"./src/js/get-current-image-index.js\");\n/* harmony import */ var _render_previous_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-previous-image */ \"./src/js/render-previous-image.js\");\n/* harmony import */ var _render_next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-next-image */ \"./src/js/render-next-image.js\");\n/* harmony import */ var _close_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./close-modal */ \"./src/js/close-modal.js\");\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {\n  var currenImagetIndex = (0,_get_current_image_index__WEBPACK_IMPORTED_MODULE_1__.default)(_variables__WEBPACK_IMPORTED_MODULE_0__.imageAtModal.alt);\n\n  switch (event.code) {\n    case 'ArrowLeft':\n      (0,_render_previous_image__WEBPACK_IMPORTED_MODULE_2__.default)(currenImagetIndex);\n      break;\n\n    case 'ArrowRight':\n      (0,_render_next_image__WEBPACK_IMPORTED_MODULE_3__.default)(currenImagetIndex);\n      break;\n\n    case 'Escape':\n      (0,_close_modal__WEBPACK_IMPORTED_MODULE_4__.default)();\n      break;\n\n    default:\n  }\n}\n\n//# sourceURL=webpack://goit-js-09-webpack/./src/js/on-keypress-event.js?");

/***/ }),

/***/ "./src/js/render-next-image.js":
/*!*************************************!*\
  !*** ./src/js/render-next-image.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/js/app.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./src/js/variables.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(indexOfImage) {\n  if (indexOfImage === _app_js__WEBPACK_IMPORTED_MODULE_0__.default.length - 1) {\n    indexOfImage = -1;\n  }\n\n  var _galleryItems$find = _app_js__WEBPACK_IMPORTED_MODULE_0__.default.find(function (item) {\n    return _app_js__WEBPACK_IMPORTED_MODULE_0__.default.indexOf(item) === indexOfImage + 1;\n  }),\n      original = _galleryItems$find.original,\n      description = _galleryItems$find.description;\n\n  _variables__WEBPACK_IMPORTED_MODULE_1__.imageAtModal.src = original;\n  _variables__WEBPACK_IMPORTED_MODULE_1__.imageAtModal.alt = description;\n}\n\n//# sourceURL=webpack://goit-js-09-webpack/./src/js/render-next-image.js?");

/***/ }),

/***/ "./src/js/render-previous-image.js":
/*!*****************************************!*\
  !*** ./src/js/render-previous-image.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/js/app.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./src/js/variables.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(indexOfImage) {\n  if (indexOfImage === 0) {\n    indexOfImage = _app_js__WEBPACK_IMPORTED_MODULE_0__.default.length;\n  }\n\n  var _galleryItems$find = _app_js__WEBPACK_IMPORTED_MODULE_0__.default.find(function (item) {\n    return _app_js__WEBPACK_IMPORTED_MODULE_0__.default.indexOf(item) === indexOfImage - 1;\n  }),\n      original = _galleryItems$find.original,\n      description = _galleryItems$find.description;\n\n  _variables__WEBPACK_IMPORTED_MODULE_1__.imageAtModal.src = original;\n  _variables__WEBPACK_IMPORTED_MODULE_1__.imageAtModal.alt = description;\n}\n\n//# sourceURL=webpack://goit-js-09-webpack/./src/js/render-previous-image.js?");

/***/ }),

/***/ "./src/js/variables.js":
/*!*****************************!*\
  !*** ./src/js/variables.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openModalRef\": () => (/* binding */ openModalRef),\n/* harmony export */   \"imageAtModal\": () => (/* binding */ imageAtModal)\n/* harmony export */ });\nvar openModalRef = document.querySelector('.js-lightbox');\nvar imageAtModal = document.querySelector('.lightbox__image');\n\n\n//# sourceURL=webpack://goit-js-09-webpack/./src/js/variables.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-js-09-webpack/./src/css/styles.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;