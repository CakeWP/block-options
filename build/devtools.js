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
  supports: {// inserter: false,
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


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var createBlock = wp.blocks.createBlock;
var _wp$data = wp.data,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch;
var loremIpsum = {
  1: __('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'block-options'),
  2: __('Enim facilisis gravida neque convallis a cras semper. Vulputate mi sit amet mauris commodo quis. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Velit ut tortor pretium viverra suspendisse potenti. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Curabitur vitae nunc sed velit dignissim sodales ut. Platea dictumst vestibulum rhoncus est. Auctor eu augue ut lectus arcu bibendum. Lacus suspendisse faucibus interdum posuere lorem. Risus pretium quam vulputate dignissim. Eu consequat ac felis donec. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Pharetra vel turpis nunc eget lorem dolor. Cursus risus at ultrices mi. Lacinia at quis risus sed vulputate odio. A diam maecenas sed enim ut sem viverra aliquet eget.', 'block-options'),
  3: __('Eu sem integer vitae justo. Aliquam faucibus purus in massa tempor. Quis enim lobortis scelerisque fermentum dui faucibus in. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Diam sit amet nisl suscipit. Massa id neque aliquam vestibulum morbi blandit cursus risus. Non quam lacus suspendisse faucibus interdum posuere. Diam vel quam elementum pulvinar etiam non. Sem integer vitae justo eget magna fermentum. Iaculis nunc sed augue lacus viverra. Posuere ac ut consequat semper viverra nam libero justo. Dignissim diam quis enim lobortis scelerisque fermentum dui. Ut enim blandit volutpat maecenas volutpat. Cursus vitae congue mauris rhoncus. Turpis tincidunt id aliquet risus. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Non tellus orci ac auctor augue mauris augue neque. Neque sodales ut etiam sit amet nisl purus in mollis.', 'block-options'),
  4: __('Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Risus commodo viverra maecenas accumsan lacus vel. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Id aliquet lectus proin nibh nisl condimentum id. A cras semper auctor neque. Enim facilisis gravida neque convallis a. Feugiat in fermentum posuere urna nec. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Turpis in eu mi bibendum neque egestas congue. Mattis aliquam faucibus purus in massa. In tellus integer feugiat scelerisque varius. Eu sem integer vitae justo eget magna. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui.', 'block-options'),
  5: __('Eros donec ac odio tempor orci dapibus ultrices. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Et ligula ullamcorper malesuada proin libero. Magna fermentum iaculis eu non diam phasellus vestibulum. Quisque non tellus orci ac auctor. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Bibendum neque egestas congue quisque egestas diam in arcu. In nisl nisi scelerisque eu. Vulputate sapien nec sagittis aliquam malesuada bibendum. Sapien faucibus et molestie ac feugiat sed lectus. Cras fermentum odio eu feugiat pretium nibh ipsum. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius.', 'block-options'),
  6: __('Lobortis mattis aliquam faucibus purus in massa. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Mauris cursus mattis molestie a iaculis. Varius vel pharetra vel turpis nunc eget. Turpis egestas integer eget aliquet nibh praesent. Sit amet est placerat in. Dui nunc mattis enim ut tellus elementum. Fermentum odio eu feugiat pretium nibh ipsum. Blandit turpis cursus in hac habitasse. Cursus eget nunc scelerisque viverra. Praesent tristique magna sit amet purus. Senectus et netus et malesuada fames. Dui nunc mattis enim ut tellus elementum sagittis vitae. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Justo laoreet sit amet cursus sit amet. Scelerisque in dictum non consectetur. Suscipit adipiscing bibendum est ultricies.', 'block-options'),
  7: __('Facilisi morbi tempus iaculis urna id volutpat lacus. Etiam dignissim diam quis enim. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Lacus vel facilisis volutpat est velit egestas dui. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Hendrerit dolor magna eget est lorem ipsum dolor sit. Vitae purus faucibus ornare suspendisse. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Donec ac odio tempor orci dapibus. Tempor orci eu lobortis elementum nibh. Elementum sagittis vitae et leo duis ut diam quam. Venenatis cras sed felis eget. Dignissim diam quis enim lobortis scelerisque fermentum dui.', 'block-options'),
  8: __('Pretium nibh ipsum consequat nisl vel. Orci ac auctor augue mauris augue neque gravida in. Justo nec ultrices dui sapien eget. Dictum non consectetur a erat nam at lectus. Dui id ornare arcu odio ut sem nulla pharetra. Enim neque volutpat ac tincidunt vitae. Auctor augue mauris augue neque gravida. Gravida dictum fusce ut placerat orci nulla pellentesque. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Nunc mi ipsum faucibus vitae aliquet. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Commodo elit at imperdiet dui accumsan sit amet. Tempor id eu nisl nunc mi ipsum faucibus. Euismod lacinia at quis risus sed. Diam phasellus vestibulum lorem sed risus ultricies. Elementum curabitur vitae nunc sed velit. Viverra justo nec ultrices dui sapien eget mi.', 'block-options'),
  9: __('Venenatis lectus magna fringilla urna. Scelerisque felis imperdiet proin fermentum leo vel. Facilisi morbi tempus iaculis urna id. Diam quam nulla porttitor massa id neque aliquam. Etiam non quam lacus suspendisse faucibus. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Quam nulla porttitor massa id neque. Mauris cursus mattis molestie a. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Aenean euismod elementum nisi quis eleifend quam adipiscing. Diam volutpat commodo sed egestas egestas. Id aliquet lectus proin nibh nisl condimentum.', 'block-options'),
  10: __('Sit amet venenatis urna cursus eget nunc scelerisque viverra. Lobortis elementum nibh tellus molestie. Varius quam quisque id diam vel. Pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet nisl suscipit adipiscing bibendum est ultricies. Malesuada fames ac turpis egestas. Nisi vitae suscipit tellus mauris a diam maecenas sed. Odio euismod lacinia at quis risus sed. Tellus elementum sagittis vitae et leo duis. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. A lacus vestibulum sed arcu non odio euismod lacinia. Sapien et ligula ullamcorper malesuada proin libero nunc. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Vitae tortor condimentum lacinia quis. Orci ac auctor augue mauris augue neque gravida in. Tincidunt augue interdum velit euismod in. Auctor eu augue ut lectus arcu bibendum at varius.', 'block-options')
};
var transforms = {
  from: [{
    type: 'prefix',
    prefix: ':lorem',
    transform: function transform() {
      return createBlock('core/paragraph', {
        content: loremIpsum[1]
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
            content: loremIpsum[i]
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