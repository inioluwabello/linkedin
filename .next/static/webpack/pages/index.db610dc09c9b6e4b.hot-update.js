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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Posts = ()=>{\n    _s();\n    const [orderBy, setOrderBy] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Top\");\n    const [showingOrderOptions, setShowingOrderOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleOrderOptionsClick = (showing)=>{\n        console.log(showingOrderOptions);\n        setShowingOrderOptions(showing);\n    };\n    const handleOrderOptionsSelectedClick = (selected)=>{\n        setOrderBy(selected);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        flexGrow: \"1\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"post-sort\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"alt-text\",\n                            children: \"Sort by:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleOrderOptionsClick(!showingOrderOptions),\n                            children: [\n                                orderBy,\n                                \" \\xa0\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                    width: 8,\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCaretDown\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        showingOrderOptions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                position: \"relative\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"options-dropdown\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: ()=>handleOrderOptionsSelectedClick(\"Top\"),\n                                        className: \"options alt-text bold \".concat(orderBy === \"Top\" ? \"option-selected\" : \"\"),\n                                        children: \"Top\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: ()=>handleOrderOptionsSelectedClick(\"Recent\"),\n                                        className: \"options alt-text bold \".concat(orderBy === \"Recent\" ? \"option-selected\" : \"\"),\n                                        children: \"Recent\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\Posts.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Posts, \"2G3cKcsjRNTfx2CKvnUs87/+F8I=\");\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvUG9zdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlFO0FBQ0Q7QUFDL0I7QUFFakMsTUFBTUcsUUFBUTs7SUFDWixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDSSxxQkFBcUJDLHVCQUF1QixHQUFHTCwrQ0FBUUEsQ0FBQztJQUUvRCxNQUFNTSwwQkFBMEIsQ0FBQ0M7UUFDL0JDLFFBQVFDLElBQUlMO1FBQ1pDLHVCQUF1QkU7SUFDekI7SUFFQSxNQUFNRyxrQ0FBaUMsQ0FBQ0M7UUFDdENSLFdBQVdRO0lBQ2I7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJRSxPQUFPO3dCQUFFQyxVQUFVO29CQUFJOzhCQUMxQiw0RUFBQ0M7Ozs7Ozs7Ozs7OEJBRUgsOERBQUNKO29CQUFJSyxPQUFNOztzQ0FDVCw4REFBQ0M7NEJBQUtMLFdBQVU7c0NBQVc7Ozs7OztzQ0FDM0IsOERBQUNNOzRCQUFPQyxTQUFTLElBQU1kLHdCQUF3QixDQUFDRjs7Z0NBQzdDRjtnQ0FBUTs4Q0FDVCw4REFBQ0osMkVBQWVBO29DQUFDdUIsT0FBTztvQ0FBR0MsTUFBTXZCLDBFQUFXQTs7Ozs7Ozs7Ozs7O3dCQUc3Q0sscUNBQ0MsOERBQUNROzRCQUFJRSxPQUFPO2dDQUFFUyxVQUFVOzRCQUFXO3NDQUNqQyw0RUFBQ1g7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FDQ1EsU0FBUyxJQUFNVixnQ0FBZ0M7d0NBQy9DRyxXQUFXLHlCQUVWLE9BRENYLFlBQVksUUFBUSxvQkFBb0I7a0RBRTNDOzs7Ozs7a0RBR0QsOERBQUNVO3dDQUNDUSxTQUFTLElBQU1WLGdDQUFnQzt3Q0FDL0NHLFdBQVcseUJBRVYsT0FEQ1gsWUFBWSxXQUFXLG9CQUFvQjtrREFFOUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqQjtHQW5ETUQ7S0FBQUE7QUFxRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL1Bvc3RzLmpzPzFlY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUNhcmV0RG93biB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBvc3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvcmRlckJ5LCBzZXRPcmRlckJ5XSA9IHVzZVN0YXRlKFwiVG9wXCIpO1xyXG4gIGNvbnN0IFtzaG93aW5nT3JkZXJPcHRpb25zLCBzZXRTaG93aW5nT3JkZXJPcHRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3JkZXJPcHRpb25zQ2xpY2sgPSAoc2hvd2luZykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc2hvd2luZ09yZGVyT3B0aW9ucykgXHJcbiAgICBzZXRTaG93aW5nT3JkZXJPcHRpb25zKHNob3dpbmcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT3JkZXJPcHRpb25zU2VsZWN0ZWRDbGljayA9KHNlbGVjdGVkKSA9PiB7XHJcbiAgICBzZXRPcmRlckJ5KHNlbGVjdGVkKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhHcm93OiBcIjFcIiB9fT5cclxuICAgICAgICAgIDxociAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3N0LXNvcnRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFsdC10ZXh0XCI+U29ydCBieTo8L3NwYW4+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9yZGVyT3B0aW9uc0NsaWNrKCFzaG93aW5nT3JkZXJPcHRpb25zKX0+XHJcbiAgICAgICAgICAgIHtvcmRlckJ5fSAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiB3aWR0aD17OH0gaWNvbj17ZmFDYXJldERvd259IC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICB7c2hvd2luZ09yZGVyT3B0aW9ucyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlT3JkZXJPcHRpb25zU2VsZWN0ZWRDbGljayhcIlRvcFwiKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgb3B0aW9ucyBhbHQtdGV4dCBib2xkICR7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeSA9PT0gXCJUb3BcIiA/IFwib3B0aW9uLXNlbGVjdGVkXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBUb3BcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcmRlck9wdGlvbnNTZWxlY3RlZENsaWNrKFwiUmVjZW50XCIpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BvcHRpb25zIGFsdC10ZXh0IGJvbGQgJHtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlckJ5ID09PSBcIlJlY2VudFwiID8gXCJvcHRpb24tc2VsZWN0ZWRcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFJlY2VudFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XHJcbiJdLCJuYW1lcyI6WyJGb250QXdlc29tZUljb24iLCJmYUNhcmV0RG93biIsInVzZVN0YXRlIiwiUG9zdHMiLCJvcmRlckJ5Iiwic2V0T3JkZXJCeSIsInNob3dpbmdPcmRlck9wdGlvbnMiLCJzZXRTaG93aW5nT3JkZXJPcHRpb25zIiwiaGFuZGxlT3JkZXJPcHRpb25zQ2xpY2siLCJzaG93aW5nIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU9yZGVyT3B0aW9uc1NlbGVjdGVkQ2xpY2siLCJzZWxlY3RlZCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZmxleEdyb3ciLCJociIsImNsYXNzIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ3aWR0aCIsImljb24iLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/home/Posts.js\n"));

/***/ })

});