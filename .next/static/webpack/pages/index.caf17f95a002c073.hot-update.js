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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CommentItem = (param)=>{\n    let { comment } = param;\n    const titleLimiterCount = 80;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"new-comment mt-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fl comment-profile-details\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: comment.profileImg,\n                    alt: \"User Profile Image\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n                    lineNumber: 6,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"comment-identity flex-grow-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"post-user-name pry-text\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"name bold\",\n                                children: comment.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n                                lineNumber: 9,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n                            lineNumber: 8,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"owner-title sm-text-1 alt-text\",\n                            children: comment.title.length > titleLimiterCount ? \"\".concat(comment.title.slice(0, titleLimiterCount), \"...\") : comment.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n            lineNumber: 5,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\CommentItem.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CommentItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentItem);\nvar _c;\n$RefreshReg$(_c, \"CommentItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvQ29tbWVudEl0ZW0uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGNBQWM7UUFBQyxFQUFFQyxPQUFPLEVBQUU7SUFDOUIsTUFBTUMsb0JBQW9CO0lBQzFCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlDLEtBQUtMLFFBQVFNO29CQUFZQyxLQUFJOzs7Ozs7OEJBQ2xDLDhEQUFDTDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDSztnQ0FBS0wsV0FBVTswQ0FBYUgsUUFBUVM7Ozs7Ozs7Ozs7O3NDQUV2Qyw4REFBQ1A7NEJBQUlDLFdBQVU7c0NBQ1pILFFBQVFVLE1BQU1DLFNBQVNWLG9CQUNwQixHQUE2QyxPQUExQ0QsUUFBUVUsTUFBTUUsTUFBTSxHQUFHWCxvQkFBbUIsU0FDN0NELFFBQVFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QjtLQW5CTVg7QUFxQk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL0NvbW1lbnRJdGVtLmpzPzcxNGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29tbWVudEl0ZW0gPSAoeyBjb21tZW50IH0pID0+IHtcclxuICBjb25zdCB0aXRsZUxpbWl0ZXJDb3VudCA9IDgwO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1jb21tZW50IG10LTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbCBjb21tZW50LXByb2ZpbGUtZGV0YWlsc1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtjb21tZW50LnByb2ZpbGVJbWd9IGFsdD1cIlVzZXIgUHJvZmlsZSBJbWFnZVwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LWlkZW50aXR5IGZsZXgtZ3Jvdy0xXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtdXNlci1uYW1lIHByeS10ZXh0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWUgYm9sZFwiPntjb21tZW50Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bmVyLXRpdGxlIHNtLXRleHQtMSBhbHQtdGV4dFwiPlxyXG4gICAgICAgICAgICB7Y29tbWVudC50aXRsZS5sZW5ndGggPiB0aXRsZUxpbWl0ZXJDb3VudFxyXG4gICAgICAgICAgICAgID8gYCR7Y29tbWVudC50aXRsZS5zbGljZSgwLCB0aXRsZUxpbWl0ZXJDb3VudCl9Li4uYFxyXG4gICAgICAgICAgICAgIDogY29tbWVudC50aXRsZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50SXRlbTtcclxuIl0sIm5hbWVzIjpbIkNvbW1lbnRJdGVtIiwiY29tbWVudCIsInRpdGxlTGltaXRlckNvdW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwicHJvZmlsZUltZyIsImFsdCIsInNwYW4iLCJuYW1lIiwidGl0bGUiLCJsZW5ndGgiLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/home/CommentItem.js\n"));

/***/ })

});