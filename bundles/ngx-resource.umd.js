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
                        resp = mockCollection(propertyKey, usedPathParamsValues, searchParams, JSON.parse(body), methodOptions.method);
                    }
                    else {
                        resp = getMockedResponse(mockCollection, usedPathParamsValues, searchParams, JSON.parse(body), methodOptions.method);
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
function getMockedResponse(collection, params, searchParams, data, requestMethod) {
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
        var resource = Reflect.getMetadata('resource', this.constructor);
        this.$resource = !!resource && resource.constructor.instance;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyZWFiYzYxMWVjODE5ZDhhYThmOCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VHbG9iYWxDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlUHJvdmlkZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZVN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JhZ2VBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9SeFwiIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL25neC1yZXNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VDUlVELnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUNSVURCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZVBhcmFtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VsZWN0U3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRzL0ZvcmVpZ25LZXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FB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QUM7d0JBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUMsQ0FBQzt3QkFDdkUsTUFBTSxDQUFDLFlBQVksQ0FBQztvQkFDdEIsQ0FBQztnQkFFSCxDQUFDO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7QUMxRHlDOzs7Ozs7O0FDQTFDLGdEIiwiZmlsZSI6Im5neC1yZXNvdXJjZS51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIpLCByZXF1aXJlKFwicnhqcy9SeFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9odHRwXCIsIFwiQGFuZ3VsYXIvY29yZVwiLCBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIsIFwicnhqcy9SeFwiLCBcIkBhbmd1bGFyL2NvbW1vblwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZ3gtcmVzb3VyY2VcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIpLCByZXF1aXJlKFwicnhqcy9SeFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmd4LXJlc291cmNlXCJdID0gZmFjdG9yeShyb290W1wiQGFuZ3VsYXIvaHR0cFwiXSwgcm9vdFtcIkBhbmd1bGFyL2NvcmVcIl0sIHJvb3RbXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiXSwgcm9vdFtcInJ4anMvUnhcIl0sIHJvb3RbXCJAYW5ndWxhci9jb21tb25cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTlfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJlYWJjNjExZWM4MTlkOGFhOGY4IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBIdHRwLCBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgUmVzb3VyY2VHbG9iYWxDb25maWcgfSBmcm9tICcuL1Jlc291cmNlR2xvYmFsQ29uZmlnJztcbmltcG9ydCB7UmVzb3VyY2VQYXJhbXNCYXNlLCBSZXNvdXJjZVJlc3VsdH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlQWN0aW9uQmFzZSB9IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZU1vZGVsIH0gZnJvbSAnLi9SZXNvdXJjZU1vZGVsJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcbmltcG9ydCB7UmVzb3VyY2VTdG9yYWdlfSBmcm9tIFwiLi9SZXNvdXJjZVN0b3JhZ2VcIjtcblxuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2Uge1xuXG4gIHByb3RlY3RlZCBzdGF0aWMgX2luaXQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4odW5kZWZpbmVkKTtcblxuICBwcm90ZWN0ZWQgc3RhdGljIF9zdG9yYWdlOiBSZXNvdXJjZVN0b3JhZ2UgPSB1bmRlZmluZWQ7XG5cbiAgc3RhdGljIGluaXQ6IE9ic2VydmFibGU8YW55PiA9IE9ic2VydmFibGUub2YodW5kZWZpbmVkKTtcbiAgc3RhdGljIGluc3RhbmNlOiBSZXNvdXJjZSA9IHVuZGVmaW5lZDtcblxuICBwcml2YXRlIF91cmw6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgX3BhdGg6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgX2hlYWRlcnM6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX3BhcmFtczogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfZGF0YTogYW55ID0gbnVsbDtcblxuICBzdG9yYWdlTG9hZDogKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXNvdXJjZVJlc3VsdDxhbnk+O1xuICBzdG9yYWdlOiBSZXNvdXJjZVN0b3JhZ2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHA6IEh0dHAsIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLmluaXRSZXN1bHRPYmplY3QoKTtcbiAgICAoPGFueT5SZWZsZWN0KS5kZWZpbmVNZXRhZGF0YSgncmVzb3VyY2UnLCB0aGlzLCBtb2RlbC5jb25zdHJ1Y3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG1haW4gdXJsIG9mIHRoZSByZXNvdXJjZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfFByb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIGdldFVybChtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fdXJsIHx8IHRoaXMuX2dldFVybChtZXRob2RPcHRpb25zKSB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy51cmwgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHJlc291cmNlIHVybFxuICAgKiBAcGFyYW0gdXJsXG4gICAqL1xuICBzZXRVcmwodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91cmwgPSB1cmw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHBhdGggb2YgdGhlIHJlc291cmNlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd8UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgZ2V0UGF0aChtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aCB8fCB0aGlzLl9nZXRQYXRoKG1ldGhvZE9wdGlvbnMpIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLnBhdGggfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHJlc291cmNlIHBhdGhcbiAgICogQHBhcmFtIHBhdGhcbiAgICovXG4gIHNldFBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGF0aCA9IHBhdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGhlYWRlcnNcbiAgICogQHJldHVybnMge2FueXxQcm9taXNlPGFueT59XG4gICAqL1xuICBnZXRIZWFkZXJzKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJzIHx8IHRoaXMuX2dldEhlYWRlcnMobWV0aG9kT3B0aW9ucykgfHwgUmVzb3VyY2VHbG9iYWxDb25maWcuaGVhZGVycyB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcmVzb3VyY2UgaGVhZGVyc1xuICAgKiBAcGFyYW0gaGVhZGVyc1xuICAgKi9cbiAgc2V0SGVhZGVycyhoZWFkZXJzOiBhbnkpIHtcbiAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGVmYXVsdCBwYXJhbXNcbiAgICogQHJldHVybnMge2FueXxQcm9taXNlPGFueT58e319XG4gICAqL1xuICBnZXRQYXJhbXMobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IGFueSB8IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtcyB8fCB0aGlzLl9nZXRQYXJhbXMobWV0aG9kT3B0aW9ucykgfHwgUmVzb3VyY2VHbG9iYWxDb25maWcucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkZWZhdWx0IHJlc291cmNlIHBhcmFtc1xuICAgKiBAcGFyYW0gcGFyYW1zXG4gICAqL1xuICBzZXRQYXJhbXMocGFyYW1zOiBhbnkpIHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlZmF1bHQgZGF0YVxuICAgKiBAcmV0dXJucyB7YW55fFByb21pc2U8YW55Pnx7fX1cbiAgICovXG4gIGdldERhdGEobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IGFueSB8IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGEgfHwgdGhpcy5fZ2V0RGF0YShtZXRob2RPcHRpb25zKSB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy5kYXRhIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkZWZhdWx0IHJlc291cmNlIHBhcmFtc1xuICAgKiBAcGFyYW0gZGF0YVxuICAgKi9cbiAgc2V0RGF0YShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFRoYXQgaXMgY2FsbGVkIGJlZm9yZSBleGVjdXRpbmcgcmVxdWVzdFxuICAgKiBAcGFyYW0gcmVxXG4gICAqL1xuICByZXF1ZXN0SW50ZXJjZXB0b3IocmVxOiBSZXF1ZXN0LCBtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogUmVxdWVzdCB7XG4gICAgcmV0dXJuIHJlcTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IG9ic2VydmFibGUgaW50ZXJjZXB0b3JcbiAgICogQHBhcmFtIG9ic2VydmFibGVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIHJlc3BvbnNlSW50ZXJjZXB0b3Iob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+LCByZXE6IFJlcXVlc3QsIG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlLm1hcChyZXMgPT4gcmVzLl9ib2R5ID8gcmVzLmpzb24oKSA6IG51bGwpO1xuICB9XG5cbiAgcmVtb3ZlVHJhaWxpbmdTbGFzaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluaXRSZXN1bHRPYmplY3QoKTogYW55IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBtYXAoaXRlbTogYW55KTogYW55IHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGZpbHRlcihpdGVtOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldFJlc291cmNlT3B0aW9ucygpOiBSZXNvdXJjZVBhcmFtc0Jhc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cblxuICBjcmVhdGVNb2RlbCgpOiBSZXNvdXJjZU1vZGVsPGFueT4ge1xuICAgIGxldCByZXQgPSB0aGlzLmluaXRSZXN1bHRPYmplY3QoKTtcbiAgICByZXQuJHJlc291cmNlID0gdGhpcztcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cblxuXG5cbiAgcHJvdGVjdGVkIF9yZXF1ZXN0KHJlcTogUmVxdWVzdCwgbWV0aG9kT3B0aW9uczogUmVzb3VyY2VBY3Rpb25CYXNlID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgbGV0IHJlcXVlc3RPYnNlcnZhYmxlID0gdGhpcy5odHRwLnJlcXVlc3QocmVxKTtcblxuICAgIC8vIG5vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VmFsaWRhdGVUeXBlc1xuICAgIHJldHVybiBtZXRob2RPcHRpb25zLnJlc3BvbnNlSW50ZXJjZXB0b3IgP1xuICAgICAgbWV0aG9kT3B0aW9ucy5yZXNwb25zZUludGVyY2VwdG9yLmJpbmQodGhpcykocmVxdWVzdE9ic2VydmFibGUsIHJlcSwgbWV0aG9kT3B0aW9ucykgOlxuICAgICAgdGhpcy5yZXNwb25zZUludGVyY2VwdG9yKHJlcXVlc3RPYnNlcnZhYmxlLCByZXEsIG1ldGhvZE9wdGlvbnMpO1xuXG4gIH1cblxuXG4gIHByaXZhdGUgX2dldFVybChtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogc3RyaW5nfFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYXRoKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBzdHJpbmd8UHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEhlYWRlcnMobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IGFueSB8IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYXJhbXMobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IGFueSB8IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9nZXREYXRhKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlLnRzIiwiaW1wb3J0IHsgSGVhZGVycywgUmVxdWVzdCwgUmVxdWVzdE1ldGhvZCwgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7XG4gIFJlc291cmNlQWN0aW9uQmFzZSwgUmVzb3VyY2VSZXNwb25zZUZpbHRlciwgUmVzb3VyY2VSZXNwb25zZUluaXRSZXN1bHQsIFJlc291cmNlUmVzcG9uc2VNYXAsXG4gIFJlc291cmNlUmVzdWx0XG59IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuaW1wb3J0IHsgUmVzb3VyY2VNb2RlbCB9IGZyb20gJy4vUmVzb3VyY2VNb2RlbCc7XG5pbXBvcnQgeyBDb25uZWN0YWJsZU9ic2VydmFibGUsIE9ic2VydmFibGUsIFN1YnNjcmliZXIsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgUmVzb3VyY2VHbG9iYWxDb25maWcsIFRHZXRQYXJhbXNNYXBwaW5nVHlwZSB9IGZyb20gJy4vUmVzb3VyY2VHbG9iYWxDb25maWcnO1xuaW1wb3J0IHtTdG9yYWdlQWN0aW9ufSBmcm9tIFwiLi9TdG9yYWdlQWN0aW9uXCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gUmVzb3VyY2VBY3Rpb24obWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSkge1xuXG4gIG1ldGhvZE9wdGlvbnMgPSBtZXRob2RPcHRpb25zIHx8IHt9O1xuXG4gIGlmIChtZXRob2RPcHRpb25zLm1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWV0aG9kT3B0aW9ucy5tZXRob2QgPSBSZXF1ZXN0TWV0aG9kLkdldDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBSZXNvdXJjZSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xuXG4gICAgKDxhbnk+dGFyZ2V0KVtwcm9wZXJ0eUtleV0gPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pOiBSZXNvdXJjZVJlc3VsdDxhbnk+IHwgUmVzb3VyY2VNb2RlbDxhbnk+IHtcblxuICAgICAgbGV0IGRhdGEgPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiBudWxsO1xuICAgICAgbGV0IHBhcmFtcyA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBudWxsO1xuICAgICAgbGV0IGNhbGxiYWNrID0gYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IG51bGw7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayA9IGRhdGE7XG4gICAgICAgIGRhdGEgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrID0gcGFyYW1zO1xuICAgICAgICBwYXJhbXMgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBsZXQgcmVzb3VyY2VPcHRpb25zID0gdGhpcy5nZXRSZXNvdXJjZU9wdGlvbnMoKTtcblxuICAgICAgY29uc3QgbW9ja1JlcXVlc3QgPSBSZXNvdXJjZUdsb2JhbENvbmZpZy5tb2NrUmVzcG9uc2VzICYmIHJlc291cmNlT3B0aW9ucy5tb2NrICE9PSBmYWxzZSAmJiBtZXRob2RPcHRpb25zLm1vY2sgIT09IGZhbHNlICYmICghIW1ldGhvZE9wdGlvbnMubW9ja0NvbGxlY3Rpb24gfHwgISFyZXNvdXJjZU9wdGlvbnMubW9ja0NvbGxlY3Rpb24pO1xuXG4gICAgICBsZXQgaXNHZXRSZXF1ZXN0ID0gbWV0aG9kT3B0aW9ucy5tZXRob2QgPT09IFJlcXVlc3RNZXRob2QuR2V0O1xuXG4gICAgICBsZXQgcmV0OiBSZXNvdXJjZVJlc3VsdDxhbnk+IHwgUmVzb3VyY2VNb2RlbDxhbnk+ID0gbnVsbDtcblxuICAgICAgbGV0IG1hcDogUmVzb3VyY2VSZXNwb25zZU1hcCA9IG1ldGhvZE9wdGlvbnMubWFwID8gbWV0aG9kT3B0aW9ucy5tYXAuYmluZCh0aGlzKSA6IHRoaXMubWFwO1xuICAgICAgbGV0IGZpbHRlcjogUmVzb3VyY2VSZXNwb25zZUZpbHRlciA9IG1ldGhvZE9wdGlvbnMuZmlsdGVyID8gbWV0aG9kT3B0aW9ucy5maWx0ZXIgOiB0aGlzLmZpbHRlcjtcbiAgICAgIGxldCBpbml0T2JqZWN0OiBSZXNvdXJjZVJlc3BvbnNlSW5pdFJlc3VsdCA9IG1ldGhvZE9wdGlvbnMuaW5pdFJlc3VsdE9iamVjdCA/XG4gICAgICAgIG1ldGhvZE9wdGlvbnMuaW5pdFJlc3VsdE9iamVjdC5iaW5kKHRoaXMpIDogdGhpcy5pbml0UmVzdWx0T2JqZWN0O1xuXG4gICAgICBpZiAobWV0aG9kT3B0aW9ucy5pc0xhenkpIHtcbiAgICAgICAgcmV0ID0ge307XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmIChtZXRob2RPcHRpb25zLmlzQXJyYXkpIHtcbiAgICAgICAgICByZXQgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuJHJlc291cmNlID09PSB0aGlzKSB7XG4gICAgICAgICAgICAvLyBTZXR0aW5nIGRhdGEgdG8gcmV0XG4gICAgICAgICAgICByZXQgPSBkYXRhO1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEudG9KU09OID8gZGF0YS50b0pTT04oKSA6IHRvSlNPTihkYXRhKTtcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXQgPSBpbml0T2JqZWN0LmJpbmQodGhpcykoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGxldCBtYWluRGVmZXJyZWRTdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4gPSBudWxsO1xuICAgICAgbGV0IG1haW5PYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiA9IG51bGw7XG5cbiAgICAgIHJldC4kcmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgIHJldC4kb2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHtcbiAgICAgICAgbWFpbkRlZmVycmVkU3Vic2NyaWJlciA9IHN1YnNjcmliZXI7XG4gICAgICB9KS5mbGF0TWFwKCgpID0+IG1haW5PYnNlcnZhYmxlKTtcbiAgICAgIHJldC4kYWJvcnRSZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICByZXQuJHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgIH07XG4gICAgICByZXQuJHJlc291cmNlID0gdGhpcztcblxuXG4gICAgICBmdW5jdGlvbiByZWxlYXNlTWFpbkRlZmVycmVkU3Vic2NyaWJlcigpIHtcbiAgICAgICAgaWYgKG1haW5EZWZlcnJlZFN1YnNjcmliZXIpIHtcbiAgICAgICAgICBtYWluRGVmZXJyZWRTdWJzY3JpYmVyLm5leHQoKTtcbiAgICAgICAgICBtYWluRGVmZXJyZWRTdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgbWFpbkRlZmVycmVkU3Vic2NyaWJlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFtZXRob2RPcHRpb25zLmlzTGF6eSkge1xuICAgICAgICByZXQuJG9ic2VydmFibGUgPSByZXQuJG9ic2VydmFibGUucHVibGlzaCgpO1xuICAgICAgICAoPENvbm5lY3RhYmxlT2JzZXJ2YWJsZTxhbnk+PnJldC4kb2JzZXJ2YWJsZSkuY29ubmVjdCgpO1xuICAgICAgfVxuXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShtZXRob2RPcHRpb25zLnVybCB8fCB0aGlzLmdldFVybChtZXRob2RPcHRpb25zKSksXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShtZXRob2RPcHRpb25zLnBhdGggfHwgdGhpcy5nZXRQYXRoKG1ldGhvZE9wdGlvbnMpKSxcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1ldGhvZE9wdGlvbnMuaGVhZGVycyB8fCB0aGlzLmdldEhlYWRlcnMobWV0aG9kT3B0aW9ucykpLFxuICAgICAgICBQcm9taXNlLnJlc29sdmUobWV0aG9kT3B0aW9ucy5wYXJhbXMgfHwgdGhpcy5nZXRQYXJhbXMobWV0aG9kT3B0aW9ucykpLFxuICAgICAgICBQcm9taXNlLnJlc29sdmUobWV0aG9kT3B0aW9ucy5kYXRhIHx8IHRoaXMuZ2V0RGF0YShtZXRob2RPcHRpb25zKSlcbiAgICAgIF0pXG4gICAgICAgIC50aGVuKChkYXRhQWxsOiBhbnlbXSkgPT4ge1xuXG4gICAgICAgICAgaWYgKHJldC4kcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIG1haW5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChudWxsKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZWxlYXNlTWFpbkRlZmVycmVkU3Vic2NyaWJlcigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCB1cmw6IHN0cmluZyA9IGRhdGFBbGxbMF0gKyBkYXRhQWxsWzFdO1xuICAgICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoZGF0YUFsbFsyXSk7XG4gICAgICAgICAgbGV0IGRlZlBhdGhQYXJhbXMgPSBkYXRhQWxsWzNdO1xuXG4gICAgICAgICAgbGV0IHVzZWRQYXRoUGFyYW1zOiBhbnkgPSB7fTtcbiAgICAgICAgICBsZXQgdXNlZFBhdGhQYXJhbXNWYWx1ZXM6IGFueSA9IHt9O1xuXG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpIHx8IHBhcmFtcykge1xuXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFBbGxbNF0sIGRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcGF0aFBhcmFtcyA9IHVybC5tYXRjaCgveyhbXn1dKil9L2cpIHx8IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhQYXJhbXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICBsZXQgcGF0aFBhcmFtID0gcGF0aFBhcmFtc1tpXTtcblxuICAgICAgICAgICAgICBsZXQgcGF0aEtleSA9IHBhdGhQYXJhbS5zdWJzdHIoMSwgcGF0aFBhcmFtLmxlbmd0aCAtIDIpO1xuICAgICAgICAgICAgICBsZXQgaXNNYW5kYXRvcnkgPSBwYXRoS2V5WzBdID09PSAnISc7XG4gICAgICAgICAgICAgIGlmIChpc01hbmRhdG9yeSkge1xuICAgICAgICAgICAgICAgIHBhdGhLZXkgPSBwYXRoS2V5LnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBpc0dldE9ubHkgPSBwYXRoS2V5WzBdID09PSAnOic7XG4gICAgICAgICAgICAgIGlmIChpc0dldE9ubHkpIHtcbiAgICAgICAgICAgICAgICBwYXRoS2V5ID0gcGF0aEtleS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBnZXRWYWx1ZUZvclBhdGgocGF0aEtleSwgZGVmUGF0aFBhcmFtcywgcGFyYW1zIHx8IGRhdGEsIHVzZWRQYXRoUGFyYW1zKTtcbiAgICAgICAgICAgICAgaWYgKGlzR2V0T25seSAmJiAhcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFbcGF0aEtleV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTWFuZGF0b3J5KSB7XG5cbiAgICAgICAgICAgICAgICAgIGxldCBjb25zb2xlTXNnID0gYE1hbmRhdG9yeSAke3BhdGhQYXJhbX0gcGF0aCBwYXJhbWV0ZXIgaXMgbWlzc2luZ2A7XG5cbiAgICAgICAgICAgICAgICAgIG1haW5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEVycm9yKGNvbnNvbGVNc2cpKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oY29uc29sZU1zZyk7XG5cbiAgICAgICAgICAgICAgICAgIHJlbGVhc2VNYWluRGVmZXJyZWRTdWJzY3JpYmVyKCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cigwLCB1cmwuaW5kZXhPZihwYXRoUGFyYW0pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1c2VkUGF0aFBhcmFtc1ZhbHVlc1twYXRoS2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIC8vIFJlcGxhY2luZyBpbiB0aGUgdXJsXG4gICAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKHBhdGhQYXJhbSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZpbmcgZG91YmxlIHNsYXNoZWQgZnJvbSBmaW5hbCB1cmxcbiAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwvXFwvKy9nLCAnLycpO1xuICAgICAgICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgnOi8nLCAnOi8vJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZlIHRyYWlsaW5nIHNsYXNoXG4gICAgICAgICAgaWYgKHR5cGVvZiBtZXRob2RPcHRpb25zLnJlbW92ZVRyYWlsaW5nU2xhc2ggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBtZXRob2RPcHRpb25zLnJlbW92ZVRyYWlsaW5nU2xhc2ggPSB0aGlzLnJlbW92ZVRyYWlsaW5nU2xhc2goKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1ldGhvZE9wdGlvbnMucmVtb3ZlVHJhaWxpbmdTbGFzaCkge1xuICAgICAgICAgICAgd2hpbGUgKHVybFt1cmwubGVuZ3RoIC0gMV0gPT09ICcvJykge1xuICAgICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDAsIHVybC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC8vIFJlbW92ZSBtYXBwZWQgcGFyYW1zXG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIGRlZlBhdGhQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChkZWZQYXRoUGFyYW1zW2tleV1bMF0gPT09ICdAJykge1xuICAgICAgICAgICAgICBkZWxldGUgZGVmUGF0aFBhcmFtc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy8gRGVmYXVsdCBzZWFyY2ggcGFyYW1zIG9yIGRhdGFcbiAgICAgICAgICBsZXQgYm9keTogc3RyaW5nID0gbnVsbDtcblxuICAgICAgICAgIGxldCBzZWFyY2hQYXJhbXM6IGFueTtcbiAgICAgICAgICBpZiAoaXNHZXRSZXF1ZXN0KSB7XG4gICAgICAgICAgICAvLyBHRVRcbiAgICAgICAgICAgIHNlYXJjaFBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZlBhdGhQYXJhbXMsIGRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBOT04gR0VUXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICBsZXQgX2JvZHk6IGFueSA9IHt9O1xuICAgICAgICAgICAgICBpZiAobWV0aG9kT3B0aW9ucy5yb290Tm9kZSkge1xuICAgICAgICAgICAgICAgIF9ib2R5W2Ake21ldGhvZE9wdGlvbnMucm9vdE5vZGV9YF0gPSBkYXRhO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9ib2R5ID0gZGF0YTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoX2JvZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VhcmNoUGFyYW1zID0gZGVmUGF0aFBhcmFtcztcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC8vIFNldHRpbmcgc2VhcmNoIHBhcmFtc1xuICAgICAgICAgIGxldCBzZWFyY2g6IFVSTFNlYXJjaFBhcmFtcyA9ICEhbWV0aG9kT3B0aW9ucy5xdWVyeUVuY29kZXIgPyBuZXcgVVJMU2VhcmNoUGFyYW1zKCcnLCBuZXcgbWV0aG9kT3B0aW9ucy5xdWVyeUVuY29kZXIoKSkgOiBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG5cbiAgICAgICAgICBpZiAoIXBhcmFtcykge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHNlYXJjaFBhcmFtcykge1xuICAgICAgICAgICAgICBpZiAoc2VhcmNoUGFyYW1zLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVzZWRQYXRoUGFyYW1zW2tleV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IGFueSA9IHNlYXJjaFBhcmFtc1trZXldO1xuICAgICAgICAgICAgICAgIGFwcGVuZFNlYXJjaFBhcmFtcyhzZWFyY2gsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQWRkaW5nIFRTIGlmIG5lZWRlZFxuICAgICAgICAgIGxldCB0c05hbWUgPSBtZXRob2RPcHRpb25zLmFkZFRpbWVzdGFtcCB8fCByZXNvdXJjZU9wdGlvbnMuYWRkVGltZXN0YW1wO1xuICAgICAgICAgIGlmICh0c05hbWUpIHtcbiAgICAgICAgICAgIGlmICh0c05hbWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgdHNOYW1lID0gJ3RzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlYXJjaC5hcHBlbmQodHNOYW1lLCAnJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1vdmluZyBDb250ZW50LVR5cGUgaGVhZGVyIGlmIG5vIGJvZHlcbiAgICAgICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgICAgIGhlYWRlcnMuZGVsZXRlKCdjb250ZW50LXR5cGUnKTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC8vIENyZWF0aW5nIHJlcXVlc3Qgb3B0aW9uc1xuICAgICAgICAgIGxldCByZXF1ZXN0T3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZE9wdGlvbnMubWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHNlYXJjaDogc2VhcmNoLFxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBtZXRob2RPcHRpb25zLndpdGhDcmVkZW50aWFscyB8fCByZXNvdXJjZU9wdGlvbnMud2l0aENyZWRlbnRpYWxzXG4gICAgICAgICAgfSk7XG5cblxuICAgICAgICAgIC8vIENyZWF0aW5nIHJlcXVlc3Qgb2JqZWN0XG4gICAgICAgICAgbGV0IHJlcSA9IG5ldyBSZXF1ZXN0KHJlcXVlc3RPcHRpb25zKTtcblxuICAgICAgICAgIHJlcSA9IG1ldGhvZE9wdGlvbnMucmVxdWVzdEludGVyY2VwdG9yID9cbiAgICAgICAgICAgIG1ldGhvZE9wdGlvbnMucmVxdWVzdEludGVyY2VwdG9yKHJlcSwgbWV0aG9kT3B0aW9ucykgOlxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SW50ZXJjZXB0b3IocmVxLCBtZXRob2RPcHRpb25zKTtcblxuICAgICAgICAgIGlmICghcmVxKSB7XG4gICAgICAgICAgICBtYWluT2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKG5ldyBFcnJvcignUmVxdWVzdCBpcyBudWxsJykpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybignUmVxdWVzdCBpcyBudWxsJyk7XG5cbiAgICAgICAgICAgIHJlbGVhc2VNYWluRGVmZXJyZWRTdWJzY3JpYmVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHJlcXVlc3RPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICAgICAgICBpZiAobW9ja1JlcXVlc3QpIHtcbiAgICAgICAgICAgIGxldCBtb2NrQ29sbGVjdGlvbiA9ICEhbWV0aG9kT3B0aW9ucy5tb2NrQ29sbGVjdGlvbiA/IG1ldGhvZE9wdGlvbnMubW9ja0NvbGxlY3Rpb24gOiB7Y29sbGVjdGlvbjogcmVzb3VyY2VPcHRpb25zLm1vY2tDb2xsZWN0aW9ufTtcbiAgICAgICAgICAgIGxldCByZXNwOiBhbnkgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtb2NrQ29sbGVjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICByZXNwID0gbW9ja0NvbGxlY3Rpb24ocHJvcGVydHlLZXksIHVzZWRQYXRoUGFyYW1zVmFsdWVzLCBzZWFyY2hQYXJhbXMsIEpTT04ucGFyc2UoYm9keSksIG1ldGhvZE9wdGlvbnMubWV0aG9kKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3AgPSBnZXRNb2NrZWRSZXNwb25zZShtb2NrQ29sbGVjdGlvbiwgdXNlZFBhdGhQYXJhbXNWYWx1ZXMsIHNlYXJjaFBhcmFtcywgSlNPTi5wYXJzZShib2R5KSwgbWV0aG9kT3B0aW9ucy5tZXRob2QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzcCA9IG5ldyBGYWtlUmVzcG9uc2UocmVzcCk7XG4gICAgICAgICAgICByZXF1ZXN0T2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuZnJvbShbcmVzcF0pO1xuXG4gICAgICAgICAgICAvLyBub2luc3BlY3Rpb24gVHlwZVNjcmlwdFZhbGlkYXRlVHlwZXNcbiAgICAgICAgICAgIHJlcXVlc3RPYnNlcnZhYmxlID0gbWV0aG9kT3B0aW9ucy5yZXNwb25zZUludGVyY2VwdG9yID9cbiAgICAgICAgICAgICAgbWV0aG9kT3B0aW9ucy5yZXNwb25zZUludGVyY2VwdG9yLmJpbmQodGhpcykocmVxdWVzdE9ic2VydmFibGUsIHJlcSwgbWV0aG9kT3B0aW9ucykgOlxuICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlSW50ZXJjZXB0b3IocmVxdWVzdE9ic2VydmFibGUsIHJlcSwgbWV0aG9kT3B0aW9ucyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIERvaW5nIHRoZSByZXF1ZXN0XG4gICAgICAgICAgICByZXF1ZXN0T2JzZXJ2YWJsZSA9IHRoaXMuX3JlcXVlc3QocmVxLCBtZXRob2RPcHRpb25zKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWV0aG9kT3B0aW9ucy5pc0xhenkpIHtcblxuICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSByZXF1ZXN0T2JzZXJ2YWJsZTtcblxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIG1haW5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PikgPT4ge1xuXG4gICAgICAgICAgICAgIGxldCByZXFTdWJzY3I6IFN1YnNjcmlwdGlvbiA9IHJlcXVlc3RPYnNlcnZhYmxlLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAocmVzcDogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChyZXNwICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGhvZE9wdGlvbnMuaXNBcnJheSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0aW5nIGFycmF5XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JldHVybmVkIGRhdGEgc2hvdWxkIGJlIGFuIGFycmF5LiBSZWNlaXZlZCcsIHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXNwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmaWx0ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChtYXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzcEl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcEl0ZW0uJHJlc291cmNlID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXREYXRhVG9PYmplY3QoaW5pdE9iamVjdC5iaW5kKHJlc3BJdGVtLiRyZXNvdXJjZSkoKSwgcmVzcEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBFeHBlY3Rpbmcgb2JqZWN0XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUmV0dXJuZWQgZGF0YSBzaG91bGQgYmUgYW4gb2JqZWN0LiBSZWNlaXZlZCcsIHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIocmVzcCkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhVG9PYmplY3QocmV0LCBtYXAocmVzcCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0LiRyZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocmV0KTtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycjogYW55KSA9PiBzdWJzY3JpYmVyLmVycm9yKGVyciksXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0LiRyZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmV0KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgcmV0LiRhYm9ydFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJldC4kcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVxU3Vic2NyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgcmV0LiRyZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEhdGhpcy5zdG9yYWdlICYmICEhbWV0aG9kT3B0aW9ucy5zdG9yYWdlQWN0aW9uKSB7XG4gICAgICAgICAgICBtYWluT2JzZXJ2YWJsZSA9IG1haW5PYnNlcnZhYmxlLmRvKChyZXNwOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgbWV0aG9kT3B0aW9ucy5zdG9yYWdlQWN0aW9uLmJpbmQodGhpcykodGhpcy5zdG9yYWdlLCByZXNwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbGVhc2VNYWluRGVmZXJyZWRTdWJzY3JpYmVyKCk7XG5cblxuXG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmV0O1xuXG4gICAgfTtcblxuICAgIGlmICghIW1ldGhvZE9wdGlvbnMuc3RvcmFnZUFjdGlvbiAmJiBtZXRob2RPcHRpb25zLnN0b3JhZ2VBY3Rpb24gPT09IFN0b3JhZ2VBY3Rpb24uTE9BRCkge1xuICAgICAgICB0YXJnZXQuc3RvcmFnZUxvYWQgPSAoPGFueT50YXJnZXQpW3Byb3BlcnR5S2V5XTtcbiAgICB9O1xuICB9O1xuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERhdGFUb09iamVjdChyZXQ6IGFueSwgcmVzcDogYW55KTogYW55IHtcblxuICBpZiAocmV0LiRzZXREYXRhKSB7XG4gICAgcmV0LiRzZXREYXRhKHJlc3ApO1xuICB9IGVsc2Uge1xuICAgIE9iamVjdC5hc3NpZ24ocmV0LCByZXNwKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFNlYXJjaFBhcmFtcyhzZWFyY2g6IFVSTFNlYXJjaFBhcmFtcywga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgLy8vIENvbnZlcnQgZGF0ZXMgdG8gSVNPIGZvcm1hdCBzdHJpbmdcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHNlYXJjaC5hcHBlbmQoa2V5LCB2YWx1ZS50b0lTT1N0cmluZygpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXG4gICAgc3dpdGNoIChSZXNvdXJjZUdsb2JhbENvbmZpZy5nZXRQYXJhbXNNYXBwaW5nVHlwZSkge1xuXG4gICAgICBjYXNlIFRHZXRQYXJhbXNNYXBwaW5nVHlwZS5QbGFpbjpcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBhcnJfdmFsdWUgb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIHNlYXJjaC5hcHBlbmQoa2V5LCBhcnJfdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLy8gQ29udmVydCBkYXRlcyB0byBJU08gZm9ybWF0IHN0cmluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2VhcmNoLmFwcGVuZChrZXksIHZhbHVlKTtcblxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFRHZXRQYXJhbXNNYXBwaW5nVHlwZS5CcmFja2V0OlxuICAgICAgICAvLy8gQ29udmVydCBvYmplY3QgYW5kIGFycmF5cyB0byBxdWVyeSBwYXJhbXNcbiAgICAgICAgZm9yIChsZXQgayBpbiB2YWx1ZSkge1xuICAgICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgYXBwZW5kU2VhcmNoUGFyYW1zKHNlYXJjaCwga2V5ICsgJ1snICsgayArICddJywgdmFsdWVba10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuXG4gIHNlYXJjaC5hcHBlbmQoa2V5LCB2YWx1ZSk7XG5cbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVGb3JQYXRoKGtleTogc3RyaW5nLCBwYXJhbXM6IGFueSwgZGF0YTogYW55LCB1c2VkUGF0aFBhcmFtczogYW55KTogc3RyaW5nIHtcblxuICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGRhdGFba2V5XSkgJiYgdHlwZW9mIGRhdGFba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICB1c2VkUGF0aFBhcmFtc1trZXldID0gdHJ1ZTtcbiAgICByZXR1cm4gZGF0YVtrZXldO1xuICB9XG5cbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKHBhcmFtc1trZXldKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHBhcmFtc1trZXldWzBdID09PSAnQCcpIHtcbiAgICByZXR1cm4gZ2V0VmFsdWVGb3JQYXRoKHBhcmFtc1trZXldLnN1YnN0cigxKSwgcGFyYW1zLCBkYXRhLCB1c2VkUGF0aFBhcmFtcyk7XG4gIH1cblxuICB1c2VkUGF0aFBhcmFtc1trZXldID0gdHJ1ZTtcbiAgcmV0dXJuIHBhcmFtc1trZXldO1xuXG59XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHRvSlNPTihvYmo6IGFueSk6YW55IHtcbiAgbGV0IHJldE9iajogYW55ID0ge307XG5cbiAgZm9yIChsZXQgcHJvcE5hbWUgaW4gb2JqKSB7XG5cbiAgICBpZiAoIShvYmpbcHJvcE5hbWVdIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICEocHJvcE5hbWUuY2hhckF0KDApID09PSAnJCcpKSB7XG4gICAgICByZXRPYmpbcHJvcE5hbWVdID0gb2JqW3Byb3BOYW1lXTtcbiAgICB9XG5cbiAgfVxuICByZXR1cm4gcmV0T2JqO1xufVxuXG5cbmNsYXNzIEZha2VSZXNwb25zZSB7XG4gIHByaXZhdGUgX3Jlc3A6IGFueTtcblxuICBjb25zdHJ1Y3RvcihyZXNwOiBhbnkpIHtcbiAgICB0aGlzLl9yZXNwID0gcmVzcDtcbiAgfVxuXG4gIGdldCBfYm9keSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl9yZXNwKTtcbiAgfVxuXG4gIGpzb24gPSAoKSA9PiB0aGlzLl9yZXNwO1xufVxuXG5cbmZ1bmN0aW9uIGdldE1vY2tlZFJlc3BvbnNlKGNvbGxlY3Rpb246IHtjb2xsZWN0aW9uOiBhbnksIGxvb2t1cFBhcmFtcz86IGFueX0sIHBhcmFtczogYW55LCBzZWFyY2hQYXJhbXM6IGFueSwgZGF0YTogYW55LCByZXF1ZXN0TWV0aG9kOiBSZXF1ZXN0TWV0aG9kKSB7XG4gIGlmIChyZXF1ZXN0TWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLkdldCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uY29sbGVjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjb2xsZWN0aW9uLmxvb2t1cFBhcmFtcyB8fCBPYmplY3Qua2V5cyhjb2xsZWN0aW9uLmxvb2t1cFBhcmFtcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBjb2xsZWN0aW9uLmNvbGxlY3Rpb247XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbVtrZXldID09PSBwYXJhbXNba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhIXJlc3VsdC5sZW5ndGggPyByZXN1bHRbMF0gOiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uY29sbGVjdGlvbi5maWx0ZXIoKGl0bTogYW55KSA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYm9vbGVhbiA9IHRydWU7XG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbGxlY3Rpb24ubG9va3VwUGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoY29sbGVjdGlvbi5sb29rdXBQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgcGFyYW1zW2tleV0gPT09IGl0bVtjb2xsZWN0aW9uLmxvb2t1cFBhcmFtc1trZXldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHJlcXVlc3RNZXRob2QgPT09IFJlcXVlc3RNZXRob2QuUG9zdCkge1xuICAgIGNvbGxlY3Rpb24uY29sbGVjdGlvbi5wdXNoKGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGVsc2UgaWYgKHJlcXVlc3RNZXRob2QgPT09IFJlcXVlc3RNZXRob2QuUHV0IHx8IHJlcXVlc3RNZXRob2QgPT09IFJlcXVlc3RNZXRob2QuUGF0Y2ggKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gY29sbGVjdGlvbi5jb2xsZWN0aW9uLmZpbmQoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgaWYgKGl0ZW1ba2V5XSAhPT0gcGFyYW1zW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICAgIGlmICghIXJlc3VsdCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwgZGF0YSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gIH0gZWxzZSBpZiAocmVxdWVzdE1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5EZWxldGUpIHtcbiAgICAgIGxldCByZXN1bHRJZHggPSBjb2xsZWN0aW9uLmNvbGxlY3Rpb24uZmluZEluZGV4KChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgICAgIGlmIChpdGVtW2tleV0gIT09IHBhcmFtc1trZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgICBjb2xsZWN0aW9uLmNvbGxlY3Rpb24uc3BsaWNlKHJlc3VsdElkeCwgMSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VBY3Rpb24udHMiLCJleHBvcnQgZW51bSBUR2V0UGFyYW1zTWFwcGluZ1R5cGUge1xuICBQbGFpbixcbiAgQnJhY2tldFxufVxuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VHbG9iYWxDb25maWcge1xuICBzdGF0aWMgdXJsOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4gPSBudWxsO1xuICBzdGF0aWMgcGF0aDogc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+ID0gbnVsbDtcbiAgc3RhdGljIGhlYWRlcnM6IGFueSB8IFByb21pc2U8YW55PiA9IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgfTtcbiAgc3RhdGljIHBhcmFtczogYW55IHwgUHJvbWlzZTxhbnk+ID0gbnVsbDtcbiAgc3RhdGljIGRhdGE6IGFueSB8IFByb21pc2U8YW55PiA9IG51bGw7XG5cbiAgc3RhdGljIGdldFBhcmFtc01hcHBpbmdUeXBlOiBhbnkgPSBUR2V0UGFyYW1zTWFwcGluZ1R5cGUuUGxhaW47XG4gIHN0YXRpYyBtb2NrUmVzcG9uc2VzOiBib29sZWFuID0gZmFsc2U7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VHbG9iYWxDb25maWcudHMiLCJpbXBvcnQgeyBJbmplY3RvciwgUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZVByb3ZpZGVycyB7XG5cbiAgc3RhdGljIG1haW5Qcm92aWRlcnNOYW1lOiBzdHJpbmcgPSAnX19tYWluUHJvdmlkZXJzJztcbiAgc3RhdGljIHByb3ZpZGVyczogeyBbaWQ6IHN0cmluZ106IFByb3ZpZGVyW10gfSA9IHtcbiAgICBfX21haW5Qcm92aWRlcnM6IFtdXG4gIH07XG5cbiAgc3RhdGljIGFkZChyZXNvdXJjZTogVHlwZTxSZXNvdXJjZT4sIHN1YlNldDogc3RyaW5nID0gbnVsbCkge1xuXG4gICAgaWYgKCFzdWJTZXQpIHtcbiAgICAgIHN1YlNldCA9IHRoaXMubWFpblByb3ZpZGVyc05hbWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnByb3ZpZGVyc1tzdWJTZXRdKSB7XG4gICAgICB0aGlzLnByb3ZpZGVyc1tzdWJTZXRdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGRlcHM6IGFueVtdID0gKDxhbnk+UmVmbGVjdCkuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgcmVzb3VyY2UpO1xuXG4gICAgaWYgKCFkZXBzIHx8IGRlcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZXBzID0gW0h0dHAsIEluamVjdG9yXTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3ZpZGVyc1tzdWJTZXRdLnB1c2goXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IHJlc291cmNlLFxuICAgICAgICB1c2VGYWN0b3J5OiAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IHJlc291cmNlKC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgICBkZXBzOiBkZXBzXG4gICAgICB9XG4gICAgKTtcblxuICB9XG5cbiAgc3RhdGljIGdldChzdWJTZXQ6IHN0cmluZyA9IG51bGwpOiBQcm92aWRlcltdIHtcblxuICAgIGlmICghc3ViU2V0KSB7XG4gICAgICBzdWJTZXQgPSB0aGlzLm1haW5Qcm92aWRlcnNOYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyc1tzdWJTZXRdIHx8IFtdO1xuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlUHJvdmlkZXJzLnRzIiwiaW1wb3J0IHtSZXNvdXJjZVN0b3JhZ2VQYXJhbXMsIFNlbGVjdGVkU3RvcmFnZX0gZnJvbSBcIi4vSW50ZXJmYWNlc1wiO1xuaW1wb3J0IHtSZXNvdXJjZX0gZnJvbSBcIi4vUmVzb3VyY2VcIjtcbmltcG9ydCB7VHlwZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcblxuZXhwb3J0IGNsYXNzIFJlc291cmNlU3RvcmFnZSB7XG4gIHByaXZhdGUgcXVlcnlQYXJhbXMgPSB7fTtcbiAgcHJpdmF0ZSBfaXRlcmF0aW9uUG9pbnRlciA9IDA7XG4gIHByaXZhdGUgbG9hZEltbWVkaWF0ZWx5ID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfcmVzdWx0U3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PFNlbGVjdGVkU3RvcmFnZTxhbnk+PjtcblxuICByZXN1bHQ6IFNlbGVjdGVkU3RvcmFnZTxhbnk+O1xuICByZXN1bHREYXRhOiBhbnlbXSA9IFtdO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvdXJjZTogVHlwZTxSZXNvdXJjZT4sIHBhcmFtczogUmVzb3VyY2VTdG9yYWdlUGFyYW1zKSB7XG4gICAgdGhpcy51cGRhdGVQYXJhbXMocGFyYW1zKTtcbiAgICB0aGlzLnJlc3VsdCA9IE9iamVjdC5hc3NpZ24odGhpcy5yZXN1bHREYXRhLCB7JGxvYWQ6IHRoaXMubG9hZC5iaW5kKHRoaXMpLCAkcmVzb2x2ZWQ6IGZhbHNlfSk7XG5cbiAgICB0aGlzLl9yZXN1bHRTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLnJlc3VsdCk7XG4gICAgdGhpcy5yZXN1bHQuJG9ic2VydmFibGUgPSB0aGlzLl9yZXN1bHRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgKDxhbnk+cmVzb3VyY2UpLmluaXQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICg8YW55PnRoaXMucmVzb3VyY2UpLmluc3RhbmNlLnN0b3JhZ2UgPSB0aGlzO1xuICAgICAgaWYgKHRoaXMubG9hZEltbWVkaWF0ZWx5KSB7XG4gICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXN1bHQuJHJlc291cmNlID0gKDxhbnk+dGhpcy5yZXNvdXJjZSkuaW5zdGFuY2U7XG4gICAgfSk7XG5cblxuICB9XG5cbiAgdXBkYXRlUGFyYW1zKHBhcmFtczogUmVzb3VyY2VTdG9yYWdlUGFyYW1zID0gPGFueT57fSkge1xuICAgIHRoaXMucXVlcnlQYXJhbXMgPSBwYXJhbXMucXVlcnlQYXJhbXMgfHwge307XG4gICAgdGhpcy5sb2FkSW1tZWRpYXRlbHkgPSBwYXJhbXMubG9hZEltbWVkaWF0ZWx5ID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZTtcbiAgfVxuXG4gIGxvYWQoYXJncz86IGFueSkge1xuICAgIGNvbnN0IHFwID0gISFhcmdzID8gYXJncyA6IHRoaXMucXVlcnlQYXJhbXM7XG4gICAgY29uc3QgYWN0aW9uID0gKDxhbnk+dGhpcy5yZXNvdXJjZSkuaW5zdGFuY2Uuc3RvcmFnZUxvYWQ7XG4gICAgaWYgKCEhYWN0aW9uKSB7XG4gICAgICBhY3Rpb24uYmluZCgoPGFueT50aGlzLnJlc291cmNlKS5pbnN0YW5jZSkocXApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBcIlN0b3JhZ2UgTE9BRCBhY3Rpb24gaXMgbm90IGRlZmluZWRcIjtcbiAgICB9XG4gIH1cblxuICBmb3JjZVJlZnJlc2goKSB7XG4gICAgdGhpcy5yZXN1bHQgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnJlc3VsdCk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnJlc3VsdCwgdGhpcy5yZXN1bHREYXRhKTtcbiAgICB0aGlzLnJlc3VsdC4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgIHRoaXMuX2l0ZXJhdGlvblBvaW50ZXIgPSAwO1xuICAgIHRoaXMuX3Jlc3VsdFN1YmplY3QubmV4dCh0aGlzLnJlc3VsdCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlU3RvcmFnZS50cyIsIlxuaW1wb3J0IHtSZXNvdXJjZVN0b3JhZ2V9IGZyb20gXCIuL1Jlc291cmNlU3RvcmFnZVwiO1xuXG5leHBvcnQgY29uc3QgU3RvcmFnZUFjdGlvbiA9IHtcbiAgTE9BRDogZnVuY3Rpb24gKHN0b3JhZ2U6IFJlc291cmNlU3RvcmFnZSwgcmVzcDogYW55KSB7XG4gICAgc3RvcmFnZS5yZXN1bHREYXRhID0gcmVzcC5maWx0ZXIoKGl0ZW06IGFueSkgPT4gISFpdGVtKTtcbiAgICBzdG9yYWdlLmZvcmNlUmVmcmVzaCgpO1xuICB9LFxuICBBREQ6IGZ1bmN0aW9uIChzdG9yYWdlOiBSZXNvdXJjZVN0b3JhZ2UsIHJlc3A6IGFueSkge1xuICAgIHN0b3JhZ2UucmVzdWx0RGF0YS5wdXNoKHJlc3ApO1xuICAgIHN0b3JhZ2UuZm9yY2VSZWZyZXNoKCk7XG4gIH0sXG4gIFVQREFURTogZnVuY3Rpb24gKHN0b3JhZ2U6IFJlc291cmNlU3RvcmFnZSwgcmVzcDogYW55KSB7XG4gICAgY29uc3QgcHJpbWFyeUtleSA9IHJlc3AuJHByaW1hcnlLZXkgfHwgJ2lkJztcbiAgICBjb25zdCBpZHggPSBzdG9yYWdlLnJlc3VsdERhdGEuZmluZEluZGV4KGl0ZW0gPT4gaXRlbVtwcmltYXJ5S2V5XSA9PT0gcmVzcFtwcmltYXJ5S2V5XSk7XG4gICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICBzdG9yYWdlLnJlc3VsdERhdGFbaWR4XSA9IHJlc3A7XG4gICAgICBzdG9yYWdlLmZvcmNlUmVmcmVzaCgpO1xuICAgIH1cbiAgfSxcbiAgUkVNT1ZFOiBmdW5jdGlvbiAoc3RvcmFnZTogUmVzb3VyY2VTdG9yYWdlLCByZXNwOiBhbnkpIHtcbiAgICBjb25zdCBwcmltYXJ5S2V5ID0gcmVzcC4kcHJpbWFyeUtleSB8fCAnaWQnO1xuICAgIGNvbnN0IGlkeCA9IHN0b3JhZ2UucmVzdWx0RGF0YS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtW3ByaW1hcnlLZXldID09PSByZXNwW3ByaW1hcnlLZXldKTtcbiAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgIHN0b3JhZ2UucmVzdWx0RGF0YS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIHN0b3JhZ2UuZm9yY2VSZWZyZXNoKCk7XG4gICAgfVxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9TdG9yYWdlQWN0aW9uLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9SeFwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIEluamVjdG9yfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSZXNvdXJjZVByb3ZpZGVycyB9IGZyb20gJy4vc3JjL1Jlc291cmNlUHJvdmlkZXJzJztcblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VBY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VDUlVEJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlQ1JVREJhc2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VHbG9iYWxDb25maWcnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VNb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZVBhcmFtcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZVByb3ZpZGVycyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZVN0b3JhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvU2VsZWN0U3RvcmFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9TdG9yYWdlQWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL0ludGVyZmFjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZmllbGRzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VNb2R1bGUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2luamVjdG9yOiBJbmplY3Rvcikge1xuICAgIC8vIENyZWF0ZSBzaW5nbGV0b25lcyBmb3IgYWxsIHJlc291cmNlc1xuICAgIGxldCBwcm92aWRlcnMgPSBSZXNvdXJjZVByb3ZpZGVycy5wcm92aWRlcnNbUmVzb3VyY2VQcm92aWRlcnMubWFpblByb3ZpZGVyc05hbWVdO1xuICAgIHByb3ZpZGVycy5mb3JFYWNoKHByb3ZpZGVyID0+IHtcbiAgICAgIGNvbnN0IFJlc291cmNlVHlwZSA9ICg8YW55PnByb3ZpZGVyKS5wcm92aWRlO1xuICAgICAgY29uc3QgcmVzb3VyY2VJbnN0YW5jZSA9IHRoaXMuX2luamVjdG9yLmdldChSZXNvdXJjZVR5cGUpO1xuICAgICAgUmVzb3VyY2VUeXBlLmluc3RhbmNlID0gcmVzb3VyY2VJbnN0YW5jZTtcbiAgICAgICg8YW55PlJlc291cmNlVHlwZSkuX2luaXQubmV4dChyZXNvdXJjZUluc3RhbmNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUmVzb3VyY2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFJlc291cmNlUHJvdmlkZXJzLnByb3ZpZGVyc1tSZXNvdXJjZVByb3ZpZGVycy5tYWluUHJvdmlkZXJzTmFtZV1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKHN1YlNldDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSZXNvdXJjZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogUmVzb3VyY2VQcm92aWRlcnMucHJvdmlkZXJzW3N1YlNldF0gPyBSZXNvdXJjZVByb3ZpZGVycy5wcm92aWRlcnNbc3ViU2V0XSA6IFtdXG4gICAgfTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9pbmRleC50cyIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXgnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vbmd4LXJlc291cmNlLnRzIiwiaW1wb3J0IHsgUmVxdWVzdE1ldGhvZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL1Jlc291cmNlJztcbmltcG9ydCB7IFJlc291cmNlTWV0aG9kIH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlQWN0aW9uIH0gZnJvbSAnLi9SZXNvdXJjZUFjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZUNSVUQ8VFF1ZXJ5LCBUU2hvcnQsIFRGdWxsPiBleHRlbmRzIFJlc291cmNlIHtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIGlzQXJyYXk6IHRydWVcbiAgfSlcbiAgcXVlcnk6IFJlc291cmNlTWV0aG9kPFRRdWVyeSwgVFNob3J0W10+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgcGF0aDogJy97IWlkfSdcbiAgfSlcbiAgZ2V0OiBSZXNvdXJjZU1ldGhvZDx7IGlkOiBhbnkgfSwgVEZ1bGw+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlBvc3RcbiAgfSlcbiAgc2F2ZTogUmVzb3VyY2VNZXRob2Q8VEZ1bGwsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5QdXQsXG4gICAgcGF0aDogJy97IWlkfSdcbiAgfSlcbiAgdXBkYXRlOiBSZXNvdXJjZU1ldGhvZDxURnVsbCwgVEZ1bGw+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLkRlbGV0ZSxcbiAgICBwYXRoOiAnL3shaWR9J1xuICB9KVxuICByZW1vdmU6IFJlc291cmNlTWV0aG9kPHsgaWQ6IGFueSB9LCBhbnk+O1xuXG4gIC8vIEFsaWFzIHRvIHNhdmVcbiAgY3JlYXRlKGRhdGE6IFRGdWxsLCBjYWxsYmFjaz86IChyZXM6IFRGdWxsKSA9PiBhbnkpOiBURnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZShkYXRhLCBjYWxsYmFjayk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlQ1JVRC50cyIsImltcG9ydCB7IFJlcXVlc3RNZXRob2QgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXNvdXJjZU1ldGhvZCB9IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZUFjdGlvbiB9IGZyb20gJy4vUmVzb3VyY2VBY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VDUlVEQmFzZTxUUXVlcnksIFRLZXlzLCBUU2hvcnQsIFRGdWxsPiBleHRlbmRzIFJlc291cmNlIHtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIGlzQXJyYXk6IHRydWVcbiAgfSlcbiAgcXVlcnk6IFJlc291cmNlTWV0aG9kPFRRdWVyeSwgVFNob3J0W10+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbigpXG4gIGdldDogUmVzb3VyY2VNZXRob2Q8VEtleXMsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5Qb3N0XG4gIH0pXG4gIHNhdmU6IFJlc291cmNlTWV0aG9kPFRGdWxsLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUHV0XG4gIH0pXG4gIHVwZGF0ZTogUmVzb3VyY2VNZXRob2Q8VEZ1bGwsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5EZWxldGVcbiAgfSlcbiAgcmVtb3ZlOiBSZXNvdXJjZU1ldGhvZDxUS2V5cywgYW55PjtcblxuICAvLyBBbGlhcyB0byBzYXZlXG4gIGNyZWF0ZShkYXRhOiBURnVsbCwgY2FsbGJhY2s/OiAocmVzOiBURnVsbCkgPT4gYW55KTogVEZ1bGwge1xuICAgIHJldHVybiB0aGlzLnNhdmUoZGF0YSwgY2FsbGJhY2spO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZUNSVURCYXNlLnRzIiwiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVzb3VyY2VNb2RlbDxSPiB7XG5cbiAgcHJvdGVjdGVkICRjYWNoZWRSZWxhdGVkOiB7W2tleTogc3RyaW5nXToge2lkOiBhbnksIGRhdGE6IGFueX19ID0ge307XG5cbiAgJHJlc29sdmVkOiBib29sZWFuO1xuICAkb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+O1xuICAkYWJvcnRSZXF1ZXN0OiAoKSA9PiB2b2lkO1xuICAkcmVzb3VyY2U6IFI7XG4gICRwcmltYXJ5S2V5OiBzdHJpbmcgPSAnaWQnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJlc291cmNlID0gKDxhbnk+UmVmbGVjdCkuZ2V0TWV0YWRhdGEoJ3Jlc291cmNlJywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgdGhpcy4kcmVzb3VyY2UgPSAhIXJlc291cmNlICYmIHJlc291cmNlLmNvbnN0cnVjdG9yLmluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShkYXRhOiBhbnkgPSB7fSwgY29tbWl0OiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01vZGVsIHN0YXRpYyBjcmVhdGUgaXMgbm90IGF2YWlsYWJsZSBhbnltb3JlLiBQbGVhc2UgdXNlIG5ldyBZb3VyTW9kZWwoKSBpbnN0ZWFkJyk7XG4gIH1cblxuICBwdWJsaWMgJHNldERhdGEoZGF0YTogYW55KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG5cbiAgcHVibGljICRzYXZlKCkge1xuXG4gICAgaWYgKHRoaXMuaXNOZXcoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy4kdXBkYXRlKCk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgJGNyZWF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kcmVzb3VyY2VfbWV0aG9kKCdzYXZlJyk7XG4gIH1cblxuICBwdWJsaWMgJHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kcmVzb3VyY2VfbWV0aG9kKCd1cGRhdGUnKTtcbiAgfVxuXG4gIHB1YmxpYyAkcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLiRyZXNvdXJjZV9tZXRob2QoJ3JlbW92ZScpO1xuICB9XG5cbiAgcHVibGljIHRvSlNPTigpOmFueSB7XG4gICAgbGV0IHJldE9iajogYW55ID0ge307XG5cbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiB0aGlzKSB7XG5cbiAgICAgIGlmICghKCg8YW55PnRoaXMpW3Byb3BOYW1lXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSAmJiAhKHByb3BOYW1lLmNoYXJBdCgwKSA9PT0gJyQnKSkge1xuICAgICAgICByZXRPYmpbcHJvcE5hbWVdID0gKDxhbnk+dGhpcylbcHJvcE5hbWVdO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiByZXRPYmo7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNOZXcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEoPGFueT50aGlzKVt0aGlzLiRwcmltYXJ5S2V5XTtcbiAgfVxuXG4gIHByaXZhdGUgJHJlc291cmNlX21ldGhvZChtZXRob2ROYW1lOiBzdHJpbmcpIHtcblxuICAgIGlmICghdGhpcy4kcmVzb3VyY2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFlvdXIgUmVzb3VyY2UgaXMgbm90IHNldC4gUGxlYXNlIHVzZSByZXNvdXJjZS5jcmVhdGVNb2RlbCgpIG1ldGhvZCB0byBjcmVhdGUgbW9kZWwuYCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoISg8YW55PnRoaXMuJHJlc291cmNlKVttZXRob2ROYW1lXSkge1xuICAgICAgY29uc29sZS5lcnJvcihgWW91ciBSZXNvdXJjZSBoYXMgbm8gaW1wbGVtZW50ZWQgJHttZXRob2ROYW1lfSBtZXRob2QuYCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAoPGFueT50aGlzLiRyZXNvdXJjZSlbbWV0aG9kTmFtZV0odGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlTW9kZWwudHMiLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Jlc291cmNlUGFyYW1zQmFzZSwgUmVzb3VyY2VTdG9yYWdlUGFyYW1zfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VQcm92aWRlcnMgfSBmcm9tICcuL1Jlc291cmNlUHJvdmlkZXJzJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5pbXBvcnQge1Jlc291cmNlU3RvcmFnZX0gZnJvbSBcIi4vUmVzb3VyY2VTdG9yYWdlXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIFJlc291cmNlUGFyYW1zKHBhcmFtczogUmVzb3VyY2VQYXJhbXNCYXNlID0ge30pIHtcblxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogVHlwZTxSZXNvdXJjZT4pIHtcblxuICAgICg8YW55PnRhcmdldCkuaW5pdCA9ICg8YW55PnRhcmdldCkuX2luaXQuYXNPYnNlcnZhYmxlKCkuZmlsdGVyKChpbnN0YW5jZTogUmVzb3VyY2UpID0+ICEhaW5zdGFuY2UpO1xuXG4gICAgKDxhbnk+dGFyZ2V0KS5nZXRTdG9yYWdlID0gKHN0b3JhZ2VQYXJhbXM6IFJlc291cmNlU3RvcmFnZVBhcmFtcykgPT4ge1xuICAgICAgaWYgKCEhKDxhbnk+dGFyZ2V0KS5fc3RvcmFnZSkge1xuICAgICAgICAoPGFueT50YXJnZXQpLl9zdG9yYWdlLnVwZGF0ZVBhcmFtcyhzdG9yYWdlUGFyYW1zKTtcbiAgICAgICAgcmV0dXJuICg8YW55PnRhcmdldCkuX3N0b3JhZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFJlc291cmNlU3RvcmFnZSh0YXJnZXQsIHN0b3JhZ2VQYXJhbXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0YXJnZXQucHJvdG90eXBlLmdldFJlc291cmNlT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcblxuICAgIGlmIChwYXJhbXMuYWRkMlByb3ZpZGVzICE9PSBmYWxzZSkge1xuICAgICAgUmVzb3VyY2VQcm92aWRlcnMuYWRkKHRhcmdldCwgcGFyYW1zLnByb3ZpZGVyc1N1YlNldCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMucmVtb3ZlVHJhaWxpbmdTbGFzaCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUucmVtb3ZlVHJhaWxpbmdTbGFzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEhcGFyYW1zLnJlbW92ZVRyYWlsaW5nU2xhc2g7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudXJsKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMudXJsO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnBhdGgpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUuX2dldFBhdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMucGF0aDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5oZWFkZXJzKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmhlYWRlcnM7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMucGFyYW1zKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRQYXJhbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMucGFyYW1zO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmRhdGEpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUuX2dldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuZGF0YTtcbiAgICAgIH07XG4gICAgfVxuXG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VQYXJhbXMudHMiLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuaW1wb3J0IHsgUmVzb3VyY2VTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdFN0b3JhZ2UocmVzb3VyY2U6IFR5cGU8UmVzb3VyY2U+LCBwYXJhbXM/OiBSZXNvdXJjZVN0b3JhZ2VQYXJhbXMpIHtcblxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3RvcmFnZSA9ICg8YW55PnJlc291cmNlKS5nZXRTdG9yYWdlKHBhcmFtcyk7XG5cbiAgICBzdG9yYWdlLl9yZXN1bHRTdWJqZWN0LnN1YnNjcmliZSgocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICg8YW55PnRhcmdldClbcHJvcGVydHlLZXldID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIH07XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9TZWxlY3RTdG9yYWdlLnRzIiwiXG5pbXBvcnQgeyBSZXNvdXJjZU1vZGVsIH0gZnJvbSAnLi4vUmVzb3VyY2VNb2RlbCc7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4uL1Jlc291cmNlJztcbmltcG9ydCB7IFJlc291cmNlU3RvcmFnZSB9IGZyb20gJy4uL1Jlc291cmNlU3RvcmFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JlaWduS2V5KHBhcmFtczoge3RhcmdldDogVHlwZTxSZXNvdXJjZU1vZGVsPGFueT4+LCBrZXlGaWVsZDogc3RyaW5nLCByZXNvdXJjZUdldEFjdGlvbj86IHN0cmluZ30pIHtcbiAgcGFyYW1zLnJlc291cmNlR2V0QWN0aW9uID0gISFwYXJhbXMucmVzb3VyY2VHZXRBY3Rpb24gPyBwYXJhbXMucmVzb3VyY2VHZXRBY3Rpb24gOiAnZ2V0JztcblxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogUmVzb3VyY2VNb2RlbDxhbnk+LCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XG5cbiAgICBmdW5jdGlvbiBnZXRGb3JlaWduRnJvbVN0b3JhZ2UoaWQ6IGFueSwgc3RvcmFnZTogUmVzb3VyY2VTdG9yYWdlKSB7XG4gICAgICBjb25zdCBmb3JlaWduTW9kZWwgPSBzdG9yYWdlLnJlc3VsdERhdGEuZmluZCgoaXRlbTogYW55KSA9PiBpdGVtW2l0ZW0uJHByaW1hcnlLZXldID09PSBpZCk7XG4gICAgICBpZiAoISFmb3JlaWduTW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIGZvcmVpZ25Nb2RlbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRGb3JlaWduRnJvbVJlc291cmNlKGlkOiBhbnksIHJlc291cmNlOiBSZXNvdXJjZSkge1xuICAgICAgY29uc3QgYWN0aW9uID0gKDxhbnk+cmVzb3VyY2UpW3BhcmFtcy5yZXNvdXJjZUdldEFjdGlvbl07XG4gICAgICBpZiAoISFhY3Rpb24pIHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7fTtcbiAgICAgICAgKDxhbnk+cXVlcnlQYXJhbXMpWyhuZXcgcGFyYW1zLnRhcmdldCgpKS4kcHJpbWFyeUtleV0gPSBpZDtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5iaW5kKHJlc291cmNlKShxdWVyeVBhcmFtcyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgZm9yZWlnbklkID0gKDxhbnk+dGhpcylbcGFyYW1zLmtleUZpZWxkXTtcbiAgICAgICAgICAgIGxldCBmb3JlaWduTW9kZWw6IFJlc291cmNlTW9kZWw8YW55PjtcbiAgICAgICAgICAgIGlmIChmb3JlaWduSWQpIHtcbiAgICAgICAgICAgICAgLy8gY2hlY2sgY2FjaGVkXG4gICAgICAgICAgICAgIGlmICh0aGlzLiRjYWNoZWRSZWxhdGVkW3Byb3BlcnR5S2V5XSAmJiB0aGlzLiRjYWNoZWRSZWxhdGVkW3Byb3BlcnR5S2V5XS5pZCA9PT0gZm9yZWlnbklkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGNhY2hlZFJlbGF0ZWRbcHJvcGVydHlLZXldLmRhdGE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyB0cnkgdG8gZ2V0IGZyb20gc3RvcmFnZSBvciBmcm9tIHJlc291cmNlXG4gICAgICAgICAgICAgIGNvbnN0IGZvcmVpZ25SZXNvdXJjZTogUmVzb3VyY2UgPSAoPGFueT5SZWZsZWN0KS5nZXRNZXRhZGF0YSgncmVzb3VyY2UnLCBwYXJhbXMudGFyZ2V0KTtcbiAgICAgICAgICAgICAgaWYgKCEhZm9yZWlnblJlc291cmNlICYmICEhZm9yZWlnblJlc291cmNlLnN0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICAgZm9yZWlnbk1vZGVsID0gZ2V0Rm9yZWlnbkZyb21TdG9yYWdlKGZvcmVpZ25JZCwgZm9yZWlnblJlc291cmNlLnN0b3JhZ2UpO1xuICAgICAgICAgICAgICAgICBpZiAoIWZvcmVpZ25Nb2RlbCkge1xuICAgICAgICAgICAgICAgICAgIGZvcmVpZ25Nb2RlbCA9IGdldEZvcmVpZ25Gcm9tUmVzb3VyY2UoZm9yZWlnbklkLCBmb3JlaWduUmVzb3VyY2UpO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoISFmb3JlaWduUmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBmb3JlaWduTW9kZWwgPSBnZXRGb3JlaWduRnJvbVJlc291cmNlKGZvcmVpZ25JZCwgZm9yZWlnblJlc291cmNlKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAvL2NhY2hlIGl0IGFuZCByZXR1cm5cbiAgICAgICAgICAgICAgaWYgKCEhZm9yZWlnbk1vZGVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY2FjaGVkUmVsYXRlZFtwcm9wZXJ0eUtleV0gPSB7aWQ6IGZvcmVpZ25JZCwgZGF0YTogZm9yZWlnbk1vZGVsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9yZWlnbk1vZGVsO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2ZpZWxkcy9Gb3JlaWduS2V5LnRzIiwiZXhwb3J0IHsgRm9yZWlnbktleSB9IGZyb20gJy4vRm9yZWlnbktleSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvZmllbGRzL2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE5X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==