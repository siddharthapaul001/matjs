(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MatJS"] = factory();
	else
		root["MatJS"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/add.js":
/*!***************************!*\
  !*** ./src/common/add.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack://MatJS/./src/common/add.js?");

/***/ }),

/***/ "./src/common/dot.js":
/*!***************************!*\
  !*** ./src/common/dot.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack://MatJS/./src/common/dot.js?");

/***/ }),

/***/ "./src/common/lib.js":
/*!***************************!*\
  !*** ./src/common/lib.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack://MatJS/./src/common/lib.js?");

/***/ }),

/***/ "./src/common/substract.js":
/*!*********************************!*\
  !*** ./src/common/substract.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack://MatJS/./src/common/substract.js?");

/***/ }),

/***/ "./src/image/index.js":
/*!****************************!*\
  !*** ./src/image/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Image; });\n/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ \"./src/matrix/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Image = /*#__PURE__*/function (_Matrix) {\n  _inherits(Image, _Matrix);\n\n  var _super = _createSuper(Image);\n\n  function Image() {\n    _classCallCheck(this, Image);\n\n    return _super.apply(this, arguments);\n  }\n\n  return Image;\n}(_matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://MatJS/./src/image/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Matrix, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ \"./src/matrix/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Matrix\", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ \"./src/image/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Image\", function() { return _image__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack://MatJS/./src/index.js?");

/***/ }),

/***/ "./src/matrix/helper/index.js":
/*!************************************!*\
  !*** ./src/matrix/helper/index.js ***!
  \************************************/
/*! exports provided: deepCopy, matFill, countBySize, getSizeByArray, getSingleDimArray, getMultiDimArray, sizeToIndex, indexToSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepCopy\", function() { return deepCopy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matFill\", function() { return matFill; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countBySize\", function() { return countBySize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSizeByArray\", function() { return getSizeByArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSingleDimArray\", function() { return getSingleDimArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMultiDimArray\", function() { return getMultiDimArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sizeToIndex\", function() { return sizeToIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"indexToSize\", function() { return indexToSize; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction deepCopy(obj) {\n  return JSON.parse(JSON.stringify(obj));\n}\n\nfunction matFill(dim, defaultFill) {}\n\nfunction countBySize(size) {\n  return size.reduce(function (count, sub) {\n    return count * sub;\n  }, 1);\n}\n\nfunction getSizeByArray(arr) {\n  var ptr = arr,\n      size = [];\n\n  while (Array.isArray(ptr)) {\n    size.push(ptr.length);\n    ptr = ptr[0];\n  }\n\n  return size;\n}\n\nfunction getSingleDimArray(multiDimArr, dim) {\n  var singleDimArr = multiDimArr;\n\n  if (!dim) {\n    dim = getSizeByArray(multiDimArr).length;\n  }\n\n  for (var i = 0; i < dim; i++) {\n    singleDimArr = singleDimArr.flat();\n  }\n\n  return singleDimArr;\n}\n\nfunction getMultiDimArray(singleDimArr, size) {\n  var tempSize = _toConsumableArray(size),\n      n = tempSize.pop(),\n      remDim = tempSize.length,\n      multiDimArr = singleDimArr;\n\n  while (remDim) {\n    var tempArr = [];\n\n    for (var i = 0, l = multiDimArr.length; i < l; i += n) {\n      tempArr.push(multiDimArr.slice(i, i + n));\n    }\n\n    multiDimArr = tempArr;\n    n = tempSize.pop();\n    remDim--;\n  }\n\n  return multiDimArr;\n}\n\nfunction sizeToIndex() {}\n\nfunction indexToSize() {}\n\n\n\n//# sourceURL=webpack://MatJS/./src/matrix/helper/index.js?");

/***/ }),

/***/ "./src/matrix/index.js":
/*!*****************************!*\
  !*** ./src/matrix/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Matrix; });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/matrix/helper/index.js\");\n/* harmony import */ var _common_dot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dot */ \"./src/common/dot.js\");\n/* harmony import */ var _common_dot__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_dot__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/add */ \"./src/common/add.js\");\n/* harmony import */ var _common_add__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_add__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_substract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/substract */ \"./src/common/substract.js\");\n/* harmony import */ var _common_substract__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_substract__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/lib */ \"./src/common/lib.js\");\n/* harmony import */ var _common_lib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_lib__WEBPACK_IMPORTED_MODULE_4__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar Matrix = /*#__PURE__*/function () {\n  function Matrix(arr, defaultFill) {\n    _classCallCheck(this, Matrix);\n\n    this._arr = [];\n    this._size;\n\n    if (typeof defaultFill === 'number') {\n      // expecting arr is a single dimension Array specifing dimension\n      this._arr = new Array(Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"countBySize\"])(arr)).fill(defaultFill);\n      this._size = _toConsumableArray(arr);\n    } else {\n      this.setValues(arr);\n    }\n  }\n\n  _createClass(Matrix, [{\n    key: \"size\",\n    value: function size() {\n      return this._size;\n    }\n  }, {\n    key: \"dim\",\n    value: function dim() {\n      return this._size.length;\n    }\n  }, {\n    key: \"setValues\",\n    value: function setValues(arr) {\n      var size = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"getSizeByArray\"])(arr);\n\n      if (!this._size) {\n        // new matrix\n        this._size = size;\n        this._arr = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"getSingleDimArray\"])(arr, this.dim());\n      } else {// check for dim matching\n      }\n    }\n  }, {\n    key: \"getValues\",\n    value: function getValues() {\n      return Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"getMultiDimArray\"])(this._arr, this._size);\n    }\n  }, {\n    key: \"setValue\",\n    value: function setValue(dim, value) {}\n  }, {\n    key: \"getValue\",\n    value: function getValue(dimIdx) {}\n  }, {\n    key: \"copy\",\n    value: function copy() {\n      return new Matrix(this._arr);\n    }\n  }]);\n\n  return Matrix;\n}();\n\n\n\n//# sourceURL=webpack://MatJS/./src/matrix/index.js?");

/***/ })

/******/ });
});