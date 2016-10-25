/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Владимир on 22.10.2016.
	 */
	'use strict';

	// общие стили и normalize

	__webpack_require__(1);

	var _script = __webpack_require__(6);

	var _script2 = _interopRequireDefault(_script);

	var _script3 = __webpack_require__(9);

	var _script4 = _interopRequireDefault(_script3);

	var _script5 = __webpack_require__(12);

	var _script6 = _interopRequireDefault(_script5);

	var _script7 = __webpack_require__(15);

	var _script8 = _interopRequireDefault(_script7);

	var _script9 = __webpack_require__(18);

	var _script10 = _interopRequireDefault(_script9);

	var _script11 = __webpack_require__(21);

	var _script12 = _interopRequireDefault(_script11);

	var _script13 = __webpack_require__(24);

	var _script14 = _interopRequireDefault(_script13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// непосредственно жогово


	// Звуки


	// Игровые объекты


	// управление
	window.onload = function () {
	    var screen = new _script2.default(),
	        controls = new _script4.default(),
	        sprite = new _script6.default(),
	        sounds = new _script12.default(),
	        gameObjects = new _script8.default(screen, sprite, controls, sounds),
	        draw = new _script10.default(screen, gameObjects),
	        game = new _script14.default(screen, gameObjects, draw);

	    game.run();
	};

	// Игра


	// Рисование


	// Спрайт


	// экран

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	exports.i(__webpack_require__(4), "");

	// module
	exports.push([module.id, "body {\n  overflow: hidden;\n  background: #0e3e66;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Владимир on 22.10.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	__webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SCREEN_ASPECT_RATIO = 16 / 9;
	var WRAPPER_CLASS = 'wrapper';
	var CANVAS_CLASS = 'canvas';
	var MAX_WIDTH = 1000;

	var Screen = function () {
	    function Screen() {
	        var _this = this;

	        _classCallCheck(this, Screen);

	        this.aspectRatio = SCREEN_ASPECT_RATIO;
	        this.screen = document.createElement('div');
	        this.canvas = document.createElement('canvas');

	        this.setScreenSize();

	        document.body.appendChild(this.screen);
	        this.screen.appendChild(this.canvas);

	        this.screen.className = WRAPPER_CLASS;
	        this.canvas.className = CANVAS_CLASS;

	        this.context = this.canvas.getContext('2d');

	        window.addEventListener('resize', function () {
	            _this.setScreenSize();
	        });
	    }

	    // масштабирование экрана


	    _createClass(Screen, [{
	        key: 'setScreenSize',
	        value: function setScreenSize() {
	            this.windowWidth = document.documentElement.clientWidth;
	            this.windowHeight = document.documentElement.clientHeight;
	            this.width = this.windowWidth * 0.98 > MAX_WIDTH ? MAX_WIDTH : this.windowWidth * 0.98;
	            this.height = this.width / SCREEN_ASPECT_RATIO;

	            if (this.height > this.windowHeight * 0.98) {
	                this.height = this.windowHeight * 0.98;
	                this.width = this.windowHeight * 0.98 * SCREEN_ASPECT_RATIO;
	            }
	            this.canvas.width = this.width;
	            this.canvas.height = this.height;
	            this.screen.style.height = this.height + 'px';
	            this.screen.style.width = this.width + 'px';
	        }
	    }, {
	        key: 'clear',


	        // очистка холста
	        value: function clear() {
	            this.context.clearRect(0, 0, this.width, this.height);
	        }
	    }]);

	    return Screen;
	}();

	exports.default = Screen;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".wrapper {\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n}\n.canvas {\n  background: #000;\n}\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Владимир on 22.10.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	__webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controls = function () {
	    function Controls() {
	        var _this = this;

	        _classCallCheck(this, Controls);

	        this.down = {};
	        this.pressed = {};

	        document.addEventListener('keydown', function (e) {
	            _this.down[e.keyCode] = true;
	        });

	        document.addEventListener('keyup', function (e) {
	            delete _this.down[e.keyCode];
	            delete _this.pressed[e.keyCode];
	        });
	    }

	    _createClass(Controls, [{
	        key: 'isDown',
	        value: function isDown(code) {
	            return this.down[code];
	        }
	    }, {
	        key: 'isPressed',
	        value: function isPressed(code) {
	            if (this.pressed[code]) {
	                return false;
	            } else if (this.down[code]) {
	                return this.pressed[code] = true;
	            }
	            return false;
	        }
	    }]);

	    return Controls;
	}();

	exports.default = Controls;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Владимир on 22.10.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	__webpack_require__(13);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Sprite = function () {
	    function Sprite() {
	        _classCallCheck(this, Sprite);

	        this.spriteImg = new Image();
	        this.spriteImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAgCAYAAADZubxIAAAEJGlDQ1BJQ0MgUHJvZmlsZQAAOBGFVd9v21QUPolvUqQWPyBYR4eKxa9VU1u5GxqtxgZJk6XtShal6dgqJOQ6N4mpGwfb6baqT3uBNwb8AUDZAw9IPCENBmJ72fbAtElThyqqSUh76MQPISbtBVXhu3ZiJ1PEXPX6yznfOec7517bRD1fabWaGVWIlquunc8klZOnFpSeTYrSs9RLA9Sr6U4tkcvNEi7BFffO6+EdigjL7ZHu/k72I796i9zRiSJPwG4VHX0Z+AxRzNRrtksUvwf7+Gm3BtzzHPDTNgQCqwKXfZwSeNHHJz1OIT8JjtAq6xWtCLwGPLzYZi+3YV8DGMiT4VVuG7oiZpGzrZJhcs/hL49xtzH/Dy6bdfTsXYNY+5yluWO4D4neK/ZUvok/17X0HPBLsF+vuUlhfwX4j/rSfAJ4H1H0qZJ9dN7nR19frRTeBt4Fe9FwpwtN+2p1MXscGLHR9SXrmMgjONd1ZxKzpBeA71b4tNhj6JGoyFNp4GHgwUp9qplfmnFW5oTdy7NamcwCI49kv6fN5IAHgD+0rbyoBc3SOjczohbyS1drbq6pQdqumllRC/0ymTtej8gpbbuVwpQfyw66dqEZyxZKxtHpJn+tZnpnEdrYBbueF9qQn93S7HQGGHnYP7w6L+YGHNtd1FJitqPAR+hERCNOFi1i1alKO6RQnjKUxL1GNjwlMsiEhcPLYTEiT9ISbN15OY/jx4SMshe9LaJRpTvHr3C/ybFYP1PZAfwfYrPsMBtnE6SwN9ib7AhLwTrBDgUKcm06FSrTfSj187xPdVQWOk5Q8vxAfSiIUc7Z7xr6zY/+hpqwSyv0I0/QMTRb7RMgBxNodTfSPqdraz/sDjzKBrv4zu2+a2t0/HHzjd2Lbcc2sG7GtsL42K+xLfxtUgI7YHqKlqHK8HbCCXgjHT1cAdMlDetv4FnQ2lLasaOl6vmB0CMmwT/IPszSueHQqv6i/qluqF+oF9TfO2qEGTumJH0qfSv9KH0nfS/9TIp0Wboi/SRdlb6RLgU5u++9nyXYe69fYRPdil1o1WufNSdTTsp75BfllPy8/LI8G7AUuV8ek6fkvfDsCfbNDP0dvRh0CrNqTbV7LfEEGDQPJQadBtfGVMWEq3QWWdufk6ZSNsjG2PQjp3ZcnOWWing6noonSInvi0/Ex+IzAreevPhe+CawpgP1/pMTMDo64G0sTCXIM+KdOnFWRfQKdJvQzV1+Bt8OokmrdtY2yhVX2a+qrykJfMq4Ml3VR4cVzTQVz+UoNne4vcKLoyS+gyKO6EHe+75Fdt0Mbe5bRIf/wjvrVmhbqBN97RD1vxrahvBOfOYzoosH9bq94uejSOQGkVM6sN/7HelL4t10t9F4gPdVzydEOx83Gv+uNxo7XyL/FtFl8z9ZAHF4bBsrEwAAAqhJREFUaAXtmV9OwzAMh1u0U3ALpJ1pe+QKOwJ7ZK9cZxJcCBUx7YvYb1hOmnbrIvNi/Cd27fAtGe07+dkch+HXdFj3vbj+VUvjh9fPU36S9fuXrDrEIzfD8SIPduShX4/Ky3rkbuhOdXZ9N0k+8t5KPt2qUNS5zwTMv0qPTM+v7Si56rdI9kjVPJ6eSzbkar5HIzkI1h1sTL8iGDJL+7TObI9crQPJU5OrdTySg2CdWOiLnEAiWMmFSLXTheXHruRCZq59+/ZNqQup5Cnpnp9kxFmkEpcrl3o2xxmcu4MPGtdbhNb28/7xVZXCIrgq6Z/Fz936jzbdr7kk135y5NYJgqfb20VmWvFUnJ1jidb1euaqTl21o3d7Ii5l6ZnLWXuZpetqCdJ8nj51Pc1nER0Eezvz4P5EsPYBkWpX3SKe23Ii8rxQdfJht9ZZ5Hp2/BbJ1J9LKmlz11GSg+C5Jr6QvOl7sD6PkgnRll3Xo1tE4kdqHOThryVQ8819i74VucxHJSQHwTqZxvQrgiEUYr1+S+Mhlbycvei5UonUdbXEa75SPQgunVjEj5pA+k+WEuuRafktu5KrT2uR7JGqeTx9brLvTa72H2ewTqQx/ep7MATSp+rYkfj1EwC/R67GQfLU5FKHvHOTTL1cya3Xih/7yRAEWxNtxJ4IhkT6gki1W36NU3Ih07Pj33bzvg+mj3tLj1yej7hSkoNgJtioTLfoqftb+vvguc7gXMIgcuzcc+sEwWMn/CDrVt5ZW9oH+Q6ykLOVsxi3Zdf3wdx+WYdUEnPjWN+6DIIb3+F0i4Y8bsPoXv9evBKKTl6Ixo6OX4n0iLX85FE/dVqVQXCrO3vuK71N8kj05qDrlUjVyad21YmDQHSPxNJ48tbK3Ntt3KJrJx3rTxP4AV0Qp9jeabJEAAAAAElFTkSuQmCC';

	        this.initSprite();
	    }

	    _createClass(Sprite, [{
	        key: 'initSprite',


	        // создаём спрайт для объектов
	        value: function initSprite() {
	            this.alSprite = [[this.getSprite(0, 0, 22, 16), this.getSprite(0, 16, 22, 16)], [this.getSprite(22, 0, 16, 16), this.getSprite(22, 16, 16, 16)], [this.getSprite(38, 0, 24, 16), this.getSprite(38, 16, 24, 16)]];
	            this.taSprite = this.getSprite(62, 0, 22, 16);
	        }
	    }, {
	        key: 'getSprite',
	        value: function getSprite(x, y, w, h) {
	            return {
	                x: x,
	                y: y,
	                w: w,
	                h: h
	            };
	        }
	    }]);

	    return Sprite;
	}();

	exports.default = Sprite;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(16);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by Владимир on 22.10.2016.
	 */

	// условная ширина для холста, нужна для масштабирования
	var SCALE = 700;

	var Draw = function () {
	    function Draw(screen, sprite, controls, sounds) {
	        _classCallCheck(this, Draw);

	        this.sprite = sprite;
	        this.controls = controls;
	        this.screen = screen;
	        this.scale = SCALE;
	        this.sounds = sounds;

	        this.initGameObject();
	    }

	    // создаём игровые объекты


	    _createClass(Draw, [{
	        key: 'initGameObject',
	        value: function initGameObject() {
	            var _this = this;

	            this.frames = 0;
	            this.spFrame = 0;
	            this.lvFrame = 60;
	            this.dir = 1;
	            this.moveSound = 0;
	            // танчик
	            this.tank = {
	                sprite: this.sprite.taSprite,
	                x: (this.scale - this.sprite.taSprite.w) / 2,
	                y: this.scale / this.screen.aspectRatio - (20 + this.sprite.taSprite.h)
	            };

	            // массив пуль танка
	            this.bulletsT = [];

	            // массив пуль пришельцев
	            this.bulletsA = [];

	            // массив пришельцев
	            this.aliens = [];
	            [1, 0, 0, 2, 2].forEach(function (item, i) {
	                for (var j = 0; j < 10; j++) {
	                    _this.aliens.push({
	                        sprite: _this.sprite.alSprite[item],
	                        x: 20 + j * 30 + [0, 4, 0][item],
	                        y: 20 + i * 30,
	                        w: _this.sprite.alSprite[item][0].w,
	                        h: _this.sprite.alSprite[item][0].h
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'initBullet',


	        // создание пульки
	        value: function initBullet(x, y, v, w, h, c) {
	            return {
	                x: x,
	                y: y,
	                v: v,
	                w: w,
	                h: h,
	                c: c
	            };
	        }
	    }, {
	        key: 'updateBullet',


	        // обновление положения пули
	        value: function updateBullet(bullet) {
	            bullet.y += bullet.v;
	        }
	    }, {
	        key: 'AABBIntersect',


	        // проверка на персечение осей двух объектов
	        value: function AABBIntersect(ax, ay, aw, ah, bx, by, bw, bh) {
	            return ax < bx + bw && bx < ax + aw && ay < by + bh && by < ay + ah;
	        }
	    }, {
	        key: 'update',


	        // обновление положения для объектов и просчёт попаданий
	        value: function update() {
	            var _this2 = this;

	            this.frames++;

	            // движение танчика
	            if (this.controls.isDown(37)) {
	                this.tank.x -= 6;
	            }
	            if (this.controls.isDown(39)) {
	                this.tank.x += 6;
	            }
	            this.tank.x = Math.max(Math.min(this.tank.x, this.scale - (20 + this.sprite.taSprite.w)), 20);

	            // выстрелы
	            if (this.controls.isPressed(32)) {
	                this.bulletsT.push(this.initBullet(this.tank.x + 10, this.tank.y - 6, -3, 2, 6, '#fff'));
	                this.sounds.playSound('shoot');
	            }

	            // попадания в танчик
	            for (var i = 0, len = this.bulletsA.length; i < len; i++) {
	                var b = this.bulletsA[i];
	                this.updateBullet(b);

	                if (b.y > this.scale / this.screen.aspectRatio) {
	                    this.bulletsA.splice(i, 1);
	                    i--;
	                    len--;
	                    continue;
	                }

	                if (this.AABBIntersect(b.x, b.y, b.w, b.h, this.tank.x, this.tank.y, this.tank.sprite.w, this.tank.sprite.h)) {
	                    this.lose = 'lose';
	                    this.bulletsA.splice(i, 1);
	                    i--;
	                    len--;
	                    this.sounds.playSound('explosion');
	                    continue;
	                }
	            }

	            // попадания в пришельцев
	            for (var _i = 0, _len = this.bulletsT.length; _i < _len; _i++) {
	                var _b = this.bulletsT[_i];
	                this.updateBullet(_b);

	                if (_b.y + _b.h < 0) {
	                    this.bulletsT.splice(_i, 1);
	                    _i--;
	                    _len--;
	                    continue;
	                }

	                for (var j = 0, len2 = this.aliens.length; j < len2; j++) {
	                    var a = this.aliens[j];
	                    if (this.AABBIntersect(_b.x, _b.y, _b.w, _b.h, a.x, a.y, a.w, a.h)) {
	                        this.aliens.splice(j, 1);
	                        j--;
	                        len2--;
	                        this.bulletsT.splice(_i, 1);
	                        _i--;
	                        _len--;
	                        this.sounds.playSound('invaderkilled');

	                        // изменение скорости движения пришельцев
	                        // при уменьшении их количества
	                        switch (len2) {
	                            case 40:
	                                {
	                                    this.lvFrame = 40;
	                                    break;
	                                }
	                            case 30:
	                                {
	                                    this.lvFrame = 28;
	                                    break;
	                                }
	                            case 20:
	                                {
	                                    this.lvFrame = 20;
	                                    break;
	                                }
	                            case 10:
	                                {
	                                    this.lvFrame = 12;
	                                    break;
	                                }
	                            case 5:
	                                {
	                                    this.lvFrame = 6;
	                                    break;
	                                }
	                            case 1:
	                                {
	                                    this.lvFrame = 4;
	                                    break;
	                                }
	                        }
	                    }
	                }
	            }

	            // движения пришельцев
	            if (this.frames % this.lvFrame === 0) {
	                var _ret = function () {

	                    if (!_this2.aliens.length) {
	                        _this2.lose = 'win';
	                        return {
	                            v: void 0
	                        };
	                    }

	                    _this2.spFrame = (_this2.spFrame + 1) % 2;
	                    var _max = 0,
	                        _min = _this2.scale,
	                        _down = 20;

	                    _this2.aliens.forEach(function (item) {
	                        item.x += 20 * _this2.dir;
	                        _max = Math.max(_max, item.x + item.w);
	                        _min = Math.min(_min, item.x);
	                        _down = Math.max(_down, item.y + item.h);
	                    });

	                    if (_max > _this2.scale - 20 || _min < 20) {
	                        _this2.dir *= -1;
	                        _this2.aliens.forEach(function (item) {
	                            item.x += 20 * _this2.dir;
	                            item.y += 20;
	                        });
	                    }

	                    _this2.sounds.playSound('fastinvader');

	                    if (_down > _this2.tank.y) {
	                        _this2.lose = 'lose';
	                    }
	                }();

	                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	            }

	            // добавляем выстрелы пришельцов
	            if (Math.random() < 0.03 && this.aliens.length > 0) {
	                (function () {
	                    // выбираем произвольного пришельца
	                    var a = _this2.aliens[Math.round(Math.random() * (_this2.aliens.length - 1))];
	                    // проверяем чтоб выстрелы были только из первой линиии
	                    // пробегаем по всему массиву и если есть совпадение по
	                    // одной линии уходим на пришельца вниз
	                    _this2.aliens.forEach(function (item) {
	                        if (_this2.AABBIntersect(a.x, a.y, a.w, 100, item.x, item.y, item.w, item.h)) {
	                            a = item;
	                        }
	                    });
	                    _this2.bulletsA.push(_this2.initBullet(a.x + a.w * 0.5, a.y + a.h, 3, 2, 4, "#fff"));
	                    _this2.sounds.playSound('shoot');
	                })();
	            }
	        }
	    }]);

	    return Draw;
	}();

	exports.default = Draw;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Владимир on 22.10.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	__webpack_require__(19);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Draw = function () {
	    function Draw(screen, gameObjects) {
	        _classCallCheck(this, Draw);

	        this.gameObjects = gameObjects;
	        this.screen = screen;
	        this.context = screen.context;
	    }

	    // функция для отрисовки объекта


	    _createClass(Draw, [{
	        key: "drawSprite",
	        value: function drawSprite(sp, x, y) {
	            var item = this.scaleCoordinates(x, y, sp.w, sp.h);
	            this.context.drawImage(this.gameObjects.sprite.spriteImg, sp.x, sp.y, sp.w, sp.h, item.x, item.y, item.w, item.h);
	        }
	    }, {
	        key: "drawBullet",


	        // функция для отрисовки пульки
	        value: function drawBullet(bullet) {
	            this.context.fillStyle = bullet.c;
	            var item = this.scaleCoordinates(bullet.x, bullet.y, bullet.w, bullet.h);
	            this.context.fillRect(item.x, item.y, item.w, item.h);
	        }

	        // функция для отрисовки текста

	    }, {
	        key: "drawText",
	        value: function drawText(text) {
	            this.context.save();

	            this.context.fillStyle = "#fff";
	            this.context.font = "30pt Helvetica";
	            this.context.textAlign = "center";
	            this.context.textBaseline = "middle";
	            this.context.fillText(text, this.screen.width / 2, this.screen.height / 2);

	            this.context.restore();
	        }
	    }, {
	        key: "scaleCoordinates",


	        // функция пересчёта координат для текущего размера
	        value: function scaleCoordinates(x, y, w, h) {
	            return {
	                x: this.screen.width / (this.gameObjects.scale / x),
	                y: this.screen.height / (this.gameObjects.scale / this.screen.aspectRatio / y),
	                w: this.screen.width / (this.gameObjects.scale / w),
	                h: this.screen.height / (this.gameObjects.scale / this.screen.aspectRatio / h)
	            };
	        }

	        // рисование фрейма

	    }, {
	        key: "render",
	        value: function render(status) {
	            var _this = this;

	            this.screen.clear();

	            this.gameObjects.aliens.forEach(function (item) {
	                _this.drawSprite(item.sprite[_this.gameObjects.spFrame], item.x, item.y);
	            });

	            this.context.save();

	            this.gameObjects.bulletsT.concat(this.gameObjects.bulletsA).forEach(function (item) {
	                _this.drawBullet(item);
	            });

	            this.context.restore();

	            if (!(status == 'win' || status == 'lose')) {
	                this.drawSprite(this.gameObjects.tank.sprite, this.gameObjects.tank.x, this.gameObjects.tank.y);
	                window.console.log(status);
	            }
	            if (status === 'start') {
	                this.drawText('Начать игру');
	            } else if (status === 'pause') {
	                this.drawText('Продолжить игру');
	            } else if (status === 'lose') {
	                this.drawText('Попробовать ещё раз');
	            } else if (status === 'win') {
	                this.drawText('Вы победили!');
	            }
	        }
	    }]);

	    return Draw;
	}();

	exports.default = Draw;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(22);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by Владимир on 22.10.2016.
	 */

	var WRAPPER_CLASS = 'sound-wrapper';

	var Sounds = function () {
	    function Sounds() {
	        _classCallCheck(this, Sounds);

	        this.soundWrapper = document.createElement('div');
	        this.soundWrapper.className = WRAPPER_CLASS;
	        document.body.appendChild(this.soundWrapper);
	        this.sounds = {
	            explosion: this.addAudio('explosion'),
	            fastinvader1: this.addAudio('fastinvader1'),
	            fastinvader2: this.addAudio('fastinvader2'),
	            fastinvader3: this.addAudio('fastinvader3'),
	            fastinvader4: this.addAudio('fastinvader4'),
	            invaderkilled: this.addAudio('invaderkilled'),
	            shoot: this.addAudio('shoot')
	        };
	        this.invidersSound = 1;
	    }

	    _createClass(Sounds, [{
	        key: 'addAudio',
	        value: function addAudio(fileName) {
	            var folder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'sounds';
	            var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'mp3';

	            var audio = document.createElement('audio');
	            audio.src = folder + '/' + fileName + '.' + format;
	            this.soundWrapper.appendChild(audio);
	            return audio;
	        }
	    }, {
	        key: 'playSound',
	        value: function playSound(name) {
	            if (name === 'fastinvader') {
	                if (++this.invidersSound > 4) {
	                    this.invidersSound = 1;
	                }
	                name = 'fastinvader' + this.invidersSound;
	            }
	            if (this.sounds[name]) {
	                this.sounds[name].play();
	            }
	        }
	    }, {
	        key: 'pauseSound',
	        value: function pauseSound(name) {
	            if (name === 'fastinvader') {
	                name = 'fastinvader' + this.invidersSound;
	            }
	            if (this.sounds[name]) {
	                this.sounds[name].pause();
	            }
	        }
	    }]);

	    return Sounds;
	}();

	exports.default = Sounds;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".sound-wrapper {\n  display: none;\n}\n", ""]);

	// exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Владимир on 22.10.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	__webpack_require__(25);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Game = function () {
	    function Game(screen, gameObjects, draw) {
	        var _this = this;

	        _classCallCheck(this, Game);

	        this.screen = screen;
	        this.gameObjects = gameObjects;
	        this.draw = draw;
	        this.status = 'start';

	        this.screen.screen.addEventListener('click', function () {
	            if (_this.status === 'start' || _this.status === 'pause') {
	                _this.status = 'run';
	                _this.gameObjects.lose = false;
	                _this.run();
	            } else if (_this.status === 'win' || _this.status === 'lose') {
	                _this.gameObjects.initGameObject();
	                _this.status = 'run';
	                _this.gameObjects.lose = false;
	                _this.run();
	            } else if (_this.status === 'run') {
	                _this.status = 'pause';
	            }
	        });

	        window.addEventListener('resize', function () {
	            if (_this.status !== 'run') {
	                _this.run();
	            }
	        });
	    }

	    _createClass(Game, [{
	        key: 'run',
	        value: function run() {
	            window.requestAnimationFrame(this.loop.bind(this));
	        }
	    }, {
	        key: 'loop',
	        value: function loop() {
	            if (this.status === 'run') {
	                this.gameObjects.update();
	            }

	            if (this.gameObjects.lose) {
	                this.status = this.gameObjects.lose;
	            }

	            this.draw.render(this.status);
	            if (this.status === 'run') {
	                window.requestAnimationFrame(this.loop.bind(this));
	            }
	        }
	    }]);

	    return Game;
	}();

	exports.default = Game;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }
/******/ ]);