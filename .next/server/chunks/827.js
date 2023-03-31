exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 693:
/***/ ((module) => {

// Exports
module.exports = {
	"date": "GetDate_date__pjm4o",
	"slide-in-right": "GetDate_slide-in-right__hvy7V"
};


/***/ }),

/***/ 827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_GetDate_GetDate_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(693);
/* harmony import */ var _components_GetDate_GetDate_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_GetDate_GetDate_module_css__WEBPACK_IMPORTED_MODULE_2__);



const GetDate = ()=>{
    const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const dateOptions = {
            month: "long",
            day: "numeric"
        };
        const dayOptions = {
            weekday: "long"
        };
        const currentDate = new Date();
        const formattedDate = `
        ${currentDate.toLocaleDateString("en-US", dateOptions)} -
        ${currentDate.toLocaleDateString("en-US", dayOptions)}
        `;
        setCurrentDate(formattedDate);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_components_GetDate_GetDate_module_css__WEBPACK_IMPORTED_MODULE_2___default().date),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: currentDate
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetDate);


/***/ })

};
;