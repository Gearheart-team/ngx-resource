[![npm version](https://badge.fury.io/js/ngx-resource-gearheart.svg)](http://badge.fury.io/js/ngx-resource-gearheart)

[![NPM](https://nodei.co/npm/ngx-resource-gearheart.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ngx-resource-gearheart/)

# ngx-resource-gearheart
Resource (REST) Client for Angular 2 customized by Gearheart. Module which allows REST API Entities as objects.

###Definitions of Terms
 
**Resource**
  Angular service which manages requests for API Entity.
  
**ResourceAction**
  Some action for API Entity. Such as retrieve, list, create, update, delete etc.
  
**ResourceModel**
  Object for API Entity. Resource wraps each received entity item to model.
  
### Installation

To use the module install the module using below command

`npm install ngx-resource-gearheart --save`


### Quick Start

Create your First Resource and save it as users.resource.ts:

```typescript

import { Resource, ResourceAction, ResourceParams, ResourceMethod} from 'ngx-resource-gearheart';
 
export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
}
 
@ResourceParams({
  url: '/api/users'
})
export class UsersResource extends Resource {
 
  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<{}, IUser[]>

}
```

Add ResourceModule into your AppModule:

```typescript

import { ResourceModule } from 'ngx-resource-gearheart';
import './users.resource';
 
@NgModule({
  imports: [ResourceModule.forRoot(),...]
})
export class AppModule() {}

```

Pay attention to row #2 in code above. It needed for compile our resource and provide its singleton to our app.
Thats all. Now you can use resource in app components:

```typescript

import { Component, OnInit } from '@angular/core';
import { UsersResource, IUser } from './users.resource';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  users: IUser[];

  constructor(private ur: UsersResource) {}
  
  ngOnInit() {
    // simple way:
    this.users = this.ur.query();
    
    // other way:
    this.ur.query()
      .$observable
      .subscribe(users => { 
        console.log('$observable resolved!!!');
        // ... some code
        this.users = users;
      });
  }

}

```

Each ResourceAction - it is function which returns API response (array or object) with additional properties and method:
  
  `$observable` - request observable. 
  
  `$resolved` - flag which have `false` until request observable is not resolved.
  
  `$abortRequest` - method which interrupts request immediately.
   
So you can use simple way from code above for call action if you just want define value for variable. Or you can use `$observable` if you want to do something when request observable will be resolved.    


### Resource Definition

Each resource should be decorated by `@ResourceParams`. It is needed to define resource behavior and also for provide resource singleton to your app.
The `ResourceParams` decorator can be called with one argument. Argument should be `ResourceParamsBase` object described bellow.


### Resource Actions Definition

Your Resource can contains any actions which you wants. Each action in resource should be decorated by `@ResourceAction`.
The ResourceAction decorator can be called with one argument. Argument should be `ResourceActionBase` object described bellow.
Resource Action Params overrides resource params.


### Resource Model Definition

Resource can wraps each returned API entity to object. You should define model class to use this feature.

```typescript

import { ResourceModel } from 'ngx-resource-gearheart';
import { UsersResource } from './users.resource';


export interface IUser {
  id: number;
  name: string;
  avatar: string;
}

export interface User extends IUser, ResourceModel<UsersResource> {

}

export class User extends ResourceModel<UsersResource> {

}
```

Next step we should update our resource: 


```typescript

...
import { User } from './user.model';

@ResourceParams({
  url: '/api/users'
})
export class UsersResource extends Resource {
 
  ...
  
  initResultObject() {
    return new User();
  }
  
  ...

}
```

And we can use our model in components:

```typescript

import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor() {}
  
  ngOnInit() {
    let user = new User();
    user.name = 'John Dow';
    user.$save();
  }

}

```


### Use Resource Storage

Resource Storage it is "smart cache" for resources. If we want use storage for resource we should define it explicit:

```typescript

...

@ResourceParams({
  url: '/api/users'
})
export class UsersResource extends Resource {
 
  ...
  
  initStorage() {
    return new ResourceStorage(this)
  }
 
  @ResourceAction({
    isArray: true,
    storageAction: StorageAction.LOAD
  })
  query: ResourceMethod<{}, User[]>;
    
  @ResourceAction({
    method: RequestMethod.POST,
    storageAction: StorageAction.ADD
  })
  save: ResourceMethod<User, User>;
  
  @ResourceAction({
    method: RequestMethod.PUT,
    storageAction: StorageAction.UPDATE
  })
  update: ResourceMethod<User, User>;

}
```

And now you can use it in every component. If you use SelectStorage in few components you don't call API request in each of components. If you change some object then it will be changed in storage.   

```typescript

import { Component, OnInit } from '@angular/core';
import { SelectedStorage, SelectStorage } from 'ngx-resource-gearheart';
import { UsersResource } from '../resources/users.resource';
import { Offer } from '../resources/models/user.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @SelectStorage(UsersResource) users: SelectedStorage<Offer>;

  constructor() { }

  ngOnInit() {
    console.log(this.users);
  }

}

```


### Resources usage recommendations

I recommend to create submodule in your app for all your resources.
    


# Docs (WIP)

## @ResourceParams class decorator
```@ResourceParams(options: ResourceParamsBase)```

The decorator is used to define default resource parameters (can be overwritten with method parameters).
@ResourceParams accepts object `ResourceParamsBase` type (description below).


## @ResourceAction method decorator
```@ResourceAction(options: ResourceActionBase)```

Decorates methods. @ResourceAction accepts object `ResourceActionBase` type (description below).
All default decorated options will be overwritten for the method.


## Types

### `ResourceMethod<I, O>`
Resource method type with specified `input data type` as `I` and `output data type` as `O`<br>
In fact it's a function type (input?: I, callback?: (res: O) => void): ResourceResult<O>

### `ResourceMethodStrict<IB, IP, O>`
Resource method type with specified  `input body data type` as `IB`, `input path data type` as `IP` and `output data type` as `O`<br>
In fact it's a function type (body?: IB, params?: IP, callback?: (res: O) => any): ResourceResult<O>
`ResourceMethodStrict` developed in purpose to respove [issue #76](https://github.com/troyanskiy/ng2-resource-rest/issues/76)


### `ResourceResult<R>`
Every request method is returning given data type which is extended by `ResourceResult`
```ts
export type ResourceResult<R extends {}> = R & {
  $resolved?: boolean; // true if request has been executed
  $observable?: Observable<R>; // Observable for the request
  $abortRequest?: () => void; // method to abort pending request
}
```

### `ResourceParamsCommon`
```javascript
export interface ResourceParamsCommon {
	url?:string;
	path?:string;
	headers?:any;
	params?:any;
	data?:any;
	removeTrailingSlash?: boolean;
	addTimestamp?: boolean | string;
	withCredentials?: boolean;
	[propName: string]: any;
}
```

#### `url`
Default resource common address<br>
**Default**: *empty*<br>
**Ex**: https://domain.com/api

#### `path`
Default resource path to api.<br>
Can contain path params, which are between `{ }`.<br>
If path param is with `!` prefix, then the param is mandatory<br>
If path param is with `:` prefix, then the param will be removed from post data<br>
**Default**: *empty*<br>
**Ex**: /users/{id}<br>
**Ex2**: /users/{!id}<br>
**Ex3**: /users/{:id}<br>
**Ex4**: /users/{!:id}<br>

#### `headers`
Default resource HTTP headers.<br>
It should be object where key is header name and value is header value<br>
**Default**:
```javascript
{
	'Accept': 'application/json',
	'Content-Type': 'application/json'
}
```

#### `params`
Default resource path/get params<br>
**Default**: *null*<br>
**Ex**: ```{"mode": "user", "id": "@_id", "_id": 0}```

#### `data`
Default resource body params<br>
The params will be added to data object if they does not exists<br>
**Default**: *null*<br>
**Ex**: ```{"mode": "user", "isActive": true}```

#### `removeTrailingSlash`
Remove trailing slashed from url<br>
**Default**: true<br>

#### `addTimestamp`
Will add timestamp to the url<br>
Can be boolean or string representation of parameter name<br>
**Default**: false<br>

#### `withCredentials`
Will add withCredentials option to request options<br>
**Default**: false<br>


### `ResourceParamsBase`
```javascript
export interface ResourceParamsBase extends ResourceParamsCommon {
	add2Provides?: boolean;
	providersSubSet?: string;
}
```

#### `add2Provides`
To create service provider and it to ResourceModule.forRoot()<br>
**Default**: true<br>

#### `providersSubSet`
To create service provider and it to ResourceModule.forChild(<providersSubSet>)<br>
**Default**: null (so it goes to forRoot())<br>



### `ResourceActionBase`
```javascript
export interface ResourceActionBase extends ResourceParamsCommon {
	method?:RequestMethod; // from angular `@angular/http`
	isArray?: boolean;
	isLazy?: boolean;
  requestInterceptor?: ResourceRequestInterceptor;
  responseInterceptor?: ResourceResponseInterceptor;
  initResultObject?: ResourceResponseInitResult;
  map?: ResourceResponseMap;
  filter?: ResourceResponseFilter;
  rootNode?: string;
}
```

All parameters will overwrite default one from `ResourceParamsBase`

#### `method`
Http request method of the action.<br>
**Ex**: method: RequestMethod.Get
**Default**: method: RequestMethod.Get


#### `isArray`
Used if received data is an array


#### `isLazy`
Is `isLazy` set to true, then the request will not be executed immediately. To execute the request you should subsribe to abservable and hande responces by yourself.

#### `requestInterceptor`
`(req: Request): Request;`

Custom request modifier for the method<br>
Default request interceptor is a function which recieves `Request` object from `anglar2/http`<br>
**Default**: *doing nothing*

#### `responseInterceptor`
`(observable:Observable<any>, request?:Request, methodOptions?: ResourceActionBase):Observable<any>;`

Custom response interceptor for the method<br>
Default response interceptor is a function which receives `Observable` object from `rxjs/Observable` and returns also `Observable` object.<br>
**Default**:
```javascript
function (observable:Observable<any>):Observable<any> {
	return observable.map(res => res._body ? res.json() : null);
}
```

#### `initResultObject`
`(): any;`

Custom object creator. Added on Ver 1.14.0

#### `map`
`(item: any):any;`

Custom response data mapper.<br>
Will be called for each array element if response is an array.<br>
Will called for the object if response is an object<br>
Called before mapping data

#### `filter`
`(item: any):boolean;`

Custom response filter.<br>
Will be called for each array element if response is an array.<br>
Will called for the object if response is an object<br>
Called before map method

#### `rootNode`
The data sent to the API will be wrapped into the root node provided

<br>


> Note: For all non GET request all data object will be send in the request body as json.
> In case of GET requset the data object will be send as query parameters. Parameters, which are has been used for path params, will be removed from query list (only for GET request).

## `Resource` class

### Default methods

#### `getUrl(methodOptions?: ResourceActionBase): string | Promise<string>`
To get url. Used in methods.

#### `setUrl(url: string)`
To set resource url

#### `getPath(methodOptions?: ResourceActionBase): string | Promise<string>`
To get path. Used in methods

#### `setPath(path: string)`
To set resource path

#### `getHeaders(methodOptions?: ResourceActionBase): any | Promise<any>`
To get headers. Used in methods.

#### `setHeaders(headers: any)`
To set resource headers

#### `getParams(methodOptions?: ResourceActionBase): any | Promise<any>`
To get params. Used in methods.

#### `setParams(params: any)`
To set resource params

#### `getData(methodOptions?: ResourceActionBase): any | Promise<any>`
To get data. Used in methods.

#### `setData(data: any)`
To set resource data

#### `requestInterceptor(req: Request, methodOptions?: ResourceActionBase): Request`
Default request interceptor

#### `responseInterceptor(observable: Observable<any>, req: Request, methodOptions?: ResourceActionBase): Observable<any>`
Default response interceptor

#### `removeTrailingSlash(): boolean`
Called by method if needs to trim trailing slashes from final url

#### `initResultObject(): any`
Called on return object initialization

#### `map(item: any): any<any>`
Default response mapper

#### `filter(item: any): boolean`
Default filter method. By default always `true`


## `ResourceCRUD` class

The class is extends with Resource and has predefined 5 methods:

1. get(data, callback) to execute GET request;
2. query(data, callback) to execute GET and recieve an array
3. save(data, callback) to execute POST request;
4. update(data, callback) to execute PUT request;
5. remove(data, callback) or delete(data, callback) to execute DELETE request.

## `ResourceGlobalConfig` class

Static class to define global common params for all Resources globally

#### `ResourceGlobalConfig.url: string | Promise<string> = null`
Defines url

#### `ResourceGlobalConfig.path: string | Promise<string> = null`
Defines path

#### `ResourceGlobalConfig.headers: any | Promise<any> = null`
Defines headers

#### `ResourceGlobalConfig.params: any | Promise<any> = null`
Defines params

#### `ResourceGlobalConfig.data: any | Promise<any> = null`
Defines data

#### `getParamsMappingType: any = TGetParamsMappingType.Plain`
Defines mapping method of arrays/objects to get params


## `ResourceModel` class


### Default properties

#### `$resource: Resource`
Contains reference to resource instance

#### `$primaryKey: string`
Defines which field is primary key of resource model.


### Default methods

#### `$setData(data: any): ResourceModel`
To fill model data from object.

#### `isNew(): boolean`
Returns true if model primary key have value 

#### `$save(): ResourceModel`
To call save or update according to isNew() value 

#### `$create(): ResourceModel`
To call resource's save action. 

#### `$update(): ResourceModel`
To call resource's update action. 

#### `$remove(): ResourceModel`
To call resource's remove action. 

#### `toJSON(): any`
Returns json data of model without methods and fields starts with '$'


## Priority of getting params by methods

Lower number - higher priority

1. Defined by @ResourceAction decorator
2. Sett by setUrl method of the resource
3. Defined by @ResourceParams decorator
4. Defined in ResourceGlobalConfig
5. Default value

## Example of service injection
```ts
export class UnitRes extends Resource {
    constructor(
            http: Http,
            injector: Injector,
            private _myService: MyService
        ) {
            super(http, injector);
        }
 }
```

## Example of auth resource service with custom headers


### `AuthGuardResource`
```ts
import {Request, Response} from '@angular/http';
import {Observable, Subscriber} from 'rxjs';
import {AuthServiceHelper} from '../helpers/index';
import {Resource} from 'ngx-resource';

export class AuthGuardResource extends Resource {

  private deferredQ: Subscriber<any>[] = [];
  private configListenerSet: boolean = false;

  getHeaders(methodOptions: any): any {
    let headers = super.getHeaders();

    // Extending our headers with Authorization
    if (!methodOptions.noAuth) {
      headers = AuthServiceHelper.extendHeaders(headers);
    }

    return headers;
  }

  responseInterceptor(observable: Observable<any>, request: Request, methodOptions: ResourceActionBase): Observable<any> {

    return Observable.create((subscriber: Subscriber<any>) => {

      observable.subscribe(
        (res: Response) => {
          if (res.headers) {
            let newToken: string = res.headers.get('X-AUTH-TOKEN');
            if (newToken) {
              AuthServiceHelper.token = newToken;
            }
          }
          subscriber.next((<any>res)._body ? res.json() : null);
        },
        (error: Response) => {
          if (error.status === 401) {
            AuthServiceHelper.token = null;
          }
          //console.warn('BaseResource request error', error, request);
          subscriber.error(error);
        },
        () => subscriber.complete()
      );

    });
  }

}
```


### `AuthResource`
```ts
import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { AppProject } from '../../project/app.project';
import { ResourceAction, ResourceMethod, ResourceParams } from 'ngx-resource';
import { AuthGuardResource } from './authGuard.resource';


@Injectable()
@ResourceParams({
  url: AppProject.BASE_URL + '/auth/v1'
})
export class AuthResource extends AuthGuardResource {

  @ResourceAction({
    method: RequestMethod.Post,
    path: '/login',
    // Custom param
    noAuth: true
  })
  login: ResourceMethod<{login: string, password: string}, any>;

  @ResourceAction({
    method: RequestMethod.Get,
    path: '/logout'
  })
  logout: ResourceMethod<void, any>;

}

```


## Example of resource model usage


### `UserResource with model`


```ts
export interface ITestModel {
  id?: string;
  name?: string;
}

export interface ITestQueryInput {
  name?: string;
}

export class TestModel extends ResourceModel<TestResource> implements ITestModel {

  id: string;
  name: string;

  $setData(data: any) {
    // You can overwrite $setData method
    if (data) {
      this.id = data.id;
      this.name = data.name;
      // do something else
    }
  }

  protected isNew(): boolean {
    return !this.id;
  }

}


@Injectable()
@ResourceParams({
  url: 'https://domain.net/api/test'
})
export class TestResource extends ResourceCRUD<ITestQueryInput, TestModel, TestModel> {

  initResultObject(): TestModel {
    return new TestModel();
  }

}

```

### Using resource with model in your app

```ts
import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'test-component',
  templateUrl: 'test.page.component.html',
  styleUrls: ['test.page.component.css'],
})
export class TestComponent implements OnInit {

  constructor(private testRes: TestResource) {}

  ngOnInit() {

    let modelTest = this.testRes.createModel();
    console.log('New modelTest', modelTest);

    modelTest.$save().$observable.subscribe(() => {
      console.log('Saved and updated modelTest', modelTest);
    });

    let modelTest2 = this.testRes.query();
    console.log('Array of models', modelTest2);

    modelTest2.$observable.subscribe(() => {
      // Data received
      console.log('Array filled with test models', modelTest2);

      let modelTest3 = modelTest2[1];

      modelTest3.name = 'Roma';
      modelTest3.$save().$observable.subscribe(() => {
        console.log('Saved and updated', modelTest3);
      });

    });

  }

);
```


## Example of mapping object

```ts

export class CTest {

  prop1: string = '';
  prop2: string = '';

  get prop(): string {
    return this.prop1 + ' ' + this.prop2;
  }

  constructor(data: any = null) {
    this.$setData(data);
  }

  $setData(data: any) {
    if (data) {
      this.prop1 = data.prop1;
      this.prop2 = data.prop2;
      // do something else
    }
  }

}

@Injectable()
@ResourceParams({
  url: 'https://domain.net/api/test'
})
export class TestRes extends Resource {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<any, CTest[]>;

  @ResourceAction({
    path: '/{!id}'
  })
  get: ResourceMethod<{id: any}, CTest>;

  initResultObject(): any {
    return new CTest();
  }

}

@Component({
  moduleId: module.id,
  selector: 'test-component',
  templateUrl: 'test.page.component.html',
  styleUrls: ['test.page.component.css'],
})
export class TestComponent implements OnInit {

  list: CTest[] = [];
  test: CTest;

  prop: string;

  constructor(private testRes:TestRes) {}

  ngOnInit():any {

    this.list = this.testRes.query();

    this.test = this.testRes.get({id:1});

    this.prepareData(); // will not set prop, test is not yet resolved
    console.log(this.test.prop); // a space ' ' will be returned because data is not yet received


    // so to get the prop we will need to wait data to be received
    this.test
      .$observable
      .subscribe(
        // Now the data is received and assigned on the object
        () => this.prepareData()
      );
  }

  private preprareData() {
    if (this.test && this.test.$resolved) {
      this.prop = this.test.prop;
    }
  }
}



```