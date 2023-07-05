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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./components/home/PostList.js":
/*!*************************************!*\
  !*** ./components/home/PostList.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PostReferrer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostReferrer */ \"./components/home/PostReferrer.js\");\n/* harmony import */ var _PostContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostContent */ \"./components/home/PostContent.js\");\n/* harmony import */ var _PostActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostActions */ \"./components/home/PostActions.js\");\n/* harmony import */ var _PostComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostComment */ \"./components/home/PostComment.js\");\n/* harmony import */ var _PostComment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PostComment__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst PostList = (param)=>{\n    let { post, user } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card mt-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-content\",\n            children: [\n                post.referrer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostReferrer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    post: post\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostList.js\",\n                    lineNumber: 10,\n                    columnNumber: 27\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    post: post\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostList.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostActions__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    user: user,\n                    post: post\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostList.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_PostComment__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    user: user,\n                    post: post\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostList.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostList.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\home\\\\PostList.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\nvar _c;\n$RefreshReg$(_c, \"PostList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvUG9zdExpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBQ0Y7QUFDQTtBQUNBO0FBRXhDLE1BQU1JLFdBQVc7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRTtJQUM5QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7Z0JBQ1pILEtBQUtJLDBCQUFZLDhEQUFDVCxxREFBWUE7b0JBQUNLLE1BQU1BOzs7Ozs7OEJBQ3RDLDhEQUFDSixvREFBV0E7b0JBQUNJLE1BQU1BOzs7Ozs7OEJBQ25CLDhEQUFDSCxvREFBV0E7b0JBQUNJLE1BQU1BO29CQUFNRCxNQUFNQTs7Ozs7OzhCQUMvQiw4REFBQ0YscURBQVdBO29CQUFDRyxNQUFNQTtvQkFBTUQsTUFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZDO0tBWE1EO0FBYU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL1Bvc3RMaXN0LmpzPzJiMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3RSZWZlcnJlciBmcm9tIFwiLi9Qb3N0UmVmZXJyZXJcIjtcclxuaW1wb3J0IFBvc3RDb250ZW50IGZyb20gXCIuL1Bvc3RDb250ZW50XCI7XHJcbmltcG9ydCBQb3N0QWN0aW9ucyBmcm9tIFwiLi9Qb3N0QWN0aW9uc1wiO1xyXG5pbXBvcnQgUG9zdENvbW1lbnQgZnJvbSBcIi4vUG9zdENvbW1lbnRcIjtcclxuXHJcbmNvbnN0IFBvc3RMaXN0ID0gKHsgcG9zdCwgdXNlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtdC0yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAge3Bvc3QucmVmZXJyZXIgJiYgPFBvc3RSZWZlcnJlciBwb3N0PXtwb3N0fSAvPn1cclxuICAgICAgICA8UG9zdENvbnRlbnQgcG9zdD17cG9zdH0gLz5cclxuICAgICAgICA8UG9zdEFjdGlvbnMgdXNlcj17dXNlcn0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICA8UG9zdENvbW1lbnQgdXNlcj17dXNlcn0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3Q7XHJcbiJdLCJuYW1lcyI6WyJQb3N0UmVmZXJyZXIiLCJQb3N0Q29udGVudCIsIlBvc3RBY3Rpb25zIiwiUG9zdENvbW1lbnQiLCJQb3N0TGlzdCIsInBvc3QiLCJ1c2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmZXJyZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/home/PostList.js\n"));

/***/ })

});