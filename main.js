/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./dot-svgrepo-com.svg */ "./src/dot-svgrepo-com.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./cross-square-svgrepo-com.svg */ "./src/cross-square-svgrepo-com.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 16px;
}

h1 {
  margin-top: 5%;
  text-align: center;
  font-size: 3rem;
}

.winnerHeader {
  margin-top: 40px;
  text-align: center;
  font-size: 1.5rem;
}

.playercontainer {
  width: 300px;
  margin: 6% auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  display: inline-block;
  width: 100px;
}

input {
  width: 167px;
  margin-left: 7px;
}
select {
  width: 170px;
  margin-left: 5px;
}

.startgameButton button {
  width: 278px;
  height: 25px;
}

.startgameButton {
  margin-top: 15px;
  width: 300px;
}

.headGameContainer {
  display: flex;
  flex-direction: column;
  width: 800px;
  gap: 20%;
  margin: 5% auto;
}

.playerheader {
  position: absolute;
  width: 300px;
  bottom: -10px;
  left: 30px;
  font-size: 30px;
}
.gridtextone {
  position: absolute;
  left: 30px;
}

.gridtexttwo {
  position: absolute;
  left: 390px;
}
.container {
  position: relative;
  display: none;
  flex-direction: row-reverse;
  justify-content: start;
}

.container.show {
  display: flex;
}

.container2 {
  position: relative;
  display: none;
}

.container2.show {
  display: flex;
}

.continueButton {
  display: none;
}

.continueButton.show {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.1);
}

.continueButton.show button {
  width: 250px;
  height: 50px;
  background-color: rgb(42, 39, 39);
  color: white;
  border: 1px solid rgb(0, 0, 0);
  font-size: 20px;
  transition: all 1s ease-out;
}

.continueButton.show button:hover {
  background-color: white;
  color: rgb(0, 0, 0);
}

.continueHeader {
  font-size: 25px;
  margin-bottom: 50px;
}
.gameboard {
  border: black 1px solid;
  display: grid;
  grid-template-columns: repeat(10, 30px);
  grid-template-rows: repeat(10, 30px);
  margin: 30px;
}

.gameboard.display {
  opacity: 0.5;
  border: 1px solid lightblue;
}

.gamecell {
  border: 1px solid black;
  cursor: pointer;
  user-select: none;
}

.game .gamecell:not(.missed):not(.hitShip):not(.showBorder):hover {
 border: 2px solid green;
 outline: 2px solid green;
  background-color: rgb(153, 231, 153);
  opacity: 0.5;
}

