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

/***/ "./components/home/PostCommentList.js":
/*!********************************************!*\
  !*** ./components/home/PostCommentList.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\n\n\nconst PostCommentList = (param)=>{\n    let { user, post } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"post-comment-list mt-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"order alt-color text-md bold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Most Relevant\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostCommentList.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCaretDown,\n                        width: 12,\n                        height: 12\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostCommentList.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostCommentList.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            post.comments.map((comment)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"new-comment fl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: comment.img,\n                        alt: \"User Profile Image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostCommentList.js\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostCommentList.js\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostCommentList.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostCommentList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCommentList);\nvar _c;\n$RefreshReg$(_c, \"PostCommentList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvUG9zdENvbW1lbnRMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRTtBQUNEO0FBRWhFLE1BQU1FLGtCQUFrQjtRQUFDLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9ELFdBQVU7O2tDQUNoQiw4REFBQ0U7a0NBQUs7Ozs7OztvQkFBcUI7a0NBQzNCLDhEQUFDUiwyRUFBZUE7d0JBQUNTLE1BQU1SLDBFQUFXQTt3QkFBRVMsT0FBTzt3QkFBSUMsUUFBUTs7Ozs7Ozs7Ozs7O1lBR3hEUCxLQUFLUSxTQUFTQyxJQUFJLENBQUNDO2dCQUNsQixxQkFDRSw4REFBQ1Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNTO3dCQUFJQyxLQUFLRixRQUFRQzt3QkFBS0UsS0FBSTs7Ozs7Ozs7Ozs7WUFHakM7Ozs7Ozs7QUFHTjtLQWpCTWY7QUFtQk4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL1Bvc3RDb21tZW50TGlzdC5qcz9kY2I2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFDYXJldERvd24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5jb25zdCBQb3N0Q29tbWVudExpc3QgPSAoeyB1c2VyLCBwb3N0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbW1lbnQtbGlzdCBtdC0zXCI+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3JkZXIgYWx0LWNvbG9yIHRleHQtbWQgYm9sZFwiPlxyXG4gICAgICAgIDxzcGFuPk1vc3QgUmVsZXZhbnQ8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDYXJldERvd259IHdpZHRoPXsxMn0gaGVpZ2h0PXsxMn0gLz5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICB7cG9zdC5jb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctY29tbWVudCBmbFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Y29tbWVudC5pbWd9IGFsdD1cIlVzZXIgUHJvZmlsZSBJbWFnZVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q29tbWVudExpc3Q7XHJcbiJdLCJuYW1lcyI6WyJGb250QXdlc29tZUljb24iLCJmYUNhcmV0RG93biIsIlBvc3RDb21tZW50TGlzdCIsInVzZXIiLCJwb3N0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwic3BhbiIsImljb24iLCJ3aWR0aCIsImhlaWdodCIsImNvbW1lbnRzIiwibWFwIiwiY29tbWVudCIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/home/PostCommentList.js\n"));

/***/ })

});