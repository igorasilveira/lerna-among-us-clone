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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameContext\", function() { return GameContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameProvider\", function() { return GameProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useGameState\", function() { return useGameState; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/igorsilveira/Documents/Projects/lerna-among-us-clone/packages/app/context/GameContext.tsx\";\n\nconst GameContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(undefined);\n\nconst GameProvider = ({\n  children\n}) => {\n  const {\n    0: player,\n    1: setPlayer\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    name: 'Igor',\n    position: {\n      x: 400,\n      y: 300\n    }\n  });\n  const {\n    0: map,\n    1: setMap\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const {\n    0: actions,\n    1: setActions\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: currentOverlay,\n    1: setCurrentOverlay\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GameContext.Provider, {\n    value: {\n      player,\n      setPlayer,\n      map,\n      setMap,\n      actions,\n      setActions,\n      currentOverlay,\n      setCurrentOverlay\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst useGameState = () => {\n  const context = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(GameContext);\n\n  if (context === undefined) {\n    throw new Error('useGameState must be used within a GameProvider');\n  }\n\n  return context;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L0dhbWVDb250ZXh0LnRzeD9mY2ZlIl0sIm5hbWVzIjpbIkdhbWVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiR2FtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJwbGF5ZXIiLCJzZXRQbGF5ZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJwb3NpdGlvbiIsIngiLCJ5IiwibWFwIiwic2V0TWFwIiwiYWN0aW9ucyIsInNldEFjdGlvbnMiLCJjdXJyZW50T3ZlcmxheSIsInNldEN1cnJlbnRPdmVybGF5IiwidXNlR2FtZVN0YXRlIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBS0EsTUFBTUEsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUE4Q0MsU0FBOUMsQ0FBcEI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXNEO0FBQ3pFLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsc0RBQVEsQ0FBaUI7QUFDbkRDLFFBQUksRUFBRSxNQUQ2QztBQUVuREMsWUFBUSxFQUFFO0FBQUVDLE9BQUMsRUFBRSxHQUFMO0FBQVVDLE9BQUMsRUFBRTtBQUFiO0FBRnlDLEdBQWpCLENBQXBDO0FBSUEsUUFBTTtBQUFBLE9BQUNDLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCTixzREFBUSxDQUFjLElBQWQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ08sT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JSLHNEQUFRLENBQVksRUFBWixDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDUyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDVixzREFBUSxDQUFXLElBQVgsQ0FBcEQ7QUFFQSxzQkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUNFLFNBQUssRUFBRTtBQUNMRixZQURLO0FBRUxDLGVBRks7QUFHTE0sU0FISztBQUlMQyxZQUpLO0FBS0xDLGFBTEs7QUFNTEMsZ0JBTks7QUFPTEMsb0JBUEs7QUFRTEM7QUFSSyxLQURUO0FBQUEsY0FZR2I7QUFaSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFnQkQsQ0F6QkQ7O0FBMkJBLE1BQU1jLFlBQVksR0FBRyxNQUFNO0FBQ3pCLFFBQU1DLE9BQU8sR0FBR25CLDRDQUFLLENBQUNvQixVQUFOLENBQWlCckIsV0FBakIsQ0FBaEI7O0FBQ0EsTUFBSW9CLE9BQU8sS0FBS2pCLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSW1CLEtBQUosQ0FBVSxpREFBVixDQUFOO0FBQ0Q7O0FBQ0QsU0FBT0YsT0FBUDtBQUNELENBTkQiLCJmaWxlIjoiLi9jb250ZXh0L0dhbWVDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSUFjdGlvbiB9IGZyb20gJy4uL2RlZmluaXRpb25zL2FjdGlvbic7XG5pbXBvcnQgeyBJR2FtZUNvbnRleHQsIElNYXAsIElPdmVybGF5IH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMvZ2FtZSc7XG5pbXBvcnQgeyBJUGxheWVyIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMvcGxheWVyJztcblxuY29uc3QgR2FtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PElHYW1lQ29udGV4dCB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuY29uc3QgR2FtZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pOiBSZWFjdE5vZGUgPT4ge1xuICBjb25zdCBbcGxheWVyLCBzZXRQbGF5ZXJdID0gdXNlU3RhdGU8SVBsYXllciB8IG51bGw+KHtcbiAgICBuYW1lOiAnSWdvcicsXG4gICAgcG9zaXRpb246IHsgeDogNDAwLCB5OiAzMDAgfSxcbiAgfSk7XG4gIGNvbnN0IFttYXAsIHNldE1hcF0gPSB1c2VTdGF0ZTxJTWFwIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFthY3Rpb25zLCBzZXRBY3Rpb25zXSA9IHVzZVN0YXRlPElBY3Rpb25bXT4oW10pO1xuICBjb25zdCBbY3VycmVudE92ZXJsYXksIHNldEN1cnJlbnRPdmVybGF5XSA9IHVzZVN0YXRlPElPdmVybGF5PihudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxHYW1lQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgcGxheWVyLFxuICAgICAgICBzZXRQbGF5ZXIsXG4gICAgICAgIG1hcCxcbiAgICAgICAgc2V0TWFwLFxuICAgICAgICBhY3Rpb25zLFxuICAgICAgICBzZXRBY3Rpb25zLFxuICAgICAgICBjdXJyZW50T3ZlcmxheSxcbiAgICAgICAgc2V0Q3VycmVudE92ZXJsYXksXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0dhbWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuY29uc3QgdXNlR2FtZVN0YXRlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChHYW1lQ29udGV4dCk7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUdhbWVTdGF0ZSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgR2FtZVByb3ZpZGVyJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG5leHBvcnQgeyBHYW1lQ29udGV4dCwgR2FtZVByb3ZpZGVyLCB1c2VHYW1lU3RhdGUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/GameContext.tsx\n");

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