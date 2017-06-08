
import { ResourceModel } from '../ResourceModel';
import { Type } from '@angular/core';
import { Resource } from '../Resource';
import { ResourceStorage } from '../ResourceStorage';

export function ForeignKey(params: {target: Type<ResourceModel<any>>, keyField: string, resourceGetAction?: string}) {
  params.resourceGetAction = !!params.resourceGetAction ? params.resourceGetAction : 'get';

  return function (target: ResourceModel<any>, propertyKey: string) {

    function getForeignFromStorage(id: any, storage: ResourceStorage) {
      const foreignModel = storage.resultData.find((item: any) => item[item.$primaryKey] === id);
      if (!!foreignModel) {
        return foreignModel;
      }
    }

    function getForeignFromResource(id: any, resource: Resource) {
      const action = (<any>resource)[params.resourceGetAction];
      if (!!action) {
        const queryParams = {};
        (<any>queryParams)[(new params.target()).$primaryKey] = id;
        return action.bind(resource)(queryParams);
      };
    }

    Object.defineProperty(target, propertyKey, {
        get: function () {
            const foreignId = (<any>this)[params.keyField];
            let foreignModel: ResourceModel<any>;
            if (foreignId) {
              // check cached
              if (this.$cachedRelated[propertyKey] && this.$cachedRelated[propertyKey].id === foreignId) {
                return this.$cachedRelated[propertyKey].data;
              }

              // try to get from storage or from resource
              const foreignResource: Resource = (<any>Reflect).getMetadata('resource', params.target);
              if (!!foreignResource && !!foreignResource.storage) {
                 foreignModel = getForeignFromStorage(foreignId, foreignResource.storage);
                 if (!foreignModel) {
                   foreignModel = getForeignFromResource(foreignId, foreignResource);
                 }
              } else if (!!foreignResource) {
                foreignModel = getForeignFromResource(foreignId, foreignResource);
              };

              //cache it and return
              if (!!foreignModel) {
                this.$cachedRelated[propertyKey] = {id: foreignId, data: foreignModel};
                return foreignModel;
              }

            }
        }
    });
  };
}
