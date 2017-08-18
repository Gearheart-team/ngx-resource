import { SelectedStorage } from "./Interfaces";
import {Resource} from "./Resource";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

export class ResourceStorage {
  private _iterationPointer = 0;
  private _resultSubject: BehaviorSubject<SelectedStorage<any>>;

  result: SelectedStorage<any>;
  resultData: any[] = [];


  constructor(private resource: Resource, private queryParams?: any) {
    this.queryParams = queryParams || {};
    this.result = Object.assign(this.resultData, {$load: this.load.bind(this), $resolved: false});

    this._resultSubject = new BehaviorSubject(this.result);
    this.result.$observable = this._resultSubject.asObservable();
    this.result.$resource = this.resource;
    this.load();
  }

  load(args?: any) {
    const qp = !!args ? args : this.queryParams;
    const action = this.resource.storageLoad;
    if (!!action) {
      action.bind(this.resource)(qp);
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
