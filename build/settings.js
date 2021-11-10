/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/marked/lib/marked.js":
/*!*******************************************!*\
  !*** ./node_modules/marked/lib/marked.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * marked - a markdown parser
 * Copyright (c) 2011-2018, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

;(function(root) {
'use strict';

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
    + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
    + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
    + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
    + ')',
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  nptable: noop,
  table: noop,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
  text: /^[^\n]+/
};

block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}\.)/;
block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
block.item = edit(block.item, 'gm')
  .replace(/bull/g, block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?-->/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} +')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
  table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
});

/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
  fences: noop, // fences not supported
  paragraph: edit(block.normal._paragraph)
    .replace('hr', block.hr)
    .replace('heading', ' *#{1,6} *[^\n]')
    .replace('lheading', block.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex()
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = Object.create(null);
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.pedantic) {
    this.rules = block.pedantic;
  } else if (this.options.gfm) {
    this.rules = block.gfm;
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top) {
  src = src.replace(/^ +$/gm, '');
  var next,
      loose,
      cap,
      bull,
      b,
      item,
      listStart,
      listItems,
      t,
      space,
      i,
      tag,
      l,
      isordered,
      istask,
      ischecked;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      var lastToken = this.tokens[this.tokens.length - 1];
      src = src.substring(cap[0].length);
      // An indented code block cannot interrupt a paragraph.
      if (lastToken && lastToken.type === 'paragraph') {
        lastToken.text += '\n' + cap[0].trimRight();
      } else {
        cap = cap[0].replace(/^ {4}/gm, '');
        this.tokens.push({
          type: 'code',
          codeBlockStyle: 'indented',
          text: !this.options.pedantic
            ? rtrim(cap, '\n')
            : cap
        });
      }
      continue;
    }

    // fences
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2] ? cap[2].trim() : cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (cap = this.rules.nptable.exec(src)) {
      item = {
        type: 'table',
        header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        src = src.substring(cap[0].length);

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = splitCells(item.cells[i], item.header.length);
        }

        this.tokens.push(item);

        continue;
      }
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];
      isordered = bull.length > 1;

      listStart = {
        type: 'list_start',
        ordered: isordered,
        start: isordered ? +bull : '',
        loose: false
      };

      this.tokens.push(listStart);

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      listItems = [];
      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) */, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull.length > 1 ? b.length === 1
            : (b.length > 1 || (this.options.smartLists && b !== bull))) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        if (loose) {
          listStart.loose = true;
        }

        // Check for task list items
        istask = /^\[[ xX]\] /.test(item);
        ischecked = undefined;
        if (istask) {
          ischecked = item[1] !== ' ';
          item = item.replace(/^\[[ xX]\] +/, '');
        }

        t = {
          type: 'list_item_start',
          task: istask,
          checked: ischecked,
          loose: loose
        };

        listItems.push(t);
        this.tokens.push(t);

        // Recurse.
        this.token(item, false);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      if (listStart.loose) {
        l = listItems.length;
        i = 0;
        for (; i < l; i++) {
          listItems[i].loose = true;
        }
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0])) : cap[0]
      });
      continue;
    }

    // def
    if (top && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      if (!this.tokens.links[tag]) {
        this.tokens.links[tag] = {
          href: cap[2],
          title: cap[3]
        };
      }
      continue;
    }

    // table (gfm)
    if (cap = this.rules.table.exec(src)) {
      item = {
        type: 'table',
        header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        src = src.substring(cap[0].length);

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = splitCells(
            item.cells[i].replace(/^ *\| *| *\| *$/g, ''),
            item.header.length);
        }

        this.tokens.push(item);

        continue;
      }
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noop,
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
  em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noop,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
};

// list of punctuation marks from common mark spec
// without ` and ] to workaround Rule 17 (inline code blocks/links)
inline._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~';
inline.em = edit(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
  .replace('comment', block._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^~+(?=\S)([\s\S]*?\S)~+/,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
});

inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer();
  this.renderer.options = this.options;

  if (!this.links) {
    throw new Error('Tokens array requires a `links` property.');
  }

  if (this.options.pedantic) {
    this.rules = inline.pedantic;
  } else if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = '',
      link,
      text,
      href,
      title,
      cap,
      prevCapZero;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(cap[1]);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.inRawBlock = true;
      } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.inRawBlock = false;
      }

      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0];
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      var lastParenIndex = findClosingBracket(cap[2], '()');
      if (lastParenIndex > -1) {
        var linkLen = 4 + cap[1].length + lastParenIndex;
        cap[2] = cap[2].substring(0, lastParenIndex);
        cap[0] = cap[0].substring(0, linkLen).trim();
        cap[3] = '';
      }
      src = src.substring(cap[0].length);
      this.inLink = true;
      href = cap[2];
      if (this.options.pedantic) {
        link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        } else {
          title = '';
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }
      href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
      out += this.outputLink(cap, {
        href: InlineLexer.escapes(href),
        title: InlineLexer.escapes(title)
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2].trim(), true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = escape(this.mangle(cap[1]));
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      if (cap[2] === '@') {
        text = escape(cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }
      src = src.substring(cap[0].length);
      out += this.renderer.link(href, null, text);
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      if (this.inRawBlock) {
        out += this.renderer.text(this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0])) : cap[0]);
      } else {
        out += this.renderer.text(escape(this.smartypants(cap[0])));
      }
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

InlineLexer.escapes = function(text) {
  return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = link.href,
      title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = '',
      l = text.length,
      i = 0,
      ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || marked.defaults;
}

Renderer.prototype.code = function(code, infostring, escaped) {
  var lang = (infostring || '').match(/\S*/)[0];
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw, slugger) {
  if (this.options.headerIds) {
    return '<h'
      + level
      + ' id="'
      + this.options.headerPrefix
      + slugger.slug(raw)
      + '">'
      + text
      + '</h'
      + level
      + '>\n';
  }
  // ignore IDs
  return '<h' + level + '>' + text + '</h' + level + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered, start) {
  var type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
  return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.checkbox = function(checked) {
  return '<input '
    + (checked ? 'checked="" ' : '')
    + 'disabled="" type="checkbox"'
    + (this.options.xhtml ? ' /' : '')
    + '> ';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  if (body) body = '<tbody>' + body + '</tbody>';

  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + body
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' align="' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
  if (href === null) {
    return text;
  }
  var out = '<a href="' + escape(href) + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
  if (href === null) {
    return text;
  }

  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * TextRenderer
 * returns only the textual part of the token
 */

function TextRenderer() {}

// no need for block level renderers

TextRenderer.prototype.strong =
TextRenderer.prototype.em =
TextRenderer.prototype.codespan =
TextRenderer.prototype.del =
TextRenderer.prototype.text = function(text) {
  return text;
};

TextRenderer.prototype.link =
TextRenderer.prototype.image = function(href, title, text) {
  return '' + text;
};

TextRenderer.prototype.br = function() {
  return '';
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer();
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
  this.slugger = new Slugger();
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options) {
  var parser = new Parser(options);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options);
  // use an InlineLexer with a TextRenderer to extract pure text
  this.inlineText = new InlineLexer(
    src.links,
    merge({}, this.options, { renderer: new TextRenderer() })
  );
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  this.token = this.tokens.pop();
  return this.token;
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        unescape(this.inlineText.output(this.token.text)),
        this.slugger);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = '',
          body = '',
          i,
          row,
          cell,
          j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      body = '';
      var ordered = this.token.ordered,
          start = this.token.start;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered, start);
    }
    case 'list_item_start': {
      body = '';
      var loose = this.token.loose;
      var checked = this.token.checked;
      var task = this.token.task;

      if (this.token.task) {
        body += this.renderer.checkbox(checked);
      }

      while (this.next().type !== 'list_item_end') {
        body += !loose && this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }
      return this.renderer.listitem(body, task, checked);
    }
    case 'html': {
      // TODO parse inline content if parameter markdown=1
      return this.renderer.html(this.token.text);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
    default: {
      var errMsg = 'Token with "' + this.token.type + '" type was not found.';
      if (this.options.silent) {
        console.log(errMsg);
      } else {
        throw new Error(errMsg);
      }
    }
  }
};

/**
 * Slugger generates header id
 */

function Slugger() {
  this.seen = {};
}

/**
 * Convert string to unique id
 */

Slugger.prototype.slug = function(value) {
  var slug = value
    .toLowerCase()
    .trim()
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
    .replace(/\s/g, '-');

  if (this.seen.hasOwnProperty(slug)) {
    var originalSlug = slug;
    do {
      this.seen[originalSlug]++;
      slug = originalSlug + '-' + this.seen[originalSlug];
    } while (this.seen.hasOwnProperty(slug));
  }
  this.seen[slug] = 0;

  return slug;
};

/**
 * Helpers
 */

function escape(html, encode) {
  if (encode) {
    if (escape.escapeTest.test(html)) {
      return html.replace(escape.escapeReplace, function(ch) { return escape.replacements[ch]; });
    }
  } else {
    if (escape.escapeTestNoEncode.test(html)) {
      return html.replace(escape.escapeReplaceNoEncode, function(ch) { return escape.replacements[ch]; });
    }
  }

  return html;
}

escape.escapeTest = /[&<>"']/;
escape.escapeReplace = /[&<>"']/g;
escape.replacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

escape.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
escape.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function edit(regex, opt) {
  regex = regex.source || regex;
  opt = opt || '';
  return {
    replace: function(name, val) {
      val = val.source || val;
      val = val.replace(/(^|[^\[])\^/g, '$1');
      regex = regex.replace(name, val);
      return this;
    },
    getRegex: function() {
      return new RegExp(regex, opt);
    }
  };
}

function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (/^[^:]+:\/*[^/]*$/.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];

  if (href.slice(0, 2) === '//') {
    return base.replace(/:[\s\S]*/, ':') + href;
  } else if (href.charAt(0) === '/') {
    return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
  } else {
    return base + href;
  }
}
var baseUrls = {};
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1,
      target,
      key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  var row = tableRow.replace(/\|/g, function(match, offset, str) {
        var escaped = false,
            curr = offset;
        while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
        if (escaped) {
          // odd number of slashes means | is escaped
          // so we leave it alone
          return '|';
        } else {
          // add space before unescaped |
          return ' |';
        }
      }),
      cells = row.split(/ \|/),
      i = 0;

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

// Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
// /c*$/ is vulnerable to REDOS.
// invert: Remove suffix of non-c chars instead. Default falsey.
function rtrim(str, c, invert) {
  if (str.length === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  var suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < str.length) {
    var currChar = str.charAt(str.length - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.substr(0, str.length - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  var level = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

/**
 * Marked
 */

function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);

    var highlight = opt.highlight,
        tokens,
        pending,
        i = 0;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    checkSanitizeDeprecation(opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.getDefaults = function() {
  return {
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: new Renderer(),
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    xhtml: false
  };
};

marked.defaults = marked.getDefaults();

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.Slugger = Slugger;

marked.parse = marked;

if (true) {
  module.exports = marked;
} else {}
})(this || (typeof window !== 'undefined' ? window : global));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/add-ons/typography/src/components/font-selection/components/dropdown-menu.js":
/*!******************************************************************************************!*\
  !*** ./src/add-ons/typography/src/components/font-selection/components/dropdown-menu.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);









/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    withSpokenMessages = _wp$components.withSpokenMessages,
    DropdownMenu = _wp$components.DropdownMenu;
var defaultUnits = {
  'font-size-unit': 'px',
  'line-height-unit': 'px',
  'letter-spacing-unit': 'px'
};
var defaultContentCSS = {
  content: defaultUnits,
  heading: {
    H1: defaultUnits,
    H2: defaultUnits,
    H3: defaultUnits,
    H4: defaultUnits,
    H5: defaultUnits,
    H6: defaultUnits
  },
  button: defaultUnits,
  fonts: {}
};

var TypographyDropdownMenu =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TypographyDropdownMenu, _Component);

  function TypographyDropdownMenu() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TypographyDropdownMenu);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(TypographyDropdownMenu).apply(this, arguments));
    _this.duplicateFont = _this.duplicateFont.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TypographyDropdownMenu, [{
    key: "duplicateFont",
    value: function duplicateFont() {
      var _this$props = this.props,
          updateState = _this$props.updateState,
          selectedItem = _this$props.selectedItem,
          Fonts = _this$props.Fonts,
          GoogleFonts = _this$props.GoogleFonts,
          saveMeta = _this$props.saveMeta;
      var elementTypes = ['content', 'heading', 'button'];
      var headings = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
      var fontNames = Fonts[selectedItem].name.split(' + ');
      var primaryFont = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["find"])(GoogleFonts.fonts, ['name', fontNames[0]]);
      var secondaryFont = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["find"])(GoogleFonts.fonts, ['name', fontNames[1]]);
      var headerCSS = Fonts[selectedItem].headerCss;
      var headingCSS, fontCSS, innerHeadingCSS, innerCSS, innerFontCSS;
      var contentCSS = Object.assign(defaultContentCSS, {
        name: Fonts[selectedItem].name + ' Custom'
      });
      Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(elementTypes, function (elementType) {
        switch (elementType) {
          case 'heading':
            headingCSS = Object.assign({}, contentCSS[elementType]);

            if (primaryFont) {
              headingCSS = Object.assign(headingCSS, {
                'font-family': primaryFont.name
              });
            }

            contentCSS[elementType] = headingCSS;
            fontCSS = Object.assign({}, contentCSS.fonts);
            fontCSS = Object.assign(fontCSS, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, elementType, primaryFont));
            contentCSS.fonts = fontCSS;

            if (headerCSS) {
              Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(headerCSS, function (value, syntax) {
                Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(headings, function (heading) {
                  innerHeadingCSS = Object.assign({}, contentCSS[elementType][heading]);
                  innerHeadingCSS = Object.assign(innerHeadingCSS, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, syntax, value));
                  contentCSS[elementType][heading] = innerHeadingCSS;
                });
              });
            }

            break;

          case 'content':
            innerCSS = Object.assign({}, contentCSS[elementType]);

            if (secondaryFont) {
              innerCSS = Object.assign(innerCSS, {
                'font-family': secondaryFont.name
              });
            }

            contentCSS[elementType] = innerCSS;
            innerFontCSS = Object.assign({}, contentCSS.fonts);
            innerFontCSS = Object.assign(innerFontCSS, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, elementType, secondaryFont));
            contentCSS.fonts = innerFontCSS;
            break;
        }
      });
      updateState('isAddingCustom', true);
      updateState('contentCSS', contentCSS);
      saveMeta(contentCSS);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          onToggle = _this$props2.onToggle,
          selectedItem = _this$props2.selectedItem,
          itemType = _this$props2.itemType,
          contentCSS = _this$props2.contentCSS,
          updateState = _this$props2.updateState,
          settingsPanel = _this$props2.settingsPanel,
          currentMetaId = _this$props2.currentMetaId,
          setVariables = _this$props2.setVariables;
      var controls = [{
        title: __('Duplicate', 'editorskit-typography-addon'),
        icon: 'admin-page',
        onClick: function onClick() {
          setVariables(selectedItem);
          var newKey = new Date().valueOf();
          updateState('customKey', newKey);

          if ('default' === itemType) {
            _this2.duplicateFont();
          } else {
            var newContentCSS = Object.assign({}, contentCSS);
            newContentCSS = Object.assign(newContentCSS, {
              name: contentCSS.name + __(' Duplicate', 'editorskit-typography-addon')
            });
            updateState('isAddingCustom', true);
            updateState('contentCSS', newContentCSS);
          }
        }
      }];

      if (itemType === 'custom' && parseInt(selectedItem) === parseInt(currentMetaId)) {
        controls.push({
          title: __('Edit', 'editorskit-typography-addon'),
          icon: 'edit',
          onClick: function onClick() {
            onToggle(selectedItem);
          }
        });
      }

      if (settingsPanel) {
        controls = [currentMetaId === selectedItem ? {
          title: __('Remove as Default', 'editorskit-typography-addon'),
          icon: 'admin-page',
          onClick: function onClick() {
            updateState('isRemovingDefault', true);
            updateState('itemSelected', selectedItem);
          }
        } : {
          title: __('Set as Default', 'editorskit-typography-addon'),
          icon: 'admin-page',
          onClick: function onClick() {
            updateState('isSettingDefault', true);
            updateState('itemSelected', selectedItem);
          }
        }];

        if (itemType === 'custom') {
          controls.push({
            title: __('Delete', 'editorskit-typography-addon'),
            icon: 'trash',
            onClick: function onClick() {
              updateState('isDeleting', true);
              updateState('itemSelected', selectedItem);
            }
          });
        }
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(DropdownMenu, {
        icon: "admin-generic",
        label: __('More Options', 'editorskit-typography-addon'),
        controls: controls
      });
    }
  }]);

  return TypographyDropdownMenu;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSpokenMessages(TypographyDropdownMenu));

/***/ }),

/***/ "./src/add-ons/typography/src/components/font-selection/heading-level-icon.js":
/*!************************************************************************************!*\
  !*** ./src/add-ons/typography/src/components/font-selection/heading-level-icon.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeadingLevelIcon; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
function HeadingLevelIcon(_ref) {
  var level = _ref.level,
      __unstableActive = _ref.__unstableActive;
  var levelToPath = {
    1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
    2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
    3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
    4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
    5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
    6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z'
  };

  if (!levelToPath.hasOwnProperty(level)) {
    // eslint-disable-line no-prototype-builtins
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __unstableActive: __unstableActive
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
    d: levelToPath[level]
  }));
}

/***/ }),

