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

/***/ "./components/home/PostComment.js":
/*!****************************************!*\
  !*** ./components/home/PostComment.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PostList = (param)=>{\n    let { post, user } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"post-comments mt-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"new-comment fl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: user.profileImg,\n                    alt: \"User Profile Image\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostComment.js\",\n                    lineNumber: 5,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"form-control comment-box\",\n                    placeholder: \"Add a comment...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostComment.js\",\n                    lineNumber: 6,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative no-width\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute fl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"comment-button alt-text\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    viewBox: \"0 0 24 24\",\n                                    \"data-supported-dps\": \"24x24\",\n                                    fill: \"currentColor\",\n                                    class: \"mercado-match\",\n                                    width: \"24\",\n                                    height: \"24\",\n                                    focusable: \"false\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostComment.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostComment.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostComment.js\",\n                                lineNumber: 13,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"comment-button alt-text\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    viewBox: \"0 0 24 24\",\n                                    \"data-supported-dps\": \"24x24\",\n                                    fill: \"currentColor\",\n                                    class: \"mercado-match\",\n                                    width: \"24\",\n                                    height: \"24\",\n                                    focusable: \"false\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostComment.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 3\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostComment.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostComment.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostComment.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostComment.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostComment.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostComment.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\nvar _c;\n$RefreshReg$(_c, \"PostList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvUG9zdENvbW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVc7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRTtJQUM5QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJQyxLQUFLSixLQUFLSztvQkFBWUMsS0FBSTs7Ozs7OzhCQUMvQiw4REFBQ0M7b0JBQ0NDLE1BQUs7b0JBQ0xOLFdBQVU7b0JBQ1ZPLGFBQVk7Ozs7Ozs4QkFFZCw4REFBQ1I7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1E7Z0NBQU9SLFdBQVU7MENBQ2hCLDRFQUFDUztvQ0FDQ0MsT0FBTTtvQ0FDTkMsU0FBUTtvQ0FDUkMsc0JBQW1CO29DQUNuQkMsTUFBSztvQ0FDTEMsT0FBTTtvQ0FDTkMsT0FBTTtvQ0FDTkMsUUFBTztvQ0FDUEMsV0FBVTs4Q0FFViw0RUFBQ0M7d0NBQUtDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSVosOERBQUNYO2dDQUFPUixXQUFVOzBDQUNsQiw0RUFBQ1M7b0NBQUlDLE9BQU07b0NBQTZCQyxTQUFRO29DQUFZQyxzQkFBbUI7b0NBQVFDLE1BQUs7b0NBQWVDLE9BQU07b0NBQWdCQyxPQUFNO29DQUFLQyxRQUFPO29DQUFLQyxXQUFVOzhDQUM1Syw0RUFBQ0M7d0NBQUtDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUVY7S0FyQ012QjtBQXVDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvUG9zdENvbW1lbnQuanM/OWM3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQb3N0TGlzdCA9ICh7IHBvc3QsIHVzZXIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY29tbWVudHMgbXQtM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1jb21tZW50IGZsXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3VzZXIucHJvZmlsZUltZ30gYWx0PVwiVXNlciBQcm9maWxlIEltYWdlXCIgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb21tZW50LWJveFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIGNvbW1lbnQuLi5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBuby13aWR0aFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbW1lbnQtYnV0dG9uIGFsdC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtc3VwcG9ydGVkLWRwcz1cIjI0eDI0XCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJtZXJjYWRvLW1hdGNoXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOCAxMC41QTEuNSAxLjUgMCAxMTkuNSAxMiAxLjUgMS41IDAgMDE4IDEwLjV6bTYuNSAxLjVhMS41IDEuNSAwIDEwLTEuNS0xLjUgMS41IDEuNSAwIDAwMS41IDEuNXptNy41IDBBMTAgMTAgMCAxMTEyIDJhMTAgMTAgMCAwMTEwIDEwem0tMiAwYTggOCAwIDEwLTggOCA4IDggMCAwMDgtOHptLTggNGE2IDYgMCAwMS00LjI0LTEuNzZsLS43MS43NmE3IDcgMCAwMDkuODkgMGwtLjcxLS43MUE2IDYgMCAwMTEyIDE2elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbW1lbnQtYnV0dG9uIGFsdC10ZXh0XCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBkYXRhLXN1cHBvcnRlZC1kcHM9XCIyNHgyNFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cIm1lcmNhZG8tbWF0Y2hcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxyXG4gIDxwYXRoIGQ9XCJNMTkgNEg1YTMgMyAwIDAwLTMgM3YxMGEzIDMgMCAwMDMgM2gxNGEzIDMgMCAwMDMtM1Y3YTMgMyAwIDAwLTMtM3ptMSAxM2ExIDEgMCAwMS0uMjkuNzFMMTYgMTRsLTIgMi02LTYtNCA0VjdhMSAxIDAgMDExLTFoMTRhMSAxIDAgMDExIDF6bS0yLTdhMiAyIDAgMTEtMi0yIDIgMiAwIDAxMiAyelwiPjwvcGF0aD5cclxuPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0O1xyXG4iXSwibmFtZXMiOlsiUG9zdExpc3QiLCJwb3N0IiwidXNlciIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsInByb2ZpbGVJbWciLCJhbHQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsImRhdGEtc3VwcG9ydGVkLWRwcyIsImZpbGwiLCJjbGFzcyIsIndpZHRoIiwiaGVpZ2h0IiwiZm9jdXNhYmxlIiwicGF0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/home/PostComment.js\n"));

/***/ })

});