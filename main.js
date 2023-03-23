/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --sidebar-gray: rgb(104, 102, 102);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Helvetica, sans-serif;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n.content {\n  display: flex;\n  padding: 0px;\n}\n\n.project{\n  margin: 10px;\n\n}\n\n.p-heading {\n  font-weight: bold;\n  \n  \n}\n\n.task-min{\n  \n  padding: 8px 0px 8px 0px;\n  display: flex;\n  align-items: start;\n  \n}\n\n.task-name-date{\n  margin-left: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.checkbox {\n  margin: 4px 0px 0px 0px;\n}\n\n.task-name {\n  flex-basis: 1;\n}\n\n.task-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n\n.date-div, .priority-div {\n  font-size: 11px;\n  color: rgb(102, 101, 101);\n  margin-left: 6px;\n}\n\n.priority-delete {\n  display: flex;\n  gap: 12px;\n}\n\n.priority-div{\n  display: flex;\n  align-items: center;\n}\n.expand {\n  display:none;\n}\n\n.expand.active {\n  display: block;\n}\n\n.desc {\n  padding: 20px 26px 20px 26px;\n  color:rgb(72, 71, 71);\n  font-size: 15px;\n}\n\n.task-container {\n  margin: 12px 0px 12px 0px;\n  max-width: 650px;\n  display: flex;\n  flex-direction: column;\n  \n  gap:6px;\n  \n  \n}\n\n.task {\n  margin: 6px 0px 6px 0px;\n  padding: 10px 20px 10px 20px;\n  border: 1px rgb(102, 101, 101) solid;\n  border-radius: 16px;\n  box-shadow: 2px 2px 8px rgb(200, 197, 197);\n}\n\n.main {\n  margin-left: 10px;\n  \n  padding-top: 20px;\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding-right: 20px;\n  max-width: 650px;\n}\n\n.sidebar {\n  background-color: var(--sidebar-gray);\n  height:100vh;\n  flex-basis: 25%;\n  max-width: 320px;\n  margin-right: 12px;\n display: flex;\n flex-direction: column;\n padding-top: 12px;\n}\n\n.instr {\n  padding:12px;\n}\n\nbutton {\n  text-align: start;\n  display: inline-block;\n    border: none;\n    padding: .5rem 2rem;\n    margin: 0;\n    text-decoration: none;\n    background: var(--sidebar-gray);\n    color: #ffffff;\n    font-family: sans-serif;\n    font-size: 1rem;\n    cursor: pointer;\n    text-align: start;\n    transition: background 250ms ease-in-out, \n                transform 150ms ease;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\nbutton:hover,\nbutton:focus {\n    background: #0053ba;\n}\n\nbutton:focus {\n    outline: 1px solid #fff;\n    outline-offset: -4px;\n}\n\nbutton:active {\n    transform: scale(0.99);\n}\n\n.delete-div, .edit-div, .add-task-button {\n  padding: .25rem .5rem;\n  font-size: 12px;\n}\n\n.task-checked {\n  text-decoration: line-through;\n}\n\n.darken-div {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(44, 43, 43, 0.5);\n  height: 100vh;\n  width: 100vw\n}\n\n.darken {\n  display:block\n}\n\n.popup {\n  visibility: hidden;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  padding: 20px;\n}\n\n.show-popup {\n  visibility: visible;\n}\n\n.form-container input[type=text], .form-container textarea {\n  padding: 10px;\n  border: none;\n  background-color: #cbdaed;\n}\n\n.form-container input[type=text], .form-container textarea, .form-container select{\n  margin: 4px 0px 12px 0px;\n  border: none;\n  background-color: #cbdaed;\n}\n\n.add-task-button{\n  align-self: self-start;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;AACpC;;AAEA;;;EAGE,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,0KAA0K;AAC5K;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;;AAEd;;AAEA;EACE,iBAAiB;;;AAGnB;;AAEA;;EAEE,wBAAwB;EACxB,aAAa;EACb,kBAAkB;;AAEpB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,4BAA4B;EAC5B,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;;EAEtB,OAAO;;;AAGT;;AAEA;EACE,uBAAuB;EACvB,4BAA4B;EAC5B,oCAAoC;EACpC,mBAAmB;EACnB,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;;EAEjB,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,uBAAuB;;AAEzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,qCAAqC;EACrC,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;CACnB,aAAa;CACb,sBAAsB;CACtB,iBAAiB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;IACnB,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,qBAAqB;IACrB,+BAA+B;IAC/B,cAAc;IACd,uBAAuB;IACvB,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB;oCACgC;IAChC,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,uCAAuC;EACvC,aAAa;EACb;AACF;;AAEA;EACE;AACF;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":[":root {\n  --sidebar-gray: rgb(104, 102, 102);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Helvetica, sans-serif;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n.content {\n  display: flex;\n  padding: 0px;\n}\n\n.project{\n  margin: 10px;\n\n}\n\n.p-heading {\n  font-weight: bold;\n  \n  \n}\n\n.task-min{\n  \n  padding: 8px 0px 8px 0px;\n  display: flex;\n  align-items: start;\n  \n}\n\n.task-name-date{\n  margin-left: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.checkbox {\n  margin: 4px 0px 0px 0px;\n}\n\n.task-name {\n  flex-basis: 1;\n}\n\n.task-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n\n.date-div, .priority-div {\n  font-size: 11px;\n  color: rgb(102, 101, 101);\n  margin-left: 6px;\n}\n\n.priority-delete {\n  display: flex;\n  gap: 12px;\n}\n\n.priority-div{\n  display: flex;\n  align-items: center;\n}\n.expand {\n  display:none;\n}\n\n.expand.active {\n  display: block;\n}\n\n.desc {\n  padding: 20px 26px 20px 26px;\n  color:rgb(72, 71, 71);\n  font-size: 15px;\n}\n\n.task-container {\n  margin: 12px 0px 12px 0px;\n  max-width: 650px;\n  display: flex;\n  flex-direction: column;\n  \n  gap:6px;\n  \n  \n}\n\n.task {\n  margin: 6px 0px 6px 0px;\n  padding: 10px 20px 10px 20px;\n  border: 1px rgb(102, 101, 101) solid;\n  border-radius: 16px;\n  box-shadow: 2px 2px 8px rgb(200, 197, 197);\n}\n\n.main {\n  margin-left: 10px;\n  \n  padding-top: 20px;\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding-right: 20px;\n  max-width: 650px;\n}\n\n.sidebar {\n  background-color: var(--sidebar-gray);\n  height:100vh;\n  flex-basis: 25%;\n  max-width: 320px;\n  margin-right: 12px;\n display: flex;\n flex-direction: column;\n padding-top: 12px;\n}\n\n.instr {\n  padding:12px;\n}\n\nbutton {\n  text-align: start;\n  display: inline-block;\n    border: none;\n    padding: .5rem 2rem;\n    margin: 0;\n    text-decoration: none;\n    background: var(--sidebar-gray);\n    color: #ffffff;\n    font-family: sans-serif;\n    font-size: 1rem;\n    cursor: pointer;\n    text-align: start;\n    transition: background 250ms ease-in-out, \n                transform 150ms ease;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\nbutton:hover,\nbutton:focus {\n    background: #0053ba;\n}\n\nbutton:focus {\n    outline: 1px solid #fff;\n    outline-offset: -4px;\n}\n\nbutton:active {\n    transform: scale(0.99);\n}\n\n.delete-div, .edit-div, .add-task-button {\n  padding: .25rem .5rem;\n  font-size: 12px;\n}\n\n.task-checked {\n  text-decoration: line-through;\n}\n\n.darken-div {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(44, 43, 43, 0.5);\n  height: 100vh;\n  width: 100vw\n}\n\n.darken {\n  display:block\n}\n\n.popup {\n  visibility: hidden;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  padding: 20px;\n}\n\n.show-popup {\n  visibility: visible;\n}\n\n.form-container input[type=text], .form-container textarea {\n  padding: 10px;\n  border: none;\n  background-color: #cbdaed;\n}\n\n.form-container input[type=text], .form-container textarea, .form-container select{\n  margin: 4px 0px 12px 0px;\n  border: none;\n  background-color: #cbdaed;\n}\n\n.add-task-button{\n  align-self: self-start;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/short-unique-id/dist/short-unique-id.js":
/*!**************************************************************!*\
  !*** ./node_modules/short-unique-id/dist/short-unique-id.js ***!
  \**************************************************************/
/***/ ((module) => {

var ShortUniqueId = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    DEFAULT_UUID_LENGTH: () => DEFAULT_UUID_LENGTH,
    default: () => ShortUniqueId
  });

  // package.json
  var version = "4.4.4";

  // src/index.ts
  var DEFAULT_UUID_LENGTH = 6;
  var DEFAULT_OPTIONS = {
    dictionary: "alphanum",
    shuffle: true,
    debug: false,
    length: DEFAULT_UUID_LENGTH
  };
  var _ShortUniqueId = class extends Function {
    constructor(argOptions = {}) {
      super();
      this.dictIndex = 0;
      this.dictRange = [];
      this.lowerBound = 0;
      this.upperBound = 0;
      this.dictLength = 0;
      this._digit_first_ascii = 48;
      this._digit_last_ascii = 58;
      this._alpha_lower_first_ascii = 97;
      this._alpha_lower_last_ascii = 123;
      this._hex_last_ascii = 103;
      this._alpha_upper_first_ascii = 65;
      this._alpha_upper_last_ascii = 91;
      this._number_dict_ranges = {
        digits: [this._digit_first_ascii, this._digit_last_ascii]
      };
      this._alpha_dict_ranges = {
        lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
        upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
      };
      this._alpha_lower_dict_ranges = {
        lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
      };
      this._alpha_upper_dict_ranges = {
        upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
      };
      this._alphanum_dict_ranges = {
        digits: [this._digit_first_ascii, this._digit_last_ascii],
        lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
        upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
      };
      this._alphanum_lower_dict_ranges = {
        digits: [this._digit_first_ascii, this._digit_last_ascii],
        lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
      };
      this._alphanum_upper_dict_ranges = {
        digits: [this._digit_first_ascii, this._digit_last_ascii],
        upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
      };
      this._hex_dict_ranges = {
        decDigits: [this._digit_first_ascii, this._digit_last_ascii],
        alphaDigits: [this._alpha_lower_first_ascii, this._hex_last_ascii]
      };
      this.log = (...args) => {
        const finalArgs = [...args];
        finalArgs[0] = `[short-unique-id] ${args[0]}`;
        if (this.debug === true) {
          if (typeof console !== "undefined" && console !== null) {
            return console.log(...finalArgs);
          }
        }
      };
      this.setDictionary = (dictionary, shuffle) => {
        let finalDict;
        if (dictionary && Array.isArray(dictionary) && dictionary.length > 1) {
          finalDict = dictionary;
        } else {
          finalDict = [];
          let i;
          this.dictIndex = i = 0;
          const rangesName = `_${dictionary}_dict_ranges`;
          const ranges = this[rangesName];
          Object.keys(ranges).forEach((rangeType) => {
            const rangeTypeKey = rangeType;
            this.dictRange = ranges[rangeTypeKey];
            this.lowerBound = this.dictRange[0];
            this.upperBound = this.dictRange[1];
            for (this.dictIndex = i = this.lowerBound; this.lowerBound <= this.upperBound ? i < this.upperBound : i > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? i += 1 : i -= 1) {
              finalDict.push(String.fromCharCode(this.dictIndex));
            }
          });
        }
        if (shuffle) {
          const PROBABILITY = 0.5;
          finalDict = finalDict.sort(() => Math.random() - PROBABILITY);
        }
        this.dict = finalDict;
        this.dictLength = this.dict.length;
        this.counter = 0;
      };
      this.seq = () => {
        return this.sequentialUUID();
      };
      this.sequentialUUID = () => {
        let counterDiv;
        let counterRem;
        let id = "";
        counterDiv = this.counter;
        do {
          counterRem = counterDiv % this.dictLength;
          counterDiv = Math.trunc(counterDiv / this.dictLength);
          id += this.dict[counterRem];
        } while (counterDiv !== 0);
        this.counter += 1;
        return id;
      };
      this.randomUUID = (uuidLength = this.uuidLength || DEFAULT_UUID_LENGTH) => {
        let id;
        let randomPartIdx;
        let j;
        if (uuidLength === null || typeof uuidLength === "undefined" || uuidLength < 1) {
          throw new Error("Invalid UUID Length Provided");
        }
        const isPositive = uuidLength >= 0;
        id = "";
        for (j = 0; j < uuidLength; j += 1) {
          randomPartIdx = parseInt((Math.random() * this.dictLength).toFixed(0), 10) % this.dictLength;
          id += this.dict[randomPartIdx];
        }
        return id;
      };
      this.availableUUIDs = (uuidLength = this.uuidLength) => {
        return parseFloat(Math.pow([...new Set(this.dict)].length, uuidLength).toFixed(0));
      };
      this.approxMaxBeforeCollision = (rounds = this.availableUUIDs(this.uuidLength)) => {
        return parseFloat(Math.sqrt(Math.PI / 2 * rounds).toFixed(20));
      };
      this.collisionProbability = (rounds = this.availableUUIDs(this.uuidLength), uuidLength = this.uuidLength) => {
        return parseFloat((this.approxMaxBeforeCollision(rounds) / this.availableUUIDs(uuidLength)).toFixed(20));
      };
      this.uniqueness = (rounds = this.availableUUIDs(this.uuidLength)) => {
        const score = parseFloat((1 - this.approxMaxBeforeCollision(rounds) / rounds).toFixed(20));
        return score > 1 ? 1 : score < 0 ? 0 : score;
      };
      this.getVersion = () => {
        return this.version;
      };
      this.stamp = (finalLength) => {
        if (typeof finalLength !== "number" || finalLength < 10) {
          throw new Error("Param finalLength must be number greater than 10");
        }
        const hexStamp = Math.floor(+new Date() / 1e3).toString(16);
        const idLength = finalLength - 9;
        const rndIdx = Math.round(Math.random() * (idLength > 15 ? 15 : idLength));
        const id = this.randomUUID(idLength);
        return `${id.substr(0, rndIdx)}${hexStamp}${id.substr(rndIdx)}${rndIdx.toString(16)}`;
      };
      this.parseStamp = (stamp) => {
        if (stamp.length < 10) {
          throw new Error("Stamp length invalid");
        }
        const rndIdx = parseInt(stamp.substr(stamp.length - 1, 1), 16);
        return new Date(parseInt(stamp.substr(rndIdx, 8), 16) * 1e3);
      };
      const options = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS), argOptions);
      this.counter = 0;
      this.debug = false;
      this.dict = [];
      this.version = version;
      const {
        dictionary,
        shuffle,
        length
      } = options;
      this.uuidLength = length;
      this.setDictionary(dictionary, shuffle);
      this.debug = options.debug;
      this.log(this.dict);
      this.log(`Generator instantiated with Dictionary Size ${this.dictLength}`);
      return new Proxy(this, {
        apply: (target, that, args) => this.randomUUID(...args)
      });
    }
  };
  var ShortUniqueId = _ShortUniqueId;
  ShortUniqueId.default = _ShortUniqueId;
  return src_exports;
})();
//# sourceMappingURL=short-unique-id.js.map
 true&&(module.exports=ShortUniqueId.default),'undefined'!=typeof window&&(ShortUniqueId=ShortUniqueId.default);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectFactory": () => (/* binding */ ProjectFactory),
