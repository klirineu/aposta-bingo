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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; },\n/* harmony export */   \"CardIcon\": function() { return /* binding */ CardIcon; },\n/* harmony export */   \"CardNumber\": function() { return /* binding */ CardNumber; },\n/* harmony export */   \"CardText\": function() { return /* binding */ CardText; },\n/* harmony export */   \"Cards\": function() { return /* binding */ Cards; },\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Text\": function() { return /* binding */ Text; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-bdup4u-0\"\n})([\"display:flex;justify-content:center;flex-direction:column;background-color:var(--green-background);\"]);\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2.withConfig({\n  displayName: \"styles__Text\",\n  componentId: \"sc-bdup4u-1\"\n})([\"color:white;font-size:40px;font-weight:bold;&:first-child{padding-top:40px;}text-transform:uppercase;\"]);\nconst Cards = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Cards\",\n  componentId: \"sc-bdup4u-2\"\n})([\"margin-top:50px;display:flex;flex-wrap:wrap;justify-content:center;\"]);\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h3.withConfig({\n  displayName: \"styles__Title\",\n  componentId: \"sc-bdup4u-3\"\n})([\"color:white;\"]);\nconst Card = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Card\",\n  componentId: \"sc-bdup4u-4\"\n})([\"text-align:center;width:250px;background-color:white;padding:20px;border-radius:30px;margin:40px 20px;\"]);\nconst CardNumber = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"styles__CardNumber\",\n  componentId: \"sc-bdup4u-5\"\n})([\"margin-left:70px;width:65px;height:65px;padding-top:10px;background:white;margin-top:-50px;margin-bottom:20px;border-radius:70px;border:3px solid var(--green-background);font-size:30px;color:var(--green-background);font-weight:bold;\"]);\nconst CardIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img.withConfig({\n  displayName: \"styles__CardIcon\",\n  componentId: \"sc-bdup4u-6\"\n})([\"width:40px;margin-top:20px;\"]);\nconst CardText = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"styles__CardText\",\n  componentId: \"sc-bdup4u-7\"\n})([\"color:var(--green-background);margin-top:30px;font-size:15px;\"]);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uMy9zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxTQUFTLEdBQUdELDRFQUFIO0FBQUE7QUFBQTtBQUFBLDJHQUFmO0FBUUEsTUFBTUcsSUFBSSxHQUFHSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSw2R0FBVjtBQVVBLE1BQU1LLEtBQUssR0FBR0wsd0VBQUg7QUFBQTtBQUFBO0FBQUEsMkVBQVg7QUFPQSxNQUFNTyxLQUFLLEdBQUdQLHVFQUFIO0FBQUE7QUFBQTtBQUFBLG9CQUFYO0FBSUEsTUFBTVMsSUFBSSxHQUFHVCx3RUFBSDtBQUFBO0FBQUE7QUFBQSw4R0FBVjtBQVNBLE1BQU1VLFVBQVUsR0FBR1Ysc0VBQUg7QUFBQTtBQUFBO0FBQUEsZ1BBQWhCO0FBZUEsTUFBTVksUUFBUSxHQUFHWix3RUFBSDtBQUFBO0FBQUE7QUFBQSxtQ0FBZDtBQUtBLE1BQU1jLFFBQVEsR0FBR2Qsc0VBQUg7QUFBQTtBQUFBO0FBQUEscUVBQWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbjMvc3R5bGVzLnRzP2NjYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tYmFja2dyb3VuZCk7XHJcbiAgXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmgyYFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICB9XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRzID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDNgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgbWFyZ2luOiA0MHB4IDIwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkTnVtYmVyID0gc3R5bGVkLnBgXHJcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNzBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ncmVlbi1iYWNrZ3JvdW5kKTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHZhcigtLWdyZWVuLWJhY2tncm91bmQpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZEljb24gPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkVGV4dCA9IHN0eWxlZC5wYFxyXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi1iYWNrZ3JvdW5kKTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuYFxyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwic2VjdGlvbiIsIlRleHQiLCJoMiIsIkNhcmRzIiwiZGl2IiwiVGl0bGUiLCJoMyIsIkNhcmQiLCJDYXJkTnVtYmVyIiwicCIsIkNhcmRJY29uIiwiaW1nIiwiQ2FyZFRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Section3/styles.ts\n");

/***/ })

});