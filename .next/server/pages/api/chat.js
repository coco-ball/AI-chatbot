"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./src/pages/api/chat.js":
/*!*******************************!*\
  !*** ./src/pages/api/chat.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\n// OpenAI API 환경 변수 설정\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    organization: process.env.OPENAI_ORGANIZATION,\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/*\n  System Prompt 설정\n  이 설정에 따라 AI 의 대답의 유형을 다르게 만들 수 있음\n  단, 이 설정을 항상 확실히 참조하지는 않음\n  이 설정은 메시지 목록의 첫 번째 메시지로 사용됨\n*/ const systemPrompt = \"너의 이름을 엘리엇이고, 나의 AI 친구야. 친절하고 명랑하게 대답해줘. 고민을 말하면 공감해줘. 반말로 대답해줘.\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method !== \"POST\") {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n        return;\n    }\n    // POST 로 전송받은 내용 중 messages 를 추출\n    const { messages  } = req.body;\n    // console.log([\n    //   { role: \"system\", content: systemPrompt },\n    //   ...messages.slice(-6),\n    // ]);\n    // API Reference: https://platform.openai.com/docs/api-reference/chat/create\n    const completion = await openai.createChatCompletion({\n        model: \"gpt-3.5-turbo\",\n        // temperature 값이 높을 수록 AI 의 답변이 다양해짐\n        temperature: 0.7,\n        // max_tokens 값을 제한함. 이 값을 크게하면 컨텍스트 히스토리에 제약이 커짐.\n        max_tokens: 512,\n        /*\n      전체 프롬프트를 묶어서 보냄\n      system 은 항상 처음에 와야 함\n      컨텍스트 유지를 위해 이전 메시지를 포함해서 보냄 (6개, 즉 대화 3개의 페어)\n    */ messages: [\n            {\n                role: \"system\",\n                content: systemPrompt\n            },\n            ...messages.slice(-6)\n        ]\n    });\n    // console.log(completion.data.choices[0].message);\n    res.status(200).json({\n        // AI 의 답변은 assistant 역할로 전송\n        role: \"assistant\",\n        // AI 의 답변은 choices[0].text 에 있음\n        // 상세한 Response 형식은 다음을 참조 : https://platform.openai.com/docs/api-reference/chat/create\n        content: completion.data.choices[0].message.content\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELHNCQUFzQjtBQUN0QixNQUFNRSxnQkFBZ0IsSUFBSUYsaURBQWFBLENBQUM7SUFDdENHLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CO0lBQzdDQyxRQUFRSCxRQUFRQyxHQUFHLENBQUNHLGNBQWM7QUFDcEM7QUFFQSxNQUFNQyxTQUFTLElBQUlSLDZDQUFTQSxDQUFDQztBQUU3Qjs7Ozs7QUFLQSxHQUNBLE1BQU1RLGVBQ0o7QUFFRixpRUFBZSxPQUFPQyxLQUFLQyxNQUFRO0lBQ2pDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBcUI7UUFDbkQ7SUFDRixDQUFDO0lBRUQsaUNBQWlDO0lBQ2pDLE1BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdOLElBQUlPLElBQUk7SUFFN0IsZ0JBQWdCO0lBQ2hCLCtDQUErQztJQUMvQywyQkFBMkI7SUFDM0IsTUFBTTtJQUVOLDRFQUE0RTtJQUM1RSxNQUFNQyxhQUFhLE1BQU1WLE9BQU9XLG9CQUFvQixDQUFDO1FBQ25EQyxPQUFPO1FBQ1AscUNBQXFDO1FBQ3JDQyxhQUFhO1FBQ2Isa0RBQWtEO1FBQ2xEQyxZQUFZO1FBQ1o7Ozs7SUFJQSxHQUNBTixVQUFVO1lBQ1I7Z0JBQUVPLE1BQU07Z0JBQVVDLFNBQVNmO1lBQWE7ZUFDckNPLFNBQVNTLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0lBQ0g7SUFFQSxtREFBbUQ7SUFFbkRkLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFDbkIsNEJBQTRCO1FBQzVCUyxNQUFNO1FBQ04sZ0NBQWdDO1FBQ2hDLHVGQUF1RjtRQUN2RkMsU0FBU04sV0FBV1EsSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxPQUFPLENBQUNKLE9BQU87SUFDckQ7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdGJvdC8uL3NyYy9wYWdlcy9hcGkvY2hhdC5qcz8zNTY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gXCJvcGVuYWlcIjtcblxuLy8gT3BlbkFJIEFQSSDtmZjqsr0g67OA7IiYIOyEpOyglVxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgb3JnYW5pemF0aW9uOiBwcm9jZXNzLmVudi5PUEVOQUlfT1JHQU5JWkFUSU9OLFxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5cbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5cbi8qXG4gIFN5c3RlbSBQcm9tcHQg7ISk7KCVXG4gIOydtCDshKTsoJXsl5Ag65Sw6528IEFJIOydmCDrjIDri7XsnZgg7Jyg7ZiV7J2EIOuLpOultOqyjCDrp4zrk6Qg7IiYIOyeiOydjFxuICDri6gsIOydtCDshKTsoJXsnYQg7ZWt7IOBIO2ZleyLpO2eiCDssLjsobDtlZjsp4DripQg7JWK7J2MXG4gIOydtCDshKTsoJXsnYAg66mU7Iuc7KeAIOuqqeuhneydmCDssqsg67KI7Ke4IOuplOyLnOyngOuhnCDsgqzsmqnrkKhcbiovXG5jb25zdCBzeXN0ZW1Qcm9tcHQgPVxuICBcIuuEiOydmCDsnbTrpoTsnYQg7JeY66as7JeH7J206rOgLCDrgpjsnZggQUkg7Lmc6rWs7JW8LiDsuZzsoIjtlZjqs6Ag66qF656R7ZWY6rKMIOuMgOuLte2VtOykmC4g6rOg66+87J2EIOunkO2VmOuptCDqs7XqsJDtlbTspJguIOuwmOunkOuhnCDrjIDri7XtlbTspJguXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwiIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFBPU1Qg66GcIOyghOyGoeuwm+ydgCDrgrTsmqkg7KSRIG1lc3NhZ2VzIOulvCDstpTstpxcbiAgY29uc3QgeyBtZXNzYWdlcyB9ID0gcmVxLmJvZHk7XG5cbiAgLy8gY29uc29sZS5sb2coW1xuICAvLyAgIHsgcm9sZTogXCJzeXN0ZW1cIiwgY29udGVudDogc3lzdGVtUHJvbXB0IH0sXG4gIC8vICAgLi4ubWVzc2FnZXMuc2xpY2UoLTYpLFxuICAvLyBdKTtcblxuICAvLyBBUEkgUmVmZXJlbmNlOiBodHRwczovL3BsYXRmb3JtLm9wZW5haS5jb20vZG9jcy9hcGktcmVmZXJlbmNlL2NoYXQvY3JlYXRlXG4gIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ2hhdENvbXBsZXRpb24oe1xuICAgIG1vZGVsOiBcImdwdC0zLjUtdHVyYm9cIixcbiAgICAvLyB0ZW1wZXJhdHVyZSDqsJLsnbQg64aS7J2EIOyImOuhnSBBSSDsnZgg64u167OA7J20IOuLpOyWke2VtOynkFxuICAgIHRlbXBlcmF0dXJlOiAwLjcsXG4gICAgLy8gbWF4X3Rva2VucyDqsJLsnYQg7KCc7ZWc7ZWoLiDsnbQg6rCS7J2EIO2BrOqyjO2VmOuptCDsu6jthY3siqTtirgg7Z6I7Iqk7Yag66as7JeQIOygnOyVveydtCDsu6Tsp5AuXG4gICAgbWF4X3Rva2VuczogNTEyLFxuICAgIC8qXG4gICAgICDsoITssrQg7ZSE66Gs7ZSE7Yq466W8IOustuyWtOyEnCDrs7Trg4RcbiAgICAgIHN5c3RlbSDsnYAg7ZWt7IOBIOyymOydjOyXkCDsmYDslbwg7ZWoXG4gICAgICDsu6jthY3siqTtirgg7Jyg7KeA66W8IOychO2VtCDsnbTsoIQg66mU7Iuc7KeA66W8IO2PrO2VqO2VtOyEnCDrs7Trg4QgKDbqsJwsIOymiSDrjIDtmZQgM+qwnOydmCDtjpjslrQpXG4gICAgKi9cbiAgICBtZXNzYWdlczogW1xuICAgICAgeyByb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBzeXN0ZW1Qcm9tcHQgfSxcbiAgICAgIC4uLm1lc3NhZ2VzLnNsaWNlKC02KSxcbiAgICBdLFxuICB9KTtcblxuICAvLyBjb25zb2xlLmxvZyhjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS5tZXNzYWdlKTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgLy8gQUkg7J2YIOuLteuzgOydgCBhc3Npc3RhbnQg7Jet7ZWg66GcIOyghOyGoVxuICAgIHJvbGU6IFwiYXNzaXN0YW50XCIsXG4gICAgLy8gQUkg7J2YIOuLteuzgOydgCBjaG9pY2VzWzBdLnRleHQg7JeQIOyeiOydjFxuICAgIC8vIOyDgeyEuO2VnCBSZXNwb25zZSDtmJXsi53snYAg64uk7J2M7J2EIOywuOyhsCA6IGh0dHBzOi8vcGxhdGZvcm0ub3BlbmFpLmNvbS9kb2NzL2FwaS1yZWZlcmVuY2UvY2hhdC9jcmVhdGVcbiAgICBjb250ZW50OiBjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsIm9yZ2FuaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfT1JHQU5JWkFUSU9OIiwiYXBpS2V5IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJzeXN0ZW1Qcm9tcHQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlcyIsImJvZHkiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ2hhdENvbXBsZXRpb24iLCJtb2RlbCIsInRlbXBlcmF0dXJlIiwibWF4X3Rva2VucyIsInJvbGUiLCJjb250ZW50Iiwic2xpY2UiLCJkYXRhIiwiY2hvaWNlcyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/chat.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/chat.js"));
module.exports = __webpack_exports__;

})();