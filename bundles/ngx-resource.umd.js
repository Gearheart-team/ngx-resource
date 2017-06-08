(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/http"), require("@angular/core"), require("rxjs/BehaviorSubject"), require("rxjs/Rx"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/http", "@angular/core", "rxjs/BehaviorSubject", "rxjs/Rx", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ngx-resource"] = factory(require("@angular/http"), require("@angular/core"), require("rxjs/BehaviorSubject"), require("rxjs/Rx"), require("@angular/common"));
	else
		root["ngx-resource"] = factory(root["@angular/http"], root["@angular/core"], root["rxjs/BehaviorSubject"], root["rxjs/Rx"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_19__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resource; });



var Resource = (function () {
    function Resource(http, injector) {
        this.http = http;
        this.injector = injector;
        this._url = null;
        this._path = null;
        this._headers = null;
        this._params = null;
        this._data = null;
        var model = this.initResultObject();
        Reflect.defineMetadata('resource', this, model.constructor);
    }
    /**
     * Get main url of the resource
     * @returns {string|Promise<string>}
     */
    Resource.prototype.getUrl = function (methodOptions) {
        return this._url || this._getUrl(methodOptions) || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].url || '';
    };
    /**
     * Set resource url
     * @param url
     */
    Resource.prototype.setUrl = function (url) {
        this._url = url;
    };
    /**
     * Get path of the resource
     * @returns {string|Promise<string>}
     */
    Resource.prototype.getPath = function (methodOptions) {
        return this._path || this._getPath(methodOptions) || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].path || '';
    };
    /**
     * Set resource path
     * @param path
     */
    Resource.prototype.setPath = function (path) {
        this._path = path;
    };
    /**
     * Get headers
     * @returns {any|Promise<any>}
     */
    Resource.prototype.getHeaders = function (methodOptions) {
        return this._headers || this._getHeaders(methodOptions) || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].headers || {};
    };
    /**
     * Set resource headers
     * @param headers
     */
    Resource.prototype.setHeaders = function (headers) {
        this._headers = headers;
    };
    /**
     * Get default params
     * @returns {any|Promise<any>|{}}
     */
    Resource.prototype.getParams = function (methodOptions) {
        return this._params || this._getParams(methodOptions) || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].params || {};
    };
    /**
     * Set default resource params
     * @param params
     */
    Resource.prototype.setParams = function (params) {
        this._params = params;
    };
    /**
     * Get default data
     * @returns {any|Promise<any>|{}}
     */
    Resource.prototype.getData = function (methodOptions) {
        return this._data || this._getData(methodOptions) || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].data || {};
    };
    /**
     * Set default resource params
     * @param data
     */
    Resource.prototype.setData = function (data) {
        this._data = data;
    };
    /**
     * That is called before executing request
     * @param req
     */
    Resource.prototype.requestInterceptor = function (req, methodOptions) {
        return req;
    };
    /**
     * Request observable interceptor
     * @param observable
     * @returns {Observable<any>}
     */
    Resource.prototype.responseInterceptor = function (observable, req, methodOptions) {
        return observable.map(function (res) { return res._body ? res.json() : null; });
    };
    Resource.prototype.removeTrailingSlash = function () {
        return true;
    };
    Resource.prototype.initResultObject = function () {
        return {};
    };
    Resource.prototype.map = function (item) {
        return item;
    };
    Resource.prototype.filter = function (item) {
        return true;
    };
    Resource.prototype.getResourceOptions = function () {
        return null;
    };
    Resource.prototype.createModel = function () {
        var ret = this.initResultObject();
        ret.$resource = this;
        return ret;
    };
    Resource.prototype._request = function (req, methodOptions) {
        if (methodOptions === void 0) { methodOptions = {}; }
        var requestObservable = this.http.request(req);
        // noinspection TypeScriptValidateTypes
        return methodOptions.responseInterceptor ?
            methodOptions.responseInterceptor.bind(this)(requestObservable, req, methodOptions) :
            this.responseInterceptor(requestObservable, req, methodOptions);
    };
    Resource.prototype._getUrl = function (methodOptions) {
        return null;
    };
    Resource.prototype._getPath = function (methodOptions) {
        return null;
    };
    Resource.prototype._getHeaders = function (methodOptions) {
        return null;
    };
    Resource.prototype._getParams = function (methodOptions) {
        return null;
    };
    Resource.prototype._getData = function (methodOptions) {
        return null;
    };
    return Resource;
}());

Resource._init = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](undefined);
Resource._storage = undefined;
Resource.init = __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].of(undefined);
Resource.instance = undefined;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResourceGlobalConfig__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StorageAction__ = __webpack_require__(6);
/* harmony export (immutable) */ __webpack_exports__["a"] = ResourceAction;
/* harmony export (immutable) */ __webpack_exports__["b"] = setDataToObject;
/* harmony export (immutable) */ __webpack_exports__["c"] = appendSearchParams;




function ResourceAction(methodOptions) {
    methodOptions = methodOptions || {};
    if (methodOptions.method === undefined) {
        methodOptions.method = __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get;
    }
    return function (target, propertyKey) {
        target[propertyKey] = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var data = args.length ? args[0] : null;
            var params = args.length > 1 ? args[1] : null;
            var callback = args.length > 2 ? args[2] : null;
            if (typeof data === 'function') {
                callback = data;
                data = null;
            }
            else if (typeof params === 'function') {
                callback = params;
                params = null;
            }
            var resourceOptions = this.getResourceOptions();
            var mockRequest = __WEBPACK_IMPORTED_MODULE_2__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].mockResponses && resourceOptions.mock !== false && methodOptions.mock !== false && (!!methodOptions.mockCollection || !!resourceOptions.mockCollection);
            var isGetRequest = methodOptions.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get;
            var ret = null;
            var map = methodOptions.map ? methodOptions.map.bind(this) : this.map;
            var filter = methodOptions.filter ? methodOptions.filter : this.filter;
            var initObject = methodOptions.initResultObject ?
                methodOptions.initResultObject.bind(this) : this.initResultObject;
            if (methodOptions.isLazy) {
                ret = {};
            }
            else {
                if (methodOptions.isArray) {
                    ret = [];
                }
                else {
                    if (data && data.$resource === this) {
                        // Setting data to ret
                        ret = data;
                        data = data.toJSON ? data.toJSON() : toJSON(data);
                    }
                    else {
                        ret = initObject.bind(this)();
                    }
                }
            }
            var mainDeferredSubscriber = null;
            var mainObservable = null;
            ret.$resolved = false;
            ret.$observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (subscriber) {
                mainDeferredSubscriber = subscriber;
            }).flatMap(function () { return mainObservable; });
            ret.$abortRequest = function () {
                ret.$resolved = true;
            };
            ret.$resource = this;
            function releaseMainDeferredSubscriber() {
                if (mainDeferredSubscriber) {
                    mainDeferredSubscriber.next();
                    mainDeferredSubscriber.complete();
                    mainDeferredSubscriber = null;
                }
            }
            if (!methodOptions.isLazy) {
                ret.$observable = ret.$observable.publish();
                ret.$observable.connect();
            }
            Promise.all([
                Promise.resolve(methodOptions.url || this.getUrl(methodOptions)),
                Promise.resolve(methodOptions.path || this.getPath(methodOptions)),
                Promise.resolve(methodOptions.headers || this.getHeaders(methodOptions)),
                Promise.resolve(methodOptions.params || this.getParams(methodOptions)),
                Promise.resolve(methodOptions.data || this.getData(methodOptions))
            ])
                .then(function (dataAll) {
                if (ret.$resolved) {
                    mainObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
                        observer.next(null);
                    });
                    releaseMainDeferredSubscriber();
                }
                var url = dataAll[0] + dataAll[1];
                var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"](dataAll[2]);
                var defPathParams = dataAll[3];
                var usedPathParams = {};
                var usedPathParamsValues = {};
                if (!Array.isArray(data) || params) {
                    if (!Array.isArray(data)) {
                        data = Object.assign({}, dataAll[4], data);
                    }
                    var pathParams = url.match(/{([^}]*)}/g) || [];
                    var _loop_1 = function (i) {
                        var pathParam = pathParams[i];
                        var pathKey = pathParam.substr(1, pathParam.length - 2);
                        var isMandatory = pathKey[0] === '!';
                        if (isMandatory) {
                            pathKey = pathKey.substr(1);
                        }
                        var isGetOnly = pathKey[0] === ':';
                        if (isGetOnly) {
                            pathKey = pathKey.substr(1);
                        }
                        var value = getValueForPath(pathKey, defPathParams, params || data, usedPathParams);
                        if (isGetOnly && !params) {
                            delete data[pathKey];
                        }
                        if (isNullOrUndefined(value)) {
                            if (isMandatory) {
                                var consoleMsg_1 = "Mandatory " + pathParam + " path parameter is missing";
                                mainObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
                                    observer.error(new Error(consoleMsg_1));
                                });
                                console.warn(consoleMsg_1);
                                releaseMainDeferredSubscriber();
                                return { value: void 0 };
                            }
                            url = url.substr(0, url.indexOf(pathParam));
                            return "break";
                        }
                        else {
                            usedPathParamsValues[pathKey] = value;
                        }
                        ;
                        // Replacing in the url
                        url = url.replace(pathParam, value);
                    };
                    for (var i = 0; i < pathParams.length; i++) {
                        var state_1 = _loop_1(i);
                        if (typeof state_1 === "object")
                            return state_1.value;
                        if (state_1 === "break")
                            break;
                    }
                }
                // Removing double slashed from final url
                url = url.replace(/\/\/+/g, '/');
                if (url.startsWith('http')) {
                    url = url.replace(':/', '://');
                }
                // Remove trailing slash
                if (typeof methodOptions.removeTrailingSlash === 'undefined') {
                    methodOptions.removeTrailingSlash = _this.removeTrailingSlash();
                }
                if (methodOptions.removeTrailingSlash) {
                    while (url[url.length - 1] === '/') {
                        url = url.substr(0, url.length - 1);
                    }
                }
                // Remove mapped params
                for (var key in defPathParams) {
                    if (defPathParams[key][0] === '@') {
                        delete defPathParams[key];
                    }
                }
                // Default search params or data
                var body = null;
                var searchParams;
                if (isGetRequest) {
                    // GET
                    searchParams = Object.assign({}, defPathParams, data);
                }
                else {
                    // NON GET
                    if (data) {
                        var _body = {};
                        if (methodOptions.rootNode) {
                            _body["" + methodOptions.rootNode] = data;
                        }
                        else {
                            _body = data;
                        }
                        body = JSON.stringify(_body);
                    }
                    searchParams = defPathParams;
                }
                // Setting search params
                var search = !!methodOptions.queryEncoder ? new __WEBPACK_IMPORTED_MODULE_0__angular_http__["URLSearchParams"]('', new methodOptions.queryEncoder()) : new __WEBPACK_IMPORTED_MODULE_0__angular_http__["URLSearchParams"]();
                if (!params) {
                    for (var key in searchParams) {
                        if (searchParams.hasOwnProperty(key) && !usedPathParams[key]) {
                            var value = searchParams[key];
                            appendSearchParams(search, key, value);
                        }
                    }
                }
                // Adding TS if needed
                var tsName = methodOptions.addTimestamp || resourceOptions.addTimestamp;
                if (tsName) {
                    if (tsName === true) {
                        tsName = 'ts';
                    }
                    search.append(tsName, '' + new Date().getTime());
                }
                // Removing Content-Type header if no body
                if (!body) {
                    headers.delete('content-type');
                }
                // Creating request options
                var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({
                    method: methodOptions.method,
                    headers: headers,
                    body: body,
                    url: url,
                    search: search,
                    withCredentials: methodOptions.withCredentials || resourceOptions.withCredentials
                });
                // Creating request object
                var req = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Request"](requestOptions);
                req = methodOptions.requestInterceptor ?
                    methodOptions.requestInterceptor(req, methodOptions) :
                    _this.requestInterceptor(req, methodOptions);
                if (!req) {
                    mainObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
                        observer.error(new Error('Request is null'));
                    });
                    console.warn('Request is null');
                    releaseMainDeferredSubscriber();
                    return;
                }
                var requestObservable;
                if (mockRequest) {
                    var mockCollection = !!methodOptions.mockCollection ? methodOptions.mockCollection : { collection: resourceOptions.mockCollection };
                    var resp = null;
                    if (typeof mockCollection === 'function') {
                        resp = mockCollection(propertyKey, usedPathParamsValues, JSON.parse(body), methodOptions.method);
                    }
                    else {
                        resp = getMockedResponse(mockCollection, usedPathParamsValues, JSON.parse(body), methodOptions.method);
                    }
                    resp = new FakeResponse(resp);
                    requestObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].from([resp]);
                    // noinspection TypeScriptValidateTypes
                    requestObservable = methodOptions.responseInterceptor ?
                        methodOptions.responseInterceptor.bind(_this)(requestObservable, req, methodOptions) :
                        _this.responseInterceptor(requestObservable, req, methodOptions);
                }
                else {
                    // Doing the request
                    requestObservable = _this._request(req, methodOptions);
                }
                if (methodOptions.isLazy) {
                    mainObservable = requestObservable;
                }
                else {
                    mainObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (subscriber) {
                        var reqSubscr = requestObservable.subscribe(function (resp) {
                            if (resp !== null) {
                                if (methodOptions.isArray) {
                                    // Expecting array
                                    if (!Array.isArray(resp)) {
                                        console.error('Returned data should be an array. Received', resp);
                                    }
                                    else {
                                        ret.push.apply(ret, resp
                                            .filter(filter)
                                            .map(map)
                                            .map(function (respItem) {
                                            respItem.$resource = _this;
                                            return setDataToObject(initObject.bind(respItem.$resource)(), respItem);
                                        }));
                                    }
                                }
                                else {
                                    // Expecting object
                                    if (Array.isArray(resp)) {
                                        console.error('Returned data should be an object. Received', resp);
                                    }
                                    else {
                                        if (filter(resp)) {
                                            setDataToObject(ret, map(resp));
                                        }
                                    }
                                }
                            }
                            ret.$resolved = true;
                            subscriber.next(ret);
                        }, function (err) { return subscriber.error(err); }, function () {
                            ret.$resolved = true;
                            subscriber.complete();
                            if (callback) {
                                callback(ret);
                            }
                        });
                        ret.$abortRequest = function () {
                            if (ret.$resolved) {
                                return;
                            }
                            reqSubscr.unsubscribe();
                            ret.$resolved = true;
                        };
                    });
                }
                if (!!_this.storage && !!methodOptions.storageAction) {
                    mainObservable = mainObservable.do(function (resp) {
                        methodOptions.storageAction.bind(_this)(_this.storage, resp);
                    });
                }
                releaseMainDeferredSubscriber();
            });
            return ret;
        };
        if (!!methodOptions.storageAction && methodOptions.storageAction === __WEBPACK_IMPORTED_MODULE_3__StorageAction__["a" /* StorageAction */].LOAD) {
            target.storageLoad = target[propertyKey];
        }
        ;
    };
}
function setDataToObject(ret, resp) {
    if (ret.$setData) {
        ret.$setData(resp);
    }
    else {
        Object.assign(ret, resp);
    }
    return ret;
}
function appendSearchParams(search, key, value) {
    /// Convert dates to ISO format string
    if (value instanceof Date) {
        search.append(key, value.toISOString());
        return;
    }
    if (typeof value === 'object') {
        switch (__WEBPACK_IMPORTED_MODULE_2__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].getParamsMappingType) {
            case __WEBPACK_IMPORTED_MODULE_2__ResourceGlobalConfig__["a" /* TGetParamsMappingType */].Plain:
                if (Array.isArray(value)) {
                    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                        var arr_value = value_1[_i];
                        search.append(key, arr_value);
                    }
                }
                else {
                    if (value && typeof value === 'object') {
                        /// Convert dates to ISO format string
                        if (value instanceof Date) {
                            value = value.toISOString();
                        }
                        else {
                            value = JSON.stringify(value);
                        }
                    }
                    search.append(key, value);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__ResourceGlobalConfig__["a" /* TGetParamsMappingType */].Bracket:
                /// Convert object and arrays to query params
                for (var k in value) {
                    if (value.hasOwnProperty(k)) {
                        appendSearchParams(search, key + '[' + k + ']', value[k]);
                    }
                }
                break;
        }
        return;
    }
    search.append(key, value);
}
function getValueForPath(key, params, data, usedPathParams) {
    if (!isNullOrUndefined(data[key]) && typeof data[key] !== 'object') {
        usedPathParams[key] = true;
        return data[key];
    }
    if (isNullOrUndefined(params[key])) {
        return null;
    }
    if (params[key][0] === '@') {
        return getValueForPath(params[key].substr(1), params, data, usedPathParams);
    }
    usedPathParams[key] = true;
    return params[key];
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function toJSON(obj) {
    var retObj = {};
    for (var propName in obj) {
        if (!(obj[propName] instanceof Function) && !(propName.charAt(0) === '$')) {
            retObj[propName] = obj[propName];
        }
    }
    return retObj;
}
var FakeResponse = (function () {
    function FakeResponse(resp) {
        var _this = this;
        this.json = function () { return _this._resp; };
        this._resp = resp;
    }
    Object.defineProperty(FakeResponse.prototype, "_body", {
        get: function () {
            return JSON.stringify(this._resp);
        },
        enumerable: true,
        configurable: true
    });
    return FakeResponse;
}());
function getMockedResponse(collection, params, data, requestMethod) {
    if (requestMethod === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get) {
        if (Object.keys(params).length === 0) {
            return collection.collection;
        }
        else {
            if (!collection.lookupParams || Object.keys(collection.lookupParams).length === 0) {
                var result = collection.collection;
                var _loop_2 = function (key) {
                    if (params.hasOwnProperty(key)) {
                        result = result.filter(function (item) { return item[key] === params[key]; });
                    }
                };
                for (var key in params) {
                    _loop_2(key);
                }
                return !!result.length ? result[0] : null;
            }
            else {
                return collection.collection.filter(function (itm) {
                    var result = true;
                    for (var key in collection.lookupParams) {
                        if (collection.lookupParams.hasOwnProperty(key)) {
                            result = result && params[key] === itm[collection.lookupParams[key]];
                        }
                    }
                    return result;
                });
            }
        }
    }
    else if (requestMethod === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Post) {
        collection.collection.push(data);
        return data;
    }
    else if (requestMethod === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Put || requestMethod === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Patch) {
        var result = collection.collection.find(function (item) {
            for (var key in params) {
                if (item[key] !== params[key]) {
                    return false;
                }
            }
            return true;
        });
        if (!!result) {
            Object.assign(result, data);
            return result;
        }
    }
    else if (requestMethod === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Delete) {
        var resultIdx = collection.collection.findIndex(function (item) {
            for (var key in params) {
                if (item[key] !== params[key]) {
                    return false;
                }
            }
            return true;
        });
        collection.collection.splice(resultIdx, 1);
    }
    return null;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TGetParamsMappingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResourceGlobalConfig; });
