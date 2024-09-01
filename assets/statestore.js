

!function(){
    
    let externalModule = ''
    window.define = function define(filename, importNames, script){
        const module = window.__modules[externalModule];
        if(!module[filename]){
            module[''] /* Entry */ = module[filename] = {
                moduleName: externalModule,
                execute: function(){
                    if(this.exports) return this.exports;
                    this.exports = {};
                    const currentModule = this.moduleName;
                    const args = importNames.slice(2).map((importedFile)=>{
                        const module = window.__modules[currentModule];
                        return module[importedFile].execute()
                    });

                    script(require, this.exports, ...args);
                    return this.exports;
                }
            }
        }
    }

    window.require = function require(filename){
        const paths = filename.replace(/\\/g,'/').replace(/\/\//g,'/').split('/');
        const module = window.__modules[paths[0]];
        if(!module){
            throw new Error(`NO SUCH MODULE FOUND. Requiring ${filename}`)
        }
        if(paths.length===1){
            return module[''].execute()
        }
        return module[filename.replace(paths[0],'')].execute()
    }
    window.setExternalModuleName = function setExternalModuleName(modulename){
        externalModule = modulename;
        if(!window.__modules){
            window.__modules = {}
        }
        const modules = window.__modules;
        if(!modules[modulename]){
            modules[modulename] = {}
        }
    }
    window.unsetExternalModuleName = function unsetExternalModuleName(){
        externalModule = ''
    }

}();


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};



setExternalModuleName('statestorejs');

