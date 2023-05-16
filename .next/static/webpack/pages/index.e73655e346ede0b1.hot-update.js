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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Chat */ \"./src/components/Chat.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/firebase */ \"./src/firebase/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// firebase 관련 모듈을 불러옵니다.\n\n\nconst chatCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"chat\");\nfunction Home() {\n    _s();\n    /*\n    메시지 목록을 저장하는 상태로, 메시지의 형태는 다음과 같음\n    { role: \"system\" | \"user\" | \"assistant\", content: string }\n\n    role 에 대한 상세한 내용은 다음 문서를 참고\n    https://platform.openai.com/docs/guides/chat/introduction\n\n    ex)\n    [\n      { role: \"system\", content: \"너의 이름을 엘리엇이고, 나의 AI 친구야. 친절하고 명랑하게 대답해줘. 고민을 말하면 공감해줘. 반말로 대답해줘.\" },\n      { role: \"assistant\", content: \"안녕? 나는 엘리엇이야. 오늘은 무슨 일이 있었니?\" }\n      { role: \"user\", content: \"오늘 재미난 일이 있었어! 한 번 들어볼래?\" },\n      ...\n    ]\n  */ const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    // 메시지를 전송 중인지 여부를 저장하는 상태\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    // 메시지 목록을 끝으로 스크롤\n    const scrollToBottom = ()=>{\n        var _messagesEndRef_current;\n        (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    // 메시지를 전송하는 함수\n    const handleSend = async (message)=>{\n        // message 를 받아 메시지 목록에 추가\n        // message 형태 = { role: \"user\", content: string }\n        // ChatInput.js 26번째 줄 참고\n        const updatedMessages = [\n            ...messages,\n            message\n        ];\n        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.addDoc)(chatCollection, message);\n        // console.log(updatedMessages);\n        // console.log(updatedMessages.slice(-6));\n        setMessages(updatedMessages);\n        // 메시지 전송 중임을 표시\n        setLoading(true);\n        // /api/chat 에 메시지 목록을 전송하고 응답을 받음\n        const response = await fetch(\"/api/chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                // 메시지 목록의 마지막 6개만 전송\n                messages: updatedMessages.slice(-6)\n            })\n        });\n        console.log(response);\n        if (!response.ok) {\n            setLoading(false);\n            throw new Error(response.statusText);\n        }\n        // 응답을 JSON 형태로 변환\n        // 비동기 API 를 사용하여 응답을 받기 때문에 await 사용\n        const result = await response.json();\n        const addResult = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.addDoc)(chatCollection, result);\n        if (!result) {\n            return;\n        }\n        console.log(result);\n        // 로딩 상태를 해제하고, 메시지 목록에 응답을 추가\n        setLoading(false);\n        setMessages((messages)=>[\n                ...messages,\n                result\n            ]);\n    };\n    // 메시지 목록을 초기화하는 함수\n    // 처음 시작할 메시지를 설정\n    const handleReset = ()=>{\n        setMessages([\n            {\n                role: \"assistant\",\n                content: \"안녕, 코코볼! 궁금한 게 있다면 물어봐.\"\n            }\n        ]);\n    };\n    // 메시지 목록이 업데이트 될 때마다 맨 아래로 스크롤\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        scrollToBottom();\n    }, [\n        messages\n    ]);\n    // 컴포넌트가 처음 렌더링 될 때 메시지 목록을 초기화\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        handleReset();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"A Simple Chatbot\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/pages/index.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A Simple Chatbot\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/pages/index.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/pages/index.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/pages/index.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/pages/index.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex h-[50px] sm:h-[60px] border-b border-neutral-300 py-2 px-2 sm:px-8 items-center justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"font-bold text-3xl flex text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"ml-2 hover:opacity-50\",\n                                href: \"https://code-scaffold.vercel.app\",\n                                children: \"A Simple Chatbot\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/pages/index.js\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/pages/index.js\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/pages/index.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-auto sm:px-10 pb-4 sm:pb-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-[800px] mx-auto mt-4 sm:mt-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chat__WEBPACK_IMPORTED_MODULE_1__.Chat, {\n                                    messages: messages,\n                                    loading: loading,\n                                    onSendMessage: handleSend\n                                }, void 0, false, {\n                                    fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/pages/index.js\",\n                                    lineNumber: 146,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    ref: messagesEndRef\n                                }, void 0, false, {\n                                    fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/pages/index.js\",\n                                    lineNumber: 152,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/pages/index.js\",\n                            lineNumber: 139,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/pages/index.js\",\n                        lineNumber: 138,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex h-[30px] sm:h-[50px] border-t border-neutral-300 py-2 px-8 items-center sm:justify-between justify-center\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/pages/index.js\",\n                        lineNumber: 156,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/pages/index.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"vXlAHxHInrowgwkYNsZg9ex75ZE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tjs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNTCw4REFBQ0M7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FPYiw4REFBQ3hELGtEQUFJQTtvQ0FDSGlCLFVBQVVBO29DQUNWRSxTQUFTQTtvQ0FDVHVDLGVBQWVoQzs7Ozs7OzhDQUdqQiw4REFBQzZCO29DQUFJSSxLQUFLdEM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlkLDhEQUFDa0M7d0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7O0FBSXZCLENBQUM7R0EzSXVCeEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhdCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2hhdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGZpcmViYXNlIOq0gOugqCDrqqjrk4jsnYQg67aI65+s7Ji164uI64ukLlxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9maXJlYmFzZVwiO1xuaW1wb3J0IHtcbiAgY29sbGVjdGlvbixcbiAgcXVlcnksXG4gIGRvYyxcbiAgZ2V0RG9jcyxcbiAgYWRkRG9jLFxuICB1cGRhdGVEb2MsXG4gIGRlbGV0ZURvYyxcbiAgb3JkZXJCeSxcbiAgd2hlcmUsXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgY2hhdENvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGRiLCBcImNoYXRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8qXG4gICAg66mU7Iuc7KeAIOuqqeuhneydhCDsoIDsnqXtlZjripQg7IOB7YOc66GcLCDrqZTsi5zsp4DsnZgg7ZiV7YOc64qUIOuLpOydjOqzvCDqsJnsnYxcbiAgICB7IHJvbGU6IFwic3lzdGVtXCIgfCBcInVzZXJcIiB8IFwiYXNzaXN0YW50XCIsIGNvbnRlbnQ6IHN0cmluZyB9XG5cbiAgICByb2xlIOyXkCDrjIDtlZwg7IOB7IS47ZWcIOuCtOyaqeydgCDri6TsnYwg66y47ISc66W8IOywuOqzoFxuICAgIGh0dHBzOi8vcGxhdGZvcm0ub3BlbmFpLmNvbS9kb2NzL2d1aWRlcy9jaGF0L2ludHJvZHVjdGlvblxuXG4gICAgZXgpXG4gICAgW1xuICAgICAgeyByb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBcIuuEiOydmCDsnbTrpoTsnYQg7JeY66as7JeH7J206rOgLCDrgpjsnZggQUkg7Lmc6rWs7JW8LiDsuZzsoIjtlZjqs6Ag66qF656R7ZWY6rKMIOuMgOuLte2VtOykmC4g6rOg66+87J2EIOunkO2VmOuptCDqs7XqsJDtlbTspJguIOuwmOunkOuhnCDrjIDri7XtlbTspJguXCIgfSxcbiAgICAgIHsgcm9sZTogXCJhc3Npc3RhbnRcIiwgY29udGVudDogXCLslYjrhZU/IOuCmOuKlCDsl5jrpqzsl4fsnbTslbwuIOyYpOuKmOydgCDrrLTsiqgg7J287J20IOyeiOyXiOuLiD9cIiB9XG4gICAgICB7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiBcIuyYpOuKmCDsnqzrr7jrgpwg7J287J20IOyeiOyXiOyWtCEg7ZWcIOuyiCDrk6TslrTrs7zrnpg/XCIgfSxcbiAgICAgIC4uLlxuICAgIF1cbiAgKi9cbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIOuplOyLnOyngOulvCDsoITshqEg7KSR7J247KeAIOyXrOu2gOulvCDsoIDsnqXtlZjripQg7IOB7YOcXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBtZXNzYWdlc0VuZFJlZiA9IHVzZVJlZihudWxsKTtcblxuICAvLyDrqZTsi5zsp4Ag66qp66Gd7J2EIOuBneycvOuhnCDsiqTtgazroaRcbiAgY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoKSA9PiB7XG4gICAgbWVzc2FnZXNFbmRSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfTtcblxuICAvLyDrqZTsi5zsp4Drpbwg7KCE7Iah7ZWY64qUIO2VqOyImFxuICBjb25zdCBoYW5kbGVTZW5kID0gYXN5bmMgKG1lc3NhZ2UpID0+IHtcbiAgICAvLyBtZXNzYWdlIOulvCDrsJvslYQg66mU7Iuc7KeAIOuqqeuhneyXkCDstpTqsIBcbiAgICAvLyBtZXNzYWdlIO2Yle2DnCA9IHsgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHN0cmluZyB9XG4gICAgLy8gQ2hhdElucHV0LmpzIDI267KI7Ke4IOykhCDssLjqs6BcbiAgICBjb25zdCB1cGRhdGVkTWVzc2FnZXMgPSBbLi4ubWVzc2FnZXMsIG1lc3NhZ2VdO1xuICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkZERvYyhjaGF0Q29sbGVjdGlvbiwgbWVzc2FnZSk7XG4gICAgLy8gY29uc29sZS5sb2codXBkYXRlZE1lc3NhZ2VzKTtcbiAgICAvLyBjb25zb2xlLmxvZyh1cGRhdGVkTWVzc2FnZXMuc2xpY2UoLTYpKTtcblxuICAgIHNldE1lc3NhZ2VzKHVwZGF0ZWRNZXNzYWdlcyk7XG4gICAgLy8g66mU7Iuc7KeAIOyghOyGoSDspJHsnoTsnYQg7ZGc7IucXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIC8vIC9hcGkvY2hhdCDsl5Ag66mU7Iuc7KeAIOuqqeuhneydhCDsoITshqHtlZjqs6Ag7J2R64u17J2EIOuwm+ydjFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NoYXRcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAvLyDrqZTsi5zsp4Ag66qp66Gd7J2YIOuniOyngOuniSA26rCc66eMIOyghOyGoVxuICAgICAgICBtZXNzYWdlczogdXBkYXRlZE1lc3NhZ2VzLnNsaWNlKC02KSxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgIH1cblxuICAgIC8vIOydkeuLteydhCBKU09OIO2Yle2DnOuhnCDrs4DtmZhcbiAgICAvLyDruYTrj5nquLAgQVBJIOulvCDsgqzsmqntlZjsl6wg7J2R64u17J2EIOuwm+q4sCDrlYzrrLjsl5AgYXdhaXQg7IKs7JqpXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGFkZFJlc3VsdCA9IGF3YWl0IGFkZERvYyhjaGF0Q29sbGVjdGlvbiwgcmVzdWx0KTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgIC8vIOuhnOuUqSDsg4Htg5zrpbwg7ZW07KCc7ZWY6rOgLCDrqZTsi5zsp4Ag66qp66Gd7JeQIOydkeuLteydhCDstpTqsIBcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBzZXRNZXNzYWdlcygobWVzc2FnZXMpID0+IFsuLi5tZXNzYWdlcywgcmVzdWx0XSk7XG4gIH07XG5cbiAgLy8g66mU7Iuc7KeAIOuqqeuhneydhCDstIjquLDtmZTtlZjripQg7ZWo7IiYXG4gIC8vIOyymOydjCDsi5zsnpHtlaAg66mU7Iuc7KeA66W8IOyEpOyglVxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRNZXNzYWdlcyhbXG4gICAgICB7XG4gICAgICAgIHJvbGU6IFwiYXNzaXN0YW50XCIsXG4gICAgICAgIGNvbnRlbnQ6IFwi7JWI64WVLCDsvZTsvZTrs7whIOq2geq4iO2VnCDqsowg7J6I64uk66m0IOusvOyWtOu0kC5cIixcbiAgICAgIH0sXG4gICAgXSk7XG4gIH07XG5cbiAgLy8g66mU7Iuc7KeAIOuqqeuhneydtCDsl4XrjbDsnbTtirgg65CgIOuVjOuniOuLpCDrp6gg7JWE656Y66GcIOyKpO2BrOuhpFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNjcm9sbFRvQm90dG9tKCk7XG4gIH0sIFttZXNzYWdlc10pO1xuXG4gIC8vIOy7tO2PrOuEjO2KuOqwgCDsspjsnYwg66CM642U66eBIOuQoCDrlYwg66mU7Iuc7KeAIOuqqeuhneydhCDstIjquLDtmZRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVSZXNldCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BIFNpbXBsZSBDaGF0Ym90PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgU2ltcGxlIENoYXRib3RcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLXNjcmVlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1bNTBweF0gc206aC1bNjBweF0gYm9yZGVyLWIgYm9yZGVyLW5ldXRyYWwtMzAwIHB5LTIgcHgtMiBzbTpweC04IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bCBmbGV4IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGhvdmVyOm9wYWNpdHktNTBcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jb2RlLXNjYWZmb2xkLnZlcmNlbC5hcHBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBIFNpbXBsZSBDaGF0Ym90XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LWF1dG8gc206cHgtMTAgcGItNCBzbTpwYi0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzgwMHB4XSBteC1hdXRvIG10LTQgc206bXQtMTJcIj5cbiAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICDrqZTsnbgg7LGE7YyFIOy7tO2PrOuEjO2KuFxuICAgICAgICAgICAgICBtZXNzYWdlczog66mU7Iuc7KeAIOuqqeuhnVxuICAgICAgICAgICAgICBsb2FkaW5nOiDrqZTsi5zsp4Ag7KCE7IahIOykkeyduOyngCDsl6zrtoBcbiAgICAgICAgICAgICAgb25TZW5kTWVzc2FnZTog66mU7Iuc7KeAIOyghOyGoSDtlajsiJhcbiAgICAgICAgICAgICovfVxuICAgICAgICAgICAgPENoYXRcbiAgICAgICAgICAgICAgbWVzc2FnZXM9e21lc3NhZ2VzfVxuICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICBvblNlbmRNZXNzYWdlPXtoYW5kbGVTZW5kfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiDrqZTsi5zsp4Ag66qp66Gd7J2YIOuBneycvOuhnCDsiqTtgazroaTtlZjquLAg7JyE7ZW0IOywuOyhsO2VmOuKlCDsl5jrpqzrqLztirggKi99XG4gICAgICAgICAgICA8ZGl2IHJlZj17bWVzc2FnZXNFbmRSZWZ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLVszMHB4XSBzbTpoLVs1MHB4XSBib3JkZXItdCBib3JkZXItbmV1dHJhbC0zMDAgcHktMiBweC04IGl0ZW1zLWNlbnRlciBzbTpqdXN0aWZ5LWJldHdlZW4ganVzdGlmeS1jZW50ZXJcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNoYXQiLCJIZWFkIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJkYiIsImNvbGxlY3Rpb24iLCJxdWVyeSIsImRvYyIsImdldERvY3MiLCJhZGREb2MiLCJ1cGRhdGVEb2MiLCJkZWxldGVEb2MiLCJvcmRlckJ5Iiwid2hlcmUiLCJjaGF0Q29sbGVjdGlvbiIsIkhvbWUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJtZXNzYWdlc0VuZFJlZiIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJoYW5kbGVTZW5kIiwibWVzc2FnZSIsInVwZGF0ZWRNZXNzYWdlcyIsImRvY1JlZiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsInJlc3VsdCIsImpzb24iLCJhZGRSZXN1bHQiLCJoYW5kbGVSZXNldCIsInJvbGUiLCJjb250ZW50IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsIm9uU2VuZE1lc3NhZ2UiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});