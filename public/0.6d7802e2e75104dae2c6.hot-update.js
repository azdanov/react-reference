webpackHotUpdate(0, {
  /***/ './js/State/reducers.js': /***/ function(
    module,
    __webpack_exports__,
    __webpack_require__,
  ) {
    'use strict';
    /* WEBPACK VAR INJECTION */ (function(module) {
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(
        './node_modules/redux/es/index.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(
        './js/State/actions.js',
      );
      (function() {
        var enterModule = __webpack_require__('./node_modules/react-hot-loader/index.js')
          .enterModule;

        enterModule && enterModule(module);
      })();

      var searchTerm = function searchTerm() {
        var state =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments[1];

        if (
          action.type ===
          __WEBPACK_IMPORTED_MODULE_1__actions__['c' /* SET_SEARCH_TERM */]
        ) {
          return action.payload;
        }
        return state;
      };

      var apiData = function apiData() {
        var state =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];

        if (
          action.type === __WEBPACK_IMPORTED_MODULE_1__actions__['a' /* ADD_API_DATA */]
        ) {
          var _Object$assign;

          return Object.assign(
            {},
            state,
            ((_Object$assign = {}),
            (_Object$assign[action.payload.imdbID] = action.payload),
            _Object$assign),
          );
        }
        return state;
      };

      var reducers = Object(__WEBPACK_IMPORTED_MODULE_0_redux__['combineReducers'])({
        searchTerm: searchTerm,
        apiData: apiData,
      });

      var _default = reducers;
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
          searchTerm,
          'searchTerm',
          '/Users/implaier/PhpstormProjects/complete-intro-to-react/js/State/reducers.js',
        );
        reactHotLoader.register(
          apiData,
          'apiData',
          '/Users/implaier/PhpstormProjects/complete-intro-to-react/js/State/reducers.js',
        );
        reactHotLoader.register(
          reducers,
          'reducers',
          '/Users/implaier/PhpstormProjects/complete-intro-to-react/js/State/reducers.js',
        );
        reactHotLoader.register(
          _default,
          'default',
          '/Users/implaier/PhpstormProjects/complete-intro-to-react/js/State/reducers.js',
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

      var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__['createStore'])(
        __WEBPACK_IMPORTED_MODULE_3__reducers__['a' /* default */],
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        Object(__WEBPACK_IMPORTED_MODULE_0_redux__['compose'])(
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

  /***/ './node_modules/react-redux/es/connect/mapDispatchToProps.js': /***/ function(
    module,
    __webpack_exports__,
    __webpack_require__,
  ) {
    'use strict';
    /* unused harmony export whenMapDispatchToPropsIsFunction */
    /* unused harmony export whenMapDispatchToPropsIsMissing */
    /* unused harmony export whenMapDispatchToPropsIsObject */
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(
      './node_modules/redux/es/index.js',
    );
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(
      './node_modules/react-redux/es/connect/wrapMapToProps.js',
    );

    function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
      return typeof mapDispatchToProps === 'function'
        ? Object(
            __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__['b' /* wrapMapToPropsFunc */],
          )(mapDispatchToProps, 'mapDispatchToProps')
        : undefined;
    }

    function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
      return !mapDispatchToProps
        ? Object(
            __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__[
              'a' /* wrapMapToPropsConstant */
            ],
          )(function(dispatch) {
            return { dispatch: dispatch };
          })
        : undefined;
    }

    function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
      return mapDispatchToProps && typeof mapDispatchToProps === 'object'
        ? Object(
            __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__[
              'a' /* wrapMapToPropsConstant */
            ],
          )(function(dispatch) {
            return Object(
              __WEBPACK_IMPORTED_MODULE_0_redux__['bindActionCreators'],
            )(mapDispatchToProps, dispatch);
          })
        : undefined;
    }

    /* harmony default export */ __webpack_exports__['a'] = [
      whenMapDispatchToPropsIsFunction,
      whenMapDispatchToPropsIsMissing,
      whenMapDispatchToPropsIsObject,
    ];

    /***/
  },

  /***/ './node_modules/redux-devtools-extension/index.js': /***/ function(
    module,
    exports,
    __webpack_require__,
  ) {
    'use strict';

    var compose = __webpack_require__('./node_modules/redux/es/index.js').compose;

    exports.__esModule = true;
    exports.composeWithDevTools =
      typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : function() {
            if (arguments.length === 0) return undefined;
            if (typeof arguments[0] === 'object') return compose;
            return compose.apply(null, arguments);
          };

    exports.devToolsEnhancer =
      typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__
        : function() {
            return function(noop) {
              return noop;
            };
          };

    /***/
  },

  /***/ './node_modules/redux/es/index.js': /***/ function(
    module,
    __webpack_exports__,
    __webpack_require__,
  ) {
    'use strict';
    Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
    /* WEBPACK VAR INJECTION */ (function(process) {
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(
        './node_modules/redux/es/createStore.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(
        './node_modules/redux/es/combineReducers.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(
        './node_modules/redux/es/bindActionCreators.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(
        './node_modules/redux/es/applyMiddleware.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(
        './node_modules/redux/es/compose.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(
        './node_modules/redux/es/utils/warning.js',
      );
      /* harmony reexport (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'createStore',
        function() {
          return __WEBPACK_IMPORTED_MODULE_0__createStore__['b'];
        },
      );
      /* harmony reexport (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'combineReducers',
        function() {
          return __WEBPACK_IMPORTED_MODULE_1__combineReducers__['a'];
        },
      );
      /* harmony reexport (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'bindActionCreators',
        function() {
          return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__['a'];
        },
      );
      /* harmony reexport (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'applyMiddleware',
        function() {
          return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__['a'];
        },
      );
      /* harmony reexport (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'compose',
        function() {
          return __WEBPACK_IMPORTED_MODULE_4__compose__['a'];
        },
      );

      /*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
      function isCrushed() {}

      if (
        process.env.NODE_ENV !== 'production' &&
        typeof isCrushed.name === 'string' &&
        isCrushed.name !== 'isCrushed'
      ) {
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_warning__['a' /* default */])(
          "You are currently using minified code outside of NODE_ENV === 'production'. " +
            'This means that you are running a slower development build of Redux. ' +
            'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' +
            'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' +
            'to ensure you have the correct code for your production build.',
        );
      }

      /* WEBPACK VAR INJECTION */
    }.call(
      __webpack_exports__,
      __webpack_require__('./node_modules/process/browser.js'),
    ));

    /***/
  },
});
//# sourceMappingURL=0.6d7802e2e75104dae2c6.hot-update.js.map