/***/ "./src/add-ons/typography/src/components/font-selection/index.js":
/*!***********************************************************************!*\
  !*** ./src/add-ons/typography/src/components/font-selection/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_unit_control__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/unit-control */ "./src/add-ons/typography/src/components/unit-control/index.js");
/* harmony import */ var _defaults_fonts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../defaults/fonts */ "./src/add-ons/typography/src/defaults/fonts.json");
var _defaults_fonts__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../defaults/fonts */ "./src/add-ons/typography/src/defaults/fonts.json", 1);
/* harmony import */ var _defaults_google_fonts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../defaults/google-fonts */ "./src/add-ons/typography/src/defaults/google-fonts.json");
var _defaults_google_fonts__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../defaults/google-fonts */ "./src/add-ons/typography/src/defaults/google-fonts.json", 1);
/* harmony import */ var _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dropdown-menu */ "./src/add-ons/typography/src/components/font-selection/components/dropdown-menu.js");
/* harmony import */ var _heading_level_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./heading-level-icon */ "./src/add-ons/typography/src/components/font-selection/heading-level-icon.js");












/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






/**
 * WordPress dependencies
 */

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$components = wp.components,
    withSpokenMessages = _wp$components.withSpokenMessages,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    TabPanel = _wp$components.TabPanel,
    CheckboxControl = _wp$components.CheckboxControl,
    Modal = _wp$components.Modal;
/**
 * Get settings.
 */

var settings;
wp.api.loadPromise.then(function () {
  settings = new wp.api.models.Settings();
});
var defaultUnits = {
  'font-size-unit': 'px',
  'line-height-unit': 'px',
  'letter-spacing-unit': 'px'
};
var stylesElement = document.getElementById('editorskit-typography-inline-css');
var googleLink = 'https://fonts.googleapis.com/css?family=';
var link = document.createElement('link');
link.rel = 'stylesheet';
/**
 * Block edit function
 */

