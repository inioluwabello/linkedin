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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ \"./components/linkedinlayout/NavBar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/user */ \"./data/user.js\");\n/* harmony import */ var _data_page_sizes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/page-sizes */ \"./data/page-sizes.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst LinkedInLayout = (param)=>{\n    let { children } = param;\n    _s();\n    const [pageWidth, setPageWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(580);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Home\");\n    const newPost = true;\n    const newRequests = 2;\n    const newNotifications = 111;\n    const handleWindowSizeChange = ()=>{\n        const width = window.innerWidth;\n        setPageWidth(width);\n    };\n    setTimeout(()=>{\n        handleWindowSizeChange();\n    }, 1000);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowSizeChange);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowSizeChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                paddingBottom: \"2rem\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"top-bar bg-wh\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            page: page,\n                            setPage: setPage,\n                            profileImg: _data_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].profileImg,\n                            userName: _data_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].name,\n                            newPost: newPost,\n                            pageWidth: pageWidth,\n                            pageSizes: _data_page_sizes__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            newRequests: newRequests,\n                            newNotifications: newNotifications\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(pageWidth <= _data_page_sizes__WEBPACK_IMPORTED_MODULE_4__[\"default\"].second ? \"mobile-viewport\" : \"\"),\n                    style: {\n                        position: \"relative\",\n                        top: \"3.5rem\",\n                        padding: \"0 0.8rem\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(LinkedInLayout, \"ScN+zRLnZAPvGAkh9YLa8iiejR8=\");\n_c = LinkedInLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkedInLayout);\nvar _c;\n$RefreshReg$(_c, \"LinkedInLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpbmtlZGlubGF5b3V0L2xpbmtlZGlubGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDYztBQUNUO0FBQ1U7QUFFN0MsTUFBTUssaUJBQWlCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUNsQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1VLFVBQVU7SUFDaEIsTUFBTUMsY0FBYztJQUNwQixNQUFNQyxtQkFBbUI7SUFFekIsTUFBTUMseUJBQXlCO1FBQzdCLE1BQU1DLFFBQVFDLE9BQU9DO1FBQ3JCVCxhQUFhTztJQUNmO0lBRUFHLFdBQVc7UUFDVEo7SUFDRixHQUFHO0lBRUhaLGdEQUFTQSxDQUFDO1FBQ1JjLE9BQU9HLGlCQUFpQixVQUFVTDtRQUVsQyxPQUFPO1lBQ0xFLE9BQU9JLG9CQUFvQixVQUFVTjtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNFLDRFQUFDTztZQUFJQyxPQUFPO2dCQUFFQyxlQUFlO1lBQU87OzhCQUNsQyw4REFBQ0Y7b0JBQUlHLFdBQVU7OEJBQ2IsNEVBQUNIO3dCQUFJRyxXQUFVO2tDQUNiLDRFQUFDeEIsK0NBQU1BOzRCQUNMUyxNQUFNQTs0QkFDTkMsU0FBU0E7NEJBQ1RlLFlBQVl0Qiw2REFBZXNCOzRCQUMzQkMsVUFBVXZCLHVEQUFTd0I7NEJBQ25CaEIsU0FBU0E7NEJBQ1RKLFdBQVdBOzRCQUNYSCxXQUFXQSx3REFBU0E7NEJBQ3BCUSxhQUFhQTs0QkFDYkMsa0JBQWtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLeEIsOERBQUNRO29CQUNDRyxXQUFXLEdBQTBELE9BQXZEakIsYUFBYUgsK0RBQWdCd0IsR0FBRyxvQkFBb0I7b0JBQ2xFTixPQUFPO3dCQUFFTyxVQUFVO3dCQUFZQyxLQUFLO3dCQUFVQyxTQUFTO29CQUFXOzhCQUNsRSw0RUFBQ1Y7d0JBQUlHLFdBQVU7a0NBQWFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RDO0dBbkRNRDtLQUFBQTtBQXFETiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xpbmtlZGlubGF5b3V0L2xpbmtlZGlubGF5b3V0LmpzPzI3ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9OYXZCYXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlciBmcm9tIFwiLi4vLi4vZGF0YS91c2VyXCI7XHJcbmltcG9ydCBwYWdlU2l6ZXMgZnJvbSAnLi4vLi4vZGF0YS9wYWdlLXNpemVzJ1xyXG5cclxuY29uc3QgTGlua2VkSW5MYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3BhZ2VXaWR0aCwgc2V0UGFnZVdpZHRoXSA9IHVzZVN0YXRlKDU4MCk7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoXCJIb21lXCIpO1xyXG4gIGNvbnN0IG5ld1Bvc3QgPSB0cnVlO1xyXG4gIGNvbnN0IG5ld1JlcXVlc3RzID0gMjtcclxuICBjb25zdCBuZXdOb3RpZmljYXRpb25zID0gMTExXHJcblxyXG4gIGNvbnN0IGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgc2V0UGFnZVdpZHRoKHdpZHRoKTtcclxuICB9O1xyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UoKTtcclxuICB9LCAxMDAwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMnJlbVwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhciBiZy13aFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPE5hdkJhclxyXG4gICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgc2V0UGFnZT17c2V0UGFnZX1cclxuICAgICAgICAgICAgICBwcm9maWxlSW1nPXt1c2VyLnByb2ZpbGVJbWd9XHJcbiAgICAgICAgICAgICAgdXNlck5hbWU9e3VzZXIubmFtZX1cclxuICAgICAgICAgICAgICBuZXdQb3N0PXtuZXdQb3N0fVxyXG4gICAgICAgICAgICAgIHBhZ2VXaWR0aD17cGFnZVdpZHRofVxyXG4gICAgICAgICAgICAgIHBhZ2VTaXplcz17cGFnZVNpemVzfVxyXG4gICAgICAgICAgICAgIG5ld1JlcXVlc3RzPXtuZXdSZXF1ZXN0c31cclxuICAgICAgICAgICAgICBuZXdOb3RpZmljYXRpb25zPXtuZXdOb3RpZmljYXRpb25zfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3BhZ2VXaWR0aCA8PSBwYWdlU2l6ZXMuc2Vjb25kID8gXCJtb2JpbGUtdmlld3BvcnRcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogXCIzLjVyZW1cIiwgcGFkZGluZzogXCIwIDAuOHJlbVwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtlZEluTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiTmF2QmFyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwicGFnZVNpemVzIiwiTGlua2VkSW5MYXlvdXQiLCJjaGlsZHJlbiIsInBhZ2VXaWR0aCIsInNldFBhZ2VXaWR0aCIsInBhZ2UiLCJzZXRQYWdlIiwibmV3UG9zdCIsIm5ld1JlcXVlc3RzIiwibmV3Tm90aWZpY2F0aW9ucyIsImhhbmRsZVdpbmRvd1NpemVDaGFuZ2UiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJzdHlsZSIsInBhZGRpbmdCb3R0b20iLCJjbGFzc05hbWUiLCJwcm9maWxlSW1nIiwidXNlck5hbWUiLCJuYW1lIiwic2Vjb25kIiwicG9zaXRpb24iLCJ0b3AiLCJwYWRkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/linkedinlayout/linkedinlayout.js\n"));

/***/ })

});