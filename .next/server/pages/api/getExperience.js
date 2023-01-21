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
exports.id = "pages/api/getExperience";
exports.ids = ["pages/api/getExperience"];
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

/***/ "(api)/./pages/api/getExperience.ts":
/*!************************************!*\
  !*** ./pages/api/getExperience.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__]);\n([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\r\n  *[_type == \"experience\"]{\r\n    ...,\r\n    technologies[]->\r\n  }\r\n`;\nasync function handler(req, res) {\n    const experiences = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n    res.status(200).json({\n        experiences\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0RXhwZXJpZW5jZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDbUM7QUFDUztBQUc1QyxNQUFNRSxRQUFRRiw2Q0FBSSxDQUFDO0FBV25CLGVBQWU7SUFJYjtJQUNBSyxJQUFJRyxNQUFNLENBQUMsS0FBS0M7OztBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL215cG9ydGZvbGlvMi4wLy4vcGFnZXMvYXBpL2dldEV4cGVyaWVuY2UudHM/MmY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBncm9xIH0gZnJvbSBcIm5leHQtc2FuaXR5XCI7XHJcbmltcG9ydCB7IHNhbml0eUNsaWVudCB9IGZyb20gXCIuLi8uLi9zYW5pdHlcIjtcclxuaW1wb3J0IHsgRXhwZXJpZW5jZSB9IGZyb20gXCIuLi8uLi90eXBpbmdzXCI7XHJcblxyXG5jb25zdCBxdWVyeSA9IGdyb3FgXHJcbiAgKltfdHlwZSA9PSBcImV4cGVyaWVuY2VcIl17XHJcbiAgICAuLi4sXHJcbiAgICB0ZWNobm9sb2dpZXNbXS0+XHJcbiAgfVxyXG5gO1xyXG5cclxudHlwZSBEYXRhID0ge1xyXG4gIGV4cGVyaWVuY2VzOiBFeHBlcmllbmNlW11cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XHJcbikge1xyXG4gIGNvbnN0IGV4cGVyaWVuY2VzOiBFeHBlcmllbmNlW10gPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnkpO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZXhwZXJpZW5jZXMgfSlcclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJncm9xIiwic2FuaXR5Q2xpZW50IiwicXVlcnkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZXhwZXJpZW5jZXMiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getExperience.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getExperience.ts"));
module.exports = __webpack_exports__;

})();