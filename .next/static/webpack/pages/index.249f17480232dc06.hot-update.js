"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Section3/styles.ts":
/*!*******************************************!*\
  !*** ./src/components/Section3/styles.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; },\n/* harmony export */   \"CardIcon\": function() { return /* binding */ CardIcon; },\n/* harmony export */   \"CardNumber\": function() { return /* binding */ CardNumber; },\n/* harmony export */   \"CardText\": function() { return /* binding */ CardText; },\n/* harmony export */   \"Cards\": function() { return /* binding */ Cards; },\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Text\": function() { return /* binding */ Text; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-bdup4u-0\"\n})([\"width:100%;display:flex;background-color:var(--green-background);\"]);\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2.withConfig({\n  displayName: \"styles__Text\",\n  componentId: \"sc-bdup4u-1\"\n})([\"justify-self:flex-start;color:white;font-size:40px;font-weight:bold;&:first-child{padding-top:40px;}padding-left:40px;text-transform:uppercase;\"]);\nconst Cards = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Cards\",\n  componentId: \"sc-bdup4u-2\"\n})([\"margin-top:50px;display:flex;justify-content:center;\"]);\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h3.withConfig({\n  displayName: \"styles__Title\",\n  componentId: \"sc-bdup4u-3\"\n})([\"align-self:flex-start;color:white;\"]);\nconst Card = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Card\",\n  componentId: \"sc-bdup4u-4\"\n})([\"text-align:center;width:250px;background-color:white;padding:20px;border-radius:30px;margin:40px 20px;\"]);\nconst CardNumber = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"styles__CardNumber\",\n  componentId: \"sc-bdup4u-5\"\n})([\"margin-left:70px;width:65px;height:65px;padding-top:10px;background:white;margin-top:-50px;margin-bottom:20px;border-radius:70px;border:3px solid var(--green-background);font-size:30px;color:var(--green-background);font-weight:bold;\"]);\nconst CardIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img.withConfig({\n  displayName: \"styles__CardIcon\",\n  componentId: \"sc-bdup4u-6\"\n})([\"width:40px;margin-top:20px;\"]);\nconst CardText = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"styles__CardText\",\n  componentId: \"sc-bdup4u-7\"\n})([\"color:var(--green-background);margin-top:30px;font-size:15px;\"]);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uMy9zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxTQUFTLEdBQUdELDRFQUFIO0FBQUE7QUFBQTtBQUFBLHlFQUFmO0FBT0EsTUFBTUcsSUFBSSxHQUFHSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSx1SkFBVjtBQVlBLE1BQU1LLEtBQUssR0FBR0wsd0VBQUg7QUFBQTtBQUFBO0FBQUEsNERBQVg7QUFNQSxNQUFNTyxLQUFLLEdBQUdQLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDBDQUFYO0FBS0EsTUFBTVMsSUFBSSxHQUFHVCx3RUFBSDtBQUFBO0FBQUE7QUFBQSw4R0FBVjtBQVNBLE1BQU1VLFVBQVUsR0FBR1Ysc0VBQUg7QUFBQTtBQUFBO0FBQUEsZ1BBQWhCO0FBZUEsTUFBTVksUUFBUSxHQUFHWix3RUFBSDtBQUFBO0FBQUE7QUFBQSxtQ0FBZDtBQUtBLE1BQU1jLFFBQVEsR0FBR2Qsc0VBQUg7QUFBQTtBQUFBO0FBQUEscUVBQWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbjMvc3R5bGVzLnRzP2NjYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxud2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1iYWNrZ3JvdW5kKTtcclxuICBcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQuaDJgXHJcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICB9XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkcyA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDNgXHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBjb2xvcjogd2hpdGU7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBtYXJnaW46IDQwcHggMjBweDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcmROdW1iZXIgPSBzdHlsZWQucGBcclxuICBtYXJnaW4tbGVmdDogNzBweDtcclxuICB3aWR0aDogNjVweDtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA3MHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWdyZWVuLWJhY2tncm91bmQpO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogdmFyKC0tZ3JlZW4tYmFja2dyb3VuZCk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkSWNvbiA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRUZXh0ID0gc3R5bGVkLnBgXHJcbiAgY29sb3I6IHZhcigtLWdyZWVuLWJhY2tncm91bmQpO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG5gXHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb250YWluZXIiLCJzZWN0aW9uIiwiVGV4dCIsImgyIiwiQ2FyZHMiLCJkaXYiLCJUaXRsZSIsImgzIiwiQ2FyZCIsIkNhcmROdW1iZXIiLCJwIiwiQ2FyZEljb24iLCJpbWciLCJDYXJkVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Section3/styles.ts\n");

/***/ })

});