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
    game.customMacros = {
        myCustomFunction: myCustomFunction,
    };
    // Automatically create the macro if it doesn't exist
    const macroName = "Trigger Custom Function";
    let macro = game.macros.find((m) => m.name === macroName);
    if (!macro) {
        macro = await Macro.create({
            name: macroName,
            type: "script",
            img: "icons/svg/dice-target.svg",
            command: "game.customMacros.myCustomFunction();",
            flags: { "custom-macro-module": true },
        });
        if (ui.notifications) {
            ui.notifications.info("Custom macro created: " + macroName);
        }
    }
});
function myCustomFunction() {
    if (ui.notifications) {
        ui.notifications.info("Custom function triggered by macro!");
        // Add custom logic here
    }
}
Hooks.on("canvasReady", async (canvas) => {
    var _a;
    console.log("Canvas Ready", canvas.scene);
    switch ((_a = canvas.scene) === null || _a === void 0 ? void 0 : _a.name) {
        case "Scene 1":
            console.log("Init the Scene 1 behaviors");
            break;
        case "Scene 2":
            console.log("Init the Scene 2 behaviors");
            break;
        default:
            console.log("Unknown Scene loaded");
    }
});
if (true) {
    if (false) {}
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE0QixDQUFDLENBQUM7WUFDMUMsTUFBTTtRQUNSO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksSUFBc0MsRUFBRSxDQUFDO0lBQzNDLElBQUksS0FBVSxFQUFFLEVBa0JmO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZvdW5kcnktdnR0LW1vZC0wMDEtZm9yZ290dGVuLXJlbGljcy8uL3N0YXRpYy90ZW1wbGF0ZXMvZW1wdHlUZW1wbGF0ZS5odG1sIiwid2VicGFjazovL2ZvdW5kcnktdnR0LW1vZC0wMDEtZm9yZ290dGVuLXJlbGljcy8uL3NyYy9tb2R1bGUvaGVscGVyL1RlbXBsYXRlUHJlbG9hZGVyLnRzIiwid2VicGFjazovL2ZvdW5kcnktdnR0LW1vZC0wMDEtZm9yZ290dGVuLXJlbGljcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb3VuZHJ5LXZ0dC1tb2QtMDAxLWZvcmdvdHRlbi1yZWxpY3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZvdW5kcnktdnR0LW1vZC0wMDEtZm9yZ290dGVuLXJlbGljcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZvdW5kcnktdnR0LW1vZC0wMDEtZm9yZ290dGVuLXJlbGljcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZvdW5kcnktdnR0LW1vZC0wMDEtZm9yZ290dGVuLXJlbGljcy8uL3NyYy9mb3Jnb3R0ZW5SZWxpY3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI8IS0tXFxyXFxuICAgIFRoaXMgdGVtcGxhdGUgaXMgZW1wdHkgaW50ZW50aW9uYWxseSBzbyB0aGUgZGlyZWN0b3J5IGlzIG5vdCBlbXB0eVxcclxcbiAgICB3aGVuIHRoZSByZXBvc2l0b3J5IGlzIGZpcnN0IGJ1aWx0LlxcclxcblxcclxcbiAgICBSZW1vdmUgYW5kIHJlcGxhY2Ugd2l0aCB5b3VyIG93biB0ZW1wbGF0ZSBmaWxlcy5cXHJcXG4tLT5cIjsiLCJpbXBvcnQgXCIuLi8uLi8uLi9zdGF0aWMvdGVtcGxhdGVzL2VtcHR5VGVtcGxhdGUuaHRtbFwiO1xuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQcmVsb2FkZXIge1xuICAvKipcbiAgICogUHJlbG9hZCBhIHNldCBvZiB0ZW1wbGF0ZXMgdG8gY29tcGlsZSBhbmQgY2FjaGUgdGhlbSBmb3IgZmFzdCBhY2Nlc3MgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIHByZWxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlUGF0aHMgPSBbXCJtb2R1bGVzL3RlbXBsYXRlL3RlbXBsYXRlcy9lbXB0eVRlbXBsYXRlLmh0bWxcIl07XG4gICAgcmV0dXJuIGxvYWRUZW1wbGF0ZXModGVtcGxhdGVQYXRocyk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVGVtcGxhdGVQcmVsb2FkZXIgfSBmcm9tIFwiLi9tb2R1bGUvaGVscGVyL1RlbXBsYXRlUHJlbG9hZGVyXCI7XG5cbmNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGQhIFRoaXMgY29kZSBydW5zIGltbWVkaWF0ZWx5IHdoZW4gdGhlIGZpbGUgaXMgbG9hZGVkLlwiKTtcblxuSG9va3Mub25jZShcImluaXRcIiwgYXN5bmMgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09SE1SPT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKTtcbiAgY29uc29sZS5sb2coXG4gICAgXCJUaGlzIGNvZGUgcnVucyBvbmNlIHRoZSBGb3VuZHJ5IFZUVCBzb2Z0d2FyZSBiZWdpbnMgaXRzIGluaXRpYWxpemF0aW9uIHdvcmtmbG93LlwiLFxuICApO1xufSk7XG5cbkhvb2tzLm9uY2UoXCJyZWFkeVwiLCBhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFxuICAgIFwiVGhpcyBjb2RlIHJ1bnMgb25jZSBjb3JlIGluaXRpYWxpemF0aW9uIGlzIHJlYWR5IGFuZCBnYW1lIGRhdGEgaXMgYXZhaWxhYmxlLlwiLFxuICApO1xuXG4gIChnYW1lIGFzIGFueSkuY3VzdG9tTWFjcm9zID0ge1xuICAgIG15Q3VzdG9tRnVuY3Rpb246IG15Q3VzdG9tRnVuY3Rpb24sXG4gIH07XG5cbiAgLy8gQXV0b21hdGljYWxseSBjcmVhdGUgdGhlIG1hY3JvIGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgY29uc3QgbWFjcm9OYW1lID0gXCJUcmlnZ2VyIEN1c3RvbSBGdW5jdGlvblwiO1xuICBsZXQgbWFjcm8gPSAoZ2FtZSBhcyBhbnkpLm1hY3Jvcy5maW5kKChtKSA9PiBtLm5hbWUgPT09IG1hY3JvTmFtZSk7XG5cbiAgaWYgKCFtYWNybykge1xuICAgIG1hY3JvID0gYXdhaXQgTWFjcm8uY3JlYXRlKHtcbiAgICAgIG5hbWU6IG1hY3JvTmFtZSxcbiAgICAgIHR5cGU6IFwic2NyaXB0XCIsXG4gICAgICBpbWc6IFwiaWNvbnMvc3ZnL2RpY2UtdGFyZ2V0LnN2Z1wiLFxuICAgICAgY29tbWFuZDogXCJnYW1lLmN1c3RvbU1hY3Jvcy5teUN1c3RvbUZ1bmN0aW9uKCk7XCIsXG4gICAgICBmbGFnczogeyBcImN1c3RvbS1tYWNyby1tb2R1bGVcIjogdHJ1ZSB9LFxuICAgIH0pO1xuXG4gICAgaWYgKHVpLm5vdGlmaWNhdGlvbnMpIHtcbiAgICAgIHVpLm5vdGlmaWNhdGlvbnMuaW5mbyhcIkN1c3RvbSBtYWNybyBjcmVhdGVkOiBcIiArIG1hY3JvTmFtZSk7XG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gbXlDdXN0b21GdW5jdGlvbigpIHtcbiAgaWYgKHVpLm5vdGlmaWNhdGlvbnMpIHtcbiAgICB1aS5ub3RpZmljYXRpb25zLmluZm8oXCJDdXN0b20gZnVuY3Rpb24gdHJpZ2dlcmVkIGJ5IG1hY3JvIVwiKTtcbiAgICAvLyBBZGQgY3VzdG9tIGxvZ2ljIGhlcmVcbiAgfVxufVxuXG5Ib29rcy5vbihcImNhbnZhc1JlYWR5XCIsIGFzeW5jIChjYW52YXMpID0+IHtcbiAgY29uc29sZS5sb2coXCJDYW52YXMgUmVhZHlcIiwgY2FudmFzLnNjZW5lKTtcblxuICBzd2l0Y2ggKGNhbnZhcy5zY2VuZT8ubmFtZSkge1xuICAgIGNhc2UgXCJTY2VuZSAxXCI6XG4gICAgICBjb25zb2xlLmxvZyhcIkluaXQgdGhlIFNjZW5lIDEgYmVoYXZpb3JzXCIpO1xuXG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiU2NlbmUgMlwiOlxuICAgICAgY29uc29sZS5sb2coXCJJbml0IHRoZSBTY2VuZSAyIGJlaGF2aW9yc1wiKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmxvZyhcIlVua25vd24gU2NlbmUgbG9hZGVkXCIpO1xuICB9XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuXG4gICAgaWYgKG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09IFwiYXBwbHlcIikge1xuICAgICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBpbiBfdGVtcGxhdGVDYWNoZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF90ZW1wbGF0ZUNhY2hlLCB0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICBkZWxldGUgX3RlbXBsYXRlQ2FjaGVbdGVtcGxhdGVdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFRlbXBsYXRlUHJlbG9hZGVyLnByZWxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKCkudGhlbigoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgYXBwbGljYXRpb24gaW4gdWkud2luZG93cykge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodWkud2luZG93cywgYXBwbGljYXRpb24pKSB7XG4gICAgICAgICAgICB1aS53aW5kb3dzW2FwcGxpY2F0aW9uXS5yZW5kZXIodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==