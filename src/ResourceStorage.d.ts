import { ResourceStorageParams, SelectedStorage } from "./Interfaces";
import { Resource } from "./Resource";
import { Type } from "@angular/core";
export declare class ResourceStorage {
    private resource;
    private queryParams;
    private _iterationPointer;
    private loadImmediately;
    private _resultSubject;
    result: SelectedStorage<any>;
    resultData: any[];
    constructor(resource: Type<Resource>, params: ResourceStorageParams);
    updateParams(params?: ResourceStorageParams): void;
    load(args?: any): void;
    forceRefresh(): void;
}