var TGetParamsMappingType;
(function (TGetParamsMappingType) {
    TGetParamsMappingType[TGetParamsMappingType["Plain"] = 0] = "Plain";
    TGetParamsMappingType[TGetParamsMappingType["Bracket"] = 1] = "Bracket";
})(TGetParamsMappingType || (TGetParamsMappingType = {}));
var ResourceGlobalConfig = (function () {
    function ResourceGlobalConfig() {
    }
    return ResourceGlobalConfig;
}());

ResourceGlobalConfig.url = null;
ResourceGlobalConfig.path = null;
ResourceGlobalConfig.headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};
ResourceGlobalConfig.params = null;
ResourceGlobalConfig.data = null;
ResourceGlobalConfig.getParamsMappingType = TGetParamsMappingType.Plain;
ResourceGlobalConfig.mockResponses = false;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceProviders; });


var ResourceProviders = (function () {
    function ResourceProviders() {
    }
    ResourceProviders.add = function (resource, subSet) {
        if (subSet === void 0) { subSet = null; }
        if (!subSet) {
            subSet = this.mainProvidersName;
        }
        if (!this.providers[subSet]) {
            this.providers[subSet] = [];
        }
        var deps = Reflect.getMetadata('design:paramtypes', resource);
        if (!deps || deps.length === 0) {
            deps = [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]];
        }
        this.providers[subSet].push({
            provide: resource,
            useFactory: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return new (resource.bind.apply(resource, [void 0].concat(args)))();
            },
            deps: deps
        });
    };
    ResourceProviders.get = function (subSet) {
        if (subSet === void 0) { subSet = null; }
        if (!subSet) {
            subSet = this.mainProvidersName;
        }
        return this.providers[subSet] || [];
    };
    return ResourceProviders;
}());

ResourceProviders.mainProvidersName = '__mainProviders';
ResourceProviders.providers = {
    __mainProviders: []
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceStorage; });

var ResourceStorage = (function () {
    function ResourceStorage(resource, params) {
        var _this = this;
        this.resource = resource;
        this.queryParams = {};
        this._iterationPointer = 0;
        this.loadImmediately = true;
        this.resultData = [];
        this.updateParams(params);
        this.result = Object.assign(this.resultData, { $load: this.load.bind(this), $resolved: false });
        /*this.result.next = (): IteratorResult<any> => {
          if (this._iterationPointer < this.resultData.length) {
              return {
                done: false,
                value: this.resultData[this._iterationPointer++]
              };
            } else {
              return {
                done: true,
                value: null
              };
            }
        };
    
        this.result[Symbol.iterator] = () => {
          return this.result;
        };*/
        this._resultSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](this.result);
        this.result.$observable = this._resultSubject.asObservable();
        resource.init.subscribe(function () {
            _this.resource.instance.storage = _this;
            if (_this.loadImmediately) {
                _this.load();
            }
            _this.result.$resource = _this.resource.instance;
        });
    }
    ResourceStorage.prototype.updateParams = function (params) {
        if (params === void 0) { params = {}; }
        this.queryParams = params.queryParams || {};
        this.loadImmediately = params.loadImmediately === false ? false : true;
    };
    ResourceStorage.prototype.load = function (args) {
        var qp = !!args ? args : this.queryParams;
        var action = this.resource.instance.storageLoad;
        if (!!action) {
            action.bind(this.resource.instance)(qp);
        }
        else {
            throw "Storage LOAD action is not defined";
        }
    };
    ResourceStorage.prototype.forceRefresh = function () {
        this.result = Object.assign([], this.result);
        Object.assign(this.result, this.resultData);
        this.result.$resolved = true;
        this._iterationPointer = 0;
        this._resultSubject.next(this.result);
    };
    return ResourceStorage;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageAction; });
var StorageAction = {
    LOAD: function (storage, resp) {
        storage.resultData = resp.filter(function (item) { return !!item; });
        storage.forceRefresh();
    },
    ADD: function (storage, resp) {
        storage.resultData.push(resp);
        storage.forceRefresh();
    },
    UPDATE: function (storage, resp) {
        var primaryKey = resp.$primaryKey || 'id';
        var idx = storage.resultData.findIndex(function (item) { return item[primaryKey] === resp[primaryKey]; });
        if (idx > -1) {
            storage.resultData[idx] = resp;
            storage.forceRefresh();
        }
    },
    REMOVE: function (storage, resp) {
        var primaryKey = resp.$primaryKey || 'id';
        var idx = storage.resultData.findIndex(function (item) { return item[primaryKey] === resp[primaryKey]; });
        if (idx > -1) {
            storage.resultData.splice(idx, 1);
            storage.forceRefresh();
        }
    },
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Resource__ = __webpack_require__(1);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__src_Resource__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_ResourceAction__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__src_ResourceAction__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__src_ResourceAction__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__src_ResourceAction__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_ResourceCRUD__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__src_ResourceCRUD__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_ResourceCRUDBase__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__src_ResourceCRUDBase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_ResourceModel__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__src_ResourceModel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_ResourceParams__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__src_ResourceParams__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_ResourceStorage__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_11__src_ResourceStorage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_SelectStorage__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_12__src_SelectStorage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_StorageAction__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_13__src_StorageAction__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_fields__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_14__src_fields__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ResourceModule = ResourceModule_1 = (function () {
    function ResourceModule(_injector) {
        var _this = this;
        this._injector = _injector;
        // Create singletones for all resources
        var providers = __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].providers[__WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].mainProvidersName];
        providers.forEach(function (provider) {
            var ResourceType = provider.provide;
            var resourceInstance = _this._injector.get(ResourceType);
            ResourceType.instance = resourceInstance;
            ResourceType._init.next(resourceInstance);
        });
    }
    ResourceModule.forRoot = function () {
        return {
            ngModule: ResourceModule_1,
            providers: __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].providers[__WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].mainProvidersName]
        };
    };
    ResourceModule.forChild = function (subSet) {
        return {
            ngModule: ResourceModule_1,
            providers: __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].providers[subSet] ? __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].providers[subSet] : []
        };
    };
    return ResourceModule;
}());
ResourceModule = ResourceModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
], ResourceModule);

