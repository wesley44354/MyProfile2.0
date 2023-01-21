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
exports.id = "pages/api/getSocials";
exports.ids = ["pages/api/getSocials"];
exports.modules = {

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ "(api)/./pages/api/getSocials.ts":
/*!*********************************!*\
  !*** ./pages/api/getSocials.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__]);\n([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\r\n  *[_type == \"social\"]\r\n`;\nasync function handler(req, res) {\n    const socials = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n    res.status(200).json({\n        socials\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0U29jaWFscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDbUM7QUFDUztBQUc1QyxNQUFNRSxRQUFRRiw2Q0FBSSxDQUFDO0FBUW5CLGVBQWU7O0FBS0YsS0FBS1MsSUFBSSxDQUFDO1FBQUVILGtCQUFBQSx1REFBQUE7SUFBUTtBQUNqQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwb3J0Zm9saW8yLjAvLi9wYWdlcy9hcGkvZ2V0U29jaWFscy50cz9mNmNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IGdyb3EgfSBmcm9tIFwibmV4dC1zYW5pdHlcIjtcclxuaW1wb3J0IHsgc2FuaXR5Q2xpZW50IH0gZnJvbSBcIi4uLy4uL3Nhbml0eVwiO1xyXG5pbXBvcnQgeyBTb2NpYWwgfSBmcm9tIFwiLi4vLi4vdHlwaW5nc1wiO1xyXG5cclxuY29uc3QgcXVlcnkgPSBncm9xYFxyXG4gICpbX3R5cGUgPT0gXCJzb2NpYWxcIl1cclxuYDtcclxuXHJcbnR5cGUgRGF0YSA9IHtcclxuICBzb2NpYWxzOiBTb2NpYWxbXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cclxuKSB7XHJcbiAgY29uc3Qgc29jaWFsczogU29jaWFsW10gPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnkpO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc29jaWFscyB9KVxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImdyb3EiLCJzYW5pdHlDbGllbnQiLCJxdWVyeSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzb2NpYWxzIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getSocials.ts\n");

/***/ }),

/***/ "(api)/./sanity.ts":
/*!*******************!*\
  !*** ./sanity.ts ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);\nnext_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"afv0f5cv\",\n    apiVersion: \"2021-03-25\",\n    useCdn: \"development\" === \"production\"\n};\n// Set up the client for fetching data in the getProps page functions\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);\nconst urlFor = (source)=>{\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(config).image(source);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zYW5pdHkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDVztBQUVyRCxNQUFNRSxTQUFTO0lBQ2JDLFNBQVNDLFlBQXNDLElBQUksQ0FBWTtJQUMvREcsV0FBV0gsVUFBeUM7SUFDcERLLFlBQVk7SUFDWkMsUUFBUU4sa0JBQXlCO0FBQ25DO0FBRUEscUVBQXFFO0FBQzlELE1BQU1PLGVBQWVYLHlEQUFZQSxDQUFDRSxRQUFRO0FBRTFDLE1BQU1VLFNBQVMsQ0FBQ0MsU0FBZ0I7SUFDckMsT0FBT1osd0RBQXFCQSxDQUFDQyxRQUFRWSxLQUFLLENBQUNEO0FBQzdDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXBvcnRmb2xpbzIuMC8uL3Nhbml0eS50cz8xMDNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJuZXh0LXNhbml0eVwiXHJcbmltcG9ydCBjcmVhdGVJbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCJcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCB8fCBcInByb2R1Y3Rpb25cIixcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEISxcclxuICBhcGlWZXJzaW9uOiBcIjIwMjEtMDMtMjVcIixcclxuICB1c2VDZG46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxufTtcclxuXHJcbi8vIFNldCB1cCB0aGUgY2xpZW50IGZvciBmZXRjaGluZyBkYXRhIGluIHRoZSBnZXRQcm9wcyBwYWdlIGZ1bmN0aW9uc1xyXG5leHBvcnQgY29uc3Qgc2FuaXR5Q2xpZW50ID0gY3JlYXRlQ2xpZW50KGNvbmZpZyk7XHJcblxyXG5leHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGNyZWF0ZUltYWdlVXJsQnVpbGRlcihjb25maWcpLmltYWdlKHNvdXJjZSk7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJjcmVhdGVJbWFnZVVybEJ1aWxkZXIiLCJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJhcGlWZXJzaW9uIiwidXNlQ2RuIiwic2FuaXR5Q2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./sanity.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getSocials.ts"));
module.exports = __webpack_exports__;

})();