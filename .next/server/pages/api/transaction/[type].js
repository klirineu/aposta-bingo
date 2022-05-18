"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/transaction/[type]";
exports.ids = ["pages/api/transaction/[type]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./src/configs/axios.ts":
/*!******************************!*\
  !*** ./src/configs/axios.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pagarme\": () => (/* binding */ pagarme)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pagarme = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: \"https://api.pagar.me/core/v5\"\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29uZmlncy9heGlvcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVPLE1BQU1DLE9BQU8sR0FBR0QsbURBQUEsQ0FBYTtBQUNsQ0csRUFBQUEsT0FBTyxFQUFFO0FBRHlCLENBQWIsQ0FBaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kdG1vbmV5Ly4vc3JjL2NvbmZpZ3MvYXhpb3MudHM/ZDVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcGFnYXJtZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogXCJodHRwczovL2FwaS5wYWdhci5tZS9jb3JlL3Y1XCIsXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJwYWdhcm1lIiwiY3JlYXRlIiwiYmFzZVVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/configs/axios.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/transaction/[type].tsx":
/*!**********************************************!*\
  !*** ./src/pages/api/transaction/[type].tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pay)\n/* harmony export */ });\n/* harmony import */ var _configs_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../configs/axios */ \"(api)/./src/configs/axios.ts\");\n\nasync function pay(request, response) {\n  const {\n    method\n  } = request;\n  const {\n    type\n  } = request.query;\n\n  if (method === \"GET\") {\n    return response.status(404).json({\n      message: \"Cannot get\"\n    });\n  }\n\n  if (method === \"POST\") {\n    const newTransaction = request.body;\n\n    if (!newTransaction) {\n      return response.status(404).json({\n        message: \"The fields are mandatory\"\n      });\n    }\n\n    if (newTransaction.payments.payment_method !== \"credit_card\") {\n      return response.status(404).json({\n        message: \"The payment method is not valid\"\n      });\n    }\n\n    try {\n      const data = await _configs_axios__WEBPACK_IMPORTED_MODULE_0__.pagarme.post(\"/orders/\", newTransaction);\n      return response.status(201).json({\n        message: data\n      });\n    } catch (error) {\n      return response.status(500).json({\n        message: error\n      });\n    }\n  }\n} // | \"debit_card\" | \"boleto\" | \"pix\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RyYW5zYWN0aW9uL1t0eXBlXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTtBQUdlLGVBQWVDLEdBQWYsQ0FDYkMsT0FEYSxFQUViQyxRQUZhLEVBR2I7QUFDQSxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBYUYsT0FBbkI7QUFDQSxRQUFNO0FBQUVHLElBQUFBO0FBQUYsTUFBV0gsT0FBTyxDQUFDSSxLQUF6Qjs7QUFFQSxNQUFJRixNQUFNLEtBQUssS0FBZixFQUFzQjtBQUNwQixXQUFPRCxRQUFRLENBQUNJLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQTFCLENBQVA7QUFDRDs7QUFFRCxNQUFJTCxNQUFNLEtBQUssTUFBZixFQUF1QjtBQUNyQixVQUFNTSxjQUE0QixHQUFHUixPQUFPLENBQUNTLElBQTdDOztBQUVBLFFBQUksQ0FBQ0QsY0FBTCxFQUFxQjtBQUNuQixhQUFPUCxRQUFRLENBQUNJLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCO0FBQUVDLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQTFCLENBQVA7QUFDRDs7QUFDRCxRQUFJQyxjQUFjLENBQUNFLFFBQWYsQ0FBd0JDLGNBQXhCLEtBQTJDLGFBQS9DLEVBQThEO0FBQzVELGFBQU9WLFFBQVEsQ0FDWkksTUFESSxDQUNHLEdBREgsRUFFSkMsSUFGSSxDQUVDO0FBQUVDLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BRkQsQ0FBUDtBQUdEOztBQUNELFFBQUk7QUFDRixZQUFNSyxJQUFJLEdBQUcsTUFBTWQsd0RBQUEsQ0FBYSxVQUFiLEVBQXlCVSxjQUF6QixDQUFuQjtBQUVBLGFBQU9QLFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQixHQUFoQixFQUFxQkMsSUFBckIsQ0FBMEI7QUFBRUMsUUFBQUEsT0FBTyxFQUFFSztBQUFYLE9BQTFCLENBQVA7QUFDRCxLQUpELENBSUUsT0FBT0UsS0FBUCxFQUFjO0FBQ2QsYUFBT2IsUUFBUSxDQUFDSSxNQUFULENBQWdCLEdBQWhCLEVBQXFCQyxJQUFyQixDQUEwQjtBQUFFQyxRQUFBQSxPQUFPLEVBQUVPO0FBQVgsT0FBMUIsQ0FBUDtBQUNEO0FBQ0Y7QUFDRixFQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHRtb25leS8uL3NyYy9wYWdlcy9hcGkvdHJhbnNhY3Rpb24vW3R5cGVdLnRzeD9hNjlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBwYWdhcm1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZ3MvYXhpb3NcIjtcclxuaW1wb3J0IHsgSUNyZWRpdFByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZS9uZXdUcmFuc2FjdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcGF5KFxyXG4gIHJlcXVlc3Q6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlc3BvbnNlOiBOZXh0QXBpUmVzcG9uc2VcclxuKSB7XHJcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcXVlc3Q7XHJcbiAgY29uc3QgeyB0eXBlIH0gPSByZXF1ZXN0LnF1ZXJ5O1xyXG5cclxuICBpZiAobWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiQ2Fubm90IGdldFwiIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IG5ld1RyYW5zYWN0aW9uOiBJQ3JlZGl0UHJvcHMgPSByZXF1ZXN0LmJvZHk7XHJcblxyXG4gICAgaWYgKCFuZXdUcmFuc2FjdGlvbikge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiVGhlIGZpZWxkcyBhcmUgbWFuZGF0b3J5XCIgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAobmV3VHJhbnNhY3Rpb24ucGF5bWVudHMucGF5bWVudF9tZXRob2QgIT09IFwiY3JlZGl0X2NhcmRcIikge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAuc3RhdHVzKDQwNClcclxuICAgICAgICAuanNvbih7IG1lc3NhZ2U6IFwiVGhlIHBheW1lbnQgbWV0aG9kIGlzIG5vdCB2YWxpZFwiIH0pO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHBhZ2FybWUucG9zdChcIi9vcmRlcnMvXCIsIG5ld1RyYW5zYWN0aW9uKTtcclxuXHJcbiAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyB8IFwiZGViaXRfY2FyZFwiIHwgXCJib2xldG9cIiB8IFwicGl4XCJcclxuIl0sIm5hbWVzIjpbInBhZ2FybWUiLCJwYXkiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJtZXRob2QiLCJ0eXBlIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm5ld1RyYW5zYWN0aW9uIiwiYm9keSIsInBheW1lbnRzIiwicGF5bWVudF9tZXRob2QiLCJkYXRhIiwicG9zdCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/transaction/[type].tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/transaction/[type].tsx"));
module.exports = __webpack_exports__;

})();