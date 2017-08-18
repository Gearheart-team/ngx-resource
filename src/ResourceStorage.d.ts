import { SelectedStorage } from "./Interfaces";
import { Resource } from "./Resource";
export declare class ResourceStorage {
    private resource;
    private queryParams;
    private _iterationPointer;
    private _resultSubject;
    result: SelectedStorage<any>;
    resultData: any[];
    constructor(resource: Resource, queryParams?: any);
    load(args?: any): void;
    forceRefresh(): void;
}
