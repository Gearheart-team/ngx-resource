"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ngx_resource_1 = require("../ngx-resource");
var newsCollection = [
    { id: 1, fullText: 'First News' },
    { id: 2, fullText: 'Second News' },
];
var commentsCollection = [
    { id: 1, news_id: 1, text: 'First News Comment' },
    { id: 2, news_id: 2, fullText: 'Second News Comment' },
];
function customMockFunction(resourceActionName, pathParams, data, method) {
    return { key1: 'value1', key2: 'value2' };
}
var NewsRes = (function (_super) {
    __extends(NewsRes, _super);
    function NewsRes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewsRes;
}(ngx_resource_1.Resource));
__decorate([
    ngx_resource_1.ResourceAction({
        isArray: true
    })
], NewsRes.prototype, "query", void 0);
__decorate([
    ngx_resource_1.ResourceAction({
        path: '/{!id}'
    })
], NewsRes.prototype, "get", void 0);
__decorate([
    ngx_resource_1.ResourceAction({
        path: '/{!id}/comments',
        isArray: true,
        mockCollection: { collection: commentsCollection, lookupParams: { id: 'news_id' } }
    })
], NewsRes.prototype, "comments", void 0);
__decorate([
    ngx_resource_1.ResourceAction({
        path: '/{!id}/something',
        mockCollection: customMockFunction
    })
], NewsRes.prototype, "something", void 0);
__decorate([
    ngx_resource_1.ResourceAction({
        method: http_1.RequestMethod.Post
    })
], NewsRes.prototype, "save", void 0);
__decorate([
    ngx_resource_1.ResourceAction({
        method: http_1.RequestMethod.Put,
        path: '/{!id}'
    })
], NewsRes.prototype, "update", void 0);
__decorate([
    ngx_resource_1.ResourceAction({
        method: http_1.RequestMethod.Delete,
        path: '/{!id}'
    })
], NewsRes.prototype, "remove", void 0);
NewsRes = __decorate([
    core_1.Injectable(),
    ngx_resource_1.ResourceParams({
        url: 'https://domain.net/api/news',
        mockCollection: newsCollection
    })
], NewsRes);
exports.NewsRes = NewsRes;
