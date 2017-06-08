import { Type } from '@angular/core';
import { Resource } from './Resource';
import { ResourceStorageParams } from './Interfaces';

export function SelectStorage(resource: Type<Resource>, params?: ResourceStorageParams) {

  return function (target: any, propertyKey: string) {
    const storage = (<any>resource).getStorage(params);

    storage._resultSubject.subscribe((result: any) => {
      (<any>target)[propertyKey] = result;
    });

  };

}
