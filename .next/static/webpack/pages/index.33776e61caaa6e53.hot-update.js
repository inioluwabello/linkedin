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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ \"./components/linkedinlayout/NavBar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/user */ \"./data/user.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst LinkedInLayout = (param)=>{\n    let { children } = param;\n    _s();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Home\");\n    const newPost = true;\n    const handleWindowSizeChange = ()=>{\n        setIsMobile(window.innerWidth <= 769);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowSizeChange);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowSizeChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            paddingBottom: \"2rem\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                page: page,\n                setPage: setPage,\n                profileImg: _data_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].profileImg,\n                userName: _data_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].name,\n                newPost: newPost,\n                isMobile: isMobile\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LinkedInLayout, \"GPLi6reXhJ3eQQri3u3SkkLUYss=\");\n_c = LinkedInLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkedInLayout);\nvar _c;\n$RefreshReg$(_c, \"LinkedInLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpbmtlZGlubGF5b3V0L2xpbmtlZGlubGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUNHO0FBQ0U7QUFDRDtBQUVsQyxNQUFNSSxpQkFBaUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ2xDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDakMsTUFBTVMsVUFBVTtJQUVkLE1BQU1DLHlCQUF5QjtRQUM3QkosWUFBWUssT0FBT0MsY0FBYztJQUNuQztJQUNGVixnREFBU0EsQ0FBQztRQUVSUyxPQUFPRSxpQkFBaUIsVUFBVUg7UUFFbEMsT0FBTztZQUNMQyxPQUFPRyxvQkFBb0IsVUFBVUo7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7UUFBSUMsT0FBTztZQUFFQyxlQUFlO1FBQU87OzBCQUNsQyw4REFBQ2xCLCtDQUFNQTtnQkFDTFEsTUFBTUE7Z0JBQ05DLFNBQVNBO2dCQUNUVSxZQUFZakIsNkRBQWVpQjtnQkFDM0JDLFVBQVVsQix1REFBU21CO2dCQUNuQlgsU0FBU0E7Z0JBQ1RKLFVBQVVBOzs7Ozs7MEJBRVosOERBQUNnQjswQkFBTWpCOzs7Ozs7Ozs7Ozs7QUFHYjtHQTlCTUQ7S0FBQUE7QUFnQ04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saW5rZWRpbmxheW91dC9saW5rZWRpbmxheW91dC5qcz8yN2RjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZCYXIgZnJvbSBcIi4vTmF2QmFyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VyIGZyb20gXCIuLi8uLi9kYXRhL3VzZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMaW5rZWRJbkxheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShcIkhvbWVcIik7XHJcbiAgY29uc3QgbmV3UG9zdCA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlV2luZG93U2l6ZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgc2V0SXNNb2JpbGUod2luZG93LmlubmVyV2lkdGggPD0gNzY5KTtcclxuICAgIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93U2l6ZUNoYW5nZSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMnJlbVwiIH19PlxyXG4gICAgICA8TmF2QmFyXHJcbiAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICBzZXRQYWdlPXtzZXRQYWdlfVxyXG4gICAgICAgIHByb2ZpbGVJbWc9e3VzZXIucHJvZmlsZUltZ31cclxuICAgICAgICB1c2VyTmFtZT17dXNlci5uYW1lfVxyXG4gICAgICAgIG5ld1Bvc3Q9e25ld1Bvc3R9XHJcbiAgICAgICAgaXNNb2JpbGU9e2lzTW9iaWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtlZEluTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiTmF2QmFyIiwidXNlU3RhdGUiLCJ1c2VyIiwidXNlRWZmZWN0IiwiTGlua2VkSW5MYXlvdXQiLCJjaGlsZHJlbiIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJwYWdlIiwic2V0UGFnZSIsIm5ld1Bvc3QiLCJoYW5kbGVXaW5kb3dTaXplQ2hhbmdlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2Iiwic3R5bGUiLCJwYWRkaW5nQm90dG9tIiwicHJvZmlsZUltZyIsInVzZXJOYW1lIiwibmFtZSIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/linkedinlayout/linkedinlayout.js\n"));

/***/ })

});