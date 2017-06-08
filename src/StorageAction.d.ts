import { ResourceStorage } from "./ResourceStorage";
export declare const StorageAction: {
    LOAD: (storage: ResourceStorage, resp: any) => void;
    ADD: (storage: ResourceStorage, resp: any) => void;
    UPDATE: (storage: ResourceStorage, resp: any) => void;
    REMOVE: (storage: ResourceStorage, resp: any) => void;
};
