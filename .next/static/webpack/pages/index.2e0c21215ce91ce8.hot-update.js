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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ \"./components/linkedinlayout/NavBar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_page_sizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/page-sizes */ \"./data/page-sizes.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst LinkedInLayout = (param)=>{\n    let { children, user } = param;\n    _s();\n    const [pageWidth, setPageWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(580);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Home\");\n    const newPost = true;\n    const newRequests = 2;\n    const newNotifications = 12;\n    const handleWindowSizeChange = ()=>{\n        const width = window.innerWidth;\n        setPageWidth(width);\n    };\n    setTimeout(()=>{\n        handleWindowSizeChange();\n    }, 1000);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowSizeChange);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowSizeChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    paddingBottom: \"2rem\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"top-bar bg-wh\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                page: page,\n                                setPage: setPage,\n                                profileImg: user.profileImg,\n                                userName: user.name,\n                                newPost: newPost,\n                                pageWidth: pageWidth,\n                                pageSizes: _data_page_sizes__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                newRequests: newRequests,\n                                newNotifications: newNotifications\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(pageWidth <= _data_page_sizes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].second ? \"mobile-viewport \" : \" \", \"\\n            \").concat(pageWidth <= _data_page_sizes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sixth ? \"md-viewport\" : \"\"),\n                        style: {\n                            position: \"relative\",\n                            top: \"4.5rem\",\n                            padding: \"0 0.8rem\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\linkedIn\\\\components\\\\linkedinlayout\\\\linkedinlayout.js\",\n                lineNumber: 57,\n                columnNumber: 19\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(LinkedInLayout, \"ScN+zRLnZAPvGAkh9YLa8iiejR8=\");\n_c = LinkedInLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkedInLayout);\nvar _c;\n$RefreshReg$(_c, \"LinkedInLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpbmtlZGlubGF5b3V0L2xpbmtlZGlubGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUNjO0FBQ0M7QUFFN0MsTUFBTUksaUJBQWlCO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUU7O0lBQ3hDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTVUsVUFBVTtJQUNoQixNQUFNQyxjQUFjO0lBQ3BCLE1BQU1DLG1CQUFtQjtJQUV6QixNQUFNQyx5QkFBeUI7UUFDN0IsTUFBTUMsUUFBUUMsT0FBT0M7UUFDckJULGFBQWFPO0lBQ2Y7SUFFQUcsV0FBVztRQUNUSjtJQUNGLEdBQUc7SUFFSFosZ0RBQVNBLENBQUM7UUFDUmMsT0FBT0csaUJBQWlCLFVBQVVMO1FBRWxDLE9BQU87WUFDTEUsT0FBT0ksb0JBQW9CLFVBQVVOO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDTztnQkFBSUMsT0FBTztvQkFBRUMsZUFBZTtnQkFBTzs7a0NBQ2xDLDhEQUFDRjt3QkFBSUcsV0FBVTtrQ0FDYiw0RUFBQ0g7NEJBQUlHLFdBQVU7c0NBQ2IsNEVBQUN4QiwrQ0FBTUE7Z0NBQ0xTLE1BQU1BO2dDQUNOQyxTQUFTQTtnQ0FDVGUsWUFBWW5CLEtBQUttQjtnQ0FDakJDLFVBQVVwQixLQUFLcUI7Z0NBQ2ZoQixTQUFTQTtnQ0FDVEosV0FBV0E7Z0NBQ1hKLFdBQVdBLHdEQUFTQTtnQ0FDcEJTLGFBQWFBO2dDQUNiQyxrQkFBa0JBOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUt4Qiw4REFBQ1E7d0JBQ0NHLFdBQ0UsR0FDRWpCLE9BRENBLGFBQWFKLCtEQUFnQnlCLEdBQUcscUJBQXFCLEtBQUksa0JBQ1IsT0FBbERyQixhQUFhSiw4REFBZTBCLEdBQUcsZ0JBQWdCO3dCQUVuRFAsT0FBTzs0QkFBRVEsVUFBVTs0QkFBWUMsS0FBSzs0QkFBVUMsU0FBUzt3QkFBVztrQ0FDbEUsNEVBQUNYOzRCQUFJRyxXQUFVO3NDQUFhbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdoQyw4REFBQzRCOzs7OzswQkFBSyw4REFBQ0E7Ozs7OzBCQUFLLDhEQUFDQTs7Ozs7OztBQUduQjtHQXZETTdCO0tBQUFBO0FBeUROLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGlua2VkaW5sYXlvdXQvbGlua2VkaW5sYXlvdXQuanM/MjdkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gXCIuL05hdkJhclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwYWdlU2l6ZXMgZnJvbSAnLi4vLi4vZGF0YS9wYWdlLXNpemVzJ1xyXG5cclxuY29uc3QgTGlua2VkSW5MYXlvdXQgPSAoeyBjaGlsZHJlbiwgdXNlciB9KSA9PiB7XHJcbiAgY29uc3QgW3BhZ2VXaWR0aCwgc2V0UGFnZVdpZHRoXSA9IHVzZVN0YXRlKDU4MCk7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoXCJIb21lXCIpO1xyXG4gIGNvbnN0IG5ld1Bvc3QgPSB0cnVlO1xyXG4gIGNvbnN0IG5ld1JlcXVlc3RzID0gMjtcclxuICBjb25zdCBuZXdOb3RpZmljYXRpb25zID0gMTJcclxuXHJcbiAgY29uc3QgaGFuZGxlV2luZG93U2l6ZUNoYW5nZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBzZXRQYWdlV2lkdGgod2lkdGgpO1xyXG4gIH07XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaGFuZGxlV2luZG93U2l6ZUNoYW5nZSgpO1xyXG4gIH0sIDEwMDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93U2l6ZUNoYW5nZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93U2l6ZUNoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCIycmVtXCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFyIGJnLXdoXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8TmF2QmFyXHJcbiAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICBzZXRQYWdlPXtzZXRQYWdlfVxyXG4gICAgICAgICAgICAgIHByb2ZpbGVJbWc9e3VzZXIucHJvZmlsZUltZ31cclxuICAgICAgICAgICAgICB1c2VyTmFtZT17dXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgIG5ld1Bvc3Q9e25ld1Bvc3R9XHJcbiAgICAgICAgICAgICAgcGFnZVdpZHRoPXtwYWdlV2lkdGh9XHJcbiAgICAgICAgICAgICAgcGFnZVNpemVzPXtwYWdlU2l6ZXN9XHJcbiAgICAgICAgICAgICAgbmV3UmVxdWVzdHM9e25ld1JlcXVlc3RzfVxyXG4gICAgICAgICAgICAgIG5ld05vdGlmaWNhdGlvbnM9e25ld05vdGlmaWNhdGlvbnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGAke3BhZ2VXaWR0aCA8PSBwYWdlU2l6ZXMuc2Vjb25kID8gXCJtb2JpbGUtdmlld3BvcnQgXCIgOiBcIiBcIn1cclxuICAgICAgICAgICAgJHtwYWdlV2lkdGggPD0gcGFnZVNpemVzLnNpeHRoID8gXCJtZC12aWV3cG9ydFwiIDogXCJcIn1gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IFwiNC41cmVtXCIsIHBhZGRpbmc6IFwiMCAwLjhyZW1cIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyIC8+PGJyIC8+PGJyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlua2VkSW5MYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJOYXZCYXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInBhZ2VTaXplcyIsIkxpbmtlZEluTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VyIiwicGFnZVdpZHRoIiwic2V0UGFnZVdpZHRoIiwicGFnZSIsInNldFBhZ2UiLCJuZXdQb3N0IiwibmV3UmVxdWVzdHMiLCJuZXdOb3RpZmljYXRpb25zIiwiaGFuZGxlV2luZG93U2l6ZUNoYW5nZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsInN0eWxlIiwicGFkZGluZ0JvdHRvbSIsImNsYXNzTmFtZSIsInByb2ZpbGVJbWciLCJ1c2VyTmFtZSIsIm5hbWUiLCJzZWNvbmQiLCJzaXh0aCIsInBvc2l0aW9uIiwidG9wIiwicGFkZGluZyIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/linkedinlayout/linkedinlayout.js\n"));

/***/ })

});