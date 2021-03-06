import { Observable } from 'rxjs/Rx';
import { Request, RequestMethod, QueryEncoder } from '@angular/http';
import { Type } from '@angular/core';
import { Resource } from './Resource';
import { ResourceStorage } from "./ResourceStorage";
export interface ResourceRequestInterceptor {
    (req: Request, methodOptions?: ResourceActionBase): Request;
}
export interface ResourceResponseInterceptor {
    (observable: Observable<any>, request?: Request, methodOptions?: ResourceActionBase): Observable<any>;
}
export interface ResourceResponseMap {
    (item: any): any;
}
export interface ResourceResponseInitResult {
    (): any;
}
export interface ResourceResponseFilter {
    (item: any): boolean;
}
export interface ResourceParamsBase {
    url?: string;
    path?: string;
    headers?: any;
    params?: any;
    data?: any;
    removeTrailingSlash?: boolean;
    addTimestamp?: boolean | string;
    withCredentials?: boolean;
    mock?: boolean;
    mockCollection?: any;
    [propName: string]: any;
}
export interface ResourceActionBase extends ResourceParamsBase {
    method?: RequestMethod;
    isArray?: boolean;
    isLazy?: boolean;
    requestInterceptor?: ResourceRequestInterceptor;
    responseInterceptor?: ResourceResponseInterceptor;
    initResultObject?: ResourceResponseInitResult;
    map?: ResourceResponseMap;
    filter?: ResourceResponseFilter;
    rootNode?: string;
    mockCollection?: {
        collection: any;
        lookupParams?: any;
    } | any;
    mock?: boolean;
    queryEncoder?: Type<QueryEncoder>;
    storageAction?: StorageActionFn;
}
export interface ResourceMethod<I, O> {
    (data?: I, callback?: (res: O) => any): ResourceResult<O>;
}
export interface ResourceMethodStrict<IB, IP, O> {
    (body?: IB, params?: IP, callback?: (res: O) => any): ResourceResult<O>;
}
export interface ResourceModelParamsBase {
    resource: Type<Resource>;
}
export declare type ResourceResult<R extends {}> = R & {
    $resolved?: boolean;
    $observable?: Observable<R>;
    $abortRequest?: () => void;
    $resource?: Resource;
};
export declare type SelectedStorage<T> = ResourceResult<T> & {
    $load: (args?: any) => void;
};
export interface ResourceStorageParams {
    queryParams?: any;
    loadImmediately: boolean;
}
export interface StorageActionFn {
    (storage: ResourceStorage, response: any): void;
}
