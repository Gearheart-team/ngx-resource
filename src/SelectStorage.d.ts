import { Type } from '@angular/core';
import { Resource } from './Resource';
import { ResourceStorageParams } from './Interfaces';
export declare function SelectStorage(resource: Type<Resource>, params?: ResourceStorageParams): (target: any, propertyKey: string) => void;