/* harmony export */   "ToDoFactory": () => (/* binding */ ToDoFactory),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "toDoList": () => (/* binding */ toDoList)
/* harmony export */ });
const ShortUniqueId = __webpack_require__(/*! short-unique-id */ "./node_modules/short-unique-id/dist/short-unique-id.js");
const uid = new ShortUniqueId({ length: 16 });

const pList = [];

const projectList = () => {
  return pList;
};

const ProjectFactory = (name) => {
  pList.push({ name });
};

const tList = [];

const toDoList = () => {
  return tList;
};

const ToDoFactory = (action, project, desc, date, priority) => {
  const taskId = uid();
  tList.push({
    action,
    taskId,
    complete: false,
    project,
    desc,
    date,
    priority,
  });
};




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/todos.js");



//interaction
(0,_todos__WEBPACK_IMPORTED_MODULE_1__.ProjectFactory)('Home');
(0,_todos__WEBPACK_IMPORTED_MODULE_1__.ProjectFactory)('Hardware Store');
(0,_todos__WEBPACK_IMPORTED_MODULE_1__.ProjectFactory)('test');
(0,_todos__WEBPACK_IMPORTED_MODULE_1__.ProjectFactory)('butterf;y');
(0,_todos__WEBPACK_IMPORTED_MODULE_1__.ProjectFactory)('Misc');

(0,_todos__WEBPACK_IMPORTED_MODULE_1__.ToDoFactory)('test action', 'test', '', '', '');
(0,_todos__WEBPACK_IMPORTED_MODULE_1__.ToDoFactory)(
  'Wash the dishes',
  'Home',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Thursday',
  'High priority'
);
(0,_todos__WEBPACK_IMPORTED_MODULE_1__.ToDoFactory)('Buy shop towels', 'Hardware Store', '', '', '');
(0,_todos__WEBPACK_IMPORTED_MODULE_1__.ToDoFactory)('Sweep the floor', 'Home', '', '', '');
console.log((0,_todos__WEBPACK_IMPORTED_MODULE_1__.projectList)());
console.log((0,_todos__WEBPACK_IMPORTED_MODULE_1__.toDoList)());