define("global_store", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setStore = exports.createProvider = exports.getPorvider = void 0;
    exports._deleteProvider = _deleteProvider;
    exports._deleteStore = _deleteStore;
    exports._createStore = _createStore;
    exports._getStore = _getStore;
    exports._updateStore = _updateStore;
    exports.update = update;
    exports._subscribe = _subscribe;
    exports._unsubscribe = _unsubscribe;
    /** Global State Storage */
    var Store = new Map();
    /**
     * Gets a set storage provider
     * @param provider A name for the storage provider
     * @returns
     */
    var getPorvider = function (provider) { return Store.get(provider); };
    exports.getPorvider = getPorvider;
    /**
     * Creates a storage provider. A storage provider is a database for storing stateful data.
     * @param provider A name for the storage provider
     *
     */
    var createProvider = function (provider) { return !(0, exports.getPorvider)(provider) && Store.set(provider, {}); };
    exports.createProvider = createProvider;
    // No performer
    var noop = function () { };
    /**
     * Clears a storage provider
     * @param provider A name for the storage provider
     *
     */
    function _deleteProvider(provider) {
        Store.delete(provider);
    }
    /**
     * Removes a store from a storage provider
     * @param provider A name for the storage provider
     * @param storeId Store identifier.
     *
     */
    function _deleteStore(provider, storeId) {
        var branch = (0, exports.getPorvider)(provider);
        if (branch) {
            branch[storeId] = undefined;
        }
    }
    /**
     * Sets a store in a storage provider
     * @param provider Storage provider's name
     * @param storeId Store identifier. A unique string that is used to access a store from a storage provider.
     * @param store The data to be stored
     */
    function _createStore(provider, storeId, store) {
        var branch = (0, exports.getPorvider)(provider);
        if (!branch) {
            Store.set(provider, branch = {});
        }
        if (!branch[storeId]) {
            branch[storeId] = { value: store, listeners: { length: { action: noop, watch: [], actual: 0 } }, available: [] };
        }
    }
    exports.setStore = _createStore;
    // type StoreGetter<S> = (<F = ((store: S) => any) | null>(deriver: F) => F extends (store: S) => infer R ? R | null : S | null);
    /**
     * Gets a copy of a store's data from a storage provider. This function returns a copy of the store if no callback is provided.
     * If a callback is provided, then it returns the value returned by the callback. If no such store exists in the storage provider,
     * null is returned.
     * @param provider Storage provider's name
     * @param storeId  Store identifier. A unique string that is used to access a store from a storage provider.
     * @param cb A callback that receives a copy of the store as argument if the store exists. This callback has no effect if store does not exist.
     *
     */
    function _getStore(provider, storeId, cb) {
        var branch = (0, exports.getPorvider)(provider);
        if (!branch) {
            return null;
        }
        var store = branch[storeId];
        if (!store) {
            return null;
        }
        if (typeof cb === 'function') {
            return cb(__assign({}, store.value));
        }
        return __assign({}, store.value);
    }
    /**
     * Updates and trigger listners of a store data.
     * @param provider Storage provider's name
     * @param storeId  Store identifier.
     * @param data Update configuration object.
     *
     */
    function _updateStore(provider, storeId, data) {
        update(provider, storeId, data);
    }
    /**
     * Updates and trigger listners of a store data.
     * @param provider Storage provider's name
     * @param storeId  Store identifier.
     * @param data Update configuration object
     * @param ref An object. If provided, a copy of the store is set to the `ref.value`. It is not recommended to manually modify this value.
     *
     */
    function update(provider, storeId, data, ref) {
        var branch = (0, exports.getPorvider)(provider);
        if (!branch) {
            return;
        }
        var store = branch[storeId];
        if (!store) {
            return;
        }
        var actors = data.actors, newUpdates = data.store;
        if (!actors) {
            actors = [];
        }
        var subscribers = store.listeners;
        store.value = __assign(__assign({}, store.value), newUpdates);
        if (ref)
            ref.value = store.value;
        var storeCopy = __assign({}, store.value);
        var subscription = { watch: undefined };
        var watch = undefined;
        for (var subscriberId in subscribers) {
            subscription = subscribers[subscriberId];
            if (subscription) {
                watch = subscription.watch;
                if (!watch) {
                    // Trigger all listeners
                    subscription.action(storeCopy);
                }
                else {
                    // Trigger only those listeners set to respond to this changes
                    for (var i = 0, l = actors.length; i < l; i++) {
                        if (watch.includes(actors[i])) {
                            subscription.action(storeCopy);
                            break;
                        }
                    }
                }
            }
        }
    }
    /**
     * Subscribe to changes in a store's data or specific fields in the store.
     * **Make sure to `unsubscribe` when nomore needed**
     * @param provider Storage provider's name
     * @param storeId  Store identifier.
     * @param data Update configuration object
     *
     */
    function _subscribe(provider, storeId, data) {
        var branch = (0, exports.getPorvider)(provider);
        if (!branch) {
            return '';
        }
        var store = branch[storeId];
        if (!store) {
            return '';
        }
        var subscriptionId = store.available.pop();
        if (!subscriptionId) {
            subscriptionId = "".concat(store.listeners.length.actual++);
        }
        store.listeners[subscriptionId] = { watch: data.watch, action: data.action };
        return subscriptionId;
    }
    /**
     * Unsubscribe to changes in a store's data.
     * @param provider Storage provider's name
     * @param storeId  Store identifier.
     * @param subscriptionId The subscription ID returned when `subscribe` was called.
     *
     */
    function _unsubscribe(provider, storeId, subscriptionId) {
        var branch = (0, exports.getPorvider)(provider);
        if (!branch) {
            return;
        }
        var store = branch[storeId];
        if (!store) {
            return;
        }
        store.available.push(subscriptionId);
        store.listeners[subscriptionId] = undefined;
    }
});
define("context_store", ["require", "exports", "global_store"], function (require, exports, global_store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._unsubscribeToContext = void 0;
    exports._createContext = _createContext;
    exports._destroyContext = _destroyContext;
    exports._subscribeToContext = _subscribeToContext;
    exports._getContext = _getContext;
    exports._updateContext = _updateContext;
    // Context providers are not accessible to outsiders
    var provider = "private-".concat(Math.random());
    (0, global_store_1.createProvider)(provider);
    var ids = -99999999;
    var unusedIds = [];
    function getConetextId() {
        var id = unusedIds.pop();
        return id ? id : "".concat(ids++);
    }
    /**
     * Sets a store in a storage provider. A context is a store that is to be accessible to only the function that creates it and any other function
     * that is called within.
     * @param context The data to be stored
     * @example
     * function Card(){
     *   const [contextId, context] = createContext({ amount: 20, name: 'john', age: 24 });
     *   console.log(context.value.amount)
     *   // Make context accessible to some other function
     *   SomeOtherFunction(contextId)
     *   // or probably pass it to a nested child component
     *  return (
     *      <div>
     *          <Profile propsAccess={contextId} />
     *          <TransactionDetails propsAccess={contextId} />
     *      </div>
     *  )
     * }
     *
     */
    function _createContext(context) {
        var id = getConetextId();
        (0, global_store_1.setStore)(provider, id, context);
        return [id, { value: context }];
    }
    /**
     * Clears a context.
     * **Always clear contexts when not needed anymore.**
     * @param contextId Context identifier.
     *
     */
    function _destroyContext(contextId, context) {
        context.value = {};
        !unusedIds.includes(contextId) && unusedIds.push(contextId);
        (0, global_store_1._deleteStore)(provider, contextId);
    }
    /**
     * Subscribe to changes in a context or specific fields in the context object.
     * **Make sure to `unsubscribeToContext` when nomore needed**
     * @param contextId  Context identifier.
     * @param data Update configuration object
     *
     */
    function _subscribeToContext(contextId, data) {
        return (0, global_store_1._subscribe)(provider, contextId, data);
    }
    /**
     * Unsubscribe to changes in a context.
     * @param contextId Context identifier.
     * @param subscriptionId The subscription ID returned when `subscribeToContext` was called.
     *
     */
    var _unsubscribeToContext = function (contextId, subscriptionId) { return (0, global_store_1._unsubscribe)(provider, contextId, subscriptionId); };
    exports._unsubscribeToContext = _unsubscribeToContext;
    /**
     * This function returns a copy of the context if no callback is provided.
     * If a callback is provided, then it returns the value returned by the callback. If no such context exists in the storage provider,
     * null is returned.
     * @param contextId Context identifier.
     * @param cb A callback that receives a copy of the context as argument if the context exists. This callback has no effect if context does not exist.
     *
     */
    function _getContext(contextId, cb) {
        return (0, global_store_1._getStore)(provider, contextId, cb);
    }
    /**
     * Updates and trigger listners of a context.
     * @param contextId Context identifier.
     * @param context Provide the actual context to also update `context.value`.
     * @param data Update configuration object.
     */
    function _updateContext(contextId, context, data) {
        // Updating requires the store prop is set
        data.store = data.context;
        (0, global_store_1.update)(provider, contextId, data, context);
    }
});
define("react_env", ["require", "exports", "context_store", "global_store"], function (require, exports, context_store_1, global_store_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._configureForReact = void 0;
    exports._useStateContext = _useStateContext;
    exports._useStateStore = _useStateStore;
    exports._createComponent = _createComponent;
    var noop = function (p, d) { };
    var R = { useState: noop, useMemo: noop, useEffect: noop, memo: noop };
    var _configureForReact = function (react) { R = react; };
    exports._configureForReact = _configureForReact;
    function _useStateContext(contextId, watch) {
        var setState = R.useState({})[1];
        R.useEffect(function () {
            if (watching) {
                var subscriptionId_1 = (0, context_store_1._subscribeToContext)(contextId, { watch: watch, action: function () { return setState({}); } });
                return function () { return (0, context_store_1._unsubscribeToContext)(contextId, subscriptionId_1); };
            }
        }, []);
        var watching = !watch || watch.length > 0;
        return (0, context_store_1._getContext)(contextId);
    }
    function _useStateStore(provider, storeId, watch) {
        var setState = R.useState({})[1];
        R.useEffect(function () {
            if (watching) {
                var subscriptionId_2 = (0, global_store_2._subscribe)(provider, storeId, { watch: watch, action: function () { return setState({}); } });
                return function () { return (0, global_store_2._unsubscribe)(provider, storeId, subscriptionId_2); };
            }
        }, []);
        var watching = !watch || watch.length > 0;
        return (0, global_store_2._getStore)(provider, storeId);
    }
    function _createComponent(Component) {
        return R.memo(Component);
    }
});
define("index", ["require", "exports", "global_store", "context_store", "react_env"], function (require, exports, StateStore, ContextsStore, ReactStore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createComponent = exports.useStateStore = exports.useStateContext = exports.configureForReact = exports.destroyContext = exports.unsubscribeToContext = exports.subscribeToContext = exports.createContext = exports.updateContext = exports.getContext = exports.createStore = exports.deleteStore = exports.deleteProvider = exports.updateStore = exports.unsubscribe = exports.subscribe = exports.getStore = exports.getStorageProvider = void 0;
    StateStore = __importStar(StateStore);
    ContextsStore = __importStar(ContextsStore);
    ReactStore = __importStar(ReactStore);
    // Exporting at once `export const {/*...*/} = StateStore` is causing errors in final typescript output
    // Export each separately
    exports.getStorageProvider = StateStore.getPorvider;
    exports.getStore = StateStore._getStore;
    exports.subscribe = StateStore._subscribe;
    exports.unsubscribe = StateStore._unsubscribe;
    exports.updateStore = StateStore._updateStore;
    exports.deleteProvider = StateStore._deleteProvider;
    exports.deleteStore = StateStore._deleteStore;
    exports.createStore = StateStore._createStore;
    exports.getContext = ContextsStore._getContext;
    exports.updateContext = ContextsStore._updateContext;
    exports.createContext = ContextsStore._createContext;
    exports.subscribeToContext = ContextsStore._subscribeToContext;
    exports.unsubscribeToContext = ContextsStore._unsubscribeToContext;
    exports.destroyContext = ContextsStore._destroyContext;
    /** ----------------------For Usage In React----------------------- */
    exports.configureForReact = ReactStore._configureForReact;
    exports.useStateContext = ReactStore._useStateContext;
    exports.useStateStore = ReactStore._useStateStore;
    exports.createComponent = ReactStore._createComponent;
});

unsetExternalModuleName();

