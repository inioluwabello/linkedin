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

/***/ "./components/home/Posts.js":
/*!**********************************!*\
  !*** ./components/home/Posts.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\n\n\nconst Posts = ()=>{\n    const orderBy = \"Top\";\n    const showingOrderOptions = false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        flexGrow: \"1\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"post-sort\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"alt-text\",\n                            children: \"Sort by:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleOrderOptionsClick(\"Top\"),\n                            children: [\n                                orderBy,\n                                \" \\xa0\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                    width: 8,\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCaretDown\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, undefined),\n                        showingOrderOptions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                position: \"relative\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"options-dropdown\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: ()=>handleOrderOptionsSelectedClick(\"Top\"),\n                                        className: \"options alt-text bold \".concat(orderBy === \"Top\" ? \"option-selected\" : \"\"),\n                                        children: \"Top\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: ()=>handleOrderOptionsSelectedClick(\"Top\"),\n                                        className: \"options alt-text bold \".concat(orderBy === \"Recent\" ? \"option-selected\" : \"\"),\n                                        children: \"Recent\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                                lineNumber: 22,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvUG9zdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlFO0FBQ0Q7QUFFaEUsTUFBTUUsUUFBUTtJQUNaLE1BQU1DLFVBQVU7SUFDaEIsTUFBTUMsc0JBQXNCO0lBQzVCLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlFLE9BQU87d0JBQUVDLFVBQVU7b0JBQUk7OEJBQzFCLDRFQUFDQzs7Ozs7Ozs7Ozs4QkFFSCw4REFBQ0o7b0JBQUlLLE9BQU07O3NDQUNULDhEQUFDQzs0QkFBS0wsV0FBVTtzQ0FBVzs7Ozs7O3NDQUMzQiw4REFBQ007NEJBQU9DLFNBQVMsSUFBTUMsd0JBQXdCOztnQ0FDNUNYO2dDQUFROzhDQUNULDhEQUFDSCwyRUFBZUE7b0NBQUNlLE9BQU87b0NBQUdDLE1BQU1mLDBFQUFXQTs7Ozs7Ozs7Ozs7O3dCQUc3Q0cscUNBQ0MsOERBQUNDOzRCQUFJRSxPQUFPO2dDQUFFVSxVQUFVOzRCQUFXO3NDQUNqQyw0RUFBQ1o7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FDQ1EsU0FBUyxJQUFNSyxnQ0FBZ0M7d0NBQy9DWixXQUFXLHlCQUVWLE9BRENILFlBQVksUUFBUSxvQkFBb0I7a0RBRTNDOzs7Ozs7a0RBR0QsOERBQUNFO3dDQUNDUSxTQUFTLElBQU1LLGdDQUFnQzt3Q0FDL0NaLFdBQVcseUJBRVYsT0FEQ0gsWUFBWSxXQUFXLG9CQUFvQjtrREFFOUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqQjtLQTFDTUQ7QUE0Q04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL1Bvc3RzLmpzPzFlY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUNhcmV0RG93biB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcbmNvbnN0IFBvc3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG9yZGVyQnkgPSBcIlRvcFwiO1xyXG4gIGNvbnN0IHNob3dpbmdPcmRlck9wdGlvbnMgPSBmYWxzZTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbFwiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleEdyb3c6IFwiMVwiIH19PlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvc3Qtc29ydFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWx0LXRleHRcIj5Tb3J0IGJ5Ojwvc3Bhbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3JkZXJPcHRpb25zQ2xpY2soXCJUb3BcIil9PlxyXG4gICAgICAgICAgICB7b3JkZXJCeX0gJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gd2lkdGg9ezh9IGljb249e2ZhQ2FyZXREb3dufSAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAge3Nob3dpbmdPcmRlck9wdGlvbnMgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9yZGVyT3B0aW9uc1NlbGVjdGVkQ2xpY2soXCJUb3BcIil9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG9wdGlvbnMgYWx0LXRleHQgYm9sZCAke1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyQnkgPT09IFwiVG9wXCIgPyBcIm9wdGlvbi1zZWxlY3RlZFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgVG9wXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlT3JkZXJPcHRpb25zU2VsZWN0ZWRDbGljayhcIlRvcFwiKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgb3B0aW9ucyBhbHQtdGV4dCBib2xkICR7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeSA9PT0gXCJSZWNlbnRcIiA/IFwib3B0aW9uLXNlbGVjdGVkXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBSZWNlbnRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xyXG4iXSwibmFtZXMiOlsiRm9udEF3ZXNvbWVJY29uIiwiZmFDYXJldERvd24iLCJQb3N0cyIsIm9yZGVyQnkiLCJzaG93aW5nT3JkZXJPcHRpb25zIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJmbGV4R3JvdyIsImhyIiwiY2xhc3MiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsImhhbmRsZU9yZGVyT3B0aW9uc0NsaWNrIiwid2lkdGgiLCJpY29uIiwicG9zaXRpb24iLCJoYW5kbGVPcmRlck9wdGlvbnNTZWxlY3RlZENsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/Posts.js\n"));

/***/ })

});