const ScreenController = () => {
  const content = document.querySelector('.content');

  //state of main
  let selection = 'Home';
  const pList = (0,_todos__WEBPACK_IMPORTED_MODULE_1__.projectList)();
  const tList = (0,_todos__WEBPACK_IMPORTED_MODULE_1__.toDoList)();
  const activeTList = () => tList.filter((x) => x.remove == false || !x.remove);

  const allProjectsText = 'All Projects';

  const resetMain = (selection) => {
    const main = document.querySelector('.main');
    content.removeChild(main);
    updateMain(selection);
  };

  const selectProject = (e) => {
    //remove active class from all divs
    //add active class to selected div

    //pass selected project to update main
    selection = e.target.innerText;
    resetMain(selection);
  };

  const addTask = () => {
    //evt.preventDefault();
    const task = document.getElementById('task').value;
    const project = document.getElementById('project').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const desc = document.getElementById('desc').value;
    //enter parameters
    (0,_todos__WEBPACK_IMPORTED_MODULE_1__.ToDoFactory)(task, project, desc, date, priority);
    console.log(tList);
    resetMain(selection);

    // const form = document.getElementById("myForm");
    // form.reset();
  };

  const removePopup = () => {
    //remove darken class
    darkenDiv.classList.remove('darken');
    //remove show popup class
    const popup = document.querySelector('.popup');
    popup.classList.remove('show-popup');
    content.removeChild(popup);
  };

  const darkenDiv = document.createElement('div');
  darkenDiv.classList.add('darken-div');
  content.appendChild(darkenDiv);
  darkenDiv.addEventListener('click', removePopup);

  const editTask = (e) => {
    const taskToEdit = tList.find((x) => x.taskId == e.target.dataset.taskId);
    //replace key/values with popup entries
    taskToEdit.action = document.getElementById('task').value;
    taskToEdit.project = document.getElementById('project').value;
    taskToEdit.date = document.getElementById('date').value;
    taskToEdit.priority = document.getElementById('priority').value;
    taskToEdit.desc = document.getElementById('desc').value;

    console.log('edit popup for', taskToEdit);
  };

  const showEditPopup = (e) => {
    const taskToEdit = tList.find((x) => x.taskId == e.target.dataset.taskId);
    showPopup(e);
    //prefill existing values
    document.getElementById('task').value = taskToEdit.action;
    document.getElementById('project').value = taskToEdit.project;
    document.getElementById('date').value = taskToEdit.date;
    document.getElementById('priority').option = taskToEdit.priority;
    document.getElementById('desc').value = taskToEdit.desc;

    const createPopupEditButton = () => {
      const popup = document.querySelector('.popup');
      const taskSubmit = document.createElement('button');
      taskSubmit.type = 'submit';
      taskSubmit.innerText = 'Save';
      taskSubmit.id = 'submit';
      popup.appendChild(taskSubmit);
      taskSubmit.addEventListener('click', () => {
        editTask(e);
        removePopup();
        resetMain(selection);
      });
    };

    createPopupEditButton();
  };

  const showAddPopup = (e) => {
    showPopup(e);
    const createPopupButton = () => {
      const popup = document.querySelector('.popup');
      const taskSubmit = document.createElement('button');
      taskSubmit.type = 'submit';
      taskSubmit.innerText = 'Add';
      taskSubmit.id = 'submit';
      popup.appendChild(taskSubmit);
      taskSubmit.addEventListener('click', () => {
        addTask();
        removePopup();
        resetMain(selection);
      });
    };

    createPopupButton();
  };

  const showPopup = (e) => {
    //add .darken to darkenDiv
    darkenDiv.classList.add('darken');

    createPopup(e);
    //add .show-popup to popup
    const popup = document.querySelector('.popup');
    popup.classList.add('show-popup');
  };

  const createPopup = (e) => {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.setAttribute('id', 'myForm');
    content.appendChild(popup);

    const taskForm = document.createElement('form');
    taskForm.classList.add('form-container');
    popup.appendChild(taskForm);

    const taskLabel = document.createElement('label');
    taskLabel.for = 'task';
    taskLabel.innerText = 'Task';
    taskForm.appendChild(taskLabel);
    taskForm.appendChild(document.createElement('br'));

    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.placeholder = 'Enter Task';
    taskInput.id = 'task';
    //taskInput.name = 'task';
    taskForm.appendChild(taskInput);
    taskForm.appendChild(document.createElement('br'));

    const projectLabel = document.createElement('label');
    projectLabel.for = 'project';
    projectLabel.innerText = 'Project';
    taskForm.appendChild(projectLabel);
    taskForm.appendChild(document.createElement('br'));

    const projectInput = document.createElement('select');
    projectInput.id = 'project';
    taskForm.appendChild(projectInput);

    const projectsToOptions = (e, array) => {
      //create option elements for each item in the array
      array.forEach((x) => {
        const option = document.createElement('option');
        option.innerText = `${x.name}`;
        if (x.name == e.target.dataset.project) {
          option.selected = true;
        }
        projectInput.appendChild(option);
      });
    };

    projectsToOptions(e, pList);
    taskForm.appendChild(document.createElement('br'));

    const dateLabel = document.createElement('label');
    dateLabel.for = 'date';
    dateLabel.innerText = 'Timeframe';
    taskForm.appendChild(dateLabel);
    taskForm.appendChild(document.createElement('br'));

    const dateInput = document.createElement('input');
    dateInput.type = 'text';
    dateInput.placeholder = 'Enter Timeframe';
    dateInput.id = 'date';
    dateInput.name = 'date';
    taskForm.appendChild(dateInput);
    taskForm.appendChild(document.createElement('br'));

    const priorityLabel = document.createElement('label');
    priorityLabel.for = 'priority';
    priorityLabel.innerText = 'Priority Level';
    taskForm.appendChild(priorityLabel);
    taskForm.appendChild(document.createElement('br'));

    const priorityInput = document.createElement('select');
    priorityInput.id = 'priority';
    taskForm.appendChild(priorityInput);

    const normalPriority = document.createElement('option');
    normalPriority.innerText = 'Normal Priority';
    priorityInput.appendChild(normalPriority);
    taskForm.appendChild(document.createElement('br'));

    const mediumPriority = document.createElement('option');
    mediumPriority.innerText = 'Medium Priority';
    priorityInput.appendChild(mediumPriority);

    const highPriority = document.createElement('option');
    highPriority.innerText = 'High Priority';
    priorityInput.appendChild(highPriority);

    const descLabel = document.createElement('label');
    descLabel.for = 'desc';
    descLabel.innerText = 'Description';
    taskForm.appendChild(descLabel);
    taskForm.appendChild(document.createElement('br'));

    const descInput = document.createElement('textarea');
    descInput.id = 'desc';
    descInput.name = 'desc';
    descInput.rows = '5';
    descInput.cols = '33';
    descInput.placeholder = 'Enter Description';
    taskForm.appendChild(descInput);
    taskForm.appendChild(document.createElement('br'));
  };

  function updateMain(s) {
    //create a main to be removed
    const main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(main);
    //create container to help with page layout
    const container = document.createElement('div');
    container.classList.add('container');
    main.appendChild(container);

    const expandTask = (e) => {
      //select .expand div in same .task container
      const expand = e.target.closest('.task').querySelector('.expand');
      //remove .active from all other .expand divs
      const allExpands = document.querySelectorAll('.expand');
      allExpands.forEach((x) => x.classList.remove('active'));
      //add .active to selected .task descendant
      expand.classList.add('active');
    };

    const collapseTask = () => {
      const allExpands = document.querySelectorAll('.expand');
      allExpands.forEach((x) => x.classList.remove('active'));
    };

    const clickTask = (e) => {
      if (e.target.classList.contains('delete-div')) {
        //add key/value remove:true
        //use find
        //add key value
        tList.find((x) => x.taskId == e.target.dataset.taskId).remove = true;
        //remove task from DOM
        // const taskToRemove = document.querySelectorAll(
        //   `.task[data-task-id='${e.target.dataset.taskId}']`
        // );
        resetMain(selection);
      } else if (e.target.classList.contains('checkbox')) {
        return;
      } else if (e.target.classList.contains('edit-div')) return;
      else if (
        e.target
          .closest('.task')
          .querySelector('.expand')
          .classList.contains('active')
      ) {
        console.log('active task');
        collapseTask(e);
      } else {
        //if tasks expand is active, remove active class and return
        expandTask(e);
      }
    };

    const layoutTask = (task, z) => {
      const taskMin = document.createElement('div');
      taskMin.classList.add('task-min');
      task.appendChild(taskMin);

      const checkbox = document.createElement('input');
      taskMin.appendChild(checkbox);
      checkbox.type = 'checkbox';
      checkbox.name = z.action;
      checkbox.id = z.action;
      checkbox.checked = false;
      checkbox.setAttribute('data-task-id', z.taskId);
      checkbox.classList.add('checkbox');
      checkbox.addEventListener('change', function (e) {
        const divToCross = e.target
          .closest('.task-min')
          .querySelector('.task-name');
        if (this.checked) {
          divToCross.classList.add('task-checked');
          tList.find(
            (x) => x.taskId == e.target.dataset.taskId
          ).complete = true;
        } else {
          divToCross.classList.remove('task-checked');
          tList.find(
            (x) => x.taskId == e.target.dataset.taskId
          ).complete = false;
        }
      });

      const taskContent = document.createElement('div');
      taskContent.classList.add('task-content');
      taskMin.appendChild(taskContent);

      const taskNameDate = document.createElement('div');
      taskNameDate.classList.add('task-name-date');
      taskContent.appendChild(taskNameDate);

      const taskName = document.createElement('div');
      taskName.classList.add('task-name');
      taskName.innerText = z.action;
      taskNameDate.appendChild(taskName);

      const dateDiv = document.createElement('div');
      dateDiv.classList.add('date-div');
      dateDiv.innerText = z.date;
      taskNameDate.appendChild(dateDiv);

      const priorityDelete = document.createElement('div');
      priorityDelete.classList.add('priority-delete');
      taskContent.appendChild(priorityDelete);

      const priorityDiv = document.createElement('div');
      priorityDiv.classList.add('priority-div');
      priorityDiv.innerText = z.priority;
      priorityDelete.appendChild(priorityDiv);

      const editDiv = document.createElement('button');
      editDiv.classList.add('edit-div');
      editDiv.setAttribute('data-task-id', z.taskId);
      editDiv.innerText = 'edit';
      priorityDelete.appendChild(editDiv);
      editDiv.addEventListener('click', showEditPopup);

      const deleteDiv = document.createElement('button');
      deleteDiv.classList.add('delete-div');
      deleteDiv.setAttribute('data-task-id', z.taskId);
      deleteDiv.innerText = 'x';
      priorityDelete.appendChild(deleteDiv);
      //
      const expand = document.createElement('div');
      expand.classList.add('expand');
      task.appendChild(expand);

      const desc = document.createElement('div');
      desc.classList.add('desc');
      desc.innerText = z.desc;
      expand.appendChild(desc);
      //expand.addEventListener('click', collapseTask);
    };

    const createTaskList = (p) => {
      const pHeading = document.createElement('div');
      pHeading.classList.add('p-heading');
      pHeading.textContent = p;
      container.appendChild(pHeading);
      //create task-container div
      const taskContainer = document.createElement('div');
      taskContainer.classList.add('task-container');
      container.appendChild(taskContainer);
      //filter tasks by project selection
      const tasks = tList.filter((x) => x.project == p);
      //append tasks for this project
      tasks.forEach((z) => {
        if (z.remove != true || !z.remove) {
          const task = document.createElement('div');
          task.classList.add('task');
          task.setAttribute('data-task-id', z.taskId);
          taskContainer.appendChild(task);
          layoutTask(task, z);
          task.addEventListener('click', clickTask);
          //append delete button
          //append checkbox
          //append expand arrow
        }
      });
      //add add task button
      const addTaskButton = document.createElement('button');
      addTaskButton.classList.add('add-task-button');
      addTaskButton.innerText = '+';
      addTaskButton.setAttribute('data-project', p);
      taskContainer.appendChild(addTaskButton);
      addTaskButton.addEventListener('click', showAddPopup);
    };

    //what list(s) to create
    if (s == allProjectsText) {
      pList.forEach((x) => createTaskList(x.name));
    } else createTaskList(s);
  }

  const projectSidebar = () => {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    content.appendChild(sidebar);
    //create sidebar buttons
    pList.forEach((x) => {
      const project = document.createElement('button');
      project.classList.add('sidebar-project');
      project.innerText = x.name;
      sidebar.appendChild(project);
      //add an eventlistener for each project displayed
      project.addEventListener('click', selectProject);
    });
    const all = document.createElement('button');
    all.classList.add('all', 'sidebar-project');
    all.innerText = allProjectsText;
    sidebar.appendChild(all);
    all.addEventListener('click', selectProject);
  };

  const displayPopup = () => {};

  projectSidebar();
  updateMain(selection);
  displayPopup();

  return { updateMain };
};

