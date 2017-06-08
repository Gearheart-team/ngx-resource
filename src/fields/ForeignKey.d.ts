import { ResourceModel } from '../ResourceModel';
import { Type } from '@angular/core';
export declare function ForeignKey(params: {
    target: Type<ResourceModel<any>>;
    keyField: string;
    resourceGetAction?: string;
}): (target: ResourceModel<any>, propertyKey: string) => void;
