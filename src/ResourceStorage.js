"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var ResourceStorage = (function () {
    function ResourceStorage(resource, queryParams) {
        this.resource = resource;
        this.queryParams = queryParams;
        this._iterationPointer = 0;
        this.resultData = [];
        this.queryParams = queryParams || {};
        this.result = Object.assign(this.resultData, { $load: this.load.bind(this), $resolved: false });
        this._resultSubject = new BehaviorSubject_1.BehaviorSubject(this.result);
        this.result.$observable = this._resultSubject.asObservable();
        this.result.$resource = this.resource;
        this.load();
    }
    ResourceStorage.prototype.load = function (args) {
        var qp = !!args ? args : this.queryParams;
        var action = this.resource.storageLoad;
        if (!!action) {
            action.bind(this.resource)(qp);
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
exports.ResourceStorage = ResourceStorage;
