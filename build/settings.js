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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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

var TypographyDropdownMenu = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TypographyDropdownMenu, _Component);

  var _super = _createSuper(TypographyDropdownMenu);

  function TypographyDropdownMenu() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TypographyDropdownMenu);

    _this = _super.apply(this, arguments);
    _this.duplicateFont = _this.duplicateFont.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__);
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












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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

var TypographySelection = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(TypographySelection, _Component);

  var _super = _createSuper(TypographySelection);

  function TypographySelection() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, TypographySelection);

    _this = _super.apply(this, arguments);
    _this.onToggle = _this.onToggle.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onDelete = _this.onDelete.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onSetDefault = _this.onSetDefault.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.createMeta = _this.createMeta.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.createCSS = _this.createCSS.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.setVariables = _this.setVariables.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.saveMeta = _this.saveMeta.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.updateState = _this.updateState.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.getValue = _this.getValue.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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

var UnitControl = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(UnitControl, _Component);

  var _super = _createSuper(UnitControl);

  function UnitControl() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UnitControl);

    return _super.apply(this, arguments);
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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon */ "./src/admin/docs/icon.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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

var EditorsKitDocs = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorsKitDocs, _Component);

  var _super = _createSuper(EditorsKitDocs);

  function EditorsKitDocs() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorsKitDocs);

    _this = _super.apply(this, arguments);
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
      }, {
        title: __('Using Live Preview & Responsive Toggles', 'block-options'),
        name: 'live-preview-tool.md'
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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _docs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./docs */ "./src/admin/docs/index.js");
/* harmony import */ var _extensions_components_manager_components_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../extensions/components/manager/components/manager */ "./src/extensions/components/manager/components/manager.js");
/* harmony import */ var _block_manager___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block-manager/ */ "./src/admin/block-manager/index.js");
/* harmony import */ var _addon_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addon-settings */ "./src/admin/addon-settings.js");
/* harmony import */ var _notices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notices */ "./src/admin/notices.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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

var EditorsKitSettings = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorsKitSettings, _Component);

  var _super = _createSuper(EditorsKitSettings);

  function EditorsKitSettings() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorsKitSettings);

    return _super.apply(this, arguments);
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);



/**
 * WordPress dependencies
 */






var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var PREFERENCES_MENU = 'preferences-menu';
/**
 * Render plugin
 *
 * @param props
 */

function FeaturesManager(props) {
  var isLargeViewport = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["useViewportMatch"])('medium');

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(PREFERENCES_MENU),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      activeMenu = _useState2[0],
      setActiveMenu = _useState2[1];

  var editorSettings = props.editorSettings,
      onToggle = props.onToggle;
  var getSettings = editorSettings.editorskit;

  if (typeof getSettings === 'undefined' && typeof window.editorskitSettings !== 'undefined') {
    getSettings = window.editorskitSettings.editor_settings.editorskit;
  }

  var tabs = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["map"])(getSettings, function (cat, catName) {
    return {
      title: cat.label,
      name: catName,
      tabLabel: cat.label,
      content: function content() {
        var items = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(getSettings[catName], 'items', {});
        return Object(lodash__WEBPACK_IMPORTED_MODULE_5__["map"])(items, function (item) {
          var featureName = 'disableEditorsKit' + capitalize(item.name) + capitalize(catName);
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
            className: "edit-post-preferences-modal__option",
            label: item.label,
            checked: !wp.data.select('core/edit-post').isFeatureActive(featureName),
            onChange: function onChange() {
              onToggle(catName, item.name);
            }
          });
        });
      }
    };
  });
  var getCurrentTab = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (tab) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(tab.content, null);
  });
  var modalContent = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], {
    tabs: tabs,
    orientation: "vertical",
    className: "edit-post-preferences__tabs"
  }, getCurrentTab);

  if (!isLargeViewport) {
    modalContent = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalNavigation"], {
      activeMenu: activeMenu,
      onActivateMenu: setActiveMenu
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalNavigationMenu"], {
      menu: PREFERENCES_MENU
    }, tabs.map(function (tab) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalNavigationItem"], {
        key: tab.name,
        title: tab.title,
        navigateToMenu: tab.name
      });
    })), tabs.map(function (tab) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalNavigationMenu"], {
        key: "".concat(tab.name, "-menu"),
        menu: tab.name,
        title: tab.tabLabel,
        parentMenu: PREFERENCES_MENU
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalNavigationItem"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(tab.content, null)));
    }));
  }

  return modalContent;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function () {
  return {
    editorSettings: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["select"])('core/editor').getEditorSettings(),
    preferences: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["select"])('core/edit-post').getPreferences()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withDispatch"])(function (dispatch) {
  return {
    onToggle: function onToggle(category, item) {
      dispatch('core/edit-post').toggleFeature('disableEditorsKit' + capitalize(item) + capitalize(category));
    }
  };
}), _wordpress_components__WEBPACK_IMPORTED_MODULE_4__["withSpokenMessages"]])(FeaturesManager));

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=settings.js.map