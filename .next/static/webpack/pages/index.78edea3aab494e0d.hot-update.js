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

/***/ "./src/components/ChatInput.js":
/*!*************************************!*\
  !*** ./src/components/ChatInput.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChatInput\": function() { return /* binding */ ChatInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-react */ \"./node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst ChatInput = (param)=>{\n    let { onSendMessage  } = param;\n    _s();\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // 입력창의 속성을 참조하기 위한 ref\n    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // 입력창의 내용이 변경될 때마다 실행되는 함수\n    // 입력창의 내용이 변경되면 content 를 입력창의 값으로 변경한다\n    const handleChange = (e)=>{\n        const value = e.target.value;\n        setContent(value);\n    };\n    // 전송 버튼을 눌렀을 때 실행되는 함수\n    const handleSend = ()=>{\n        if (!content) {\n            alert(\"메시지를 입력하세요.\");\n            return;\n        }\n        // 입력창의 내용을 onSend 함수를 통해 전달한다\n        // 입력창의 내용은 사용자의 메시지이므로 role 을 user 로 설정한다\n        onSendMessage({\n            role: \"user\",\n            content: content\n        });\n        // 전달 후 입력창의 내용을 초기화한다\n        setContent(\"\");\n    };\n    // 입력창에서 엔터키를 눌렀을 때 실행되는 함수\n    // 엔터키를 누르면 전송 버튼을 누른 것과 동일한 효과를 낸다\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\" && !e.shiftKey) {\n            e.preventDefault();\n            handleSend();\n        }\n    };\n    // 입력창의 내용이 변경될 때마다 실행되는 함수\n    // 입력창의 내용에 따라 입력창의 높이를 변경한다\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (textareaRef && textareaRef.current) {\n            var _textareaRef_current;\n            textareaRef.current.style.height = \"inherit\";\n            textareaRef.current.style.height = \"\".concat((_textareaRef_current = textareaRef.current) === null || _textareaRef_current === void 0 ? void 0 : _textareaRef_current.scrollHeight, \"px\");\n        }\n    }, [\n        content\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: textareaRef,\n                className: \"min-h-[44px] rounded-lg pl-4 pr-12 py-2 w-full focus:outline-none focus:ring-1 focus:ring-neutral-300 border-2 border-neutral-200\",\n                style: {\n                    resize: \"none\"\n                },\n                placeholder: \"메시지를 입력하세요\",\n                value: content,\n                rows: 1,\n                onChange: handleChange,\n                onKeyDown: handleKeyDown\n            }, void 0, false, {\n                fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/components/ChatInput.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSend(),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconArrowUp, {\n                    className: \"absolute right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-#FF007A-500 text-white hover:opacity-80\"\n                }, void 0, false, {\n                    fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/components/ChatInput.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/components/ChatInput.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chaewonyu/Documents/GitHub/AI-chatbot/src/components/ChatInput.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatInput, \"U9OQ0f7LgbMIWlnPhgKFj08Lrjc=\");\n_c = ChatInput;\nvar _c;\n$RefreshReg$(_c, \"ChatInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0SW5wdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDRTtBQUU3QyxNQUFNSSxZQUFZLFNBQXVCO1FBQXRCLEVBQUVDLGNBQWEsRUFBRTs7SUFDekMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQTtJQUV0Qyx1QkFBdUI7SUFDdkIsTUFBTUssY0FBY04sNkNBQU1BLENBQUMsSUFBSTtJQUUvQiwyQkFBMkI7SUFDM0Isd0NBQXdDO0lBQ3hDLE1BQU1PLGVBQWUsQ0FBQ0MsSUFBTTtRQUMxQixNQUFNQyxRQUFRRCxFQUFFRSxNQUFNLENBQUNELEtBQUs7UUFDNUJKLFdBQVdJO0lBQ2I7SUFFQSx1QkFBdUI7SUFDdkIsTUFBTUUsYUFBYSxJQUFNO1FBQ3ZCLElBQUksQ0FBQ1AsU0FBUztZQUNaUSxNQUFNO1lBQ047UUFDRixDQUFDO1FBRUQsOEJBQThCO1FBQzlCLDBDQUEwQztRQUMxQ1QsY0FBYztZQUFFVSxNQUFNO1lBQVFULFNBQVNBO1FBQVE7UUFDL0Msc0JBQXNCO1FBQ3RCQyxXQUFXO0lBQ2I7SUFFQSwyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLE1BQU1TLGdCQUFnQixDQUFDTixJQUFNO1FBQzNCLElBQUlBLEVBQUVPLEdBQUcsS0FBSyxXQUFXLENBQUNQLEVBQUVRLFFBQVEsRUFBRTtZQUNwQ1IsRUFBRVMsY0FBYztZQUNoQk47UUFDRixDQUFDO0lBQ0g7SUFFQSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCWixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSU8sZUFBZUEsWUFBWVksT0FBTyxFQUFFO2dCQUVBWjtZQUR0Q0EsWUFBWVksT0FBTyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sR0FBRztZQUNuQ2QsWUFBWVksT0FBTyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFxQyxPQUFsQ2QsQ0FBQUEsdUJBQUFBLFlBQVlZLE9BQU8sY0FBbkJaLGtDQUFBQSxLQUFBQSxJQUFBQSxxQkFBcUJlLFlBQVksRUFBQztRQUMxRSxDQUFDO0lBQ0gsR0FBRztRQUFDakI7S0FBUTtJQUVaLHFCQUNFLDhEQUFDa0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDQyxLQUFLbkI7Z0JBQ0xpQixXQUFVO2dCQUNWSixPQUFPO29CQUFFTyxRQUFRO2dCQUFPO2dCQUN4QkMsYUFBWTtnQkFDWmxCLE9BQU9MO2dCQUNQd0IsTUFBTTtnQkFDTkMsVUFBVXRCO2dCQUNWdUIsV0FBV2hCOzs7Ozs7MEJBR2IsOERBQUNpQjtnQkFBT0MsU0FBUyxJQUFNckI7MEJBQ3JCLDRFQUFDYiw0REFBV0E7b0JBQUN5QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkvQixFQUFFO0dBL0RXckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdElucHV0LmpzPzE4ODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbkFycm93VXAgfSBmcm9tIFwiQHRhYmxlci9pY29ucy1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBDaGF0SW5wdXQgPSAoeyBvblNlbmRNZXNzYWdlIH0pID0+IHtcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoKTtcblxuICAvLyDsnoXroKXssL3snZgg7IaN7ISx7J2EIOywuOyhsO2VmOq4sCDsnITtlZwgcmVmXG4gIGNvbnN0IHRleHRhcmVhUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIOyeheugpeywveydmCDrgrTsmqnsnbQg67OA6rK965CgIOuVjOuniOuLpCDsi6TtlonrkJjripQg7ZWo7IiYXG4gIC8vIOyeheugpeywveydmCDrgrTsmqnsnbQg67OA6rK965CY66m0IGNvbnRlbnQg66W8IOyeheugpeywveydmCDqsJLsnLzroZwg67OA6rK97ZWc64ukXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRDb250ZW50KHZhbHVlKTtcbiAgfTtcblxuICAvLyDsoITshqEg67KE7Yq87J2EIOuIjOuggOydhCDrlYwg7Iuk7ZaJ65CY64qUIO2VqOyImFxuICBjb25zdCBoYW5kbGVTZW5kID0gKCkgPT4ge1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgYWxlcnQoXCLrqZTsi5zsp4Drpbwg7J6F66Cl7ZWY7IS47JqULlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDsnoXroKXssL3snZgg64K07Jqp7J2EIG9uU2VuZCDtlajsiJjrpbwg7Ya17ZW0IOyghOuLrO2VnOuLpFxuICAgIC8vIOyeheugpeywveydmCDrgrTsmqnsnYAg7IKs7Jqp7J6Q7J2YIOuplOyLnOyngOydtOuvgOuhnCByb2xlIOydhCB1c2VyIOuhnCDshKTsoJXtlZzri6RcbiAgICBvblNlbmRNZXNzYWdlKHsgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IGNvbnRlbnQgfSk7XG4gICAgLy8g7KCE64usIO2bhCDsnoXroKXssL3snZgg64K07Jqp7J2EIOy0iOq4sO2ZlO2VnOuLpFxuICAgIHNldENvbnRlbnQoXCJcIik7XG4gIH07XG5cbiAgLy8g7J6F66Cl7LC97JeQ7IScIOyXlO2EsO2CpOulvCDriIzroIDsnYQg65WMIOyLpO2WieuQmOuKlCDtlajsiJhcbiAgLy8g7JeU7YSw7YKk66W8IOuIhOultOuptCDsoITshqEg67KE7Yq87J2EIOuIhOuluCDqsoPqs7wg64+Z7J287ZWcIO2aqOqzvOulvCDrgrjri6RcbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGhhbmRsZVNlbmQoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8g7J6F66Cl7LC97J2YIOuCtOyaqeydtCDrs4Dqsr3rkKAg65WM66eI64ukIOyLpO2WieuQmOuKlCDtlajsiJhcbiAgLy8g7J6F66Cl7LC97J2YIOuCtOyaqeyXkCDrlLDrnbwg7J6F66Cl7LC97J2YIOuGkuydtOulvCDrs4Dqsr3tlZzri6RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGV4dGFyZWFSZWYgJiYgdGV4dGFyZWFSZWYuY3VycmVudCkge1xuICAgICAgdGV4dGFyZWFSZWYuY3VycmVudC5zdHlsZS5oZWlnaHQgPSBcImluaGVyaXRcIjtcbiAgICAgIHRleHRhcmVhUmVmLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7dGV4dGFyZWFSZWYuY3VycmVudD8uc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICB9XG4gIH0sIFtjb250ZW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgcmVmPXt0ZXh0YXJlYVJlZn1cbiAgICAgICAgY2xhc3NOYW1lPVwibWluLWgtWzQ0cHhdIHJvdW5kZWQtbGcgcGwtNCBwci0xMiBweS0yIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctbmV1dHJhbC0zMDAgYm9yZGVyLTIgYm9yZGVyLW5ldXRyYWwtMjAwXCJcbiAgICAgICAgc3R5bGU9e3sgcmVzaXplOiBcIm5vbmVcIiB9fVxuICAgICAgICBwbGFjZWhvbGRlcj1cIuuplOyLnOyngOulvCDsnoXroKXtlZjshLjsmpRcIlxuICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgcm93cz17MX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgLz5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZW5kKCl9PlxuICAgICAgICA8SWNvbkFycm93VXAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMiBib3R0b20tMyBoLTggdy04IGhvdmVyOmN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBwLTEgYmctI0ZGMDA3QS01MDAgdGV4dC13aGl0ZSBob3ZlcjpvcGFjaXR5LTgwXCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJY29uQXJyb3dVcCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2hhdElucHV0Iiwib25TZW5kTWVzc2FnZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwidGV4dGFyZWFSZWYiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVTZW5kIiwiYWxlcnQiLCJyb2xlIiwiaGFuZGxlS2V5RG93biIsImtleSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0ZXh0YXJlYSIsInJlZiIsInJlc2l6ZSIsInBsYWNlaG9sZGVyIiwicm93cyIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ChatInput.js\n"));

/***/ })

});