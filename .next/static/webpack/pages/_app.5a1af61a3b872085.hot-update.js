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

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href, title, className = \"\" } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"\\n            h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 \\n            group-hover:w-full transition-[width] ease duration-300\\n            \".concat(router.asPath === href ? \"w-full\" : \"w-0\", \"\\n            dark:bg-light\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    _s1();\n    const [mode, setMode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [isOpen, setisOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const handleClick = ()=>{\n        setisOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between fixed top-0 z-50 bg-light dark:bg-dark dark:text-light lg:px-16 md:px-12 sm:px-8 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex-col justify-center items-center hidden lg:flex\",\n                onClick: handleClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm \".concat(isOpen ? \"rotate-45 translate-y-1\" : \"-translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 \".concat(isOpen ? \"opacity-0\" : \"opacity-100\", \" \")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm \".concat(isOpen ? \"-rotate-45 -translate-y-1\" : \"translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center justify-center flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://github.com/alanalveses\",\n                        target: \"_blank\",\n                        className: \"w-7 mr-3\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.GithubIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://www.linkedin.com/in/alanalveses/\",\n                        target: \"_blank\",\n                        className: \"w-6 mx-3\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.LinkedInIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://wa.me//5511992668420?text=%20Ol\\xe1,%20estava%20em%20seu%20site%20fiquei%20interessado%20em%20um%20de%20seus%20servi\\xe7os!\",\n                        target: \"_blank\",\n                        className: \"w-8 mx-3\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.WhatsAppIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://web.facebook.com/?_rdc=1&_rdr\",\n                        target: \"_blank\",\n                        className: \"w-6 mx-3 bg-light rounded-full\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.PinterestIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMode(mode === \"light\" ? \"dark\" : \"light\"),\n                        className: \"ml-3 flex items-center justify-center rounded-full p-1\\n        \".concat(mode === \"light\" ? \"bg-dark text-light\" : \"bg-light text-dark\", \"\\n        \"),\n                        children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.SunIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.MoonIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Home\",\n                        className: \"mr-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Projetos\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"Sobre\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/articles\",\n                        title: \"Artigos\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/contact\",\n                        title: \"Contato\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/more\",\n                        title: \"Mais\",\n                        className: \"ml-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%] bg-transparent\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alan\\\\Documents\\\\Projetos\\\\Portifolio Next\\\\src\\\\components\\\\NavBar.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(NavBar, \"gEsn1W5zpuxcO6O0nW7Ibb7oc2c=\", false, function() {\n    return [\n        _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU07d0JBQVdDLFdBQVU7Ozs7OztrQ0FDeEQsOERBQUNIO3dCQUFXQyxNQUFLO3dCQUFTQyxPQUFNO3dCQUFRQyxXQUFVOzs7Ozs7a0NBQ2xELDhEQUFDSDt3QkFBV0MsTUFBSzt3QkFBWUMsT0FBTTt3QkFBVUMsV0FBVTs7Ozs7O2tDQUN2RCw4REFBQ0g7d0JBQVdDLE1BQUs7d0JBQVdDLE9BQU07d0JBQVVDLFdBQVU7Ozs7OztrQ0FDdEQsOERBQUNIO3dCQUFXQyxNQUFLO3dCQUFRQyxPQUFNO3dCQUFPQyxXQUFVOzs7Ozs7Ozs7Ozs7MEJBR2xELDhEQUFDb0I7Z0JBQUlwQixXQUFVOzBCQUNiLDRFQUFDTCw2Q0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYjtJQXBHTVM7O1FBQ29CUiwrREFBZ0JBOzs7TUFEcENRO0FBc0dOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcz82YmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEdpdGh1Ykljb24sXHJcbiAgTGlua2VkSW5JY29uLFxyXG4gIE1vb25JY29uLFxyXG4gIFBpbnRlcmVzdEljb24sXHJcbiAgU3VuSWNvbixcclxuICBXaGF0c0FwcEljb24sXHJcbn0gZnJvbSBcIi4vSWNvbnNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xyXG5pbXBvcnQgdXNlVGhlbWVTd2l0Y2hlciBmcm9tIFwiLi9ob29rcy91c2VUaGVtZVN3aXRjaGVyXCI7XHJcblxyXG5jb25zdCBDdXN0b21MaW5rID0gKHsgaHJlZiwgdGl0bGUsIGNsYXNzTmFtZSA9IFwiXCIgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHJlbGF0aXZlIGdyb3VwYH0+XHJcbiAgICAgIHt0aXRsZX1cclxuXHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgIGgtWzFweF0gaW5saW5lLWJsb2NrIGJnLWRhcmsgYWJzb2x1dGUgbGVmdC0wIC1ib3R0b20tMC41IFxyXG4gICAgICAgICAgICBncm91cC1ob3Zlcjp3LWZ1bGwgdHJhbnNpdGlvbi1bd2lkdGhdIGVhc2UgZHVyYXRpb24tMzAwXHJcbiAgICAgICAgICAgICR7cm91dGVyLmFzUGF0aCA9PT0gaHJlZiA/IFwidy1mdWxsXCIgOiBcInctMFwifVxyXG4gICAgICAgICAgICBkYXJrOmJnLWxpZ2h0YH1cclxuICAgICAgPlxyXG4gICAgICAgICZuYnNwO1xyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VUaGVtZVN3aXRjaGVyKCk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0aXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRpc09wZW4oIWlzT3Blbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMyIHB5LTggZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZpeGVkIHRvcC0wIHotNTAgYmctbGlnaHQgZGFyazpiZy1kYXJrIGRhcms6dGV4dC1saWdodCBsZzpweC0xNiBtZDpweC0xMiBzbTpweC04IFwiPlxyXG5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoaWRkZW4gbGc6ZmxleFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGNsYXNzTmFtZT17YGJnLWRhcmsgZGFyazpiZy1saWdodCBibG9jayB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgaC0wLjUgdy02IHJvdW5kZWQtc20gJHtcclxuICAgICAgICAgICAgaXNPcGVuID8gXCJyb3RhdGUtNDUgdHJhbnNsYXRlLXktMVwiIDogXCItdHJhbnNsYXRlLXktMC41XCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGNsYXNzTmFtZT17YGJnLWRhcmsgZGFyazpiZy1saWdodCBibG9jayB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgaC0wLjUgdy02IHJvdW5kZWQtc20gbXktMC41ICR7XHJcbiAgICAgICAgICAgIGlzT3BlbiA/IFwib3BhY2l0eS0wXCIgOiBcIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgIH0gYH1cclxuICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BiZy1kYXJrIGRhcms6YmctbGlnaHQgYmxvY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2Utb3V0IGgtMC41IHctNiByb3VuZGVkLXNtICR7XHJcbiAgICAgICAgICAgIGlzT3BlbiA/IFwiLXJvdGF0ZS00NSAtdHJhbnNsYXRlLXktMVwiIDogXCJ0cmFuc2xhdGUteS0wLjVcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgIDxtb3Rpb24uYVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbGFuYWx2ZXNlc1wiXHJcbiAgICAgICAgICB0YXJnZXQ9e1wiX2JsYW5rXCJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTcgbXItM1wiXHJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XHJcbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdpdGh1Ykljb24gLz5cclxuICAgICAgICA8L21vdGlvbi5hPlxyXG5cclxuICAgICAgICA8bW90aW9uLmFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWxhbmFsdmVzZXMvXCJcclxuICAgICAgICAgIHRhcmdldD17XCJfYmxhbmtcIn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBteC0zXCJcclxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cclxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlua2VkSW5JY29uIC8+XHJcbiAgICAgICAgPC9tb3Rpb24uYT5cclxuXHJcbiAgICAgICAgPG1vdGlvbi5hXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93YS5tZS8vNTUxMTk5MjY2ODQyMD90ZXh0PSUyME9sw6EsJTIwZXN0YXZhJTIwZW0lMjBzZXUlMjBzaXRlJTIwZmlxdWVpJTIwaW50ZXJlc3NhZG8lMjBlbSUyMHVtJTIwZGUlMjBzZXVzJTIwc2VydmnDp29zIVwiXHJcbiAgICAgICAgICB0YXJnZXQ9e1wiX2JsYW5rXCJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggbXgtM1wiXHJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XHJcbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFdoYXRzQXBwSWNvbiAvPlxyXG4gICAgICAgIDwvbW90aW9uLmE+XHJcblxyXG4gICAgICAgIDxtb3Rpb24uYVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd2ViLmZhY2Vib29rLmNvbS8/X3JkYz0xJl9yZHJcIlxyXG4gICAgICAgICAgdGFyZ2V0PXtcIl9ibGFua1wifVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy02IG14LTMgYmctbGlnaHQgcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cclxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGludGVyZXN0SWNvbiAvPlxyXG4gICAgICAgIDwvbW90aW9uLmE+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGUobW9kZSA9PT0gXCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgbWwtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgcC0xXHJcbiAgICAgICAgJHttb2RlID09PSBcImxpZ2h0XCIgPyBcImJnLWRhcmsgdGV4dC1saWdodFwiIDogXCJiZy1saWdodCB0ZXh0LWRhcmtcIn1cclxuICAgICAgICBgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHttb2RlID09PSBcImRhcmtcIiA/IChcclxuICAgICAgICAgICAgPFN1bkljb24gY2xhc3NOYW1lPXtcImZpbGwtZGFya1wifSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPE1vb25JY29uIGNsYXNzTmFtZT17XCJmaWxsLWRhcmtcIn0gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPG5hdj5cclxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL1wiIHRpdGxlPVwiSG9tZVwiIGNsYXNzTmFtZT1cIm1yLTRcIiAvPlxyXG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvcHJvamVjdHNcIiB0aXRsZT1cIlByb2pldG9zXCIgY2xhc3NOYW1lPVwibXgtNFwiIC8+XHJcbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9hYm91dFwiIHRpdGxlPVwiU29icmVcIiBjbGFzc05hbWU9XCJteC00XCIgLz5cclxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL2FydGljbGVzXCIgdGl0bGU9XCJBcnRpZ29zXCIgY2xhc3NOYW1lPVwibXgtNFwiIC8+XHJcbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9jb250YWN0XCIgdGl0bGU9XCJDb250YXRvXCIgY2xhc3NOYW1lPVwibXgtNFwiIC8+XHJcbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9tb3JlXCIgdGl0bGU9XCJNYWlzXCIgY2xhc3NOYW1lPVwibWwtNFwiIC8+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVs1MCVdIHRvcC0yIHRyYW5zbGF0ZS14LVstNTAlXSBiZy10cmFuc3BhcmVudFwiPlxyXG4gICAgICAgIDxMb2dvIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiR2l0aHViSWNvbiIsIkxpbmtlZEluSWNvbiIsIk1vb25JY29uIiwiUGludGVyZXN0SWNvbiIsIlN1bkljb24iLCJXaGF0c0FwcEljb24iLCJtb3Rpb24iLCJMb2dvIiwidXNlVGhlbWVTd2l0Y2hlciIsIkN1c3RvbUxpbmsiLCJocmVmIiwidGl0bGUiLCJjbGFzc05hbWUiLCJyb3V0ZXIiLCJzcGFuIiwiYXNQYXRoIiwiTmF2QmFyIiwibW9kZSIsInNldE1vZGUiLCJpc09wZW4iLCJzZXRpc09wZW4iLCJoYW5kbGVDbGljayIsImhlYWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJuYXYiLCJhIiwidGFyZ2V0Iiwid2hpbGVIb3ZlciIsInkiLCJ3aGlsZVRhcCIsInNjYWxlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});