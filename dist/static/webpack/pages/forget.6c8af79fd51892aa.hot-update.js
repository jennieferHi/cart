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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_LogReg_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/LogReg.module.scss */ \"./styles/LogReg.module.scss\");\n/* harmony import */ var _styles_LogReg_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_LogReg_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_member__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/member */ \"./api/member.js\");\n/* harmony import */ var _setPassword_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setPassword.js */ \"./pages/setPassword.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! zod */ \"./node_modules/zod/lib/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Forget = ()=>{\n    _s();\n    const [resend, setResend] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const schemaEmail = zod__WEBPACK_IMPORTED_MODULE_7__.z.string().email({\n        message: \"請填寫正確的電郵\"\n    });\n    const schemaOpt = zod__WEBPACK_IMPORTED_MODULE_7__.z.string().length(6, {\n        message: \"請填寫正確的Opt\"\n    });\n    //   存直\n    const [myForm, setMyForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\"\n    });\n    //   存錯誤\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        hasErrors: false,\n        email: \"\"\n    });\n    // 設定錯誤\n    const changeHandler = (e)=>{\n        setMyForm({\n            ...myForm,\n            [e.target.name]: e.target.value\n        });\n    };\n    const changeHandler2 = (e)=>{\n        setMyForm2({\n            ...myForm,\n            [e.target.name]: e.target.value\n        });\n    };\n    // \n    const [myForm2, setMyForm2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        opt: \"\"\n    });\n    const [errors2, setErrors2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        hasErrors: false,\n        opt: \"\"\n    });\n    // 寄送email\n    const emailHandler = async (e)=>{\n        e.preventDefault();\n        // 檢查欄位資料\n        let initErrors = {\n            hasErrors: false,\n            email: \"\"\n        };\n        const r1 = schemaEmail.safeParse(myForm.email);\n        if (!r1.success) {\n            initErrors = {\n                ...initErrors,\n                hasErrors: true,\n                email: r1.error.issues[0].message\n            };\n        }\n        if (initErrors.hasErrors) {\n            setErrors(initErrors);\n            return; // 欄位檢查時, 有錯誤的話, 就不發 AJAX\n        } else {\n            setErrors({\n                hasErrors: false,\n                email: \"\"\n            });\n        }\n        const result = await sendEmail(myForm);\n        if (result) {\n            setStep(2);\n        } else {\n            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({\n                title: \"錯誤\",\n                text: \"資料沒有修改\",\n                icon: \"error\"\n            });\n        }\n    };\n    // 檢查opt \n    const checkoptHandler = async (e)=>{\n        e.preventDefault();\n        // 檢查欄位資料\n        let initErrors = {\n            hasErrors: false,\n            opt: \"\"\n        };\n        const r1 = schemaOpt.safeParse(myForm2.opt);\n        if (!r1.success) {\n            initErrors = {\n                ...initErrors,\n                hasErrors: true,\n                opt: r1.error.issues[0].message\n            };\n        }\n        if (initErrors.hasErrors) {\n            setErrors2(initErrors);\n            return; // 欄位檢查時, 有錯誤的話, 就不發 AJAX\n        } else {\n            setErrors2({\n                hasErrors: false,\n                opt: \"\"\n            });\n        }\n        setMyForm2({\n            ...myForm2,\n            email: myForm.email\n        });\n        const result = await (0,_api_member__WEBPACK_IMPORTED_MODULE_4__.checkEmail)(myForm2);\n        if (result.success) {\n            setStep(3);\n        } else if (result.code == \"401\") {\n            setResend(1);\n            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({\n                title: \"驗證碼重發\",\n                text: result.msg,\n                icon: \"error\"\n            });\n        } else if (!result.succes) {\n            setResend(1);\n            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({\n                title: \"錯誤\",\n                text: result.msg,\n                icon: \"error\"\n            });\n        } else {\n            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({\n                title: \"錯誤\",\n                text: \"資料沒有修改\",\n                icon: \"error\"\n            });\n        }\n    };\n    const StepOne = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"post\",\n            onSubmit: emailHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: \"請輸入註冊email\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 131,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: errors.email ? \"error\" : \"errorcancel\",\n                    value: myForm.email,\n                    onChange: changeHandler,\n                    type: \"text\",\n                    name: \"email\",\n                    id: \"email\",\n                    text: true,\n                    placeholder: \"email\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 132,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: \"請檢查Email驗證碼\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 133,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"errorsmail\",\n                    children: [\n                        \" \",\n                        errors.email\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 134,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"maillbtn\",\n                    children: \"驗證碼\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 135,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n            lineNumber: 130,\n            columnNumber: 13\n        }, undefined);\n    };\n    const StepTwo = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"post\",\n            onSubmit: checkoptHandler,\n            children: [\n                myForm.email,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: errors2.opt ? \"error\" : \"errorcancel\",\n                    value: myForm2.opt,\n                    onChange: changeHandler2,\n                    type: \"text\",\n                    name: \"opt\",\n                    id: \"opt\",\n                    placeholder: \"請檢查Email驗證碼\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 144,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"errorsmail\",\n                    children: [\n                        \" \",\n                        errors2.opt\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 145,\n                    columnNumber: 17\n                }, undefined),\n                resend == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"maillbtn\",\n                    children: \"檢查送出\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 146,\n                    columnNumber: 29\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: sendEmail,\n                    className: \"maillbtn\",\n                    children: \"重新發送\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 146,\n                    columnNumber: 73\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n            lineNumber: 142,\n            columnNumber: 13\n        }, undefined);\n    };\n    const StepThree = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_setPassword_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            email: myForm.email\n        }, void 0, false, {\n            fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n            lineNumber: 153,\n            columnNumber: 13\n        }, undefined);\n    };\n    const SelectPage = ()=>{\n        if (step == 1) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StepOne, {}, void 0, false, {\n                fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                lineNumber: 158,\n                columnNumber: 20\n            }, undefined);\n        } else if (step == 2) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StepTwo, {}, void 0, false, {\n                fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                lineNumber: 160,\n                columnNumber: 20\n            }, undefined);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StepThree, {}, void 0, false, {\n                fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                lineNumber: 162,\n                columnNumber: 20\n            }, undefined);\n        }\n    };\n    const sendEmail = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_LogReg_module_scss__WEBPACK_IMPORTED_MODULE_3___default().forget),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"忘記密碼\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 171,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectPage, {}, void 0, false, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 172,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/Register\",\n                            children: \"回登入\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                            lineNumber: 174,\n                            columnNumber: 21\n                        }, undefined),\n                        \" |\\xa0\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: \"首頁\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                            lineNumber: 175,\n                            columnNumber: 21\n                        }, undefined),\n                        \" \\xa0\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n                    lineNumber: 173,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n            lineNumber: 170,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\2023\\\\cart\\\\carts\\\\pages\\\\forget.js\",\n        lineNumber: 169,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Forget, \"TL7r4YiCKxKzpPLQDYGcNFLjtmg=\");\n_c = Forget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Forget);\nvar _c;\n$RefreshReg$(_c, \"Forget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QztHQTVLTWhFO0tBQUFBO0FBOEtOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZvcmdldC5qcz9lYWE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIkAvc3R5bGVzL0xvZ1JlZy5tb2R1bGUuc2Nzc1wiXHJcbmltcG9ydCB7IHNlbmRFbWFpbCwgdXBkYXRlTWVtYmVyRm9ybSxjaGVja0VtYWlsIH0gZnJvbSBcIkAvYXBpL21lbWJlclwiXHJcbmltcG9ydCBTZXRwYXNzd29yZCBmcm9tIFwiLi9zZXRQYXNzd29yZC5qc1wiO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuY29uc3QgRm9yZ2V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Jlc2VuZCwgc2V0UmVzZW5kXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBzY2hlbWFFbWFpbCA9IHouc3RyaW5nKCkuZW1haWwoeyBtZXNzYWdlOiBcIuiri+Whq+Wvq+ato+eiuueahOmbu+mDtVwiIH0pO1xyXG4gICAgY29uc3Qgc2NoZW1hT3B0ID0gei5zdHJpbmcoKS5sZW5ndGgoNiwgeyBtZXNzYWdlOiBcIuiri+Whq+Wvq+ato+eiuueahE9wdFwiIH0pO1xyXG4gICAgLy8gICDlrZjnm7RcclxuICAgIGNvbnN0IFtteUZvcm0sIHNldE15Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6IFwiXCJcclxuICAgIH0pO1xyXG4gICAgLy8gICDlrZjpjK/oqqRcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaGFzRXJyb3JzOiBmYWxzZSwgLy8g5Yik5pa35pyJ5rKS5pyJ6Yyv6KqkIFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgICAvLyDoqK3lrprpjK/oqqRcclxuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldE15Rm9ybSh7IC4uLm15Rm9ybSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyMiA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0TXlGb3JtMih7IC4uLm15Rm9ybSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH07XHJcbiAgICAvLyBcclxuICAgIGNvbnN0IFtteUZvcm0yLCBzZXRNeUZvcm0yXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBvcHQ6IFwiXCJcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2Vycm9yczIsIHNldEVycm9yczJdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGhhc0Vycm9yczogZmFsc2UsIC8vIOWIpOaWt+acieaykuaciemMr+iqpCBcclxuICAgICAgICBvcHQ6IFwiXCIsXHJcbiAgICB9KTtcclxuLy8g5a+E6YCBZW1haWxcclxuICAgIGNvbnN0IGVtYWlsSGFuZGxlciA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIOaqouafpeashOS9jeizh+aWmVxyXG4gICAgICAgIGxldCBpbml0RXJyb3JzID0ge1xyXG4gICAgICAgICAgICBoYXNFcnJvcnM6IGZhbHNlLCAvLyDliKTmlrfmnInmspLmnInpjK/oqqQgXHJcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcjEgPSBzY2hlbWFFbWFpbC5zYWZlUGFyc2UobXlGb3JtLmVtYWlsKTtcclxuICAgICAgICBpZiAoIXIxLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgaW5pdEVycm9ycyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLmluaXRFcnJvcnMsXHJcbiAgICAgICAgICAgICAgICBoYXNFcnJvcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogcjEuZXJyb3IuaXNzdWVzWzBdLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbml0RXJyb3JzLmhhc0Vycm9ycykge1xyXG4gICAgICAgICAgICBzZXRFcnJvcnMoaW5pdEVycm9ycyk7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8g5qyE5L2N5qqi5p+l5pmCLCDmnInpjK/oqqTnmoToqbEsIOWwseS4jeeZvCBBSkFYXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JzKHtcclxuICAgICAgICAgICAgICAgIGhhc0Vycm9yczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZEVtYWlsKG15Rm9ybSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBzZXRTdGVwKDIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIumMr+iqpFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCLos4fmlpnmspLmnInkv67mlLlcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbi8vIOaqouafpW9wdCBcclxuICAgIGNvbnN0IGNoZWNrb3B0SGFuZGxlciA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIOaqouafpeashOS9jeizh+aWmVxyXG4gICAgICAgIGxldCBpbml0RXJyb3JzID0ge1xyXG4gICAgICAgICAgICBoYXNFcnJvcnM6IGZhbHNlLCAvLyDliKTmlrfmnInmspLmnInpjK/oqqQgXHJcbiAgICAgICAgICAgIG9wdDogXCJcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHIxID0gc2NoZW1hT3B0LnNhZmVQYXJzZShteUZvcm0yLm9wdCk7XHJcbiAgICAgICAgaWYgKCFyMS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGluaXRFcnJvcnMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5pbml0RXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgaGFzRXJyb3JzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3B0OiByMS5lcnJvci5pc3N1ZXNbMF0ubWVzc2FnZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluaXRFcnJvcnMuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yczIoaW5pdEVycm9ycyk7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8g5qyE5L2N5qqi5p+l5pmCLCDmnInpjK/oqqTnmoToqbEsIOWwseS4jeeZvCBBSkFYXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JzMih7XHJcbiAgICAgICAgICAgICAgICBoYXNFcnJvcnM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3B0OiBcIlwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRNeUZvcm0yKHsgLi4ubXlGb3JtMiwgZW1haWw6IG15Rm9ybS5lbWFpbCB9KVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNoZWNrRW1haWwobXlGb3JtMik7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHNldFN0ZXAoMylcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlPT1cIjQwMVwiKSB7XHJcbiAgICAgICAgICAgIHNldFJlc2VuZCgxKTtcclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIumpl+itieeivOmHjeeZvFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogcmVzdWx0Lm1zZyxcclxuICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICghcmVzdWx0LnN1Y2Nlcykge1xyXG4gICAgICAgICAgICBzZXRSZXNlbmQoMSk7XHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLpjK/oqqRcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJlc3VsdC5tc2csXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi6Yyv6KqkXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIuizh+aWmeaykuacieS/ruaUuVwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IFN0ZXBPbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cInBvc3RcIiBvblN1Ym1pdD17ZW1haWxIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxoNT7oq4vovLjlhaXoqLvlhoplbWFpbDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtlcnJvcnMuZW1haWwgPyBcImVycm9yXCIgOiBcImVycm9yY2FuY2VsXCJ9IHZhbHVlPXtteUZvcm0uZW1haWx9IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiB0ZXh0IHBsYWNlaG9sZGVyPVwiZW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGg1Puiri+aqouafpUVtYWls6amX6K2J56K8PC9oNT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yc21haWxcIj4ge2Vycm9ycy5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1haWxsYnRuXCI+6amX6K2J56K8PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgY29uc3QgU3RlcFR3byA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJwb3N0XCIgb25TdWJtaXQ9e2NoZWNrb3B0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICB7bXlGb3JtLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17ZXJyb3JzMi5vcHQgPyBcImVycm9yXCIgOiBcImVycm9yY2FuY2VsXCJ9IHZhbHVlPXtteUZvcm0yLm9wdH0gb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXIyfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJvcHRcIiBpZD1cIm9wdFwiIHBsYWNlaG9sZGVyPVwi6KuL5qqi5p+lRW1haWzpqZforYnnorxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JzbWFpbFwiPiB7ZXJyb3JzMi5vcHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3Jlc2VuZD09MD8gPGJ1dHRvbiBjbGFzc05hbWU9XCJtYWlsbGJ0blwiPuaqouafpemAgeWHujwvYnV0dG9uPjogPGJ1dHRvbiBvbkNsaWNrPXtzZW5kRW1haWx9IGNsYXNzTmFtZT1cIm1haWxsYnRuXCI+6YeN5paw55m86YCBPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGNvbnN0IFN0ZXBUaHJlZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2V0cGFzc3dvcmQgZW1haWw9e215Rm9ybS5lbWFpbH0gLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBjb25zdCBTZWxlY3RQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdGVwID09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxTdGVwT25lIC8+XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGVwID09IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxTdGVwVHdvIC8+XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxTdGVwVGhyZWUgLz5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZW5kRW1haWw9KCk9PntcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZvcmdldH0+XHJcbiAgICAgICAgICAgICAgICA8aDI+5b+Y6KiY5a+G56K8PC9oMj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RQYWdlIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvUmVnaXN0ZXJcIj7lm57nmbvlhaU8L0xpbms+IHwmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPummlumggTwvTGluaz4gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcmdldCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTGluayIsInN0eWxlIiwic2VuZEVtYWlsIiwidXBkYXRlTWVtYmVyRm9ybSIsImNoZWNrRW1haWwiLCJTZXRwYXNzd29yZCIsIlN3YWwiLCJ6IiwiRm9yZ2V0IiwicmVzZW5kIiwic2V0UmVzZW5kIiwic3RlcCIsInNldFN0ZXAiLCJzY2hlbWFFbWFpbCIsInN0cmluZyIsImVtYWlsIiwibWVzc2FnZSIsInNjaGVtYU9wdCIsImxlbmd0aCIsIm15Rm9ybSIsInNldE15Rm9ybSIsImVycm9ycyIsInNldEVycm9ycyIsImhhc0Vycm9ycyIsImNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY2hhbmdlSGFuZGxlcjIiLCJzZXRNeUZvcm0yIiwibXlGb3JtMiIsIm9wdCIsImVycm9yczIiLCJzZXRFcnJvcnMyIiwiZW1haWxIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJpbml0RXJyb3JzIiwicjEiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiZXJyb3IiLCJpc3N1ZXMiLCJyZXN1bHQiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsImNoZWNrb3B0SGFuZGxlciIsImNvZGUiLCJtc2ciLCJzdWNjZXMiLCJTdGVwT25lIiwiZm9ybSIsImFjdGlvbiIsIm9uU3VibWl0IiwiaDUiLCJpbnB1dCIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJzcGFuIiwiYnV0dG9uIiwiU3RlcFR3byIsIm9uQ2xpY2siLCJTdGVwVGhyZWUiLCJTZWxlY3RQYWdlIiwiZGl2IiwiZm9yZ2V0IiwiaDIiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/forget.js\n"));

/***/ })

});