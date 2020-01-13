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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/devtools.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./src/blocks/lorem/index.js":
/*!***********************************!*\
  !*** ./src/blocks/lorem/index.js ***!
  \***********************************/
/*! exports provided: name, title, icon, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transforms */ "./src/blocks/lorem/transforms.js");
/**
 * Internal dependencies
 */
// import Edit from './components/edit';
// import icon from './icon';

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
/**
 * Block constants
 */

var name = 'lorem';
var icon = 'admin-tools';

var title = __('Lorem Dev Tool', 'block-options');

var blockAttributes = {
  items: {
    type: 'number',
    default: 1
  }
};
var settings = {
  title: title,
  description: __('Create lorem ipsum placeholder paragraph.', 'block-options'),
  attributes: blockAttributes,
  supports: {
    inserter: false
  },
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: function edit() {
    return null;
  },
  save: function save() {
    return null;
  }
};


/***/ }),

/***/ "./src/blocks/lorem/transforms.js":
/*!****************************************!*\
  !*** ./src/blocks/lorem/transforms.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-lorem-ipsum'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var createBlock = wp.blocks.createBlock;
var _wp$data = wp.data,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch;
var transforms = {
  from: [{
    type: 'prefix',
    prefix: ':lorem',
    transform: function transform() {
      return createBlock('core/paragraph', {
        content: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-lorem-ipsum'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()
      });
    }
  }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()([2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (columns) {
    return {
      type: 'prefix',
      prefix: Array(columns + 1).join(':') + 'lorem',
      transform: function transform() {
        var toSelect = [];
        var blockIndex = select('core/block-editor').getBlockInsertionPoint();
        var selectedBlock = select('core/block-editor').getSelectedBlockClientId();

        for (var i = 1; i <= columns; i++) {
          var created = createBlock('core/paragraph', {
            content: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-lorem-ipsum'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()
          });
          dispatch('core/block-editor').insertBlocks(created, parseInt(blockIndex.index) + i - 1);

          if (typeof created !== 'undefined') {
            toSelect.push(created.clientId);
          }
        }

        dispatch('core/block-editor').removeBlock(selectedBlock);
        return dispatch('core/block-editor').multiSelect(toSelect[0], toSelect.reverse()[0]);
      }
    };
  })), [{
    type: 'prefix',
    prefix: ':hlorem',
    transform: function transform() {
      return createBlock('core/heading', {
        content: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-lorem-ipsum'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
          avgSentencesPerParagraph: 1,
          startWithLoremIpsum: false,
          avgWordsPerSentence: 6
        })[0].split('.')[0]
      });
    }
  }], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()([2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (columns) {
    return {
      type: 'prefix',
      prefix: Array(columns + 1).join(':') + 'hlorem',
      transform: function transform() {
        var toSelect = [];
        var blockIndex = select('core/block-editor').getBlockInsertionPoint();
        var selectedBlock = select('core/block-editor').getSelectedBlockClientId();

        for (var i = 1; i <= columns; i++) {
          var created = createBlock('core/heading', {
            content: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-lorem-ipsum'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
              avgSentencesPerParagraph: 1,
              startWithLoremIpsum: false,
              avgWordsPerSentence: 6
            })[0].split('.')[0]
          });
          dispatch('core/block-editor').insertBlocks(created, parseInt(blockIndex.index) + i - 1);

          if (typeof created !== 'undefined') {
            toSelect.push(created.clientId);
          }
        }

        dispatch('core/block-editor').removeBlock(selectedBlock);
        return dispatch('core/block-editor').multiSelect(toSelect[0], toSelect.reverse()[0]);
      }
    };
  })))
};
/* harmony default export */ __webpack_exports__["default"] = (transforms);

/***/ }),

/***/ "./src/devtools.js":
/*!*************************!*\
  !*** ./src/devtools.js ***!
  \*************************/
/*! exports provided: registerBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBlocks", function() { return registerBlocks; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_lorem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/lorem */ "./src/blocks/lorem/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Dev Tools
 *
 */

/**
 * WordPress dependencies
 */
var registerBlockType = wp.blocks.registerBlockType; // Register Blocks


function registerBlocks() {
  [_blocks_lorem__WEBPACK_IMPORTED_MODULE_1__].forEach(function (block) {
    if (!block) {
      return;
    }

    var name = block.name,
        settings = block.settings;
    registerBlockType("editorskit/".concat(name), _objectSpread({
      category: 'common'
    }, settings));
  });
}
registerBlocks();

/***/ })

/******/ });
//# sourceMappingURL=devtools.js.map