var TypographySelection =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(TypographySelection, _Component);

  function TypographySelection() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, TypographySelection);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(TypographySelection).apply(this, arguments));
    _this.onToggle = _this.onToggle.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this));
    _this.onDelete = _this.onDelete.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this));
    _this.onSetDefault = _this.onSetDefault.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this));
    _this.createMeta = _this.createMeta.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this));
    _this.createCSS = _this.createCSS.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this));
    _this.setVariables = _this.setVariables.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this));
    _this.saveMeta = _this.saveMeta.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this));
    _this.updateState = _this.updateState.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this));
    _this.getValue = _this.getValue.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this));
    _this.state = {
      isAddingCustom: false,
      isActiveFont: '',
      contentCSS: {
        content: defaultUnits,
        heading: {
          H1: defaultUnits,
          H2: defaultUnits,
          H3: defaultUnits,
          H4: defaultUnits,
          H5: defaultUnits,
          H6: defaultUnits
        },
        button: defaultUnits,
        fonts: {}
      },
      optionsSaved: false,
      optionsFetched: false,
      optionsData: {},
      defaultTypography: {},
      customKey: '',
      showOptionsOn: '',
      searchKeyword: '',
      isDeleting: false,
      itemSelected: '',
      isDeleted: '',
      isSettingDefault: false,
      isRemovingDefault: false,
      applyToAll: false
    };
    settings.fetch().then(function (response) {
      if (response.editorskit_typography_custom) {
        _this.setState({
          optionsData: JSON.parse(response.editorskit_typography_custom),
          defaultTypography: JSON.parse(response.editorskit_typography_default)
        });
      }

      _this.setState({
        optionsFetched: true
      });
    });
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(TypographySelection, [{
    key: "onToggle",
    value: function onToggle(selectedItem) {
      var optionsData = this.state.optionsData;

      if (typeof optionsData[selectedItem] !== 'undefined') {
        this.setVariables(selectedItem);
        this.createCSS(optionsData[selectedItem], selectedItem);
        this.setState({
          contentCSS: optionsData[selectedItem],
          customKey: selectedItem,
          isAddingCustom: true
        });
      }
    }
  }, {
    key: "setVariables",
    value: function setVariables(id) {
      var settingsPanel = this.props.settingsPanel;
      var _this$state = this.state,
          optionsData = _this$state.optionsData,
          customKey = _this$state.customKey,
          contentCSS = _this$state.contentCSS;
      var fontData = {};
      var variables = '';
      var isCustom = false;

      if (settingsPanel) {
        return;
      }

      if (typeof id === 'undefined') {
        id = customKey;
      }

      if (typeof _defaults_fonts__WEBPACK_IMPORTED_MODULE_14__[id] !== 'undefined') {
        fontData = _defaults_fonts__WEBPACK_IMPORTED_MODULE_14__[id];
      } else if (typeof optionsData[id] !== 'undefined') {
        fontData = optionsData[id];
        isCustom = true;
      }

      if (fontData) {
        document.body.classList.add('ek-has-typography');
      } //reset classes


      document.body.classList.remove('ek-has-content-font-family');
      document.body.classList.remove('ek-has-body-font-family');
      document.body.classList.remove('ek-has-content-font-weight');
      document.body.classList.remove('ek-has-content-font-size');
      document.body.classList.remove('ek-has-content-line-height');
      document.body.classList.remove('ek-has-content-letter-spacing');
      document.body.classList.remove('ek-has-header-font-family');
      document.body.classList.remove('ek-has-button-font-family');
      document.body.classList.remove('ek-has-button-font-weight');
      document.body.classList.remove('ek-has-button-text-transform');

      var wrapFontFamily = function wrapFontFamily(family) {
        if (isCustom) {
          return "'" + family + "'";
        }

        return family;
      };

      if (typeof fontData.content !== 'undefined') {
        var content = fontData.content;

        if (content['font-family']) {
          variables += '--ek-font-family:' + wrapFontFamily(content['font-family']) + ';';
          document.body.classList.add('ek-has-content-font-family');
        }

        if (content.body) {
          document.body.classList.add('ek-has-body-font-family');
        }

        if (content['font-weight']) {
          variables += '--ek-font-weight:' + content['font-weight'] + ';';
          document.body.classList.add('ek-has-content-font-weight');
        }

        if (content['font-size']) {
          variables += '--ek-font-size:' + content['font-size'] + content['font-size-unit'] + ';';
          document.body.classList.add('ek-has-content-font-size');
        }

        if (content['line-height']) {
          variables += '--ek-line-height:' + content['line-height'] + content['line-height-unit'] + ';';
          document.body.classList.add('ek-has-content-line-height');
        }

        if (content['letter-spacing']) {
          variables += '--ek-letter-spacing:' + content['letter-spacing'] + content['letter-spacing-unit'] + ';';
          document.body.classList.add('ek-has-content-letter-spacing');
        }
      }

      if (typeof fontData.heading !== 'undefined') {
        var heading = fontData.heading;

        if (heading['font-family']) {
          variables += '--ek-heading-font-family:' + wrapFontFamily(heading['font-family']) + ';';
          document.body.classList.add('ek-has-header-font-family');
        }

        if (heading['font-weight']) {
          variables += '--ek-heading-font-weight:' + heading['font-weight'] + ';';
        }
      }

      Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(contentCSS.heading, function (headingData, headingType) {
        document.body.classList.remove('ek-has-' + headingType + '-font-size');
        document.body.classList.remove('ek-has-' + headingType + '-line-height');
        document.body.classList.remove('ek-has-' + headingType + '-letter-spacing');
        document.body.classList.remove('ek-apply-' + headingType + '-to-title');

        if (typeof fontData.heading !== 'undefined' && typeof fontData.heading[headingType] !== 'undefined') {
          var innerHeading = fontData.heading[headingType];

          if (innerHeading['font-weight']) {
            variables += '--ek-' + headingType + '-font-weight:' + innerHeading['font-weight'] + ';';
            document.body.classList.add('ek-has-' + headingType + '-font-weight');
          }

          if (innerHeading['font-size']) {
            variables += '--ek-' + headingType + '-font-size:' + innerHeading['font-size'] + innerHeading['font-size-unit'] + ';';
            document.body.classList.add('ek-has-' + headingType + '-font-size');
          }

          if (innerHeading['line-height']) {
            variables += '--ek-' + headingType + '-line-height:' + innerHeading['line-height'] + innerHeading['line-height-unit'] + ';';
            document.body.classList.add('ek-has-' + headingType + '-line-height');
          }

          if (innerHeading['letter-spacing']) {
            variables += '--ek-' + headingType + '-letter-spacing:' + innerHeading['letter-spacing'] + innerHeading['letter-spacing-unit'] + ';';
            document.body.classList.add('ek-has-' + headingType + '-letter-spacing');
          }

          if (innerHeading['text-transform']) {
            variables += '--ek-' + headingType + '-text-transform:' + innerHeading['text-transform'] + ';';
            document.body.classList.add('ek-has-' + headingType + '-text-transform');
          }

          if (innerHeading.title) {
            document.body.classList.add('ek-apply-' + headingType + '-to-title');
          }
        }
      });

      if (typeof fontData.button !== 'undefined') {
        var button = fontData.button;

        if (button['font-family']) {
          variables += '--ek-button-font-family:' + wrapFontFamily(button['font-family']) + ';';
          document.body.classList.add('ek-has-button-font-family');
        }

        if (button['font-weight']) {
          variables += '--ek-button-font-weight:' + button['font-weight'] + ';';
          document.body.classList.add('ek-has-button-font-weight');
        }

        if (button['font-size']) {
          variables += '--ek-button-font-size:' + button['font-size'] + button['font-size-unit'] + ';';
          document.body.classList.add('ek-has-button-font-size');
        }

        if (button['line-height']) {
          variables += '--ek-button-line-height:' + button['line-height'] + button['line-height-unit'] + ';';
          document.body.classList.add('ek-has-button-line-height');
        }

        if (button['letter-spacing']) {
          variables += '--ek-button-letter-spacing:' + button['letter-spacing'] + button['letter-spacing-unit'] + ';';
          document.body.classList.add('ek-has-button-letter-spacing');
        }

        if (button['text-transform']) {
          variables += '--ek-button-text-transform:' + button['text-transform'] + ';';
          document.body.classList.add('ek-has-button-text-transform');
        }
      }

      stylesElement.innerHTML = 'body{' + variables + '}';
    }
  }, {
    key: "createCSS",
    value: function createCSS(savedOption) {
      var settingsPanel = this.props.settingsPanel;
      var contentCSS = this.state.contentCSS;

      if (settingsPanel) {
        return;
      }

      if (savedOption) {
        contentCSS = savedOption;
      } //add fonts


      var googleFontData = googleLink;

      if (contentCSS.fonts) {
        Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(contentCSS.fonts, function (fontProp) {
          if (fontProp) {
            googleFontData += fontProp.name.replace(' ', '+') + ':' + fontProp.weights + '|';
          }
        });
      }

      if (googleFontData !== googleLink) {
        link.href = googleFontData.slice(0, -1);
      }

      document.head.appendChild(link);
    }
  }, {
    key: "createMeta",
    value: function createMeta(syntax, value, category, level) {
      var contentCSS = this.state.contentCSS;

      if (level) {
        var headingLevel = Object.assign({}, contentCSS[category][level]);
        headingLevel = Object.assign(headingLevel, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, syntax, value));
        contentCSS[category][level] = headingLevel;
      } else if (!category) {
        contentCSS = Object.assign(contentCSS, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, syntax, value));
      } else {
        var categoryLevel = Object.assign({}, contentCSS[category]);
        categoryLevel = Object.assign(categoryLevel, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, syntax, value));
        contentCSS[category] = categoryLevel;
      } // Add Google Font data on selected Font Family


      if ('font-family' === syntax) {
        contentCSS.fonts[category] = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["find"])(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_15__.fonts, ['name', value]);
      }

      this.setVariables();
      this.setState({
        contentCSS: contentCSS
      });
      this.saveMeta(contentCSS);
    }
  }, {
    key: "updateState",
    value: function updateState(key, value) {
      this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, key, value));
    }
  }, {
    key: "saveMeta",
    value: function saveMeta(contentCSS) {
      var _this2 = this;

      var onFontSelection = this.props.onFontSelection;
      var _this$state2 = this.state,
          optionsData = _this$state2.optionsData,
          customKey = _this$state2.customKey;

      if (!customKey || customKey === '') {
        customKey = new Date().valueOf();
        this.setState({
          customKey: customKey
        });
      }

      optionsData = Object.assign(optionsData, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, customKey, contentCSS)); //load fonts

      this.createCSS(contentCSS, customKey); //save meta

      onFontSelection(contentCSS, customKey);
      var model = new wp.api.models.Settings({
        editorskit_typography_custom: JSON.stringify(optionsData)
      });
      model.save().then(function () {
        _this2.setState({
          optionsSaved: true,
          optionsData: optionsData,
          customKey: customKey
        });

        settings.fetch();
      });
    }
  }, {
    key: "getValue",
    value: function getValue(category, key, level) {
      var contentCSS = this.state.contentCSS;

      if (level) {
        if (typeof contentCSS[category] !== 'undefined' && typeof contentCSS[category][level] !== 'undefined' && typeof contentCSS[category][level][key] !== 'undefined') {
          return contentCSS[category][level][key];
        }
      } else if (typeof contentCSS[category] !== 'undefined' && typeof contentCSS[category][key] !== 'undefined') {
        return contentCSS[category][key];
      }

      return '';
    }
  }, {
    key: "onDelete",
    value: function onDelete() {
      var _this3 = this;

      var noticeMessage = this.props.noticeMessage;
      var _this$state3 = this.state,
          itemSelected = _this$state3.itemSelected,
          optionsData = _this$state3.optionsData;
      delete optionsData[itemSelected];
      var model = new wp.api.models.Settings({
        editorskit_typography_custom: JSON.stringify(optionsData)
      });
      model.save().then(function () {
        _this3.setState({
          isDeleting: false,
          optionsData: optionsData
        });

        settings.fetch();
      });
      noticeMessage(__('Item successfully deleted.', 'editorskit-typography-addon'));
    }
  }, {
    key: "onSetDefault",
    value: function onSetDefault() {
      var _this4 = this;

      var isRemoving = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var noticeMessage = this.props.noticeMessage;
      var _this$state4 = this.state,
          optionsData = _this$state4.optionsData,
          itemSelected = _this$state4.itemSelected,
          applyToAll = _this$state4.applyToAll;
      var meta = {};

      if (typeof optionsData[itemSelected] !== 'undefined') {
        meta = optionsData[itemSelected];
      } else if (typeof _defaults_fonts__WEBPACK_IMPORTED_MODULE_14__[itemSelected] !== 'undefined') {
        meta = _defaults_fonts__WEBPACK_IMPORTED_MODULE_14__[itemSelected];
      }

      var defaultTypography = {
        itemSelected: itemSelected,
        applyToAll: applyToAll,
        meta: meta
      };

      if (isRemoving) {
        defaultTypography = {};
      }

      var model = new wp.api.models.Settings({
        editorskit_typography_default: JSON.stringify(defaultTypography)
      });
      model.save().then(function () {
        _this4.setState({
          isSettingDefault: false,
          isRemovingDefault: false,
          defaultTypography: defaultTypography
        });

        settings.fetch();
      });
      noticeMessage(__('Default Typography Successfully Set.', 'editorskit-typography-addon'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props = this.props,
          onFontSelection = _this$props.onFontSelection,
          removeFontSelection = _this$props.removeFontSelection,
          postmeta = _this$props.postmeta,
          settingsPanel = _this$props.settingsPanel;
      var currentMetaId = '';

      if (!this.state.optionsFetched) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("p", {
          className: "ek-fetching-typography"
        }, __('Fetching Typography Data.....', 'editorskit-typography-addon')));
      }

      if (typeof postmeta !== 'undefined') {
        var _editorskit_typography_data = postmeta._editorskit_typography_data; // eslint-disable-line camelcase

        if (typeof _editorskit_typography_data.meta !== 'undefined' && typeof _editorskit_typography_data.meta.id !== 'undefined') {
          currentMetaId = _editorskit_typography_data.meta.id;
        }
      }

      var _this$state5 = this.state,
          isAddingCustom = _this$state5.isAddingCustom,
          contentCSS = _this$state5.contentCSS,
          optionsData = _this$state5.optionsData,
          customKey = _this$state5.customKey,
          searchKeyword = _this$state5.searchKeyword,
          isDeleting = _this$state5.isDeleting,
          isSettingDefault = _this$state5.isSettingDefault,
          isRemovingDefault = _this$state5.isRemovingDefault,
          defaultTypography = _this$state5.defaultTypography;

      var selectOptions = function selectOptions() {
        return [{
          label: __('Select Google Font', 'editorskit-typography-addon'),
          value: ''
        }, {
          label: __('Arial', 'editorskit-typography-addon'),
          value: 'Arial'
        }, {
          label: __('Helvetica', 'editorskit-typography-addon'),
          value: 'Helvetica'
        }, {
          label: __('Times New Roman', 'editorskit-typography-addon'),
          value: 'Times New Roman'
        }, {
          label: __('Georgia', 'editorskit-typography-addon'),
          value: 'Georgia'
        }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_15__.fonts.map(function (_ref) {
          var name = _ref.name;
          return {
            label: name,
            value: name
          };
        })));
      };

      if (!currentMetaId && !customKey && typeof defaultTypography !== 'undefined' && defaultTypography && typeof defaultTypography.itemSelected !== 'undefined') {
        currentMetaId = defaultTypography.itemSelected;
      }

      var transformOptions = function transformOptions() {
        return [{
          label: __('Select Text Transform', 'editorskit-typography-addon'),
          value: ''
        }, {
          label: __('None', 'editorskit-typography-addon'),
          value: 'none'
        }, {
          label: __('Capitalize', 'editorskit-typography-addon'),
          value: 'capitalize'
        }, {
          label: __('Uppercase', 'editorskit-typography-addon'),
          value: 'uppercase'
        }, {
          label: __('Lowercase', 'editorskit-typography-addon'),
          value: 'lowercase'
        }, {
          label: __('Initial', 'editorskit-typography-addon'),
          value: 'initial'
        }, {
          label: __('Inherit', 'editorskit-typography-addon'),
          value: 'inherit'
        }];
      };

      var fontWeightOptions = function fontWeightOptions(fontName) {
        var googleFontWeights = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["find"])(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_15__.fonts, ['name', fontName]);
        var fontWeights = [{
          label: __('Select Font Weight', 'editorskit-typography-addon'),
          value: ''
        }];

        if (typeof googleFontWeights !== 'undefined' && typeof googleFontWeights.weights !== 'undefined') {
          Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(googleFontWeights.weights.split(','), function (weight) {
            if (weight && !weight.includes('i')) {
              fontWeights.push({
                label: weight,
                value: parseInt(weight)
              });
            }
          });
        }

        return fontWeights;
      };

      if (!isAddingCustom) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Fragment, null, !settingsPanel ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Button, {
          isPrimary: true,
          isLarge: true,
          className: "editorskit-typography--custom-button",
          onClick: function onClick() {
            _this5.setState({
              isAddingCustom: true,
              customKey: '',
              contentCSS: {
                content: defaultUnits,
                heading: {
                  H1: defaultUnits,
                  H2: defaultUnits,
                  H3: defaultUnits,
                  H4: defaultUnits,
                  H5: defaultUnits,
                  H6: defaultUnits
                },
                button: defaultUnits,
                fonts: {}
              }
            });
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("span", null, __('Create Custom Combination', 'editorskit-typography-addon'))) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(TextControl, {
          className: "editorskit-typography-search",
          placeholder: __('Search', 'editorskit-typography-addon'),
          onChange: function onChange(keyword) {
            _this5.setState({
              searchKeyword: keyword.toLowerCase()
            });
          }
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("div", {
          className: "editorskit-typography-selection"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("ul", {
          className: "editorskit-typography--items"
        }, _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(optionsData) !== undefined && optionsData ? Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(optionsData, function (fontCustom, id) {
          if (searchKeyword && (fontCustom.name.toLowerCase().includes(searchKeyword) || typeof fontCustom.heading['font-family'] !== 'undefined' && fontCustom.heading['font-family'].toLowerCase().includes(searchKeyword) || typeof fontCustom.content['font-family'] !== 'undefined' && fontCustom.content['font-family'].toLowerCase().includes(searchKeyword) || typeof fontCustom.button['font-family'] !== 'undefined' && fontCustom.button['font-family'].toLowerCase().includes(searchKeyword))) {//do nothing
          } else if (searchKeyword) {
            return false;
          }

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("li", {
            className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('editorskit-typography--item', 'editorskit-typography--item__custom', parseInt(id) === parseInt(currentMetaId) || !currentMetaId && customKey === id ? 'editorskit-typography--item__current' : null)
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Button, {
            onClick: function onClick() {
              if (id === currentMetaId || !currentMetaId && customKey === id) {
                removeFontSelection();

                _this5.updateState('customKey', '');
              } else {
                _this5.setVariables(id);

                _this5.createCSS(fontCustom, id);

                onFontSelection(fontCustom, id);
              }
            }
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("span", null, fontCustom.name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("span", {
            className: "editorskit-typography--item__custom-fonts"
          }, Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(fontCustom, function (fontCustomData) {
            if (typeof fontCustomData['font-family'] !== 'undefined') {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("span", null, fontCustomData['font-family']);
            }
          }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_16__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this5.props, {
            itemType: "custom",
            selectedItem: id,
            onDelete: _this5.onDelete,
            onToggle: _this5.onToggle,
            Fonts: _defaults_fonts__WEBPACK_IMPORTED_MODULE_14__,
            GoogleFonts: _defaults_google_fonts__WEBPACK_IMPORTED_MODULE_15__,
            updateState: _this5.updateState,
            contentCSS: fontCustom,
            setVariables: _this5.setVariables,
            currentMetaId: currentMetaId,
            saveMeta: _this5.saveMeta
          })));
        }) : '', Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(_defaults_fonts__WEBPACK_IMPORTED_MODULE_14__, function (font, i) {
          if (searchKeyword && !font.name.toLowerCase().includes(searchKeyword)) {
            return false;
          }

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("li", {
            className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('editorskit-typography--item', 'editorskit-typography--item__default', 'editorskit-typography--item-' + i, i === currentMetaId ? 'editorskit-typography--item__current' : null)
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Button, {
            onClick: function onClick() {
              if (settingsPanel) {
                return;
              }

              if (i === currentMetaId) {
                removeFontSelection();
              } else {
                var googleFont = googleLink + font.fonts.join('|'); // Set CSS variables

                _this5.setVariables(i);

                link.href = googleFont;
                document.head.appendChild(link); //save meta

                onFontSelection(font, i);
              }
            }
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("span", null, font.name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("img", {
            src: window.editorskitInfo.plugin.url + '/build/images/combinations/' + font.name + '.png',
            alt: font.name
          })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_16__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this5.props, {
            itemType: "default",
            selectedItem: i,
            onToggle: _this5.onToggle,
            Fonts: _defaults_fonts__WEBPACK_IMPORTED_MODULE_14__,
            GoogleFonts: _defaults_google_fonts__WEBPACK_IMPORTED_MODULE_15__,
            updateState: _this5.updateState,
            setVariables: _this5.setVariables,
            currentMetaId: currentMetaId,
            saveMeta: _this5.saveMeta
          })));
        }))), isDeleting && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Modal, {
          className: "editorskit-delete-typography-modal",
          title: __('Delete Confirmation', 'editorskit-typography-addon'),
          onRequestClose: function onRequestClose() {
            _this5.updateState('isDeleting', false);
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("p", null, __('Are you sure you want to delete this item?', 'editorskit-typography-addon')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Button, {
          isLarge: true,
          isDestructive: true,
          onClick: this.onDelete
        }, __('Yes, Delete', 'editorskit-typography-addon')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Button, {
          isDefault: true,
          onClick: function onClick() {
            _this5.updateState('isDeleting', false);
          }
        }, __('No, Cancel', 'editorskit-typography-addon'))), isSettingDefault && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Modal, {
          className: "editorskit-default-typography-modal",
          title: __('Set as Default Fonts', 'editorskit-typography-addon'),
          onRequestClose: function onRequestClose() {
            _this5.updateState('isSettingDefault', false);
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("p", null, __('Setting default typography will save you time when creating new posts or pages.', 'editorskit-typography-addon')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("p", {
          className: "editorskit-notice-box"
        }, __('Take note that this option will apply your selected default typography to old posts, post types and pages on your website without the need for you to edit them on the Gutenberg editor manually.', 'editorskit-typography-addon')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Button, {
          isLarge: true,
          isPrimary: true,
          onClick: function onClick() {
            _this5.onSetDefault();
          }
        }, __('Yes, Set as Default', 'editorskit-typography-addon')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Button, {
          isDefault: true,
          onClick: function onClick() {
            _this5.updateState('isSettingDefault', false);
          }
        }, __('No, Cancel', 'editorskit-typography-addon'))), isRemovingDefault && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Modal, {
          className: "editorskit-default-typography-modal",
          title: __('Remove Default Fonts', 'editorskit-typography-addon'),
          onRequestClose: function onRequestClose() {
            _this5.updateState('isRemovingDefault', false);
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("p", null, __('Are you sure you want to remove this item as default typography?', 'editorskit-typography-addon')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Button, {
          isLarge: true,
          isPrimary: true,
          onClick: function onClick() {
            _this5.onSetDefault(true);
          }
        }, __('Yes, Set Remove Default', 'editorskit-typography-addon')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Button, {
          isDefault: true,
          onClick: function onClick() {
            _this5.updateState('isRemovingDefault', false);
          }
        }, __('No, Cancel', 'editorskit-typography-addon'))));
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("div", {
        className: "editorskit-typography-custom"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Button, {
        isDefault: true,
        className: "editorskit-typography-back-btn",
        onClick: function onClick() {
          _this5.setState({
            isAddingCustom: false,
            searchKeyword: '',
            customKey: ''
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])("span", null, "\u2039 ", __('Back', 'editorskit-typography-addon'), " ")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(TextControl, {
        className: "editorskit-typography-custom--name",
        label: __('Name', 'editorskit-typography-addon'),
        value: typeof contentCSS.name !== 'undefined' ? contentCSS.name : customKey,
        onChange: function onChange(newName) {
          _this5.createMeta('name', newName);
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(TextControl, {
        className: "editorskit-typography-custom--key",
        type: "hidden" // value={typeof contentCSS['key'] !== 'undefined' ? contentCSS['font-selected'] : ''}

      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(PanelBody, {
        title: __('Content Typography', 'editorskit-typography-addon'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(SelectControl, {
        label: __('Google Fonts', 'editorskit-typography-addon'),
        options: selectOptions(),
        value: this.getValue('content', 'font-family'),
        onChange: function onChange(selectedValue) {
          _this5.createMeta('font-family', selectedValue, 'content');
        }
      }), fontWeightOptions(this.getValue('content', 'font-family')) && fontWeightOptions(this.getValue('content', 'font-family')).length > 1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(SelectControl, {
        label: __('Font Weight', 'editorskit-typography-addon'),
        options: fontWeightOptions(this.getValue('content', 'font-family')),
        value: this.getValue('content', 'font-weight'),
        onChange: function onChange(selectedWeight) {
          _this5.createMeta('font-weight', parseInt(selectedWeight), 'content');
        }
      }) : '', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_components_unit_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: __('Font Size', 'editorskit-typography-addon'),
        elementType: "content",
        syntax: "font-size",
        createMeta: this.createMeta,
        value: this.getValue('content', 'font-size'),
        unit: this.getValue('content', 'font-size-unit')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_components_unit_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: __('Line Height', 'editorskit-typography-addon'),
        elementType: "content",
        syntax: "line-height",
        createMeta: this.createMeta,
        value: this.getValue('content', 'line-height'),
        unit: this.getValue('content', 'line-height-unit')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_components_unit_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: __('Letter Spacing', 'editorskit-typography-addon'),
        elementType: "content",
        syntax: "letter-spacing",
        createMeta: this.createMeta,
        value: this.getValue('content', 'letter-spacing'),
        unit: this.getValue('content', 'letter-spacing-unit')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(CheckboxControl, {
        label: __('Apply Font Family to whole page', 'editorskit-typography-addon'),
        checked: this.getValue('content', 'body') ? true : false,
        help: __('Check this option to apply the selected font family to <body> instead of just content.', 'editorskit-typography-addon'),
        onChange: function onChange(selectedTransform) {
          _this5.createMeta('body', selectedTransform, 'content');
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(PanelBody, {
        title: __('Heading Typography', 'editorskit-typography-addon'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(SelectControl, {
        label: __('Google Fonts', 'editorskit-typography-addon'),
        options: selectOptions(),
        value: this.getValue('heading', 'font-family'),
        onChange: function onChange(selectedValue) {
          _this5.createMeta('font-family', selectedValue, 'heading');
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(TabPanel, {
        className: "editorskit-typography-tab-panel",
        activeClass: "active-tab" // onSelect={onSelect}
        ,
        tabs: [{
          name: 'editorskit-typography-h1',
          title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
            level: 1
          }),
          className: 'editorskit-typography-h1',
          level: 'H1'
        }, {
          name: 'editorskit-typography-h2',
          title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
            level: 2
          }),
          className: 'editorskit-typography-h2',
          level: 'H2'
        }, {
          name: 'editorskit-typography-h3',
          title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
            level: 3
          }),
          className: 'editorskit-typography-h3',
          level: 'H3'
        }, {
          name: 'editorskit-typography-h4',
          title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
            level: 4
          }),
          className: 'editorskit-typography-h4',
          level: 'H4'
        }, {
          name: 'editorskit-typography-h5',
          title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
            level: 5
          }),
          className: 'editorskit-typography-h5',
          level: 'H5'
        }, {
          name: 'editorskit-typography-h6',
          title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
            level: 6
          }),
          className: 'editorskit-typography-h6',
          level: 'H6'
        }]
      }, function (tab) {
        var headingFontName = _this5.getValue('heading', 'font-family');

        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(Fragment, null, fontWeightOptions(headingFontName) && fontWeightOptions(headingFontName).length > 1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(SelectControl, {
          label: sprintf(__('Font Weight (%s)', 'editorskit-typography-addon'), tab.level),
          options: fontWeightOptions(headingFontName),
          value: _this5.getValue('heading', 'font-weight', tab.level),
          onChange: function onChange(selectedTransform) {
            _this5.createMeta('font-weight', parseInt(selectedTransform), 'heading', tab.level);
          }
        }) : '', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_components_unit_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
          label: sprintf(__('Font Size (%s)', 'editorskit-typography-addon'), tab.level),
          syntax: "font-size",
          createMeta: _this5.createMeta,
          value: _this5.getValue('heading', 'font-size', tab.level),
          unit: _this5.getValue('heading', 'font-size-unit', tab.level),
          elementType: "heading",
          level: tab.level
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_components_unit_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
          label: sprintf(__('Line Height (%s)', 'editorskit-typography-addon'), tab.level),
          syntax: "line-height",
          createMeta: _this5.createMeta,
          value: _this5.getValue('heading', 'line-height', tab.level),
          unit: _this5.getValue('heading', 'line-height-unit', tab.level),
          elementType: "heading",
          level: tab.level
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_components_unit_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
          label: sprintf(__('Letter Spacing (%s)', 'editorskit-typography-addon'), tab.level),
          syntax: "letter-spacing",
          createMeta: _this5.createMeta,
          value: _this5.getValue('heading', 'letter-spacing', tab.level),
          unit: _this5.getValue('heading', 'letter-spacing-unit', tab.level),
          elementType: "heading",
          level: tab.level
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(SelectControl, {
          label: sprintf(__('Text Transform (%s)', 'editorskit-typography-addon'), tab.level),
          options: transformOptions(),
          value: _this5.getValue('heading', 'text-transform', tab.level),
          onChange: function onChange(selectedTransform) {
            _this5.createMeta('text-transform', selectedTransform, 'heading', tab.level);
          }
        }), tab.level === 'H1' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(CheckboxControl, {
          label: __('Apply to Title', 'editorskit-typography-addon'),
          checked: _this5.getValue('heading', 'title', tab.level) ? true : false,
          onChange: function onChange(selectedTransform) {
            _this5.createMeta('title', selectedTransform, 'heading', tab.level);
          }
        }) : null);
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(PanelBody, {
        title: __('Buttons Typography', 'editorskit-typography-addon'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(SelectControl, {
        label: __('Google Fonts', 'editorskit-typography-addon'),
        options: selectOptions(),
        value: this.getValue('button', 'font-family'),
        onChange: function onChange(selectedValue) {
          _this5.createMeta('font-family', selectedValue, 'button');
        }
      }), fontWeightOptions(this.getValue('button', 'font-family')) && fontWeightOptions(this.getValue('button', 'font-family')).length > 1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(SelectControl, {
        label: __('Font Weight', 'editorskit-typography-addon'),
        options: fontWeightOptions(this.getValue('button', 'font-family')),
        value: this.getValue('button', 'font-weight'),
        onChange: function onChange(selectedWeight) {
          _this5.createMeta('font-weight', parseInt(selectedWeight), 'button');
        }
      }) : '', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_components_unit_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: __('Font Size', 'editorskit-typography-addon'),
        syntax: "font-size",
        createMeta: this.createMeta,
        value: this.getValue('button', 'font-size'),
        unit: this.getValue('button', 'font-size-unit'),
        elementType: "button"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_components_unit_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: __('Line Height', 'editorskit-typography-addon'),
        syntax: "line-height",
        createMeta: this.createMeta,
        value: this.getValue('button', 'line-height'),
        unit: this.getValue('button', 'line-height-unit'),
        elementType: "button"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(_components_unit_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: __('Letter Spacing', 'editorskit-typography-addon'),
        syntax: "letter-spacing",
        createMeta: this.createMeta,
        value: this.getValue('button', 'letter-spacing'),
        unit: this.getValue('button', 'letter-spacing-unit'),
        elementType: "button"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__["createElement"])(SelectControl, {
        label: __('Text Transform', 'editorskit-typography-addon'),
        options: transformOptions(),
        value: this.getValue('button', 'text-transform'),
        onChange: function onChange(selectedTransform) {
          _this5.createMeta('text-transform', selectedTransform, 'button');
        }
      }))));
    }
  }]);

  return TypographySelection;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select) {
  return {
    postmeta: select('core/editor').getEditedPostAttribute('meta')
  };
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    onFontSelection: function onFontSelection(fontData, key) {
      dispatch('core/editor').editPost({
        meta: {
          _editorskit_typography_data: key ? {
            meta: {
              id: key,
              data: fontData
            }
          } : {
            meta: fontData
          }
        }
      });
    },
    removeFontSelection: function removeFontSelection() {
      dispatch('core/editor').editPost({
        meta: {
          _editorskit_typography_data: {
            meta: {
              disabled: true
            }
          }
        }
      });
      document.body.classList.remove('ek-has-typography');
    },
    noticeMessage: function noticeMessage(message) {
      createNotice('info', message, {
        isDismissible: true,
        type: 'snackbar'
      });
    }
  };
}), withSpokenMessages])(TypographySelection));

/***/ }),

/***/ "./src/add-ons/typography/src/components/unit-control/index.js":
/*!*********************************************************************!*\
  !*** ./src/add-ons/typography/src/components/unit-control/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$components = wp.components,
    Tooltip = _wp$components.Tooltip,
    ButtonGroup = _wp$components.ButtonGroup,
    withSpokenMessages = _wp$components.withSpokenMessages,
    Button = _wp$components.Button;

var UnitControl =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(UnitControl, _Component);

  function UnitControl() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UnitControl);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(UnitControl).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UnitControl, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          createMeta = _this$props.createMeta,
          syntax = _this$props.syntax,
          unit = _this$props.unit,
          value = _this$props.value,
          elementType = _this$props.elementType,
          level = _this$props.level;
      var unitSizes = [{
        /* translators: a unit of size (px) for css markup */
        name: __('Pixel', 'editorskit-typography-addon'),
        unitValue: 'px'
      }, {
        /* translators: a unit of size (em) for css markup */
        name: __('Em', 'editorskit-typography-addon'),
        unitValue: 'em'
      }, {
        /* translators: a unit of size (rem) for css markup */
        name: __('Rem', 'editorskit-typography-addon'),
        unitValue: 'rem'
      }];
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "components-editorskit-typography-unit-control"
      }, label && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", {
        className: 'components-editorskit-typography-unit-control__label'
      }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "components-editorskit-typography-unit-control__fields"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        className: "components-editorskit-typography-unit-control__number",
        type: "number",
        onChange: function onChange(event) {
          createMeta(syntax, event.target.value, elementType, level);
        },
        value: value
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ButtonGroup, {
        className: "components-editorskit-typography-unit-control__units",
        "aria-label": __('Select Units', 'editorskit-typography-addon')
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_6__["map"])(unitSizes, function (_ref) {
        var unitValue = _ref.unitValue,
            name = _ref.name;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Tooltip, {
          text: sprintf(
          /* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
          __('%s Units', 'editorskit-typography-addon'), name)
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
          key: unitValue,
          className: 'components-editorskit-typography-unit-control__units--' + name,
          isDefault: true,
          isPrimary: unit === unitValue,
          "aria-pressed": unit === unitValue,
          "aria-label": sprintf(
          /* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
          __('%s Units', 'editorskit-typography-addon'), name),
          onClick: function onClick() {
            createMeta(syntax + '-unit', unitValue, elementType, level);
          }
        }, unitValue));
      })))));
    }
  }]);

  return UnitControl;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSpokenMessages(UnitControl));

/***/ }),

/***/ "./src/add-ons/typography/src/defaults/fonts.json":
/*!********************************************************!*\
  !*** ./src/add-ons/typography/src/defaults/fonts.json ***!
  \********************************************************/
/*! exports provided: roboto-cabin, raleway-open, playfair-sourcesans, roboto-lora, abril-poppins, ruda-roboto, cormorant-fira, pt-playfair, oxygen-noto, arvo-lato, lato-catamaran, merriweather-muli, pt-bitter, cinzel-fauna, work-open, oswald-quattro, nunito-pt, unica-crimson, julius-monda, varela-noto, vollkorn-raleway, ovo-quattrocento, ubuntu-open, source-sintony, slabo-lato, rufina-pt, dosis-titillium, oswald-esteban, playfair-source, libre-nunito, catamaran-merriweather, bree-alegreya, cardo-libre, roboto-libre, goudy-average, raleway-frank, prata-lato, ezcar-merriweather, chivo-crimson, rubik-karla, neuton-work, anton-signika, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"roboto-cabin\":{\"name\":\"Roboto Condensed + Cabin\",\"type\":\"default\",\"category\":\"modern,minimal,warm\",\"heading\":{\"font-weight\":700,\"font-family\":\"'Roboto Condensed', sans-serif\"},\"content\":{\"font-family\":\"'Cabin', sans-serif\"},\"fonts\":[\"Roboto+Condensed:300,300i,400,400i,700,700i\",\"Cabin:400,400i,500,500i,600,600i,700,700i\"]},\"raleway-open\":{\"name\":\"Raleway + Open Sans\",\"type\":\"default\",\"category\":\"modern,minimal\",\"heading\":{\"font-weight\":300,\"font-family\":\"'Raleway', sans-serif\"},\"content\":{\"font-family\":\"'Open Sans', sans-serif\"},\"fonts\":[\"Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i\",\"Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i\"]},\"playfair-sourcesans\":{\"name\":\"Playfair Display + Source Sans\",\"type\":\"default\",\"category\":\"striking,classic,warm\",\"heading\":{\"font-weight\":300,\"font-family\":\"'Playfair Display', sans-serif\"},\"content\":{\"font-family\":\"'Source Sans Pro', sans-serif\"},\"fonts\":[\"Playfair+Display:400,400i,700,700i,900,900i\",\"Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i\"]},\"roboto-lora\":{\"name\":\"Roboto + Lora\",\"type\":\"default\",\"category\":\"modern,neutral\",\"heading\":{\"font-weight\":700,\"font-family\":\"'Roboto', sans-serif\"},\"content\":{\"font-family\":\"'Lora', serif\"},\"fonts\":[\"Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i\",\"Lora:400,400i,700,700i\"]},\"abril-poppins\":{\"name\":\"Abril Fatface + Poppins\",\"type\":\"default\",\"category\":\"eccentric,classic,warm\",\"heading\":{\"font-weight\":400,\"font-family\":\"'Abril Fatface', cursive\"},\"content\":{\"font-family\":\"'Poppins', sans-serif\"},\"fonts\":[\"Abril+Fatface\",\"Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i\"]},\"ruda-roboto\":{\"name\":\"Ruda + Roboto Slab\",\"type\":\"default\",\"category\":\"striking,eccentric,neutral\",\"heading\":{\"font-weight\":400,\"font-family\":\"'Ruda', sans-serif\"},\"content\":{\"font-family\":\"'Roboto Slab', serif\"},\"fonts\":[\"Ruda:400,700,900\",\"Roboto+Slab:100,200,300,400,500,600,700,800,900\"]},\"cormorant-fira\":{\"name\":\"Cormorant Garamond + Fira Sans\",\"type\":\"default\",\"category\":\"eccentric,classic,minimal\",\"heading\":{\"font-weight\":700,\"font-style\":\"italic\",\"font-family\":\"'Cormorant Garamond', serif\"},\"content\":{\"font-family\":\"'Fira Sans', sans-serif\"},\"fonts\":[\"Cormorant+Garamond:300,300i,400,400i,500,500i,600,600i,700,700i\",\"Fira+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i\"]},\"pt-playfair\":{\"name\":\"PT Sans + Playfair Display\",\"type\":\"default\",\"category\":\"modern,neutral\",\"heading\":{\"font-weight\":700,\"font-family\":\"'PT Sans', sans-serif\"},\"content\":{\"font-family\":\"'Playfair Display', serif\"},\"fonts\":[\"PT+Sans:400,400i,700,700i\",\"Playfair+Display:400,400i,700,700i,900,900i\"]},\"oxygen-noto\":{\"name\":\"Oxygen + Noto Serif\",\"type\":\"default\",\"category\":\"modern,minimal,neutral\",\"heading\":{\"font-weight\":400,\"font-family\":\"'Oxygen', sans-serif\"},\"content\":{\"font-family\":\"'Noto Serif', serif\"},\"fonts\":[\"Oxygen:300,400,700\",\"Noto+Serif:400,400i,700,700i\"]},\"arvo-lato\":{\"name\":\"Arvo + Lato\",\"type\":\"default\",\"category\":\"modern,minimal,neutral,warm\",\"heading\":{\"font-weight\":400,\"font-family\":\"'Arvo', serif\"},\"content\":{\"font-family\":\"'Lato', sans-serif\"},\"fonts\":[\"Arvo:400,400i,700,700i\",\"Lato:100,100i,300,300i,400,400i,700,700i,900,900i\"]},\"lato-catamaran\":{\"name\":\"Lato + Catamaran\",\"type\":\"default\",\"category\":\"classic,warm\",\"heading\":{\"font-weight\":400,\"font-style\":\"italic\",\"font-family\":\"'Lato', sans-serif\"},\"content\":{\"font-family\":\"'Catamaran', sans-serif\"},\"fonts\":[\"Lato:100,100i,300,300i,400,400i,700,700i,900,900i\",\"Catamaran:100,200,300,400,500,600,700,800,900\"]},\"merriweather-muli\":{\"name\":\"Merriweather + Muli\",\"type\":\"default\",\"category\":\"striking,classic,warm\",\"heading\":{\"font-weight\":400,\"font-family\":\"'Merriweather', serif\"},\"content\":{\"font-weight\":300,\"font-family\":\"'Muli', sans-serif\"},\"fonts\":[\"Merriweather:300,300i,400,400i,700,700i,900,900i\",\"Muli:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i\"]},\"pt-bitter\":{\"name\":\"PT Sans + Bitter\",\"type\":\"default\",\"category\":\"modern,striking\",\"heading\":{\"font-weight\":400,\"font-style\":\"italic\",\"font-family\":\"'PT Sans', sans-serif\"},\"content\":{\"font-family\":\"'Bitter', serif\"},\"fonts\":[\"PT+Sans:400,400i,700,700i\",\"Bitter:400,400i,700\"]},\"cinzel-fauna\":{\"name\":\"Cinzel + Fauna One\",\"type\":\"default\",\"category\":\"striking,eccentric,warm\",\"heading\":{\"font-weight\":700,\"text-transform\":\"uppercase\",\"font-family\":\"'Cinzel', serif\"},\"content\":{\"font-family\":\"'Fauna One', serif\"},\"fonts\":[\"Cinzel:400,700,90\",\"Fauna+One\"]},\"work-open\":{\"name\":\"Work Sans + Open Sans\",\"type\":\"default\",\"category\":\"modern,classic,minimal,neutral\",\"heading\":{\"font-weight\":300,\"font-family\":\"'Work Sans', sans-serif\"},\"content\":{\"font-family\":\"'Open Sans', sans-serif\"},\"fonts\":[\"Work+Sans:100,200,300,400,500,600,700,800,900\",\"Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i\"]},\"oswald-quattro\":{\"name\":\"Oswald + Quattro Cento\",\"type\":\"default\",\"category\":\"modern,striking,minimal\",\"heading\":{\"font-weight\":400,\"text-transform\":\"uppercase\",\"font-family\":\"'Oswald', sans-serif\"},\"content\":{\"font-family\":\"'Quattrocento', serif\"},\"fonts\":[\"Oswald:200,300,400,500,600,700\",\"Quattrocento:400,700\"]},\"nunito-pt\":{\"name\":\"Nunito + PT Sans\",\"type\":\"default\",\"category\":\"eccentric,warm\",\"heading\":{\"font-weight\":400,\"font-family\":\"'Nunito', sans-serif\"},\"content\":{\"font-family\":\"'PT Sans', sans-serif\"},\"fonts\":[\"Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i\",\"PT+Sans:400,400i,700,700i\"]},\"unica-crimson\":{\"name\":\"Unica One + Crimson Text\",\"type\":\"default\",\"category\":\"modern,striking,eccentric,minimal,neutral\",\"heading\":{\"font-weight\":400,\"text-transform\":\"uppercase\",\"font-family\":\"'Unica One', cursive\"},\"content\":{\"font-family\":\"'Crimson Text', serif\"},\"fonts\":[\"Unica+One\",\"Crimson+Text:400,400i,600,600i,700,700i\"]},\"julius-monda\":{\"name\":\"Julius Sans + Monda\",\"type\":\"default\",\"category\":\"striking,eccentric,minimal\",\"heading\":{\"font-weight\":400,\"text-transform\":\"uppercase\",\"font-family\":\"'Julius Sans One', sans-serif\"},\"content\":{\"font-family\":\"'Monda', sans-serif\"},\"fonts\":[\"Julius+Sans+One\",\"Monda:400,700\"]},\"varela-noto\":{\"name\":\"Varela Round + Noto Serif\",\"type\":\"default\",\"category\":\"neutral,warm\",\"heading\":{\"font-weight\":400,\"font-family\":\"'Varela Round', sans-serif\"},\"content\":{\"font-family\":\"'Noto Serif', serif\"},\"fonts\":[\"Varela+Round\",\"Noto+Serif:400,400i,700,700i\"]},\"vollkorn-raleway\":{\"name\":\"Vollkorn + Raleway\",\"type\":\"default\",\"category\":\"modern,striking,eccentric,classic,warm\",\"heading\":{\"font-weight\":400,\"font-style\":\"italic\",\"font-family\":\"'Vollkorn', serif\"},\"content\":{\"font-family\":\"'Raleway', sans-serif\"},\"fonts\":[\"Vollkorn:400,400i,600,600i,700,700i,900,900i\",\"Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i\"]},\"ovo-quattrocento\":{\"name\":\"Ovo + Quattrocento Sans\",\"type\":\"default\",\"category\":\"minimal,warm\",\"heading\":{\"font-family\":\"'Ovo', serif\"},\"content\":{\"font-family\":\"'Quattrocento Sans', sans-serif\"},\"fonts\":[\"Ovo\",\"Quattrocento+Sans:400,400i,700,700i\"]},\"ubuntu-open\":{\"name\":\"Ubuntu + Open Sans\",\"type\":\"default\",\"category\":\"striking,neutral\",\"heading\":{\"font-weight\":700,\"text-transform\":\"uppercase\",\"font-family\":\"'Ubuntu', sans-serif\"},\"content\":{\"font-family\":\"'Open Sans', sans-serif\"},\"fonts\":[\"Ubuntu:300,300i,400,400i,500,500i,700,700i\",\"Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i\"]},\"source-sintony\":{\"name\":\"Source Sans Pro + Sintony\",\"type\":\"default\",\"category\":\"neutral\",\"heading\":{\"font-weight\":900,\"font-family\":\"'Source Sans Pro', sans-serif\"},\"content\":{\"font-family\":\"'Sintony', sans-serif\"},\"fonts\":[\"Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i\",\"Sintony:400,700\"]},\"slabo-lato\":{\"name\":\"Slabo 13px + Lato\",\"type\":\"default\",\"category\":\"modern,striking,eccentric,neutral,warm\",\"heading\":{\"font-weight\":700,\"font-family\":\"'Slabo 13px', serif\"},\"content\":{\"font-family\":\"'Lato', sans-serif\"},\"fonts\":[\"Slabo+13px\",\"Lato:100,100i,300,300i,400,400i,700,700i,900,900i\"]},\"rufina-pt\":{\"name\":\"Rufina + PT Serif\",\"type\":\"default\",\"category\":\"minimal,warm\",\"heading\":{\"font-weight\":700,\"font-family\":\"'Rufina', serif\"},\"content\":{\"font-family\":\"'PT Serif', serif\"},\"fonts\":[\"Rufina:400,700\",\"PT+Serif:400,400i,700,700i\"]},\"dosis-titillium\":{\"name\":\"Dosis + Titillium Web\",\"type\":\"default\",\"category\":\"modern,eccentric,neutral\",\"heading\":{\"font-weight\":400,\"font-family\":\"'Dosis', sans-serif\"},\"content\":{\"font-family\":\"'Titillium Web', sans-serif\"},\"fonts\":[\"Dosis:200,300,400,500,600,700,800\",\"Titillium+Web:200,200i,300,300i,400,400i,600,600i,700,700i,900\"]},\"oswald-esteban\":{\"name\":\"Oswald + Esteban\",\"type\":\"default\",\"category\":\"modern,eccentric,warm\",\"heading\":{\"font-weight\":300,\"font-family\":\"'Oswald', sans-serif\"},\"content\":{\"font-family\":\"'Esteban', serif\"},\"fonts\":[\"Oswald:200,300,400,500,600,700\",\"Esteban\"]},\"playfair-source\":{\"name\":\"Playfair Display + Source Sans Pro\",\"type\":\"default\",\"category\":\"striking,eccentric,warm\",\"heading\":{\"font-weight\":900,\"font-family\":\"'Playfair Display', serif\"},\"content\":{\"font-family\":\"'Source Sans Pro', sans-serif\"},\"fonts\":[\"Playfair+Display:400,400i,700,700i,900,900i\",\"Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i\"]},\"libre-nunito\":{\"name\":\"Libre Baskerville + Nunito\",\"type\":\"default\",\"category\":\"minimal,neutral\",\"heading\":{\"font-weight\":700,\"font-family\":\"'Libre Baskerville', serif\"},\"content\":{\"font-family\":\"'Nunito', sans-serif\"},\"fonts\":[\"Libre+Baskerville:400,400i,700\",\"Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i\"]},\"catamaran-merriweather\":{\"name\":\"Catamaran + Merriweather Sans\",\"type\":\"default\",\"category\":\"modern,neutral\",\"heading\":{\"font-weight\":600,\"font-family\":\"'Catamaran', sans-serif\"},\"content\":{\"font-weight\":300,\"font-family\":\"'Merriweather Sans', sans-serif\"},\"fonts\":[\"Catamaran:100,200,300,400,500,600,700,800,900\",\"Merriweather+Sans:300,300i,400,400i,700,700i,800,800i\"]},\"bree-alegreya\":{\"name\":\"Bree Serif + Alegreya\",\"type\":\"default\",\"category\":\"striking,eccentric,warm\",\"heading\":{\"font-weight\":700,\"text-transform\":\"uppercase\",\"font-family\":\"'Bree Serif', serif\"},\"content\":{\"font-weight\":300,\"font-family\":\"'Alegreya', serif\"},\"fonts\":[\"Bree+Serif\",\"Alegreya:400,400i,500,500i,700,700i,800,800i,900,900i\"]},\"cardo-libre\":{\"name\":\"Cardo + Libre Franklin\",\"type\":\"default\",\"category\":\"striking,classic,neutral\",\"heading\":{\"font-weight\":700,\"font-family\":\"'Cardo', serif\"},\"content\":{\"font-family\":\"'Libre Franklin', sans-serif\"},\"fonts\":[\"Cardo:400,400i,700\",\"Libre+Franklin:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i\"]},\"roboto-libre\":{\"name\":\"Roboto + Libre Baskerville\",\"type\":\"default\",\"category\":\"minimal,neutral\",\"heading\":{\"font-weight\":500,\"font-family\":\"'Roboto', sans-serif\"},\"content\":{\"font-family\":\"'Libre Baskerville', serif\"},\"fonts\":[\"Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i\",\"Libre+Baskerville:400,400i,700\"]},\"goudy-average\":{\"name\":\"Goudy Bookletter 1911 + Average Sans\",\"type\":\"default\",\"category\":\"classic,warm\",\"heading\":{\"font-weight\":500,\"font-family\":\"'Goudy Bookletter 1911', serif\"},\"content\":{\"font-family\":\"'Average Sans', sans-serif\"},\"fonts\":[\"Goudy+Bookletter+1911\",\"Average+Sans\"]},\"raleway-frank\":{\"name\":\"Raleway + Frank Ruhl Libre\",\"type\":\"default\",\"category\":\"minimal,neutral\",\"heading\":{\"font-weight\":300,\"font-family\":\"'Raleway', sans-serif\"},\"content\":{\"font-family\":\"'Frank Ruhl Libre', serif\"},\"fonts\":[\"Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i\",\"Frank+Ruhl+Libre:300,400,500,700,900\"]},\"prata-lato\":{\"name\":\"Prata + Lato\",\"type\":\"default\",\"category\":\"eccentric,warm\",\"heading\":{\"font-weight\":400,\"font-family\":\"'Prata', serif\"},\"content\":{\"font-family\":\"'Lato', sans-serif\"},\"fonts\":[\"Prata\",\"Lato:100,100i,300,300i,400,400i,700,700i,900,900i\"]},\"ezcar-merriweather\":{\"name\":\"Eczar + Merriweather\",\"type\":\"default\",\"category\":\"classic,neutral\",\"heading\":{\"font-weight\":600,\"font-family\":\"'Eczar', serif\"},\"content\":{\"font-family\":\"'Merriweather', serif\"},\"fonts\":[\"Eczar:400,500,600,700,800\",\"Merriweather:300,300i,400,400i,700,700i,900,900i\"]},\"chivo-crimson\":{\"name\":\"Chivo + Crimson Text\",\"type\":\"default\",\"category\":\"minimal,neutral\",\"heading\":{\"font-weight\":300,\"font-family\":\"'Chivo', sans-serif\"},\"content\":{\"font-family\":\"'Crimson Text', serif\"},\"fonts\":[\"Chivo:300,300i,400,400i,700,700i,900,900i\",\"Crimson+Text:400,400i,600,600i,700,700i\"]},\"rubik-karla\":{\"name\":\"Rubik + Karla\",\"type\":\"default\",\"category\":\"modern,minimal\",\"heading\":{\"font-weight\":400,\"font-family\":\"'Rubik', sans-serif\"},\"content\":{\"font-family\":\"'Karla', sans-serif\"},\"fonts\":[\"Rubik:300,300i,400,400i,500,500i,700,700i,900,900i\",\"Karla:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i\"]},\"neuton-work\":{\"name\":\"Neuton + Work Sans\",\"type\":\"default\",\"category\":\"striking,classic,warm\",\"heading\":{\"font-weight\":400,\"font-family\":\"'Neuton', serif\"},\"content\":{\"font-family\":\"'Work Sans', sans-serif\"},\"fonts\":[\"Neuton:200,300,400,400i,700,800\",\"Work+Sans:100,200,300,400,500,600,700,800,900\"]},\"anton-signika\":{\"name\":\"Anton + Signika\",\"type\":\"default\",\"category\":\"striking,eccentric,minimal,neutral\",\"heading\":{\"font-weight\":400,\"font-family\":\"'Anton', sans-serif\"},\"content\":{\"font-weight\":300,\"font-family\":\"'Signika', sans-serif\"},\"fonts\":[\"Anton\",\"Signika:300,400,600,700\"]}}");

/***/ }),

/***/ "./src/add-ons/typography/src/defaults/google-fonts.json":
/*!***************************************************************!*\
  !*** ./src/add-ons/typography/src/defaults/google-fonts.json ***!
  \***************************************************************/
/*! exports provided: fonts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"fonts\":[{\"name\":\"Abril Fatface\",\"font-family\":\"'Abril Fatface', cursive\",\"weights\":\"\"},{\"name\":\"Alegreya\",\"font-family\":\"'Alegreya', serif\",\"weights\":\"400,400i,500,500i,700,700i,800,800i,900,900i\"},{\"name\":\"Anton\",\"font-family\":\"'Anton', sans-serif\",\"weights\":\"\"},{\"name\":\"Arvo\",\"font-family\":\"'Arvo', serif\",\"weights\":\"400,400i,700,700\"},{\"name\":\"Average Sans\",\"font-family\":\"'Average Sans', sans-serif\",\"weights\":\"\"},{\"name\":\"Berkshire Swash\",\"font-family\":\"'Berkshire Swash', cursive\",\"weights\":\"400\"},{\"name\":\"Bitter\",\"font-family\":\"'Bitter', serif\",\"weights\":\"400,400i,700\"},{\"name\":\"Bree Serif\",\"font-family\":\"'Bree Serif', serif\",\"weights\":\"\"},{\"name\":\"Cabin\",\"font-family\":\"'Cabin', sans-serif\",\"weights\":\"400,400i,500,500i,600,600i,700,700i\"},{\"name\":\"Cardo\",\"font-family\":\"'Cardo', serif\",\"weights\":\"400,400i,700\"},{\"name\":\"Catamaran\",\"font-family\":\"'Catamaran', sans-serif\",\"weights\":\"100,200,300,400,500,600,700,800,900\"},{\"name\":\"Chivo\",\"font-family\":\"'Chivo', sans-serif\",\"weights\":\"300,300i,400,400i,700,700i,900,900i\"},{\"name\":\"Cinzel\",\"font-family\":\"'Cinzel', serif\",\"weights\":\"400,700,90\"},{\"name\":\"Cormorant Garamond\",\"font-family\":\"\",\"weights\":\"300,300i,400,400i,500,500i,600,600i,700,700i\"},{\"name\":\"Crimson Text\",\"font-family\":\"'Cormorant Garamond', serif\",\"weights\":\"400,400i,600,600i,700,700i\"},{\"name\":\"Dosis\",\"font-family\":\"'Dosis', sans-serif\",\"weights\":\"200,300,400,500,600,700,800\"},{\"name\":\"Eczar\",\"font-family\":\"'Eczar', serif\",\"weights\":\"400,500,600,700,800\"},{\"name\":\"Esteban\",\"font-family\":\"'Esteban', serif\",\"weights\":\"\"},{\"name\":\"Fauna One\",\"font-family\":\"'Fauna One', serif\",\"weights\":\"\"},{\"name\":\"Fira Code\",\"font-family\":\"'Fira Code', monospace\",\"weights\":\"300,400,500,600,700\"},{\"name\":\"Fira Sans\",\"font-family\":\"'Fira Sans', sans-serif\",\"weights\":\"100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i\"},{\"name\":\"Frank Ruhl Libre\",\"font-family\":\"'Frank Ruhl Libre', serif\",\"weights\":\"300,400,500,700,900\"},{\"name\":\"Goudy Bookletter 1911\",\"font-family\":\"'Goudy Bookletter 1911', serif\",\"weights\":\"\"},{\"name\":\"Julius Sans One\",\"font-family\":\"'Julius Sans One', sans-serif\",\"weights\":\"\"},{\"name\":\"Karla\",\"font-family\":\"'Karla', sans-serif\",\"weights\":\"200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i\"},{\"name\":\"Lato\",\"font-family\":\"'Lato', sans-serif\",\"weights\":\"100,100i,300,300i,400,400i,700,700i,900,900i\"},{\"name\":\"Libre Baskerville\",\"font-family\":\"'Libre Baskerville', serif\",\"weights\":\"400,400i,700\"},{\"name\":\"Libre Franklin\",\"font-family\":\"'Libre Franklin', sans-serif\",\"weights\":\"100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i\"},{\"name\":\"Lora\",\"font-family\":\"'Lora', serif\",\"weights\":\"400,400i,700,700i\"},{\"name\":\"Merriweather Sans\",\"font-family\":\"'Merriweather Sans', sans-serif\",\"weights\":\"300,300i,400,400i,700,700i,800,800i\"},{\"name\":\"Merriweather\",\"font-family\":\"'Merriweather', serif\",\"weights\":\"300,300i,400,400i,700,700i,900,900i\"},{\"name\":\"Monda\",\"font-family\":\"'Monda', sans-serif\",\"weights\":\"400,700\"},{\"name\":\"Muli\",\"font-family\":\"'Muli', sans-serif\",\"weights\":\"200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i\"},{\"name\":\"Neuton\",\"font-family\":\"'Neuton', serif\",\"weights\":\"200,300,400,400i,700,800\"},{\"name\":\"Noto Serif\",\"font-family\":\"'Noto Serif', serif\",\"weights\":\"400,400i,700,700i\"},{\"name\":\"Nunito\",\"font-family\":\"'Nunito', sans-serif\",\"weights\":\"200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i\"},{\"name\":\"Open Sans\",\"font-family\":\"'Open Sans', sans-serif\",\"weights\":\"300,300i,400,400i,600,600i,700,700i,800,800i\"},{\"name\":\"Oswald\",\"font-family\":\"'Oswald', sans-serif\",\"weights\":\"200,300,400,500,600,700\"},{\"name\":\"Ovo\",\"font-family\":\"'Ovo', serif\",\"weights\":\"\"},{\"name\":\"Oxygen\",\"font-family\":\"'Oxygen', sans-serif\",\"weights\":\"300,400,700\"},{\"name\":\"PT Sans\",\"font-family\":\"'PT Sans', sans-serif\",\"weights\":\"400,400i,700,700i\"},{\"name\":\"PT Serif\",\"font-family\":\"'PT Serif', serif\",\"weights\":\"400,400i,700,700i\"},{\"name\":\"Playfair Display\",\"font-family\":\"'Playfair Display', serif\",\"weights\":\"400,400i,700,700i,900,900i\"},{\"name\":\"Poppins\",\"font-family\":\"'Poppins', sans-serif\",\"weights\":\"100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i\"},{\"name\":\"Prata\",\"font-family\":\"'Prata', serif\",\"weights\":\"\"},{\"name\":\"Quattrocento Sans\",\"font-family\":\"'Quattrocento Sans', sans-serif\",\"weights\":\"400,400i,700,700i\"},{\"name\":\"Quattrocento\",\"font-family\":\"'Quattrocento', serif\",\"weights\":\"400,700\"},{\"name\":\"Raleway\",\"font-family\":\"'Raleway', sans-serif\",\"weights\":\"100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i\"},{\"name\":\"Roboto Condensed\",\"font-family\":\"'Roboto Condensed', sans-serif\",\"weights\":\"300,300i,400,400i,700,700i\"},{\"name\":\"Roboto Slab\",\"font-family\":\"'Roboto Slab', serif\",\"weights\":\"100,200,300,400,500,600,700,800,900\"},{\"name\":\"Roboto\",\"font-family\":\"'Roboto', sans-serif\",\"weights\":\"100,100i,300,300i,400,400i,500,500i,700,700i,900,900i\"},{\"name\":\"Rubik\",\"font-family\":\"'Rubik', sans-serif\",\"weights\":\"300,300i,400,400i,500,500i,700,700i,900,900i\"},{\"name\":\"Ruda\",\"font-family\":\"'Ruda', sans-serif\",\"weights\":\"400,700,900\"},{\"name\":\"Rufina\",\"font-family\":\"'Rufina', serif\",\"weights\":\"400,700\"},{\"name\":\"Signika\",\"font-family\":\"'Signika', sans-serif\",\"weights\":\"300,400,600,700\"},{\"name\":\"Sintony\",\"font-family\":\"'Sintony', sans-serif\",\"weights\":\"400,700\"},{\"name\":\"Slabo 13px\",\"font-family\":\"'Slabo 13px', serif\",\"weights\":\"\"},{\"name\":\"Source Sans Pro\",\"font-family\":\"'Source Sans Pro', sans-serif\",\"weights\":\"200,200i,300,300i,400,400i,600,600i,700,700i,900,900i\"},{\"name\":\"Titillium Web\",\"font-family\":\"'Titillium Web', sans-serif\",\"weights\":\"200,200i,300,300i,400,400i,600,600i,700,700i,900\"},{\"name\":\"Ubuntu\",\"font-family\":\"'Ubuntu', sans-serif\",\"weights\":\"300,300i,400,400i,500,500i,700,700i\"},{\"name\":\"Unica One\",\"font-family\":\"'Unica One', cursive\",\"weights\":\"\"},{\"name\":\"Varela Round\",\"font-family\":\"'Varela Round', sans-serif\",\"weights\":\"\"},{\"name\":\"Vollkorn\",\"font-family\":\"'Vollkorn', serif\",\"weights\":\"400,400i,600,600i,700,700i,900,900i\"},{\"name\":\"Work Sans\",\"font-family\":\"'Work Sans', sans-serif\",\"weights\":\"100,200,300,400,500,600,700,800,900\"}]}");

/***/ }),

/***/ "./src/add-ons/typography/src/plugins/sidebar-menu-item/icon.js":
/*!**********************************************************************!*\
  !*** ./src/add-ons/typography/src/plugins/sidebar-menu-item/icon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Custom icon
 */
var icon = {};
icon.typography = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  id: "a",
  d: "M24 24H0V0h24v24z"
}), " "), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
  id: "b"
}, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("use", {
  overflow: "visible",
  xlinkHref: "#a"
}), " "), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z",
  clipPath: "url(#b)"
}), " ");
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/add-ons/typography/src/settings.js":
/*!************************************************!*\
  !*** ./src/add-ons/typography/src/settings.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/ */ "./src/add-ons/typography/src/settings/index.js");
