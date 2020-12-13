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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Modal.tsx":
/*!******************************!*\
  !*** ./components/Modal.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Modal; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/igorsilveira/Documents/Projects/among-us-clone/components/Modal.tsx\";\n\n\nfunction Modal({\n  children,\n  opened,\n  title,\n  onClose,\n  onSubmit\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: opened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \" h-screen w-screen fixed modal-container flex justify-center items-center \",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-1/2 bg-white rounded\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"flex px-4 py-2\", {\n            'justify-between': title\n          }, {\n            'justify-end': !title\n          }),\n          children: [title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"font-bold text-2xl\",\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 39\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"text-2xl cursor-pointer\",\n            onClick: onClose,\n            children: \"\\xD7\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 25\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"p-4 border-t-2 border-b-2 border-gray-100\",\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 25\n        }, this), onSubmit && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex justify-between px-4 py-2\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: onSubmit,\n            className: \"bg-blue-300 px-3 py-2 rounded font-bold text-white\",\n            children: \"Submit\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 33\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 29\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 21\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsLnRzeD8wZDU4Il0sIm5hbWVzIjpbIk1vZGFsIiwiY2hpbGRyZW4iLCJvcGVuZWQiLCJ0aXRsZSIsIm9uQ2xvc2UiLCJvblN1Ym1pdCIsImNsYXNzbmFtZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVlLFNBQVNBLEtBQVQsQ0FBZTtBQUMxQkMsVUFEMEI7QUFFMUJDLFFBRjBCO0FBRzFCQyxPQUgwQjtBQUkxQkMsU0FKMEI7QUFLMUJDO0FBTDBCLENBQWYsRUFNQztBQUVaLHNCQUNJO0FBQUEsY0FDS0gsTUFBTSxpQkFDSDtBQUFLLGVBQVMsRUFBQyw0RUFBZjtBQUFBLDZCQUlJO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFDVkksaURBQVUsQ0FDTixnQkFETSxFQUVOO0FBQUMsK0JBQW1CSDtBQUFwQixXQUZNLEVBR047QUFBQywyQkFBZSxDQUFDQTtBQUFqQixXQUhNLENBRGQ7QUFBQSxxQkFPS0EsS0FBSyxpQkFBSTtBQUFHLHFCQUFTLEVBQUMsb0JBQWI7QUFBQSxzQkFBbUNBO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUGQsZUFRSTtBQUFNLHFCQUFTLEVBQUMseUJBQWhCO0FBQTBDLG1CQUFPLEVBQUVDLE9BQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVdJO0FBQUssbUJBQVMsRUFBQywyQ0FBZjtBQUFBLG9CQUNLSDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEosRUFjS0ksUUFBUSxpQkFDTDtBQUFLLG1CQUFTLEVBQUMsZ0NBQWY7QUFBQSxpQ0FDSTtBQUNJLG1CQUFPLEVBQUVBLFFBRGI7QUFFSSxxQkFBUyxFQUFDLG9EQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlIsbUJBREo7QUFtQ0giLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGFsLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IElNb2RhbFByb3BzIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMvbW9kYWwnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCh7XG4gICAgY2hpbGRyZW4sXG4gICAgb3BlbmVkLFxuICAgIHRpdGxlLFxuICAgIG9uQ2xvc2UsXG4gICAgb25TdWJtaXQsXG59OiBJTW9kYWxQcm9wcykge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtvcGVuZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgICAgICAgaC1zY3JlZW4gdy1zY3JlZW4gZml4ZWQgbW9kYWwtY29udGFpbmVyXG4gICAgICAgICAgICAgICAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcbiAgICAgICAgICAgICAgICBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBiZy13aGl0ZSByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGV4IHB4LTQgcHktMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J2p1c3RpZnktYmV0d2Vlbic6IHRpdGxlfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydqdXN0aWZ5LWVuZCc6ICF0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZSAmJiA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGxcIj57dGl0bGV9PC9wPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9e29uQ2xvc2V9PiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlci10LTIgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvblN1Ym1pdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcHgtNCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS0zMDAgcHgtMyBweS0yIHJvdW5kZWQgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Modal.tsx\n");

/***/ }),

/***/ "./context/GameContext.tsx":
/*!*********************************!*\
  !*** ./context/GameContext.tsx ***!
  \*********************************/
/*! exports provided: GameContext, GameProvider, useGameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameContext\", function() { return GameContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameProvider\", function() { return GameProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useGameState\", function() { return useGameState; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/igorsilveira/Documents/Projects/among-us-clone/context/GameContext.tsx\";\n\nconst GameContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(undefined);\n\nconst GameProvider = ({\n  children\n}) => {\n  const {\n    0: player,\n    1: setPlayer\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GameContext.Provider, {\n    value: {\n      player,\n      setPlayer\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, undefined);\n};\n\nconst useGameState = () => {\n  const context = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(GameContext);\n\n  if (context === undefined) {\n    throw new Error('useGameState must be used within a GameProvider');\n  }\n\n  return context;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L0dhbWVDb250ZXh0LnRzeD9mY2ZlIl0sIm5hbWVzIjpbIkdhbWVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiR2FtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJwbGF5ZXIiLCJzZXRQbGF5ZXIiLCJ1c2VTdGF0ZSIsInVzZUdhbWVTdGF0ZSIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFdBQVcsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBOENDLFNBQTlDLENBQXBCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFnQjtBQUNqQyxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUMsSUFBRCxDQUFwQztBQUVBLHNCQUNJLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUN6QkYsWUFEeUI7QUFFekJDO0FBRnlCLEtBQTdCO0FBQUEsY0FJS0Y7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFRSCxDQVhEOztBQWFBLE1BQU1JLFlBQVksR0FBRyxNQUFNO0FBQ3ZCLFFBQU1DLE9BQU8sR0FBR1QsNENBQUssQ0FBQ1UsVUFBTixDQUFpQlgsV0FBakIsQ0FBaEI7O0FBQ0EsTUFBSVUsT0FBTyxLQUFLUCxTQUFoQixFQUEyQjtBQUN2QixVQUFNLElBQUlTLEtBQUosQ0FBVSxpREFBVixDQUFOO0FBQ0g7O0FBQ0QsU0FBT0YsT0FBUDtBQUNILENBTkQiLCJmaWxlIjoiLi9jb250ZXh0L0dhbWVDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuY29uc3QgR2FtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PElHYW1lQ29udGV4dCB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuY29uc3QgR2FtZVByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBbcGxheWVyLCBzZXRQbGF5ZXJdID0gdXNlU3RhdGUobnVsbClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxHYW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgc2V0UGxheWVyXG4gICAgICAgIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0dhbWVDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuY29uc3QgdXNlR2FtZVN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEdhbWVDb250ZXh0KTtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndXNlR2FtZVN0YXRlIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBHYW1lUHJvdmlkZXInKVxuICAgIH1cbiAgICByZXR1cm4gY29udGV4dFxufVxuXG5leHBvcnQge1xuICAgIEdhbWVDb250ZXh0LFxuICAgIEdhbWVQcm92aWRlcixcbiAgICB1c2VHYW1lU3RhdGVcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/GameContext.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.tsx\");\n/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GameContext */ \"./context/GameContext.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/igorsilveira/Documents/Projects/among-us-clone/pages/index.tsx\";\n\n\n\n\n\nfunction Index() {\n  const {\n    setPlayer\n  } = Object(_context_GameContext__WEBPACK_IMPORTED_MODULE_3__[\"useGameState\"])();\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  const {\n    0: modalOpen,\n    1: setModalOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: playerName,\n    1: setPlayerName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n\n  const onSubmit = () => {\n    setPlayer(playerName);\n    router.push('/game');\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex justify-center h-screen items-center\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      className: \"\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-5xl font-bold\",\n        children: \"AmongThem\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"text-xl my-8\",\n        children: \"This is the home of a brand new challenge that is building an AmongUs \\\"clone\\\"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => setModalOpen(true),\n        className: \"bg-blue-300 p-4 rounded-md text-white font-bold uppercase\",\n        children: \"Game on\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: \"Hello\",\n      opened: modalOpen,\n      onClose: () => setModalOpen(false),\n      onSubmit: onSubmit,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: playerName,\n        placeholder: \"username\",\n        onChange: evt => setPlayerName(evt.target.value)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleCIsInNldFBsYXllciIsInVzZUdhbWVTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsInVzZVN0YXRlIiwicGxheWVyTmFtZSIsInNldFBsYXllck5hbWUiLCJvblN1Ym1pdCIsInB1c2giLCJldnQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQ2YsUUFBTTtBQUFDQztBQUFELE1BQWNDLHlFQUFZLEVBQWhDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCRixzREFBUSxDQUFDLEVBQUQsQ0FBNUM7O0FBRUEsUUFBTUcsUUFBUSxHQUFHLE1BQU07QUFDckJULGFBQVMsQ0FBQ08sVUFBRCxDQUFUO0FBQ0FMLFVBQU0sQ0FBQ1EsSUFBUCxDQUFZLE9BQVo7QUFDRCxHQUhEOztBQUtBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDJDQUFmO0FBQUEsNEJBQ0U7QUFBUSxlQUFTLEVBQUMsRUFBbEI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsaUJBQVMsRUFBQyxjQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFPRTtBQUFRLGVBQU8sRUFBRSxNQUFNTCxZQUFZLENBQUMsSUFBRCxDQUFuQztBQUEyQyxpQkFBUyxFQUFDLDJEQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBWUUscUVBQUMseURBQUQ7QUFDRSxXQUFLLEVBQUMsT0FEUjtBQUVFLFlBQU0sRUFBRUQsU0FGVjtBQUdFLGFBQU8sRUFBRSxNQUFNQyxZQUFZLENBQUMsS0FBRCxDQUg3QjtBQUlFLGNBQVEsRUFBRUksUUFKWjtBQUFBLDZCQU1FO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBSyxFQUFFRixVQUExQjtBQUFzQyxtQkFBVyxFQUFDLFVBQWxEO0FBQTZELGdCQUFRLEVBQUdJLEdBQUQsSUFBU0gsYUFBYSxDQUFDRyxHQUFHLENBQUNDLE1BQUosQ0FBV0MsS0FBWjtBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEOztBQUVjZCxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwnO1xuaW1wb3J0IHsgdXNlR2FtZVN0YXRlIH0gZnJvbSAnLi4vY29udGV4dC9HYW1lQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHtzZXRQbGF5ZXJ9ID0gdXNlR2FtZVN0YXRlKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwbGF5ZXJOYW1lLCBzZXRQbGF5ZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xuICAgIHNldFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICByb3V0ZXIucHVzaCgnL2dhbWUnKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGgtc2NyZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZFwiPkFtb25nVGhlbTwvaDE+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCBteS04XCJcbiAgICAgICAgPlxuICAgICAgICAgIFRoaXMgaXMgdGhlIGhvbWUgb2YgYSBicmFuZCBuZXcgY2hhbGxlbmdlIHRoYXQgaXMgYnVpbGRpbmcgYW4gQW1vbmdVcyBcImNsb25lXCJcbiAgICAgICAgPC9wPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsT3Blbih0cnVlKX0gY2xhc3NOYW1lPVwiYmctYmx1ZS0zMDAgcC00IHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBmb250LWJvbGQgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgR2FtZSBvblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8TW9kYWxcbiAgICAgICAgdGl0bGU9XCJIZWxsb1wiXG4gICAgICAgIG9wZW5lZD17bW9kYWxPcGVufVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRNb2RhbE9wZW4oZmFsc2UpfVxuICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtwbGF5ZXJOYW1lfSBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCIgb25DaGFuZ2U9eyhldnQpID0+IHNldFBsYXllck5hbWUoZXZ0LnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICA8L01vZGFsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCI/YWFhYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjbGFzc25hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///classnames\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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