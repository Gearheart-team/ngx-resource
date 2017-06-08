"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var ngx_resource_1 = require("../ngx-resource");
var test_resource_1 = require("./test.resource");
describe('MockingTest', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                ngx_resource_1.ResourceModule.forRoot()
            ]
        });
        ngx_resource_1.ResourceGlobalConfig.mockResponses = true; // !!!
    });
    it('should mock query', testing_1.async(testing_1.inject([test_resource_1.NewsRes], function (testres) {
        testres.query().$observable.subscribe(function (_news) {
            expect(_news.map(function (_item) { return { id: _item.id, fullText: _item.fullText }; })).toEqual([
                { id: 1, fullText: 'First News' },
                { id: 2, fullText: 'Second News' },
            ]);
        });
    })));
    it('should mock get', testing_1.async(testing_1.inject([test_resource_1.NewsRes], function (testres) {
        testres.get({ id: 1 }).$observable.subscribe(function (news) {
            expect(news.fullText).toEqual('First News');
        });
    })));
    it('should mock update', testing_1.async(testing_1.inject([test_resource_1.NewsRes], function (testres) {
        testres.update({
            id: 2, title: 'Second',
            text: 'Second News',
            fullText: 'Second News Updated'
        }).$observable.subscribe(function (news) {
            expect(news.fullText).toEqual('Second News Updated');
        });
        testres.get({ id: 2 }).$observable.subscribe(function (news) {
            expect(news.fullText).toEqual('Second News Updated');
        });
    })));
    it('should mock save', testing_1.async(testing_1.inject([test_resource_1.NewsRes], function (testres) {
        testres.save({
            id: 3, title: 'Third',
            text: 'Third News',
            fullText: 'Third News'
        }).$observable.subscribe(function (news) {
            expect(news.fullText).toEqual('Third News');
        });
        testres.get({ id: 3 }).$observable.subscribe(function (news) {
            expect(news.fullText).toEqual('Third News');
        });
    })));
    it('should mock delete', testing_1.async(testing_1.inject([test_resource_1.NewsRes], function (testres) {
        testres.remove({ id: 1 }).$observable.toPromise();
        testres.query().$observable.subscribe(function (news) {
            expect(news.find(function (itm) { return itm.id === 1; })).toBeUndefined();
        });
    })));
    it('should mock comments', testing_1.async(testing_1.inject([test_resource_1.NewsRes], function (testres) {
        testres.comments({ id: 1 }).$observable.subscribe(function (comments) {
            expect(comments.length).toEqual(1);
            expect(comments[0].text).toEqual('First News Comment');
        });
    })));
    it('should use custom mock function', testing_1.async(testing_1.inject([test_resource_1.NewsRes], function (testres) {
        testres.something({ id: 1 }).$observable.subscribe(function (something) {
            expect(something.key1).toEqual('value1');
            expect(something.key2).toEqual('value2');
        });
    })));
});
