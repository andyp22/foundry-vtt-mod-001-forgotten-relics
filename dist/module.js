/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/templates/emptyTemplate.html":
/*!*********************************************!*\
  !*** ./static/templates/emptyTemplate.html ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\r\n    This template is empty intentionally so the directory is not empty\r\n    when the repository is first built.\r\n\r\n    Remove and replace with your own template files.\r\n-->");

/***/ }),

/***/ "./src/module/helper/TemplatePreloader.ts":
/*!************************************************!*\
  !*** ./src/module/helper/TemplatePreloader.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplatePreloader: () => (/* binding */ TemplatePreloader)
/* harmony export */ });
/* harmony import */ var _static_templates_emptyTemplate_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../static/templates/emptyTemplate.html */ "./static/templates/emptyTemplate.html");

class TemplatePreloader {
    /**
     * Preload a set of templates to compile and cache them for fast access during rendering
     */
    static async preloadHandlebarsTemplates() {
        const templatePaths = ["modules/template/templates/emptyTemplate.html"];
        return loadTemplates(templatePaths);
    }
}


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
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/foundryModule.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_helper_TemplatePreloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/helper/TemplatePreloader */ "./src/module/helper/TemplatePreloader.ts");

Hooks.once("init", async () => {
    console.log("=============================HMR============================");
});
Hooks.once("ready", async () => {
});
if (true) {
    if (false) {}
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUsOExBQThMOzs7Ozs7Ozs7Ozs7Ozs7QUNBdko7QUFFL0MsTUFBTSxpQkFBaUI7SUFDMUI7O09BRUc7SUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDLDBCQUEwQjtRQUNuQyxNQUFNLGFBQWEsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDeEUsT0FBTyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNKOzs7Ozs7O1VDVkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOc0U7QUFFdEUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQztBQUMvRSxDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO0FBRS9CLENBQUMsQ0FBQyxDQUFDO0FBR0gsSUFBSSxJQUFzQyxFQUFFLENBQUM7SUFDekMsSUFBSSxLQUFVLEVBQUUsRUFrQmY7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm91bmRyeS12dHQtbW9kdWxlLXRlbXBsYXRlLy4vc3RhdGljL3RlbXBsYXRlcy9lbXB0eVRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vZm91bmRyeS12dHQtbW9kdWxlLXRlbXBsYXRlLy4vc3JjL21vZHVsZS9oZWxwZXIvVGVtcGxhdGVQcmVsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vZm91bmRyeS12dHQtbW9kdWxlLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZvdW5kcnktdnR0LW1vZHVsZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZm91bmRyeS12dHQtbW9kdWxlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm91bmRyeS12dHQtbW9kdWxlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm91bmRyeS12dHQtbW9kdWxlLXRlbXBsYXRlLy4vc3JjL2ZvdW5kcnlNb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI8IS0tXFxyXFxuICAgIFRoaXMgdGVtcGxhdGUgaXMgZW1wdHkgaW50ZW50aW9uYWxseSBzbyB0aGUgZGlyZWN0b3J5IGlzIG5vdCBlbXB0eVxcclxcbiAgICB3aGVuIHRoZSByZXBvc2l0b3J5IGlzIGZpcnN0IGJ1aWx0LlxcclxcblxcclxcbiAgICBSZW1vdmUgYW5kIHJlcGxhY2Ugd2l0aCB5b3VyIG93biB0ZW1wbGF0ZSBmaWxlcy5cXHJcXG4tLT5cIjsiLCJpbXBvcnQgXCIuLi8uLi8uLi9zdGF0aWMvdGVtcGxhdGVzL2VtcHR5VGVtcGxhdGUuaHRtbFwiO1xuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQcmVsb2FkZXIge1xuICAgIC8qKlxuICAgICAqIFByZWxvYWQgYSBzZXQgb2YgdGVtcGxhdGVzIHRvIGNvbXBpbGUgYW5kIGNhY2hlIHRoZW0gZm9yIGZhc3QgYWNjZXNzIGR1cmluZyByZW5kZXJpbmdcbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgcHJlbG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlUGF0aHMgPSBbXCJtb2R1bGVzL3RlbXBsYXRlL3RlbXBsYXRlcy9lbXB0eVRlbXBsYXRlLmh0bWxcIl07XG4gICAgICAgIHJldHVybiBsb2FkVGVtcGxhdGVzKHRlbXBsYXRlUGF0aHMpO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVGVtcGxhdGVQcmVsb2FkZXIgfSBmcm9tIFwiLi9tb2R1bGUvaGVscGVyL1RlbXBsYXRlUHJlbG9hZGVyXCI7XG5cbkhvb2tzLm9uY2UoXCJpbml0XCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09SE1SPT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKVxufSk7XG5cbkhvb2tzLm9uY2UoXCJyZWFkeVwiLCBhc3luYyAoKSA9PiB7XG4gICAgXG59KTtcblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG5cbiAgICAgICAgaWYgKG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09IFwiYXBwbHlcIikge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBpbiBfdGVtcGxhdGVDYWNoZSkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX3RlbXBsYXRlQ2FjaGUsIHRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RlbXBsYXRlQ2FjaGVbdGVtcGxhdGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgVGVtcGxhdGVQcmVsb2FkZXIucHJlbG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFwcGxpY2F0aW9uIGluIHVpLndpbmRvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh1aS53aW5kb3dzLCBhcHBsaWNhdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpLndpbmRvd3NbYXBwbGljYXRpb25dLnJlbmRlcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==