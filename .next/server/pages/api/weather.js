"use strict";
(() => {
var exports = {};
exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchWeather)
/* harmony export */ });
async function fetchWeather(query) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${"f8fe6389d7486cf3724e283f6fb7deaa"}&units=metric`);
    const data = await response.json();
    console.log(data);
    return data;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(431));
module.exports = __webpack_exports__;

})();