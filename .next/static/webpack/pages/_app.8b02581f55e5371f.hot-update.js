"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Star.js":
/*!********************************!*\
  !*** ./src/components/Star.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nfunction Star() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.svg, {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        fill: \"none\",\n        viewBox: \"0 0 24 24\",\n        strokeWidth: 1.5,\n        stroke: \"currentColor\",\n        className: \"w-16 h-16 bg-dark text-light flex items-center justify-center text-2x1 font-bold\",\n        bac: true,\n        whileHover: {\n            backgroundColor: [\n                \"#121212\",\n                \"rgba(131,58,180,1)\",\n                \"rgba(253,29,29,1)\",\n                \"rgba(252,176,69,1)\",\n                \"rgba(131,58,180,1)\",\n                \"#121212\"\n            ],\n            transition: {\n                duration: 1,\n                repeat: Infinity\n            }\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            strokeLinecap: \"round\",\n            strokeLinejoin: \"round\",\n            d: \"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\blog next\\\\src\\\\components\\\\Star.js\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\blog next\\\\src\\\\components\\\\Star.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_c = Star;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Star);\nvar _c;\n$RefreshReg$(_c, \"Star\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdGFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDYTtBQUd2QyxTQUFTRTtJQUNQLHFCQUNNLDhEQUFDRCxpREFBTUEsQ0FBQ0UsR0FBRztRQUNYQyxPQUFNO1FBQ05DLE1BQUs7UUFDTEMsU0FBUTtRQUNSQyxhQUFhO1FBQ2JDLFFBQU87UUFDUEMsV0FBVTtRQUFtRkMsR0FBRztRQUNoR0MsWUFBWTtZQUNWQyxpQkFBaUI7Z0JBQ2Y7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtZQUNEQyxZQUFZO2dCQUFFQyxVQUFVO2dCQUFHQyxRQUFRQztZQUFTO1FBQzlDO2tCQUVBLDRFQUFDQztZQUNDQyxlQUFjO1lBQ2RDLGdCQUFlO1lBQ2ZDLEdBQUU7Ozs7Ozs7Ozs7O0FBS1o7S0E3QlNsQjtBQStCVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TdGFyLmpzPzE2YjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFN0YXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8bW90aW9uLnN2Z1xyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICBzdHJva2VXaWR0aD17MS41fVxyXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGJnLWRhcmsgdGV4dC1saWdodCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LTJ4MSBmb250LWJvbGRcIiBiYWNcclxuICAgICAgICB3aGlsZUhvdmVyPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgXCIjMTIxMjEyXCIsXHJcbiAgICAgICAgICAgIFwicmdiYSgxMzEsNTgsMTgwLDEpXCIsXHJcbiAgICAgICAgICAgIFwicmdiYSgyNTMsMjksMjksMSlcIixcclxuICAgICAgICAgICAgXCJyZ2JhKDI1MiwxNzYsNjksMSlcIixcclxuICAgICAgICAgICAgXCJyZ2JhKDEzMSw1OCwxODAsMSlcIixcclxuICAgICAgICAgICAgXCIjMTIxMjEyXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSwgcmVwZWF0OiBJbmZpbml0eSB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgZD1cIk0xMS40OCAzLjQ5OWEuNTYyLjU2MiAwIDAgMSAxLjA0IDBsMi4xMjUgNS4xMTFhLjU2My41NjMgMCAwIDAgLjQ3NS4zNDVsNS41MTguNDQyYy40OTkuMDQuNzAxLjY2My4zMjEuOTg4bC00LjIwNCAzLjYwMmEuNTYzLjU2MyAwIDAgMC0uMTgyLjU1N2wxLjI4NSA1LjM4NWEuNTYyLjU2MiAwIDAgMS0uODQuNjFsLTQuNzI1LTIuODg1YS41NjIuNTYyIDAgMCAwLS41ODYgMEw2Ljk4MiAyMC41NGEuNTYyLjU2MiAwIDAgMS0uODQtLjYxbDEuMjg1LTUuMzg2YS41NjIuNTYyIDAgMCAwLS4xODItLjU1N2wtNC4yMDQtMy42MDJhLjU2Mi41NjIgMCAwIDEgLjMyMS0uOTg4bDUuNTE4LS40NDJhLjU2My41NjMgMCAwIDAgLjQ3NS0uMzQ1TDExLjQ4IDMuNVpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvbW90aW9uLnN2Zz5cclxuICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJTdGFyIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZVdpZHRoIiwic3Ryb2tlIiwiY2xhc3NOYW1lIiwiYmFjIiwid2hpbGVIb3ZlciIsImJhY2tncm91bmRDb2xvciIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInJlcGVhdCIsIkluZmluaXR5IiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Star.js\n"));

/***/ })

});