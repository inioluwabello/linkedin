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

/***/ "./components/home/CommentItem.js":
/*!****************************************!*\
  !*** ./components/home/CommentItem.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CommentItem = (param)=>{\n    let { comment } = param;\n    const titleLimiterCount = 80;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"new-comment mt-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fl comment-profile-details\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: comment.profileImg,\n                    alt: \"User Profile Image\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n                    lineNumber: 6,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-grow-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"comment-identity\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"post-user-name pry-text\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"name bold\",\n                                        children: comment.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n                                        lineNumber: 10,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n                                    lineNumber: 9,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"owner-title sm-text-1 alt-text\",\n                                    children: comment.title.length > titleLimiterCount ? \"\".concat(comment.title.slice(0, titleLimiterCount), \"...\") : comment.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n                                    lineNumber: 12,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n                            lineNumber: 8,\n                            columnNumber: 13\n                        }, undefined),\n                        comment.replies.map((reply)=>{}),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"comment-actions mt-1 text-sm bold alt-text\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Like\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, undefined),\n                                \" \",\n                                \" \",\n                                \" | \",\n                                \" \",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Reply\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 49\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n            lineNumber: 5,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CommentItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentItem);\nvar _c;\n$RefreshReg$(_c, \"CommentItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvQ29tbWVudEl0ZW0uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGNBQWM7UUFBQyxFQUFFQyxPQUFPLEVBQUU7SUFDOUIsTUFBTUMsb0JBQW9CO0lBQzFCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlDLEtBQUtMLFFBQVFNO29CQUFZQyxLQUFJOzs7Ozs7OEJBQ2xDLDhEQUFDTDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDZiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ1gsNEVBQUNLO3dDQUFLTCxXQUFVO2tEQUFhSCxRQUFRUzs7Ozs7Ozs7Ozs7OENBRXpDLDhEQUFDUDtvQ0FBSUMsV0FBVTs4Q0FDVkgsUUFBUVUsTUFBTUMsU0FBU1Ysb0JBQ3RCLEdBQTZDLE9BQTFDRCxRQUFRVSxNQUFNRSxNQUFNLEdBQUdYLG9CQUFtQixTQUM3Q0QsUUFBUVU7Ozs7Ozs7Ozs7Ozt3QkFJYlYsUUFBUWEsUUFBUUMsSUFBSUMsQ0FBQUEsU0FFckI7c0NBRUEsOERBQUNiOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0s7OENBQUs7Ozs7OztnQ0FBVztnQ0FBRTtnQ0FBSTtnQ0FBSTtnQ0FBSTs4Q0FBQyw4REFBQ0E7OENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXREO0tBN0JNVDtBQStCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvQ29tbWVudEl0ZW0uanM/NzE0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb21tZW50SXRlbSA9ICh7IGNvbW1lbnQgfSkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlTGltaXRlckNvdW50ID0gODA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LWNvbW1lbnQgbXQtMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsIGNvbW1lbnQtcHJvZmlsZS1kZXRhaWxzXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2NvbW1lbnQucHJvZmlsZUltZ30gYWx0PVwiVXNlciBQcm9maWxlIEltYWdlXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvdy0xXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC1pZGVudGl0eVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtdXNlci1uYW1lIHByeS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lIGJvbGRcIj57Y29tbWVudC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3duZXItdGl0bGUgc20tdGV4dC0xIGFsdC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICB7Y29tbWVudC50aXRsZS5sZW5ndGggPiB0aXRsZUxpbWl0ZXJDb3VudFxyXG4gICAgICAgICAgICAgICAgPyBgJHtjb21tZW50LnRpdGxlLnNsaWNlKDAsIHRpdGxlTGltaXRlckNvdW50KX0uLi5gXHJcbiAgICAgICAgICAgICAgICA6IGNvbW1lbnQudGl0bGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtjb21tZW50LnJlcGxpZXMubWFwKHJlcGx5ID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC1hY3Rpb25zIG10LTEgdGV4dC1zbSBib2xkIGFsdC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5MaWtlPC9zcGFuPiB7XCIgXCJ9IHwge1wiIFwifSA8c3Bhbj5SZXBseTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRJdGVtO1xyXG4iXSwibmFtZXMiOlsiQ29tbWVudEl0ZW0iLCJjb21tZW50IiwidGl0bGVMaW1pdGVyQ291bnQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJwcm9maWxlSW1nIiwiYWx0Iiwic3BhbiIsIm5hbWUiLCJ0aXRsZSIsImxlbmd0aCIsInNsaWNlIiwicmVwbGllcyIsIm1hcCIsInJlcGx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/CommentItem.js\n"));

/***/ })

});