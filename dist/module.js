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
/*!********************************!*\
  !*** ./src/forgottenRelics.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_helper_TemplatePreloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/helper/TemplatePreloader */ "./src/module/helper/TemplatePreloader.ts");

console.log("Hello World! This code runs immediately when the file is loaded.");
Hooks.once("init", async () => {
    console.log("=============================HMR============================");
    console.log("This code runs once the Foundry VTT software begins its initialization workflow.");
});
Hooks.once("ready", async () => {
    console.log("This code runs once core initialization is ready and game data is available.");
});
if (true) {
    if (false) {}
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUsOExBQThMOzs7Ozs7Ozs7Ozs7Ozs7QUNBdko7QUFFL0MsTUFBTSxpQkFBaUI7SUFDNUI7O09BRUc7SUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDLDBCQUEwQjtRQUNyQyxNQUFNLGFBQWEsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDeEUsT0FBTyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGOzs7Ozs7O1VDVkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOc0U7QUFFdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO0FBRWhGLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOERBQThELENBQUMsQ0FBQztJQUM1RSxPQUFPLENBQUMsR0FBRyxDQUNULGtGQUFrRixDQUNuRixDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtJQUM3QixPQUFPLENBQUMsR0FBRyxDQUNULDhFQUE4RSxDQUMvRSxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLElBQXNDLEVBQUUsQ0FBQztJQUMzQyxJQUFJLEtBQVUsRUFBRSxFQWtCZjtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3VuZHJ5LXZ0dC1tb2QtMDAxLWZvcmdvdHRlbi1yZWxpY3MvLi9zdGF0aWMvdGVtcGxhdGVzL2VtcHR5VGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly9mb3VuZHJ5LXZ0dC1tb2QtMDAxLWZvcmdvdHRlbi1yZWxpY3MvLi9zcmMvbW9kdWxlL2hlbHBlci9UZW1wbGF0ZVByZWxvYWRlci50cyIsIndlYnBhY2s6Ly9mb3VuZHJ5LXZ0dC1tb2QtMDAxLWZvcmdvdHRlbi1yZWxpY3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm91bmRyeS12dHQtbW9kLTAwMS1mb3Jnb3R0ZW4tcmVsaWNzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mb3VuZHJ5LXZ0dC1tb2QtMDAxLWZvcmdvdHRlbi1yZWxpY3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb3VuZHJ5LXZ0dC1tb2QtMDAxLWZvcmdvdHRlbi1yZWxpY3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb3VuZHJ5LXZ0dC1tb2QtMDAxLWZvcmdvdHRlbi1yZWxpY3MvLi9zcmMvZm9yZ290dGVuUmVsaWNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiPCEtLVxcclxcbiAgICBUaGlzIHRlbXBsYXRlIGlzIGVtcHR5IGludGVudGlvbmFsbHkgc28gdGhlIGRpcmVjdG9yeSBpcyBub3QgZW1wdHlcXHJcXG4gICAgd2hlbiB0aGUgcmVwb3NpdG9yeSBpcyBmaXJzdCBidWlsdC5cXHJcXG5cXHJcXG4gICAgUmVtb3ZlIGFuZCByZXBsYWNlIHdpdGggeW91ciBvd24gdGVtcGxhdGUgZmlsZXMuXFxyXFxuLS0+XCI7IiwiaW1wb3J0IFwiLi4vLi4vLi4vc3RhdGljL3RlbXBsYXRlcy9lbXB0eVRlbXBsYXRlLmh0bWxcIjtcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUHJlbG9hZGVyIHtcbiAgLyoqXG4gICAqIFByZWxvYWQgYSBzZXQgb2YgdGVtcGxhdGVzIHRvIGNvbXBpbGUgYW5kIGNhY2hlIHRoZW0gZm9yIGZhc3QgYWNjZXNzIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIHN0YXRpYyBhc3luYyBwcmVsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcygpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZVBhdGhzID0gW1wibW9kdWxlcy90ZW1wbGF0ZS90ZW1wbGF0ZXMvZW1wdHlUZW1wbGF0ZS5odG1sXCJdO1xuICAgIHJldHVybiBsb2FkVGVtcGxhdGVzKHRlbXBsYXRlUGF0aHMpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRlbXBsYXRlUHJlbG9hZGVyIH0gZnJvbSBcIi4vbW9kdWxlL2hlbHBlci9UZW1wbGF0ZVByZWxvYWRlclwiO1xuXG5jb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkISBUaGlzIGNvZGUgcnVucyBpbW1lZGlhdGVseSB3aGVuIHRoZSBmaWxlIGlzIGxvYWRlZC5cIik7XG5cbkhvb2tzLm9uY2UoXCJpbml0XCIsIGFzeW5jICgpID0+IHtcbiAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PUhNUj09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIik7XG4gIGNvbnNvbGUubG9nKFxuICAgIFwiVGhpcyBjb2RlIHJ1bnMgb25jZSB0aGUgRm91bmRyeSBWVFQgc29mdHdhcmUgYmVnaW5zIGl0cyBpbml0aWFsaXphdGlvbiB3b3JrZmxvdy5cIixcbiAgKTtcbn0pO1xuXG5Ib29rcy5vbmNlKFwicmVhZHlcIiwgYXN5bmMgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcbiAgICBcIlRoaXMgY29kZSBydW5zIG9uY2UgY29yZSBpbml0aWFsaXphdGlvbiBpcyByZWFkeSBhbmQgZ2FtZSBkYXRhIGlzIGF2YWlsYWJsZS5cIixcbiAgKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICBpZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG5cbiAgICBpZiAobW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gXCJhcHBseVwiKSB7XG4gICAgICBmb3IgKGNvbnN0IHRlbXBsYXRlIGluIF90ZW1wbGF0ZUNhY2hlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX3RlbXBsYXRlQ2FjaGUsIHRlbXBsYXRlKSkge1xuICAgICAgICAgIGRlbGV0ZSBfdGVtcGxhdGVDYWNoZVt0ZW1wbGF0ZV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgVGVtcGxhdGVQcmVsb2FkZXIucHJlbG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBhcHBsaWNhdGlvbiBpbiB1aS53aW5kb3dzKSB7XG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh1aS53aW5kb3dzLCBhcHBsaWNhdGlvbikpIHtcbiAgICAgICAgICAgIHVpLndpbmRvd3NbYXBwbGljYXRpb25dLnJlbmRlcih0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9