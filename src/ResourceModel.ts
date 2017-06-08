import {Observable} from 'rxjs/Rx';


export abstract class ResourceModel<R> {

  protected $cachedRelated: {[key: string]: {id: any, data: any}} = {};

  $resolved: boolean;
  $observable: Observable<any>;
  $abortRequest: () => void;
  $resource: R;
  $primaryKey: string = 'id';

  constructor() {
    this.$resource = (<any>Reflect).getMetadata('resource', this.constructor);
  }

  static create(data: any = {}, commit: boolean = true) {
    console.error('Model static create is not available anymore. Please use new YourModel() instead');
  }

  public $setData(data: any) {
    Object.assign(this, data);
    return this;
  }


  public $save() {

    if (this.isNew()) {
      return this.$create();
    } else {
      return this.$update();
    }

  }

  public $create() {
    return this.$resource_method('save');
  }

  public $update() {
    return this.$resource_method('update');
  }

  public $remove() {
    return this.$resource_method('remove');
  }

  public toJSON():any {
    let retObj: any = {};

    for (let propName in this) {

      if (!((<any>this)[propName] instanceof Function) && !(propName.charAt(0) === '$')) {
        retObj[propName] = (<any>this)[propName];
      }

    }
    return retObj;
  }

  protected isNew(): boolean {
    return !(<any>this)[this.$primaryKey];
  }

  private $resource_method(methodName: string) {

    if (!this.$resource) {
      console.error(`Your Resource is not set. Please use resource.createModel() method to create model.`);
      return this;
    }

    if (!(<any>this.$resource)[methodName]) {
      console.error(`Your Resource has no implemented ${methodName} method.`);
      return this;
    }

    (<any>this.$resource)[methodName](this);

    return this;
  }



}