ScreenController();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsT0FBTztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msd0JBQXdCO0FBQzVEO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc2hvcnQtdW5pcXVlLWlkL2Rpc3Qvc2hvcnQtdW5pcXVlLWlkLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXNpZGViYXItZ3JheTogcmdiKDEwNCwgMTAyLCAxMDIpO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgbWFyZ2luOiAxMHB4O1xcblxcbn1cXG5cXG4ucC1oZWFkaW5nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgXFxuICBcXG59XFxuXFxuLnRhc2stbWlue1xcbiAgXFxuICBwYWRkaW5nOiA4cHggMHB4IDhweCAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgXFxufVxcblxcbi50YXNrLW5hbWUtZGF0ZXtcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIG1hcmdpbjogNHB4IDBweCAwcHggMHB4O1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gIGZsZXgtYmFzaXM6IDE7XFxufVxcblxcbi50YXNrLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5kYXRlLWRpdiwgLnByaW9yaXR5LWRpdiB7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBjb2xvcjogcmdiKDEwMiwgMTAxLCAxMDEpO1xcbiAgbWFyZ2luLWxlZnQ6IDZweDtcXG59XFxuXFxuLnByaW9yaXR5LWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucHJpb3JpdHktZGl2e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5leHBhbmQge1xcbiAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4uZXhwYW5kLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRlc2Mge1xcbiAgcGFkZGluZzogMjBweCAyNnB4IDIwcHggMjZweDtcXG4gIGNvbG9yOnJnYig3MiwgNzEsIDcxKTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XFxuICBtYXgtd2lkdGg6IDY1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBcXG4gIGdhcDo2cHg7XFxuICBcXG4gIFxcbn1cXG5cXG4udGFzayB7XFxuICBtYXJnaW46IDZweCAwcHggNnB4IDBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XFxuICBib3JkZXI6IDFweCByZ2IoMTAyLCAxMDEsIDEwMSkgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiKDIwMCwgMTk3LCAxOTcpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIFxcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LWdyb3c6IDE7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgbWF4LXdpZHRoOiA2NTBweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ncmF5KTtcXG4gIGhlaWdodDoxMDB2aDtcXG4gIGZsZXgtYmFzaXM6IDI1JTtcXG4gIG1heC13aWR0aDogMzIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxuIGRpc3BsYXk6IGZsZXg7XFxuIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuIHBhZGRpbmctdG9wOiAxMnB4O1xcbn1cXG5cXG4uaW5zdHIge1xcbiAgcGFkZGluZzoxMnB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNpZGViYXItZ3JheSk7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCBcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtIDE1MG1zIGVhc2U7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZDogIzAwNTNiYTtcXG59XFxuXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNmZmY7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtNHB4O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcXG59XFxuXFxuLmRlbGV0ZS1kaXYsIC5lZGl0LWRpdiwgLmFkZC10YXNrLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi50YXNrLWNoZWNrZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5kYXJrZW4tZGl2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NCwgNDMsIDQzLCAwLjUpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2d1xcbn1cXG5cXG4uZGFya2VuIHtcXG4gIGRpc3BsYXk6YmxvY2tcXG59XFxuXFxuLnBvcHVwIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnNob3ctcG9wdXAge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0sIC5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZGFlZDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0sIC5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSwgLmZvcm0tY29udGFpbmVyIHNlbGVjdHtcXG4gIG1hcmdpbjogNHB4IDBweCAxMnB4IDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmRhZWQ7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b257XFxuICBhbGlnbi1zZWxmOiBzZWxmLXN0YXJ0O1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCwwS0FBMEs7QUFDNUs7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGlCQUFpQjs7O0FBR25COztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLE9BQU87OztBQUdUOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGlCQUFpQjs7RUFFakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakI7b0NBQ2dDO0lBQ2hDLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tc2lkZWJhci1ncmF5OiByZ2IoMTA0LCAxMDIsIDEwMik7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLnByb2plY3R7XFxuICBtYXJnaW46IDEwcHg7XFxuXFxufVxcblxcbi5wLWhlYWRpbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBcXG4gIFxcbn1cXG5cXG4udGFzay1taW57XFxuICBcXG4gIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBcXG59XFxuXFxuLnRhc2stbmFtZS1kYXRle1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgbWFyZ2luOiA0cHggMHB4IDBweCAwcHg7XFxufVxcblxcbi50YXNrLW5hbWUge1xcbiAgZmxleC1iYXNpczogMTtcXG59XFxuXFxuLnRhc2stY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmRhdGUtZGl2LCAucHJpb3JpdHktZGl2IHtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGNvbG9yOiByZ2IoMTAyLCAxMDEsIDEwMSk7XFxuICBtYXJnaW4tbGVmdDogNnB4O1xcbn1cXG5cXG4ucHJpb3JpdHktZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5wcmlvcml0eS1kaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmV4cGFuZCB7XFxuICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5leHBhbmQuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZGVzYyB7XFxuICBwYWRkaW5nOiAyMHB4IDI2cHggMjBweCAyNnB4O1xcbiAgY29sb3I6cmdiKDcyLCA3MSwgNzEpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcXG4gIG1heC13aWR0aDogNjUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIFxcbiAgZ2FwOjZweDtcXG4gIFxcbiAgXFxufVxcblxcbi50YXNrIHtcXG4gIG1hcmdpbjogNnB4IDBweCA2cHggMHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXG4gIGJvcmRlcjogMXB4IHJnYigxMDIsIDEwMSwgMTAxKSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2IoMjAwLCAxOTcsIDE5Nyk7XFxufVxcblxcbi5tYWluIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBtYXgtd2lkdGg6IDY1MHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWdyYXkpO1xcbiAgaGVpZ2h0OjEwMHZoO1xcbiAgZmxleC1iYXNpczogMjUlO1xcbiAgbWF4LXdpZHRoOiAzMjBweDtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG4gZGlzcGxheTogZmxleDtcXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gcGFkZGluZy10b3A6IDEycHg7XFxufVxcblxcbi5pbnN0ciB7XFxuICBwYWRkaW5nOjEycHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2lkZWJhci1ncmF5KTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjUwbXMgZWFzZS1pbi1vdXQsIFxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDA1M2JhO1xcbn1cXG5cXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI2ZmZjtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IC00cHg7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xcbn1cXG5cXG4uZGVsZXRlLWRpdiwgLmVkaXQtZGl2LCAuYWRkLXRhc2stYnV0dG9uIHtcXG4gIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnRhc2stY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmRhcmtlbi1kaXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ0LCA0MywgNDMsIDAuNSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3XFxufVxcblxcbi5kYXJrZW4ge1xcbiAgZGlzcGxheTpibG9ja1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uc2hvdy1wb3B1cCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSwgLmZvcm0tY29udGFpbmVyIHRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkYWVkO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSwgLmZvcm0tY29udGFpbmVyIHRleHRhcmVhLCAuZm9ybS1jb250YWluZXIgc2VsZWN0e1xcbiAgbWFyZ2luOiA0cHggMHB4IDEycHggMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZGFlZDtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbntcXG4gIGFsaWduLXNlbGY6IHNlbGYtc3RhcnQ7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIFNob3J0VW5pcXVlSWQgPSAoKCkgPT4ge1xuICB2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICB2YXIgX19nZXRPd25Qcm9wU3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4gIHZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgX19wcm9wSXNFbnVtID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgdmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xuICB2YXIgX19zcHJlYWRWYWx1ZXMgPSAoYSwgYikgPT4ge1xuICAgIGZvciAodmFyIHByb3AgaW4gYiB8fCAoYiA9IHt9KSlcbiAgICAgIGlmIChfX2hhc093blByb3AuY2FsbChiLCBwcm9wKSlcbiAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICAgIGlmIChfX2dldE93blByb3BTeW1ib2xzKVxuICAgICAgZm9yICh2YXIgcHJvcCBvZiBfX2dldE93blByb3BTeW1ib2xzKGIpKSB7XG4gICAgICAgIGlmIChfX3Byb3BJc0VudW0uY2FsbChiLCBwcm9wKSlcbiAgICAgICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gICAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH07XG4gIHZhciBfX21hcmtBc01vZHVsZSA9ICh0YXJnZXQpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICB2YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgICBfX21hcmtBc01vZHVsZSh0YXJnZXQpO1xuICAgIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbiAgfTtcblxuICAvLyBzcmMvaW5kZXgudHNcbiAgdmFyIHNyY19leHBvcnRzID0ge307XG4gIF9fZXhwb3J0KHNyY19leHBvcnRzLCB7XG4gICAgREVGQVVMVF9VVUlEX0xFTkdUSDogKCkgPT4gREVGQVVMVF9VVUlEX0xFTkdUSCxcbiAgICBkZWZhdWx0OiAoKSA9PiBTaG9ydFVuaXF1ZUlkXG4gIH0pO1xuXG4gIC8vIHBhY2thZ2UuanNvblxuICB2YXIgdmVyc2lvbiA9IFwiNC40LjRcIjtcblxuICAvLyBzcmMvaW5kZXgudHNcbiAgdmFyIERFRkFVTFRfVVVJRF9MRU5HVEggPSA2O1xuICB2YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICAgIGRpY3Rpb25hcnk6IFwiYWxwaGFudW1cIixcbiAgICBzaHVmZmxlOiB0cnVlLFxuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBsZW5ndGg6IERFRkFVTFRfVVVJRF9MRU5HVEhcbiAgfTtcbiAgdmFyIF9TaG9ydFVuaXF1ZUlkID0gY2xhc3MgZXh0ZW5kcyBGdW5jdGlvbiB7XG4gICAgY29uc3RydWN0b3IoYXJnT3B0aW9ucyA9IHt9KSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5kaWN0SW5kZXggPSAwO1xuICAgICAgdGhpcy5kaWN0UmFuZ2UgPSBbXTtcbiAgICAgIHRoaXMubG93ZXJCb3VuZCA9IDA7XG4gICAgICB0aGlzLnVwcGVyQm91bmQgPSAwO1xuICAgICAgdGhpcy5kaWN0TGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuX2RpZ2l0X2ZpcnN0X2FzY2lpID0gNDg7XG4gICAgICB0aGlzLl9kaWdpdF9sYXN0X2FzY2lpID0gNTg7XG4gICAgICB0aGlzLl9hbHBoYV9sb3dlcl9maXJzdF9hc2NpaSA9IDk3O1xuICAgICAgdGhpcy5fYWxwaGFfbG93ZXJfbGFzdF9hc2NpaSA9IDEyMztcbiAgICAgIHRoaXMuX2hleF9sYXN0X2FzY2lpID0gMTAzO1xuICAgICAgdGhpcy5fYWxwaGFfdXBwZXJfZmlyc3RfYXNjaWkgPSA2NTtcbiAgICAgIHRoaXMuX2FscGhhX3VwcGVyX2xhc3RfYXNjaWkgPSA5MTtcbiAgICAgIHRoaXMuX251bWJlcl9kaWN0X3JhbmdlcyA9IHtcbiAgICAgICAgZGlnaXRzOiBbdGhpcy5fZGlnaXRfZmlyc3RfYXNjaWksIHRoaXMuX2RpZ2l0X2xhc3RfYXNjaWldXG4gICAgICB9O1xuICAgICAgdGhpcy5fYWxwaGFfZGljdF9yYW5nZXMgPSB7XG4gICAgICAgIGxvd2VyQ2FzZTogW3RoaXMuX2FscGhhX2xvd2VyX2ZpcnN0X2FzY2lpLCB0aGlzLl9hbHBoYV9sb3dlcl9sYXN0X2FzY2lpXSxcbiAgICAgICAgdXBwZXJDYXNlOiBbdGhpcy5fYWxwaGFfdXBwZXJfZmlyc3RfYXNjaWksIHRoaXMuX2FscGhhX3VwcGVyX2xhc3RfYXNjaWldXG4gICAgICB9O1xuICAgICAgdGhpcy5fYWxwaGFfbG93ZXJfZGljdF9yYW5nZXMgPSB7XG4gICAgICAgIGxvd2VyQ2FzZTogW3RoaXMuX2FscGhhX2xvd2VyX2ZpcnN0X2FzY2lpLCB0aGlzLl9hbHBoYV9sb3dlcl9sYXN0X2FzY2lpXVxuICAgICAgfTtcbiAgICAgIHRoaXMuX2FscGhhX3VwcGVyX2RpY3RfcmFuZ2VzID0ge1xuICAgICAgICB1cHBlckNhc2U6IFt0aGlzLl9hbHBoYV91cHBlcl9maXJzdF9hc2NpaSwgdGhpcy5fYWxwaGFfdXBwZXJfbGFzdF9hc2NpaV1cbiAgICAgIH07XG4gICAgICB0aGlzLl9hbHBoYW51bV9kaWN0X3JhbmdlcyA9IHtcbiAgICAgICAgZGlnaXRzOiBbdGhpcy5fZGlnaXRfZmlyc3RfYXNjaWksIHRoaXMuX2RpZ2l0X2xhc3RfYXNjaWldLFxuICAgICAgICBsb3dlckNhc2U6IFt0aGlzLl9hbHBoYV9sb3dlcl9maXJzdF9hc2NpaSwgdGhpcy5fYWxwaGFfbG93ZXJfbGFzdF9hc2NpaV0sXG4gICAgICAgIHVwcGVyQ2FzZTogW3RoaXMuX2FscGhhX3VwcGVyX2ZpcnN0X2FzY2lpLCB0aGlzLl9hbHBoYV91cHBlcl9sYXN0X2FzY2lpXVxuICAgICAgfTtcbiAgICAgIHRoaXMuX2FscGhhbnVtX2xvd2VyX2RpY3RfcmFuZ2VzID0ge1xuICAgICAgICBkaWdpdHM6IFt0aGlzLl9kaWdpdF9maXJzdF9hc2NpaSwgdGhpcy5fZGlnaXRfbGFzdF9hc2NpaV0sXG4gICAgICAgIGxvd2VyQ2FzZTogW3RoaXMuX2FscGhhX2xvd2VyX2ZpcnN0X2FzY2lpLCB0aGlzLl9hbHBoYV9sb3dlcl9sYXN0X2FzY2lpXVxuICAgICAgfTtcbiAgICAgIHRoaXMuX2FscGhhbnVtX3VwcGVyX2RpY3RfcmFuZ2VzID0ge1xuICAgICAgICBkaWdpdHM6IFt0aGlzLl9kaWdpdF9maXJzdF9hc2NpaSwgdGhpcy5fZGlnaXRfbGFzdF9hc2NpaV0sXG4gICAgICAgIHVwcGVyQ2FzZTogW3RoaXMuX2FscGhhX3VwcGVyX2ZpcnN0X2FzY2lpLCB0aGlzLl9hbHBoYV91cHBlcl9sYXN0X2FzY2lpXVxuICAgICAgfTtcbiAgICAgIHRoaXMuX2hleF9kaWN0X3JhbmdlcyA9IHtcbiAgICAgICAgZGVjRGlnaXRzOiBbdGhpcy5fZGlnaXRfZmlyc3RfYXNjaWksIHRoaXMuX2RpZ2l0X2xhc3RfYXNjaWldLFxuICAgICAgICBhbHBoYURpZ2l0czogW3RoaXMuX2FscGhhX2xvd2VyX2ZpcnN0X2FzY2lpLCB0aGlzLl9oZXhfbGFzdF9hc2NpaV1cbiAgICAgIH07XG4gICAgICB0aGlzLmxvZyA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbmFsQXJncyA9IFsuLi5hcmdzXTtcbiAgICAgICAgZmluYWxBcmdzWzBdID0gYFtzaG9ydC11bmlxdWUtaWRdICR7YXJnc1swXX1gO1xuICAgICAgICBpZiAodGhpcy5kZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coLi4uZmluYWxBcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLnNldERpY3Rpb25hcnkgPSAoZGljdGlvbmFyeSwgc2h1ZmZsZSkgPT4ge1xuICAgICAgICBsZXQgZmluYWxEaWN0O1xuICAgICAgICBpZiAoZGljdGlvbmFyeSAmJiBBcnJheS5pc0FycmF5KGRpY3Rpb25hcnkpICYmIGRpY3Rpb25hcnkubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGZpbmFsRGljdCA9IGRpY3Rpb25hcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmluYWxEaWN0ID0gW107XG4gICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgdGhpcy5kaWN0SW5kZXggPSBpID0gMDtcbiAgICAgICAgICBjb25zdCByYW5nZXNOYW1lID0gYF8ke2RpY3Rpb25hcnl9X2RpY3RfcmFuZ2VzYDtcbiAgICAgICAgICBjb25zdCByYW5nZXMgPSB0aGlzW3Jhbmdlc05hbWVdO1xuICAgICAgICAgIE9iamVjdC5rZXlzKHJhbmdlcykuZm9yRWFjaCgocmFuZ2VUeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByYW5nZVR5cGVLZXkgPSByYW5nZVR5cGU7XG4gICAgICAgICAgICB0aGlzLmRpY3RSYW5nZSA9IHJhbmdlc1tyYW5nZVR5cGVLZXldO1xuICAgICAgICAgICAgdGhpcy5sb3dlckJvdW5kID0gdGhpcy5kaWN0UmFuZ2VbMF07XG4gICAgICAgICAgICB0aGlzLnVwcGVyQm91bmQgPSB0aGlzLmRpY3RSYW5nZVsxXTtcbiAgICAgICAgICAgIGZvciAodGhpcy5kaWN0SW5kZXggPSBpID0gdGhpcy5sb3dlckJvdW5kOyB0aGlzLmxvd2VyQm91bmQgPD0gdGhpcy51cHBlckJvdW5kID8gaSA8IHRoaXMudXBwZXJCb3VuZCA6IGkgPiB0aGlzLnVwcGVyQm91bmQ7IHRoaXMuZGljdEluZGV4ID0gdGhpcy5sb3dlckJvdW5kIDw9IHRoaXMudXBwZXJCb3VuZCA/IGkgKz0gMSA6IGkgLT0gMSkge1xuICAgICAgICAgICAgICBmaW5hbERpY3QucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMuZGljdEluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNodWZmbGUpIHtcbiAgICAgICAgICBjb25zdCBQUk9CQUJJTElUWSA9IDAuNTtcbiAgICAgICAgICBmaW5hbERpY3QgPSBmaW5hbERpY3Quc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gUFJPQkFCSUxJVFkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGljdCA9IGZpbmFsRGljdDtcbiAgICAgICAgdGhpcy5kaWN0TGVuZ3RoID0gdGhpcy5kaWN0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgIH07XG4gICAgICB0aGlzLnNlcSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VxdWVudGlhbFVVSUQoKTtcbiAgICAgIH07XG4gICAgICB0aGlzLnNlcXVlbnRpYWxVVUlEID0gKCkgPT4ge1xuICAgICAgICBsZXQgY291bnRlckRpdjtcbiAgICAgICAgbGV0IGNvdW50ZXJSZW07XG4gICAgICAgIGxldCBpZCA9IFwiXCI7XG4gICAgICAgIGNvdW50ZXJEaXYgPSB0aGlzLmNvdW50ZXI7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBjb3VudGVyUmVtID0gY291bnRlckRpdiAlIHRoaXMuZGljdExlbmd0aDtcbiAgICAgICAgICBjb3VudGVyRGl2ID0gTWF0aC50cnVuYyhjb3VudGVyRGl2IC8gdGhpcy5kaWN0TGVuZ3RoKTtcbiAgICAgICAgICBpZCArPSB0aGlzLmRpY3RbY291bnRlclJlbV07XG4gICAgICAgIH0gd2hpbGUgKGNvdW50ZXJEaXYgIT09IDApO1xuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfTtcbiAgICAgIHRoaXMucmFuZG9tVVVJRCA9ICh1dWlkTGVuZ3RoID0gdGhpcy51dWlkTGVuZ3RoIHx8IERFRkFVTFRfVVVJRF9MRU5HVEgpID0+IHtcbiAgICAgICAgbGV0IGlkO1xuICAgICAgICBsZXQgcmFuZG9tUGFydElkeDtcbiAgICAgICAgbGV0IGo7XG4gICAgICAgIGlmICh1dWlkTGVuZ3RoID09PSBudWxsIHx8IHR5cGVvZiB1dWlkTGVuZ3RoID09PSBcInVuZGVmaW5lZFwiIHx8IHV1aWRMZW5ndGggPCAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBVVUlEIExlbmd0aCBQcm92aWRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1Bvc2l0aXZlID0gdXVpZExlbmd0aCA+PSAwO1xuICAgICAgICBpZCA9IFwiXCI7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCB1dWlkTGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICByYW5kb21QYXJ0SWR4ID0gcGFyc2VJbnQoKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRpY3RMZW5ndGgpLnRvRml4ZWQoMCksIDEwKSAlIHRoaXMuZGljdExlbmd0aDtcbiAgICAgICAgICBpZCArPSB0aGlzLmRpY3RbcmFuZG9tUGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfTtcbiAgICAgIHRoaXMuYXZhaWxhYmxlVVVJRHMgPSAodXVpZExlbmd0aCA9IHRoaXMudXVpZExlbmd0aCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChNYXRoLnBvdyhbLi4ubmV3IFNldCh0aGlzLmRpY3QpXS5sZW5ndGgsIHV1aWRMZW5ndGgpLnRvRml4ZWQoMCkpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuYXBwcm94TWF4QmVmb3JlQ29sbGlzaW9uID0gKHJvdW5kcyA9IHRoaXMuYXZhaWxhYmxlVVVJRHModGhpcy51dWlkTGVuZ3RoKSkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChNYXRoLnNxcnQoTWF0aC5QSSAvIDIgKiByb3VuZHMpLnRvRml4ZWQoMjApKTtcbiAgICAgIH07XG4gICAgICB0aGlzLmNvbGxpc2lvblByb2JhYmlsaXR5ID0gKHJvdW5kcyA9IHRoaXMuYXZhaWxhYmxlVVVJRHModGhpcy51dWlkTGVuZ3RoKSwgdXVpZExlbmd0aCA9IHRoaXMudXVpZExlbmd0aCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCgodGhpcy5hcHByb3hNYXhCZWZvcmVDb2xsaXNpb24ocm91bmRzKSAvIHRoaXMuYXZhaWxhYmxlVVVJRHModXVpZExlbmd0aCkpLnRvRml4ZWQoMjApKTtcbiAgICAgIH07XG4gICAgICB0aGlzLnVuaXF1ZW5lc3MgPSAocm91bmRzID0gdGhpcy5hdmFpbGFibGVVVUlEcyh0aGlzLnV1aWRMZW5ndGgpKSA9PiB7XG4gICAgICAgIGNvbnN0IHNjb3JlID0gcGFyc2VGbG9hdCgoMSAtIHRoaXMuYXBwcm94TWF4QmVmb3JlQ29sbGlzaW9uKHJvdW5kcykgLyByb3VuZHMpLnRvRml4ZWQoMjApKTtcbiAgICAgICAgcmV0dXJuIHNjb3JlID4gMSA/IDEgOiBzY29yZSA8IDAgPyAwIDogc2NvcmU7XG4gICAgICB9O1xuICAgICAgdGhpcy5nZXRWZXJzaW9uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy52ZXJzaW9uO1xuICAgICAgfTtcbiAgICAgIHRoaXMuc3RhbXAgPSAoZmluYWxMZW5ndGgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaW5hbExlbmd0aCAhPT0gXCJudW1iZXJcIiB8fCBmaW5hbExlbmd0aCA8IDEwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyYW0gZmluYWxMZW5ndGggbXVzdCBiZSBudW1iZXIgZ3JlYXRlciB0aGFuIDEwXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhleFN0YW1wID0gTWF0aC5mbG9vcigrbmV3IERhdGUoKSAvIDFlMykudG9TdHJpbmcoMTYpO1xuICAgICAgICBjb25zdCBpZExlbmd0aCA9IGZpbmFsTGVuZ3RoIC0gOTtcbiAgICAgICAgY29uc3Qgcm5kSWR4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGlkTGVuZ3RoID4gMTUgPyAxNSA6IGlkTGVuZ3RoKSk7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5yYW5kb21VVUlEKGlkTGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGAke2lkLnN1YnN0cigwLCBybmRJZHgpfSR7aGV4U3RhbXB9JHtpZC5zdWJzdHIocm5kSWR4KX0ke3JuZElkeC50b1N0cmluZygxNil9YDtcbiAgICAgIH07XG4gICAgICB0aGlzLnBhcnNlU3RhbXAgPSAoc3RhbXApID0+IHtcbiAgICAgICAgaWYgKHN0YW1wLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhbXAgbGVuZ3RoIGludmFsaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm5kSWR4ID0gcGFyc2VJbnQoc3RhbXAuc3Vic3RyKHN0YW1wLmxlbmd0aCAtIDEsIDEpLCAxNik7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShwYXJzZUludChzdGFtcC5zdWJzdHIocm5kSWR4LCA4KSwgMTYpICogMWUzKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBvcHRpb25zID0gX19zcHJlYWRWYWx1ZXMoX19zcHJlYWRWYWx1ZXMoe30sIERFRkFVTFRfT1BUSU9OUyksIGFyZ09wdGlvbnMpO1xuICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgIHRoaXMuZGVidWcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGljdCA9IFtdO1xuICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGljdGlvbmFyeSxcbiAgICAgICAgc2h1ZmZsZSxcbiAgICAgICAgbGVuZ3RoXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHRoaXMudXVpZExlbmd0aCA9IGxlbmd0aDtcbiAgICAgIHRoaXMuc2V0RGljdGlvbmFyeShkaWN0aW9uYXJ5LCBzaHVmZmxlKTtcbiAgICAgIHRoaXMuZGVidWcgPSBvcHRpb25zLmRlYnVnO1xuICAgICAgdGhpcy5sb2codGhpcy5kaWN0KTtcbiAgICAgIHRoaXMubG9nKGBHZW5lcmF0b3IgaW5zdGFudGlhdGVkIHdpdGggRGljdGlvbmFyeSBTaXplICR7dGhpcy5kaWN0TGVuZ3RofWApO1xuICAgICAgcmV0dXJuIG5ldyBQcm94eSh0aGlzLCB7XG4gICAgICAgIGFwcGx5OiAodGFyZ2V0LCB0aGF0LCBhcmdzKSA9PiB0aGlzLnJhbmRvbVVVSUQoLi4uYXJncylcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgdmFyIFNob3J0VW5pcXVlSWQgPSBfU2hvcnRVbmlxdWVJZDtcbiAgU2hvcnRVbmlxdWVJZC5kZWZhdWx0ID0gX1Nob3J0VW5pcXVlSWQ7XG4gIHJldHVybiBzcmNfZXhwb3J0cztcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaG9ydC11bmlxdWUtaWQuanMubWFwXG4ndW5kZWZpbmVkJyE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPVNob3J0VW5pcXVlSWQuZGVmYXVsdCksJ3VuZGVmaW5lZCchPXR5cGVvZiB3aW5kb3cmJihTaG9ydFVuaXF1ZUlkPVNob3J0VW5pcXVlSWQuZGVmYXVsdCk7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBTaG9ydFVuaXF1ZUlkID0gcmVxdWlyZSgnc2hvcnQtdW5pcXVlLWlkJyk7XG5jb25zdCB1aWQgPSBuZXcgU2hvcnRVbmlxdWVJZCh7IGxlbmd0aDogMTYgfSk7XG5cbmNvbnN0IHBMaXN0ID0gW107XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gKCkgPT4ge1xuICByZXR1cm4gcExpc3Q7XG59O1xuXG5jb25zdCBQcm9qZWN0RmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gIHBMaXN0LnB1c2goeyBuYW1lIH0pO1xufTtcblxuY29uc3QgdExpc3QgPSBbXTtcblxuY29uc3QgdG9Eb0xpc3QgPSAoKSA9PiB7XG4gIHJldHVybiB0TGlzdDtcbn07XG5cbmNvbnN0IFRvRG9GYWN0b3J5ID0gKGFjdGlvbiwgcHJvamVjdCwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgY29uc3QgdGFza0lkID0gdWlkKCk7XG4gIHRMaXN0LnB1c2goe1xuICAgIGFjdGlvbixcbiAgICB0YXNrSWQsXG4gICAgY29tcGxldGU6IGZhbHNlLFxuICAgIHByb2plY3QsXG4gICAgZGVzYyxcbiAgICBkYXRlLFxuICAgIHByaW9yaXR5LFxuICB9KTtcbn07XG5cbmV4cG9ydCB7IFByb2plY3RGYWN0b3J5LCBUb0RvRmFjdG9yeSwgcHJvamVjdExpc3QsIHRvRG9MaXN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFByb2plY3RGYWN0b3J5LCBUb0RvRmFjdG9yeSwgcHJvamVjdExpc3QsIHRvRG9MaXN0IH0gZnJvbSAnLi90b2Rvcyc7XG5cbi8vaW50ZXJhY3Rpb25cblByb2plY3RGYWN0b3J5KCdIb21lJyk7XG5Qcm9qZWN0RmFjdG9yeSgnSGFyZHdhcmUgU3RvcmUnKTtcblByb2plY3RGYWN0b3J5KCd0ZXN0Jyk7XG5Qcm9qZWN0RmFjdG9yeSgnYnV0dGVyZjt5Jyk7XG5Qcm9qZWN0RmFjdG9yeSgnTWlzYycpO1xuXG5Ub0RvRmFjdG9yeSgndGVzdCBhY3Rpb24nLCAndGVzdCcsICcnLCAnJywgJycpO1xuVG9Eb0ZhY3RvcnkoXG4gICdXYXNoIHRoZSBkaXNoZXMnLFxuICAnSG9tZScsXG4gICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uJyxcbiAgJ1RodXJzZGF5JyxcbiAgJ0hpZ2ggcHJpb3JpdHknXG4pO1xuVG9Eb0ZhY3RvcnkoJ0J1eSBzaG9wIHRvd2VscycsICdIYXJkd2FyZSBTdG9yZScsICcnLCAnJywgJycpO1xuVG9Eb0ZhY3RvcnkoJ1N3ZWVwIHRoZSBmbG9vcicsICdIb21lJywgJycsICcnLCAnJyk7XG5jb25zb2xlLmxvZyhwcm9qZWN0TGlzdCgpKTtcbmNvbnNvbGUubG9nKHRvRG9MaXN0KCkpO1xuXG5jb25zdCBTY3JlZW5Db250cm9sbGVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAvL3N0YXRlIG9mIG1haW5cbiAgbGV0IHNlbGVjdGlvbiA9ICdIb21lJztcbiAgY29uc3QgcExpc3QgPSBwcm9qZWN0TGlzdCgpO1xuICBjb25zdCB0TGlzdCA9IHRvRG9MaXN0KCk7XG4gIGNvbnN0IGFjdGl2ZVRMaXN0ID0gKCkgPT4gdExpc3QuZmlsdGVyKCh4KSA9PiB4LnJlbW92ZSA9PSBmYWxzZSB8fCAheC5yZW1vdmUpO1xuXG4gIGNvbnN0IGFsbFByb2plY3RzVGV4dCA9ICdBbGwgUHJvamVjdHMnO1xuXG4gIGNvbnN0IHJlc2V0TWFpbiA9IChzZWxlY3Rpb24pID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKG1haW4pO1xuICAgIHVwZGF0ZU1haW4oc2VsZWN0aW9uKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAvL3JlbW92ZSBhY3RpdmUgY2xhc3MgZnJvbSBhbGwgZGl2c1xuICAgIC8vYWRkIGFjdGl2ZSBjbGFzcyB0byBzZWxlY3RlZCBkaXZcblxuICAgIC8vcGFzcyBzZWxlY3RlZCBwcm9qZWN0IHRvIHVwZGF0ZSBtYWluXG4gICAgc2VsZWN0aW9uID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuICAgIHJlc2V0TWFpbihzZWxlY3Rpb24pO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgLy9ldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2snKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYycpLnZhbHVlO1xuICAgIC8vZW50ZXIgcGFyYW1ldGVyc1xuICAgIFRvRG9GYWN0b3J5KHRhc2ssIHByb2plY3QsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcbiAgICBjb25zb2xlLmxvZyh0TGlzdCk7XG4gICAgcmVzZXRNYWluKHNlbGVjdGlvbik7XG5cbiAgICAvLyBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIik7XG4gICAgLy8gZm9ybS5yZXNldCgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBvcHVwID0gKCkgPT4ge1xuICAgIC8vcmVtb3ZlIGRhcmtlbiBjbGFzc1xuICAgIGRhcmtlbkRpdi5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrZW4nKTtcbiAgICAvL3JlbW92ZSBzaG93IHBvcHVwIGNsYXNzXG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LXBvcHVwJyk7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChwb3B1cCk7XG4gIH07XG5cbiAgY29uc3QgZGFya2VuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhcmtlbkRpdi5jbGFzc0xpc3QuYWRkKCdkYXJrZW4tZGl2Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGFya2VuRGl2KTtcbiAgZGFya2VuRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlUG9wdXApO1xuXG4gIGNvbnN0IGVkaXRUYXNrID0gKGUpID0+IHtcbiAgICBjb25zdCB0YXNrVG9FZGl0ID0gdExpc3QuZmluZCgoeCkgPT4geC50YXNrSWQgPT0gZS50YXJnZXQuZGF0YXNldC50YXNrSWQpO1xuICAgIC8vcmVwbGFjZSBrZXkvdmFsdWVzIHdpdGggcG9wdXAgZW50cmllc1xuICAgIHRhc2tUb0VkaXQuYWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2snKS52YWx1ZTtcbiAgICB0YXNrVG9FZGl0LnByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLnZhbHVlO1xuICAgIHRhc2tUb0VkaXQuZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgdGFza1RvRWRpdC5wcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuICAgIHRhc2tUb0VkaXQuZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJykudmFsdWU7XG5cbiAgICBjb25zb2xlLmxvZygnZWRpdCBwb3B1cCBmb3InLCB0YXNrVG9FZGl0KTtcbiAgfTtcblxuICBjb25zdCBzaG93RWRpdFBvcHVwID0gKGUpID0+IHtcbiAgICBjb25zdCB0YXNrVG9FZGl0ID0gdExpc3QuZmluZCgoeCkgPT4geC50YXNrSWQgPT0gZS50YXJnZXQuZGF0YXNldC50YXNrSWQpO1xuICAgIHNob3dQb3B1cChlKTtcbiAgICAvL3ByZWZpbGwgZXhpc3RpbmcgdmFsdWVzXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2snKS52YWx1ZSA9IHRhc2tUb0VkaXQuYWN0aW9uO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWUgPSB0YXNrVG9FZGl0LnByb2plY3Q7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZSA9IHRhc2tUb0VkaXQuZGF0ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS5vcHRpb24gPSB0YXNrVG9FZGl0LnByaW9yaXR5O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJykudmFsdWUgPSB0YXNrVG9FZGl0LmRlc2M7XG5cbiAgICBjb25zdCBjcmVhdGVQb3B1cEVkaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xuICAgICAgY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgdGFza1N1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICB0YXNrU3VibWl0LmlubmVyVGV4dCA9ICdTYXZlJztcbiAgICAgIHRhc2tTdWJtaXQuaWQgPSAnc3VibWl0JztcbiAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHRhc2tTdWJtaXQpO1xuICAgICAgdGFza1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZWRpdFRhc2soZSk7XG4gICAgICAgIHJlbW92ZVBvcHVwKCk7XG4gICAgICAgIHJlc2V0TWFpbihzZWxlY3Rpb24pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNyZWF0ZVBvcHVwRWRpdEJ1dHRvbigpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dBZGRQb3B1cCA9IChlKSA9PiB7XG4gICAgc2hvd1BvcHVwKGUpO1xuICAgIGNvbnN0IGNyZWF0ZVBvcHVwQnV0dG9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbiAgICAgIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHRhc2tTdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICAgICAgdGFza1N1Ym1pdC5pbm5lclRleHQgPSAnQWRkJztcbiAgICAgIHRhc2tTdWJtaXQuaWQgPSAnc3VibWl0JztcbiAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHRhc2tTdWJtaXQpO1xuICAgICAgdGFza1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkVGFzaygpO1xuICAgICAgICByZW1vdmVQb3B1cCgpO1xuICAgICAgICByZXNldE1haW4oc2VsZWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjcmVhdGVQb3B1cEJ1dHRvbigpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dQb3B1cCA9IChlKSA9PiB7XG4gICAgLy9hZGQgLmRhcmtlbiB0byBkYXJrZW5EaXZcbiAgICBkYXJrZW5EaXYuY2xhc3NMaXN0LmFkZCgnZGFya2VuJyk7XG5cbiAgICBjcmVhdGVQb3B1cChlKTtcbiAgICAvL2FkZCAuc2hvdy1wb3B1cCB0byBwb3B1cFxuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnc2hvdy1wb3B1cCcpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVBvcHVwID0gKGUpID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdpZCcsICdteUZvcm0nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuXG4gICAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0YXNrTGFiZWwuZm9yID0gJ3Rhc2snO1xuICAgIHRhc2tMYWJlbC5pbm5lclRleHQgPSAnVGFzayc7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcblxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0lucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGFza0lucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIFRhc2snO1xuICAgIHRhc2tJbnB1dC5pZCA9ICd0YXNrJztcbiAgICAvL3Rhc2tJbnB1dC5uYW1lID0gJ3Rhc2snO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByb2plY3RMYWJlbC5mb3IgPSAncHJvamVjdCc7XG4gICAgcHJvamVjdExhYmVsLmlubmVyVGV4dCA9ICdQcm9qZWN0JztcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJvamVjdElucHV0LmlkID0gJ3Byb2plY3QnO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG5cbiAgICBjb25zdCBwcm9qZWN0c1RvT3B0aW9ucyA9IChlLCBhcnJheSkgPT4ge1xuICAgICAgLy9jcmVhdGUgb3B0aW9uIGVsZW1lbnRzIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5XG4gICAgICBhcnJheS5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gYCR7eC5uYW1lfWA7XG4gICAgICAgIGlmICh4Lm5hbWUgPT0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0KSB7XG4gICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwcm9qZWN0c1RvT3B0aW9ucyhlLCBwTGlzdCk7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC5mb3IgPSAnZGF0ZSc7XG4gICAgZGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdUaW1lZnJhbWUnO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGRhdGVJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBUaW1lZnJhbWUnO1xuICAgIGRhdGVJbnB1dC5pZCA9ICdkYXRlJztcbiAgICBkYXRlSW5wdXQubmFtZSA9ICdkYXRlJztcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5mb3IgPSAncHJpb3JpdHknO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5IExldmVsJztcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcblxuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eUlucHV0LmlkID0gJ3ByaW9yaXR5JztcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuICAgIGNvbnN0IG5vcm1hbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbm9ybWFsUHJpb3JpdHkuaW5uZXJUZXh0ID0gJ05vcm1hbCBQcmlvcml0eSc7XG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChub3JtYWxQcmlvcml0eSk7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1lZGl1bVByaW9yaXR5LmlubmVyVGV4dCA9ICdNZWRpdW0gUHJpb3JpdHknO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xuXG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaGlnaFByaW9yaXR5LmlubmVyVGV4dCA9ICdIaWdoIFByaW9yaXR5JztcbiAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG5cbiAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NMYWJlbC5mb3IgPSAnZGVzYyc7XG4gICAgZGVzY0xhYmVsLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbic7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcblxuICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY0lucHV0LmlkID0gJ2Rlc2MnO1xuICAgIGRlc2NJbnB1dC5uYW1lID0gJ2Rlc2MnO1xuICAgIGRlc2NJbnB1dC5yb3dzID0gJzUnO1xuICAgIGRlc2NJbnB1dC5jb2xzID0gJzMzJztcbiAgICBkZXNjSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgRGVzY3JpcHRpb24nO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gdXBkYXRlTWFpbihzKSB7XG4gICAgLy9jcmVhdGUgYSBtYWluIHRvIGJlIHJlbW92ZWRcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICAvL2NyZWF0ZSBjb250YWluZXIgdG8gaGVscCB3aXRoIHBhZ2UgbGF5b3V0XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGV4cGFuZFRhc2sgPSAoZSkgPT4ge1xuICAgICAgLy9zZWxlY3QgLmV4cGFuZCBkaXYgaW4gc2FtZSAudGFzayBjb250YWluZXJcbiAgICAgIGNvbnN0IGV4cGFuZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykucXVlcnlTZWxlY3RvcignLmV4cGFuZCcpO1xuICAgICAgLy9yZW1vdmUgLmFjdGl2ZSBmcm9tIGFsbCBvdGhlciAuZXhwYW5kIGRpdnNcbiAgICAgIGNvbnN0IGFsbEV4cGFuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kJyk7XG4gICAgICBhbGxFeHBhbmRzLmZvckVhY2goKHgpID0+IHguY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgLy9hZGQgLmFjdGl2ZSB0byBzZWxlY3RlZCAudGFzayBkZXNjZW5kYW50XG4gICAgICBleHBhbmQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbGxhcHNlVGFzayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFsbEV4cGFuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kJyk7XG4gICAgICBhbGxFeHBhbmRzLmZvckVhY2goKHgpID0+IHguY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGlja1Rhc2sgPSAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWRpdicpKSB7XG4gICAgICAgIC8vYWRkIGtleS92YWx1ZSByZW1vdmU6dHJ1ZVxuICAgICAgICAvL3VzZSBmaW5kXG4gICAgICAgIC8vYWRkIGtleSB2YWx1ZVxuICAgICAgICB0TGlzdC5maW5kKCh4KSA9PiB4LnRhc2tJZCA9PSBlLnRhcmdldC5kYXRhc2V0LnRhc2tJZCkucmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgLy9yZW1vdmUgdGFzayBmcm9tIERPTVxuICAgICAgICAvLyBjb25zdCB0YXNrVG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAvLyAgIGAudGFza1tkYXRhLXRhc2staWQ9JyR7ZS50YXJnZXQuZGF0YXNldC50YXNrSWR9J11gXG4gICAgICAgIC8vICk7XG4gICAgICAgIHJlc2V0TWFpbihzZWxlY3Rpb24pO1xuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94JykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtZGl2JykpIHJldHVybjtcbiAgICAgIGVsc2UgaWYgKFxuICAgICAgICBlLnRhcmdldFxuICAgICAgICAgIC5jbG9zZXN0KCcudGFzaycpXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5leHBhbmQnKVxuICAgICAgICAgIC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FjdGl2ZSB0YXNrJyk7XG4gICAgICAgIGNvbGxhcHNlVGFzayhlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vaWYgdGFza3MgZXhwYW5kIGlzIGFjdGl2ZSwgcmVtb3ZlIGFjdGl2ZSBjbGFzcyBhbmQgcmV0dXJuXG4gICAgICAgIGV4cGFuZFRhc2soZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGxheW91dFRhc2sgPSAodGFzaywgeikgPT4ge1xuICAgICAgY29uc3QgdGFza01pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza01pbi5jbGFzc0xpc3QuYWRkKCd0YXNrLW1pbicpO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrTWluKTtcblxuICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgdGFza01pbi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgIGNoZWNrYm94Lm5hbWUgPSB6LmFjdGlvbjtcbiAgICAgIGNoZWNrYm94LmlkID0gei5hY3Rpb247XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pZCcsIHoudGFza0lkKTtcbiAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBkaXZUb0Nyb3NzID0gZS50YXJnZXRcbiAgICAgICAgICAuY2xvc2VzdCgnLnRhc2stbWluJylcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpO1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgZGl2VG9Dcm9zcy5jbGFzc0xpc3QuYWRkKCd0YXNrLWNoZWNrZWQnKTtcbiAgICAgICAgICB0TGlzdC5maW5kKFxuICAgICAgICAgICAgKHgpID0+IHgudGFza0lkID09IGUudGFyZ2V0LmRhdGFzZXQudGFza0lkXG4gICAgICAgICAgKS5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGl2VG9Dcm9zcy5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWNoZWNrZWQnKTtcbiAgICAgICAgICB0TGlzdC5maW5kKFxuICAgICAgICAgICAgKHgpID0+IHgudGFza0lkID09IGUudGFyZ2V0LmRhdGFzZXQudGFza0lkXG4gICAgICAgICAgKS5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpO1xuICAgICAgdGFza01pbi5hcHBlbmRDaGlsZCh0YXNrQ29udGVudCk7XG5cbiAgICAgIGNvbnN0IHRhc2tOYW1lRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza05hbWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZS1kYXRlJyk7XG4gICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrTmFtZURhdGUpO1xuXG4gICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gICAgICB0YXNrTmFtZS5pbm5lclRleHQgPSB6LmFjdGlvbjtcbiAgICAgIHRhc2tOYW1lRGF0ZS5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG5cbiAgICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZGF0ZS1kaXYnKTtcbiAgICAgIGRhdGVEaXYuaW5uZXJUZXh0ID0gei5kYXRlO1xuICAgICAgdGFza05hbWVEYXRlLmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuXG4gICAgICBjb25zdCBwcmlvcml0eURlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJpb3JpdHlEZWxldGUuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktZGVsZXRlJyk7XG4gICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eURlbGV0ZSk7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1kaXYnKTtcbiAgICAgIHByaW9yaXR5RGl2LmlubmVyVGV4dCA9IHoucHJpb3JpdHk7XG4gICAgICBwcmlvcml0eURlbGV0ZS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbiAgICAgIGNvbnN0IGVkaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGVkaXREaXYuY2xhc3NMaXN0LmFkZCgnZWRpdC1kaXYnKTtcbiAgICAgIGVkaXREaXYuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnLCB6LnRhc2tJZCk7XG4gICAgICBlZGl0RGl2LmlubmVyVGV4dCA9ICdlZGl0JztcbiAgICAgIHByaW9yaXR5RGVsZXRlLmFwcGVuZENoaWxkKGVkaXREaXYpO1xuICAgICAgZWRpdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dFZGl0UG9wdXApO1xuXG4gICAgICBjb25zdCBkZWxldGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGRlbGV0ZURpdi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtZGl2Jyk7XG4gICAgICBkZWxldGVEaXYuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnLCB6LnRhc2tJZCk7XG4gICAgICBkZWxldGVEaXYuaW5uZXJUZXh0ID0gJ3gnO1xuICAgICAgcHJpb3JpdHlEZWxldGUuYXBwZW5kQ2hpbGQoZGVsZXRlRGl2KTtcbiAgICAgIC8vXG4gICAgICBjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZXhwYW5kKTtcblxuICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgICBkZXNjLmlubmVyVGV4dCA9IHouZGVzYztcbiAgICAgIGV4cGFuZC5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgIC8vZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29sbGFwc2VUYXNrKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlVGFza0xpc3QgPSAocCkgPT4ge1xuICAgICAgY29uc3QgcEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHBIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3AtaGVhZGluZycpO1xuICAgICAgcEhlYWRpbmcudGV4dENvbnRlbnQgPSBwO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBIZWFkaW5nKTtcbiAgICAgIC8vY3JlYXRlIHRhc2stY29udGFpbmVyIGRpdlxuICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgICAgLy9maWx0ZXIgdGFza3MgYnkgcHJvamVjdCBzZWxlY3Rpb25cbiAgICAgIGNvbnN0IHRhc2tzID0gdExpc3QuZmlsdGVyKCh4KSA9PiB4LnByb2plY3QgPT0gcCk7XG4gICAgICAvL2FwcGVuZCB0YXNrcyBmb3IgdGhpcyBwcm9qZWN0XG4gICAgICB0YXNrcy5mb3JFYWNoKCh6KSA9PiB7XG4gICAgICAgIGlmICh6LnJlbW92ZSAhPSB0cnVlIHx8ICF6LnJlbW92ZSkge1xuICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWlkJywgei50YXNrSWQpO1xuICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgICAgbGF5b3V0VGFzayh0YXNrLCB6KTtcbiAgICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tUYXNrKTtcbiAgICAgICAgICAvL2FwcGVuZCBkZWxldGUgYnV0dG9uXG4gICAgICAgICAgLy9hcHBlbmQgY2hlY2tib3hcbiAgICAgICAgICAvL2FwcGVuZCBleHBhbmQgYXJyb3dcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvL2FkZCBhZGQgdGFzayBidXR0b25cbiAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnV0dG9uJyk7XG4gICAgICBhZGRUYXNrQnV0dG9uLmlubmVyVGV4dCA9ICcrJztcbiAgICAgIGFkZFRhc2tCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBwKTtcbiAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gICAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FkZFBvcHVwKTtcbiAgICB9O1xuXG4gICAgLy93aGF0IGxpc3QocykgdG8gY3JlYXRlXG4gICAgaWYgKHMgPT0gYWxsUHJvamVjdHNUZXh0KSB7XG4gICAgICBwTGlzdC5mb3JFYWNoKCh4KSA9PiBjcmVhdGVUYXNrTGlzdCh4Lm5hbWUpKTtcbiAgICB9IGVsc2UgY3JlYXRlVGFza0xpc3Qocyk7XG4gIH1cblxuICBjb25zdCBwcm9qZWN0U2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgICAvL2NyZWF0ZSBzaWRlYmFyIGJ1dHRvbnNcbiAgICBwTGlzdC5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItcHJvamVjdCcpO1xuICAgICAgcHJvamVjdC5pbm5lclRleHQgPSB4Lm5hbWU7XG4gICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgLy9hZGQgYW4gZXZlbnRsaXN0ZW5lciBmb3IgZWFjaCBwcm9qZWN0IGRpc3BsYXllZFxuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdFByb2plY3QpO1xuICAgIH0pO1xuICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFsbC5jbGFzc0xpc3QuYWRkKCdhbGwnLCAnc2lkZWJhci1wcm9qZWN0Jyk7XG4gICAgYWxsLmlubmVyVGV4dCA9IGFsbFByb2plY3RzVGV4dDtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFsbCk7XG4gICAgYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0UHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVBvcHVwID0gKCkgPT4ge307XG5cbiAgcHJvamVjdFNpZGViYXIoKTtcbiAgdXBkYXRlTWFpbihzZWxlY3Rpb24pO1xuICBkaXNwbGF5UG9wdXAoKTtcblxuICByZXR1cm4geyB1cGRhdGVNYWluIH07XG59O1xuXG5TY3JlZW5Db250cm9sbGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=