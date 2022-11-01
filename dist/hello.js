"use strict";
(self["webpackChunkbelajar_webpack_code"] = self["webpackChunkbelajar_webpack_code"] || []).push([["hello"],{

/***/ "./src/hello.js":
/*!**********************!*\
  !*** ./src/hello.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var mahasiswa = [{
  nama: "drian",
  email: "r@d.p",
  jurusan: "ti"
}, {
  nama: "yoda",
  email: "r@f.s",
  jurusan: "ibs"
}, {
  nama: "basa",
  email: "j@k.n",
  jurusan: "men"
}];
var mhs = lodash__WEBPACK_IMPORTED_MODULE_0___default().find(mahasiswa, {
  nama: "drian"
});
console.log(mhs);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/hello.js"));
/******/ }
]);