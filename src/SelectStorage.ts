import { Type } from '@angular/core';
import { Resource } from './Resource';
import { ResourceStorageParams } from './Interfaces';

export function SelectStorage(resource: Type<Resource>, params?: ResourceStorageParams) {

  return function (target: any, propertyKey: string) {
    const nativeInit = target.ngOnInit;
    target.ngOnInit = function () {
      if (!!nativeInit) {
        nativeInit.bind(this)();
      }
      const storage = (<any>resource).instance.storage;

      storage._resultSubject.subscribe((result: any) => {
        (<any>target)[propertyKey] = result;
      });
    };
  };

}
