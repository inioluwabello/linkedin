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

/***/ "./components/home/PostItem.js":
/*!*************************************!*\
  !*** ./components/home/PostItem.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PostItem = (param)=>{\n    let { post } = param;\n    const postLimiter = 200;\n    const limitedPost = post.postContent.slice(0, postLimiter);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"post-item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"post-text text-md alt-text-1\",\n                children: [\n                    postLimiter > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: limitedPost\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostItem.js\",\n                                lineNumber: 10,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-right alt-text text-md\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostItem.js\",\n                                lineNumber: 11,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true),\n                    postLimiter === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: post.postContent\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostItem.js\",\n                        lineNumber: 14,\n                        columnNumber: 35\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostItem.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"post-image\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: post.postImage\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostItem.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostItem.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostItem.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostItem);\nvar _c;\n$RefreshReg$(_c, \"PostItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvUG9zdEl0ZW0uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE1BQU1BLFdBQVc7UUFBQyxFQUFFQyxJQUFJLEVBQUU7SUFDdEIsTUFBTUMsY0FBYztJQUNwQixNQUFNQyxjQUFjRixLQUFLRyxZQUFZQyxNQUFNLEdBQUdIO0lBQ2hELHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUNWTCxjQUFjLG1CQUNmOzswQ0FDSSw4REFBQ0k7MENBQUtIOzs7Ozs7MENBQ04sOERBQUNHO2dDQUFJQyxXQUFVOzs7Ozs7OztvQkFHbEJMLGdCQUFnQixtQkFBSyw4REFBQ0k7a0NBQUtMLEtBQUtHOzs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDRTtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUlDLEtBQUtSLEtBQUtTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQjtLQW5CTVY7QUFxQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL1Bvc3RJdGVtLmpzPzczNjIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IFBvc3RJdGVtID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgICBjb25zdCBwb3N0TGltaXRlciA9IDIwMDtcclxuICAgIGNvbnN0IGxpbWl0ZWRQb3N0ID0gcG9zdC5wb3N0Q29udGVudC5zbGljZSgwLCBwb3N0TGltaXRlcilcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWl0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtdGV4dCB0ZXh0LW1kIGFsdC10ZXh0LTFcIj5cclxuICAgICAgICAgICAge3Bvc3RMaW1pdGVyID4gMCAmJiBcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2xpbWl0ZWRQb3N0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IGFsdC10ZXh0IHRleHQtbWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3Bvc3RMaW1pdGVyID09PSAwICYmIDxkaXY+e3Bvc3QucG9zdENvbnRlbnR9PC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pbWFnZVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5wb3N0SW1hZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEl0ZW07XHJcbiJdLCJuYW1lcyI6WyJQb3N0SXRlbSIsInBvc3QiLCJwb3N0TGltaXRlciIsImxpbWl0ZWRQb3N0IiwicG9zdENvbnRlbnQiLCJzbGljZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsInBvc3RJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/home/PostItem.js\n"));

/***/ })

});