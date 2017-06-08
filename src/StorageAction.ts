
import {ResourceStorage} from "./ResourceStorage";

export const StorageAction = {
  LOAD: function (storage: ResourceStorage, resp: any) {
    storage.resultData = resp.filter((item: any) => !!item);
    storage.forceRefresh();
  },
  ADD: function (storage: ResourceStorage, resp: any) {
    storage.resultData.push(resp);
    storage.forceRefresh();
  },
  UPDATE: function (storage: ResourceStorage, resp: any) {
    const primaryKey = resp.$primaryKey || 'id';
    const idx = storage.resultData.findIndex(item => item[primaryKey] === resp[primaryKey]);
    if (idx > -1) {
      storage.resultData[idx] = resp;
      storage.forceRefresh();
    }
  },
  REMOVE: function (storage: ResourceStorage, resp: any) {
    const primaryKey = resp.$primaryKey || 'id';
    const idx = storage.resultData.findIndex(item => item[primaryKey] === resp[primaryKey]);
    if (idx > -1) {
      storage.resultData.splice(idx, 1);
      storage.forceRefresh();
    }
  },
};