.gamecell.missed {
  cursor: default;
}
.missed::after {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.hitShip {
  border: 1px solid red;
}

.hitShip::after {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  color: red;
}

.inactive {
  opacity: 0.3;
  pointer-events: none;
}

.showBorder {
}

.showBorder::after {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  opacity: 0.6;
}

.ship {
  border: 1px solid blue;
  background-color: lightblue;
}

.sunk {
  border: 1px solid red;
}

.gameOver {
  pointer-events: none;
  opacity: 0.5;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sEAAsE;EACtE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,UAAU;EACV,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,OAAO;EACP,MAAM;EACN,SAAS;EACT,QAAQ;EACR,0CAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iCAAiC;EACjC,YAAY;EACZ,8BAA8B;EAC9B,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,uBAAuB;EACvB,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,iBAAiB;AACnB;;AAEA;CACC,uBAAuB;CACvB,wBAAwB;EACvB,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;AACA;EACE,gDAAqC;AACvC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gDAA8C;EAC9C,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB;;AAEA;AACA;;AAEA;EACE,gDAAqC;EACrC,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;EACpB,YAAY;AACd","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  font-size: 16px;\n}\n\nh1 {\n  margin-top: 5%;\n  text-align: center;\n  font-size: 3rem;\n}\n\n.winnerHeader {\n  margin-top: 40px;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.playercontainer {\n  width: 300px;\n  margin: 6% auto;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\nlabel {\n  display: inline-block;\n  width: 100px;\n}\n\ninput {\n  width: 167px;\n  margin-left: 7px;\n}\nselect {\n  width: 170px;\n  margin-left: 5px;\n}\n\n.startgameButton button {\n  width: 278px;\n  height: 25px;\n}\n\n.startgameButton {\n  margin-top: 15px;\n  width: 300px;\n}\n\n.headGameContainer {\n  display: flex;\n  flex-direction: column;\n  width: 800px;\n  gap: 20%;\n  margin: 5% auto;\n}\n\n.playerheader {\n  position: absolute;\n  width: 300px;\n  bottom: -10px;\n  left: 30px;\n  font-size: 30px;\n}\n.gridtextone {\n  position: absolute;\n  left: 30px;\n}\n\n.gridtexttwo {\n  position: absolute;\n  left: 390px;\n}\n.container {\n  position: relative;\n  display: none;\n  flex-direction: row-reverse;\n  justify-content: start;\n}\n\n.container.show {\n  display: flex;\n}\n\n.container2 {\n  position: relative;\n  display: none;\n}\n\n.container2.show {\n  display: flex;\n}\n\n.continueButton {\n  display: none;\n}\n\n.continueButton.show {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.continueButton.show button {\n  width: 250px;\n  height: 50px;\n  background-color: rgb(42, 39, 39);\n  color: white;\n  border: 1px solid rgb(0, 0, 0);\n  font-size: 20px;\n  transition: all 1s ease-out;\n}\n\n.continueButton.show button:hover {\n  background-color: white;\n  color: rgb(0, 0, 0);\n}\n\n.continueHeader {\n  font-size: 25px;\n  margin-bottom: 50px;\n}\n.gameboard {\n  border: black 1px solid;\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n  margin: 30px;\n}\n\n.gameboard.display {\n  opacity: 0.5;\n  border: 1px solid lightblue;\n}\n\n.gamecell {\n  border: 1px solid black;\n  cursor: pointer;\n  user-select: none;\n}\n\n.game .gamecell:not(.missed):not(.hitShip):not(.showBorder):hover {\n border: 2px solid green;\n outline: 2px solid green;\n  background-color: rgb(153, 231, 153);\n  opacity: 0.5;\n}\n\n.gamecell.missed {\n  cursor: default;\n}\n.missed::after {\n  content: url(\"./dot-svgrepo-com.svg\");\n}\n\n.hitShip {\n  border: 1px solid red;\n}\n\n.hitShip::after {\n  content: url(\"./cross-square-svgrepo-com.svg\");\n  color: red;\n}\n\n.inactive {\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n.showBorder {\n}\n\n.showBorder::after {\n  content: url(\"./dot-svgrepo-com.svg\");\n  opacity: 0.6;\n}\n\n.ship {\n  border: 1px solid blue;\n  background-color: lightblue;\n}\n\n.sunk {\n  border: 1px solid red;\n}\n\n.gameOver {\n  pointer-events: none;\n  opacity: 0.5;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/module.js":
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   cell: () => (/* binding */ cell),
/* harmony export */   gameBoard: () => (/* binding */ gameBoard),
/* harmony export */   ship: () => (/* binding */ ship)
/* harmony export */ });


class ship {
  constructor(length) {
    this.hit = 0;
    this.length = length;
    this.coordinates = [];
    this.borders = [];
  }

  getLength() {
    return this.length;
  }

  getHitCount() {
    return this.hit;
  }
  incrementHit() {
    if (this.hit >= this.length) {
      return;
    }
    this.hit++;
    return this.hit;
  }

  isSunk() {
    if (this.length === this.hit) {
      return true;
    } else {
      return false;
    }
  }
}

function cell(i, j) {
  this.ship = null;
  this.miss = false;
  this.beenHit = false;
  this.value = [i, j];
  this.validCell = true;
}

class gameBoard {
  constructor(player) {
    this.board = this.createArray();
    this.ships = [];
    this.player=player
  }

  createArray() {
    let array = [];
    for (let i = 0; i < 10; i++) {
      array.push([]);

      for (let j = 0; j < 10; j++) {
        array[i].push([]);
        array[i][j] = new cell(i, j);
      }
    }
    return array;
  }

  isWithinBounds(x, y) {
    return x >= 0 && x < 10 && y >= 0 && y < 10;
  }

  battlemove(x, y, length) {
    const moves = [
      [x + length - 1, y],
      [x - length + 1, y],
      [x, y + length - 1],
      [x, y - length + 1],
    ];
    let array = [];
    moves.forEach(([nx, ny]) => {
      if (this.isWithinBounds(nx, ny)) {
        array.push([nx, ny]);
      } else array.push(0);
    });

    let finalarray = [];

    console.log(array);

    array.forEach((item, index) => {
      let collided = false;
      if (!(item instanceof Array)) {
        finalarray.push(item);
        return false;
      }
      let [a, b] = [x, y];
      const [nx, ny] = item;
      if (
        this.board[x][y].ship instanceof ship ||
        !this.board[x][y].validCell
      ) {
        finalarray.push(0);
        return false;
      }

      if (index === 0) {
        while (nx > a) {
          a++;
          if (
            this.board[a][b].ship instanceof ship ||
            !this.board[a][b].validCell
          ) {
            collided = true;
          }
        }
        if (collided === false) {
          finalarray.push(item);
        } else {
          finalarray.push(0);
        }
        collided = false;
      }
      if (index === 1) {
        while (a > nx) {
          a--;
          if (
            this.board[a][b].ship instanceof ship ||
            !this.board[a][b].validCell
          ) {
            collided = true;
            console.log("index 1");
          }
        }
        if (collided === false) {
          finalarray.push(item);
        } else {
          finalarray.push(0);
          collided = false;
        }
      }
      if (index === 2) {
        while (ny > b) {
          b++;
          if (
            this.board[a][b].ship instanceof ship ||
            !this.board[a][b].validCell
          ) {
            collided = true;
            console.log("index 2");
          }
        }
        if (collided === false) {
          finalarray.push(item);
        } else {
          finalarray.push(0);
          collided = false;
        }
      }
      if (index === 3) {
        while (b > ny) {
          b--;
          if (
            this.board[a][b].ship instanceof ship ||
            !this.board[a][b].validCell
          ) {
            console.log("index 3");
            collided = true;
          }
        }
        if (collided === false) {
          finalarray.push(item);
        } else {
          collided = false;
          finalarray.push(0);
        }
      }
    });
    return finalarray;
  }

  placeTheShip(x, y, length, move) {
    let array = this.battlemove(x, y, length);

    console.log(array[3]);

    switch (move) {
      case "down":
        array = array[0];
        break;
      case "up":
        array = array[1];
        break;
      case "right":
        array = array[2];
        break;
      case "left":
        array = array[3];
        break;

      default:
        console.log("jiep");
    }
    if (array instanceof Array) {
      const [z, w] = array;
      /* denna if testar att om funktionen skulle matas koordinater
      att x eller y har samma koordinat som slutkordinat(vilket innebär en rak skepp) */
      if (x !== z && y !== w) {
        return;
      }
      const newShip = new ship(length);
      this.ships.push(newShip);
      this.board[x][y].ship = newShip;
      this.board[x][y].validCell = false;
      newShip.coordinates.push([x, y]);
      if (y === w && z >= x) {
        while (z > x) {
          x++;
          this.board[x][y].ship = newShip;
          newShip.coordinates.push([x, y]);
          this.board[x][y].validCell = false;
        }
      } else if (y === w && x >= z) {
        while (x > z) {
          x--;
          this.board[x][y].ship = newShip;
          this.board[x][y].validCell = false;
          newShip.coordinates.push([x, y]);
        }
      } else if (x === z && w >= y) {
        while (w > y) {
          y++;
          this.board[x][y].ship = newShip;
          this.board[x][y].validCell = false;
          newShip.coordinates.push([x, y]);
        }
      } else if (x === z && y >= w) {
        while (y > w) {
          y--;
          this.board[x][y].ship = newShip;
          this.board[x][y].validCell = false;
          newShip.coordinates.push([x, y]);
        }
      }

      function containsCoordinate(arr, coord) {
        return arr.some(([x, y]) => x === coord[0] && y === coord[1]);
      }

      newShip.coordinates.forEach((item) => {
        const [nx, ny] = item;

        const newarray = hej(nx, ny).filter(([nz, nw]) =>
          this.isWithinBounds(nz, nw),
        );
        newarray.forEach(([nx, ny]) => {
          this.board[nx][ny].validCell = false;
          if (!this.board[nx][ny].ship && !containsCoordinate(newShip.borders, [nx,ny])) {
            newShip.borders.push([nx, ny]);
          }
        });
      });
      return true
    } else {
      return false
    }

    /* function for making the cells bording ship invalid */
    function hej(x, y) {
      const bordingCells = [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1],
        [x + 1, y + 1],
        [x + 1, y - 1],
        [x - 1, y + 1],
        [x - 1, y - 1],
      ];
      return bordingCells;
    }


  }


  randomShipPlacement() {
    const length =  [1,3,4,1,3,2,5,3]
    let z = 1
    while(length.length>0) {
      const x = Math.floor(Math.random()*10)
      const y = Math.floor(Math.random()*10)
      console.log(z++)
      const movenumber = Math.floor(Math.random()*3)
      const move = ["down", "up", "right", "left"]
    if (this.placeTheShip(x,y,length[length.length-1],move[movenumber])===false){
      continue
    }
    else length.pop()
  }

  }
  recieveAttack([x, y]) {
    if (
      this.board[x][y].ship instanceof ship &&
      this.board[x][y].beenHit === false
    ) {
      this.board[x][y].beenHit = true;
      this.board[x][y].ship.incrementHit();
    } else if (this.board[x][y].beenHit === true) {
      return;
    } else {
      this.board[x][y].miss = true;
    }
  }

  allShipSunk() {
    return this.ships.every((item) => item.isSunk());
  }
}

class Player {
  constructor(name) {
    this.name = name,
    this.gameBoard = new gameBoard(name);
  }

  attack(playerBoard, [x, y]) {
    playerBoard.recieveAttack([x, y]);
  }
}







/***/ }),

/***/ "./src/cross-square-svgrepo-com.svg":
/*!******************************************!*\
  !*** ./src/cross-square-svgrepo-com.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cross-square-svgrepo-com.svg";

/***/ }),

/***/ "./src/dot-svgrepo-com.svg":
/*!*********************************!*\
  !*** ./src/dot-svgrepo-com.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dot-svgrepo-com.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.js */ "./src/module.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _cross_square_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cross-square-svgrepo-com.svg */ "./src/cross-square-svgrepo-com.svg");
/* harmony import */ var _dot_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dot-svgrepo-com.svg */ "./src/dot-svgrepo-com.svg");





let playerOne;
let playerTwo;
let currentPlayer;
const playerselect = document.querySelector("#player-select");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
container2.classList.add("show")


