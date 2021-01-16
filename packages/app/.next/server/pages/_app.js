module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/GameContext.tsx":
/*!*********************************!*\
  !*** ./context/GameContext.tsx ***!
  \*********************************/
/*! exports provided: GameContext, GameProvider, useGameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameContext\", function() { return GameContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameProvider\", function() { return GameProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useGameState\", function() { return useGameState; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/igorsilveira/Documents/Projects/lerna-among-us-clone/packages/app/context/GameContext.tsx\";\n\nconst GameContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(undefined);\n\nconst GameProvider = ({\n  children\n}) => {\n  const {\n    0: player,\n    1: setPlayer\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    name: 'Igor',\n    position: {\n      x: 400,\n      y: 300\n    }\n  });\n  const {\n    0: map,\n    1: setMap\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const {\n    0: actions,\n    1: setActions\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: currentOverlay,\n    1: setCurrentOverlay\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GameContext.Provider, {\n    value: {\n      player,\n      setPlayer,\n      map,\n      setMap,\n      actions,\n      setActions,\n      currentOverlay,\n      setCurrentOverlay\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst useGameState = () => {\n  const context = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(GameContext);\n\n  if (context === undefined) {\n    throw new Error('useGameState must be used within a GameProvider');\n  }\n\n  return context;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L0dhbWVDb250ZXh0LnRzeD9mY2ZlIl0sIm5hbWVzIjpbIkdhbWVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiR2FtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJwbGF5ZXIiLCJzZXRQbGF5ZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJwb3NpdGlvbiIsIngiLCJ5IiwibWFwIiwic2V0TWFwIiwiYWN0aW9ucyIsInNldEFjdGlvbnMiLCJjdXJyZW50T3ZlcmxheSIsInNldEN1cnJlbnRPdmVybGF5IiwidXNlR2FtZVN0YXRlIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBTUEsTUFBTUEsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUE4Q0MsU0FBOUMsQ0FBcEI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQW1EO0FBQ3RFLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsc0RBQVEsQ0FBaUI7QUFDbkRDLFFBQUksRUFBRSxNQUQ2QztBQUVuREMsWUFBUSxFQUFFO0FBQUNDLE9BQUMsRUFBRSxHQUFKO0FBQVNDLE9BQUMsRUFBRTtBQUFaO0FBRnlDLEdBQWpCLENBQXBDO0FBSUEsUUFBTTtBQUFBLE9BQUNDLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCTixzREFBUSxDQUFjLElBQWQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ08sT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JSLHNEQUFRLENBQVksRUFBWixDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDUyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDVixzREFBUSxDQUFXLElBQVgsQ0FBcEQ7QUFFQSxzQkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFDM0JGLFlBRDJCO0FBRTNCQyxlQUYyQjtBQUczQk0sU0FIMkI7QUFJM0JDLFlBSjJCO0FBSzNCQyxhQUwyQjtBQU0zQkMsZ0JBTjJCO0FBTzNCQyxvQkFQMkI7QUFRM0JDO0FBUjJCLEtBQTdCO0FBQUEsY0FXR2I7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFlRCxDQXhCRDs7QUEwQkEsTUFBTWMsWUFBWSxHQUFHLE1BQU07QUFDekIsUUFBTUMsT0FBTyxHQUFHbkIsNENBQUssQ0FBQ29CLFVBQU4sQ0FBaUJyQixXQUFqQixDQUFoQjs7QUFDQSxNQUFJb0IsT0FBTyxLQUFLakIsU0FBaEIsRUFBMkI7QUFDekIsVUFBTSxJQUFJbUIsS0FBSixDQUFVLGlEQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRixPQUFQO0FBQ0QsQ0FORCIsImZpbGUiOiIuL2NvbnRleHQvR2FtZUNvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UmVhY3ROb2RlLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge0lBY3Rpb259IGZyb20gJy4uL2RlZmluaXRpb25zL2FjdGlvbic7XG5pbXBvcnQge0lHYW1lQ29udGV4dCwgSU1hcCwgSU92ZXJsYXl9IGZyb20gJy4uL2RlZmluaXRpb25zL2dhbWUnO1xuaW1wb3J0IHtJUGxheWVyfSBmcm9tICcuLi9kZWZpbml0aW9ucy9wbGF5ZXInO1xuXG5jb25zdCBHYW1lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8SUdhbWVDb250ZXh0IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG5jb25zdCBHYW1lUHJvdmlkZXIgPSAoe2NoaWxkcmVufToge2NoaWxkcmVuOiBSZWFjdE5vZGUgfSk6IFJlYWN0Tm9kZSA9PiB7XG4gIGNvbnN0IFtwbGF5ZXIsIHNldFBsYXllcl0gPSB1c2VTdGF0ZTxJUGxheWVyIHwgbnVsbD4oe1xuICAgIG5hbWU6ICdJZ29yJyxcbiAgICBwb3NpdGlvbjoge3g6IDQwMCwgeTogMzAwfSxcbiAgfSk7XG4gIGNvbnN0IFttYXAsIHNldE1hcF0gPSB1c2VTdGF0ZTxJTWFwIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFthY3Rpb25zLCBzZXRBY3Rpb25zXSA9IHVzZVN0YXRlPElBY3Rpb25bXT4oW10pO1xuICBjb25zdCBbY3VycmVudE92ZXJsYXksIHNldEN1cnJlbnRPdmVybGF5XSA9IHVzZVN0YXRlPElPdmVybGF5PihudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxHYW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgcGxheWVyLFxuICAgICAgc2V0UGxheWVyLFxuICAgICAgbWFwLFxuICAgICAgc2V0TWFwLFxuICAgICAgYWN0aW9ucyxcbiAgICAgIHNldEFjdGlvbnMsXG4gICAgICBjdXJyZW50T3ZlcmxheSxcbiAgICAgIHNldEN1cnJlbnRPdmVybGF5LFxuICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR2FtZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCB1c2VHYW1lU3RhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEdhbWVDb250ZXh0KTtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlR2FtZVN0YXRlIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBHYW1lUHJvdmlkZXInKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG5cbmV4cG9ydCB7XG4gIEdhbWVDb250ZXh0LFxuICBHYW1lUHJvdmlkZXIsXG4gIHVzZUdhbWVTdGF0ZSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/GameContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/GameContext */ \"./context/GameContext.tsx\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/igorsilveira/Documents/Projects/lerna-among-us-clone/packages/app/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_GameContext__WEBPACK_IMPORTED_MODULE_1__[\"GameProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULENBQWE7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWIsRUFBa0U7QUFDL0Usc0JBQ0UscUVBQUMsaUVBQUQ7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBHYW1lUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0dhbWVDb250ZXh0JztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHJldHVybiAoXG4gICAgPEdhbWVQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0dhbWVQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWwuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/global.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });