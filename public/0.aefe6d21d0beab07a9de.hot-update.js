webpackHotUpdate(0, {
  /***/ './js/index.js': /***/ function(
    module,
    __webpack_exports__,
    __webpack_require__,
  ) {
    'use strict';
    Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
    /* WEBPACK VAR INJECTION */ (function(module) {
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(
        './node_modules/react/index.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_react__,
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(
        './node_modules/react-dom/index.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_1_react_dom__,
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(
        './node_modules/react-router-dom/es/index.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_App__ = __webpack_require__(
        './js/Components/App.jsx',
      );
      (function() {
        var enterModule = __webpack_require__('./node_modules/react-hot-loader/index.js')
          .enterModule;

        enterModule && enterModule(module);
      })();

      var element = document.getElementById('app');
      if (!element) {
        throw new Error("Couldn't find '#app' element");
      }

      __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.hydrate(
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_router_dom__['a' /* BrowserRouter */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__Components_App__['a' /* default */],
          ),
        ),
        element,
      );
      (function() {
        var reactHotLoader = __webpack_require__(
          './node_modules/react-hot-loader/index.js',
        ).default;

        var leaveModule = __webpack_require__('./node_modules/react-hot-loader/index.js')
          .leaveModule;

        if (!reactHotLoader) {
          return;
        }

        reactHotLoader.register(
          element,
          'element',
          '/Users/implaier/PhpstormProjects/complete-intro-to-react/js/index.js',
        );
        leaveModule(module);
      })();
      /* WEBPACK VAR INJECTION */
    }.call(
      __webpack_exports__,
      __webpack_require__('./node_modules/webpack/buildin/harmony-module.js')(module),
    ));

    /***/
  },
});
//# sourceMappingURL=0.aefe6d21d0beab07a9de.hot-update.js.map
