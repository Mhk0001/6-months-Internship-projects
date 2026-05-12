/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* * {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: 80vh;\\r\\n}\\r\\n\\r\\n.todolist {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  border: 1px solid #808080;\\r\\n  width: 40vw;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n}\\r\\n.borderBottom { border-bottom: 1px solid #ccc; }\\r\\n::-webkit-input-placeholder { font-style: italic; }\\r\\n\\r\\n.list {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.todoForm { width: 100%; }\\r\\n\\r\\n.input {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 8px;\\r\\n}\\r\\n\\r\\n.listInput {\\r\\n  flex: 1;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.inputButton {\\r\\n  background-color: white;\\r\\n  border: none;\\r\\n  padding: 8px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.listItem {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 10px;\\r\\n  padding-right: 18px;\\r\\n}\\r\\n\\r\\n.inputEntry {\\r\\n  display: flex;\\r\\n  width: 50%;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.clear {\\r\\n  padding: 10px;\\r\\n  background-color: whitesmoke;\\r\\n}\\r\\n\\r\\n.clearBtn {\\r\\n  width: 100%;\\r\\n  font-size: 16px;\\r\\n  border: none;\\r\\n  background-color: whitesmoke;\\r\\n}\\r\\n\\r\\n.hide { display: none; }\\r\\n\\r\\n#editInput {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#editInput:focus {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  text-decoration: line-through;\\r\\n} */\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: \\\"Segoe UI\\\", sans-serif;\\r\\n}\\r\\nbody {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: 100vh;\\r\\n  background: linear-gradient(135deg, #667eea, #764ba2);\\r\\n  font-family: Arial, sans-serif;\\r\\n}\\r\\n\\r\\n\\r\\n/* Main Card */\\r\\n.todolist {\\r\\n  background: #fff;\\r\\n  width: 420px;\\r\\n  border-radius: 12px;\\r\\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n/* Header */\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 15px;\\r\\n  background: #f7f7f7;\\r\\n  font-size: 18px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.borderBottom {\\r\\n  border-bottom: 1px solid #ddd;\\r\\n}\\r\\n\\r\\n/* Input Area */\\r\\n.todoForm {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.input {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 12px;\\r\\n}\\r\\n\\r\\n.listInput {\\r\\n  flex: 1;\\r\\n  padding: 10px;\\r\\n  border-radius: 6px;\\r\\n  border: 1px solid #ccc;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.listInput:focus {\\r\\n  border-color: #667eea;\\r\\n}\\r\\n\\r\\n/* Add Button */\\r\\n.inputButton {\\r\\n  margin-left: 10px;\\r\\n  padding: 10px 14px;\\r\\n  border-radius: 6px;\\r\\n  background: #667eea;\\r\\n  color: white;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.inputButton:hover {\\r\\n  background: #5a67d8;\\r\\n}\\r\\n\\r\\n/* List */\\r\\n.list {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n/* Single Item */\\r\\n.listItem {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 12px 15px;\\r\\n  border-bottom: 1px solid #eee;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.listItem:hover {\\r\\n  background: #f9f9f9;\\r\\n}\\r\\n\\r\\n/* Left part */\\r\\n.inputEntry {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n/* Completed task */\\r\\n.completed {\\r\\n  text-decoration: line-through;\\r\\n  color: #999;\\r\\n}\\r\\n\\r\\n/* Clear button */\\r\\n.clear {\\r\\n  background: #f7f7f7;\\r\\n}\\r\\n\\r\\n.clearBtn {\\r\\n  width: 100%;\\r\\n  padding: 12px;\\r\\n  font-size: 16px;\\r\\n  background: none;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  color: #444;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.clearBtn:hover {\\r\\n  background: #eaeaea;\\r\\n}\\r\\n\\r\\n/* Edit input */\\r\\n#editInput {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n/* Utility */\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpacktemplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpacktemplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/crud.js */ \"./src/modules/crud.js\");\n/* harmony import */ var _modules_status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/status.js */ \"./src/modules/status.js\");\n\r\n\r\n\r\n\r\nconst newList = new _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nnewList.restoreList();\r\nconst todosInput = document.querySelector('.listInput');\r\nconst addTaskBtn = document.querySelector('.inputButton');\r\n\r\nconst taskList = document.querySelector('.list');\r\n\r\ntodosInput.addEventListener('keypress', (e) => {\r\n  if (e.key === 'Enter') {\r\n    e.preventDefault();\r\n    if (todosInput.value) {\r\n      const todoInput = document.querySelector('.listInput');\r\n      const description = todoInput.value;\r\n      newList.addTask(description);\r\n    }\r\n    todosInput.value = '';\r\n  }\r\n});\r\n\r\naddTaskBtn.addEventListener('click', (e) => {\r\n  if (e.target.previousElementSibling.value) {\r\n    const todoInput = document.querySelector('.listInput');\r\n    const description = todoInput.value;\r\n    newList.addTask(description);\r\n  }\r\n  todosInput.value = '';\r\n});\r\n\r\ntaskList.addEventListener('click', (e) => {\r\n  if (e.target.id === 'edit') {\r\n    e.target.classList.add('hide');\r\n    e.target.nextElementSibling.classList.remove('hide');\r\n\r\n    const label = [...e.target.previousElementSibling.children];\r\n    label.forEach((element) => {\r\n      if (element.id === 'label') {\r\n        element.classList.add('hide');\r\n      } else if (element.id === 'editInput') {\r\n        element.classList.remove('hide');\r\n        element.value = element.previousElementSibling.textContent;\r\n        element.classList.focus();\r\n      }\r\n    });\r\n  } else if (e.target.id === 'save') {\r\n    e.target.classList.add('hide');\r\n    e.target.previousElementSibling.classList.remove('hide');\r\n\r\n    const label = [...e.target.previousElementSibling.previousElementSibling.children];\r\n    label.forEach((element) => {\r\n      if (element.id === 'label') {\r\n        element.classList.remove('hide');\r\n        element.textContent = element.nextElementSibling.value;\r\n        newList.updateTask(element.parentNode.parentNode.id, element.nextElementSibling.value);\r\n      } else if (element.id === 'editInput') {\r\n        element.classList.add('hide');\r\n      }\r\n    });\r\n  } else if (e.target.id === 'delete') {\r\n    const li = e.target.parentNode;\r\n    const index = li.querySelector('.inputEntry').id;\r\n    newList.deleteTask(index);\r\n  }\r\n});\r\n\r\ntaskList.addEventListener('change', (e) => {\r\n  if (e.target.id === 'checkbox') {\r\n    const index = (0,_modules_status_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e);\r\n    if (e.target.checked) {\r\n      e.target.nextElementSibling.classList.add('completed');\r\n    } else {\r\n      e.target.nextElementSibling.classList.remove('completed');\r\n    }\r\n    newList.markComplete(index, e.target.checked);\r\n  }\r\n});\r\nconst clearCompleted = document.querySelector('.clearBtn');\r\nclearCompleted.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  newList.clearComplete();\r\n});\r\n\n\n//# sourceURL=webpack://webpacktemplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/crud.js":
/*!*****************************!*\
  !*** ./src/modules/crud.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\r\n\r\n\r\n\r\nclass List {\r\n  constructor() {\r\n    this.myTasks = [];\r\n    this.store = new _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n  }\r\n\r\n  updateLocalStore() {\r\n    this.store.updateLocalStore(this.myTasks);\r\n  }\r\n\r\n  displayTasks() {\r\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderList)(0, true);\r\n    this.myTasks.forEach((task) => {\r\n      (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderList)(task);\r\n    });\r\n  }\r\n\r\n  addTask(description) {\r\n    const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](description, this.myTasks.length + 1);\r\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderList)(newTask);\r\n    this.myTasks.push(newTask);\r\n    this.updateLocalStore();\r\n  }\r\n\r\n  updateTask(index, newDescription) {\r\n    this.myTasks[index].description = newDescription;\r\n    this.updateLocalStore();\r\n  }\r\n\r\n  deleteTask(index) {\r\n    this.myTasks.splice(index, 1);\r\n    this.updateIndex();\r\n    // taskList.innerHTML = '';\r\n    this.displayTasks();\r\n  }\r\n\r\n  updateIndex() {\r\n    this.myTasks.forEach((task, index) => {\r\n      task.index = index + 1;\r\n    });\r\n    this.updateLocalStore();\r\n  }\r\n\r\n  restoreList() {\r\n    if (!localStorage.getItem('MyTasks')) {\r\n      this.store.updateLocalStore(this.myTasks);\r\n      this.myTasks = this.store.getLocalStore();\r\n    } else {\r\n      this.myTasks = this.store.getLocalStore();\r\n    }\r\n    this.displayTasks();\r\n  }\r\n\r\n  markComplete(index, value) {\r\n    this.myTasks[index].completed = value;\r\n    this.updateLocalStore();\r\n  }\r\n\r\n  clearComplete() {\r\n    this.myTasks = this.myTasks.filter((element) => !element.completed);\r\n    this.updateIndex();\r\n    // taskList.innerHTML = '';\r\n    this.displayTasks();\r\n  }\r\n}\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/crud.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderList\": () => (/* binding */ renderList),\n/* harmony export */   \"taskList\": () => (/* binding */ taskList)\n/* harmony export */ });\nconst taskList = document.querySelector('.list');\r\nfunction renderList(task, render = false) {\r\n  const taskList = document.querySelector('.list');\r\n\r\n  if (render) {\r\n    taskList.innerHTML = '';\r\n  }\r\n  let completedStatus = '';\r\n  let checkboxStatus = '';\r\n  if (task.completed) {\r\n    completedStatus = 'completed';\r\n    checkboxStatus = 'checked';\r\n  }\r\n  if (task) {\r\n    taskList.innerHTML += `\r\n  <li class='listItem borderBottom' id=\"${task.index - 1}\" >\r\n    <div class=\"inputEntry\">\r\n      <input type=\"checkbox\" name=\"\" id=\"checkbox\" ${checkboxStatus}>\r\n      <p class=\"taskDescription ${completedStatus}\" id=\"label\">${task.description}</p>\r\n      <input type=\"text\" id=\"editInput\" class=\"hide\">      \r\n    </div>\r\n    <i class=\"fa-solid fa-pen-to-square\" id=\"edit\"></i> \r\n    <i class=\"fa-solid fa-floppy-disk hide\" id=\"save\"></i>\r\n    <i class=\"fa-solid fa-trash\" id=\"delete\"></i>    \r\n  </li>\r\n  `;\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/status.js":
/*!*******************************!*\
  !*** ./src/modules/status.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setStatus)\n/* harmony export */ });\nfunction setStatus(e) {\r\n  const view = e.target.parentNode.parentNode;\r\n  return view.id;\r\n}\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/status.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\r\n  getLocalStore = () => {\r\n    const myTasks = JSON.parse(localStorage.getItem('MyTasks'));\r\n    return myTasks;\r\n  }\r\n\r\n  updateLocalStore = (myTasks) => {\r\n    localStorage.setItem('MyTasks', JSON.stringify(myTasks));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  constructor(description, index, completed = false) {\r\n    this.description = description;\r\n    this.index = index;\r\n    this.completed = completed;\r\n  }\r\n}\n\n//# sourceURL=webpack://webpacktemplate/./src/modules/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;