/**
 * Admin Settings
 */


/***/ }),

/***/ "./src/add-ons/typography/src/settings/index.js":
/*!******************************************************!*\
  !*** ./src/add-ons/typography/src/settings/index.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_sidebar_menu_item_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins/sidebar-menu-item/icon */ "./src/add-ons/typography/src/plugins/sidebar-menu-item/icon.js");
/* harmony import */ var _components_font_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/font-selection */ "./src/add-ons/typography/src/components/font-selection/index.js");



/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var addFilter = wp.hooks.addFilter;
var useEntityProp = wp.coreData.useEntityProp;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useCallback = _wp$element.useCallback;
var useDispatch = wp.data.useDispatch;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    ToggleControl = _wp$components.ToggleControl;

function editorskitTypographySettings(FilteredComponent) {
  return function (props) {
    var _useEntityProp = useEntityProp('root', 'site', 'editorskit_typography_enabled'),
        _useEntityProp2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useEntityProp, 2),
        editorskitTypographyEnabled = _useEntityProp2[0],
        setEditorskitTypographyEnabled = _useEntityProp2[1];

    var _useDispatch = useDispatch('core'),
        saveEditedEntityRecord = _useDispatch.saveEditedEntityRecord;

    var _useDispatch2 = useDispatch('core/edit-post'),
        toggleFeature = _useDispatch2.toggleFeature;

    var onToggle = useCallback(function () {
      toggleFeature('disableEditorsKitTypography');
      saveEditedEntityRecord('root', 'site');
    }, []);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(FilteredComponent, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "editorskit-typography-admin-settings"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Typography Add-on Enabled', 'editorskit-typography-addon'),
      checked: editorskitTypographyEnabled,
      onChange: function onChange(newValue) {
        setEditorskitTypographyEnabled(newValue);
        onToggle();
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Typography Settings', 'editorskit-typography-addon'),
      icon: _plugins_sidebar_menu_item_icon__WEBPACK_IMPORTED_MODULE_2__["default"].typography,
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "editorskit-typography-admin-settings--items"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_font_selection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      settingsPanel: true
    }))))));
  };
}