playerselect.addEventListener("input", (event) => {
  if (event.currentTarget.value === "local") {
    const playercontainer = document.querySelector(".playercontainer");
    const playerOneContainer = document.createElement("div");
    playerOneContainer.classList.add("playercontainerOne");
    const playerTwoContainer = document.createElement("div");
    playerTwoContainer.classList.add("playercontaineTwo");
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("startgameButton");

    playercontainer.appendChild(playerOneContainer);
    playercontainer.appendChild(playerTwoContainer);
    playercontainer.appendChild(buttonContainer);

    const playerOneInputName = document.createElement("input");
    playerOneInputName.setAttribute("id", "playerOneName");
    const playerOnelabel = document.createElement("label");
    playerOnelabel.setAttribute("for", "playerOneName");
    playerOneInputName.setAttribute("placeholder", "Name");
    playerOnelabel.textContent = "Player One:";

    const playerTwoInputName = document.createElement("input");
    playerTwoInputName.setAttribute("id", "playerTwoName");
    const playerTwolabel = document.createElement("label");
    playerTwoInputName.setAttribute("placeholder", "Name");
    playerTwolabel.textContent = "Player Two:";

    const buttonStartGame = document.createElement("button");
    buttonStartGame.setAttribute("id", "startGameButton");
    buttonStartGame.textContent = "Start game";
    buttonStartGame.addEventListener("click", () => {
      playerOne = new _module_js__WEBPACK_IMPORTED_MODULE_0__.Player(playerOneInputName.value);
      console.log(playerOne)
      playerOne.gameBoard.randomShipPlacement()
      playerTwo = new _module_js__WEBPACK_IMPORTED_MODULE_0__.Player(playerTwoInputName.value);
      playerTwo.gameBoard.randomShipPlacement()
      console.log(playerTwo)
      currentPlayer = playerOneInputName.value
      makeBoard(playerOne)
      makeBoard(playerTwo)
      playercontainer.remove()
      
    });

    playerOneContainer.appendChild(playerOnelabel);
    playerOneContainer.appendChild(playerOneInputName);
    playerTwoContainer.appendChild(playerTwolabel);
    playerTwoContainer.appendChild(playerTwoInputName);
    buttonContainer.appendChild(buttonStartGame);
  }
});

function makeBoard(player) {
  
  const playerGameBoard = player.gameBoard;
  const playerHeaderOne = document.createElement('h3')
  const playerHeaderTwo = document.createElement('h3')
  playerHeaderOne.classList.add("playerheader", `${playerOne.name}`)
  playerHeaderTwo.classList.add("playerheader", `${playerTwo.name}`)
  playerHeaderOne.textContent=`${playerOne.name} turn`
  playerHeaderTwo.textContent=`${playerTwo.name} turn`
  const gridTextOne = document.createElement('h5')
  const gridTextTwo = document.createElement('h5')
  gridTextOne.classList.add("gridtextone", "gridheader")
  gridTextTwo.classList.add("gridtexttwo", "gridheader")
  gridTextOne.textContent="Your grid"
  gridTextTwo.textContent="Opponent's grid"
  const gameBoardDiv = document.createElement("div");
  const gameBoardDiv2 = document.createElement("div");
  gameBoardDiv.classList.add("gameboard", `${player.name}`, "game");
  gameBoardDiv2.classList.add("gameboard", `${player.name}`, "display");

  console.log(player.name);

  if (player.name === playerOne.name) {
    gameBoardDiv.classList.add("inactive");
  }
  if (playerGameBoard.player === playerOne.name) {
    container.appendChild(gameBoardDiv);
    container2.appendChild(gameBoardDiv2);
    container2.appendChild(playerHeaderOne);
    container2.appendChild(gridTextOne)
    container2.appendChild(gridTextTwo)
  } else {
    container.appendChild(gameBoardDiv2);
    container.appendChild(playerHeaderTwo)
    container2.appendChild(gameBoardDiv);
    container.appendChild(gridTextOne)
    container.appendChild(gridTextTwo)
  }

  let storeDomBoard1 = [];
  let storeDomBoard2 = [];
  for (let i = 0; i < playerGameBoard.board.length; i++) {
    let array1 = [];
    let array2 = [];
    storeDomBoard1.push(array1);
    storeDomBoard2.push(array2);
    for (let j = 0; j < playerGameBoard.board[i].length; j++) {
      const gameCell = document.createElement("div");
      const gameCell2 = document.createElement("div");
      array1.push(gameCell);
      array2.push(gameCell2);
      gameBoardDiv.appendChild(gameCell);
      gameBoardDiv2.appendChild(gameCell2);
      gameCell.classList.add("gamecell");
      gameCell2.classList.add("gamecell", "2");
      if (playerGameBoard.board[i][j].ship) {
        gameCell2.classList.add("ship");
      }
      gameCell.addEventListener(
        "click",
        function handleClick() {
          if (player === playerOne) {
            playerTwo.attack(playerGameBoard, [i, j]);
          }
          if (player === playerTwo) {
            playerOne.attack(playerGameBoard, [i, j]);
          }
          console.log(gameCell);
          console.log(playerGameBoard.board[i][j]);

          renderBoard(
            playerGameBoard,
            i,
            j,
            gameCell,
            gameCell2,
            storeDomBoard1,
            storeDomBoard2,
          );
        },
        { once: true },
      );
    }
  }

  /*render ships on gameboard  2*/
}