var ResourceModule_1;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(10);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceModule", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceAction", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setDataToObject", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "appendSearchParams", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceCRUD", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceCRUDBase", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TGetParamsMappingType", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceGlobalConfig", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceModel", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceParams", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceProviders", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceStorage", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectStorage", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StorageAction", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ForeignKey", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["p"]; });



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Resource__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResourceAction__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceCRUD; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResourceCRUD = (function (_super) {
    __extends(ResourceCRUD, _super);
    function ResourceCRUD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Alias to save
    ResourceCRUD.prototype.create = function (data, callback) {
        return this.save(data, callback);
    };
    return ResourceCRUD;
}(__WEBPACK_IMPORTED_MODULE_1__Resource__["a" /* Resource */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        isArray: true
    }),
    __metadata("design:type", Function)
], ResourceCRUD.prototype, "query", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        path: '/{!id}'
    }),
    __metadata("design:type", Function)
], ResourceCRUD.prototype, "get", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Post
    }),
    __metadata("design:type", Function)
], ResourceCRUD.prototype, "save", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Put,
        path: '/{!id}'
    }),
    __metadata("design:type", Function)
], ResourceCRUD.prototype, "update", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Delete,
        path: '/{!id}'
    }),
    __metadata("design:type", Function)
], ResourceCRUD.prototype, "remove", void 0);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Resource__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResourceAction__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceCRUDBase; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResourceCRUDBase = (function (_super) {
    __extends(ResourceCRUDBase, _super);
    function ResourceCRUDBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Alias to save
    ResourceCRUDBase.prototype.create = function (data, callback) {
        return this.save(data, callback);
    };
    return ResourceCRUDBase;
}(__WEBPACK_IMPORTED_MODULE_1__Resource__["a" /* Resource */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        isArray: true
    }),
    __metadata("design:type", Function)
], ResourceCRUDBase.prototype, "query", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])(),
    __metadata("design:type", Function)
], ResourceCRUDBase.prototype, "get", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Post
    }),
    __metadata("design:type", Function)
], ResourceCRUDBase.prototype, "save", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Put
    }),
    __metadata("design:type", Function)
], ResourceCRUDBase.prototype, "update", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Delete
    }),
    __metadata("design:type", Function)
], ResourceCRUDBase.prototype, "remove", void 0);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceModel; });
var ResourceModel = (function () {
    function ResourceModel() {
        this.$cachedRelated = {};
        this.$primaryKey = 'id';
        this.$resource = Reflect.getMetadata('resource', this.constructor);
    }
    ResourceModel.create = function (data, commit) {
        if (data === void 0) { data = {}; }
        if (commit === void 0) { commit = true; }
        console.error('Model static create is not available anymore. Please use new YourModel() instead');
    };
    ResourceModel.prototype.$setData = function (data) {
        Object.assign(this, data);
        return this;
    };
    ResourceModel.prototype.$save = function () {
        if (this.isNew()) {
            return this.$create();
        }
        else {
            return this.$update();
        }
    };
    ResourceModel.prototype.$create = function () {
        return this.$resource_method('save');
    };
    ResourceModel.prototype.$update = function () {
        return this.$resource_method('update');
    };
    ResourceModel.prototype.$remove = function () {
        return this.$resource_method('remove');
    };
    ResourceModel.prototype.toJSON = function () {
        var retObj = {};
        for (var propName in this) {
            if (!(this[propName] instanceof Function) && !(propName.charAt(0) === '$')) {
                retObj[propName] = this[propName];
            }
        }
        return retObj;
    };
    ResourceModel.prototype.isNew = function () {
        return !this[this.$primaryKey];
    };
    ResourceModel.prototype.$resource_method = function (methodName) {
        if (!this.$resource) {
            console.error("Your Resource is not set. Please use resource.createModel() method to create model.");
            return this;
        }
        if (!this.$resource[methodName]) {
            console.error("Your Resource has no implemented " + methodName + " method.");
            return this;
        }
        this.$resource[methodName](this);
        return this;
    };
    return ResourceModel;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ResourceProviders__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResourceStorage__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = ResourceParams;


function ResourceParams(params) {
    if (params === void 0) { params = {}; }
    return function (target) {
        target.init = target._init.asObservable().filter(function (instance) { return !!instance; });
        target.getStorage = function (storageParams) {
            if (!!target._storage) {
                target._storage.updateParams(storageParams);
                return target._storage;
            }
            else {
                return new __WEBPACK_IMPORTED_MODULE_1__ResourceStorage__["a" /* ResourceStorage */](target, storageParams);
            }
        };
        target.prototype.getResourceOptions = function () {
            return params;
        };
        if (params.add2Provides !== false) {
            __WEBPACK_IMPORTED_MODULE_0__ResourceProviders__["a" /* ResourceProviders */].add(target, params.providersSubSet);
        }
        if (typeof params.removeTrailingSlash !== 'undefined') {
            target.prototype.removeTrailingSlash = function () {
                return !!params.removeTrailingSlash;
            };
        }
        if (params.url) {
            target.prototype._getUrl = function () {
                return params.url;
            };
        }
        if (params.path) {
            target.prototype._getPath = function () {
                return params.path;
            };
        }
        if (params.headers) {
            target.prototype._getHeaders = function () {
                return params.headers;
            };
        }
        if (params.params) {
            target.prototype._getParams = function () {
                return params.params;
            };
        }
        if (params.data) {
            target.prototype._getData = function () {
                return params.data;
            };
        }
    };
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SelectStorage;
function SelectStorage(resource, params) {
    return function (target, propertyKey) {
        var storage = resource.getStorage(params);
        storage._resultSubject.subscribe(function (result) {
            target[propertyKey] = result;
        });
    };
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ForeignKey;
function ForeignKey(params) {
    params.resourceGetAction = !!params.resourceGetAction ? params.resourceGetAction : 'get';
    return function (target, propertyKey) {
        function getForeignFromStorage(id, storage) {
            var foreignModel = storage.resultData.find(function (item) { return item[item.$primaryKey] === id; });
            if (!!foreignModel) {
                return foreignModel;
            }
        }
        function getForeignFromResource(id, resource) {
            var action = resource[params.resourceGetAction];
            if (!!action) {
                var queryParams = {};
                queryParams[(new params.target()).$primaryKey] = id;
                return action.bind(resource)(queryParams);
            }
            ;
        }
        Object.defineProperty(target, propertyKey, {
            get: function () {
                var foreignId = this[params.keyField];
                var foreignModel;
                if (foreignId) {
                    // check cached
                    if (this.$cachedRelated[propertyKey] && this.$cachedRelated[propertyKey].id === foreignId) {
                        return this.$cachedRelated[propertyKey].data;
                    }
                    // try to get from storage or from resource
                    var foreignResource = Reflect.getMetadata('resource', params.target);
                    if (!!foreignResource && !!foreignResource.storage) {
                        foreignModel = getForeignFromStorage(foreignId, foreignResource.storage);
                        if (!foreignModel) {
                            foreignModel = getForeignFromResource(foreignId, foreignResource);
                        }
                    }
                    else if (!!foreignResource) {
                        foreignModel = getForeignFromResource(foreignId, foreignResource);
                    }
                    ;
                    //cache it and return
                    if (!!foreignModel) {
                        this.$cachedRelated[propertyKey] = { id: foreignId, data: foreignModel };
                        return foreignModel;
                    }
                }
            }
        });
    };
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ForeignKey__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ForeignKey__["a"]; });



/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZDYyYjBhYzlmNWMxN2E2YmQwNyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VHbG9iYWxDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlUHJvdmlkZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZVN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JhZ2VBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9SeFwiIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL25neC1yZXNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VDUlVELnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUNSVURCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZVBhcmFtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VsZWN0U3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRzL0ZvcmVpZ25LZXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FB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QUFFLFlBQVksRUFBQyxDQUFDO3dCQUN2RSxNQUFNLENBQUMsWUFBWSxDQUFDO29CQUN0QixDQUFDO2dCQUVILENBQUM7WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7OztBQzFEeUM7Ozs7Ozs7QUNBMUMsZ0QiLCJmaWxlIjoibmd4LXJlc291cmNlLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwicnhqcy9CZWhhdmlvclN1YmplY3RcIiksIHJlcXVpcmUoXCJyeGpzL1J4XCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkBhbmd1bGFyL2h0dHBcIiwgXCJAYW5ndWxhci9jb3JlXCIsIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIiwgXCJyeGpzL1J4XCIsIFwiQGFuZ3VsYXIvY29tbW9uXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5neC1yZXNvdXJjZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwicnhqcy9CZWhhdmlvclN1YmplY3RcIiksIHJlcXVpcmUoXCJyeGpzL1J4XCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZ3gtcmVzb3VyY2VcIl0gPSBmYWN0b3J5KHJvb3RbXCJAYW5ndWxhci9odHRwXCJdLCByb290W1wiQGFuZ3VsYXIvY29yZVwiXSwgcm9vdFtcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCJdLCByb290W1wicnhqcy9SeFwiXSwgcm9vdFtcIkBhbmd1bGFyL2NvbW1vblwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmQ2MmIwYWM5ZjVjMTdhNmJkMDciLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEh0dHAsIFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBSZXNvdXJjZUdsb2JhbENvbmZpZyB9IGZyb20gJy4vUmVzb3VyY2VHbG9iYWxDb25maWcnO1xuaW1wb3J0IHtSZXNvdXJjZVBhcmFtc0Jhc2UsIFJlc291cmNlUmVzdWx0fSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VBY3Rpb25CYXNlIH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlTW9kZWwgfSBmcm9tICcuL1Jlc291cmNlTW9kZWwnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xuaW1wb3J0IHtSZXNvdXJjZVN0b3JhZ2V9IGZyb20gXCIuL1Jlc291cmNlU3RvcmFnZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHN0YXRpYyBfaW5pdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih1bmRlZmluZWQpO1xuXG4gIHByb3RlY3RlZCBzdGF0aWMgX3N0b3JhZ2U6IFJlc291cmNlU3RvcmFnZSA9IHVuZGVmaW5lZDtcblxuICBzdGF0aWMgaW5pdDogT2JzZXJ2YWJsZTxhbnk+ID0gT2JzZXJ2YWJsZS5vZih1bmRlZmluZWQpO1xuICBzdGF0aWMgaW5zdGFuY2U6IFJlc291cmNlID0gdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgX3VybDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBfcGF0aDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBfaGVhZGVyczogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfcGFyYW1zOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9kYXRhOiBhbnkgPSBudWxsO1xuXG4gIHN0b3JhZ2VMb2FkOiAoLi4uYXJnczogYW55W10pID0+IFJlc291cmNlUmVzdWx0PGFueT47XG4gIHN0b3JhZ2U6IFJlc291cmNlU3RvcmFnZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cDogSHR0cCwgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGxldCBtb2RlbCA9IHRoaXMuaW5pdFJlc3VsdE9iamVjdCgpO1xuICAgICg8YW55PlJlZmxlY3QpLmRlZmluZU1ldGFkYXRhKCdyZXNvdXJjZScsIHRoaXMsIG1vZGVsLmNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbWFpbiB1cmwgb2YgdGhlIHJlc291cmNlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd8UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgZ2V0VXJsKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl91cmwgfHwgdGhpcy5fZ2V0VXJsKG1ldGhvZE9wdGlvbnMpIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLnVybCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcmVzb3VyY2UgdXJsXG4gICAqIEBwYXJhbSB1cmxcbiAgICovXG4gIHNldFVybCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMuX3VybCA9IHVybDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGF0aCBvZiB0aGUgcmVzb3VyY2VcbiAgICogQHJldHVybnMge3N0cmluZ3xQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBnZXRQYXRoKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9wYXRoIHx8IHRoaXMuX2dldFBhdGgobWV0aG9kT3B0aW9ucykgfHwgUmVzb3VyY2VHbG9iYWxDb25maWcucGF0aCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcmVzb3VyY2UgcGF0aFxuICAgKiBAcGFyYW0gcGF0aFxuICAgKi9cbiAgc2V0UGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaGVhZGVyc1xuICAgKiBAcmV0dXJucyB7YW55fFByb21pc2U8YW55Pn1cbiAgICovXG4gIGdldEhlYWRlcnMobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IGFueSB8IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcnMgfHwgdGhpcy5fZ2V0SGVhZGVycyhtZXRob2RPcHRpb25zKSB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy5oZWFkZXJzIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCByZXNvdXJjZSBoZWFkZXJzXG4gICAqIEBwYXJhbSBoZWFkZXJzXG4gICAqL1xuICBzZXRIZWFkZXJzKGhlYWRlcnM6IGFueSkge1xuICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZWZhdWx0IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7YW55fFByb21pc2U8YW55Pnx7fX1cbiAgICovXG4gIGdldFBhcmFtcyhtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1zIHx8IHRoaXMuX2dldFBhcmFtcyhtZXRob2RPcHRpb25zKSB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy5wYXJhbXMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgcmVzb3VyY2UgcGFyYW1zXG4gICAqIEBwYXJhbSBwYXJhbXNcbiAgICovXG4gIHNldFBhcmFtcyhwYXJhbXM6IGFueSkge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGVmYXVsdCBkYXRhXG4gICAqIEByZXR1cm5zIHthbnl8UHJvbWlzZTxhbnk+fHt9fVxuICAgKi9cbiAgZ2V0RGF0YShtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YSB8fCB0aGlzLl9nZXREYXRhKG1ldGhvZE9wdGlvbnMpIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLmRhdGEgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgcmVzb3VyY2UgcGFyYW1zXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqL1xuICBzZXREYXRhKGRhdGE6IGFueSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICB9XG5cblxuICAvKipcbiAgICogVGhhdCBpcyBjYWxsZWQgYmVmb3JlIGV4ZWN1dGluZyByZXF1ZXN0XG4gICAqIEBwYXJhbSByZXFcbiAgICovXG4gIHJlcXVlc3RJbnRlcmNlcHRvcihyZXE6IFJlcXVlc3QsIG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBSZXF1ZXN0IHtcbiAgICByZXR1cm4gcmVxO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3Qgb2JzZXJ2YWJsZSBpbnRlcmNlcHRvclxuICAgKiBAcGFyYW0gb2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgcmVzcG9uc2VJbnRlcmNlcHRvcihvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4sIHJlcTogUmVxdWVzdCwgbWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG9ic2VydmFibGUubWFwKHJlcyA9PiByZXMuX2JvZHkgPyByZXMuanNvbigpIDogbnVsbCk7XG4gIH1cblxuICByZW1vdmVUcmFpbGluZ1NsYXNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaW5pdFJlc3VsdE9iamVjdCgpOiBhbnkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIG1hcChpdGVtOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgZmlsdGVyKGl0ZW06IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0UmVzb3VyY2VPcHRpb25zKCk6IFJlc291cmNlUGFyYW1zQmFzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuXG4gIGNyZWF0ZU1vZGVsKCk6IFJlc291cmNlTW9kZWw8YW55PiB7XG4gICAgbGV0IHJldCA9IHRoaXMuaW5pdFJlc3VsdE9iamVjdCgpO1xuICAgIHJldC4kcmVzb3VyY2UgPSB0aGlzO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuXG5cblxuICBwcm90ZWN0ZWQgX3JlcXVlc3QocmVxOiBSZXF1ZXN0LCBtZXRob2RPcHRpb25zOiBSZXNvdXJjZUFjdGlvbkJhc2UgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICBsZXQgcmVxdWVzdE9ic2VydmFibGUgPSB0aGlzLmh0dHAucmVxdWVzdChyZXEpO1xuXG4gICAgLy8gbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRWYWxpZGF0ZVR5cGVzXG4gICAgcmV0dXJuIG1ldGhvZE9wdGlvbnMucmVzcG9uc2VJbnRlcmNlcHRvciA/XG4gICAgICBtZXRob2RPcHRpb25zLnJlc3BvbnNlSW50ZXJjZXB0b3IuYmluZCh0aGlzKShyZXF1ZXN0T2JzZXJ2YWJsZSwgcmVxLCBtZXRob2RPcHRpb25zKSA6XG4gICAgICB0aGlzLnJlc3BvbnNlSW50ZXJjZXB0b3IocmVxdWVzdE9ic2VydmFibGUsIHJlcSwgbWV0aG9kT3B0aW9ucyk7XG5cbiAgfVxuXG5cbiAgcHJpdmF0ZSBfZ2V0VXJsKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBzdHJpbmd8UHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhdGgobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IHN0cmluZ3xQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0SGVhZGVycyhtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhcmFtcyhtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldERhdGEobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IGFueSB8IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2UudHMiLCJpbXBvcnQgeyBIZWFkZXJzLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtcbiAgUmVzb3VyY2VBY3Rpb25CYXNlLCBSZXNvdXJjZVJlc3BvbnNlRmlsdGVyLCBSZXNvdXJjZVJlc3BvbnNlSW5pdFJlc3VsdCwgUmVzb3VyY2VSZXNwb25zZU1hcCxcbiAgUmVzb3VyY2VSZXN1bHRcbn0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXNvdXJjZU1vZGVsIH0gZnJvbSAnLi9SZXNvdXJjZU1vZGVsJztcbmltcG9ydCB7IENvbm5lY3RhYmxlT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgU3Vic2NyaWJlciwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBSZXNvdXJjZUdsb2JhbENvbmZpZywgVEdldFBhcmFtc01hcHBpbmdUeXBlIH0gZnJvbSAnLi9SZXNvdXJjZUdsb2JhbENvbmZpZyc7XG5pbXBvcnQge1N0b3JhZ2VBY3Rpb259IGZyb20gXCIuL1N0b3JhZ2VBY3Rpb25cIjtcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBSZXNvdXJjZUFjdGlvbihtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKSB7XG5cbiAgbWV0aG9kT3B0aW9ucyA9IG1ldGhvZE9wdGlvbnMgfHwge307XG5cbiAgaWYgKG1ldGhvZE9wdGlvbnMubWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICBtZXRob2RPcHRpb25zLm1ldGhvZCA9IFJlcXVlc3RNZXRob2QuR2V0O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IFJlc291cmNlLCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XG5cbiAgICAoPGFueT50YXJnZXQpW3Byb3BlcnR5S2V5XSA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSk6IFJlc291cmNlUmVzdWx0PGFueT4gfCBSZXNvdXJjZU1vZGVsPGFueT4ge1xuXG4gICAgICBsZXQgZGF0YSA9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IG51bGw7XG4gICAgICBsZXQgcGFyYW1zID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IG51bGw7XG4gICAgICBsZXQgY2FsbGJhY2sgPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogbnVsbDtcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrID0gZGF0YTtcbiAgICAgICAgZGF0YSA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBwYXJhbXM7XG4gICAgICAgIHBhcmFtcyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGxldCByZXNvdXJjZU9wdGlvbnMgPSB0aGlzLmdldFJlc291cmNlT3B0aW9ucygpO1xuXG4gICAgICBjb25zdCBtb2NrUmVxdWVzdCA9IFJlc291cmNlR2xvYmFsQ29uZmlnLm1vY2tSZXNwb25zZXMgJiYgcmVzb3VyY2VPcHRpb25zLm1vY2sgIT09IGZhbHNlICYmIG1ldGhvZE9wdGlvbnMubW9jayAhPT0gZmFsc2UgJiYgKCEhbWV0aG9kT3B0aW9ucy5tb2NrQ29sbGVjdGlvbiB8fCAhIXJlc291cmNlT3B0aW9ucy5tb2NrQ29sbGVjdGlvbik7XG5cbiAgICAgIGxldCBpc0dldFJlcXVlc3QgPSBtZXRob2RPcHRpb25zLm1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5HZXQ7XG5cbiAgICAgIGxldCByZXQ6IFJlc291cmNlUmVzdWx0PGFueT4gfCBSZXNvdXJjZU1vZGVsPGFueT4gPSBudWxsO1xuXG4gICAgICBsZXQgbWFwOiBSZXNvdXJjZVJlc3BvbnNlTWFwID0gbWV0aG9kT3B0aW9ucy5tYXAgPyBtZXRob2RPcHRpb25zLm1hcC5iaW5kKHRoaXMpIDogdGhpcy5tYXA7XG4gICAgICBsZXQgZmlsdGVyOiBSZXNvdXJjZVJlc3BvbnNlRmlsdGVyID0gbWV0aG9kT3B0aW9ucy5maWx0ZXIgPyBtZXRob2RPcHRpb25zLmZpbHRlciA6IHRoaXMuZmlsdGVyO1xuICAgICAgbGV0IGluaXRPYmplY3Q6IFJlc291cmNlUmVzcG9uc2VJbml0UmVzdWx0ID0gbWV0aG9kT3B0aW9ucy5pbml0UmVzdWx0T2JqZWN0ID9cbiAgICAgICAgbWV0aG9kT3B0aW9ucy5pbml0UmVzdWx0T2JqZWN0LmJpbmQodGhpcykgOiB0aGlzLmluaXRSZXN1bHRPYmplY3Q7XG5cbiAgICAgIGlmIChtZXRob2RPcHRpb25zLmlzTGF6eSkge1xuICAgICAgICByZXQgPSB7fTtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKG1ldGhvZE9wdGlvbnMuaXNBcnJheSkge1xuICAgICAgICAgIHJldCA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS4kcmVzb3VyY2UgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIC8vIFNldHRpbmcgZGF0YSB0byByZXRcbiAgICAgICAgICAgIHJldCA9IGRhdGE7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS50b0pTT04gPyBkYXRhLnRvSlNPTigpIDogdG9KU09OKGRhdGEpO1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldCA9IGluaXRPYmplY3QuYmluZCh0aGlzKSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgbGV0IG1haW5EZWZlcnJlZFN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PiA9IG51bGw7XG4gICAgICBsZXQgbWFpbk9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+ID0gbnVsbDtcblxuICAgICAgcmV0LiRyZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgcmV0LiRvYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PikgPT4ge1xuICAgICAgICBtYWluRGVmZXJyZWRTdWJzY3JpYmVyID0gc3Vic2NyaWJlcjtcbiAgICAgIH0pLmZsYXRNYXAoKCkgPT4gbWFpbk9ic2VydmFibGUpO1xuICAgICAgcmV0LiRhYm9ydFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIHJldC4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgfTtcbiAgICAgIHJldC4kcmVzb3VyY2UgPSB0aGlzO1xuXG5cbiAgICAgIGZ1bmN0aW9uIHJlbGVhc2VNYWluRGVmZXJyZWRTdWJzY3JpYmVyKCkge1xuICAgICAgICBpZiAobWFpbkRlZmVycmVkU3Vic2NyaWJlcikge1xuICAgICAgICAgIG1haW5EZWZlcnJlZFN1YnNjcmliZXIubmV4dCgpO1xuICAgICAgICAgIG1haW5EZWZlcnJlZFN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICBtYWluRGVmZXJyZWRTdWJzY3JpYmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIW1ldGhvZE9wdGlvbnMuaXNMYXp5KSB7XG4gICAgICAgIHJldC4kb2JzZXJ2YWJsZSA9IHJldC4kb2JzZXJ2YWJsZS5wdWJsaXNoKCk7XG4gICAgICAgICg8Q29ubmVjdGFibGVPYnNlcnZhYmxlPGFueT4+cmV0LiRvYnNlcnZhYmxlKS5jb25uZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1ldGhvZE9wdGlvbnMudXJsIHx8IHRoaXMuZ2V0VXJsKG1ldGhvZE9wdGlvbnMpKSxcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1ldGhvZE9wdGlvbnMucGF0aCB8fCB0aGlzLmdldFBhdGgobWV0aG9kT3B0aW9ucykpLFxuICAgICAgICBQcm9taXNlLnJlc29sdmUobWV0aG9kT3B0aW9ucy5oZWFkZXJzIHx8IHRoaXMuZ2V0SGVhZGVycyhtZXRob2RPcHRpb25zKSksXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShtZXRob2RPcHRpb25zLnBhcmFtcyB8fCB0aGlzLmdldFBhcmFtcyhtZXRob2RPcHRpb25zKSksXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShtZXRob2RPcHRpb25zLmRhdGEgfHwgdGhpcy5nZXREYXRhKG1ldGhvZE9wdGlvbnMpKVxuICAgICAgXSlcbiAgICAgICAgLnRoZW4oKGRhdGFBbGw6IGFueVtdKSA9PiB7XG5cbiAgICAgICAgICBpZiAocmV0LiRyZXNvbHZlZCkge1xuICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG51bGwpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlbGVhc2VNYWluRGVmZXJyZWRTdWJzY3JpYmVyKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHVybDogc3RyaW5nID0gZGF0YUFsbFswXSArIGRhdGFBbGxbMV07XG4gICAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhkYXRhQWxsWzJdKTtcbiAgICAgICAgICBsZXQgZGVmUGF0aFBhcmFtcyA9IGRhdGFBbGxbM107XG5cbiAgICAgICAgICBsZXQgdXNlZFBhdGhQYXJhbXM6IGFueSA9IHt9O1xuICAgICAgICAgIGxldCB1c2VkUGF0aFBhcmFtc1ZhbHVlczogYW55ID0ge307XG5cbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkgfHwgcGFyYW1zKSB7XG5cbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YUFsbFs0XSwgZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwYXRoUGFyYW1zID0gdXJsLm1hdGNoKC97KFtefV0qKX0vZykgfHwgW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFBhcmFtcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgIGxldCBwYXRoUGFyYW0gPSBwYXRoUGFyYW1zW2ldO1xuXG4gICAgICAgICAgICAgIGxldCBwYXRoS2V5ID0gcGF0aFBhcmFtLnN1YnN0cigxLCBwYXRoUGFyYW0ubGVuZ3RoIC0gMik7XG4gICAgICAgICAgICAgIGxldCBpc01hbmRhdG9yeSA9IHBhdGhLZXlbMF0gPT09ICchJztcbiAgICAgICAgICAgICAgaWYgKGlzTWFuZGF0b3J5KSB7XG4gICAgICAgICAgICAgICAgcGF0aEtleSA9IHBhdGhLZXkuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IGlzR2V0T25seSA9IHBhdGhLZXlbMF0gPT09ICc6JztcbiAgICAgICAgICAgICAgaWYgKGlzR2V0T25seSkge1xuICAgICAgICAgICAgICAgIHBhdGhLZXkgPSBwYXRoS2V5LnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGdldFZhbHVlRm9yUGF0aChwYXRoS2V5LCBkZWZQYXRoUGFyYW1zLCBwYXJhbXMgfHwgZGF0YSwgdXNlZFBhdGhQYXJhbXMpO1xuICAgICAgICAgICAgICBpZiAoaXNHZXRPbmx5ICYmICFwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZGF0YVtwYXRoS2V5XTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNNYW5kYXRvcnkpIHtcblxuICAgICAgICAgICAgICAgICAgbGV0IGNvbnNvbGVNc2cgPSBgTWFuZGF0b3J5ICR7cGF0aFBhcmFtfSBwYXRoIHBhcmFtZXRlciBpcyBtaXNzaW5nYDtcblxuICAgICAgICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihuZXcgRXJyb3IoY29uc29sZU1zZykpO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihjb25zb2xlTXNnKTtcblxuICAgICAgICAgICAgICAgICAgcmVsZWFzZU1haW5EZWZlcnJlZFN1YnNjcmliZXIoKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDAsIHVybC5pbmRleE9mKHBhdGhQYXJhbSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVzZWRQYXRoUGFyYW1zVmFsdWVzW3BhdGhLZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgLy8gUmVwbGFjaW5nIGluIHRoZSB1cmxcbiAgICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UocGF0aFBhcmFtLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1vdmluZyBkb3VibGUgc2xhc2hlZCBmcm9tIGZpbmFsIHVybFxuICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC9cXC8rL2csICcvJyk7XG4gICAgICAgICAgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwJykpIHtcbiAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKCc6LycsICc6Ly8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1vdmUgdHJhaWxpbmcgc2xhc2hcbiAgICAgICAgICBpZiAodHlwZW9mIG1ldGhvZE9wdGlvbnMucmVtb3ZlVHJhaWxpbmdTbGFzaCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG1ldGhvZE9wdGlvbnMucmVtb3ZlVHJhaWxpbmdTbGFzaCA9IHRoaXMucmVtb3ZlVHJhaWxpbmdTbGFzaCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWV0aG9kT3B0aW9ucy5yZW1vdmVUcmFpbGluZ1NsYXNoKSB7XG4gICAgICAgICAgICB3aGlsZSAodXJsW3VybC5sZW5ndGggLSAxXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHIoMCwgdXJsLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy8gUmVtb3ZlIG1hcHBlZCBwYXJhbXNcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGVmUGF0aFBhcmFtcykge1xuICAgICAgICAgICAgaWYgKGRlZlBhdGhQYXJhbXNba2V5XVswXSA9PT0gJ0AnKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBkZWZQYXRoUGFyYW1zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvLyBEZWZhdWx0IHNlYXJjaCBwYXJhbXMgb3IgZGF0YVxuICAgICAgICAgIGxldCBib2R5OiBzdHJpbmcgPSBudWxsO1xuXG4gICAgICAgICAgbGV0IHNlYXJjaFBhcmFtczogYW55O1xuICAgICAgICAgIGlmIChpc0dldFJlcXVlc3QpIHtcbiAgICAgICAgICAgIC8vIEdFVFxuICAgICAgICAgICAgc2VhcmNoUGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmUGF0aFBhcmFtcywgZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5PTiBHRVRcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgIGxldCBfYm9keTogYW55ID0ge307XG4gICAgICAgICAgICAgIGlmIChtZXRob2RPcHRpb25zLnJvb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgX2JvZHlbYCR7bWV0aG9kT3B0aW9ucy5yb290Tm9kZX1gXSA9IGRhdGE7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2JvZHkgPSBkYXRhO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShfYm9keSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWFyY2hQYXJhbXMgPSBkZWZQYXRoUGFyYW1zO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy8gU2V0dGluZyBzZWFyY2ggcGFyYW1zXG4gICAgICAgICAgbGV0IHNlYXJjaDogVVJMU2VhcmNoUGFyYW1zID0gISFtZXRob2RPcHRpb25zLnF1ZXJ5RW5jb2RlciA/IG5ldyBVUkxTZWFyY2hQYXJhbXMoJycsIG5ldyBtZXRob2RPcHRpb25zLnF1ZXJ5RW5jb2RlcigpKSA6IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcblxuICAgICAgICAgIGlmICghcGFyYW1zKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2VhcmNoUGFyYW1zKSB7XG4gICAgICAgICAgICAgIGlmIChzZWFyY2hQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdXNlZFBhdGhQYXJhbXNba2V5XSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZTogYW55ID0gc2VhcmNoUGFyYW1zW2tleV07XG4gICAgICAgICAgICAgICAgYXBwZW5kU2VhcmNoUGFyYW1zKHNlYXJjaCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBZGRpbmcgVFMgaWYgbmVlZGVkXG4gICAgICAgICAgbGV0IHRzTmFtZSA9IG1ldGhvZE9wdGlvbnMuYWRkVGltZXN0YW1wIHx8IHJlc291cmNlT3B0aW9ucy5hZGRUaW1lc3RhbXA7XG4gICAgICAgICAgaWYgKHRzTmFtZSkge1xuICAgICAgICAgICAgaWYgKHRzTmFtZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0c05hbWUgPSAndHMnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VhcmNoLmFwcGVuZCh0c05hbWUsICcnICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92aW5nIENvbnRlbnQtVHlwZSBoZWFkZXIgaWYgbm8gYm9keVxuICAgICAgICAgIGlmICghYm9keSkge1xuICAgICAgICAgICAgaGVhZGVycy5kZWxldGUoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy8gQ3JlYXRpbmcgcmVxdWVzdCBvcHRpb25zXG4gICAgICAgICAgbGV0IHJlcXVlc3RPcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kT3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IG1ldGhvZE9wdGlvbnMud2l0aENyZWRlbnRpYWxzIHx8IHJlc291cmNlT3B0aW9ucy53aXRoQ3JlZGVudGlhbHNcbiAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgLy8gQ3JlYXRpbmcgcmVxdWVzdCBvYmplY3RcbiAgICAgICAgICBsZXQgcmVxID0gbmV3IFJlcXVlc3QocmVxdWVzdE9wdGlvbnMpO1xuXG4gICAgICAgICAgcmVxID0gbWV0aG9kT3B0aW9ucy5yZXF1ZXN0SW50ZXJjZXB0b3IgP1xuICAgICAgICAgICAgbWV0aG9kT3B0aW9ucy5yZXF1ZXN0SW50ZXJjZXB0b3IocmVxLCBtZXRob2RPcHRpb25zKSA6XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJbnRlcmNlcHRvcihyZXEsIG1ldGhvZE9wdGlvbnMpO1xuXG4gICAgICAgICAgaWYgKCFyZXEpIHtcbiAgICAgICAgICAgIG1haW5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEVycm9yKCdSZXF1ZXN0IGlzIG51bGwnKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdSZXF1ZXN0IGlzIG51bGwnKTtcblxuICAgICAgICAgICAgcmVsZWFzZU1haW5EZWZlcnJlZFN1YnNjcmliZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgcmVxdWVzdE9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PjtcblxuICAgICAgICAgIGlmIChtb2NrUmVxdWVzdCkge1xuICAgICAgICAgICAgbGV0IG1vY2tDb2xsZWN0aW9uID0gISFtZXRob2RPcHRpb25zLm1vY2tDb2xsZWN0aW9uID8gbWV0aG9kT3B0aW9ucy5tb2NrQ29sbGVjdGlvbiA6IHtjb2xsZWN0aW9uOiByZXNvdXJjZU9wdGlvbnMubW9ja0NvbGxlY3Rpb259O1xuICAgICAgICAgICAgbGV0IHJlc3A6IGFueSA9IG51bGw7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1vY2tDb2xsZWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHJlc3AgPSBtb2NrQ29sbGVjdGlvbihwcm9wZXJ0eUtleSwgdXNlZFBhdGhQYXJhbXNWYWx1ZXMsIEpTT04ucGFyc2UoYm9keSksIG1ldGhvZE9wdGlvbnMubWV0aG9kKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3AgPSBnZXRNb2NrZWRSZXNwb25zZShtb2NrQ29sbGVjdGlvbiwgdXNlZFBhdGhQYXJhbXNWYWx1ZXMsIEpTT04ucGFyc2UoYm9keSksIG1ldGhvZE9wdGlvbnMubWV0aG9kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3AgPSBuZXcgRmFrZVJlc3BvbnNlKHJlc3ApO1xuICAgICAgICAgICAgcmVxdWVzdE9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmZyb20oW3Jlc3BdKTtcblxuICAgICAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRWYWxpZGF0ZVR5cGVzXG4gICAgICAgICAgICByZXF1ZXN0T2JzZXJ2YWJsZSA9IG1ldGhvZE9wdGlvbnMucmVzcG9uc2VJbnRlcmNlcHRvciA/XG4gICAgICAgICAgICAgIG1ldGhvZE9wdGlvbnMucmVzcG9uc2VJbnRlcmNlcHRvci5iaW5kKHRoaXMpKHJlcXVlc3RPYnNlcnZhYmxlLCByZXEsIG1ldGhvZE9wdGlvbnMpIDpcbiAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZUludGVyY2VwdG9yKHJlcXVlc3RPYnNlcnZhYmxlLCByZXEsIG1ldGhvZE9wdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEb2luZyB0aGUgcmVxdWVzdFxuICAgICAgICAgICAgcmVxdWVzdE9ic2VydmFibGUgPSB0aGlzLl9yZXF1ZXN0KHJlcSwgbWV0aG9kT3B0aW9ucyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1ldGhvZE9wdGlvbnMuaXNMYXp5KSB7XG5cbiAgICAgICAgICAgIG1haW5PYnNlcnZhYmxlID0gcmVxdWVzdE9ic2VydmFibGU7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBtYWluT2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHtcblxuICAgICAgICAgICAgICBsZXQgcmVxU3Vic2NyOiBTdWJzY3JpcHRpb24gPSByZXF1ZXN0T2JzZXJ2YWJsZS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKHJlc3A6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICBpZiAocmVzcCAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXRob2RPcHRpb25zLmlzQXJyYXkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgIC8vIEV4cGVjdGluZyBhcnJheVxuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlc3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdSZXR1cm5lZCBkYXRhIHNob3VsZCBiZSBhbiBhcnJheS4gUmVjZWl2ZWQnLCByZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVzcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZmlsdGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAobWFwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHJlc3BJdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BJdGVtLiRyZXNvdXJjZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0RGF0YVRvT2JqZWN0KGluaXRPYmplY3QuYmluZChyZXNwSXRlbS4kcmVzb3VyY2UpKCksIHJlc3BJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0aW5nIG9iamVjdFxuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JldHVybmVkIGRhdGEgc2hvdWxkIGJlIGFuIG9iamVjdC4gUmVjZWl2ZWQnLCByZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyKHJlc3ApKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YVRvT2JqZWN0KHJldCwgbWFwKHJlc3ApKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldC4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHJldCk7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnI6IGFueSkgPT4gc3Vic2NyaWJlci5lcnJvcihlcnIpLFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldC4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJldCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIHJldC4kYWJvcnRSZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXQuJHJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcVN1YnNjci51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIHJldC4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghIXRoaXMuc3RvcmFnZSAmJiAhIW1ldGhvZE9wdGlvbnMuc3RvcmFnZUFjdGlvbikge1xuICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSBtYWluT2JzZXJ2YWJsZS5kbygocmVzcDogYW55KSA9PiB7XG4gICAgICAgICAgICAgIG1ldGhvZE9wdGlvbnMuc3RvcmFnZUFjdGlvbi5iaW5kKHRoaXMpKHRoaXMuc3RvcmFnZSwgcmVzcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZWxlYXNlTWFpbkRlZmVycmVkU3Vic2NyaWJlcigpO1xuXG5cblxuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJldDtcblxuICAgIH07XG5cbiAgICBpZiAoISFtZXRob2RPcHRpb25zLnN0b3JhZ2VBY3Rpb24gJiYgbWV0aG9kT3B0aW9ucy5zdG9yYWdlQWN0aW9uID09PSBTdG9yYWdlQWN0aW9uLkxPQUQpIHtcbiAgICAgICAgdGFyZ2V0LnN0b3JhZ2VMb2FkID0gKDxhbnk+dGFyZ2V0KVtwcm9wZXJ0eUtleV07XG4gICAgfTtcbiAgfTtcblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXRhVG9PYmplY3QocmV0OiBhbnksIHJlc3A6IGFueSk6IGFueSB7XG5cbiAgaWYgKHJldC4kc2V0RGF0YSkge1xuICAgIHJldC4kc2V0RGF0YShyZXNwKTtcbiAgfSBlbHNlIHtcbiAgICBPYmplY3QuYXNzaWduKHJldCwgcmVzcCk7XG4gIH1cblxuICByZXR1cm4gcmV0O1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRTZWFyY2hQYXJhbXMoc2VhcmNoOiBVUkxTZWFyY2hQYXJhbXMsIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gIC8vLyBDb252ZXJ0IGRhdGVzIHRvIElTTyBmb3JtYXQgc3RyaW5nXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICBzZWFyY2guYXBwZW5kKGtleSwgdmFsdWUudG9JU09TdHJpbmcoKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblxuICAgIHN3aXRjaCAoUmVzb3VyY2VHbG9iYWxDb25maWcuZ2V0UGFyYW1zTWFwcGluZ1R5cGUpIHtcblxuICAgICAgY2FzZSBUR2V0UGFyYW1zTWFwcGluZ1R5cGUuUGxhaW46XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgZm9yIChsZXQgYXJyX3ZhbHVlIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICBzZWFyY2guYXBwZW5kKGtleSwgYXJyX3ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8vIENvbnZlcnQgZGF0ZXMgdG8gSVNPIGZvcm1hdCBzdHJpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlYXJjaC5hcHBlbmQoa2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBUR2V0UGFyYW1zTWFwcGluZ1R5cGUuQnJhY2tldDpcbiAgICAgICAgLy8vIENvbnZlcnQgb2JqZWN0IGFuZCBhcnJheXMgdG8gcXVlcnkgcGFyYW1zXG4gICAgICAgIGZvciAobGV0IGsgaW4gdmFsdWUpIHtcbiAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgIGFwcGVuZFNlYXJjaFBhcmFtcyhzZWFyY2gsIGtleSArICdbJyArIGsgKyAnXScsIHZhbHVlW2tdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cblxuICBzZWFyY2guYXBwZW5kKGtleSwgdmFsdWUpO1xuXG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlRm9yUGF0aChrZXk6IHN0cmluZywgcGFyYW1zOiBhbnksIGRhdGE6IGFueSwgdXNlZFBhdGhQYXJhbXM6IGFueSk6IHN0cmluZyB7XG5cbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChkYXRhW2tleV0pICYmIHR5cGVvZiBkYXRhW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgdXNlZFBhdGhQYXJhbXNba2V5XSA9IHRydWU7XG4gICAgcmV0dXJuIGRhdGFba2V5XTtcbiAgfVxuXG4gIGlmIChpc051bGxPclVuZGVmaW5lZChwYXJhbXNba2V5XSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChwYXJhbXNba2V5XVswXSA9PT0gJ0AnKSB7XG4gICAgcmV0dXJuIGdldFZhbHVlRm9yUGF0aChwYXJhbXNba2V5XS5zdWJzdHIoMSksIHBhcmFtcywgZGF0YSwgdXNlZFBhdGhQYXJhbXMpO1xuICB9XG5cbiAgdXNlZFBhdGhQYXJhbXNba2V5XSA9IHRydWU7XG4gIHJldHVybiBwYXJhbXNba2V5XTtcblxufVxuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB0b0pTT04ob2JqOiBhbnkpOmFueSB7XG4gIGxldCByZXRPYmo6IGFueSA9IHt9O1xuXG4gIGZvciAobGV0IHByb3BOYW1lIGluIG9iaikge1xuXG4gICAgaWYgKCEob2JqW3Byb3BOYW1lXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSAmJiAhKHByb3BOYW1lLmNoYXJBdCgwKSA9PT0gJyQnKSkge1xuICAgICAgcmV0T2JqW3Byb3BOYW1lXSA9IG9ialtwcm9wTmFtZV07XG4gICAgfVxuXG4gIH1cbiAgcmV0dXJuIHJldE9iajtcbn1cblxuXG5jbGFzcyBGYWtlUmVzcG9uc2Uge1xuICBwcml2YXRlIF9yZXNwOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocmVzcDogYW55KSB7XG4gICAgdGhpcy5fcmVzcCA9IHJlc3A7XG4gIH1cblxuICBnZXQgX2JvZHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fcmVzcCk7XG4gIH1cblxuICBqc29uID0gKCkgPT4gdGhpcy5fcmVzcDtcbn1cblxuXG5mdW5jdGlvbiBnZXRNb2NrZWRSZXNwb25zZShjb2xsZWN0aW9uOiB7Y29sbGVjdGlvbjogYW55LCBsb29rdXBQYXJhbXM/OiBhbnl9LCBwYXJhbXM6IGFueSwgZGF0YTogYW55LCByZXF1ZXN0TWV0aG9kOiBSZXF1ZXN0TWV0aG9kKSB7XG4gIGlmIChyZXF1ZXN0TWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLkdldCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uY29sbGVjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjb2xsZWN0aW9uLmxvb2t1cFBhcmFtcyB8fCBPYmplY3Qua2V5cyhjb2xsZWN0aW9uLmxvb2t1cFBhcmFtcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBjb2xsZWN0aW9uLmNvbGxlY3Rpb247XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbVtrZXldID09PSBwYXJhbXNba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhIXJlc3VsdC5sZW5ndGggPyByZXN1bHRbMF0gOiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uY29sbGVjdGlvbi5maWx0ZXIoKGl0bTogYW55KSA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYm9vbGVhbiA9IHRydWU7XG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbGxlY3Rpb24ubG9va3VwUGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoY29sbGVjdGlvbi5sb29rdXBQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgcGFyYW1zW2tleV0gPT09IGl0bVtjb2xsZWN0aW9uLmxvb2t1cFBhcmFtc1trZXldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHJlcXVlc3RNZXRob2QgPT09IFJlcXVlc3RNZXRob2QuUG9zdCkge1xuICAgIGNvbGxlY3Rpb24uY29sbGVjdGlvbi5wdXNoKGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGVsc2UgaWYgKHJlcXVlc3RNZXRob2QgPT09IFJlcXVlc3RNZXRob2QuUHV0IHx8IHJlcXVlc3RNZXRob2QgPT09IFJlcXVlc3RNZXRob2QuUGF0Y2ggKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gY29sbGVjdGlvbi5jb2xsZWN0aW9uLmZpbmQoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgaWYgKGl0ZW1ba2V5XSAhPT0gcGFyYW1zW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICAgIGlmICghIXJlc3VsdCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwgZGF0YSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gIH0gZWxzZSBpZiAocmVxdWVzdE1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5EZWxldGUpIHtcbiAgICAgIGxldCByZXN1bHRJZHggPSBjb2xsZWN0aW9uLmNvbGxlY3Rpb24uZmluZEluZGV4KChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgICAgIGlmIChpdGVtW2tleV0gIT09IHBhcmFtc1trZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgICBjb2xsZWN0aW9uLmNvbGxlY3Rpb24uc3BsaWNlKHJlc3VsdElkeCwgMSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VBY3Rpb24udHMiLCJleHBvcnQgZW51bSBUR2V0UGFyYW1zTWFwcGluZ1R5cGUge1xuICBQbGFpbixcbiAgQnJhY2tldFxufVxuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VHbG9iYWxDb25maWcge1xuICBzdGF0aWMgdXJsOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4gPSBudWxsO1xuICBzdGF0aWMgcGF0aDogc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+ID0gbnVsbDtcbiAgc3RhdGljIGhlYWRlcnM6IGFueSB8IFByb21pc2U8YW55PiA9IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgfTtcbiAgc3RhdGljIHBhcmFtczogYW55IHwgUHJvbWlzZTxhbnk+ID0gbnVsbDtcbiAgc3RhdGljIGRhdGE6IGFueSB8IFByb21pc2U8YW55PiA9IG51bGw7XG5cbiAgc3RhdGljIGdldFBhcmFtc01hcHBpbmdUeXBlOiBhbnkgPSBUR2V0UGFyYW1zTWFwcGluZ1R5cGUuUGxhaW47XG4gIHN0YXRpYyBtb2NrUmVzcG9uc2VzOiBib29sZWFuID0gZmFsc2U7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VHbG9iYWxDb25maWcudHMiLCJpbXBvcnQgeyBJbmplY3RvciwgUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZVByb3ZpZGVycyB7XG5cbiAgc3RhdGljIG1haW5Qcm92aWRlcnNOYW1lOiBzdHJpbmcgPSAnX19tYWluUHJvdmlkZXJzJztcbiAgc3RhdGljIHByb3ZpZGVyczogeyBbaWQ6IHN0cmluZ106IFByb3ZpZGVyW10gfSA9IHtcbiAgICBfX21haW5Qcm92aWRlcnM6IFtdXG4gIH07XG5cbiAgc3RhdGljIGFkZChyZXNvdXJjZTogVHlwZTxSZXNvdXJjZT4sIHN1YlNldDogc3RyaW5nID0gbnVsbCkge1xuXG4gICAgaWYgKCFzdWJTZXQpIHtcbiAgICAgIHN1YlNldCA9IHRoaXMubWFpblByb3ZpZGVyc05hbWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnByb3ZpZGVyc1tzdWJTZXRdKSB7XG4gICAgICB0aGlzLnByb3ZpZGVyc1tzdWJTZXRdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGRlcHM6IGFueVtdID0gKDxhbnk+UmVmbGVjdCkuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgcmVzb3VyY2UpO1xuXG4gICAgaWYgKCFkZXBzIHx8IGRlcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZXBzID0gW0h0dHAsIEluamVjdG9yXTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3ZpZGVyc1tzdWJTZXRdLnB1c2goXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IHJlc291cmNlLFxuICAgICAgICB1c2VGYWN0b3J5OiAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IHJlc291cmNlKC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgICBkZXBzOiBkZXBzXG4gICAgICB9XG4gICAgKTtcblxuICB9XG5cbiAgc3RhdGljIGdldChzdWJTZXQ6IHN0cmluZyA9IG51bGwpOiBQcm92aWRlcltdIHtcblxuICAgIGlmICghc3ViU2V0KSB7XG4gICAgICBzdWJTZXQgPSB0aGlzLm1haW5Qcm92aWRlcnNOYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyc1tzdWJTZXRdIHx8IFtdO1xuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlUHJvdmlkZXJzLnRzIiwiaW1wb3J0IHtSZXNvdXJjZVN0b3JhZ2VQYXJhbXMsIFNlbGVjdGVkU3RvcmFnZX0gZnJvbSBcIi4vSW50ZXJmYWNlc1wiO1xuaW1wb3J0IHtSZXNvdXJjZX0gZnJvbSBcIi4vUmVzb3VyY2VcIjtcbmltcG9ydCB7VHlwZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcblxuZXhwb3J0IGNsYXNzIFJlc291cmNlU3RvcmFnZSB7XG4gIHByaXZhdGUgcXVlcnlQYXJhbXMgPSB7fTtcbiAgcHJpdmF0ZSBfaXRlcmF0aW9uUG9pbnRlciA9IDA7XG4gIHByaXZhdGUgbG9hZEltbWVkaWF0ZWx5ID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfcmVzdWx0U3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PFNlbGVjdGVkU3RvcmFnZTxhbnk+PjtcblxuICByZXN1bHQ6IFNlbGVjdGVkU3RvcmFnZTxhbnk+O1xuICByZXN1bHREYXRhOiBhbnlbXSA9IFtdO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvdXJjZTogVHlwZTxSZXNvdXJjZT4sIHBhcmFtczogUmVzb3VyY2VTdG9yYWdlUGFyYW1zKSB7XG4gICAgdGhpcy51cGRhdGVQYXJhbXMocGFyYW1zKTtcbiAgICB0aGlzLnJlc3VsdCA9IE9iamVjdC5hc3NpZ24odGhpcy5yZXN1bHREYXRhLCB7JGxvYWQ6IHRoaXMubG9hZC5iaW5kKHRoaXMpLCAkcmVzb2x2ZWQ6IGZhbHNlfSk7XG5cbiAgICAvKnRoaXMucmVzdWx0Lm5leHQgPSAoKTogSXRlcmF0b3JSZXN1bHQ8YW55PiA9PiB7XG4gICAgICBpZiAodGhpcy5faXRlcmF0aW9uUG9pbnRlciA8IHRoaXMucmVzdWx0RGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5yZXN1bHREYXRhW3RoaXMuX2l0ZXJhdGlvblBvaW50ZXIrK11cbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMucmVzdWx0W1N5bWJvbC5pdGVyYXRvcl0gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gICAgfTsqL1xuXG4gICAgdGhpcy5fcmVzdWx0U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5yZXN1bHQpO1xuICAgIHRoaXMucmVzdWx0LiRvYnNlcnZhYmxlID0gdGhpcy5fcmVzdWx0U3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICAgICg8YW55PnJlc291cmNlKS5pbml0LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAoPGFueT50aGlzLnJlc291cmNlKS5pbnN0YW5jZS5zdG9yYWdlID0gdGhpcztcbiAgICAgIGlmICh0aGlzLmxvYWRJbW1lZGlhdGVseSkge1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzdWx0LiRyZXNvdXJjZSA9ICg8YW55PnRoaXMucmVzb3VyY2UpLmluc3RhbmNlO1xuICAgIH0pO1xuXG5cbiAgfVxuXG4gIHVwZGF0ZVBhcmFtcyhwYXJhbXM6IFJlc291cmNlU3RvcmFnZVBhcmFtcyA9IDxhbnk+e30pIHtcbiAgICB0aGlzLnF1ZXJ5UGFyYW1zID0gcGFyYW1zLnF1ZXJ5UGFyYW1zIHx8IHt9O1xuICAgIHRoaXMubG9hZEltbWVkaWF0ZWx5ID0gcGFyYW1zLmxvYWRJbW1lZGlhdGVseSA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWU7XG4gIH1cblxuICBsb2FkKGFyZ3M/OiBhbnkpIHtcbiAgICBjb25zdCBxcCA9ICEhYXJncyA/IGFyZ3MgOiB0aGlzLnF1ZXJ5UGFyYW1zO1xuICAgIGNvbnN0IGFjdGlvbiA9ICg8YW55PnRoaXMucmVzb3VyY2UpLmluc3RhbmNlLnN0b3JhZ2VMb2FkO1xuICAgIGlmICghIWFjdGlvbikge1xuICAgICAgYWN0aW9uLmJpbmQoKDxhbnk+dGhpcy5yZXNvdXJjZSkuaW5zdGFuY2UpKHFwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgXCJTdG9yYWdlIExPQUQgYWN0aW9uIGlzIG5vdCBkZWZpbmVkXCI7XG4gICAgfVxuICB9XG5cbiAgZm9yY2VSZWZyZXNoKCkge1xuICAgIHRoaXMucmVzdWx0ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5yZXN1bHQpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5yZXN1bHQsIHRoaXMucmVzdWx0RGF0YSk7XG4gICAgdGhpcy5yZXN1bHQuJHJlc29sdmVkID0gdHJ1ZTtcbiAgICB0aGlzLl9pdGVyYXRpb25Qb2ludGVyID0gMDtcbiAgICB0aGlzLl9yZXN1bHRTdWJqZWN0Lm5leHQodGhpcy5yZXN1bHQpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZVN0b3JhZ2UudHMiLCJcbmltcG9ydCB7UmVzb3VyY2VTdG9yYWdlfSBmcm9tIFwiLi9SZXNvdXJjZVN0b3JhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IFN0b3JhZ2VBY3Rpb24gPSB7XG4gIExPQUQ6IGZ1bmN0aW9uIChzdG9yYWdlOiBSZXNvdXJjZVN0b3JhZ2UsIHJlc3A6IGFueSkge1xuICAgIHN0b3JhZ2UucmVzdWx0RGF0YSA9IHJlc3AuZmlsdGVyKChpdGVtOiBhbnkpID0+ICEhaXRlbSk7XG4gICAgc3RvcmFnZS5mb3JjZVJlZnJlc2goKTtcbiAgfSxcbiAgQUREOiBmdW5jdGlvbiAoc3RvcmFnZTogUmVzb3VyY2VTdG9yYWdlLCByZXNwOiBhbnkpIHtcbiAgICBzdG9yYWdlLnJlc3VsdERhdGEucHVzaChyZXNwKTtcbiAgICBzdG9yYWdlLmZvcmNlUmVmcmVzaCgpO1xuICB9LFxuICBVUERBVEU6IGZ1bmN0aW9uIChzdG9yYWdlOiBSZXNvdXJjZVN0b3JhZ2UsIHJlc3A6IGFueSkge1xuICAgIGNvbnN0IHByaW1hcnlLZXkgPSByZXNwLiRwcmltYXJ5S2V5IHx8ICdpZCc7XG4gICAgY29uc3QgaWR4ID0gc3RvcmFnZS5yZXN1bHREYXRhLmZpbmRJbmRleChpdGVtID0+IGl0ZW1bcHJpbWFyeUtleV0gPT09IHJlc3BbcHJpbWFyeUtleV0pO1xuICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgc3RvcmFnZS5yZXN1bHREYXRhW2lkeF0gPSByZXNwO1xuICAgICAgc3RvcmFnZS5mb3JjZVJlZnJlc2goKTtcbiAgICB9XG4gIH0sXG4gIFJFTU9WRTogZnVuY3Rpb24gKHN0b3JhZ2U6IFJlc291cmNlU3RvcmFnZSwgcmVzcDogYW55KSB7XG4gICAgY29uc3QgcHJpbWFyeUtleSA9IHJlc3AuJHByaW1hcnlLZXkgfHwgJ2lkJztcbiAgICBjb25zdCBpZHggPSBzdG9yYWdlLnJlc3VsdERhdGEuZmluZEluZGV4KGl0ZW0gPT4gaXRlbVtwcmltYXJ5S2V5XSA9PT0gcmVzcFtwcmltYXJ5S2V5XSk7XG4gICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICBzdG9yYWdlLnJlc3VsdERhdGEuc3BsaWNlKGlkeCwgMSk7XG4gICAgICBzdG9yYWdlLmZvcmNlUmVmcmVzaCgpO1xuICAgIH1cbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvU3RvcmFnZUFjdGlvbi50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzhfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvUnhcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBJbmplY3Rvcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUmVzb3VyY2VQcm92aWRlcnMgfSBmcm9tICcuL3NyYy9SZXNvdXJjZVByb3ZpZGVycyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlQWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlQ1JVRCc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZUNSVURCYXNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlR2xvYmFsQ29uZmlnJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlTW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VQYXJhbXMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VQcm92aWRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VTdG9yYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1NlbGVjdFN0b3JhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvU3RvcmFnZUFjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9JbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2ZpZWxkcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFJlc291cmNlTW9kdWxlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAvLyBDcmVhdGUgc2luZ2xldG9uZXMgZm9yIGFsbCByZXNvdXJjZXNcbiAgICBsZXQgcHJvdmlkZXJzID0gUmVzb3VyY2VQcm92aWRlcnMucHJvdmlkZXJzW1Jlc291cmNlUHJvdmlkZXJzLm1haW5Qcm92aWRlcnNOYW1lXTtcbiAgICBwcm92aWRlcnMuZm9yRWFjaChwcm92aWRlciA9PiB7XG4gICAgICBjb25zdCBSZXNvdXJjZVR5cGUgPSAoPGFueT5wcm92aWRlcikucHJvdmlkZTtcbiAgICAgIGNvbnN0IHJlc291cmNlSW5zdGFuY2UgPSB0aGlzLl9pbmplY3Rvci5nZXQoUmVzb3VyY2VUeXBlKTtcbiAgICAgIFJlc291cmNlVHlwZS5pbnN0YW5jZSA9IHJlc291cmNlSW5zdGFuY2U7XG4gICAgICAoPGFueT5SZXNvdXJjZVR5cGUpLl9pbml0Lm5leHQocmVzb3VyY2VJbnN0YW5jZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJlc291cmNlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBSZXNvdXJjZVByb3ZpZGVycy5wcm92aWRlcnNbUmVzb3VyY2VQcm92aWRlcnMubWFpblByb3ZpZGVyc05hbWVdXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZChzdWJTZXQ6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUmVzb3VyY2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFJlc291cmNlUHJvdmlkZXJzLnByb3ZpZGVyc1tzdWJTZXRdID8gUmVzb3VyY2VQcm92aWRlcnMucHJvdmlkZXJzW3N1YlNldF0gOiBbXVxuICAgIH07XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vaW5kZXgudHMiLCJleHBvcnQgKiBmcm9tICcuL2luZGV4JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL25neC1yZXNvdXJjZS50cyIsImltcG9ydCB7IFJlcXVlc3RNZXRob2QgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXNvdXJjZU1ldGhvZCB9IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZUFjdGlvbiB9IGZyb20gJy4vUmVzb3VyY2VBY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VDUlVEPFRRdWVyeSwgVFNob3J0LCBURnVsbD4gZXh0ZW5kcyBSZXNvdXJjZSB7XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBpc0FycmF5OiB0cnVlXG4gIH0pXG4gIHF1ZXJ5OiBSZXNvdXJjZU1ldGhvZDxUUXVlcnksIFRTaG9ydFtdPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIHBhdGg6ICcveyFpZH0nXG4gIH0pXG4gIGdldDogUmVzb3VyY2VNZXRob2Q8eyBpZDogYW55IH0sIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5Qb3N0XG4gIH0pXG4gIHNhdmU6IFJlc291cmNlTWV0aG9kPFRGdWxsLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUHV0LFxuICAgIHBhdGg6ICcveyFpZH0nXG4gIH0pXG4gIHVwZGF0ZTogUmVzb3VyY2VNZXRob2Q8VEZ1bGwsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5EZWxldGUsXG4gICAgcGF0aDogJy97IWlkfSdcbiAgfSlcbiAgcmVtb3ZlOiBSZXNvdXJjZU1ldGhvZDx7IGlkOiBhbnkgfSwgYW55PjtcblxuICAvLyBBbGlhcyB0byBzYXZlXG4gIGNyZWF0ZShkYXRhOiBURnVsbCwgY2FsbGJhY2s/OiAocmVzOiBURnVsbCkgPT4gYW55KTogVEZ1bGwge1xuICAgIHJldHVybiB0aGlzLnNhdmUoZGF0YSwgY2FsbGJhY2spO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZUNSVUQudHMiLCJpbXBvcnQgeyBSZXF1ZXN0TWV0aG9kIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuaW1wb3J0IHsgUmVzb3VyY2VNZXRob2QgfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VBY3Rpb24gfSBmcm9tICcuL1Jlc291cmNlQWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIFJlc291cmNlQ1JVREJhc2U8VFF1ZXJ5LCBUS2V5cywgVFNob3J0LCBURnVsbD4gZXh0ZW5kcyBSZXNvdXJjZSB7XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBpc0FycmF5OiB0cnVlXG4gIH0pXG4gIHF1ZXJ5OiBSZXNvdXJjZU1ldGhvZDxUUXVlcnksIFRTaG9ydFtdPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oKVxuICBnZXQ6IFJlc291cmNlTWV0aG9kPFRLZXlzLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUG9zdFxuICB9KVxuICBzYXZlOiBSZXNvdXJjZU1ldGhvZDxURnVsbCwgVEZ1bGw+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlB1dFxuICB9KVxuICB1cGRhdGU6IFJlc291cmNlTWV0aG9kPFRGdWxsLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuRGVsZXRlXG4gIH0pXG4gIHJlbW92ZTogUmVzb3VyY2VNZXRob2Q8VEtleXMsIGFueT47XG5cbiAgLy8gQWxpYXMgdG8gc2F2ZVxuICBjcmVhdGUoZGF0YTogVEZ1bGwsIGNhbGxiYWNrPzogKHJlczogVEZ1bGwpID0+IGFueSk6IFRGdWxsIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlKGRhdGEsIGNhbGxiYWNrKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VDUlVEQmFzZS50cyIsImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlc291cmNlTW9kZWw8Uj4ge1xuXG4gIHByb3RlY3RlZCAkY2FjaGVkUmVsYXRlZDoge1trZXk6IHN0cmluZ106IHtpZDogYW55LCBkYXRhOiBhbnl9fSA9IHt9O1xuXG4gICRyZXNvbHZlZDogYm9vbGVhbjtcbiAgJG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PjtcbiAgJGFib3J0UmVxdWVzdDogKCkgPT4gdm9pZDtcbiAgJHJlc291cmNlOiBSO1xuICAkcHJpbWFyeUtleTogc3RyaW5nID0gJ2lkJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiRyZXNvdXJjZSA9ICg8YW55PlJlZmxlY3QpLmdldE1ldGFkYXRhKCdyZXNvdXJjZScsIHRoaXMuY29uc3RydWN0b3IpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShkYXRhOiBhbnkgPSB7fSwgY29tbWl0OiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01vZGVsIHN0YXRpYyBjcmVhdGUgaXMgbm90IGF2YWlsYWJsZSBhbnltb3JlLiBQbGVhc2UgdXNlIG5ldyBZb3VyTW9kZWwoKSBpbnN0ZWFkJyk7XG4gIH1cblxuICBwdWJsaWMgJHNldERhdGEoZGF0YTogYW55KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG5cbiAgcHVibGljICRzYXZlKCkge1xuXG4gICAgaWYgKHRoaXMuaXNOZXcoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy4kdXBkYXRlKCk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgJGNyZWF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kcmVzb3VyY2VfbWV0aG9kKCdzYXZlJyk7XG4gIH1cblxuICBwdWJsaWMgJHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kcmVzb3VyY2VfbWV0aG9kKCd1cGRhdGUnKTtcbiAgfVxuXG4gIHB1YmxpYyAkcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLiRyZXNvdXJjZV9tZXRob2QoJ3JlbW92ZScpO1xuICB9XG5cbiAgcHVibGljIHRvSlNPTigpOmFueSB7XG4gICAgbGV0IHJldE9iajogYW55ID0ge307XG5cbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiB0aGlzKSB7XG5cbiAgICAgIGlmICghKCg8YW55PnRoaXMpW3Byb3BOYW1lXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSAmJiAhKHByb3BOYW1lLmNoYXJBdCgwKSA9PT0gJyQnKSkge1xuICAgICAgICByZXRPYmpbcHJvcE5hbWVdID0gKDxhbnk+dGhpcylbcHJvcE5hbWVdO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiByZXRPYmo7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNOZXcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEoPGFueT50aGlzKVt0aGlzLiRwcmltYXJ5S2V5XTtcbiAgfVxuXG4gIHByaXZhdGUgJHJlc291cmNlX21ldGhvZChtZXRob2ROYW1lOiBzdHJpbmcpIHtcblxuICAgIGlmICghdGhpcy4kcmVzb3VyY2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFlvdXIgUmVzb3VyY2UgaXMgbm90IHNldC4gUGxlYXNlIHVzZSByZXNvdXJjZS5jcmVhdGVNb2RlbCgpIG1ldGhvZCB0byBjcmVhdGUgbW9kZWwuYCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoISg8YW55PnRoaXMuJHJlc291cmNlKVttZXRob2ROYW1lXSkge1xuICAgICAgY29uc29sZS5lcnJvcihgWW91ciBSZXNvdXJjZSBoYXMgbm8gaW1wbGVtZW50ZWQgJHttZXRob2ROYW1lfSBtZXRob2QuYCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAoPGFueT50aGlzLiRyZXNvdXJjZSlbbWV0aG9kTmFtZV0odGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlTW9kZWwudHMiLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Jlc291cmNlUGFyYW1zQmFzZSwgUmVzb3VyY2VTdG9yYWdlUGFyYW1zfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VQcm92aWRlcnMgfSBmcm9tICcuL1Jlc291cmNlUHJvdmlkZXJzJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5pbXBvcnQge1Jlc291cmNlU3RvcmFnZX0gZnJvbSBcIi4vUmVzb3VyY2VTdG9yYWdlXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIFJlc291cmNlUGFyYW1zKHBhcmFtczogUmVzb3VyY2VQYXJhbXNCYXNlID0ge30pIHtcblxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogVHlwZTxSZXNvdXJjZT4pIHtcblxuICAgICg8YW55PnRhcmdldCkuaW5pdCA9ICg8YW55PnRhcmdldCkuX2luaXQuYXNPYnNlcnZhYmxlKCkuZmlsdGVyKChpbnN0YW5jZTogUmVzb3VyY2UpID0+ICEhaW5zdGFuY2UpO1xuXG4gICAgKDxhbnk+dGFyZ2V0KS5nZXRTdG9yYWdlID0gKHN0b3JhZ2VQYXJhbXM6IFJlc291cmNlU3RvcmFnZVBhcmFtcykgPT4ge1xuICAgICAgaWYgKCEhKDxhbnk+dGFyZ2V0KS5fc3RvcmFnZSkge1xuICAgICAgICAoPGFueT50YXJnZXQpLl9zdG9yYWdlLnVwZGF0ZVBhcmFtcyhzdG9yYWdlUGFyYW1zKTtcbiAgICAgICAgcmV0dXJuICg8YW55PnRhcmdldCkuX3N0b3JhZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFJlc291cmNlU3RvcmFnZSh0YXJnZXQsIHN0b3JhZ2VQYXJhbXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0YXJnZXQucHJvdG90eXBlLmdldFJlc291cmNlT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcblxuICAgIGlmIChwYXJhbXMuYWRkMlByb3ZpZGVzICE9PSBmYWxzZSkge1xuICAgICAgUmVzb3VyY2VQcm92aWRlcnMuYWRkKHRhcmdldCwgcGFyYW1zLnByb3ZpZGVyc1N1YlNldCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMucmVtb3ZlVHJhaWxpbmdTbGFzaCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUucmVtb3ZlVHJhaWxpbmdTbGFzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEhcGFyYW1zLnJlbW92ZVRyYWlsaW5nU2xhc2g7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudXJsKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMudXJsO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnBhdGgpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUuX2dldFBhdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMucGF0aDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5oZWFkZXJzKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmhlYWRlcnM7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMucGFyYW1zKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRQYXJhbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMucGFyYW1zO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmRhdGEpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUuX2dldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuZGF0YTtcbiAgICAgIH07XG4gICAgfVxuXG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VQYXJhbXMudHMiLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuaW1wb3J0IHsgUmVzb3VyY2VTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdFN0b3JhZ2UocmVzb3VyY2U6IFR5cGU8UmVzb3VyY2U+LCBwYXJhbXM/OiBSZXNvdXJjZVN0b3JhZ2VQYXJhbXMpIHtcblxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3RvcmFnZSA9ICg8YW55PnJlc291cmNlKS5nZXRTdG9yYWdlKHBhcmFtcyk7XG5cbiAgICBzdG9yYWdlLl9yZXN1bHRTdWJqZWN0LnN1YnNjcmliZSgocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICg8YW55PnRhcmdldClbcHJvcGVydHlLZXldID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIH07XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9TZWxlY3RTdG9yYWdlLnRzIiwiXG5pbXBvcnQgeyBSZXNvdXJjZU1vZGVsIH0gZnJvbSAnLi4vUmVzb3VyY2VNb2RlbCc7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4uL1Jlc291cmNlJztcbmltcG9ydCB7IFJlc291cmNlU3RvcmFnZSB9IGZyb20gJy4uL1Jlc291cmNlU3RvcmFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JlaWduS2V5KHBhcmFtczoge3RhcmdldDogVHlwZTxSZXNvdXJjZU1vZGVsPGFueT4+LCBrZXlGaWVsZDogc3RyaW5nLCByZXNvdXJjZUdldEFjdGlvbj86IHN0cmluZ30pIHtcbiAgcGFyYW1zLnJlc291cmNlR2V0QWN0aW9uID0gISFwYXJhbXMucmVzb3VyY2VHZXRBY3Rpb24gPyBwYXJhbXMucmVzb3VyY2VHZXRBY3Rpb24gOiAnZ2V0JztcblxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogUmVzb3VyY2VNb2RlbDxhbnk+LCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XG5cbiAgICBmdW5jdGlvbiBnZXRGb3JlaWduRnJvbVN0b3JhZ2UoaWQ6IGFueSwgc3RvcmFnZTogUmVzb3VyY2VTdG9yYWdlKSB7XG4gICAgICBjb25zdCBmb3JlaWduTW9kZWwgPSBzdG9yYWdlLnJlc3VsdERhdGEuZmluZCgoaXRlbTogYW55KSA9PiBpdGVtW2l0ZW0uJHByaW1hcnlLZXldID09PSBpZCk7XG4gICAgICBpZiAoISFmb3JlaWduTW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIGZvcmVpZ25Nb2RlbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRGb3JlaWduRnJvbVJlc291cmNlKGlkOiBhbnksIHJlc291cmNlOiBSZXNvdXJjZSkge1xuICAgICAgY29uc3QgYWN0aW9uID0gKDxhbnk+cmVzb3VyY2UpW3BhcmFtcy5yZXNvdXJjZUdldEFjdGlvbl07XG4gICAgICBpZiAoISFhY3Rpb24pIHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7fTtcbiAgICAgICAgKDxhbnk+cXVlcnlQYXJhbXMpWyhuZXcgcGFyYW1zLnRhcmdldCgpKS4kcHJpbWFyeUtleV0gPSBpZDtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5iaW5kKHJlc291cmNlKShxdWVyeVBhcmFtcyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgZm9yZWlnbklkID0gKDxhbnk+dGhpcylbcGFyYW1zLmtleUZpZWxkXTtcbiAgICAgICAgICAgIGxldCBmb3JlaWduTW9kZWw6IFJlc291cmNlTW9kZWw8YW55PjtcbiAgICAgICAgICAgIGlmIChmb3JlaWduSWQpIHtcbiAgICAgICAgICAgICAgLy8gY2hlY2sgY2FjaGVkXG4gICAgICAgICAgICAgIGlmICh0aGlzLiRjYWNoZWRSZWxhdGVkW3Byb3BlcnR5S2V5XSAmJiB0aGlzLiRjYWNoZWRSZWxhdGVkW3Byb3BlcnR5S2V5XS5pZCA9PT0gZm9yZWlnbklkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGNhY2hlZFJlbGF0ZWRbcHJvcGVydHlLZXldLmRhdGE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyB0cnkgdG8gZ2V0IGZyb20gc3RvcmFnZSBvciBmcm9tIHJlc291cmNlXG4gICAgICAgICAgICAgIGNvbnN0IGZvcmVpZ25SZXNvdXJjZTogUmVzb3VyY2UgPSAoPGFueT5SZWZsZWN0KS5nZXRNZXRhZGF0YSgncmVzb3VyY2UnLCBwYXJhbXMudGFyZ2V0KTtcbiAgICAgICAgICAgICAgaWYgKCEhZm9yZWlnblJlc291cmNlICYmICEhZm9yZWlnblJlc291cmNlLnN0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICAgZm9yZWlnbk1vZGVsID0gZ2V0Rm9yZWlnbkZyb21TdG9yYWdlKGZvcmVpZ25JZCwgZm9yZWlnblJlc291cmNlLnN0b3JhZ2UpO1xuICAgICAgICAgICAgICAgICBpZiAoIWZvcmVpZ25Nb2RlbCkge1xuICAgICAgICAgICAgICAgICAgIGZvcmVpZ25Nb2RlbCA9IGdldEZvcmVpZ25Gcm9tUmVzb3VyY2UoZm9yZWlnbklkLCBmb3JlaWduUmVzb3VyY2UpO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoISFmb3JlaWduUmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBmb3JlaWduTW9kZWwgPSBnZXRGb3JlaWduRnJvbVJlc291cmNlKGZvcmVpZ25JZCwgZm9yZWlnblJlc291cmNlKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAvL2NhY2hlIGl0IGFuZCByZXR1cm5cbiAgICAgICAgICAgICAgaWYgKCEhZm9yZWlnbk1vZGVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY2FjaGVkUmVsYXRlZFtwcm9wZXJ0eUtleV0gPSB7aWQ6IGZvcmVpZ25JZCwgZGF0YTogZm9yZWlnbk1vZGVsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9yZWlnbk1vZGVsO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2ZpZWxkcy9Gb3JlaWduS2V5LnRzIiwiZXhwb3J0IHsgRm9yZWlnbktleSB9IGZyb20gJy4vRm9yZWlnbktleSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvZmllbGRzL2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE5X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==