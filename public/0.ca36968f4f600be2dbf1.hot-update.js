webpackHotUpdate(0, {
  /***/ './js/Components/App.jsx': /***/ function(
    module,
    __webpack_exports__,
    __webpack_require__,
  ) {
    'use strict';
    /* WEBPACK VAR INJECTION */ (function(module) {
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(
        './node_modules/react/index.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_react__,
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_hot_loader__ = __webpack_require__(
        './node_modules/react-hot-loader/index.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_hot_loader___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_1_react_hot_loader__,
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(
        './node_modules/react-redux/es/index.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(
        './node_modules/react-router-dom/es/index.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_json__ = __webpack_require__(
        './data.json',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_json___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_4__data_json__,
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__State_store__ = __webpack_require__(
        './js/State/store.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__State_store___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_5__State_store__,
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Details__ = __webpack_require__(
        './js/Components/Details.jsx',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Landing__ = __webpack_require__(
        './js/Components/Landing.jsx',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__NoMatch__ = __webpack_require__(
        './js/Components/NoMatch.jsx',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Search__ = __webpack_require__(
        './js/Components/Search.jsx',
      );
      var _extends =
        Object.assign ||
        function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };

      (function() {
        var enterModule = __webpack_require__('./node_modules/react-hot-loader/index.js')
          .enterModule;

        enterModule && enterModule(module);
      })();

      function selectShowById(props) {
        return __WEBPACK_IMPORTED_MODULE_4__data_json___default.a.shows.find(function(
          show,
        ) {
          return props.match.params.id === show.imdbID;
        });
      }

      var App = function App() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_redux__['a' /* Provider */],
          { store: __WEBPACK_IMPORTED_MODULE_5__State_store__['default'] },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'app' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_router_dom__['d' /* Switch */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_router_dom__['c' /* Route */],
                {
                  path: '/',
                  exact: true,
                  component: __WEBPACK_IMPORTED_MODULE_7__Landing__['a' /* default */],
                },
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_router_dom__['c' /* Route */],
                {
                  path: '/search',
                  component: function component(props) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_9__Search__['a' /* Search */],
                      _extends(
                        {
                          shows:
                            __WEBPACK_IMPORTED_MODULE_4__data_json___default.a.shows,
                        },
                        props,
                      ),
                    );
                  },
                },
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_router_dom__['c' /* Route */],
                {
                  path: '/details/:id',
                  component: function component(props) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_6__Details__['a' /* default */],
                      _extends({ show: selectShowById(props) }, props),
                    );
                  },
                },
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_router_dom__['c' /* Route */],
                { component: __WEBPACK_IMPORTED_MODULE_8__NoMatch__['a' /* default */] },
              ),
            ),
          ),
        );
      };

      var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_hot_loader__['hot'])(
        module,
      )(App);

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
          selectShowById,
          'selectShowById',
          '/Users/implaier/PhpstormProjects/complete-intro-to-react/js/Components/App.jsx',
        );
        reactHotLoader.register(
          App,
          'App',
          '/Users/implaier/PhpstormProjects/complete-intro-to-react/js/Components/App.jsx',
        );
        reactHotLoader.register(
          _default,
          'default',
          '/Users/implaier/PhpstormProjects/complete-intro-to-react/js/Components/App.jsx',
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

  /***/ './js/State/reducers.js': false,

  /***/ './js/State/store.js': /***/ function(module, __webpack_exports__) {
    'use strict';
    throw new Error(
      'Module build failed: Duplicate declaration "store"\n\n\u001b[0m \u001b[90m 13 | \u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 14 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 15 | \u001b[39m\u001b[36mconst\u001b[39m store \u001b[33m=\u001b[39m createStore(reducer\u001b[33m,\u001b[39m composeWithDevTools())\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 16 | \u001b[39m\n \u001b[90m 17 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m store\u001b[33m;\u001b[39m\n \u001b[90m 18 | \u001b[39m\u001b[0m\n',
    );

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
              __WEBPACK_IMPORTED_MODULE_0_redux__['a' /* bindActionCreators */],
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

  /***/ './node_modules/redux-devtools-extension/index.js': false,

  /***/ './node_modules/redux-thunk/lib/index.js': false,

  /***/ './node_modules/redux/es/applyMiddleware.js': /***/ function(
    module,
    __webpack_exports__,
    __webpack_require__,
  ) {
    'use strict';
    /* unused harmony export default */
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(
      './node_modules/redux/es/compose.js',
    );
    var _extends =
      Object.assign ||
      function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };

    /**
     * Creates a store enhancer that applies middleware to the dispatch method
     * of the Redux store. This is handy for a variety of tasks, such as expressing
     * asynchronous actions in a concise manner, or logging every action payload.
     *
     * See `redux-thunk` package as an example of the Redux middleware.
     *
     * Because middleware is potentially asynchronous, this should be the first
     * store enhancer in the composition chain.
     *
     * Note that each middleware will be given the `dispatch` and `getState` functions
     * as named arguments.
     *
     * @param {...Function} middlewares The middleware chain to be applied.
     * @returns {Function} A store enhancer applying the middleware.
     */
    function applyMiddleware() {
      for (
        var _len = arguments.length, middlewares = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        middlewares[_key] = arguments[_key];
      }

      return function(createStore) {
        return function(reducer, preloadedState, enhancer) {
          var store = createStore(reducer, preloadedState, enhancer);
          var _dispatch = store.dispatch;
          var chain = [];

          var middlewareAPI = {
            getState: store.getState,
            dispatch: function dispatch(action) {
              return _dispatch(action);
            },
          };
          chain = middlewares.map(function(middleware) {
            return middleware(middlewareAPI);
          });
          _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__['a' /* default */].apply(
            undefined,
            chain,
          )(store.dispatch);

          return _extends({}, store, {
            dispatch: _dispatch,
          });
        };
      };
    }

    /***/
  },

  /***/ './node_modules/redux/es/combineReducers.js': /***/ function(
    module,
    __webpack_exports__,
    __webpack_require__,
  ) {
    'use strict';
    /* WEBPACK VAR INJECTION */ (function(process) {
      /* unused harmony export default */
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(
        './node_modules/redux/es/createStore.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(
        './node_modules/lodash-es/isPlainObject.js',
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(
        './node_modules/redux/es/utils/warning.js',
      );

      function getUndefinedStateErrorMessage(key, action) {
        var actionType = action && action.type;
        var actionName =
          (actionType && '"' + actionType.toString() + '"') || 'an action';

        return (
          'Given action ' +
          actionName +
          ', reducer "' +
          key +
          '" returned undefined. ' +
          'To ignore an action, you must explicitly return the previous state. ' +
          'If you want this reducer to hold no value, you can return null instead of undefined.'
        );
      }

      function getUnexpectedStateShapeWarningMessage(
        inputState,
        reducers,
        action,
        unexpectedKeyCache,
      ) {
        var reducerKeys = Object.keys(reducers);
        var argumentName =
          action &&
          action.type ===
            __WEBPACK_IMPORTED_MODULE_0__createStore__['a' /* ActionTypes */].INIT
            ? 'preloadedState argument passed to createStore'
            : 'previous state received by the reducer';

        if (reducerKeys.length === 0) {
          return (
            'Store does not have a valid reducer. Make sure the argument passed ' +
            'to combineReducers is an object whose values are reducers.'
          );
        }

        if (
          !Object(
            __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__['a' /* default */],
          )(inputState)
        ) {
          return (
            'The ' +
            argumentName +
            ' has unexpected type of "' +
            {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] +
            '". Expected argument to be an object with the following ' +
            ('keys: "' + reducerKeys.join('", "') + '"')
          );
        }

        var unexpectedKeys = Object.keys(inputState).filter(function(key) {
          return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
        });

        unexpectedKeys.forEach(function(key) {
          unexpectedKeyCache[key] = true;
        });

        if (unexpectedKeys.length > 0) {
          return (
            'Unexpected ' +
            (unexpectedKeys.length > 1 ? 'keys' : 'key') +
            ' ' +
            ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') +
            'Expected to find one of the known reducer keys instead: ' +
            ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.')
          );
        }
      }

      function assertReducerShape(reducers) {
        Object.keys(reducers).forEach(function(key) {
          var reducer = reducers[key];
          var initialState = reducer(undefined, {
            type: __WEBPACK_IMPORTED_MODULE_0__createStore__['a' /* ActionTypes */].INIT,
          });

          if (typeof initialState === 'undefined') {
            throw new Error(
              'Reducer "' +
                key +
                '" returned undefined during initialization. ' +
                'If the state passed to the reducer is undefined, you must ' +
                'explicitly return the initial state. The initial state may ' +
                "not be undefined. If you don't want to set a value for this reducer, " +
                'you can use null instead of undefined.',
            );
          }

          var type =
            '@@redux/PROBE_UNKNOWN_ACTION_' +
            Math.random()
              .toString(36)
              .substring(7)
              .split('')
              .join('.');
          if (typeof reducer(undefined, { type: type }) === 'undefined') {
            throw new Error(
              'Reducer "' +
                key +
                '" returned undefined when probed with a random type. ' +
                ("Don't try to handle " +
                  __WEBPACK_IMPORTED_MODULE_0__createStore__['a' /* ActionTypes */]
                    .INIT +
                  ' or other actions in "redux/*" ') +
                'namespace. They are considered private. Instead, you must return the ' +
                'current state for any unknown actions, unless it is undefined, ' +
                'in which case you must return the initial state, regardless of the ' +
                'action type. The initial state may not be undefined, but can be null.',
            );
          }
        });
      }

      /**
       * Turns an object whose values are different reducer functions, into a single
       * reducer function. It will call every child reducer, and gather their results
       * into a single state object, whose keys correspond to the keys of the passed
       * reducer functions.
       *
       * @param {Object} reducers An object whose values correspond to different
       * reducer functions that need to be combined into one. One handy way to obtain
       * it is to use ES6 `import * as reducers` syntax. The reducers may never return
       * undefined for any action. Instead, they should return their initial state
       * if the state passed to them was undefined, and the current state for any
       * unrecognized action.
       *
       * @returns {Function} A reducer function that invokes every reducer inside the
       * passed object, and builds a state object with the same shape.
       */
      function combineReducers(reducers) {
        var reducerKeys = Object.keys(reducers);
        var finalReducers = {};
        for (var i = 0; i < reducerKeys.length; i++) {
          var key = reducerKeys[i];

          if (process.env.NODE_ENV !== 'production') {
            if (typeof reducers[key] === 'undefined') {
              Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__['a' /* default */])(
                'No reducer provided for key "' + key + '"',
              );
            }
          }

          if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
          }
        }
        var finalReducerKeys = Object.keys(finalReducers);

        var unexpectedKeyCache = void 0;
        if (process.env.NODE_ENV !== 'production') {
          unexpectedKeyCache = {};
        }

        var shapeAssertionError = void 0;
        try {
          assertReducerShape(finalReducers);
        } catch (e) {
          shapeAssertionError = e;
        }

        return function combination() {
          var state =
            arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var action = arguments[1];

          if (shapeAssertionError) {
            throw shapeAssertionError;
          }

          if (process.env.NODE_ENV !== 'production') {
            var warningMessage = getUnexpectedStateShapeWarningMessage(
              state,
              finalReducers,
              action,
              unexpectedKeyCache,
            );
            if (warningMessage) {
              Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__['a' /* default */])(
                warningMessage,
              );
            }
          }

          var hasChanged = false;
          var nextState = {};
          for (var _i = 0; _i < finalReducerKeys.length; _i++) {
            var _key = finalReducerKeys[_i];
            var reducer = finalReducers[_key];
            var previousStateForKey = state[_key];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === 'undefined') {
              var errorMessage = getUndefinedStateErrorMessage(_key, action);
              throw new Error(errorMessage);
            }
            nextState[_key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
          }
          return hasChanged ? nextState : state;
        };
      }
      /* WEBPACK VAR INJECTION */
    }.call(
      __webpack_exports__,
      __webpack_require__('./node_modules/process/browser.js'),
    ));

    /***/
  },

  /***/ './node_modules/redux/es/createStore.js': /***/ function(
    module,
    __webpack_exports__,
    __webpack_require__,
  ) {
    'use strict';
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'a',
      function() {
        return ActionTypes;
      },
    );
    /* unused harmony export default */
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(
      './node_modules/lodash-es/isPlainObject.js',
    );
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(
      './node_modules/symbol-observable/es/index.js',
    );

    /**
     * These are private action types reserved by Redux.
     * For any unknown actions, you must return the current state.
     * If the current state is undefined, you must return the initial state.
     * Do not reference these action types directly in your code.
     */
    var ActionTypes = {
      INIT: '@@redux/INIT',

      /**
       * Creates a Redux store that holds the state tree.
       * The only way to change the data in the store is to call `dispatch()` on it.
       *
       * There should only be a single store in your app. To specify how different
       * parts of the state tree respond to actions, you may combine several reducers
       * into a single reducer function by using `combineReducers`.
       *
       * @param {Function} reducer A function that returns the next state tree, given
       * the current state tree and the action to handle.
       *
       * @param {any} [preloadedState] The initial state. You may optionally specify it
       * to hydrate the state from the server in universal apps, or to restore a
       * previously serialized user session.
       * If you use `combineReducers` to produce the root reducer function, this must be
       * an object with the same shape as `combineReducers` keys.
       *
       * @param {Function} [enhancer] The store enhancer. You may optionally specify it
       * to enhance the store with third-party capabilities such as middleware,
       * time travel, persistence, etc. The only store enhancer that ships with Redux
       * is `applyMiddleware()`.
       *
       * @returns {Store} A Redux store that lets you read the state, dispatch actions
       * and subscribe to changes.
       */
    };
    function createStore(reducer, preloadedState, enhancer) {
      var _ref2;

      if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
      }

      if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
          throw new Error('Expected the enhancer to be a function.');
        }

        return enhancer(createStore)(reducer, preloadedState);
      }

      if (typeof reducer !== 'function') {
        throw new Error('Expected the reducer to be a function.');
      }

      var currentReducer = reducer;
      var currentState = preloadedState;
      var currentListeners = [];
      var nextListeners = currentListeners;
      var isDispatching = false;

      function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
          nextListeners = currentListeners.slice();
        }
      }

      /**
       * Reads the state tree managed by the store.
       *
       * @returns {any} The current state tree of your application.
       */
      function getState() {
        return currentState;
      }

      /**
       * Adds a change listener. It will be called any time an action is dispatched,
       * and some part of the state tree may potentially have changed. You may then
       * call `getState()` to read the current state tree inside the callback.
       *
       * You may call `dispatch()` from a change listener, with the following
       * caveats:
       *
       * 1. The subscriptions are snapshotted just before every `dispatch()` call.
       * If you subscribe or unsubscribe while the listeners are being invoked, this
       * will not have any effect on the `dispatch()` that is currently in progress.
       * However, the next `dispatch()` call, whether nested or not, will use a more
       * recent snapshot of the subscription list.
       *
       * 2. The listener should not expect to see all state changes, as the state
       * might have been updated multiple times during a nested `dispatch()` before
       * the listener is called. It is, however, guaranteed that all subscribers
       * registered before the `dispatch()` started will be called with the latest
       * state by the time it exits.
       *
       * @param {Function} listener A callback to be invoked on every dispatch.
       * @returns {Function} A function to remove this change listener.
       */
      function subscribe(listener) {
        if (typeof listener !== 'function') {
          throw new Error('Expected listener to be a function.');
        }

        var isSubscribed = true;

        ensureCanMutateNextListeners();
        nextListeners.push(listener);

        return function unsubscribe() {
          if (!isSubscribed) {
            return;
          }

          isSubscribed = false;

          ensureCanMutateNextListeners();
          var index = nextListeners.indexOf(listener);
          nextListeners.splice(index, 1);
        };
      }

      /**
       * Dispatches an action. It is the only way to trigger a state change.
       *
       * The `reducer` function, used to create the store, will be called with the
       * current state tree and the given `action`. Its return value will
       * be considered the **next** state of the tree, and the change listeners
       * will be notified.
       *
       * The base implementation only supports plain object actions. If you want to
       * dispatch a Promise, an Observable, a thunk, or something else, you need to
       * wrap your store creating function into the corresponding middleware. For
       * example, see the documentation for the `redux-thunk` package. Even the
       * middleware will eventually dispatch plain object actions using this method.
       *
       * @param {Object} action A plain object representing “what changed”. It is
       * a good idea to keep actions serializable so you can record and replay user
       * sessions, or use the time travelling `redux-devtools`. An action must have
       * a `type` property which may not be `undefined`. It is a good idea to use
       * string constants for action types.
       *
       * @returns {Object} For convenience, the same action object you dispatched.
       *
       * Note that, if you use a custom middleware, it may wrap `dispatch()` to
       * return something else (for example, a Promise you can await).
       */
      function dispatch(action) {
        if (
          !Object(
            __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__['a' /* default */],
          )(action)
        ) {
          throw new Error(
            'Actions must be plain objects. ' +
              'Use custom middleware for async actions.',
          );
        }

        if (typeof action.type === 'undefined') {
          throw new Error(
            'Actions may not have an undefined "type" property. ' +
              'Have you misspelled a constant?',
          );
        }

        if (isDispatching) {
          throw new Error('Reducers may not dispatch actions.');
        }

        try {
          isDispatching = true;
          currentState = currentReducer(currentState, action);
        } finally {
          isDispatching = false;
        }

        var listeners = (currentListeners = nextListeners);
        for (var i = 0; i < listeners.length; i++) {
          var listener = listeners[i];
          listener();
        }

        return action;
      }

      /**
       * Replaces the reducer currently used by the store to calculate the state.
       *
       * You might need this if your app implements code splitting and you want to
       * load some of the reducers dynamically. You might also need this if you
       * implement a hot reloading mechanism for Redux.
       *
       * @param {Function} nextReducer The reducer for the store to use instead.
       * @returns {void}
       */
      function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') {
          throw new Error('Expected the nextReducer to be a function.');
        }

        currentReducer = nextReducer;
        dispatch({ type: ActionTypes.INIT });
      }

      /**
       * Interoperability point for observable/reactive libraries.
       * @returns {observable} A minimal observable of state changes.
       * For more information, see the observable proposal:
       * https://github.com/tc39/proposal-observable
       */
      function observable() {
        var _ref;

        var outerSubscribe = subscribe;
        return (
          (_ref = {
            /**
             * The minimal observable subscription method.
             * @param {Object} observer Any object that can be used as an observer.
             * The observer object should have a `next` method.
             * @returns {subscription} An object with an `unsubscribe` method that can
             * be used to unsubscribe the observable from the store, and prevent further
             * emission of values from the observable.
             */
            subscribe: function subscribe(observer) {
              if (typeof observer !== 'object') {
                throw new TypeError('Expected the observer to be an object.');
              }

              function observeState() {
                if (observer.next) {
                  observer.next(getState());
                }
              }

              observeState();
              var unsubscribe = outerSubscribe(observeState);
              return { unsubscribe: unsubscribe };
            },
          }),
          (_ref[
            __WEBPACK_IMPORTED_MODULE_1_symbol_observable__['a' /* default */]
          ] = function() {
            return this;
          }),
          _ref
        );
      }

      // When a store is created, an "INIT" action is dispatched so that every
      // reducer returns their initial state. This effectively populates
      // the initial state tree.
      dispatch({ type: ActionTypes.INIT });

      return (
        (_ref2 = {
          dispatch: dispatch,
          subscribe: subscribe,
          getState: getState,
          replaceReducer: replaceReducer,
        }),
        (_ref2[
          __WEBPACK_IMPORTED_MODULE_1_symbol_observable__['a' /* default */]
        ] = observable),
        _ref2
      );
    }

    /***/
  },

  /***/ './node_modules/redux/es/index.js': /***/ function(
    module,
    __webpack_exports__,
    __webpack_require__,
  ) {
    'use strict';
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
      /* unused harmony reexport createStore */
      /* unused harmony reexport combineReducers */
      /* harmony reexport (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__['a'];
        },
      );
      /* unused harmony reexport applyMiddleware */
      /* unused harmony reexport compose */

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
//# sourceMappingURL=0.ca36968f4f600be2dbf1.hot-update.js.map
