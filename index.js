"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var ResourceProviders_1 = require("./src/ResourceProviders");
__export(require("./src/Resource"));
__export(require("./src/ResourceAction"));
__export(require("./src/ResourceCRUD"));
__export(require("./src/ResourceCRUDBase"));
__export(require("./src/ResourceGlobalConfig"));
__export(require("./src/ResourceModel"));
__export(require("./src/ResourceParams"));
__export(require("./src/ResourceProviders"));
__export(require("./src/ResourceStorage"));
__export(require("./src/SelectStorage"));
__export(require("./src/StorageAction"));
__export(require("./src/fields"));
var ResourceModule = (function () {
    function ResourceModule(_injector) {
        var _this = this;
        this._injector = _injector;
        // Create singletones for all resources
        var providers = ResourceProviders_1.ResourceProviders.providers[ResourceProviders_1.ResourceProviders.mainProvidersName];
        providers.forEach(function (provider) {
            var ResourceType = provider.provide;
            var resourceInstance = _this._injector.get(ResourceType);
            ResourceType.instance = resourceInstance;
        });
    }
    ResourceModule.forRoot = function () {
        return {
            ngModule: ResourceModule,
            providers: ResourceProviders_1.ResourceProviders.providers[ResourceProviders_1.ResourceProviders.mainProvidersName]
        };
    };
    ResourceModule.forChild = function (subSet) {
        return {
            ngModule: ResourceModule,
            providers: ResourceProviders_1.ResourceProviders.providers[subSet] ? ResourceProviders_1.ResourceProviders.providers[subSet] : []
        };
    };
    return ResourceModule;
}());
ResourceModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule, http_1.HttpModule]
            },] },
];
/** @nocollapse */
ResourceModule.ctorParameters = function () { return [
    { type: core_1.Injector, },
]; };
exports.ResourceModule = ResourceModule;
