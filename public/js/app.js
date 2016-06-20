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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(2),
	    __webpack_require__(5),
	    __webpack_require__(6),
	    __webpack_require__(12)
	  ], __WEBPACK_AMD_DEFINE_RESULT__ = function (chibi, series, domFade, states, targets) {

	  // Init Config

	  var initApp = function() {
	    series([
	      function(done) {
	        states.init();
	        done()
	      },
	      function(done) {
	        targets.init();
	        done()
	      },
	      function(done) {
	        setTimeout(function() {
	          domFade.init();
	        }, 100);
	      }
	      ], function(err) {
	        console.log('Problem.')
	    });
	  }

	  // Run App
	  document.addEventListener('DOMContentLoaded', initApp);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports) {

	/*!chibi 3.0.7, Copyright 2012-2016 Kyle Barrow, released under MIT license */
	!function(){"use strict";function e(){var e;for(h=!0,e=0;e<d.length;e+=1)d[e]();d=[]}function t(){var t;for(m=!0,h||e(),t=0;t<p.length;t+=1)p[t]();p=[]}function n(e,t){var n;for(n=t.length-1;n>=0;n-=1)e(t[n])}function r(e){return e.replace(/-\w/g,function(e){return e.charAt(1).toUpperCase()})}function a(e,t){return e.currentStyle?e.currentStyle[r(t)]:v.getComputedStyle?v.getComputedStyle(e,null).getPropertyValue(t):null}function o(e,t){return encodeURIComponent(e).replace(/%20/g,"+")+"="+encodeURIComponent(t).replace(/%20/g,"+")}function c(e,t,n){try{e.style[r(t)]=n}catch(a){}}function s(e){e.style.display="","none"===a(e,"display")&&(e.style.display="block")}function i(e){var t,r,a,c="";if(e.constructor===Object){for(t in e)if(e.hasOwnProperty(t))if(e[t].constructor===Array)for(r=0;r<e[t].length;r+=1)c+="&"+o(t,e[t][r]);else c+="&"+o(t,e[t])}else n(function(e){if("FORM"===e.nodeName)for(r=0;r<e.elements.length;r+=1)if(t=e.elements[r],!t.disabled)switch(t.type){case"button":case"image":case"file":case"submit":case"reset":break;case"select-one":t.length>0&&(c+="&"+o(t.name,t.value));break;case"select-multiple":for(a=0;a<t.length;a+=1)t[a].selected&&(c+="&"+o(t.name,t[a].value));break;case"checkbox":case"radio":t.checked&&(c+="&"+o(t.name,t.value));break;default:c+="&"+o(t.name,t.value)}},e);return c.length>0?c.substring(1):""}function u(e,t,r){var a,o,c,s=!1;return e&&(a=e.split(/\s+/),n(function(e){for(c=0;c<a.length;c+=1)if(o=new RegExp("\\b"+a[c]+"\\b","g"),"remove"===t)e.className=e.className.replace(o,"");else if("toggle"===t)e.className=e.className.match(o)?e.className.replace(o,""):e.className+" "+a[c];else if("has"===t&&e.className.match(o)){s=!0;break}},r)),s}function l(e,t,r){var a,o;e&&n(function(n){for(a=g.createElement("div"),a.innerHTML=e;null!==(o=a.lastChild);)try{"before"===t?n.parentNode.insertBefore(o,n):"after"===t?n.parentNode.insertBefore(o,n.nextSibling):"append"===t?n.appendChild(o):"prepend"===t&&n.insertBefore(o,n.firstChild)}catch(r){break}},r)}function f(e){var t,o,E,T=[],b=!1;if(e)if(e.nodeType&&1===e.nodeType)T=[e];else if("object"==typeof e)b="number"!=typeof e.length,T=e;else if("string"==typeof e)for(g.querySelectorAll||(g.querySelectorAll=function(e){var t,n,r,o=g.getElementsByTagName("head")[0],c=[];if(t=g.createElement("STYLE"),t.type="text/css",t.styleSheet){for(t.styleSheet.cssText=e+" {a:b}",o.appendChild(t),n=g.getElementsByTagName("*"),r=0;r<n.length;r+=1)"b"===a(n[r],"a")&&c.push(n[r]);o.removeChild(t)}return c}),o=g.querySelectorAll(e),E=0;E<o.length;E+=1)T[E]=o[E];return t=b?{}:T,t.ready=function(e){if(e){if(h)return e(),t;d.push(e)}},t.loaded=function(e){if(e){if(m)return e(),t;p.push(e)}},t.each=function(e){return"function"==typeof e&&n(function(t){return e.apply(t,arguments)},T),t},t.first=function(){return f(T.shift())},t.last=function(){return f(T.pop())},t.odd=function(){var e,t=[];for(e=0;e<T.length;e+=2)t.push(T[e]);return f(t)},t.even=function(){var e,t=[];for(e=1;e<T.length;e+=2)t.push(T[e]);return f(t)},t.hide=function(){return n(function(e){e.style.display="none"},T),t},t.show=function(){return n(function(e){s(e)},T),t},t.toggle=function(){return n(function(e){"none"===a(e,"display")?s(e):e.style.display="none"},T),t},t.remove=function(){return n(function(e){try{e.parentNode.removeChild(e)}catch(t){}},T),f()},t.css=function(e,o){if(e){if(o||""===o)return n(function(t){c(t,e,o)},T),t;if(T[0]){if(T[0].style[r(e)])return T[0].style[r(e)];if(a(T[0],e))return a(T[0],e)}}},t.getClass=function(){return T[0]&&T[0].className.length>0?T[0].className.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"").replace(/\s+/," "):void 0},t.setClass=function(e){return(e||""===e)&&n(function(t){t.className=e},T),t},t.addClass=function(e){return e&&n(function(t){t.className+=" "+e},T),t},t.removeClass=function(e){return u(e,"remove",T),t},t.toggleClass=function(e){return u(e,"toggle",T),t},t.hasClass=function(e){return u(e,"has",T)},t.html=function(e){return e||""===e?(n(function(t){t.innerHTML=e},T),t):T[0]?T[0].innerHTML:void 0},t.htmlBefore=function(e){return l(e,"before",T),t},t.htmlAfter=function(e){return l(e,"after",T),t},t.htmlAppend=function(e){return l(e,"append",T),t},t.htmlPrepend=function(e){return l(e,"prepend",T),t},t.attr=function(e,r){if(e){if(e=e.toLowerCase(),r||""===r)return n(function(t){"style"===e?t.style.cssText=r:"class"===e?t.className=r:t.setAttribute(e,r)},T),t;if(T[0])if("style"===e){if(T[0].style.cssText)return T[0].style.cssText}else if("class"===e){if(T[0].className)return T[0].className}else if(T[0].getAttribute(e))return T[0].getAttribute(e)}},t.data=function(e,n){return e?t.attr("data-"+e,n):void 0},t.val=function(e){var r,a,o;if(e||""===e)return n(function(t){switch(t.nodeName){case"SELECT":for(("string"==typeof e||"number"==typeof e)&&(e=[e]),a=0;a<t.length;a+=1)for(o=0;o<e.length;o+=1)if(t[a].selected="",t[a].value===e[o]){t[a].selected="selected";break}break;case"INPUT":case"TEXTAREA":case"BUTTON":t.value=e}},T),t;if(T[0])switch(T[0].nodeName){case"SELECT":for(r=[],a=0;a<T[0].length;a+=1)T[0][a].selected&&r.push(T[0][a].value);return r.length>1?r:r[0];case"INPUT":case"TEXTAREA":case"BUTTON":return T[0].value}},t.checked=function(e){return"boolean"==typeof e?(n(function(t){"INPUT"!==t.nodeName||"checkbox"!==t.type&&"radio"!==t.type||(t.checked=e)},T),t):!T[0]||"INPUT"!==T[0].nodeName||"checkbox"!==T[0].type&&"radio"!==T[0].type?void 0:!!T[0].checked},t.on=function(r,a){return(e===v||e===g)&&(T=[e]),n(function(e){g.addEventListener?e.addEventListener(r,a,!1):g.attachEvent&&(e[r+a]=function(){return a.apply(e,arguments)},e.attachEvent("on"+r,e[r+a]))},T),t},t.off=function(r,a){return(e===v||e===g)&&(T=[e]),n(function(e){g.addEventListener?e.removeEventListener(r,a,!1):g.attachEvent&&(e.detachEvent("on"+r,e[r+a]),e[r+a]=null)},T),t},t.ajax=function(e,n,r,a,o){var c,s,u=i(T),l=n?n.toUpperCase():"GET",f=new RegExp("http[s]?://(.*?)/","gi"),d=f.exec(e),p="_ts="+ +new Date,h=g.getElementsByTagName("head")[0],m="chibi"+ +new Date+(y+=1);return!u||"GET"!==l&&"DELETE"!==l||(e+=-1===e.indexOf("?")?"?"+u:"&"+u,u=null),"GET"===l&&!o&&d&&v.location.host!==d[1]?(a&&(e+=-1===e.indexOf("?")?"?"+p:"&"+p),e=e.replace("=%3F","=?"),r&&-1!==e.indexOf("=?")&&(e=e.replace("=?","="+m),v[m]=function(e){try{r(e,200)}catch(t){}v[m]=void 0}),s=document.createElement("script"),s.async=!0,s.src=e,s.onload=function(){h.removeChild(s)},h.appendChild(s)):(v.XMLHttpRequest?c=new XMLHttpRequest:v.ActiveXObject&&(c=new ActiveXObject("Microsoft.XMLHTTP")),c&&(a&&(e+=-1===e.indexOf("?")?"?"+p:"&"+p),c.open(l,e,!0),c.onreadystatechange=function(){4===c.readyState&&r&&r(c.responseText,c.status)},c.setRequestHeader("X-Requested-With","XMLHttpRequest"),("POST"===l||"PUT"===l)&&c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.send(u))),t},t.get=function(e,n,r,a){return t.ajax(e,"get",n,r,a)},t.post=function(e,n,r){return t.ajax(e,"post",n,r)},t}var d=[],p=[],h=!1,m=!1,y=0,g=document,v=window;g.addEventListener?(g.addEventListener("DOMContentLoaded",e,!1),v.addEventListener("load",t,!1)):g.attachEvent?(g.attachEvent("onreadystatechange",e),v.attachEvent("onload",t)):v.onload=t,v.$=f}();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, setImmediate) {var nextTick = 'undefined' !== typeof process
	  ? process.nextTick
	  : 'undefined' !== typeof setImmediate
	  ? setImmediate
	  : setTimeout

	function series(arr, ready, safe) {
	  var length = arr.length
	    , orig

	  if (!length) return nextTick(ready, 1)

	  function handleItem(idx) {
	    arr[idx](function(err) {
	      if (err) return ready(err)
	      if (idx < length - 1) return handleItem(idx + 1)
	      return ready()
	    })
	  }

	  if (safe) {
	    orig = handleItem
	    handleItem = function(idx) {
	      nextTick(function() {
	        orig(idx)
	      }, 1)
	    }
	  }

	  handleItem(0)
	}

	module.exports = series

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(4).setImmediate))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(3).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).setImmediate, __webpack_require__(4).clearImmediate))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(series,chibi) {

	  var domFade = {};

	  domFade.init = function(){
	    series([
	      function(done) {
	        setTimeout(function() {
	          $("main").setClass('fade-in');
	          done()
	        }, 50);
	      },
	      function(done) {
	        setTimeout(function() {
	          $("header").setClass('fade-in');
	        }, 10);
	      }
	      ], function(err) {
	        console.log('Problem.')
	    });
	  }

	  return domFade;

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(7);

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function(chibi,ssm) {

	  var states  = {};

	  states.init = function(){
	  
	    ssm.addState({
	      id: 'mobile',
	      query: '(max-width: 767px)',
	      onEnter: function(){
	        $("html").setClass('mobile');
	      }
	    });

	    ssm.addState({
	      id: 'tablet',
	      query: '(min-width: 768px) and (max-width: 1023px)',
	      onEnter: function(){
	        $("html").setClass('tablet');
	      }
	    });

	    ssm.addState({
	      id: 'desktop',
	      query: '(min-width: 1024px)',
	      onEnter: function(){
	        $("html").setClass('desktop');
	      }
	    });

	  }

	  return states;

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_states.sass", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_states.sass");
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

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "html.desktop {\n  font-size: 62.5%; }\n\nhtml.tablet {\n  font-size: 60%; }\n\nhtml.mobile {\n  font-size: 55%; }\n", ""]);

	// exports


