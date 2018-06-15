webpackHotUpdate(0, {
  /***/ './js/State/store.js': /***/ function(
    module,
    __webpack_exports__,
    __webpack_require__,
  ) {
    'use strict';
    /* WEBPACK VAR INJECTION */ (function(module) {
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(
        './node_modules/redux/es/index.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__(
        './node_modules/redux-devtools-extension/index.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__,
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(
        './node_modules/redux-thunk/lib/index.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_2_redux_thunk__,
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(
        './js/State/reducers.js',
      );
      (function() {
        var enterModule = __webpack_require__('./node_modules/react-hot-loader/index.js')
          .enterModule;

        enterModule && enterModule(module);
      })();

      /* eslint-disable import/no-extraneous-dependencies,no-underscore-dangle */

      // const store = createStore(
      //   rootReducer,
      //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      //   compose(applyMiddleware(thunk)),
      // );

      var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__['createStore'])(
        __WEBPACK_IMPORTED_MODULE_3__reducers__['a' /* default */],
        Object(
          __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__['composeWithDevTools'],
        )(
          Object(__WEBPACK_IMPORTED_MODULE_0_redux__['applyMiddleware'])(
            __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a,
          ),
        ),
      );

      var _default = store;
      /* harmony default export */ __webpack_exports__['a'] = _default;
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
          store,
          'store',
          '/Users/implaier/PhpstormProjects/complete-intro-to-react/js/State/store.js',
        );
        reactHotLoader.register(
          _default,
          'default',
          '/Users/implaier/PhpstormProjects/complete-intro-to-react/js/State/store.js',
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
//# sourceMappingURL=0.acc06ae6423fbce68a9b.hot-update.js.map
