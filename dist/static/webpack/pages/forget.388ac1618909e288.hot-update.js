"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forget",{

/***/ "./pages/forget.js":
/*!*************************!*\
  !*** ./pages/forget.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_LogReg_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/LogReg.module.scss */ \"./styles/LogReg.module.scss\");\n/* harmony import */ var _styles_LogReg_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_LogReg_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_member__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/member */ \"./api/member.js\");\n/* harmony import */ var _setPassword_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setPassword.js */ \"./pages/setPassword.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! zod */ \"./node_modules/zod/lib/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Forget = ()=>{\n    _s();\n    const [resend, setResend] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const schemaEmail = zod__WEBPACK_IMPORTED_MODULE_7__.z.string().email({\n        message: \"請填寫正確的電郵\"\n    });\n    const schemaOpt = zod__WEBPACK_IMPORTED_MODULE_7__.z.string().length(6, {\n        message: \"請填寫正確的Opt\"\n    });\n    //   存直\n    const [myForm, setMyForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\"\n    });\n    //   存錯誤\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        hasErrors: false,\n        email: \"\"\n    });\n    // 設定錯誤\n    const changeHandler = (e)=>{\n        setMyForm({\n            ...myForm,\n            [e.target.name]: e.target.value\n        });\n    };\n    // \n    const [myForm2, setMyForm2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        opt: \"\"\n    });\n    const [errors2, setErrors2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        hasErrors: false,\n        opt: \"\"\n    });\n    // 寄送email\n    const emailHandler = async (e)=>{\n        e.preventDefault();\n        // 檢查欄位資料\n        let initErrors = {\n            hasErrors: false,\n            email: \"\"\n        };\n        const r1 = schemaEmail.safeParse(myForm.email);\n        if (!r1.success) {\n            initErrors = {\n                ...initErrors,\n                hasErrors: true,\n                email: r1.error.issues[0].message\n            };\n        }\n        if (initErrors.hasErrors) {\n            setErrors(initErrors);\n            return; // 欄位檢查時, 有錯誤的話, 就不發 AJAX\n        } else {\n            setErrors({\n                hasErrors: false,\n                email: \"\"\n            });\n        }\n        const result = await sendEmail(myForm);\n        if (result) {\n            setStep(2);\n        } else {\n            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({\n                title: \"錯誤\",\n                text: \"資料沒有修改\",\n                icon: \"error\"\n            });\n        }\n    };\n    // 檢查 \n    const checkoptHandler = async (e)=>{\n        e.preventDefault();\n        // 檢查欄位資料\n        let initErrors = {\n            hasErrors: false,\n            opt: \"\"\n        };\n        const r1 = schemaOpt.safeParse(myForm2.opt);\n        if (!r1.success) {\n            initErrors = {\n                ...initErrors,\n                hasErrors: true,\n                opt: r1.error.issues[0].message\n            };\n        }\n        if (initErrors.hasErrors) {\n            setErrors2(initErrors);\n            return; // 欄位檢查時, 有錯誤的話, 就不發 AJAX\n        } else {\n            setErrors2({\n                hasErrors: false,\n                opt: \"\"\n            });\n        }\n        setMyForm2({\n            ...myForm2,\n            email: myForm.email\n        });\n        const result = await (0,_api_member__WEBPACK_IMPORTED_MODULE_4__.checkEmail)(myForm2);\n        if (result.success) {\n            setStep(3);\n        } else if (result.code) {\n            setResend(1);\n            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({\n                title: \"錯誤\",\n                text: result.msg,\n                icon: \"error\"\n            });\n        } else if (!result.succes) {\n            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({\n                title: \"錯誤\",\n                text: result.msg,\n                icon: \"error\"\n            });\n        } else {\n            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({\n                title: \"錯誤\",\n                text: \"資料沒有修改\",\n                icon: \"error\"\n            });\n        }\n    };\n    const StepOne = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"post\",\n            onSubmit: emailHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: \"請輸入註冊email\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 128,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: errors.email ? \"error\" : \"errorcancel\",\n                    value: myForm.email,\n                    onChange: changeHandler,\n                    type: \"text\",\n                    name: \"email\",\n                    id: \"email\",\n                    text: true,\n                    placeholder: \"email\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 129,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: \"請檢查Email驗證碼\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 130,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"errorsmail\",\n                    children: [\n                        \" \",\n                        errors.email\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 131,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"maillbtn\",\n                    children: \"驗證碼\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 132,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n            lineNumber: 127,\n            columnNumber: 13\n        }, undefined);\n    };\n    const StepTwo = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"post\",\n            onSubmit: checkoptHandler,\n            children: [\n                myForm.email,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: errors2.opt ? \"error\" : \"errorcancel\",\n                    value: myForm2.opt,\n                    onChange: changeHandler2,\n                    type: \"text\",\n                    name: \"opt\",\n                    id: \"opt\",\n                    placeholder: \"請檢查Email驗證碼\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 141,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"errorsmail\",\n                    children: [\n                        \" \",\n                        errors2.opt\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 142,\n                    columnNumber: 17\n                }, undefined),\n                resend ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"maillbtn\",\n                    children: \"檢查送出\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 143,\n                    columnNumber: 26\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: sendEmail,\n                    className: \"maillbtn\",\n                    children: \"重新發送\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 143,\n                    columnNumber: 70\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n            lineNumber: 139,\n            columnNumber: 13\n        }, undefined);\n    };\n    const StepThree = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_setPassword_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            email: myForm.email\n        }, void 0, false, {\n            fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n            lineNumber: 150,\n            columnNumber: 13\n        }, undefined);\n    };\n    const SelectPage = ()=>{\n        if (step == 1) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StepOne, {}, void 0, false, {\n                fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                lineNumber: 155,\n                columnNumber: 20\n            }, undefined);\n        } else if (step == 2) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StepTwo, {}, void 0, false, {\n                fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                lineNumber: 157,\n                columnNumber: 20\n            }, undefined);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StepThree, {}, void 0, false, {\n                fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                lineNumber: 159,\n                columnNumber: 20\n            }, undefined);\n        }\n    };\n    const sendEmail = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_LogReg_module_scss__WEBPACK_IMPORTED_MODULE_3___default().forget),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"忘記密碼\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 168,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectPage, {}, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 169,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/Register\",\n                            children: \"回登入\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                            lineNumber: 171,\n                            columnNumber: 21\n                        }, undefined),\n                        \" |\\xa0\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: \"首頁\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                            lineNumber: 172,\n                            columnNumber: 21\n                        }, undefined),\n                        \" \\xa0\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 170,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n            lineNumber: 167,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n        lineNumber: 166,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Forget, \"TL7r4YiCKxKzpPLQDYGcNFLjtmg=\");\n_c = Forget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Forget);\nvar _c;\n$RefreshReg$(_c, \"Forget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxHQUFHLEdBQUcsVUFBVTtvQkFBZUgsT0FBT0MsUUFBUUUsR0FBRztvQkFBRTJCLFVBQVVPO29CQUFnQk4sTUFBSztvQkFBT2hDLE1BQUs7b0JBQU1pQyxJQUFHO29CQUFNQyxhQUFZOzs7Ozs7OEJBQ25KLDhEQUFDQztvQkFBS0wsV0FBVTs7d0JBQWE7d0JBQUV6QixRQUFRRCxHQUFHOzs7Ozs7O2dCQUN6Q3RCLHVCQUFRLDhEQUFDc0Q7b0JBQU9OLFdBQVU7OEJBQVc7Ozs7OzhDQUFlLDhEQUFDTTtvQkFBT0csU0FBUy9EO29CQUFXc0QsV0FBVTs4QkFBVzs7Ozs7Ozs7Ozs7O0lBSWxIO0lBQ0EsTUFBTVUsWUFBWTtRQUNkLHFCQUNJLDhEQUFDOUQsdURBQVdBO1lBQUNVLE9BQU9JLE9BQU9KLEtBQUs7Ozs7OztJQUV4QztJQUNBLE1BQU1xRCxhQUFhO1FBQ2YsSUFBSXpELFFBQVEsR0FBRztZQUNYLHFCQUFPLDhEQUFDd0M7Ozs7O1FBQ1osT0FBTyxJQUFJeEMsUUFBUSxHQUFHO1lBQ2xCLHFCQUFPLDhEQUFDcUQ7Ozs7O1FBQ1osT0FBTztZQUNILHFCQUFPLDhEQUFDRzs7Ozs7UUFDWjtJQUNKO0lBQ0EsTUFBTWhFLFlBQVUsS0FFaEI7SUFDQSxxQkFDSSw4REFBQ2tFO2tCQUNHLDRFQUFDQTtZQUFJWixXQUFXdkQsMEVBQVk7OzhCQUN4Qiw4REFBQ3FFOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNIOzs7Ozs4QkFDRCw4REFBQ0M7O3NDQUNHLDhEQUFDcEUsa0RBQUlBOzRCQUFDdUUsTUFBSztzQ0FBWTs7Ozs7O3dCQUFVO3NDQUNqQyw4REFBQ3ZFLGtEQUFJQTs0QkFBQ3VFLE1BQUs7c0NBQUk7Ozs7Ozt3QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVDO0dBektNaEU7S0FBQUE7QUEyS04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ2V0LmpzP2VhYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiQC9zdHlsZXMvTG9nUmVnLm1vZHVsZS5zY3NzXCJcclxuaW1wb3J0IHsgc2VuZEVtYWlsLCBjaGVja0VtYWlsIH0gZnJvbSBcIkAvYXBpL21lbWJlclwiXHJcbmltcG9ydCBTZXRwYXNzd29yZCBmcm9tIFwiLi9zZXRQYXNzd29yZC5qc1wiO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuY29uc3QgRm9yZ2V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Jlc2VuZCwgc2V0UmVzZW5kXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBzY2hlbWFFbWFpbCA9IHouc3RyaW5nKCkuZW1haWwoeyBtZXNzYWdlOiBcIuiri+Whq+Wvq+ato+eiuueahOmbu+mDtVwiIH0pO1xyXG4gICAgY29uc3Qgc2NoZW1hT3B0ID0gei5zdHJpbmcoKS5sZW5ndGgoNiwgeyBtZXNzYWdlOiBcIuiri+Whq+Wvq+ato+eiuueahE9wdFwiIH0pO1xyXG4gICAgLy8gICDlrZjnm7RcclxuICAgIGNvbnN0IFtteUZvcm0sIHNldE15Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6IFwiXCJcclxuICAgIH0pO1xyXG4gICAgLy8gICDlrZjpjK/oqqRcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaGFzRXJyb3JzOiBmYWxzZSwgLy8g5Yik5pa35pyJ5rKS5pyJ6Yyv6KqkIFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgICAvLyDoqK3lrprpjK/oqqRcclxuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldE15Rm9ybSh7IC4uLm15Rm9ybSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH07XHJcbiBcclxuICAgIC8vIFxyXG4gICAgY29uc3QgW215Rm9ybTIsIHNldE15Rm9ybTJdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIG9wdDogXCJcIlxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbZXJyb3JzMiwgc2V0RXJyb3JzMl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaGFzRXJyb3JzOiBmYWxzZSwgLy8g5Yik5pa35pyJ5rKS5pyJ6Yyv6KqkIFxyXG4gICAgICAgIG9wdDogXCJcIixcclxuICAgIH0pO1xyXG4vLyDlr4TpgIFlbWFpbFxyXG4gICAgY29uc3QgZW1haWxIYW5kbGVyID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8g5qqi5p+l5qyE5L2N6LOH5paZXHJcbiAgICAgICAgbGV0IGluaXRFcnJvcnMgPSB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yczogZmFsc2UsIC8vIOWIpOaWt+acieaykuaciemMr+iqpCBcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCByMSA9IHNjaGVtYUVtYWlsLnNhZmVQYXJzZShteUZvcm0uZW1haWwpO1xyXG4gICAgICAgIGlmICghcjEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBpbml0RXJyb3JzID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uaW5pdEVycm9ycyxcclxuICAgICAgICAgICAgICAgIGhhc0Vycm9yczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiByMS5lcnJvci5pc3N1ZXNbMF0ubWVzc2FnZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluaXRFcnJvcnMuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9ycyhpbml0RXJyb3JzKTtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyDmrITkvY3mqqLmn6XmmYIsIOaciemMr+iqpOeahOipsSwg5bCx5LiN55m8IEFKQVhcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRFcnJvcnMoe1xyXG4gICAgICAgICAgICAgICAgaGFzRXJyb3JzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kRW1haWwobXlGb3JtKTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHNldFN0ZXAoMilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi6Yyv6KqkXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIuizh+aWmeaykuacieS/ruaUuVwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuLy8g5qqi5p+lIFxyXG4gICAgY29uc3QgY2hlY2tvcHRIYW5kbGVyID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8g5qqi5p+l5qyE5L2N6LOH5paZXHJcbiAgICAgICAgbGV0IGluaXRFcnJvcnMgPSB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yczogZmFsc2UsIC8vIOWIpOaWt+acieaykuaciemMr+iqpCBcclxuICAgICAgICAgICAgb3B0OiBcIlwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcjEgPSBzY2hlbWFPcHQuc2FmZVBhcnNlKG15Rm9ybTIub3B0KTtcclxuICAgICAgICBpZiAoIXIxLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgaW5pdEVycm9ycyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLmluaXRFcnJvcnMsXHJcbiAgICAgICAgICAgICAgICBoYXNFcnJvcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcHQ6IHIxLmVycm9yLmlzc3Vlc1swXS5tZXNzYWdlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5pdEVycm9ycy5oYXNFcnJvcnMpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JzMihpbml0RXJyb3JzKTtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyDmrITkvY3mqqLmn6XmmYIsIOaciemMr+iqpOeahOipsSwg5bCx5LiN55m8IEFKQVhcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRFcnJvcnMyKHtcclxuICAgICAgICAgICAgICAgIGhhc0Vycm9yczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBvcHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE15Rm9ybTIoeyAuLi5teUZvcm0yLCBlbWFpbDogbXlGb3JtLmVtYWlsIH0pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2hlY2tFbWFpbChteUZvcm0yKTtcclxuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgc2V0U3RlcCgzKVxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUpIHtcclxuICAgICAgICAgICAgc2V0UmVzZW5kKDEpO1xyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi6Yyv6KqkXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiByZXN1bHQubXNnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCFyZXN1bHQuc3VjY2VzKSB7XHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLpjK/oqqRcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJlc3VsdC5tc2csXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi6Yyv6KqkXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIuizh+aWmeaykuacieS/ruaUuVwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IFN0ZXBPbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cInBvc3RcIiBvblN1Ym1pdD17ZW1haWxIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxoNT7oq4vovLjlhaXoqLvlhoplbWFpbDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtlcnJvcnMuZW1haWwgPyBcImVycm9yXCIgOiBcImVycm9yY2FuY2VsXCJ9IHZhbHVlPXtteUZvcm0uZW1haWx9IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiB0ZXh0IHBsYWNlaG9sZGVyPVwiZW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGg1Puiri+aqouafpUVtYWls6amX6K2J56K8PC9oNT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yc21haWxcIj4ge2Vycm9ycy5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1haWxsYnRuXCI+6amX6K2J56K8PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgY29uc3QgU3RlcFR3byA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJwb3N0XCIgb25TdWJtaXQ9e2NoZWNrb3B0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICB7bXlGb3JtLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17ZXJyb3JzMi5vcHQgPyBcImVycm9yXCIgOiBcImVycm9yY2FuY2VsXCJ9IHZhbHVlPXtteUZvcm0yLm9wdH0gb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXIyfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJvcHRcIiBpZD1cIm9wdFwiIHBsYWNlaG9sZGVyPVwi6KuL5qqi5p+lRW1haWzpqZforYnnorxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JzbWFpbFwiPiB7ZXJyb3JzMi5vcHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3Jlc2VuZD8gPGJ1dHRvbiBjbGFzc05hbWU9XCJtYWlsbGJ0blwiPuaqouafpemAgeWHujwvYnV0dG9uPjogPGJ1dHRvbiBvbkNsaWNrPXtzZW5kRW1haWx9IGNsYXNzTmFtZT1cIm1haWxsYnRuXCI+6YeN5paw55m86YCBPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGNvbnN0IFN0ZXBUaHJlZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2V0cGFzc3dvcmQgZW1haWw9e215Rm9ybS5lbWFpbH0gLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBjb25zdCBTZWxlY3RQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdGVwID09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxTdGVwT25lIC8+XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGVwID09IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxTdGVwVHdvIC8+XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxTdGVwVGhyZWUgLz5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZW5kRW1haWw9KCk9PntcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZvcmdldH0+XHJcbiAgICAgICAgICAgICAgICA8aDI+5b+Y6KiY5a+G56K8PC9oMj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RQYWdlIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvUmVnaXN0ZXJcIj7lm57nmbvlhaU8L0xpbms+IHwmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPummlumggTwvTGluaz4gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcmdldCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTGluayIsInN0eWxlIiwic2VuZEVtYWlsIiwiY2hlY2tFbWFpbCIsIlNldHBhc3N3b3JkIiwiU3dhbCIsInoiLCJGb3JnZXQiLCJyZXNlbmQiLCJzZXRSZXNlbmQiLCJzdGVwIiwic2V0U3RlcCIsInNjaGVtYUVtYWlsIiwic3RyaW5nIiwiZW1haWwiLCJtZXNzYWdlIiwic2NoZW1hT3B0IiwibGVuZ3RoIiwibXlGb3JtIiwic2V0TXlGb3JtIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiaGFzRXJyb3JzIiwiY2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJteUZvcm0yIiwic2V0TXlGb3JtMiIsIm9wdCIsImVycm9yczIiLCJzZXRFcnJvcnMyIiwiZW1haWxIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJpbml0RXJyb3JzIiwicjEiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiZXJyb3IiLCJpc3N1ZXMiLCJyZXN1bHQiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsImNoZWNrb3B0SGFuZGxlciIsImNvZGUiLCJtc2ciLCJzdWNjZXMiLCJTdGVwT25lIiwiZm9ybSIsImFjdGlvbiIsIm9uU3VibWl0IiwiaDUiLCJpbnB1dCIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJzcGFuIiwiYnV0dG9uIiwiU3RlcFR3byIsImNoYW5nZUhhbmRsZXIyIiwib25DbGljayIsIlN0ZXBUaHJlZSIsIlNlbGVjdFBhZ2UiLCJkaXYiLCJmb3JnZXQiLCJoMiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/forget.js\n"));

/***/ })

});