addFilter('editorskit.addOn.extraPanel', 'editorskit/typography-settings', editorskitTypographySettings);

/***/ }),

/***/ "./src/admin.js":
/*!**********************!*\
  !*** ./src/admin.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/ */ "./src/admin/index.js");
/* harmony import */ var _add_ons_typography_src_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-ons/typography/src/settings */ "./src/add-ons/typography/src/settings.js");
/**
 * Admin Dashboard and Settings
 *
 */

/**
 * Internal dependencies
 */



/***/ }),

/***/ "./src/admin/addon-settings.js":
/*!*************************************!*\
  !*** ./src/admin/addon-settings.js ***!
  \*************************************/
/*! exports provided: AddonSettings, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonSettings", function() { return AddonSettings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var withFilters = wp.components.withFilters;
var AddonSettings = function AddonSettings() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('This area provide settings for all activated EditorsKit add ons.', 'block-options')));
};
/* harmony default export */ __webpack_exports__["default"] = (withFilters('editorskit.addOn.extraPanel')(AddonSettings));

/***/ }),

/***/ "./src/admin/block-manager/category.js":
/*!*********************************************!*\
  !*** ./src/admin/block-manager/category.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _checklist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checklist */ "./src/admin/block-manager/checklist.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    withInstanceId = _wp$compose.withInstanceId;
