import { Type } from '@angular/core';
import {ResourceParamsBase, ResourceStorageParams} from './Interfaces';
import { ResourceProviders } from './ResourceProviders';
import { Resource } from './Resource';
import {ResourceStorage} from "./ResourceStorage";


export function ResourceParams(params: ResourceParamsBase = {}) {

  return function (target: Type<Resource>) {

    (<any>target).init = (<any>target)._init.asObservable().filter((instance: Resource) => !!instance);

    (<any>target).getStorage = (storageParams: ResourceStorageParams) => {
      if (!!(<any>target)._storage) {
        (<any>target)._storage.updateParams(storageParams);
        return (<any>target)._storage;
      } else {
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
