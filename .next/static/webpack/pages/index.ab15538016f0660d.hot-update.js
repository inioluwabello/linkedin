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

/***/ "./components/linkedinlayout/Nav.js":
/*!******************************************!*\
  !*** ./components/linkedinlayout/Nav.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_nav_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/nav-items */ \"./data/nav-items.js\");\n\n\nconst Nav = (param)=>{\n    let { page, setPage, profileImg, userName, newPost, isMobile } = param;\n    const navItems = (0,_data_nav_items__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const handlePageClick = (page)=>{\n        if (page !== \"Me\" && page !== \"For Business\" && page !== \"Advertise\") {\n            setPage(page);\n        }\n    };\n    const list = navItems.map((navItem)=>{\n        return(// If for business show border\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: page === \"For Business\" ? \"border-left-1\" : \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    onClick: ()=>handlePageClick(page),\n                    className: \"nav-link \".concat(page === navItem.link ? \"nav-active\" : \"\"),\n                    children: [\n                        navItem.link !== \"Me\" && svgReader(navItem.svg),\n                        navItem.link === \"Me\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: profileImg,\n                            className: \"profile-img-sm\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\Nav.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, undefined),\n                        !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"link-name\",\n                            children: [\n                                navItem.link,\n                                (page === \"Me\" || page === \"For Business\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/svg/caret\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\Nav.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\Nav.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined),\n                        page === \"Home\" && newPost === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"notification-badge\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\Nav.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined),\n                        page === \"Messaging\" && newMessages > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"messaging notification-badge\",\n                            children: newMessages\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\Nav.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined),\n                        page === \"Notifications\" && newNotifications > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"notifications notification-badge\",\n                            children: newNotifications\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\Nav.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\Nav.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                page === \"Me\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dropdown profile-dropdown\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: profileImg,\n                            className: \"profile-img-md\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\Nav.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined),\n                        userName\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\Nav.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined),\n                page === \"For Business\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dropdown business-dropdown\",\n                    children: \"For Business\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\Nav.js\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, navItem.link, true, {\n            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\Nav.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined));\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"nav\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\Nav.js\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpbmtlZGlubGF5b3V0L05hdi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQztBQUUvQyxNQUFNQyxNQUFNO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUNyRSxNQUFNQyxXQUFXUiwyREFBV0E7SUFDNUIsTUFBTVMsa0JBQWtCLENBQUNQO1FBQ3ZCLElBQUlBLFNBQVMsUUFBUUEsU0FBUyxrQkFBa0JBLFNBQVMsYUFBYTtZQUNwRUMsUUFBUUQ7UUFDVjtJQUNGO0lBRUEsTUFBTVEsT0FBT0YsU0FBU0csSUFBSSxDQUFDQztRQUN6QixPQUNFLDhCQUE4QjtzQkFDOUIsOERBQUNDO1lBRUNDLFdBQVdaLFNBQVMsaUJBQWlCLGtCQUFrQjs7OEJBR3ZELDhEQUFDYTtvQkFDQ0MsU0FBUyxJQUFNUCxnQkFBZ0JQO29CQUMvQlksV0FBVyxZQUFzRCxPQUExQ1osU0FBU1UsUUFBUUssT0FBTyxlQUFlOzt3QkFFN0RMLFFBQVFLLFNBQVMsUUFBUUMsVUFBVU4sUUFBUU87d0JBQzNDUCxRQUFRSyxTQUFTLHNCQUNoQiw4REFBQ0c7NEJBQUlDLEtBQUtqQjs0QkFBWVUsV0FBVTs7Ozs7O3dCQUlqQyxDQUFDUCwwQkFDQSw4REFBQ2U7NEJBQUtSLFdBQVU7O2dDQUNiRixRQUFRSztnQ0FHUGYsQ0FBQUEsU0FBUyxRQUFRQSxTQUFTLGNBQWEsbUJBQ3ZDLDhEQUFDa0I7b0NBQUlDLEtBQUk7Ozs7Ozs7Ozs7Ozt3QkFLZG5CLFNBQVMsVUFBVUksWUFBWSxzQkFDOUIsOERBQUNnQjs0QkFBS1IsV0FBVTs7Ozs7O3dCQUdqQlosU0FBUyxlQUFlcUIsY0FBYyxtQkFDckMsOERBQUNEOzRCQUFLUixXQUFVO3NDQUFnQ1M7Ozs7Ozt3QkFHakRyQixTQUFTLG1CQUFtQnNCLG1CQUFtQixtQkFDOUMsOERBQUNGOzRCQUFLUixXQUFVO3NDQUNiVTs7Ozs7Ozs7Ozs7O2dCQUtOdEIsU0FBUyxzQkFDUiw4REFBQ3VCO29CQUFJWCxXQUFVOztzQ0FDYiw4REFBQ007NEJBQUlDLEtBQUtqQjs0QkFBWVUsV0FBVTs7Ozs7O3dCQUMvQlQ7Ozs7Ozs7Z0JBSUpILFNBQVMsZ0NBQ1IsOERBQUN1QjtvQkFBSVgsV0FBVTs4QkFBNkI7Ozs7Ozs7V0FoRHpDRixRQUFRSzs7Ozs7SUFvRG5CO0lBQ0EscUJBQ0U7a0JBQ0UsNEVBQUNTO1lBQUdaLFdBQVU7Ozs7Ozs7QUFHcEI7S0F0RU1iO0FBd0VOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGlua2VkaW5sYXlvdXQvTmF2LmpzPzQ1ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldE5hdkl0ZW1zIGZyb20gXCIuLi8uLi9kYXRhL25hdi1pdGVtc1wiO1xyXG5cclxuY29uc3QgTmF2ID0gKHsgcGFnZSwgc2V0UGFnZSwgcHJvZmlsZUltZywgdXNlck5hbWUsIG5ld1Bvc3QsIGlzTW9iaWxlIH0pID0+IHtcclxuICBjb25zdCBuYXZJdGVtcyA9IGdldE5hdkl0ZW1zKCk7XHJcbiAgY29uc3QgaGFuZGxlUGFnZUNsaWNrID0gKHBhZ2UpID0+IHtcclxuICAgIGlmIChwYWdlICE9PSBcIk1lXCIgJiYgcGFnZSAhPT0gXCJGb3IgQnVzaW5lc3NcIiAmJiBwYWdlICE9PSBcIkFkdmVydGlzZVwiKSB7XHJcbiAgICAgIHNldFBhZ2UocGFnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGlzdCA9IG5hdkl0ZW1zLm1hcCgobmF2SXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLy8gSWYgZm9yIGJ1c2luZXNzIHNob3cgYm9yZGVyXHJcbiAgICAgIDxsaVxyXG4gICAgICAgIGtleT17bmF2SXRlbS5saW5rfVxyXG4gICAgICAgIGNsYXNzTmFtZT17cGFnZSA9PT0gXCJGb3IgQnVzaW5lc3NcIiA/IFwiYm9yZGVyLWxlZnQtMVwiIDogXCJcIn1cclxuICAgICAgPlxyXG4gICAgICAgIHsvKiBJZiBwYWdlIGlzIGN1cnJlbnRseSBzZWxlY3RlZCBzZXQgYXMgYWN0aXZlICAqL31cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNsaWNrKHBhZ2UpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtwYWdlID09PSBuYXZJdGVtLmxpbmsgPyBcIm5hdi1hY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bmF2SXRlbS5saW5rICE9PSBcIk1lXCIgJiYgc3ZnUmVhZGVyKG5hdkl0ZW0uc3ZnKX1cclxuICAgICAgICAgIHtuYXZJdGVtLmxpbmsgPT09IFwiTWVcIiAmJiAoXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9maWxlSW1nfSBjbGFzc05hbWU9XCJwcm9maWxlLWltZy1zbVwiIC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHsvKiBPbmx5IHNob3cgaWYgbm90IG9uIG1vYmlsZSAqL31cclxuICAgICAgICAgIHshaXNNb2JpbGUgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5rLW5hbWVcIj5cclxuICAgICAgICAgICAgICB7bmF2SXRlbS5saW5rfVxyXG5cclxuICAgICAgICAgICAgICB7LyogU2hvdyBjYXJldCBpZiBQYWdlIGlzIFwiTWVcIiBvciBcIkZvciBCdXNpbmVzc1wiICovfVxyXG4gICAgICAgICAgICAgIHsocGFnZSA9PT0gXCJNZVwiIHx8IHBhZ2UgPT09IFwiRm9yIEJ1c2luZXNzXCIpICYmIChcclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zdmcvY2FyZXRcIiAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge3BhZ2UgPT09IFwiSG9tZVwiICYmIG5ld1Bvc3QgPT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24tYmFkZ2VcIj48L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtwYWdlID09PSBcIk1lc3NhZ2luZ1wiICYmIG5ld01lc3NhZ2VzID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lc3NhZ2luZyBub3RpZmljYXRpb24tYmFkZ2VcIj57bmV3TWVzc2FnZXN9PC9zcGFuPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7cGFnZSA9PT0gXCJOb3RpZmljYXRpb25zXCIgJiYgbmV3Tm90aWZpY2F0aW9ucyA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25zIG5vdGlmaWNhdGlvbi1iYWRnZVwiPlxyXG4gICAgICAgICAgICAgIHtuZXdOb3RpZmljYXRpb25zfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAge3BhZ2UgPT09IFwiTWVcIiAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIHByb2ZpbGUtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2ZpbGVJbWd9IGNsYXNzTmFtZT1cInByb2ZpbGUtaW1nLW1kXCIgLz5cclxuICAgICAgICAgICAge3VzZXJOYW1lfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3BhZ2UgPT09IFwiRm9yIEJ1c2luZXNzXCIgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBidXNpbmVzcy1kcm9wZG93blwiPkZvciBCdXNpbmVzczwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbGk+XHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+PC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdLCJuYW1lcyI6WyJnZXROYXZJdGVtcyIsIk5hdiIsInBhZ2UiLCJzZXRQYWdlIiwicHJvZmlsZUltZyIsInVzZXJOYW1lIiwibmV3UG9zdCIsImlzTW9iaWxlIiwibmF2SXRlbXMiLCJoYW5kbGVQYWdlQ2xpY2siLCJsaXN0IiwibWFwIiwibmF2SXRlbSIsImxpIiwiY2xhc3NOYW1lIiwiYSIsIm9uQ2xpY2siLCJsaW5rIiwic3ZnUmVhZGVyIiwic3ZnIiwiaW1nIiwic3JjIiwic3BhbiIsIm5ld01lc3NhZ2VzIiwibmV3Tm90aWZpY2F0aW9ucyIsImRpdiIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/linkedinlayout/Nav.js\n"));

/***/ })

});