var CheckboxControl = wp.components.CheckboxControl;
/**
 * Internal dependencies
 */



function BlockManagerCategory(_ref) {
  var instanceId = _ref.instanceId,
      category = _ref.category,
      blockTypes = _ref.blockTypes,
      hiddenBlockTypes = _ref.hiddenBlockTypes,
      toggleVisible = _ref.toggleVisible,
      toggleAllVisible = _ref.toggleAllVisible;

  if (!blockTypes.length) {
    return null;
  }

  var checkedBlockNames = lodash__WEBPACK_IMPORTED_MODULE_2__["without"].apply(void 0, [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(blockTypes, 'name')].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(hiddenBlockTypes)));
  var titleId = 'edit-post-manage-blocks-modal__category-title-' + instanceId;
  var isAllChecked = checkedBlockNames.length === blockTypes.length;
  var ariaChecked;

  if (isAllChecked) {
    ariaChecked = 'true';
  } else if (checkedBlockNames.length > 0) {
    ariaChecked = 'mixed';
  } else {
    ariaChecked = 'false';
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    role: "group",
    "aria-labelledby": titleId,
    className: "edit-post-manage-blocks-modal__category"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CheckboxControl, {
    checked: isAllChecked,
    onChange: toggleAllVisible,
    className: "edit-post-manage-blocks-modal__category-title",
    "aria-checked": ariaChecked,
    label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      id: titleId
    }, category.title)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_checklist__WEBPACK_IMPORTED_MODULE_3__["default"], {
    blockTypes: blockTypes,
    value: checkedBlockNames,
    onItemChange: toggleVisible
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withInstanceId, withSelect(function (select) {
  var _select = select('core/edit-post'),
      getPreference = _select.getPreference;

  return {
    hiddenBlockTypes: getPreference('hiddenBlockTypes')
  };
}), withDispatch(function (dispatch, ownProps) {
  var _dispatch = dispatch('core/edit-post'),
      showBlockTypes = _dispatch.showBlockTypes,
      hideBlockTypes = _dispatch.hideBlockTypes;

  return {
    toggleVisible: function toggleVisible(blockName, nextIsChecked) {
      if (nextIsChecked) {
        showBlockTypes(blockName);
      } else {
        hideBlockTypes(blockName);
      }
    },
    toggleAllVisible: function toggleAllVisible(nextIsChecked) {
      var blockNames = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(ownProps.blockTypes, 'name');

      if (nextIsChecked) {
        showBlockTypes(blockNames);
      } else {
        hideBlockTypes(blockNames);
      }
    }
  };
})])(BlockManagerCategory));

