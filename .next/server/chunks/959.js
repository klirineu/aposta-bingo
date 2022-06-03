"use strict";
exports.id = 959;
exports.ids = [959];
exports.modules = {

/***/ 959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Header/styles.ts

const Container = external_styled_components_default().header.withConfig({
  displayName: "styles__Container",
  componentId: "sc-11e7nze-0"
})(["min-width:1200px;padding:40px;display:flex;flex-direction:row;justify-content:space-between;"]);
const TextHeader = external_styled_components_default().strong.withConfig({
  displayName: "styles__TextHeader",
  componentId: "sc-11e7nze-1"
})(["margin-left:20px;font-size:20px;font-weight:bold;cursor:pointer;"]);
const ButtonHeader = external_styled_components_default().button.withConfig({
  displayName: "styles__ButtonHeader",
  componentId: "sc-11e7nze-2"
})(["width:180px;height:37px;border-radius:50px;background:transparent;border:1px solid #40E550;color:#40E550;margin-left:20px;font-size:20px;font-weight:bold;&:hover{border:none;background:var(--green);color:white;}"]);
const LogoHeader = external_styled_components_default().img.withConfig({
  displayName: "styles__LogoHeader",
  componentId: "sc-11e7nze-3"
})(["width:150px;height:150px;margin-left:50px;"]);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx




function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(LogoHeader, {
        src: "/assets/logo.svg",
        alt: "logo"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        marginLeft: -300,
        marginTop: 10
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(TextHeader, {
        children: "Como funciona"
      }), /*#__PURE__*/jsx_runtime_.jsx(TextHeader, {
        children: "Resultados"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/jogo",
        children: /*#__PURE__*/jsx_runtime_.jsx(ButtonHeader, {
          children: "Comprar bilhete"
        })
      })
    })]
  });
}

/***/ })

};
;