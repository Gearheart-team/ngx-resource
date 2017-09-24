"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SelectStorage(resource, params) {
    return function (target, propertyKey) {
        var nativeInit = target.ngOnInit;
        target.ngOnInit = function () {
            if (!!nativeInit) {
                nativeInit.bind(this)();
            }
            var storage = resource.instance.storage;
            storage._resultSubject.subscribe(function (result) {
                target[propertyKey] = result;
            });
        };
    };
}
exports.SelectStorage = SelectStorage;