/***/ }),

/***/ "./src/admin/block-manager/checklist.js":
/*!**********************************************!*\
  !*** ./src/admin/block-manager/checklist.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var Fragment = wp.element.Fragment;
var BlockIcon = wp.blockEditor.BlockIcon;
var CheckboxControl = wp.components.CheckboxControl;

function BlockTypesChecklist(_ref) {
  var blockTypes = _ref.blockTypes,
      value = _ref.value,
      onItemChange = _ref.onItemChange;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "edit-post-manage-blocks-modal__checklist"
  }, blockTypes.map(function (blockType) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      key: blockType.name,
      className: "edit-post-manage-blocks-modal__checklist-item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
      label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, blockType.title, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockIcon, {
        icon: blockType.icon
      })),
      checked: value.includes(blockType.name),
      onChange: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["partial"])(onItemChange, blockType.name)
    }));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockTypesChecklist);

/***/ }),

/***/ "./src/admin/block-manager/index.js":
/*!******************************************!*\
  !*** ./src/admin/block-manager/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ "./src/admin/block-manager/category.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    _n = _wp$i18n._n,
    sprintf = _wp$i18n.sprintf;
var withSelect = wp.data.withSelect;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    withState = _wp$compose.withState;
var TextControl = wp.components.TextControl;
var getBlockTypes = wp.blocks.getBlockTypes;
/**
 * Internal dependencies
 */



function BlockManager(_ref) {
  var search = _ref.search,
      setState = _ref.setState,
      blockTypes = _ref.blockTypes,
      categories = _ref.categories,
      hasBlockSupport = _ref.hasBlockSupport,
      isMatchingSearchTerm = _ref.isMatchingSearchTerm,
      numberOfHiddenBlocks = _ref.numberOfHiddenBlocks;
  // Filtering occurs here (as opposed to `withSelect`) to avoid wasted
  // wasted renders by consequence of `Array#filter` producing a new
  // value reference on each call.
  blockTypes = blockTypes.filter(function (blockType) {
    return hasBlockSupport(blockType, 'inserter', true) && (!search || isMatchingSearchTerm(blockType, search)) && !blockType.parent;
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-post-manage-blocks-modal__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    type: "search",
    label: __('Search for a block', 'block-options'),
    value: search,
    onChange: function onChange(nextSearch) {
      return setState({
        search: nextSearch
      });
    },
    className: "edit-post-manage-blocks-modal__search"
  }), !!numberOfHiddenBlocks && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-post-manage-blocks-modal__disabled-blocks-count"
  }, sprintf(_n('%1$d block is disabled.', '%1$d blocks are disabled.', numberOfHiddenBlocks), numberOfHiddenBlocks)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    tabIndex: "0",
    role: "region",
    "aria-label": __('Available block types', 'block-options'),
    className: "edit-post-manage-blocks-modal__results"
  }, blockTypes.length === 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "edit-post-manage-blocks-modal__no-results"
  }, __('No blocks found.', 'block-options')), categories.map(function (category) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_category__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: category.slug,
      category: category,
      blockTypes: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(blockTypes, {
        category: category.slug
      })
    });
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withState({
  search: ''
}), withSelect(function (select) {
  var _select = select('core/blocks'),
      getCategories = _select.getCategories,
      hasBlockSupport = _select.hasBlockSupport,
      isMatchingSearchTerm = _select.isMatchingSearchTerm;

  var _select2 = select('core/edit-post'),
      getPreference = _select2.getPreference;

  var hiddenBlockTypes = getPreference('hiddenBlockTypes');
  var numberOfHiddenBlocks = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(hiddenBlockTypes) && hiddenBlockTypes.length;
  return {
    blockTypes: getBlockTypes(),
    categories: getCategories(),
    hasBlockSupport: hasBlockSupport,
    isMatchingSearchTerm: isMatchingSearchTerm,
    numberOfHiddenBlocks: numberOfHiddenBlocks
  };
})])(BlockManager));

/***/ }),

/***/ "./src/admin/docs/icon.js":
/*!********************************!*\
  !*** ./src/admin/docs/icon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Custom icon
 */
var icon = {};
icon.book = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  x: "0",
  y: "0",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "none",
  d: "M0 0H24V24H0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zM3 18.5V7c1.1-.35 2.3-.5 3.5-.5 1.34 0 3.13.41 4.5.99v11.5C9.63 18.41 7.84 18 6.5 18c-1.2 0-2.4.15-3.5.5zm18 0c-1.1-.35-2.3-.5-3.5-.5-1.34 0-3.13.41-4.5.99V7.49c1.37-.59 3.16-.99 4.5-.99 1.2 0 2.4.15 3.5.5v11.5z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M11 7.49c-1.37-.58-3.16-.99-4.5-.99-1.2 0-2.4.15-3.5.5v11.5c1.1-.35 2.3-.5 3.5-.5 1.34 0 3.13.41 4.5.99V7.49z",
  opacity: "0.3"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.28 0-2.46.16-3.5.47v1.57c.99-.35 2.18-.54 3.5-.54zM17.5 13.16c.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.28 0-2.46.16-3.5.47v1.57c.99-.34 2.18-.54 3.5-.54zM17.5 15.83c.88 0 1.73.09 2.5.26v-1.52c-.79-.15-1.64-.24-2.5-.24-1.28 0-2.46.16-3.5.47v1.57c.99-.35 2.18-.54 3.5-.54z"
})));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/admin/docs/index.js":
/*!*********************************!*\
  !*** ./src/admin/docs/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon */ "./src/admin/docs/icon.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);







/**
 * Internal dependencies
 */

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Modal = _wp$components.Modal;

