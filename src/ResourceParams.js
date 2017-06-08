import { ResourceProviders } from './ResourceProviders';
import { ResourceStorage } from "./ResourceStorage";
export function ResourceParams(params) {
    if (params === void 0) { params = {}; }
    return function (target) {
        target.init = target._init.asObservable().filter(function (instance) { return !!instance; });
        target.getStorage = function (storageParams) {
            if (!!target._storage) {
                target._storage.updateParams(storageParams);
                return target._storage;
            }
            else {
                return new ResourceStorage(target, storageParams);
            }
        };
        target.prototype.getResourceOptions = function () {
            return params;
        };
        if (params.add2Provides !== false) {
            ResourceProviders.add(target, params.providersSubSet);
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