/***/ },
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*global window document clearTimeout setTimeout */

	(function (window, document, undefined, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return factory(window, document, undefined);
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  else if (typeof exports === 'object') {
	    module.exports = factory;
	  }
	  else {
	    window.ssm = factory(window, document, undefined);
	  }
	})(window, document, undefined, function (window, document, undefined) {
	    'use strict';

	    var resizeTimeout = 25;
	    var stateChangeMethod = function(){};

	    function Error(message) {
	       this.message = message;
	       this.name = "Error";
	    }

	    //
	    // State Constructor
	    // When the user uses addState state manager will create instances of a State
	    //

	    function State(options) {
	        this.id = options.id || makeID();
	        this.query = options.query || 'all';
	        // These are exposed as part of the state, not options so delete before
	        // we merge these into default options.
	        delete options.id;
	        delete options.query;

	        var defaultOptions = {
	            onEnter: [],
	            onLeave: [],
	            onResize: [],
	            onFirstRun: []
	        };

	        //Merge options with defaults to make the state
	        this.options = mergeOptions(defaultOptions, options);

	        //Migrate methods into an array, this is to enable future functionality of adding extra methods to an existing state
	        if(typeof this.options.onEnter === "function"){
	            this.options.onEnter = [this.options.onEnter];
	        }

	        if(typeof this.options.onLeave === "function"){
	            this.options.onLeave = [this.options.onLeave];
	        }

	        if(typeof this.options.onResize === "function"){
	            this.options.onResize = [this.options.onResize];
	        }

	        if(typeof this.options.onFirstRun === "function"){
	            this.options.onFirstRun = [this.options.onFirstRun];
	        }

	        //Test the one time tests first, if the test is invalid we wont create the config option
	        if (this.testConfigOptions('once') === false) {
	            this.valid = false;
	            return false;
	        }

	        this.valid = true;
	        this.active = false;
	        this.init();
	    }

	    State.prototype = {
	        init: function() {
	            this.test = window.matchMedia(this.query);

	            if (this.test.matches && this.testConfigOptions('match')) {
	                this.enterState();
	            }

	            this.listener = function(test){
	                var changed = false;

	                if (test.matches) {
	                    if (this.testConfigOptions('match')) {
	                        this.enterState();
	                        changed = true;
	                    }
	                }
	                else {
	                    this.leaveState();
	                    changed = true;
	                }

	                if (changed) {
	                    stateChangeMethod();
	                }
	            }.bind(this);
	          
	            this.test.addListener(this.listener);
	        },
	        
	        //Handle entering a state
	        enterState: function() {
	            fireAllMethodsInArray(this.options.onFirstRun);
	            fireAllMethodsInArray(this.options.onEnter);
	            this.options.onFirstRun = [];
	            this.active = true;
	        },

	        //Handle leaving a state
	        leaveState: function() {
	            fireAllMethodsInArray(this.options.onLeave);
	            this.active = false;
	        },

	        //Handle the user resizing the browser
	        resizeState: function() {
	            if (this.testConfigOptions('resize')) {
	                fireAllMethodsInArray(this.options.onResize);
	            }
	        },

	        //When the StateManager removes a state we want to remove the event listener
	        destroy: function() {
	            this.test.removeListener(this.listener);
	        },

	        testConfigOptions: function(when) {
	            var totalConfigOptions = this.configOptions.length;

	            for (var j = 0; j < totalConfigOptions; j++) {
	                var configOption = this.configOptions[j];

	                if (typeof this.options[configOption.name] !== "undefined") {
	                    if (configOption.when === when && configOption.test.bind(this)() === false) {
	                        return false;
	                    }
	                }

	                //Skip any config options the state does not define
	                // if(typeof tempObj.state[configOptions[j].name] !== "undefined"){
	                //     tempObj.callback = configOptions[j].test;
	                //     if(tempObj.callback() === false){
	                //         validState = false;
	                //         break;
	                //     }
	                // }
	            }

	            return true;
	        },

	        //An array of avaliable config options, this can be pushed to by the State Manager
	        configOptions: []
	    };  

	    //State Manager Constructor

	    function StateManager(options) {
	        this.states = [];
	        this.resizeTimer = null;
	        this.configOptions = [];

	        window.addEventListener("resize", debounce(this.resizeBrowser.bind(this), resizeTimeout), true);    
	    }

	    StateManager.prototype = {
	        addState: function(options) {
	            var newState = new State(options);
	            
	            if (newState.valid) {
	                this.states.push(newState);
	            }

	            return newState;
	        },

	        addStates: function (statesArray) {
	            for (var i = statesArray.length - 1; i >= 0; i--) {
	                this.addState(statesArray[i]);
	            }

	            return this;
	        },

	        getState: function(id) {
	            for (var i = this.states.length - 1; i >= 0; i--) {
	                var state = this.states[i];

	                if(state.id === id){
	                    return state;
	                }
	            }
	        },

	        isActive: function(id) {
	            var selectedState = this.getState(id) || {};

	            return selectedState.active || false;
	        },

	        getStates: function(idArr) {
	            var idCount = null, returnArr = [];

	            if (typeof(idArr) === "undefined") {
	                return this.states;
	            }
	            else {
	                idCount = idArr.length;
	                
	                for (var i = 0; i < idCount; i++) {
	                    returnArr.push(this.getState(idArr[i]));
	                }

	                return returnArr;
	            }
	        },

	        removeState: function (id) {
	            for (var i = this.states.length - 1; i >= 0; i--) {
	                var state = this.states[i];

	                if (state.id === id) {
	                    state.destroy();
	                    this.states.splice(i, 1);
	                }
	            }

	            return this;
	        },

	        removeStates: function (idArray) {
	            for (var i = idArray.length - 1; i >= 0; i--) {
	                this.removeState(idArray[i]);
	            }

	            return this;
	        },

	        removeAllStates: function() {
	            for (var i = this.states.length - 1; i >= 0; i--) {
	                var state = this.states[i];
	                state.destroy();
	            }

	            this.states = [];
	        },


	        addConfigOption: function(options){
	            var defaultOptions = {
	                name: '', // name, this is used to apply to a state
	                test: null, //function which will perform the test
	                when: 'resize' // resize or match (match will mean that resize will never fire either), or once (which will test once, then delete state if test doesnt pass)
	            };

	            //Merge options with defaults
	            options = mergeOptions(defaultOptions, options);

	            if(options.name !== '' && options.test !== null){
	                State.prototype.configOptions.push(options);
	            }
	        },

	        removeConfigOption: function(name){
	            var configOptions = State.prototype.configOptions;

	            for (var i = configOptions.length - 1; i >= 0; i--) {
	                if (configOptions[i].name === name) {
	                    configOptions.splice(i, 1);
	                }
	            }

	            State.prototype.configOptions = configOptions;
	        },

	        getConfigOption: function(name){
	            var configOptions = State.prototype.configOptions;

	            if(typeof name === "string"){
	                for (var i = configOptions.length - 1; i >= 0; i--) {
	                    if(configOptions[i].name === name){
	                        return configOptions[i];
	                    }
	                }
	            }
	            else{
	                return configOptions;
	            }
	        },

	        getConfigOptions: function(){
	            return State.prototype.configOptions;
	        },

	        resizeBrowser: function() {
	            var activeStates = filterStates(this.states, 'active', true);
	            var len = activeStates.length;

	            for (var i = 0; i < len; i++) {
	                activeStates[i].resizeState();
	            }
	        },

	        stateChange: function(func) {
	            if (typeof func === "function") {
	                stateChangeMethod = func;
	            }
	            else {
	                throw new Error('Not a function');
	            }
	        }
	    };

	    //Utility functions

	    function filterStates(states, key, value) {
	        var len = states.length;
	        var returnStates = [];

	        for (var i = 0; i < len; i++) {
	            var state = states[i];

	            if (state[key] && state[key] === value) {
	                returnStates.push(state);
	            }
	        }

	        return returnStates;
	    }

	    function mergeOptions(obj1, obj2) {
	        var obj3 = {};

	        for (var attrname in obj1) {
	            obj3[attrname] = obj1[attrname];
	        }

	        for (var attrname2 in obj2) {
	            obj3[attrname2] = obj2[attrname2];
	        }

	        return obj3;
	    }

	    function makeID() {
	        var text = "";
	        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	        for (var i = 0; i < 10; i++) {
	            text += possible.charAt(Math.floor(Math.random() * possible.length));
	        }
	        return text;
	    }

	    function fireAllMethodsInArray(arr) {
	        var arrLength = arr.length;

	        for (var i = 0; i < arrLength; i++) {
	            arr[i]();
	        }
	    }

	    function funcToArray(func) {
	        if (typeof func === 'function') {
	            return [func];
	        }
	        else {
	            return func;
	        }
	    }

	    //
	    // David Walsh's Debounce - http://davidwalsh.name/javascript-debounce-function
	    //

	    function debounce(func, wait, immediate) {
	        var timeout;
	        
	        return function() {
	            var context = this, args = arguments;
	            var later = function() {
	                timeout = null;
	                if (!immediate) func.apply(context, args);
	            };
	            var callNow = immediate && !timeout;
	            clearTimeout(timeout);
	            timeout = setTimeout(later, wait);
	            if (callNow) func.apply(context, args);
	        };
	    }

	    return new StateManager();
	});


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(13);

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(chibi) {

	  var targets    = {},
	      appState   = '',
	      targetName = '',
	      tgtClicked = 'target-active',
	      tgtHovered = 'target-hovered',
	      // SECTIONS & CSS Selectors
	      targetDiv  = '.target-section',
	      sections   = [
	        'section_one','section_two','section_three','section_four','section_five'
	      ];

	  // Logic for manipulating sections on click
	  targets.targetStateClick = function() {
	    
	    // Section Checker - Use for any special functions unique to Section
	    var targetChecker = function() {
	      for (i = 0; i < sections.length; i++) { 
	        if(targetName === sections[i]) {
	          console.log(targetName);
	        }
	      }
	    }

	    // Click Actions
	    if(!$(this).hasClass(tgtClicked)) {
	      // Switch App State
	      appState = 'activated';
	      $('body').setClass('activated');
	      // Manipulate Classes
	      $(targetDiv).removeClass(tgtClicked);
	      $(targetDiv).removeClass(tgtHovered);
	      $(this).addClass(tgtClicked);
	      // Which Target
	      targetName = $(this).attr('ID');
	      targetChecker();
	    } else if ($(this).hasClass(tgtClicked)) {
	      appState = 'initial';
	      $('body').setClass('initial');
	      $(targetDiv).removeClass(tgtClicked);        
	    }
	  }

	  // Logic for manipulating sections on hover
	  targets.targetStateHover = function() {
	    // Check to Make sure we are in the initial app state
	    if(appState != 'activated') {
	      if(!$(this).hasClass(tgtHovered)) {
	        $(targetDiv).removeClass(tgtHovered);
	        $(this).addClass(tgtHovered);
	      } else if ($(this).hasClass(tgtHovered)) {
	        $(targetDiv).removeClass(tgtHovered);
	      }
	    }
	  }

	  targets.init = function(){
	    // INIT STATE
	    $('body').setClass('initial');
	    appState   = 'initial';
	    // Click
	    $(targetDiv).on('click',targets.targetStateClick);
	    // Hover
	    $(targetDiv).on('mouseenter',targets.targetStateHover);
	  }

	  return targets;

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_targets.sass", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_targets.sass");
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

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "section.target-section {\n  -webkit-transition: all 0.35s cubic-bezier(0.19, 1, 0.22, 1);\n  -moz-transition: all 0.35s cubic-bezier(0.19, 1, 0.22, 1);\n  -ms-transition: all 0.35s cubic-bezier(0.19, 1, 0.22, 1);\n  -o-transition: all 0.35s cubic-bezier(0.19, 1, 0.22, 1);\n  transition: all 0.35s cubic-bezier(0.19, 1, 0.22, 1); }\n\nsection.target-section {\n  display: block;\n  width: 100vw;\n  position: relative;\n  float: left; }\n\n.target-active {\n  background-color: red; }\n\n.target-hovered {\n  background-color: green; }\n\nbody.initial section.target-section {\n  height: 20vh; }\n\nbody.activated section.target-section {\n  height: 2.5vh; }\n\nbody.activated section.target-section.target-active {\n  height: 90vh; }\n", ""]);

	// exports


/***/ }
/******/ ]);