function renderBoard(
  playerGameBoard,
  i,
  j,
  gameCell,
  gameCell2,
  storeDomBoard1,
  storeDomBoard2,
) {
  

  if (
    playerGameBoard.board[i][j].ship === null &&
    playerGameBoard.board[i][j].miss
  ) {
    console.log("hej");
    gameCell.classList.add("missed");
    gameCell2.classList.add("missed");
  }
  if (
    playerGameBoard.board[i][j].ship &&
    playerGameBoard.board[i][j].beenHit &&
    !playerGameBoard.board[i][j].ship.isSunk()
  ) {
    
    gameCell.classList.add("hitShip");
    gameCell2.classList.add("hitShip");
    console.log("test");
    return;
  }
  if (
    playerGameBoard.board[i][j].ship &&
    playerGameBoard.board[i][j].ship.isSunk()
  ) {
   
    playerGameBoard.board[i][j].ship.coordinates.forEach(([nx, ny]) => {
      storeDomBoard1[nx][ny].classList.add("sunk");
      storeDomBoard2[nx][ny].classList.add("sunk");
      gameCell.classList.add("hitShip");
      gameCell2.classList.add("hitShip");
    });
    playerGameBoard.board[i][j].ship.borders.forEach(([nx, ny]) => {
      if (!storeDomBoard1[nx][ny].classList.contains("missed"))
        storeDomBoard1[nx][ny].classList.add("showBorder");
      storeDomBoard2[nx][ny].classList.add("showBorder");
    });

    if (playerGameBoard.allShipSunk()) {
     
      const gridheader = document.querySelectorAll('.gridheader')
      const winnerHeader = document.createElement('h3')
      winnerHeader.classList.add("winnerHeader")
      gridheader.forEach(item=>item.remove())
      const gameboards = document.querySelectorAll('.gameboard')
      gameboards.forEach(item => item.classList.add("gameOver"))
      container.classList.add("show")
      container2.classList.add("show")
        const playerheaderTwo = document.querySelector(`.playerheader.${playerTwo.name}`)
        playerheaderTwo.textContent=`${playerTwo.name}`
        const playerheaderOne = document.querySelector(`.playerheader.${playerOne.name}`)
        playerheaderTwo.textContent=`${playerTwo.name}`
        playerheaderOne.textContent=`${playerOne.name}`
      if (playerGameBoard.player === playerOne.name) {
    
        winnerHeader.textContent=`${playerTwo.name} wins!`
        const mainHeader = document.querySelector('.mainHeader')
        mainHeader.appendChild(winnerHeader)

      } else {
        winnerHeader.textContent=`${playerOne.name} wins!`
        const mainHeader = document.querySelector('.mainHeader')
        mainHeader.appendChild(winnerHeader)
      }
    }
    return;
  }

  /* check if game ended */

  /* switch player */
 
  currentPlayer =
    currentPlayer === playerOne.name ? playerTwo.name : playerOne.name;
  const playerOneGameBoard = document.querySelector(`.${playerOne.name}.game`);
  const playerTwoGameBoard = document.querySelector(`.${playerTwo.name}.game`);
  console.log(playerTwoGameBoard);
  console.log(currentPlayer);

  if (currentPlayer === playerOne.name) {
    playerOneGameBoard.classList.add("inactive");
    playerTwoGameBoard.classList.remove("inactive");
  }

  if (currentPlayer === playerTwo.name) {
    playerOneGameBoard.classList.remove("inactive");
    playerTwoGameBoard.classList.add("inactive");
  }

  
  const continueButton = document.querySelector(".continueButton")
  const continueHeader = document.querySelector('.continueHeader')
  continueHeader.textContent=`${currentPlayer}'s turn`
  continueButton.classList.add("show")
  container.classList.remove("show")
  container2.classList.remove("show")
  continueButton.addEventListener('click', (event)=> {

    event.currentTarget.classList.remove("show")
    if(currentPlayer===playerOne.name) {
      container2.classList.add("show")
    }
    else container.classList.add("show")
  })


  
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNieUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1Qjs7QUFFQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwVUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztV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LGdCQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsZUFBZTtBQUN2RSx3REFBd0QsZUFBZTtBQUN2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxjQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5kZXguanMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2luZGV4LmpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9pbmRleC5qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vaW5kZXguanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9pbmRleC5qcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9pbmRleC5qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9pbmRleC5qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaW5kZXguanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5kZXguanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaW5kZXguanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9pbmRleC5qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2luZGV4LmpzLy4vc3JjL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9pbmRleC5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbmRleC5qcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9pbmRleC5qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW5kZXguanMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9pbmRleC5qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2luZGV4LmpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW5kZXguanMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaW5kZXguanMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaW5kZXguanMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2luZGV4LmpzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2RvdC1zdmdyZXBvLWNvbS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Nyb3NzLXNxdWFyZS1zdmdyZXBvLWNvbS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCBcIkFyaWFsIE5hcnJvdyBCb2xkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaDEge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi53aW5uZXJIZWFkZXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ucGxheWVyY29udGFpbmVyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDYlIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMTY3cHg7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG5zZWxlY3Qge1xuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5zdGFydGdhbWVCdXR0b24gYnV0dG9uIHtcbiAgd2lkdGg6IDI3OHB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zdGFydGdhbWVCdXR0b24ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5oZWFkR2FtZUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA4MDBweDtcbiAgZ2FwOiAyMCU7XG4gIG1hcmdpbjogNSUgYXV0bztcbn1cblxuLnBsYXllcmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3R0b206IC0xMHB4O1xuICBsZWZ0OiAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uZ3JpZHRleHRvbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMwcHg7XG59XG5cbi5ncmlkdGV4dHR3byB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzkwcHg7XG59XG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBub25lO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG59XG5cbi5jb250YWluZXIuc2hvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXIyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29udGFpbmVyMi5zaG93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbnRpbnVlQnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRpbnVlQnV0dG9uLnNob3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmNvbnRpbnVlQnV0dG9uLnNob3cgYnV0dG9uIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgMzksIDM5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xufVxuXG4uY29udGludWVCdXR0b24uc2hvdyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbn1cblxuLmNvbnRpbnVlSGVhZGVyIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmdhbWVib2FyZCB7XG4gIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcbiAgbWFyZ2luOiAzMHB4O1xufVxuXG4uZ2FtZWJvYXJkLmRpc3BsYXkge1xuICBvcGFjaXR5OiAwLjU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcbn1cblxuLmdhbWVjZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5nYW1lIC5nYW1lY2VsbDpub3QoLm1pc3NlZCk6bm90KC5oaXRTaGlwKTpub3QoLnNob3dCb3JkZXIpOmhvdmVyIHtcbiBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcbiBvdXRsaW5lOiAycHggc29saWQgZ3JlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDIzMSwgMTUzKTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZ2FtZWNlbGwubWlzc2VkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLm1pc3NlZDo6YWZ0ZXIge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi5oaXRTaGlwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4uaGl0U2hpcDo6YWZ0ZXIge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pbmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDAuMztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zaG93Qm9yZGVyIHtcbn1cblxuLnNob3dCb3JkZXI6OmFmdGVyIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5zaGlwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuXG4uc3VuayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmdhbWVPdmVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0VBQXNFO0VBQ3RFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osUUFBUTtFQUNSLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2Qix3QkFBd0I7RUFDdkIsb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdEQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdEQUE4QztFQUM5QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxnREFBcUM7RUFDckMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgXFxcIkFyaWFsIE5hcnJvdyBCb2xkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi53aW5uZXJIZWFkZXIge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucGxheWVyY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbjogNiUgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbmlucHV0IHtcXG4gIHdpZHRoOiAxNjdweDtcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxufVxcbnNlbGVjdCB7XFxuICB3aWR0aDogMTcwcHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uc3RhcnRnYW1lQnV0dG9uIGJ1dHRvbiB7XFxuICB3aWR0aDogMjc4cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5zdGFydGdhbWVCdXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmhlYWRHYW1lQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgZ2FwOiAyMCU7XFxuICBtYXJnaW46IDUlIGF1dG87XFxufVxcblxcbi5wbGF5ZXJoZWFkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm90dG9tOiAtMTBweDtcXG4gIGxlZnQ6IDMwcHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5ncmlkdGV4dG9uZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAzMHB4O1xcbn1cXG5cXG4uZ3JpZHRleHR0d28ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMzkwcHg7XFxufVxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5jb250YWluZXIuc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY29udGFpbmVyMiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyMi5zaG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb250aW51ZUJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGludWVCdXR0b24uc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuXFxuLmNvbnRpbnVlQnV0dG9uLnNob3cgYnV0dG9uIHtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgMzksIDM5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcXG59XFxuXFxuLmNvbnRpbnVlQnV0dG9uLnNob3cgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLmNvbnRpbnVlSGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcbi5nYW1lYm9hcmQge1xcbiAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgbWFyZ2luOiAzMHB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkLmRpc3BsYXkge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xcbn1cXG5cXG4uZ2FtZWNlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmdhbWUgLmdhbWVjZWxsOm5vdCgubWlzc2VkKTpub3QoLmhpdFNoaXApOm5vdCguc2hvd0JvcmRlcik6aG92ZXIge1xcbiBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG4gb3V0bGluZTogMnB4IHNvbGlkIGdyZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMjMxLCAxNTMpO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uZ2FtZWNlbGwubWlzc2VkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLm1pc3NlZDo6YWZ0ZXIge1xcbiAgY29udGVudDogdXJsKFxcXCIuL2RvdC1zdmdyZXBvLWNvbS5zdmdcXFwiKTtcXG59XFxuXFxuLmhpdFNoaXAge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uaGl0U2hpcDo6YWZ0ZXIge1xcbiAgY29udGVudDogdXJsKFxcXCIuL2Nyb3NzLXNxdWFyZS1zdmdyZXBvLWNvbS5zdmdcXFwiKTtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNob3dCb3JkZXIge1xcbn1cXG5cXG4uc2hvd0JvcmRlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogdXJsKFxcXCIuL2RvdC1zdmdyZXBvLWNvbS5zdmdcXFwiKTtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnNoaXAge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLnN1bmsge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uZ2FtZU92ZXIge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IHNoaXAsIGNlbGwsIGdhbWVCb2FyZCwgUGxheWVyIH07XG5cbmNsYXNzIHNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmhpdCA9IDA7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IFtdO1xuICAgIHRoaXMuYm9yZGVycyA9IFtdO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIGdldEhpdENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmhpdDtcbiAgfVxuICBpbmNyZW1lbnRIaXQoKSB7XG4gICAgaWYgKHRoaXMuaGl0ID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaGl0Kys7XG4gICAgcmV0dXJuIHRoaXMuaGl0O1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNlbGwoaSwgaikge1xuICB0aGlzLnNoaXAgPSBudWxsO1xuICB0aGlzLm1pc3MgPSBmYWxzZTtcbiAgdGhpcy5iZWVuSGl0ID0gZmFsc2U7XG4gIHRoaXMudmFsdWUgPSBbaSwgal07XG4gIHRoaXMudmFsaWRDZWxsID0gdHJ1ZTtcbn1cblxuY2xhc3MgZ2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IocGxheWVyKSB7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQXJyYXkoKTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gICAgdGhpcy5wbGF5ZXI9cGxheWVyXG4gIH1cblxuICBjcmVhdGVBcnJheSgpIHtcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGFycmF5LnB1c2goW10pO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgYXJyYXlbaV0ucHVzaChbXSk7XG4gICAgICAgIGFycmF5W2ldW2pdID0gbmV3IGNlbGwoaSwgaik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIGlzV2l0aGluQm91bmRzKHgsIHkpIHtcbiAgICByZXR1cm4geCA+PSAwICYmIHggPCAxMCAmJiB5ID49IDAgJiYgeSA8IDEwO1xuICB9XG5cbiAgYmF0dGxlbW92ZSh4LCB5LCBsZW5ndGgpIHtcbiAgICBjb25zdCBtb3ZlcyA9IFtcbiAgICAgIFt4ICsgbGVuZ3RoIC0gMSwgeV0sXG4gICAgICBbeCAtIGxlbmd0aCArIDEsIHldLFxuICAgICAgW3gsIHkgKyBsZW5ndGggLSAxXSxcbiAgICAgIFt4LCB5IC0gbGVuZ3RoICsgMV0sXG4gICAgXTtcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBtb3Zlcy5mb3JFYWNoKChbbngsIG55XSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNXaXRoaW5Cb3VuZHMobngsIG55KSkge1xuICAgICAgICBhcnJheS5wdXNoKFtueCwgbnldKTtcbiAgICAgIH0gZWxzZSBhcnJheS5wdXNoKDApO1xuICAgIH0pO1xuXG4gICAgbGV0IGZpbmFsYXJyYXkgPSBbXTtcblxuICAgIGNvbnNvbGUubG9nKGFycmF5KTtcblxuICAgIGFycmF5LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY29sbGlkZWQgPSBmYWxzZTtcbiAgICAgIGlmICghKGl0ZW0gaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgZmluYWxhcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsZXQgW2EsIGJdID0gW3gsIHldO1xuICAgICAgY29uc3QgW254LCBueV0gPSBpdGVtO1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmJvYXJkW3hdW3ldLnNoaXAgaW5zdGFuY2VvZiBzaGlwIHx8XG4gICAgICAgICF0aGlzLmJvYXJkW3hdW3ldLnZhbGlkQ2VsbFxuICAgICAgKSB7XG4gICAgICAgIGZpbmFsYXJyYXkucHVzaCgwKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgd2hpbGUgKG54ID4gYSkge1xuICAgICAgICAgIGErKztcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmJvYXJkW2FdW2JdLnNoaXAgaW5zdGFuY2VvZiBzaGlwIHx8XG4gICAgICAgICAgICAhdGhpcy5ib2FyZFthXVtiXS52YWxpZENlbGxcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbGxpZGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbGxpZGVkID09PSBmYWxzZSkge1xuICAgICAgICAgIGZpbmFsYXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaW5hbGFycmF5LnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgICAgY29sbGlkZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA9PT0gMSkge1xuICAgICAgICB3aGlsZSAoYSA+IG54KSB7XG4gICAgICAgICAgYS0tO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbYV1bYl0uc2hpcCBpbnN0YW5jZW9mIHNoaXAgfHxcbiAgICAgICAgICAgICF0aGlzLmJvYXJkW2FdW2JdLnZhbGlkQ2VsbFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29sbGlkZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmRleCAxXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sbGlkZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgZmluYWxhcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbmFsYXJyYXkucHVzaCgwKTtcbiAgICAgICAgICBjb2xsaWRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPT09IDIpIHtcbiAgICAgICAgd2hpbGUgKG55ID4gYikge1xuICAgICAgICAgIGIrKztcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmJvYXJkW2FdW2JdLnNoaXAgaW5zdGFuY2VvZiBzaGlwIHx8XG4gICAgICAgICAgICAhdGhpcy5ib2FyZFthXVtiXS52YWxpZENlbGxcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbGxpZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXggMlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbGxpZGVkID09PSBmYWxzZSkge1xuICAgICAgICAgIGZpbmFsYXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaW5hbGFycmF5LnB1c2goMCk7XG4gICAgICAgICAgY29sbGlkZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID09PSAzKSB7XG4gICAgICAgIHdoaWxlIChiID4gbnkpIHtcbiAgICAgICAgICBiLS07XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5ib2FyZFthXVtiXS5zaGlwIGluc3RhbmNlb2Ygc2hpcCB8fFxuICAgICAgICAgICAgIXRoaXMuYm9hcmRbYV1bYl0udmFsaWRDZWxsXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4IDNcIik7XG4gICAgICAgICAgICBjb2xsaWRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xsaWRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBmaW5hbGFycmF5LnB1c2goaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sbGlkZWQgPSBmYWxzZTtcbiAgICAgICAgICBmaW5hbGFycmF5LnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmluYWxhcnJheTtcbiAgfVxuXG4gIHBsYWNlVGhlU2hpcCh4LCB5LCBsZW5ndGgsIG1vdmUpIHtcbiAgICBsZXQgYXJyYXkgPSB0aGlzLmJhdHRsZW1vdmUoeCwgeSwgbGVuZ3RoKTtcblxuICAgIGNvbnNvbGUubG9nKGFycmF5WzNdKTtcblxuICAgIHN3aXRjaCAobW92ZSkge1xuICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgYXJyYXkgPSBhcnJheVswXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgYXJyYXkgPSBhcnJheVsxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgYXJyYXkgPSBhcnJheVsyXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICBhcnJheSA9IGFycmF5WzNdO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2coXCJqaWVwXCIpO1xuICAgIH1cbiAgICBpZiAoYXJyYXkgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgY29uc3QgW3osIHddID0gYXJyYXk7XG4gICAgICAvKiBkZW5uYSBpZiB0ZXN0YXIgYXR0IG9tIGZ1bmt0aW9uZW4gc2t1bGxlIG1hdGFzIGtvb3JkaW5hdGVyXG4gICAgICBhdHQgeCBlbGxlciB5IGhhciBzYW1tYSBrb29yZGluYXQgc29tIHNsdXRrb3JkaW5hdCh2aWxrZXQgaW5uZWLDpHIgZW4gcmFrIHNrZXBwKSAqL1xuICAgICAgaWYgKHggIT09IHogJiYgeSAhPT0gdykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBuZXdTaGlwID0gbmV3IHNoaXAobGVuZ3RoKTtcbiAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0uc2hpcCA9IG5ld1NoaXA7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldLnZhbGlkQ2VsbCA9IGZhbHNlO1xuICAgICAgbmV3U2hpcC5jb29yZGluYXRlcy5wdXNoKFt4LCB5XSk7XG4gICAgICBpZiAoeSA9PT0gdyAmJiB6ID49IHgpIHtcbiAgICAgICAgd2hpbGUgKHogPiB4KSB7XG4gICAgICAgICAgeCsrO1xuICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0uc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgbmV3U2hpcC5jb29yZGluYXRlcy5wdXNoKFt4LCB5XSk7XG4gICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XS52YWxpZENlbGwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh5ID09PSB3ICYmIHggPj0geikge1xuICAgICAgICB3aGlsZSAoeCA+IHopIHtcbiAgICAgICAgICB4LS07XG4gICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldLnZhbGlkQ2VsbCA9IGZhbHNlO1xuICAgICAgICAgIG5ld1NoaXAuY29vcmRpbmF0ZXMucHVzaChbeCwgeV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHggPT09IHogJiYgdyA+PSB5KSB7XG4gICAgICAgIHdoaWxlICh3ID4geSkge1xuICAgICAgICAgIHkrKztcbiAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0udmFsaWRDZWxsID0gZmFsc2U7XG4gICAgICAgICAgbmV3U2hpcC5jb29yZGluYXRlcy5wdXNoKFt4LCB5XSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoeCA9PT0geiAmJiB5ID49IHcpIHtcbiAgICAgICAgd2hpbGUgKHkgPiB3KSB7XG4gICAgICAgICAgeS0tO1xuICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0uc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XS52YWxpZENlbGwgPSBmYWxzZTtcbiAgICAgICAgICBuZXdTaGlwLmNvb3JkaW5hdGVzLnB1c2goW3gsIHldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjb250YWluc0Nvb3JkaW5hdGUoYXJyLCBjb29yZCkge1xuICAgICAgICByZXR1cm4gYXJyLnNvbWUoKFt4LCB5XSkgPT4geCA9PT0gY29vcmRbMF0gJiYgeSA9PT0gY29vcmRbMV0pO1xuICAgICAgfVxuXG4gICAgICBuZXdTaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgW254LCBueV0gPSBpdGVtO1xuXG4gICAgICAgIGNvbnN0IG5ld2FycmF5ID0gaGVqKG54LCBueSkuZmlsdGVyKChbbnosIG53XSkgPT5cbiAgICAgICAgICB0aGlzLmlzV2l0aGluQm91bmRzKG56LCBudyksXG4gICAgICAgICk7XG4gICAgICAgIG5ld2FycmF5LmZvckVhY2goKFtueCwgbnldKSA9PiB7XG4gICAgICAgICAgdGhpcy5ib2FyZFtueF1bbnldLnZhbGlkQ2VsbCA9IGZhbHNlO1xuICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtueF1bbnldLnNoaXAgJiYgIWNvbnRhaW5zQ29vcmRpbmF0ZShuZXdTaGlwLmJvcmRlcnMsIFtueCxueV0pKSB7XG4gICAgICAgICAgICBuZXdTaGlwLmJvcmRlcnMucHVzaChbbngsIG55XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLyogZnVuY3Rpb24gZm9yIG1ha2luZyB0aGUgY2VsbHMgYm9yZGluZyBzaGlwIGludmFsaWQgKi9cbiAgICBmdW5jdGlvbiBoZWooeCwgeSkge1xuICAgICAgY29uc3QgYm9yZGluZ0NlbGxzID0gW1xuICAgICAgICBbeCArIDEsIHldLFxuICAgICAgICBbeCAtIDEsIHldLFxuICAgICAgICBbeCwgeSArIDFdLFxuICAgICAgICBbeCwgeSAtIDFdLFxuICAgICAgICBbeCArIDEsIHkgKyAxXSxcbiAgICAgICAgW3ggKyAxLCB5IC0gMV0sXG4gICAgICAgIFt4IC0gMSwgeSArIDFdLFxuICAgICAgICBbeCAtIDEsIHkgLSAxXSxcbiAgICAgIF07XG4gICAgICByZXR1cm4gYm9yZGluZ0NlbGxzO1xuICAgIH1cblxuXG4gIH1cblxuXG4gIHJhbmRvbVNoaXBQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gIFsxLDMsNCwxLDMsMiw1LDNdXG4gICAgbGV0IHogPSAxXG4gICAgd2hpbGUobGVuZ3RoLmxlbmd0aD4wKSB7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKVxuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMClcbiAgICAgIGNvbnNvbGUubG9nKHorKylcbiAgICAgIGNvbnN0IG1vdmVudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMylcbiAgICAgIGNvbnN0IG1vdmUgPSBbXCJkb3duXCIsIFwidXBcIiwgXCJyaWdodFwiLCBcImxlZnRcIl1cbiAgICBpZiAodGhpcy5wbGFjZVRoZVNoaXAoeCx5LGxlbmd0aFtsZW5ndGgubGVuZ3RoLTFdLG1vdmVbbW92ZW51bWJlcl0pPT09ZmFsc2Upe1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgZWxzZSBsZW5ndGgucG9wKClcbiAgfVxuXG4gIH1cbiAgcmVjaWV2ZUF0dGFjayhbeCwgeV0pIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmJvYXJkW3hdW3ldLnNoaXAgaW5zdGFuY2VvZiBzaGlwICYmXG4gICAgICB0aGlzLmJvYXJkW3hdW3ldLmJlZW5IaXQgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldLmJlZW5IaXQgPSB0cnVlO1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5zaGlwLmluY3JlbWVudEhpdCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFt4XVt5XS5iZWVuSGl0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0ubWlzcyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgYWxsU2hpcFN1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKGl0ZW0pID0+IGl0ZW0uaXNTdW5rKCkpO1xuICB9XG59XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lLFxuICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IGdhbWVCb2FyZChuYW1lKTtcbiAgfVxuXG4gIGF0dGFjayhwbGF5ZXJCb2FyZCwgW3gsIHldKSB7XG4gICAgcGxheWVyQm9hcmQucmVjaWV2ZUF0dGFjayhbeCwgeV0pO1xuICB9XG59XG5cblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHNoaXAsIGNlbGwsIGdhbWVCb2FyZCwgUGxheWVyIH0gZnJvbSBcIi4vbW9kdWxlLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9jcm9zcy1zcXVhcmUtc3ZncmVwby1jb20uc3ZnXCI7XG5pbXBvcnQgXCIuL2RvdC1zdmdyZXBvLWNvbS5zdmdcIjtcblxubGV0IHBsYXllck9uZTtcbmxldCBwbGF5ZXJUd287XG5sZXQgY3VycmVudFBsYXllcjtcbmNvbnN0IHBsYXllcnNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyLXNlbGVjdFwiKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuY29uc3QgY29udGFpbmVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyMlwiKTtcbmNvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZChcInNob3dcIilcblxuXG5wbGF5ZXJzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSA9PT0gXCJsb2NhbFwiKSB7XG4gICAgY29uc3QgcGxheWVyY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJjb250YWluZXJcIik7XG4gICAgY29uc3QgcGxheWVyT25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGF5ZXJPbmVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBsYXllcmNvbnRhaW5lck9uZVwiKTtcbiAgICBjb25zdCBwbGF5ZXJUd29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXllclR3b0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGxheWVyY29udGFpbmVUd29cIik7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInN0YXJ0Z2FtZUJ1dHRvblwiKTtcblxuICAgIHBsYXllcmNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJPbmVDb250YWluZXIpO1xuICAgIHBsYXllcmNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJUd29Db250YWluZXIpO1xuICAgIHBsYXllcmNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gICAgY29uc3QgcGxheWVyT25lSW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBsYXllck9uZUlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllck9uZU5hbWVcIik7XG4gICAgY29uc3QgcGxheWVyT25lbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcGxheWVyT25lbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicGxheWVyT25lTmFtZVwiKTtcbiAgICBwbGF5ZXJPbmVJbnB1dE5hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOYW1lXCIpO1xuICAgIHBsYXllck9uZWxhYmVsLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgT25lOlwiO1xuXG4gICAgY29uc3QgcGxheWVyVHdvSW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBsYXllclR3b0lucHV0TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllclR3b05hbWVcIik7XG4gICAgY29uc3QgcGxheWVyVHdvbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcGxheWVyVHdvSW5wdXROYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmFtZVwiKTtcbiAgICBwbGF5ZXJUd29sYWJlbC50ZXh0Q29udGVudCA9IFwiUGxheWVyIFR3bzpcIjtcblxuICAgIGNvbnN0IGJ1dHRvblN0YXJ0R2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uU3RhcnRHYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhcnRHYW1lQnV0dG9uXCIpO1xuICAgIGJ1dHRvblN0YXJ0R2FtZS50ZXh0Q29udGVudCA9IFwiU3RhcnQgZ2FtZVwiO1xuICAgIGJ1dHRvblN0YXJ0R2FtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcGxheWVyT25lID0gbmV3IFBsYXllcihwbGF5ZXJPbmVJbnB1dE5hbWUudmFsdWUpO1xuICAgICAgY29uc29sZS5sb2cocGxheWVyT25lKVxuICAgICAgcGxheWVyT25lLmdhbWVCb2FyZC5yYW5kb21TaGlwUGxhY2VtZW50KClcbiAgICAgIHBsYXllclR3byA9IG5ldyBQbGF5ZXIocGxheWVyVHdvSW5wdXROYW1lLnZhbHVlKTtcbiAgICAgIHBsYXllclR3by5nYW1lQm9hcmQucmFuZG9tU2hpcFBsYWNlbWVudCgpXG4gICAgICBjb25zb2xlLmxvZyhwbGF5ZXJUd28pXG4gICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyT25lSW5wdXROYW1lLnZhbHVlXG4gICAgICBtYWtlQm9hcmQocGxheWVyT25lKVxuICAgICAgbWFrZUJvYXJkKHBsYXllclR3bylcbiAgICAgIHBsYXllcmNvbnRhaW5lci5yZW1vdmUoKVxuICAgICAgXG4gICAgfSk7XG5cbiAgICBwbGF5ZXJPbmVDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lbGFiZWwpO1xuICAgIHBsYXllck9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJPbmVJbnB1dE5hbWUpO1xuICAgIHBsYXllclR3b0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJUd29sYWJlbCk7XG4gICAgcGxheWVyVHdvQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclR3b0lucHV0TmFtZSk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvblN0YXJ0R2FtZSk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBtYWtlQm9hcmQocGxheWVyKSB7XG4gIFxuICBjb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBwbGF5ZXIuZ2FtZUJvYXJkO1xuICBjb25zdCBwbGF5ZXJIZWFkZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIGNvbnN0IHBsYXllckhlYWRlclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgcGxheWVySGVhZGVyT25lLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJoZWFkZXJcIiwgYCR7cGxheWVyT25lLm5hbWV9YClcbiAgcGxheWVySGVhZGVyVHdvLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJoZWFkZXJcIiwgYCR7cGxheWVyVHdvLm5hbWV9YClcbiAgcGxheWVySGVhZGVyT25lLnRleHRDb250ZW50PWAke3BsYXllck9uZS5uYW1lfSB0dXJuYFxuICBwbGF5ZXJIZWFkZXJUd28udGV4dENvbnRlbnQ9YCR7cGxheWVyVHdvLm5hbWV9IHR1cm5gXG4gIGNvbnN0IGdyaWRUZXh0T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKVxuICBjb25zdCBncmlkVGV4dFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1JylcbiAgZ3JpZFRleHRPbmUuY2xhc3NMaXN0LmFkZChcImdyaWR0ZXh0b25lXCIsIFwiZ3JpZGhlYWRlclwiKVxuICBncmlkVGV4dFR3by5jbGFzc0xpc3QuYWRkKFwiZ3JpZHRleHR0d29cIiwgXCJncmlkaGVhZGVyXCIpXG4gIGdyaWRUZXh0T25lLnRleHRDb250ZW50PVwiWW91ciBncmlkXCJcbiAgZ3JpZFRleHRUd28udGV4dENvbnRlbnQ9XCJPcHBvbmVudCdzIGdyaWRcIlxuICBjb25zdCBnYW1lQm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBnYW1lQm9hcmREaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2FtZUJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmRcIiwgYCR7cGxheWVyLm5hbWV9YCwgXCJnYW1lXCIpO1xuICBnYW1lQm9hcmREaXYyLmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmRcIiwgYCR7cGxheWVyLm5hbWV9YCwgXCJkaXNwbGF5XCIpO1xuXG4gIGNvbnNvbGUubG9nKHBsYXllci5uYW1lKTtcblxuICBpZiAocGxheWVyLm5hbWUgPT09IHBsYXllck9uZS5uYW1lKSB7XG4gICAgZ2FtZUJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgfVxuICBpZiAocGxheWVyR2FtZUJvYXJkLnBsYXllciA9PT0gcGxheWVyT25lLm5hbWUpIHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkRGl2KTtcbiAgICBjb250YWluZXIyLmFwcGVuZENoaWxkKGdhbWVCb2FyZERpdjIpO1xuICAgIGNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQocGxheWVySGVhZGVyT25lKTtcbiAgICBjb250YWluZXIyLmFwcGVuZENoaWxkKGdyaWRUZXh0T25lKVxuICAgIGNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoZ3JpZFRleHRUd28pXG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVCb2FyZERpdjIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJIZWFkZXJUd28pXG4gICAgY29udGFpbmVyMi5hcHBlbmRDaGlsZChnYW1lQm9hcmREaXYpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkVGV4dE9uZSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZFRleHRUd28pXG4gIH1cblxuICBsZXQgc3RvcmVEb21Cb2FyZDEgPSBbXTtcbiAgbGV0IHN0b3JlRG9tQm9hcmQyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyR2FtZUJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGFycmF5MSA9IFtdO1xuICAgIGxldCBhcnJheTIgPSBbXTtcbiAgICBzdG9yZURvbUJvYXJkMS5wdXNoKGFycmF5MSk7XG4gICAgc3RvcmVEb21Cb2FyZDIucHVzaChhcnJheTIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyR2FtZUJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBnYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBnYW1lQ2VsbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYXJyYXkxLnB1c2goZ2FtZUNlbGwpO1xuICAgICAgYXJyYXkyLnB1c2goZ2FtZUNlbGwyKTtcbiAgICAgIGdhbWVCb2FyZERpdi5hcHBlbmRDaGlsZChnYW1lQ2VsbCk7XG4gICAgICBnYW1lQm9hcmREaXYyLmFwcGVuZENoaWxkKGdhbWVDZWxsMik7XG4gICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKFwiZ2FtZWNlbGxcIik7XG4gICAgICBnYW1lQ2VsbDIuY2xhc3NMaXN0LmFkZChcImdhbWVjZWxsXCIsIFwiMlwiKTtcbiAgICAgIGlmIChwbGF5ZXJHYW1lQm9hcmQuYm9hcmRbaV1bal0uc2hpcCkge1xuICAgICAgICBnYW1lQ2VsbDIuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICB9XG4gICAgICBnYW1lQ2VsbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICAgIGlmIChwbGF5ZXIgPT09IHBsYXllck9uZSkge1xuICAgICAgICAgICAgcGxheWVyVHdvLmF0dGFjayhwbGF5ZXJHYW1lQm9hcmQsIFtpLCBqXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwbGF5ZXIgPT09IHBsYXllclR3bykge1xuICAgICAgICAgICAgcGxheWVyT25lLmF0dGFjayhwbGF5ZXJHYW1lQm9hcmQsIFtpLCBqXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKGdhbWVDZWxsKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJHYW1lQm9hcmQuYm9hcmRbaV1bal0pO1xuXG4gICAgICAgICAgcmVuZGVyQm9hcmQoXG4gICAgICAgICAgICBwbGF5ZXJHYW1lQm9hcmQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGdhbWVDZWxsLFxuICAgICAgICAgICAgZ2FtZUNlbGwyLFxuICAgICAgICAgICAgc3RvcmVEb21Cb2FyZDEsXG4gICAgICAgICAgICBzdG9yZURvbUJvYXJkMixcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICB7IG9uY2U6IHRydWUgfSxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLypyZW5kZXIgc2hpcHMgb24gZ2FtZWJvYXJkICAyKi9cbn1cblxuZnVuY3Rpb24gcmVuZGVyQm9hcmQoXG4gIHBsYXllckdhbWVCb2FyZCxcbiAgaSxcbiAgaixcbiAgZ2FtZUNlbGwsXG4gIGdhbWVDZWxsMixcbiAgc3RvcmVEb21Cb2FyZDEsXG4gIHN0b3JlRG9tQm9hcmQyLFxuKSB7XG4gIFxuXG4gIGlmIChcbiAgICBwbGF5ZXJHYW1lQm9hcmQuYm9hcmRbaV1bal0uc2hpcCA9PT0gbnVsbCAmJlxuICAgIHBsYXllckdhbWVCb2FyZC5ib2FyZFtpXVtqXS5taXNzXG4gICkge1xuICAgIGNvbnNvbGUubG9nKFwiaGVqXCIpO1xuICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIik7XG4gICAgZ2FtZUNlbGwyLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIik7XG4gIH1cbiAgaWYgKFxuICAgIHBsYXllckdhbWVCb2FyZC5ib2FyZFtpXVtqXS5zaGlwICYmXG4gICAgcGxheWVyR2FtZUJvYXJkLmJvYXJkW2ldW2pdLmJlZW5IaXQgJiZcbiAgICAhcGxheWVyR2FtZUJvYXJkLmJvYXJkW2ldW2pdLnNoaXAuaXNTdW5rKClcbiAgKSB7XG4gICAgXG4gICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFNoaXBcIik7XG4gICAgZ2FtZUNlbGwyLmNsYXNzTGlzdC5hZGQoXCJoaXRTaGlwXCIpO1xuICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKFxuICAgIHBsYXllckdhbWVCb2FyZC5ib2FyZFtpXVtqXS5zaGlwICYmXG4gICAgcGxheWVyR2FtZUJvYXJkLmJvYXJkW2ldW2pdLnNoaXAuaXNTdW5rKClcbiAgKSB7XG4gICBcbiAgICBwbGF5ZXJHYW1lQm9hcmQuYm9hcmRbaV1bal0uc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChbbngsIG55XSkgPT4ge1xuICAgICAgc3RvcmVEb21Cb2FyZDFbbnhdW255XS5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICAgIHN0b3JlRG9tQm9hcmQyW254XVtueV0uY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG4gICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0U2hpcFwiKTtcbiAgICAgIGdhbWVDZWxsMi5jbGFzc0xpc3QuYWRkKFwiaGl0U2hpcFwiKTtcbiAgICB9KTtcbiAgICBwbGF5ZXJHYW1lQm9hcmQuYm9hcmRbaV1bal0uc2hpcC5ib3JkZXJzLmZvckVhY2goKFtueCwgbnldKSA9PiB7XG4gICAgICBpZiAoIXN0b3JlRG9tQm9hcmQxW254XVtueV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwibWlzc2VkXCIpKVxuICAgICAgICBzdG9yZURvbUJvYXJkMVtueF1bbnldLmNsYXNzTGlzdC5hZGQoXCJzaG93Qm9yZGVyXCIpO1xuICAgICAgc3RvcmVEb21Cb2FyZDJbbnhdW255XS5jbGFzc0xpc3QuYWRkKFwic2hvd0JvcmRlclwiKTtcbiAgICB9KTtcblxuICAgIGlmIChwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcFN1bmsoKSkge1xuICAgICBcbiAgICAgIGNvbnN0IGdyaWRoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZGhlYWRlcicpXG4gICAgICBjb25zdCB3aW5uZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgICB3aW5uZXJIZWFkZXIuY2xhc3NMaXN0LmFkZChcIndpbm5lckhlYWRlclwiKVxuICAgICAgZ3JpZGhlYWRlci5mb3JFYWNoKGl0ZW09Pml0ZW0ucmVtb3ZlKCkpXG4gICAgICBjb25zdCBnYW1lYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZCcpXG4gICAgICBnYW1lYm9hcmRzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJnYW1lT3ZlclwiKSlcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxuICAgICAgY29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxuICAgICAgICBjb25zdCBwbGF5ZXJoZWFkZXJUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyaGVhZGVyLiR7cGxheWVyVHdvLm5hbWV9YClcbiAgICAgICAgcGxheWVyaGVhZGVyVHdvLnRleHRDb250ZW50PWAke3BsYXllclR3by5uYW1lfWBcbiAgICAgICAgY29uc3QgcGxheWVyaGVhZGVyT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllcmhlYWRlci4ke3BsYXllck9uZS5uYW1lfWApXG4gICAgICAgIHBsYXllcmhlYWRlclR3by50ZXh0Q29udGVudD1gJHtwbGF5ZXJUd28ubmFtZX1gXG4gICAgICAgIHBsYXllcmhlYWRlck9uZS50ZXh0Q29udGVudD1gJHtwbGF5ZXJPbmUubmFtZX1gXG4gICAgICBpZiAocGxheWVyR2FtZUJvYXJkLnBsYXllciA9PT0gcGxheWVyT25lLm5hbWUpIHtcbiAgICBcbiAgICAgICAgd2lubmVySGVhZGVyLnRleHRDb250ZW50PWAke3BsYXllclR3by5uYW1lfSB3aW5zIWBcbiAgICAgICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluSGVhZGVyJylcbiAgICAgICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZCh3aW5uZXJIZWFkZXIpXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbm5lckhlYWRlci50ZXh0Q29udGVudD1gJHtwbGF5ZXJPbmUubmFtZX0gd2lucyFgXG4gICAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkhlYWRlcicpXG4gICAgICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQod2lubmVySGVhZGVyKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICAvKiBjaGVjayBpZiBnYW1lIGVuZGVkICovXG5cbiAgLyogc3dpdGNoIHBsYXllciAqL1xuIFxuICBjdXJyZW50UGxheWVyID1cbiAgICBjdXJyZW50UGxheWVyID09PSBwbGF5ZXJPbmUubmFtZSA/IHBsYXllclR3by5uYW1lIDogcGxheWVyT25lLm5hbWU7XG4gIGNvbnN0IHBsYXllck9uZUdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BsYXllck9uZS5uYW1lfS5nYW1lYCk7XG4gIGNvbnN0IHBsYXllclR3b0dhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BsYXllclR3by5uYW1lfS5nYW1lYCk7XG4gIGNvbnNvbGUubG9nKHBsYXllclR3b0dhbWVCb2FyZCk7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXIpO1xuXG4gIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXJPbmUubmFtZSkge1xuICAgIHBsYXllck9uZUdhbWVCb2FyZC5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgcGxheWVyVHdvR2FtZUJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgfVxuXG4gIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXJUd28ubmFtZSkge1xuICAgIHBsYXllck9uZUdhbWVCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgcGxheWVyVHdvR2FtZUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgfVxuXG4gIFxuICBjb25zdCBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGludWVCdXR0b25cIilcbiAgY29uc3QgY29udGludWVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGludWVIZWFkZXInKVxuICBjb250aW51ZUhlYWRlci50ZXh0Q29udGVudD1gJHtjdXJyZW50UGxheWVyfSdzIHR1cm5gXG4gIGNvbnRpbnVlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKVxuICBjb250YWluZXIyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpXG4gIGNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcblxuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIilcbiAgICBpZihjdXJyZW50UGxheWVyPT09cGxheWVyT25lLm5hbWUpIHtcbiAgICAgIGNvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZChcInNob3dcIilcbiAgICB9XG4gICAgZWxzZSBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNob3dcIilcbiAgfSlcblxuXG4gIFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9