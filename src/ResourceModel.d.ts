import { Observable } from 'rxjs/Rx';
export declare abstract class ResourceModel<R> {
    protected $cachedRelated: {
        [key: string]: {
            id: any;
            data: any;
        };
    };
    $resolved: boolean;
    $observable: Observable<any>;
    $abortRequest: () => void;
    $resource: R;
    $primaryKey: string;
    constructor();
    static create(data?: any, commit?: boolean): void;
    $setData(data: any): this;
    $save(): this;
    $create(): this;
    $update(): this;
    $remove(): this;
    toJSON(): any;
    protected isNew(): boolean;
    private $resource_method(methodName);
}
