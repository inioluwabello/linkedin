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

/***/ "./components/linkedinlayout/linkedinlayout.js":
/*!*****************************************************!*\
  !*** ./components/linkedinlayout/linkedinlayout.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ \"./components/linkedinlayout/NavBar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/user */ \"./data/user.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst LinkedInLayout = (param)=>{\n    let { children } = param;\n    _s();\n    const [pageWidth, setPageWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1200);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Home\");\n    const newPost = true;\n    const handleWindowSizeChange = ()=>{\n        const width1 = window.innerWidth;\n        setPageWidth(width1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowSizeChange);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowSizeChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            setPageWidth(width),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                style: {\n                    paddingBottom: \"2rem\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"top-bar bg-wh\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                page: page,\n                                setPage: setPage,\n                                profileImg: _data_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].profileImg,\n                                userName: _data_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].name,\n                                newPost: newPost,\n                                pageWidth: pageWidth\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"3rem\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(LinkedInLayout, \"weXcInhlzxJHLtav+oU72sD6Ay0=\");\n_c = LinkedInLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkedInLayout);\nvar _c;\n$RefreshReg$(_c, \"LinkedInLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpbmtlZGlubGF5b3V0L2xpbmtlZGlubGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUNjO0FBQ1Q7QUFFbkMsTUFBTUksaUJBQWlCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUNsQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1TLFVBQVU7SUFFaEIsTUFBTUMseUJBQXlCO1FBQzdCLE1BQU1DLFNBQVFDLE9BQU9DO1FBQ3JCUCxhQUFhSztJQUNmO0lBRUFWLGdEQUFTQSxDQUFDO1FBQ1JXLE9BQU9FLGlCQUFpQixVQUFVSjtRQUVsQyxPQUFPO1lBQ0xFLE9BQU9HLG9CQUFvQixVQUFVTDtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOztZQUNDSixhQUFhSzswQkFDWiw4REFBQ0s7Z0JBQUlDLFdBQVU7Z0JBQVlDLE9BQU87b0JBQUVDLGVBQWU7Z0JBQU87O2tDQUN4RCw4REFBQ0g7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDbEIsK0NBQU1BO2dDQUNMUSxNQUFNQTtnQ0FDTkMsU0FBU0E7Z0NBQ1RZLFlBQVlsQiw2REFBZWtCO2dDQUMzQkMsVUFBVW5CLHVEQUFTb0I7Z0NBQ25CYixTQUFTQTtnQ0FDVEosV0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS2pCLDhEQUFDVzt3QkFBSUUsT0FBTzs0QkFBRUssV0FBVzt3QkFBTzs7Ozs7O2tDQUNoQyw4REFBQ0M7a0NBQU1wQjs7Ozs7Ozs7Ozs7Ozs7QUFJZjtHQXhDTUQ7S0FBQUE7QUEwQ04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saW5rZWRpbmxheW91dC9saW5rZWRpbmxheW91dC5qcz8yN2RjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZCYXIgZnJvbSBcIi4vTmF2QmFyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4uLy4uL2RhdGEvdXNlclwiO1xyXG5cclxuY29uc3QgTGlua2VkSW5MYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3BhZ2VXaWR0aCwgc2V0UGFnZVdpZHRoXSA9IHVzZVN0YXRlKDEyMDApXHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoXCJIb21lXCIpO1xyXG4gIGNvbnN0IG5ld1Bvc3QgPSB0cnVlO1xyXG5cclxuICBjb25zdCBoYW5kbGVXaW5kb3dTaXplQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHNldFBhZ2VXaWR0aCh3aWR0aCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAge3NldFBhZ2VXaWR0aCh3aWR0aCl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCIycmVtXCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFyIGJnLXdoXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8TmF2QmFyXHJcbiAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICBzZXRQYWdlPXtzZXRQYWdlfVxyXG4gICAgICAgICAgICAgIHByb2ZpbGVJbWc9e3VzZXIucHJvZmlsZUltZ31cclxuICAgICAgICAgICAgICB1c2VyTmFtZT17dXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgIG5ld1Bvc3Q9e25ld1Bvc3R9XHJcbiAgICAgICAgICAgICAgcGFnZVdpZHRoPXtwYWdlV2lkdGh9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiM3JlbVwiIH19PjwvZGl2PlxyXG4gICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtlZEluTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiTmF2QmFyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwiTGlua2VkSW5MYXlvdXQiLCJjaGlsZHJlbiIsInBhZ2VXaWR0aCIsInNldFBhZ2VXaWR0aCIsInBhZ2UiLCJzZXRQYWdlIiwibmV3UG9zdCIsImhhbmRsZVdpbmRvd1NpemVDaGFuZ2UiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZ0JvdHRvbSIsInByb2ZpbGVJbWciLCJ1c2VyTmFtZSIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/linkedinlayout/linkedinlayout.js\n"));

/***/ })

});