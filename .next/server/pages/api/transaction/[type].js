"use strict";
(() => {
var exports = {};
exports.id = 636;
exports.ids = [636];
exports.modules = {

/***/ 766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pay)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./src/configs/axios.ts

const pagarme = external_axios_default().create({
  baseURL: "https://api.pagar.me/core/v5"
});
;// CONCATENATED MODULE: ./src/services/credit_card.ts

async function creaditCard(data) {
  try {
    const response = await pagarme.post("/orders/", data);
    return response;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}
;// CONCATENATED MODULE: ./src/services/debit_card.ts

async function debitCard(data) {
  try {
    const response = await pagarme.post("/orders/", data);
    return response;
  } catch (error) {
    throw new Error("Internal server error");
  }
}
;// CONCATENATED MODULE: ./src/services/pix.ts

async function pixType(data) {
  try {
    const response = await pagarme.post("/order/", data);
    return response;
  } catch (e) {
    throw new Error("Internal server Error");
  }
}
;// CONCATENATED MODULE: ./src/pages/api/transaction/[type].tsx



async function pay(request, response) {
  const {
    method
  } = request;
  const {
    type
  } = request.query;

  if (method === "GET") {
    return response.status(404).json({
      message: "Cannot get"
    });
  }

  if (method === "POST") {
    const newTransaction = request.body;

    if (!newTransaction) {
      return response.status(404).json({
        message: "The fields are mandatory"
      });
    }

    switch (type) {
      case "credit_card":
        {
          try {
            const data = await creaditCard(newTransaction);
            return response.status(404).json(data);
          } catch (error) {
            return response.status(500).json(error);
          }
        }

      case "debit_card":
        {
          try {
            const data = await debitCard(newTransaction);
            return response.status(201).json(data);
          } catch (error) {
            return response.status(500).json(error);
          }
        }

      case "pix":
        {
          try {
            const data = await pixType(newTransaction);
            return response.status(201).json(data);
          } catch (error) {
            return response.status(500).json(error);
          }
        }
    }
  }
} // | "debit_card" | "boleto" | "pix"

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(766));
module.exports = __webpack_exports__;

})();