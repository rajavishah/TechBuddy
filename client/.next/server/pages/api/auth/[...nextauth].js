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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/apple":
/*!********************************************!*\
  !*** external "next-auth/providers/apple" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/apple");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_apple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/apple */ \"next-auth/providers/apple\");\n/* harmony import */ var next_auth_providers_apple__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_apple__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_apple__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            // The name to display on the sign in form (e.g. 'Sign in with...')\n            name: \"Credentials\",\n            // The credentials is used to generate a suitable form on the sign in page.\n            // You can specify whatever fields you are expecting to be submitted.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                name: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                // You need to provide your own logic here that takes the credentials\n                // submitted and returns either a object representing a user or value\n                // that is false/null if the credentials are invalid.\n                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }\n                // You can also use the `req` object to obtain additional parameters\n                // (i.e., the request IP address)\n                const res = await fetch(\"http://localhost:5500/signin\", {\n                    method: \"POST\",\n                    body: JSON.stringify(credentials),\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                const user = await res.json();\n                //console.log(res.json())\n                // Window.sessionStorage.setItem('jwt',JSON.stringify(res.json()))\n                // localStorage.setItem('token',res.data.token)\n                // If no error and we have user data, return it\n                if (res.ok && user) {\n                    return user;\n                }\n                // Return null if user data could not be retrieved\n                return null;\n            }\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDd0I7QUFDUztBQUNaO0FBRXJELGlFQUFlQSxnREFBUUEsQ0FBQztJQUVwQkksV0FBVTtRQUNORCxnRUFBYUEsQ0FBQztZQUNWRSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLGNBQWFILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtRQUMxQztRQUNGVCxpRUFBY0EsQ0FBQztZQUNUSSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLGNBQWFILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtRQUMxQztRQUNBUixzRUFBbUJBLENBQUM7WUFDaEIsbUVBQW1FO1lBQ25FUyxNQUFNO1lBQ04sMkVBQTJFO1lBQzNFLHFFQUFxRTtZQUNyRSxtREFBbUQ7WUFDbkQseUVBQXlFO1lBQ3pFQyxhQUFhO2dCQUNYRCxNQUFNO29CQUFFRSxPQUFPO29CQUFZQyxNQUFNO29CQUFRQyxhQUFhO2dCQUFTO2dCQUMvREMsT0FBTTtvQkFBRUgsT0FBTztvQkFBU0MsTUFBTTtvQkFBU0MsYUFBYTtnQkFBUTtnQkFDNURFLFVBQVU7b0JBQUVKLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNSSxXQUFVTixXQUFXLEVBQUVPLEdBQUcsRUFBRTtnQkFDaEMscUVBQXFFO2dCQUNyRSxxRUFBcUU7Z0JBQ3JFLHFEQUFxRDtnQkFDckQsc0VBQXNFO2dCQUN0RSxvRUFBb0U7Z0JBQ3BFLGlDQUFpQztnQkFDakMsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLGdDQUFnQztvQkFDdERDLFFBQVE7b0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ2I7b0JBQ3JCYyxTQUFTO3dCQUFFLGdCQUFnQjtvQkFBbUI7Z0JBQ2hEO2dCQUNELE1BQU1DLE9BQU8sTUFBTVAsSUFBSVEsSUFBSTtnQkFDekIseUJBQXlCO2dCQUMxQixrRUFBa0U7Z0JBQ25FLCtDQUErQztnQkFDOUMsK0NBQStDO2dCQUUvQyxJQUFJUixJQUFJUyxFQUFFLElBQUlGLE1BQU07b0JBQ2xCLE9BQU9BO2dCQUNULENBQUM7Z0JBQ0Qsa0RBQWtEO2dCQUNsRCxPQUFPLElBQUk7WUFDYjtRQUNGO0tBQ0w7QUFDTCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVjaGJ1ZGR5Ly4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NzhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gICduZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YidcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcbmltcG9ydCBBcHBsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2FwcGxlXCJcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAgIFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIEFwcGxlUHJvdmlkZXIoe1xuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDpwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxuICAgICAgICB9KSxcbiAgICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6cHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICAgICAgfSksXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgICAgICAgLy8gVGhlIG5hbWUgdG8gZGlzcGxheSBvbiB0aGUgc2lnbiBpbiBmb3JtIChlLmcuICdTaWduIGluIHdpdGguLi4nKVxuICAgICAgICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgICAgICAgIC8vIFRoZSBjcmVkZW50aWFscyBpcyB1c2VkIHRvIGdlbmVyYXRlIGEgc3VpdGFibGUgZm9ybSBvbiB0aGUgc2lnbiBpbiBwYWdlLlxuICAgICAgICAgICAgLy8gWW91IGNhbiBzcGVjaWZ5IHdoYXRldmVyIGZpZWxkcyB5b3UgYXJlIGV4cGVjdGluZyB0byBiZSBzdWJtaXR0ZWQuXG4gICAgICAgICAgICAvLyBlLmcuIGRvbWFpbiwgdXNlcm5hbWUsIHBhc3N3b3JkLCAyRkEgdG9rZW4sIGV0Yy5cbiAgICAgICAgICAgIC8vIFlvdSBjYW4gcGFzcyBhbnkgSFRNTCBhdHRyaWJ1dGUgdG8gdGhlIDxpbnB1dD4gdGFnIHRocm91Z2ggdGhlIG9iamVjdC5cbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IHsgbGFiZWw6IFwiVXNlcm5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcImpzbWl0aFwiIH0sXG4gICAgICAgICAgICAgIGVtYWlsOnsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCJlbWFpbFwiIH0sXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgICAgICAgLy8gWW91IG5lZWQgdG8gcHJvdmlkZSB5b3VyIG93biBsb2dpYyBoZXJlIHRoYXQgdGFrZXMgdGhlIGNyZWRlbnRpYWxzXG4gICAgICAgICAgICAgIC8vIHN1Ym1pdHRlZCBhbmQgcmV0dXJucyBlaXRoZXIgYSBvYmplY3QgcmVwcmVzZW50aW5nIGEgdXNlciBvciB2YWx1ZVxuICAgICAgICAgICAgICAvLyB0aGF0IGlzIGZhbHNlL251bGwgaWYgdGhlIGNyZWRlbnRpYWxzIGFyZSBpbnZhbGlkLlxuICAgICAgICAgICAgICAvLyBlLmcuIHJldHVybiB7IGlkOiAxLCBuYW1lOiAnSiBTbWl0aCcsIGVtYWlsOiAnanNtaXRoQGV4YW1wbGUuY29tJyB9XG4gICAgICAgICAgICAgIC8vIFlvdSBjYW4gYWxzbyB1c2UgdGhlIGByZXFgIG9iamVjdCB0byBvYnRhaW4gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG4gICAgICAgICAgICAgIC8vIChpLmUuLCB0aGUgcmVxdWVzdCBJUCBhZGRyZXNzKVxuICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTUwMC9zaWduaW5cIiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNyZWRlbnRpYWxzKSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMuanNvbigpKVxuICAgICAgICAgICAgICAvLyBXaW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnand0JyxKU09OLnN0cmluZ2lmeShyZXMuanNvbigpKSlcbiAgICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLHJlcy5kYXRhLnRva2VuKVxuICAgICAgICAgICAgICAvLyBJZiBubyBlcnJvciBhbmQgd2UgaGF2ZSB1c2VyIGRhdGEsIHJldHVybiBpdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGlmIChyZXMub2sgJiYgdXNlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gUmV0dXJuIG51bGwgaWYgdXNlciBkYXRhIGNvdWxkIG5vdCBiZSByZXRyaWV2ZWRcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgIF1cbn0pXG5cbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdpdGh1YlByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIkFwcGxlUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwibmFtZSIsImNyZWRlbnRpYWxzIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ1c2VyIiwianNvbiIsIm9rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();