var EditorsKitDocs =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(EditorsKitDocs, _Component);

  function EditorsKitDocs() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorsKitDocs);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EditorsKitDocs).apply(this, arguments));
    _this.state = {
      isOpen: false,
      isLoaded: false,
      html: ''
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorsKitDocs, [{
    key: "openModal",
    value: function openModal(name) {
      var _this2 = this;

      fetch(window.editorskitSettings.url + 'docs/' + name).then(function (response) {
        return response.text();
      }).then(function (markdown) {
        return _this2.setState({
          html: marked__WEBPACK_IMPORTED_MODULE_7___default()(markdown),
          isLoaded: true,
          isOpen: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var formatDocs = [{
        title: __('Adding Selected Text Color', 'block-options'),
        name: 'text-color-format.md'
      }, {
        title: __('Adding Highlighted Text Background Color', 'block-options'),
        name: 'background-color-format.md'
      }, {
        title: __('Adding Link "rel" NoFollow or Sponsored Attributes', 'block-options'),
        name: 'link-attributes-format.md'
      }, {
        title: __('Subscript and Superscript Text Formatting', 'block-options'),
        name: 'subscript-superscript-format.md'
      }, {
        title: __('Justified Paragraph Alignment', 'block-options'),
        name: 'justified-alignment-format.md'
      }, {
        title: __('Transform Text to Uppercase', 'block-options'),
        name: 'uppercase-text-format.md'
      }, {
        title: __('Add Nonbreaking Space', 'block-options'),
        name: 'nonbreaking-space-format.md'
      }, {
        title: __('Clear Formatting', 'block-options'),
        name: 'clear-formatting-format.md'
      }];
      var writingDocs = [{
        title: __('Markdown Writing Shortcuts', 'block-options'),
        name: 'markdown-writing.md'
      }, {
        title: __('View or Add Estimated Reading Time', 'block-options'),
        name: 'estimated-reading-time-writing.md'
      }, {
        title: __('Transform 3 Empty Paragraphs to Spacer Block', 'block-options'),
        name: 'transform-empty-spacer-writing.md'
      }];
      var optionsDocs = [{
        title: __('Set Image Block as Featured Image', 'block-options'),
        name: 'set-image-as-featured-options.md'
      }, {
        title: __('Export and Import Blocks', 'block-options'),
        name: 'export-import-block-options.md'
      }, {
        title: __('Copy Selected Block(s)', 'block-options'),
        name: 'copy-selected-blocks-options.md'
      }, {
        title: __('Media & Text Block Card Layout', 'block-options'),
        name: 'media-text-block-layout-options.md'
      }, {
        title: __('Media & Text Block Links', 'block-options'),
        name: 'media-text-block-link-options.md'
      }, {
        title: __('Changing List Block Font Size & Text Color', 'block-options'),
        name: 'list-block-options.md'
      }];
      var toolsDocs = [{
        title: __('Easily Hide Title', 'block-options'),
        name: 'hide-title-tools.md'
      }, {
        title: __('Drag and Drop Featured Image', 'block-options'),
        name: 'drag-drop-featured-image-tools.md'
      }, {
        title: __('Code Editor Syntax Highlighter', 'block-options'),
        name: 'syntax-highlighter-tools.md'
      }, {
        title: __('Enable Block Guide Lines', 'block-options'),
        name: 'block-guidelines-tools.md'
      }, {
        title: __('Additional CSS Class(es) Auto Suggestions', 'block-options'),
        name: 'custom-classnames-tools.md'
      }, {
        title: __('Accessible Help, Tips & Tricks', 'block-options'),
        name: 'tips-tricks-tools.md'
      }, {
        title: __('Enable Developer Tools', 'block-options'),
        name: 'developer-tools.md'
      }];
      var visibilityDocs = [{
        title: __('Block Visibility on Desktop, Mobile or Tablet', 'block-options'),
        name: 'devices-visibility.md'
      }, {
        title: __('Hide Block on Logged-in/out Users', 'block-options'),
        name: 'user-state-visibility.md'
      }, {
        title: __('Using Custom Display Logic', 'block-options'),
        name: 'display-logic-visibility.md'
      }];
      var stylingDocs = [{
        title: __('Display Cover and Image Blocks in Fullscreen', 'block-options'),
        name: 'fullscreen-styling.md'
      }, {
        title: __('More Image & Cover Block Styles', 'block-options'),
        name: 'image-cover-styles-styling.md'
      }, {
        title: __('Additional List Block Styles', 'block-options'),
        name: 'list-block-styles-styling.md'
      }];

      var closeModal = function closeModal() {
        return _this3.setState({
          html: '',
          isOpen: false,
          isLoaded: false
        });
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, __('Learn more about each EditorsKit features with the tutorials below. Click on the link to open a modal pop-up with detailed explanation and animated GIF previewing how the features work.', 'block-options')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "editorskit-docs-items-wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "editorskit-docs-items-formatting"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", {
        className: "editorskit-docs-items-title"
      }, __('Rich Text Formatting', 'block-options')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", {
        className: "editorskit-docs-items-list"
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(formatDocs, function (formats) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
          onClick: function onClick() {
            _this3.openModal(formats.name);
          }
        }, formats.title));
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "editorskit-docs-items-writing"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", {
        className: "editorskit-docs-items-title"
      }, __('Writing', 'block-options')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", {
        className: "editorskit-docs-items-list"
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(writingDocs, function (formats) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
          onClick: function onClick() {
            _this3.openModal(formats.name);
          }
        }, formats.title));
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "editorskit-docs-items-blockoptions"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", {
        className: "editorskit-docs-items-title"
      }, __('Block Options', 'block-options')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", {
        className: "editorskit-docs-items-list"
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(optionsDocs, function (formats) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
          onClick: function onClick() {
            _this3.openModal(formats.name);
          }
        }, formats.title));
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "editorskit-docs-items-tools"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", {
        className: "editorskit-docs-items-title"
      }, __('Tools', 'block-options')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", {
        className: "editorskit-docs-items-list"
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(toolsDocs, function (formats) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
          onClick: function onClick() {
            _this3.openModal(formats.name);
          }
        }, formats.title));
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "editorskit-docs-items-visibility"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", {
        className: "editorskit-docs-items-title"
      }, __('Block Visibility', 'block-options')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", {
        className: "editorskit-docs-items-list"
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(visibilityDocs, function (formats) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
          onClick: function onClick() {
            _this3.openModal(formats.name);
          }
        }, formats.title));
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "editorskit-docs-items-styling"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", {
        className: "editorskit-docs-items-title"
      }, __('Block Styling', 'block-options')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", {
        className: "editorskit-docs-items-list"
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(stylingDocs, function (formats) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
          onClick: function onClick() {
            _this3.openModal(formats.name);
          }
        }, formats.title));
      })))), this.state.isOpen && this.state.isLoaded ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Modal, {
        title: __('Documentation', 'block-options'),
        icon: _icon__WEBPACK_IMPORTED_MODULE_6__["default"].book,
        onRequestClose: function onRequestClose() {
          return closeModal();
        },
        className: "editorskit-modal-component components-modal--editorskit-docs"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "components-modal--editorskit-doc",
        dangerouslySetInnerHTML: {
          __html: this.state.html
        }
      })) : null);
    }
  }]);

  return EditorsKitDocs;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (EditorsKitDocs);

/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _docs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./docs */ "./src/admin/docs/index.js");
/* harmony import */ var _extensions_components_manager_components_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../extensions/components/manager/components/manager */ "./src/extensions/components/manager/components/manager.js");
/* harmony import */ var _block_manager___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block-manager/ */ "./src/admin/block-manager/index.js");
/* harmony import */ var _addon_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addon-settings */ "./src/admin/addon-settings.js");
/* harmony import */ var _notices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notices */ "./src/admin/notices.js");







/**
 * Internal dependencies
 */





/**
 * WordPress dependencies
 */

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
var registerCoreBlocks = wp.blockLibrary.registerCoreBlocks;
var hasFilter = wp.hooks.hasFilter;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component,
    RawHTML = _wp$element.RawHTML,
    render = _wp$element.render;
var _wp$components = wp.components,
    TabPanel = _wp$components.TabPanel,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Button = _wp$components.Button;

var EditorsKitSettings =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(EditorsKitSettings, _Component);

  function EditorsKitSettings() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorsKitSettings);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EditorsKitSettings).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorsKitSettings, [{
    key: "render",
    value: function render() {
      var tabs = [{
        name: 'ek-getting-started',
        title: __('Getting Started', 'block-options'),
        className: 'ek-settings-getting-started'
      }, {
        name: 'ek-docs',
        title: __('Tutorial and Docs', 'block-options'),
        className: 'ek-settings-docs'
      }, {
        name: 'ek-features-manager',
        title: __('Features Manager', 'block-options'),
        className: 'ek-settings-features-manager'
      }, {
        name: 'ek-blocks-manager',
        title: __('Blocks Manager', 'block-options'),
        className: 'ek-settings-blocks-manager'
      }];
      tabs.push({
        name: 'ek-addons',
        title: __('Extensions', 'block-options'),
        className: 'ek-settings-addons'
      });

      var EditorsKitSettingsPanel = function EditorsKitSettingsPanel() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TabPanel, {
          className: "editorskit-settings-tab-panel",
          activeClass: "active-tab",
          tabs: tabs
        }, function (tab) {
          switch (tab.name) {
            case 'ek-getting-started':
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
                className: "editorskit-started-items-wrapper"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
                className: "editorskit-started-item"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, __('EditorsKit provides set of tools to extend the way you are building content on WordPress Gutenberg block editor. Designed and integrated to help users easily navigate; and control each block the way it should be.', 'block-options'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
                className: "editorskit-started-item"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("iframe", {
                title: __('EditorsKit video preview', 'block-options'),
                width: "560",
                height: "380",
                src: "https://www.youtube.com/embed/QWgO4lAJAlE",
                frameBorder: "0",
                allowFullScreen: true
              })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
                className: "editorskit-started-item"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RawHTML, null, sprintf(__('If you have any questions or suggestion, let us know through %1$sTwitter%4$s or our %2$sFacebook community %4$s. Also, %3$ssubscribe to our newsletter%4$s if you want to stay up to date with what\'s new and upcoming at EditorsKit.', 'block-options'), '<a href="https://twitter.com/editorskit" target="_blank">', '<a href="https://www.facebook.com/groups/1306393256173179/" target="_blank">', '<a href="https://editorskit.com/" target="_blank">', '</a>')))));

            case 'ek-docs':
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_docs__WEBPACK_IMPORTED_MODULE_6__["default"], null);

            case 'ek-features-manager':
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, __('All features are active by default but you have complete control over each one of them. Disable any features do not want to use and re-enable them anytime on this page or under the "EditorsKit Settings" on Gutenberg editor. Just uncheck the box and it will automatically be saved.', 'block-options')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
                className: "editorskit-features-manager-items-wrapper"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_extensions_components_manager_components_manager__WEBPACK_IMPORTED_MODULE_7__["default"], null)));

            case 'ek-blocks-manager':
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, __('Manage each individual blocks! You can enable or disable any blocks you want and it will be reflected on Gutenberg block manager settings. Just uncheck the box and it will automatically be saved.', 'block-options')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_block_manager___WEBPACK_IMPORTED_MODULE_8__["default"], null));

            case 'ek-addons':
              if (!hasFilter('editorskit.addOn.extraPanel')) {
                return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
                  className: "ek-addons-list"
                }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
                  className: "ek-extension"
                }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", {
                  className: "edd-extension-title"
                }, __('Typography and Google Fonts', 'block-options')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, __('Easily define typography on your WordPress posts and pages directly on the Gutenberg editor. With sets of predefined Google Fonts combination you can choose from or create your own to best match your website\'s branding.', 'block-options')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
                  isDefault: true,
                  isSecondary: true,
                  href: "https://editorskit.com/wordpress-gutenberg-editor-typography-and-google-fonts-add-on/",
                  target: "_blank"
                }, __('Get this Extension', 'block-options')))));
              }

              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_addon_settings__WEBPACK_IMPORTED_MODULE_9__["default"], null);
          }
        });
      };

      var MainPanel = function MainPanel() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Panel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
          opened: true
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: "components-panel__header"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", {
          className: "editorskit-panel__header-hint"
        }, __('Settings → EditorsKit', 'block-options')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", null, __('Getting Started with', 'block-options'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, "EditorsKit"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("code", null, window.editorskitSettings.version)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, __('Congratulations! You\'ve just unlocked more Gutenberg block editor tools for easier editing and better workflow. Check more information about the plugin below and please make sure to navigate through "Tutorials and Docs" tab to learn more on how to use each available features.', 'block-options'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(EditorsKitSettingsPanel, null))));
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MainPanel, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_notices__WEBPACK_IMPORTED_MODULE_10__["default"], null));
    }
  }]);

  return EditorsKitSettings;
}(Component);

wp.domReady(function () {
  registerCoreBlocks();
  render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(EditorsKitSettings, null), document.querySelector('.editorskit-settings-wrap'));
});

/***/ }),

/***/ "./src/admin/notices.js":
/*!******************************!*\
  !*** ./src/admin/notices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Notices; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
var SnackbarList = wp.components.SnackbarList;
function Notices() {
  var notices = useSelect(function (select) {
    return select('core/notices').getNotices().filter(function (notice) {
      return notice.type === 'snackbar';
    });
  }, []);

  var _useDispatch = useDispatch('core/notices'),
      removeNotice = _useDispatch.removeNotice;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SnackbarList, {
    className: "components-editor-notices__snackbar",
    notices: notices,
    onRemove: removeNotice
  });
}

/***/ }),

/***/ "./src/extensions/components/manager/components/manager.js":
/*!*****************************************************************!*\
  !*** ./src/extensions/components/manager/components/manager.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_6__);







/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch,
    select = _wp$data.select;
var compose = wp.compose.compose;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$components = wp.components,
    withSpokenMessages = _wp$components.withSpokenMessages,
    CheckboxControl = _wp$components.CheckboxControl;

var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * Render plugin
 */


var FeaturesManager =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(FeaturesManager, _Component);

  function FeaturesManager() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FeaturesManager);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FeaturesManager).apply(this, arguments));
    _this.state = {
      isOpen: false,
      isUpdated: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FeaturesManager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          editorSettings = _this$props.editorSettings,
          onToggle = _this$props.onToggle;
      var getSettings = editorSettings.editorskit;

      if (typeof getSettings === 'undefined' && typeof window.editorskitSettings !== 'undefined') {
        getSettings = window.editorskitSettings.editor_settings.editorskit;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, lodash_map__WEBPACK_IMPORTED_MODULE_6___default()(getSettings, function (category) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("section", {
          className: "edit-post-options-modal__section"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", {
          className: "edit-post-options-modal__section-title"
        }, category.label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", {
          className: "edit-post-editorskit-manager-modal__checklist"
        }, lodash_map__WEBPACK_IMPORTED_MODULE_6___default()(category.items, function (item) {
          var featureName = 'disableEditorsKit' + capitalize(item.name) + capitalize(category.name);
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
            className: "edit-post-editorskit-manager-modal__checklist-item"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(CheckboxControl, {
            className: "edit-post-options-modal__option",
            label: item.label,
            checked: !wp.data.select('core/edit-post').isFeatureActive(featureName),
            onChange: function onChange() {
              onToggle(category.name, item.name);

              _this2.setState({
                isUpdated: !_this2.state.isUpdated
              });
            }
          }));
        })));
      }));
    }
  }]);

  return FeaturesManager;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function () {
  return {
    editorSettings: select('core/editor').getEditorSettings(),
    preferences: select('core/edit-post').getPreferences()
  };
}), withDispatch(function (dispatch) {
  return {
    onToggle: function onToggle(category, item) {
      dispatch('core/edit-post').toggleFeature('disableEditorsKit' + capitalize(item) + capitalize(category));
    }
  };
}), withSpokenMessages])(FeaturesManager));

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=settings.js.map