import {ResourceStorageParams, SelectedStorage} from "./Interfaces";
import {Resource} from "./Resource";
import {Type} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

export class ResourceStorage {
  private queryParams = {};
  private _iterationPointer = 0;
  private loadImmediately = true;
  private _resultSubject: BehaviorSubject<SelectedStorage<any>>;

  result: SelectedStorage<any>;
  resultData: any[] = [];


  constructor(private resource: Type<Resource>, params: ResourceStorageParams) {
    this.updateParams(params);
    this.result = Object.assign(this.resultData, {$load: this.load.bind(this), $resolved: false});

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

    this._resultSubject = new BehaviorSubject(this.result);
    this.result.$observable = this._resultSubject.asObservable();

    (<any>resource).init.subscribe(() => {
      (<any>this.resource).instance.storage = this;
      if (this.loadImmediately) {
        this.load();
      }
      this.result.$resource = (<any>this.resource).instance;
    });


  }

  updateParams(params: ResourceStorageParams = <any>{}) {
    this.queryParams = params.queryParams || {};
    this.loadImmediately = params.loadImmediately === false ? false : true;
  }

  load(args?: any) {
    const qp = !!args ? args : this.queryParams;
    const action = (<any>this.resource).instance.storageLoad;
    if (!!action) {
      action.bind((<any>this.resource).instance)(qp);
    } else {
      throw "Storage LOAD action is not defined";
    }
  }

  forceRefresh() {
    this.result = Object.assign([], this.result);
    Object.assign(this.result, this.resultData);
    this.result.$resolved = true;
    this._iterationPointer = 0;
    this._resultSubject.next(this.result);
  }

}
