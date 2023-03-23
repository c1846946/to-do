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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --sidebar-gray: rgb(204, 198, 198);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Helvetica, sans-serif;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n.content {\n  display: flex;\n  padding: 0px;\n}\n\n.project{\n  margin: 10px;\n\n}\n\n.p-heading {\n  font-weight: bold;\n  \n  \n}\n\n.task-min{\n  \n  padding: 8px 0px 8px 0px;\n  display: flex;\n  align-items: start;\n}\n\n.task-name-date{\n  margin-left: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.checkbox {\n  margin: 3px 0px 0px 0px;\n}\n\n.task-name {\n  flex-basis: 1;\n}\n\n.task-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n\n.date-div, .priority-div {\n  font-size: 11px;\n  color: rgb(102, 101, 101);\n  margin-left: 6px;\n}\n\n.priority-delete {\n  display: flex;\n  gap: 12px;\n}\n\n.priority-div{\n  display: flex;\n  align-items: center;\n}\n.expand {\n  display:none;\n}\n\n.expand.active {\n  display: block;\n}\n\n.desc {\n  padding: 12px;\n}\n\n.task-container {\n  margin: 12px 0px 12px 0px;\n  max-width: 650px;\n  \n  \n  \n}\n\n.task {\n  margin: 6px 0px 6px 0px;\n}\n\n.main {\n  margin-left: 10px;\n  \n  padding-top: 20px;\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding-right: 20px;\n  max-width: 650px;\n}\n\n.sidebar {\n  background-color: rgb(204, 198, 198);\n  height:100vh;\n  flex-basis: 25%;\n  max-width: 320px;\n  margin-right: 12px;\n display: flex;\n flex-direction: column;\n padding-top: 12px;\n}\n\n.instr {\n  padding:12px;\n}\n\nbutton {\n  text-align: start;\n  display: inline-block;\n    border: none;\n    padding: .5rem 2rem;\n    margin: 0;\n    text-decoration: none;\n    background: var(--sidebar-gray);\n    color: #ffffff;\n    font-family: sans-serif;\n    font-size: 1rem;\n    cursor: pointer;\n    text-align: start;\n    transition: background 250ms ease-in-out, \n                transform 150ms ease;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\nbutton:hover,\nbutton:focus {\n    background: #0053ba;\n}\n\nbutton:focus {\n    outline: 1px solid #fff;\n    outline-offset: -4px;\n}\n\nbutton:active {\n    transform: scale(0.99);\n}\n\n.delete-div, .edit-div, .add-task-button {\n  padding: .25rem .5rem;\n  font-size: 12px;\n}\n\n.task-checked {\n  text-decoration: line-through;\n}\n\n.darken-div {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(44, 43, 43, 0.5);\n  height: 100vh;\n  width: 100vw\n}\n\n.darken {\n  display:block\n}\n\n.popup {\n  visibility: hidden;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  padding: 20px;\n}\n\n.show-popup {\n  visibility: visible;\n}\n\n.form-container input[type=text], .form-container textarea {\n  padding: 10px;\n  border: none;\n  background-color: #cbdaed;\n}\n\n.form-container input[type=text], .form-container textarea, .form-container select{\n  margin: 4px 0px 12px 0px;\n  border: none;\n  background-color: #cbdaed;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;AACpC;;AAEA;;;EAGE,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,0KAA0K;AAC5K;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;;AAEd;;AAEA;EACE,iBAAiB;;;AAGnB;;AAEA;;EAEE,wBAAwB;EACxB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;;;;AAIlB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;;EAEjB,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,uBAAuB;;AAEzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;CACnB,aAAa;CACb,sBAAsB;CACtB,iBAAiB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;IACnB,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,qBAAqB;IACrB,+BAA+B;IAC/B,cAAc;IACd,uBAAuB;IACvB,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB;oCACgC;IAChC,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,uCAAuC;EACvC,aAAa;EACb;AACF;;AAEA;EACE;AACF;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,yBAAyB;AAC3B","sourcesContent":[":root {\n  --sidebar-gray: rgb(204, 198, 198);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Helvetica, sans-serif;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n.content {\n  display: flex;\n  padding: 0px;\n}\n\n.project{\n  margin: 10px;\n\n}\n\n.p-heading {\n  font-weight: bold;\n  \n  \n}\n\n.task-min{\n  \n  padding: 8px 0px 8px 0px;\n  display: flex;\n  align-items: start;\n}\n\n.task-name-date{\n  margin-left: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.checkbox {\n  margin: 3px 0px 0px 0px;\n}\n\n.task-name {\n  flex-basis: 1;\n}\n\n.task-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n\n.date-div, .priority-div {\n  font-size: 11px;\n  color: rgb(102, 101, 101);\n  margin-left: 6px;\n}\n\n.priority-delete {\n  display: flex;\n  gap: 12px;\n}\n\n.priority-div{\n  display: flex;\n  align-items: center;\n}\n.expand {\n  display:none;\n}\n\n.expand.active {\n  display: block;\n}\n\n.desc {\n  padding: 12px;\n}\n\n.task-container {\n  margin: 12px 0px 12px 0px;\n  max-width: 650px;\n  \n  \n  \n}\n\n.task {\n  margin: 6px 0px 6px 0px;\n}\n\n.main {\n  margin-left: 10px;\n  \n  padding-top: 20px;\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding-right: 20px;\n  max-width: 650px;\n}\n\n.sidebar {\n  background-color: rgb(204, 198, 198);\n  height:100vh;\n  flex-basis: 25%;\n  max-width: 320px;\n  margin-right: 12px;\n display: flex;\n flex-direction: column;\n padding-top: 12px;\n}\n\n.instr {\n  padding:12px;\n}\n\nbutton {\n  text-align: start;\n  display: inline-block;\n    border: none;\n    padding: .5rem 2rem;\n    margin: 0;\n    text-decoration: none;\n    background: var(--sidebar-gray);\n    color: #ffffff;\n    font-family: sans-serif;\n    font-size: 1rem;\n    cursor: pointer;\n    text-align: start;\n    transition: background 250ms ease-in-out, \n                transform 150ms ease;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\nbutton:hover,\nbutton:focus {\n    background: #0053ba;\n}\n\nbutton:focus {\n    outline: 1px solid #fff;\n    outline-offset: -4px;\n}\n\nbutton:active {\n    transform: scale(0.99);\n}\n\n.delete-div, .edit-div, .add-task-button {\n  padding: .25rem .5rem;\n  font-size: 12px;\n}\n\n.task-checked {\n  text-decoration: line-through;\n}\n\n.darken-div {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(44, 43, 43, 0.5);\n  height: 100vh;\n  width: 100vw\n}\n\n.darken {\n  display:block\n}\n\n.popup {\n  visibility: hidden;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  padding: 20px;\n}\n\n.show-popup {\n  visibility: visible;\n}\n\n.form-container input[type=text], .form-container textarea {\n  padding: 10px;\n  border: none;\n  background-color: #cbdaed;\n}\n\n.form-container input[type=text], .form-container textarea, .form-container select{\n  margin: 4px 0px 12px 0px;\n  border: none;\n  background-color: #cbdaed;\n}\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsT0FBTztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msd0JBQXdCO0FBQzVEO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc2hvcnQtdW5pcXVlLWlkL2Rpc3Qvc2hvcnQtdW5pcXVlLWlkLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXNpZGViYXItZ3JheTogcmdiKDIwNCwgMTk4LCAxOTgpO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgbWFyZ2luOiAxMHB4O1xcblxcbn1cXG5cXG4ucC1oZWFkaW5nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgXFxuICBcXG59XFxuXFxuLnRhc2stbWlue1xcbiAgXFxuICBwYWRkaW5nOiA4cHggMHB4IDhweCAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4udGFzay1uYW1lLWRhdGV7XFxuICBtYXJnaW4tbGVmdDogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICBtYXJnaW46IDNweCAwcHggMHB4IDBweDtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICBmbGV4LWJhc2lzOiAxO1xcbn1cXG5cXG4udGFzay1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uZGF0ZS1kaXYsIC5wcmlvcml0eS1kaXYge1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgY29sb3I6IHJnYigxMDIsIDEwMSwgMTAxKTtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxufVxcblxcbi5wcmlvcml0eS1kZWxldGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnByaW9yaXR5LWRpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZXhwYW5kIHtcXG4gIGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLmV4cGFuZC5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kZXNjIHtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xcbiAgbWF4LXdpZHRoOiA2NTBweDtcXG4gIFxcbiAgXFxuICBcXG59XFxuXFxuLnRhc2sge1xcbiAgbWFyZ2luOiA2cHggMHB4IDZweCAwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBtYXgtd2lkdGg6IDY1MHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAxOTgsIDE5OCk7XFxuICBoZWlnaHQ6MTAwdmg7XFxuICBmbGV4LWJhc2lzOiAyNSU7XFxuICBtYXgtd2lkdGg6IDMyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiBkaXNwbGF5OiBmbGV4O1xcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiBwYWRkaW5nLXRvcDogMTJweDtcXG59XFxuXFxuLmluc3RyIHtcXG4gIHBhZGRpbmc6MTJweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWdyYXkpO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAyNTBtcyBlYXNlLWluLW91dCwgXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAxNTBtcyBlYXNlO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDUzYmE7XFxufVxcblxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjZmZmO1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTRweDtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XFxufVxcblxcbi5kZWxldGUtZGl2LCAuZWRpdC1kaXYsIC5hZGQtdGFzay1idXR0b24ge1xcbiAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4udGFzay1jaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZGFya2VuLWRpdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDQsIDQzLCA0MywgMC41KTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdndcXG59XFxuXFxuLmRhcmtlbiB7XFxuICBkaXNwbGF5OmJsb2NrXFxufVxcblxcbi5wb3B1cCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5zaG93LXBvcHVwIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdLCAuZm9ybS1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmRhZWQ7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdLCAuZm9ybS1jb250YWluZXIgdGV4dGFyZWEsIC5mb3JtLWNvbnRhaW5lciBzZWxlY3R7XFxuICBtYXJnaW46IDRweCAwcHggMTJweCAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkYWVkO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCwwS0FBMEs7QUFDNUs7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGlCQUFpQjs7O0FBR25COztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7Ozs7QUFJbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7O0VBRWpCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGlCQUFpQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCO29DQUNnQztJQUNoQyx3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCx1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXNpZGViYXItZ3JheTogcmdiKDIwNCwgMTk4LCAxOTgpO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgbWFyZ2luOiAxMHB4O1xcblxcbn1cXG5cXG4ucC1oZWFkaW5nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgXFxuICBcXG59XFxuXFxuLnRhc2stbWlue1xcbiAgXFxuICBwYWRkaW5nOiA4cHggMHB4IDhweCAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4udGFzay1uYW1lLWRhdGV7XFxuICBtYXJnaW4tbGVmdDogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICBtYXJnaW46IDNweCAwcHggMHB4IDBweDtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICBmbGV4LWJhc2lzOiAxO1xcbn1cXG5cXG4udGFzay1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uZGF0ZS1kaXYsIC5wcmlvcml0eS1kaXYge1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgY29sb3I6IHJnYigxMDIsIDEwMSwgMTAxKTtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxufVxcblxcbi5wcmlvcml0eS1kZWxldGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnByaW9yaXR5LWRpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZXhwYW5kIHtcXG4gIGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLmV4cGFuZC5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kZXNjIHtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xcbiAgbWF4LXdpZHRoOiA2NTBweDtcXG4gIFxcbiAgXFxuICBcXG59XFxuXFxuLnRhc2sge1xcbiAgbWFyZ2luOiA2cHggMHB4IDZweCAwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBtYXgtd2lkdGg6IDY1MHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAxOTgsIDE5OCk7XFxuICBoZWlnaHQ6MTAwdmg7XFxuICBmbGV4LWJhc2lzOiAyNSU7XFxuICBtYXgtd2lkdGg6IDMyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiBkaXNwbGF5OiBmbGV4O1xcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiBwYWRkaW5nLXRvcDogMTJweDtcXG59XFxuXFxuLmluc3RyIHtcXG4gIHBhZGRpbmc6MTJweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWdyYXkpO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAyNTBtcyBlYXNlLWluLW91dCwgXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAxNTBtcyBlYXNlO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDUzYmE7XFxufVxcblxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjZmZmO1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTRweDtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XFxufVxcblxcbi5kZWxldGUtZGl2LCAuZWRpdC1kaXYsIC5hZGQtdGFzay1idXR0b24ge1xcbiAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4udGFzay1jaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZGFya2VuLWRpdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDQsIDQzLCA0MywgMC41KTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdndcXG59XFxuXFxuLmRhcmtlbiB7XFxuICBkaXNwbGF5OmJsb2NrXFxufVxcblxcbi5wb3B1cCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5zaG93LXBvcHVwIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdLCAuZm9ybS1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmRhZWQ7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdLCAuZm9ybS1jb250YWluZXIgdGV4dGFyZWEsIC5mb3JtLWNvbnRhaW5lciBzZWxlY3R7XFxuICBtYXJnaW46IDRweCAwcHggMTJweCAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkYWVkO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciBTaG9ydFVuaXF1ZUlkID0gKCgpID0+IHtcbiAgdmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbiAgdmFyIF9fZ2V0T3duUHJvcFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuICB2YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIF9fcHJvcElzRW51bSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbiAgdmFyIF9fc3ByZWFkVmFsdWVzID0gKGEsIGIpID0+IHtcbiAgICBmb3IgKHZhciBwcm9wIGluIGIgfHwgKGIgPSB7fSkpXG4gICAgICBpZiAoX19oYXNPd25Qcm9wLmNhbGwoYiwgcHJvcCkpXG4gICAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcbiAgICBpZiAoX19nZXRPd25Qcm9wU3ltYm9scylcbiAgICAgIGZvciAodmFyIHByb3Agb2YgX19nZXRPd25Qcm9wU3ltYm9scyhiKSkge1xuICAgICAgICBpZiAoX19wcm9wSXNFbnVtLmNhbGwoYiwgcHJvcCkpXG4gICAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICAgICAgfVxuICAgIHJldHVybiBhO1xuICB9O1xuICB2YXIgX19tYXJrQXNNb2R1bGUgPSAodGFyZ2V0KSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgdmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gICAgX19tYXJrQXNNb2R1bGUodGFyZ2V0KTtcbiAgICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG4gIH07XG5cbiAgLy8gc3JjL2luZGV4LnRzXG4gIHZhciBzcmNfZXhwb3J0cyA9IHt9O1xuICBfX2V4cG9ydChzcmNfZXhwb3J0cywge1xuICAgIERFRkFVTFRfVVVJRF9MRU5HVEg6ICgpID0+IERFRkFVTFRfVVVJRF9MRU5HVEgsXG4gICAgZGVmYXVsdDogKCkgPT4gU2hvcnRVbmlxdWVJZFxuICB9KTtcblxuICAvLyBwYWNrYWdlLmpzb25cbiAgdmFyIHZlcnNpb24gPSBcIjQuNC40XCI7XG5cbiAgLy8gc3JjL2luZGV4LnRzXG4gIHZhciBERUZBVUxUX1VVSURfTEVOR1RIID0gNjtcbiAgdmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgICBkaWN0aW9uYXJ5OiBcImFscGhhbnVtXCIsXG4gICAgc2h1ZmZsZTogdHJ1ZSxcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgbGVuZ3RoOiBERUZBVUxUX1VVSURfTEVOR1RIXG4gIH07XG4gIHZhciBfU2hvcnRVbmlxdWVJZCA9IGNsYXNzIGV4dGVuZHMgRnVuY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKGFyZ09wdGlvbnMgPSB7fSkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuZGljdEluZGV4ID0gMDtcbiAgICAgIHRoaXMuZGljdFJhbmdlID0gW107XG4gICAgICB0aGlzLmxvd2VyQm91bmQgPSAwO1xuICAgICAgdGhpcy51cHBlckJvdW5kID0gMDtcbiAgICAgIHRoaXMuZGljdExlbmd0aCA9IDA7XG4gICAgICB0aGlzLl9kaWdpdF9maXJzdF9hc2NpaSA9IDQ4O1xuICAgICAgdGhpcy5fZGlnaXRfbGFzdF9hc2NpaSA9IDU4O1xuICAgICAgdGhpcy5fYWxwaGFfbG93ZXJfZmlyc3RfYXNjaWkgPSA5NztcbiAgICAgIHRoaXMuX2FscGhhX2xvd2VyX2xhc3RfYXNjaWkgPSAxMjM7XG4gICAgICB0aGlzLl9oZXhfbGFzdF9hc2NpaSA9IDEwMztcbiAgICAgIHRoaXMuX2FscGhhX3VwcGVyX2ZpcnN0X2FzY2lpID0gNjU7XG4gICAgICB0aGlzLl9hbHBoYV91cHBlcl9sYXN0X2FzY2lpID0gOTE7XG4gICAgICB0aGlzLl9udW1iZXJfZGljdF9yYW5nZXMgPSB7XG4gICAgICAgIGRpZ2l0czogW3RoaXMuX2RpZ2l0X2ZpcnN0X2FzY2lpLCB0aGlzLl9kaWdpdF9sYXN0X2FzY2lpXVxuICAgICAgfTtcbiAgICAgIHRoaXMuX2FscGhhX2RpY3RfcmFuZ2VzID0ge1xuICAgICAgICBsb3dlckNhc2U6IFt0aGlzLl9hbHBoYV9sb3dlcl9maXJzdF9hc2NpaSwgdGhpcy5fYWxwaGFfbG93ZXJfbGFzdF9hc2NpaV0sXG4gICAgICAgIHVwcGVyQ2FzZTogW3RoaXMuX2FscGhhX3VwcGVyX2ZpcnN0X2FzY2lpLCB0aGlzLl9hbHBoYV91cHBlcl9sYXN0X2FzY2lpXVxuICAgICAgfTtcbiAgICAgIHRoaXMuX2FscGhhX2xvd2VyX2RpY3RfcmFuZ2VzID0ge1xuICAgICAgICBsb3dlckNhc2U6IFt0aGlzLl9hbHBoYV9sb3dlcl9maXJzdF9hc2NpaSwgdGhpcy5fYWxwaGFfbG93ZXJfbGFzdF9hc2NpaV1cbiAgICAgIH07XG4gICAgICB0aGlzLl9hbHBoYV91cHBlcl9kaWN0X3JhbmdlcyA9IHtcbiAgICAgICAgdXBwZXJDYXNlOiBbdGhpcy5fYWxwaGFfdXBwZXJfZmlyc3RfYXNjaWksIHRoaXMuX2FscGhhX3VwcGVyX2xhc3RfYXNjaWldXG4gICAgICB9O1xuICAgICAgdGhpcy5fYWxwaGFudW1fZGljdF9yYW5nZXMgPSB7XG4gICAgICAgIGRpZ2l0czogW3RoaXMuX2RpZ2l0X2ZpcnN0X2FzY2lpLCB0aGlzLl9kaWdpdF9sYXN0X2FzY2lpXSxcbiAgICAgICAgbG93ZXJDYXNlOiBbdGhpcy5fYWxwaGFfbG93ZXJfZmlyc3RfYXNjaWksIHRoaXMuX2FscGhhX2xvd2VyX2xhc3RfYXNjaWldLFxuICAgICAgICB1cHBlckNhc2U6IFt0aGlzLl9hbHBoYV91cHBlcl9maXJzdF9hc2NpaSwgdGhpcy5fYWxwaGFfdXBwZXJfbGFzdF9hc2NpaV1cbiAgICAgIH07XG4gICAgICB0aGlzLl9hbHBoYW51bV9sb3dlcl9kaWN0X3JhbmdlcyA9IHtcbiAgICAgICAgZGlnaXRzOiBbdGhpcy5fZGlnaXRfZmlyc3RfYXNjaWksIHRoaXMuX2RpZ2l0X2xhc3RfYXNjaWldLFxuICAgICAgICBsb3dlckNhc2U6IFt0aGlzLl9hbHBoYV9sb3dlcl9maXJzdF9hc2NpaSwgdGhpcy5fYWxwaGFfbG93ZXJfbGFzdF9hc2NpaV1cbiAgICAgIH07XG4gICAgICB0aGlzLl9hbHBoYW51bV91cHBlcl9kaWN0X3JhbmdlcyA9IHtcbiAgICAgICAgZGlnaXRzOiBbdGhpcy5fZGlnaXRfZmlyc3RfYXNjaWksIHRoaXMuX2RpZ2l0X2xhc3RfYXNjaWldLFxuICAgICAgICB1cHBlckNhc2U6IFt0aGlzLl9hbHBoYV91cHBlcl9maXJzdF9hc2NpaSwgdGhpcy5fYWxwaGFfdXBwZXJfbGFzdF9hc2NpaV1cbiAgICAgIH07XG4gICAgICB0aGlzLl9oZXhfZGljdF9yYW5nZXMgPSB7XG4gICAgICAgIGRlY0RpZ2l0czogW3RoaXMuX2RpZ2l0X2ZpcnN0X2FzY2lpLCB0aGlzLl9kaWdpdF9sYXN0X2FzY2lpXSxcbiAgICAgICAgYWxwaGFEaWdpdHM6IFt0aGlzLl9hbHBoYV9sb3dlcl9maXJzdF9hc2NpaSwgdGhpcy5faGV4X2xhc3RfYXNjaWldXG4gICAgICB9O1xuICAgICAgdGhpcy5sb2cgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBmaW5hbEFyZ3MgPSBbLi4uYXJnc107XG4gICAgICAgIGZpbmFsQXJnc1swXSA9IGBbc2hvcnQtdW5pcXVlLWlkXSAke2FyZ3NbMF19YDtcbiAgICAgICAgaWYgKHRoaXMuZGVidWcgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKC4uLmZpbmFsQXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5zZXREaWN0aW9uYXJ5ID0gKGRpY3Rpb25hcnksIHNodWZmbGUpID0+IHtcbiAgICAgICAgbGV0IGZpbmFsRGljdDtcbiAgICAgICAgaWYgKGRpY3Rpb25hcnkgJiYgQXJyYXkuaXNBcnJheShkaWN0aW9uYXJ5KSAmJiBkaWN0aW9uYXJ5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBmaW5hbERpY3QgPSBkaWN0aW9uYXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbmFsRGljdCA9IFtdO1xuICAgICAgICAgIGxldCBpO1xuICAgICAgICAgIHRoaXMuZGljdEluZGV4ID0gaSA9IDA7XG4gICAgICAgICAgY29uc3QgcmFuZ2VzTmFtZSA9IGBfJHtkaWN0aW9uYXJ5fV9kaWN0X3Jhbmdlc2A7XG4gICAgICAgICAgY29uc3QgcmFuZ2VzID0gdGhpc1tyYW5nZXNOYW1lXTtcbiAgICAgICAgICBPYmplY3Qua2V5cyhyYW5nZXMpLmZvckVhY2goKHJhbmdlVHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmFuZ2VUeXBlS2V5ID0gcmFuZ2VUeXBlO1xuICAgICAgICAgICAgdGhpcy5kaWN0UmFuZ2UgPSByYW5nZXNbcmFuZ2VUeXBlS2V5XTtcbiAgICAgICAgICAgIHRoaXMubG93ZXJCb3VuZCA9IHRoaXMuZGljdFJhbmdlWzBdO1xuICAgICAgICAgICAgdGhpcy51cHBlckJvdW5kID0gdGhpcy5kaWN0UmFuZ2VbMV07XG4gICAgICAgICAgICBmb3IgKHRoaXMuZGljdEluZGV4ID0gaSA9IHRoaXMubG93ZXJCb3VuZDsgdGhpcy5sb3dlckJvdW5kIDw9IHRoaXMudXBwZXJCb3VuZCA/IGkgPCB0aGlzLnVwcGVyQm91bmQgOiBpID4gdGhpcy51cHBlckJvdW5kOyB0aGlzLmRpY3RJbmRleCA9IHRoaXMubG93ZXJCb3VuZCA8PSB0aGlzLnVwcGVyQm91bmQgPyBpICs9IDEgOiBpIC09IDEpIHtcbiAgICAgICAgICAgICAgZmluYWxEaWN0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLmRpY3RJbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaHVmZmxlKSB7XG4gICAgICAgICAgY29uc3QgUFJPQkFCSUxJVFkgPSAwLjU7XG4gICAgICAgICAgZmluYWxEaWN0ID0gZmluYWxEaWN0LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIFBST0JBQklMSVRZKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpY3QgPSBmaW5hbERpY3Q7XG4gICAgICAgIHRoaXMuZGljdExlbmd0aCA9IHRoaXMuZGljdC5sZW5ndGg7XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgICB9O1xuICAgICAgdGhpcy5zZXEgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcXVlbnRpYWxVVUlEKCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5zZXF1ZW50aWFsVVVJRCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvdW50ZXJEaXY7XG4gICAgICAgIGxldCBjb3VudGVyUmVtO1xuICAgICAgICBsZXQgaWQgPSBcIlwiO1xuICAgICAgICBjb3VudGVyRGl2ID0gdGhpcy5jb3VudGVyO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgY291bnRlclJlbSA9IGNvdW50ZXJEaXYgJSB0aGlzLmRpY3RMZW5ndGg7XG4gICAgICAgICAgY291bnRlckRpdiA9IE1hdGgudHJ1bmMoY291bnRlckRpdiAvIHRoaXMuZGljdExlbmd0aCk7XG4gICAgICAgICAgaWQgKz0gdGhpcy5kaWN0W2NvdW50ZXJSZW1dO1xuICAgICAgICB9IHdoaWxlIChjb3VudGVyRGl2ICE9PSAwKTtcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH07XG4gICAgICB0aGlzLnJhbmRvbVVVSUQgPSAodXVpZExlbmd0aCA9IHRoaXMudXVpZExlbmd0aCB8fCBERUZBVUxUX1VVSURfTEVOR1RIKSA9PiB7XG4gICAgICAgIGxldCBpZDtcbiAgICAgICAgbGV0IHJhbmRvbVBhcnRJZHg7XG4gICAgICAgIGxldCBqO1xuICAgICAgICBpZiAodXVpZExlbmd0aCA9PT0gbnVsbCB8fCB0eXBlb2YgdXVpZExlbmd0aCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB1dWlkTGVuZ3RoIDwgMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgVVVJRCBMZW5ndGggUHJvdmlkZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNQb3NpdGl2ZSA9IHV1aWRMZW5ndGggPj0gMDtcbiAgICAgICAgaWQgPSBcIlwiO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgdXVpZExlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgcmFuZG9tUGFydElkeCA9IHBhcnNlSW50KChNYXRoLnJhbmRvbSgpICogdGhpcy5kaWN0TGVuZ3RoKS50b0ZpeGVkKDApLCAxMCkgJSB0aGlzLmRpY3RMZW5ndGg7XG4gICAgICAgICAgaWQgKz0gdGhpcy5kaWN0W3JhbmRvbVBhcnRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH07XG4gICAgICB0aGlzLmF2YWlsYWJsZVVVSURzID0gKHV1aWRMZW5ndGggPSB0aGlzLnV1aWRMZW5ndGgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoTWF0aC5wb3coWy4uLm5ldyBTZXQodGhpcy5kaWN0KV0ubGVuZ3RoLCB1dWlkTGVuZ3RoKS50b0ZpeGVkKDApKTtcbiAgICAgIH07XG4gICAgICB0aGlzLmFwcHJveE1heEJlZm9yZUNvbGxpc2lvbiA9IChyb3VuZHMgPSB0aGlzLmF2YWlsYWJsZVVVSURzKHRoaXMudXVpZExlbmd0aCkpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoTWF0aC5zcXJ0KE1hdGguUEkgLyAyICogcm91bmRzKS50b0ZpeGVkKDIwKSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5jb2xsaXNpb25Qcm9iYWJpbGl0eSA9IChyb3VuZHMgPSB0aGlzLmF2YWlsYWJsZVVVSURzKHRoaXMudXVpZExlbmd0aCksIHV1aWRMZW5ndGggPSB0aGlzLnV1aWRMZW5ndGgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoKHRoaXMuYXBwcm94TWF4QmVmb3JlQ29sbGlzaW9uKHJvdW5kcykgLyB0aGlzLmF2YWlsYWJsZVVVSURzKHV1aWRMZW5ndGgpKS50b0ZpeGVkKDIwKSk7XG4gICAgICB9O1xuICAgICAgdGhpcy51bmlxdWVuZXNzID0gKHJvdW5kcyA9IHRoaXMuYXZhaWxhYmxlVVVJRHModGhpcy51dWlkTGVuZ3RoKSkgPT4ge1xuICAgICAgICBjb25zdCBzY29yZSA9IHBhcnNlRmxvYXQoKDEgLSB0aGlzLmFwcHJveE1heEJlZm9yZUNvbGxpc2lvbihyb3VuZHMpIC8gcm91bmRzKS50b0ZpeGVkKDIwKSk7XG4gICAgICAgIHJldHVybiBzY29yZSA+IDEgPyAxIDogc2NvcmUgPCAwID8gMCA6IHNjb3JlO1xuICAgICAgfTtcbiAgICAgIHRoaXMuZ2V0VmVyc2lvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbiAgICAgIH07XG4gICAgICB0aGlzLnN0YW1wID0gKGZpbmFsTGVuZ3RoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZmluYWxMZW5ndGggIT09IFwibnVtYmVyXCIgfHwgZmluYWxMZW5ndGggPCAxMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmFtIGZpbmFsTGVuZ3RoIG11c3QgYmUgbnVtYmVyIGdyZWF0ZXIgdGhhbiAxMFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoZXhTdGFtcCA9IE1hdGguZmxvb3IoK25ldyBEYXRlKCkgLyAxZTMpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgY29uc3QgaWRMZW5ndGggPSBmaW5hbExlbmd0aCAtIDk7XG4gICAgICAgIGNvbnN0IHJuZElkeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChpZExlbmd0aCA+IDE1ID8gMTUgOiBpZExlbmd0aCkpO1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMucmFuZG9tVVVJRChpZExlbmd0aCk7XG4gICAgICAgIHJldHVybiBgJHtpZC5zdWJzdHIoMCwgcm5kSWR4KX0ke2hleFN0YW1wfSR7aWQuc3Vic3RyKHJuZElkeCl9JHtybmRJZHgudG9TdHJpbmcoMTYpfWA7XG4gICAgICB9O1xuICAgICAgdGhpcy5wYXJzZVN0YW1wID0gKHN0YW1wKSA9PiB7XG4gICAgICAgIGlmIChzdGFtcC5sZW5ndGggPCAxMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN0YW1wIGxlbmd0aCBpbnZhbGlkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJuZElkeCA9IHBhcnNlSW50KHN0YW1wLnN1YnN0cihzdGFtcC5sZW5ndGggLSAxLCAxKSwgMTYpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUocGFyc2VJbnQoc3RhbXAuc3Vic3RyKHJuZElkeCwgOCksIDE2KSAqIDFlMyk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IF9fc3ByZWFkVmFsdWVzKF9fc3ByZWFkVmFsdWVzKHt9LCBERUZBVUxUX09QVElPTlMpLCBhcmdPcHRpb25zKTtcbiAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgICB0aGlzLmRlYnVnID0gZmFsc2U7XG4gICAgICB0aGlzLmRpY3QgPSBbXTtcbiAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRpY3Rpb25hcnksXG4gICAgICAgIHNodWZmbGUsXG4gICAgICAgIGxlbmd0aFxuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICB0aGlzLnV1aWRMZW5ndGggPSBsZW5ndGg7XG4gICAgICB0aGlzLnNldERpY3Rpb25hcnkoZGljdGlvbmFyeSwgc2h1ZmZsZSk7XG4gICAgICB0aGlzLmRlYnVnID0gb3B0aW9ucy5kZWJ1ZztcbiAgICAgIHRoaXMubG9nKHRoaXMuZGljdCk7XG4gICAgICB0aGlzLmxvZyhgR2VuZXJhdG9yIGluc3RhbnRpYXRlZCB3aXRoIERpY3Rpb25hcnkgU2l6ZSAke3RoaXMuZGljdExlbmd0aH1gKTtcbiAgICAgIHJldHVybiBuZXcgUHJveHkodGhpcywge1xuICAgICAgICBhcHBseTogKHRhcmdldCwgdGhhdCwgYXJncykgPT4gdGhpcy5yYW5kb21VVUlEKC4uLmFyZ3MpXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHZhciBTaG9ydFVuaXF1ZUlkID0gX1Nob3J0VW5pcXVlSWQ7XG4gIFNob3J0VW5pcXVlSWQuZGVmYXVsdCA9IF9TaG9ydFVuaXF1ZUlkO1xuICByZXR1cm4gc3JjX2V4cG9ydHM7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2hvcnQtdW5pcXVlLWlkLmpzLm1hcFxuJ3VuZGVmaW5lZCchPXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1TaG9ydFVuaXF1ZUlkLmRlZmF1bHQpLCd1bmRlZmluZWQnIT10eXBlb2Ygd2luZG93JiYoU2hvcnRVbmlxdWVJZD1TaG9ydFVuaXF1ZUlkLmRlZmF1bHQpOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgU2hvcnRVbmlxdWVJZCA9IHJlcXVpcmUoJ3Nob3J0LXVuaXF1ZS1pZCcpO1xuY29uc3QgdWlkID0gbmV3IFNob3J0VW5pcXVlSWQoeyBsZW5ndGg6IDE2IH0pO1xuXG5jb25zdCBwTGlzdCA9IFtdO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgcmV0dXJuIHBMaXN0O1xufTtcblxuY29uc3QgUHJvamVjdEZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICBwTGlzdC5wdXNoKHsgbmFtZSB9KTtcbn07XG5cbmNvbnN0IHRMaXN0ID0gW107XG5cbmNvbnN0IHRvRG9MaXN0ID0gKCkgPT4ge1xuICByZXR1cm4gdExpc3Q7XG59O1xuXG5jb25zdCBUb0RvRmFjdG9yeSA9IChhY3Rpb24sIHByb2plY3QsIGRlc2MsIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gIGNvbnN0IHRhc2tJZCA9IHVpZCgpO1xuICB0TGlzdC5wdXNoKHtcbiAgICBhY3Rpb24sXG4gICAgdGFza0lkLFxuICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICBwcm9qZWN0LFxuICAgIGRlc2MsXG4gICAgZGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBQcm9qZWN0RmFjdG9yeSwgVG9Eb0ZhY3RvcnksIHByb2plY3RMaXN0LCB0b0RvTGlzdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQcm9qZWN0RmFjdG9yeSwgVG9Eb0ZhY3RvcnksIHByb2plY3RMaXN0LCB0b0RvTGlzdCB9IGZyb20gJy4vdG9kb3MnO1xuXG4vL2ludGVyYWN0aW9uXG5Qcm9qZWN0RmFjdG9yeSgnSG9tZScpO1xuUHJvamVjdEZhY3RvcnkoJ0hhcmR3YXJlIFN0b3JlJyk7XG5Qcm9qZWN0RmFjdG9yeSgndGVzdCcpO1xuUHJvamVjdEZhY3RvcnkoJ2J1dHRlcmY7eScpO1xuUHJvamVjdEZhY3RvcnkoJ01pc2MnKTtcblxuVG9Eb0ZhY3RvcnkoJ3Rlc3QgYWN0aW9uJywgJ3Rlc3QnLCAnJywgJycsICcnKTtcblRvRG9GYWN0b3J5KFxuICAnV2FzaCB0aGUgZGlzaGVzJyxcbiAgJ0hvbWUnLFxuICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLicsXG4gICdUaHVyc2RheScsXG4gICdIaWdoIHByaW9yaXR5J1xuKTtcblRvRG9GYWN0b3J5KCdCdXkgc2hvcCB0b3dlbHMnLCAnSGFyZHdhcmUgU3RvcmUnLCAnJywgJycsICcnKTtcblRvRG9GYWN0b3J5KCdTd2VlcCB0aGUgZmxvb3InLCAnSG9tZScsICcnLCAnJywgJycpO1xuY29uc29sZS5sb2cocHJvamVjdExpc3QoKSk7XG5jb25zb2xlLmxvZyh0b0RvTGlzdCgpKTtcblxuY29uc3QgU2NyZWVuQ29udHJvbGxlciA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgLy9zdGF0ZSBvZiBtYWluXG4gIGxldCBzZWxlY3Rpb24gPSAnSG9tZSc7XG4gIGNvbnN0IHBMaXN0ID0gcHJvamVjdExpc3QoKTtcbiAgY29uc3QgdExpc3QgPSB0b0RvTGlzdCgpO1xuICBjb25zdCBhY3RpdmVUTGlzdCA9ICgpID0+IHRMaXN0LmZpbHRlcigoeCkgPT4geC5yZW1vdmUgPT0gZmFsc2UgfHwgIXgucmVtb3ZlKTtcblxuICBjb25zdCBhbGxQcm9qZWN0c1RleHQgPSAnQWxsIFByb2plY3RzJztcblxuICBjb25zdCByZXNldE1haW4gPSAoc2VsZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChtYWluKTtcbiAgICB1cGRhdGVNYWluKHNlbGVjdGlvbik7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IChlKSA9PiB7XG4gICAgLy9yZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYWxsIGRpdnNcbiAgICAvL2FkZCBhY3RpdmUgY2xhc3MgdG8gc2VsZWN0ZWQgZGl2XG5cbiAgICAvL3Bhc3Mgc2VsZWN0ZWQgcHJvamVjdCB0byB1cGRhdGUgbWFpblxuICAgIHNlbGVjdGlvbiA9IGUudGFyZ2V0LmlubmVyVGV4dDtcbiAgICByZXNldE1haW4oc2VsZWN0aW9uKTtcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICAgIC8vZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrJykudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MnKS52YWx1ZTtcbiAgICAvL2VudGVyIHBhcmFtZXRlcnNcbiAgICBUb0RvRmFjdG9yeSh0YXNrLCBwcm9qZWN0LCBkZXNjLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgY29uc29sZS5sb2codExpc3QpO1xuICAgIHJlc2V0TWFpbihzZWxlY3Rpb24pO1xuXG4gICAgLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpO1xuICAgIC8vIGZvcm0ucmVzZXQoKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQb3B1cCA9ICgpID0+IHtcbiAgICAvL3JlbW92ZSBkYXJrZW4gY2xhc3NcbiAgICBkYXJrZW5EaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGFya2VuJyk7XG4gICAgLy9yZW1vdmUgc2hvdyBwb3B1cCBjbGFzc1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1wb3B1cCcpO1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQocG9wdXApO1xuICB9O1xuXG4gIGNvbnN0IGRhcmtlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXJrZW5EaXYuY2xhc3NMaXN0LmFkZCgnZGFya2VuLWRpdicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGRhcmtlbkRpdik7XG4gIGRhcmtlbkRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVBvcHVwKTtcblxuICBjb25zdCBlZGl0VGFzayA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFza1RvRWRpdCA9IHRMaXN0LmZpbmQoKHgpID0+IHgudGFza0lkID09IGUudGFyZ2V0LmRhdGFzZXQudGFza0lkKTtcbiAgICAvL3JlcGxhY2Uga2V5L3ZhbHVlcyB3aXRoIHBvcHVwIGVudHJpZXNcbiAgICB0YXNrVG9FZGl0LmFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrJykudmFsdWU7XG4gICAgdGFza1RvRWRpdC5wcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZTtcbiAgICB0YXNrVG9FZGl0LmRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIHRhc2tUb0VkaXQucHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZTtcbiAgICB0YXNrVG9FZGl0LmRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYycpLnZhbHVlO1xuXG4gICAgY29uc29sZS5sb2coJ2VkaXQgcG9wdXAgZm9yJywgdGFza1RvRWRpdCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0VkaXRQb3B1cCA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFza1RvRWRpdCA9IHRMaXN0LmZpbmQoKHgpID0+IHgudGFza0lkID09IGUudGFyZ2V0LmRhdGFzZXQudGFza0lkKTtcbiAgICBzaG93UG9wdXAoZSk7XG4gICAgLy9wcmVmaWxsIGV4aXN0aW5nIHZhbHVlc1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrJykudmFsdWUgPSB0YXNrVG9FZGl0LmFjdGlvbjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLnZhbHVlID0gdGFza1RvRWRpdC5wcm9qZWN0O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWUgPSB0YXNrVG9FZGl0LmRhdGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5Jykub3B0aW9uID0gdGFza1RvRWRpdC5wcmlvcml0eTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYycpLnZhbHVlID0gdGFza1RvRWRpdC5kZXNjO1xuXG4gICAgY29uc3QgY3JlYXRlUG9wdXBFZGl0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbiAgICAgIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHRhc2tTdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICAgICAgdGFza1N1Ym1pdC5pbm5lclRleHQgPSAnU2F2ZSc7XG4gICAgICB0YXNrU3VibWl0LmlkID0gJ3N1Ym1pdCc7XG4gICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0YXNrU3VibWl0KTtcbiAgICAgIHRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGVkaXRUYXNrKGUpO1xuICAgICAgICByZW1vdmVQb3B1cCgpO1xuICAgICAgICByZXNldE1haW4oc2VsZWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjcmVhdGVQb3B1cEVkaXRCdXR0b24oKTtcbiAgfTtcblxuICBjb25zdCBzaG93QWRkUG9wdXAgPSAoZSkgPT4ge1xuICAgIHNob3dQb3B1cChlKTtcbiAgICBjb25zdCBjcmVhdGVQb3B1cEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XG4gICAgICBjb25zdCB0YXNrU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICB0YXNrU3VibWl0LnR5cGUgPSAnc3VibWl0JztcbiAgICAgIHRhc2tTdWJtaXQuaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgICB0YXNrU3VibWl0LmlkID0gJ3N1Ym1pdCc7XG4gICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0YXNrU3VibWl0KTtcbiAgICAgIHRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZFRhc2soKTtcbiAgICAgICAgcmVtb3ZlUG9wdXAoKTtcbiAgICAgICAgcmVzZXRNYWluKHNlbGVjdGlvbik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY3JlYXRlUG9wdXBCdXR0b24oKTtcbiAgfTtcblxuICBjb25zdCBzaG93UG9wdXAgPSAoZSkgPT4ge1xuICAgIC8vYWRkIC5kYXJrZW4gdG8gZGFya2VuRGl2XG4gICAgZGFya2VuRGl2LmNsYXNzTGlzdC5hZGQoJ2RhcmtlbicpO1xuXG4gICAgY3JlYXRlUG9wdXAoZSk7XG4gICAgLy9hZGQgLnNob3ctcG9wdXAgdG8gcG9wdXBcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3Nob3ctcG9wdXAnKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQb3B1cCA9IChlKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnaWQnLCAnbXlGb3JtJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwb3B1cCk7XG5cbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuICAgIHBvcHVwLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcblxuICAgIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza0xhYmVsLmZvciA9ICd0YXNrJztcbiAgICB0YXNrTGFiZWwuaW5uZXJUZXh0ID0gJ1Rhc2snO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cbiAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRhc2tJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBUYXNrJztcbiAgICB0YXNrSW5wdXQuaWQgPSAndGFzayc7XG4gICAgLy90YXNrSW5wdXQubmFtZSA9ICd0YXNrJztcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0TGFiZWwuZm9yID0gJ3Byb2plY3QnO1xuICAgIHByb2plY3RMYWJlbC5pbm5lclRleHQgPSAnUHJvamVjdCc7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcblxuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByb2plY3RJbnB1dC5pZCA9ICdwcm9qZWN0JztcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuXG4gICAgY29uc3QgcHJvamVjdHNUb09wdGlvbnMgPSAoZSwgYXJyYXkpID0+IHtcbiAgICAgIC8vY3JlYXRlIG9wdGlvbiBlbGVtZW50cyBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheVxuICAgICAgYXJyYXkuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGAke3gubmFtZX1gO1xuICAgICAgICBpZiAoeC5uYW1lID09IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdCkge1xuICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHJvamVjdHNUb09wdGlvbnMoZSwgcExpc3QpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwuZm9yID0gJ2RhdGUnO1xuICAgIGRhdGVMYWJlbC5pbm5lclRleHQgPSAnVGltZWZyYW1lJztcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBkYXRlSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgVGltZWZyYW1lJztcbiAgICBkYXRlSW5wdXQuaWQgPSAnZGF0ZSc7XG4gICAgZGF0ZUlucHV0Lm5hbWUgPSAnZGF0ZSc7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuZm9yID0gJ3ByaW9yaXR5JztcbiAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eSBMZXZlbCc7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlJbnB1dC5pZCA9ICdwcmlvcml0eSc7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cbiAgICBjb25zdCBub3JtYWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG5vcm1hbFByaW9yaXR5LmlubmVyVGV4dCA9ICdOb3JtYWwgUHJpb3JpdHknO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobm9ybWFsUHJpb3JpdHkpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBtZWRpdW1Qcmlvcml0eS5pbm5lclRleHQgPSAnTWVkaXVtIFByaW9yaXR5JztcbiAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcblxuICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGhpZ2hQcmlvcml0eS5pbm5lclRleHQgPSAnSGlnaCBQcmlvcml0eSc7XG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuXG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjTGFiZWwuZm9yID0gJ2Rlc2MnO1xuICAgIGRlc2NMYWJlbC5pbm5lclRleHQgPSAnRGVzY3JpcHRpb24nO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cbiAgICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRlc2NJbnB1dC5pZCA9ICdkZXNjJztcbiAgICBkZXNjSW5wdXQubmFtZSA9ICdkZXNjJztcbiAgICBkZXNjSW5wdXQucm93cyA9ICc1JztcbiAgICBkZXNjSW5wdXQuY29scyA9ICczMyc7XG4gICAgZGVzY0lucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIERlc2NyaXB0aW9uJztcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZU1haW4ocykge1xuICAgIC8vY3JlYXRlIGEgbWFpbiB0byBiZSByZW1vdmVkXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgLy9jcmVhdGUgY29udGFpbmVyIHRvIGhlbHAgd2l0aCBwYWdlIGxheW91dFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBleHBhbmRUYXNrID0gKGUpID0+IHtcbiAgICAgIC8vc2VsZWN0IC5leHBhbmQgZGl2IGluIHNhbWUgLnRhc2sgY29udGFpbmVyXG4gICAgICBjb25zdCBleHBhbmQgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5leHBhbmQnKTtcbiAgICAgIC8vcmVtb3ZlIC5hY3RpdmUgZnJvbSBhbGwgb3RoZXIgLmV4cGFuZCBkaXZzXG4gICAgICBjb25zdCBhbGxFeHBhbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4cGFuZCcpO1xuICAgICAgYWxsRXhwYW5kcy5mb3JFYWNoKCh4KSA9PiB4LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgIC8vYWRkIC5hY3RpdmUgdG8gc2VsZWN0ZWQgLnRhc2sgZGVzY2VuZGFudFxuICAgICAgZXhwYW5kLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH07XG5cbiAgICBjb25zdCBjb2xsYXBzZVRhc2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBhbGxFeHBhbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4cGFuZCcpO1xuICAgICAgYWxsRXhwYW5kcy5mb3JFYWNoKCh4KSA9PiB4LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xpY2tUYXNrID0gKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1kaXYnKSkge1xuICAgICAgICAvL2FkZCBrZXkvdmFsdWUgcmVtb3ZlOnRydWVcbiAgICAgICAgLy91c2UgZmluZFxuICAgICAgICAvL2FkZCBrZXkgdmFsdWVcbiAgICAgICAgdExpc3QuZmluZCgoeCkgPT4geC50YXNrSWQgPT0gZS50YXJnZXQuZGF0YXNldC50YXNrSWQpLnJlbW92ZSA9IHRydWU7XG4gICAgICAgIC8vcmVtb3ZlIHRhc2sgZnJvbSBET01cbiAgICAgICAgLy8gY29uc3QgdGFza1RvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgLy8gICBgLnRhc2tbZGF0YS10YXNrLWlkPScke2UudGFyZ2V0LmRhdGFzZXQudGFza0lkfSddYFxuICAgICAgICAvLyApO1xuICAgICAgICByZXNldE1haW4oc2VsZWN0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LWRpdicpKSByZXR1cm47XG4gICAgICBlbHNlIGlmIChcbiAgICAgICAgZS50YXJnZXRcbiAgICAgICAgICAuY2xvc2VzdCgnLnRhc2snKVxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kJylcbiAgICAgICAgICAuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgdGFzaycpO1xuICAgICAgICBjb2xsYXBzZVRhc2soZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2lmIHRhc2tzIGV4cGFuZCBpcyBhY3RpdmUsIHJlbW92ZSBhY3RpdmUgY2xhc3MgYW5kIHJldHVyblxuICAgICAgICBleHBhbmRUYXNrKGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBsYXlvdXRUYXNrID0gKHRhc2ssIHopID0+IHtcbiAgICAgIGNvbnN0IHRhc2tNaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tNaW4uY2xhc3NMaXN0LmFkZCgndGFzay1taW4nKTtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza01pbik7XG5cbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIHRhc2tNaW4uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICBjaGVja2JveC5uYW1lID0gei5hY3Rpb247XG4gICAgICBjaGVja2JveC5pZCA9IHouYWN0aW9uO1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnLCB6LnRhc2tJZCk7XG4gICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgZGl2VG9Dcm9zcyA9IGUudGFyZ2V0XG4gICAgICAgICAgLmNsb3Nlc3QoJy50YXNrLW1pbicpXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKTtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgIGRpdlRvQ3Jvc3MuY2xhc3NMaXN0LmFkZCgndGFzay1jaGVja2VkJyk7XG4gICAgICAgICAgdExpc3QuZmluZChcbiAgICAgICAgICAgICh4KSA9PiB4LnRhc2tJZCA9PSBlLnRhcmdldC5kYXRhc2V0LnRhc2tJZFxuICAgICAgICAgICkuY29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpdlRvQ3Jvc3MuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jaGVja2VkJyk7XG4gICAgICAgICAgdExpc3QuZmluZChcbiAgICAgICAgICAgICh4KSA9PiB4LnRhc2tJZCA9PSBlLnRhcmdldC5kYXRhc2V0LnRhc2tJZFxuICAgICAgICAgICkuY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRlbnQnKTtcbiAgICAgIHRhc2tNaW4uYXBwZW5kQ2hpbGQodGFza0NvbnRlbnQpO1xuXG4gICAgICBjb25zdCB0YXNrTmFtZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tOYW1lRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUtZGF0ZScpO1xuICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza05hbWVEYXRlKTtcblxuICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xuICAgICAgdGFza05hbWUuaW5uZXJUZXh0ID0gei5hY3Rpb247XG4gICAgICB0YXNrTmFtZURhdGUuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuXG4gICAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGUtZGl2Jyk7XG4gICAgICBkYXRlRGl2LmlubmVyVGV4dCA9IHouZGF0ZTtcbiAgICAgIHRhc2tOYW1lRGF0ZS5hcHBlbmRDaGlsZChkYXRlRGl2KTtcblxuICAgICAgY29uc3QgcHJpb3JpdHlEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByaW9yaXR5RGVsZXRlLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWRlbGV0ZScpO1xuICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlEZWxldGUpO1xuXG4gICAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktZGl2Jyk7XG4gICAgICBwcmlvcml0eURpdi5pbm5lclRleHQgPSB6LnByaW9yaXR5O1xuICAgICAgcHJpb3JpdHlEZWxldGUuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuXG4gICAgICBjb25zdCBlZGl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBlZGl0RGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXQtZGl2Jyk7XG4gICAgICBlZGl0RGl2LnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWlkJywgei50YXNrSWQpO1xuICAgICAgZWRpdERpdi5pbm5lclRleHQgPSAnZWRpdCc7XG4gICAgICBwcmlvcml0eURlbGV0ZS5hcHBlbmRDaGlsZChlZGl0RGl2KTtcbiAgICAgIGVkaXREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RWRpdFBvcHVwKTtcblxuICAgICAgY29uc3QgZGVsZXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBkZWxldGVEaXYuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWRpdicpO1xuICAgICAgZGVsZXRlRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWlkJywgei50YXNrSWQpO1xuICAgICAgZGVsZXRlRGl2LmlubmVyVGV4dCA9ICd4JztcbiAgICAgIHByaW9yaXR5RGVsZXRlLmFwcGVuZENoaWxkKGRlbGV0ZURpdik7XG4gICAgICAvL1xuICAgICAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKGV4cGFuZCk7XG5cbiAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgICAgZGVzYy5pbm5lclRleHQgPSB6LmRlc2M7XG4gICAgICBleHBhbmQuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgICAvL2V4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbGxhcHNlVGFzayk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVRhc2tMaXN0ID0gKHApID0+IHtcbiAgICAgIGNvbnN0IHBIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwLWhlYWRpbmcnKTtcbiAgICAgIHBIZWFkaW5nLnRleHRDb250ZW50ID0gcDtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwSGVhZGluZyk7XG4gICAgICAvL2NyZWF0ZSB0YXNrLWNvbnRhaW5lciBkaXZcbiAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICAgIC8vZmlsdGVyIHRhc2tzIGJ5IHByb2plY3Qgc2VsZWN0aW9uXG4gICAgICBjb25zdCB0YXNrcyA9IHRMaXN0LmZpbHRlcigoeCkgPT4geC5wcm9qZWN0ID09IHApO1xuICAgICAgLy9hcHBlbmQgdGFza3MgZm9yIHRoaXMgcHJvamVjdFxuICAgICAgdGFza3MuZm9yRWFjaCgoeikgPT4ge1xuICAgICAgICBpZiAoei5yZW1vdmUgIT0gdHJ1ZSB8fCAhei5yZW1vdmUpIHtcbiAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pZCcsIHoudGFza0lkKTtcbiAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICAgIGxheW91dFRhc2sodGFzaywgeik7XG4gICAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrVGFzayk7XG4gICAgICAgICAgLy9hcHBlbmQgZGVsZXRlIGJ1dHRvblxuICAgICAgICAgIC8vYXBwZW5kIGNoZWNrYm94XG4gICAgICAgICAgLy9hcHBlbmQgZXhwYW5kIGFycm93XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy9hZGQgYWRkIHRhc2sgYnV0dG9uXG4gICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ1dHRvbicpO1xuICAgICAgYWRkVGFza0J1dHRvbi5pbm5lclRleHQgPSAnKyc7XG4gICAgICBhZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgcCk7XG4gICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBZGRQb3B1cCk7XG4gICAgfTtcblxuICAgIC8vd2hhdCBsaXN0KHMpIHRvIGNyZWF0ZVxuICAgIGlmIChzID09IGFsbFByb2plY3RzVGV4dCkge1xuICAgICAgcExpc3QuZm9yRWFjaCgoeCkgPT4gY3JlYXRlVGFza0xpc3QoeC5uYW1lKSk7XG4gICAgfSBlbHNlIGNyZWF0ZVRhc2tMaXN0KHMpO1xuICB9XG5cbiAgY29uc3QgcHJvamVjdFNpZGViYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG4gICAgLy9jcmVhdGUgc2lkZWJhciBidXR0b25zXG4gICAgcExpc3QuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLXByb2plY3QnKTtcbiAgICAgIHByb2plY3QuaW5uZXJUZXh0ID0geC5uYW1lO1xuICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgIC8vYWRkIGFuIGV2ZW50bGlzdGVuZXIgZm9yIGVhY2ggcHJvamVjdCBkaXNwbGF5ZWRcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcm9qZWN0KTtcbiAgICB9KTtcbiAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhbGwuY2xhc3NMaXN0LmFkZCgnYWxsJywgJ3NpZGViYXItcHJvamVjdCcpO1xuICAgIGFsbC5pbm5lclRleHQgPSBhbGxQcm9qZWN0c1RleHQ7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhbGwpO1xuICAgIGFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdFByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlQb3B1cCA9ICgpID0+IHt9O1xuXG4gIHByb2plY3RTaWRlYmFyKCk7XG4gIHVwZGF0ZU1haW4oc2VsZWN0aW9uKTtcbiAgZGlzcGxheVBvcHVwKCk7XG5cbiAgcmV0dXJuIHsgdXBkYXRlTWFpbiB9O1xufTtcblxuU2NyZWVuQ29udHJvbGxlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9