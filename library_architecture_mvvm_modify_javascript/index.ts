export abstract class BaseDataForNamed<T> {
    public isLoading: boolean;
    public exceptionController: ExceptionController;

    protected constructor(isLoading: boolean) {
        this.isLoading = isLoading;
        this.exceptionController = ExceptionController.success();
    }

    public abstract get getEnumDataForNamed(): T;
}

export abstract class BaseModelWNamedWNamedWNamedIterator<T extends BaseModel> implements IIterator<T> {
    protected readonly listModelIterator: Array<T>;

    protected constructor() {
        this.listModelIterator = new Array<T>();
    }

    public abstract get current(): T;

    public getSortedListModelFromNewListModelParameterListModelIterator(newListModel: Array<T>) {
        if(newListModel.length <= 0) {
            return new Array<T>();
        }
        this.listModelIterator.push(...newListModel);
        const newListModelFIRST = new Array<T>();
        while(this.moveNext()) {
            const newModel = this.current;
            newListModelFIRST.push(newModel);
        }
        return newListModelFIRST;
    }

    public moveNext(): boolean {
        return this.listModelIterator.length > 0;
    }
}

export abstract class BaseListModel<T extends BaseModel> {
    public readonly listModel: Array<T>;

    protected constructor(listModel: Array<T>) {
        this.listModel = listModel;
    }

    public abstract get getClone(): BaseListModel<T>;

    public sortingFromModelWNamedWNamedWNamedIteratorParameterListModel(modelWNamedWNamedWNamedIterator: BaseModelWNamedWNamedWNamedIterator<T>): void {
        const sortedListModelFromNewListModelParameterListModelIterator = modelWNamedWNamedWNamedIterator.getSortedListModelFromNewListModelParameterListModelIterator(this.listModel);
        this.listModel.length > 0 ? this.listModel.splice(0,this.listModel.length) : null; 
        sortedListModelFromNewListModelParameterListModelIterator.length > 0 ? this.listModel.push(...sortedListModelFromNewListModelParameterListModelIterator) : null;
    }

    public insertFromNewModelParameterListModel(newModel: T): void {
        this.listModel.push(newModel);
    }

    public updateFromNewModelParameterListModel(newModel: T): void {
        const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == newModel.uniqueId);
        this.listModel.splice(findIndex,1,newModel);
    }

    public deleteFromUniqueIdByModelParameterListModel(uniqueIdByModel: string): void {
        const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == uniqueIdByModel);
        this.listModel.splice(findIndex,1);
    }

    public insertListFromNewListModelParameterListModel(newListModel: Array<T>): void {
        this.listModel.push(...newListModel);
    }

    public updateListFromNewListModelParameterListModel(newListModel: Array<T>): void {
        for(const newItemModel of newListModel) {
            const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == newItemModel.uniqueId);
            this.listModel.splice(findIndex,1,newItemModel);
        }
    }

    public deleteListFromListUniqueIdByModelParameterListModel(listUniqueIdByModel: Array<string>) {
        for(const itemUniqueIdByModel of listUniqueIdByModel) {
            const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == itemUniqueIdByModel);
            this.listModel.splice(findIndex,1);
        }
    }
}

export abstract class BaseModel {
    public readonly uniqueId: string;
    
    protected constructor(uniqueId: string) {
        this.uniqueId = uniqueId;
    }

    public abstract get getClone(): BaseModel;
}

export class Bools extends BaseModel {
    public readonly isField: boolean;

    public constructor(isField: boolean) {
        super("" + isField + "");
        this.isField = isField;
    }

    public override get getClone(): Bools {
        return new Bools(this.isField);
    }

    public override toString(): string {
        return "Bools(isField: " + this.isField + ")";
    }
}

export class DatesTimes extends BaseModel {
    public readonly dateTime: Date;

    public constructor(dateTime: Date) {
        super(dateTime.toString());
        this.dateTime = dateTime;
    }

    public override get getClone(): DatesTimes {
        return new DatesTimes(this.dateTime);
    }

    public override toString(): string {
        return "DatesTimes(dateTime: " + this.dateTime.toString() + ")";
    }
}

export class Doubles extends BaseModel {
    public readonly field: number;

    public constructor(field: number) {
        super("" + field + "");
        this.field = field;
    }

    public override get getClone(): Doubles {
        return new Doubles(this.field);
    }

    public override toString(): string {
        return "Doubles(field: " + this.field + ")";
    }
}

export class Ints extends BaseModel {
    public readonly field: number;

    public constructor(field: number) {
        super("" + field + "");
        this.field = field;
    }

    public override get getClone(): Ints {
        return new Ints(this.field);
    }

    public override toString(): string {
        return "Ints(field: " + this.field + ")";
    }
}

export class ListBools<T extends Bools> extends BaseListModel<T> {
    public constructor(listModel: Array<T>) {
        super(listModel);
    }

    public override get getClone(): ListBools<T> {
        const newListModel = new Array<T>();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone as T);
        }
        return new ListBools(newListModel);
    }

    public override toString(): string {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListBools(listModel: [" + strListModel + "])";
    }
}

export class ListDatesTimes<T extends DatesTimes> extends BaseListModel<T> {
    public constructor(listModel: Array<T>) {
        super(listModel);
    }

    public override get getClone(): ListDatesTimes<T> {
        const newListModel = new Array<T>();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone as T);
        }
        return new ListDatesTimes(newListModel);
    }

    public override toString(): string {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListDatesTimes(listModel: [" + strListModel + "])";
    }
}

export class ListDoubles<T extends Doubles> extends BaseListModel<T> {
    public constructor(listModel: Array<T>) {
        super(listModel);
    }

    public override get getClone(): ListDoubles<T> {
        const newListModel = new Array<T>();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone as T);
        }
        return new ListDoubles(newListModel);
    }

    public override toString(): string {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListDoubles(listModel: [" + strListModel + "])";
    }
}

export class ListInts<T extends Ints> extends BaseListModel<T> {
    public constructor(listModel: Array<T>) {
        super(listModel);
    }

    public override get getClone(): ListInts<T> {
        const newListModel = new Array<T>();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone as T);
        }
        return new ListInts(newListModel);
    }

    public override toString(): string {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListInts(listModel: [" + strListModel + "])";
    }
}

export class ListStrings<T extends Strings> extends BaseListModel<T> {
    public constructor(listModel: Array<T>) {
        super(listModel);
    }

    public override get getClone(): ListStrings<T> {
        const newListModel = new Array<T>();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone as T);
        }
        return new ListStrings(newListModel);
    }

    public override toString(): string {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListStrings(listModel: [" + strListModel + "])";
    }
}

export class Strings extends BaseModel {
    public readonly field: string;

    constructor(field: string) {
        super("" + field + "");
        this.field = field;
    }

    public override get getClone(): Strings {
        return new Strings(this.field);
    }

    public override toString(): string {
        return "Strings(field: " + this.field + ")";
    }
}

// OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
// NamedUtility

export abstract class BaseNamedViewModel<T extends BaseDataForNamed<any>,Y extends BaseNamedStreamWState<T>> implements IDispose {
    protected readonly namedStreamWState: Y;

    protected constructor(namedStreamWState: Y) {
        this.namedStreamWState = namedStreamWState;
    }

    public abstract init(): Promise<string>;

    public dispose(): void {
        this.namedStreamWState.dispose();
    }

    public get getDataForNamedParameterNamedStreamWState(): T {
        return this.namedStreamWState.getDataForNamed;       
    }

    public listenStreamDataForNamedFromCallbackParameterNamedStreamWState(callback: (data: T) => void): void {
        this.namedStreamWState.listenStreamDataForNamedFromCallback(callback);
    }

    public notifyStreamDataForNamedParameterNamedStreamWState(): void {
        this.namedStreamWState.notifyStreamDataForNamed();
    }
}

// OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
// NamedUtility

export abstract class BaseNamedViewModelCutDown<T extends BaseDataForNamed<any>,Y extends BaseNamedState<T>> implements IDispose {
    protected readonly namedState: Y;

    protected constructor(namedState: Y) {
        this.namedState = namedState;
    }

    public abstract init(): Promise<string>;

    public dispose(): void {
        this.namedState.dispose();
    }

    public get getDataForNamedParameterNamedState(): T {
        return this.namedState.getDataForNamed;
    }
}

export class TempCacheService {
    public static readonly instance = new TempCacheService();
    private readonly tempCache: Map<string,any>;
    private readonly tempCacheWListAction: Map<string,Array<(data: any) => void>>;

    private constructor() {
        this.tempCache = new Map<string,any>();
        this.tempCacheWListAction = new Map<string,Array<(data: any) => void>>();
    }

    public static clearTempCacheParmeterInstance(): void {
        const tempCache = this.instance.tempCache;
        tempCache.clear();
    }

    public static closeStreamFromKeyTempCacheParmeterInstance(keyTempCache: string): void {
        const tempCacheWListAction = this.instance.tempCacheWListAction;
        if(!tempCacheWListAction.has(keyTempCache)) {
            return;
        }
        const get = tempCacheWListAction.get(keyTempCache);
        get?.splice(0,get.length);
    }

    public static closeStreamFromListKeyTempCacheParmeterInstance(listKeyTempCache: Array<string>): void {
        const tempCacheWListAction = this.instance.tempCacheWListAction;
        for(const itemKeyTempCache of listKeyTempCache) {
            if(!tempCacheWListAction.has(itemKeyTempCache)) {
                return;
            }
            const get = tempCacheWListAction.get(itemKeyTempCache);
            get?.splice(0,get.length);
        }
    }

    public static closeStreamsParameterInstance(): void {
        const tempCacheWListAction = this.instance.tempCacheWListAction;
        for(const [,value] of tempCacheWListAction) {
            value.splice(0,value.length);
        }
    }
    
    public getFromKeyTempCacheParameterTempCache(keyTempCache: string): any {
        const tempCache = this.tempCache;
        if(!tempCache.has(keyTempCache)) {
            throw new LocalException("TempCacheService",EnumGuilty.developer,keyTempCache,"No exists key");
        }
        return tempCache.get(keyTempCache);
    }

    public listenStreamFromKeyTempCacheAndCallbackParameterOne(keyTempCache: string,callback: (data: any) => void): void {
        const tempCacheWListAction = this.tempCacheWListAction;
        if(!tempCacheWListAction.has(keyTempCache)) {
            tempCacheWListAction.set(keyTempCache,new Array<(data: any) => void>());
            tempCacheWListAction.get(keyTempCache)?.push(callback);
            return;
        }
        tempCacheWListAction.get(keyTempCache)?.push(callback);
    }

    public updateFromKeyTempCacheAndValueParameterTempCache(keyTempCache: string,value: any): void {
        this.tempCache.set(keyTempCache,value);
    }

    public updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterTempCache(keyTempCache: string,value: any): void {
        this.updateFromKeyTempCacheAndValueParameterTempCache(keyTempCache,value);
        const tempCacheWListAction = this.tempCacheWListAction;
        if(!tempCacheWListAction.has(keyTempCache)) {
            return;
        }
        const get = tempCacheWListAction.get(keyTempCache)!;
        for(const itemGet of get) {
            itemGet(value);
        }
    }

    public deleteFromKeyTempCacheParameterTempCache(keyTempCache: string): void {
        this.tempCache.delete(keyTempCache);
    }
}

export abstract class BaseException {
    public readonly key: string;
    private readonly thisClass: string;
    private readonly exceptionClass: string;

    protected constructor(thisClass: string, exceptionClass: string, key: string) {
        this.thisClass = thisClass;
        this.exceptionClass = exceptionClass;
        this.key = key;
    }
       
    /// Call this method in the descendant constructor as the last line
    protected debugPrintExceptionWhereToStringParametersThisClassAndExceptionClass(): void {
        debugPrintException("\n===start_to_trace_exception===\n");
        debugPrintException(
            "WhereHappenedException(Class) --> " + this.thisClass + "\n" +
            "NameException(Class) --> " + this.exceptionClass + "\n" +
            "toString() --> " + this.toString());
        debugPrintException("\n===end_to_trace_exception===\n");
    }
}

export enum EnumGuilty {
    developer,
    device,
    user
}

export class LocalException extends BaseException {
    public readonly valueWEnumGuilty: EnumGuilty;
    public readonly message: string;
    
    public constructor(thisClass: string,valueWEnumGuilty: EnumGuilty,key: string,message: string = "") {
        super(thisClass,"LocalException",key);
        this.valueWEnumGuilty = valueWEnumGuilty;
        this.message = message;
        this.debugPrintExceptionWhereToStringParametersThisClassAndExceptionClass();
    }

    public override toString(): string {
        return "LocalException(valueWEnumGuilty: " + this.valueWEnumGuilty + ", " + 
            "key: " + this.key + ", " + 
            "message (optional): " + this.message + ")";
    }
}

export class NetworkException extends BaseException {
    public readonly statusCode: number;
    public readonly nameStatusCode: string;
    public readonly descriptionStatusCode: string;

    public constructor(thisClass: string,key: string,statusCode: number,nameStatusCode: string = "",descriptionStatusCode: string = "") {
        super(thisClass,"NetworkException",key);
        this.statusCode = statusCode;
        this.nameStatusCode = nameStatusCode;
        this.descriptionStatusCode = descriptionStatusCode;
        this.debugPrintExceptionWhereToStringParametersThisClassAndExceptionClass();
    }

    public static fromKeyAndStatusCode(thisClass: string,key: string,statusCode: number): NetworkException {
        switch(statusCode) {
            case 201:
                return new NetworkException(thisClass, key, 201, "201 Created", "The request has been fulfilled and resulted in a new resource being created.");
            case 202:
                return new NetworkException(thisClass, key, 202, "202 Accepted", "The request has been accepted for processing, but the processing has not been completed.");
            case 203:
                return new NetworkException(thisClass, key, 203, "203 Non-Authoritative Information", "The returned metaInformation in the entity-header is not the definitive set as available from the origin server, but is gathered from a local or a third-party copy.");
            case 204:
                return new NetworkException(thisClass, key, 204, "204 No Content", "The server has fulfilled the request but does not need to return an entity-body, and might want to return updated metaInformation.");
            case 205:
                return new NetworkException(thisClass, key, 205, "205 Reset Content", "The server has fulfilled the request and the user agent SHOULD reset the document view which caused the request to be sent.");
            case 206:
                return new NetworkException(thisClass, key, 206, "206 Partial Content", "The server has fulfilled the partial GET request for the resource.");
            case 300:
                return new NetworkException(thisClass, key, 300, "300 Multiple Choices", "User (or user agent) can select a preferred representation and redirect its request to that location.");
            case 301:
                return new NetworkException(thisClass, key, 301, "301 Moved Permanently", "The requested resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs.");
            case 302:
                return new NetworkException(thisClass, key, 302, "302 Found", "The requested resource resides temporarily under a different URI.");
            case 303:
                return new NetworkException(thisClass, key, 303, "303 See Other", "The response to the request can be found under a different URI and SHOULD be retrieved using a GET method on that resource.");
            case 304:
                return new NetworkException(thisClass, key, 304, "304 Not Modified", "If the client has performed a conditional GET request and access is allowed, but the document has not been modified, the server SHOULD respond with this status code.");
            case 305:
                return new NetworkException(thisClass, key, 305, "305 Use Proxy", "The requested resource MUST be accessed through the proxy given by the Location field.");
            case 307:
                return new NetworkException(thisClass, key, 307, "307 Temporary Redirect", "The requested resource resides temporarily under a different URI.");
            case 400:
                return new NetworkException(thisClass, key, 400, "400 Bad Request", "The request could not be understood by the server due to malformed syntax.");
            case 401:
                return new NetworkException(thisClass, key, 401, "401 Unauthorized", "The request requires user authentication.");
            case 403:
                return new NetworkException(thisClass, key, 403, "403 Forbidden", "The server understood the request, but is refusing to fulfill it.");
            case 404:
                return new NetworkException(thisClass, key, 404, "404 Not Found", "The server has not found anything matching the Request-URI.");
            case 405:
                return new NetworkException(thisClass, key, 405, "405 Method Not Allowed','The method specified in the Request-Line is not allowed for the resource identified by the Request-URI.");
            case 406:
                return new NetworkException(thisClass, key, 406, "406 Not Acceptable", "The resource identified by the request is only capable of generating response entities which have content characteristics not acceptable according to the accept headers sent in the request.");
            case 407:
                return new NetworkException(thisClass, key, 407, "407 Proxy Authentication Required", "This code is similar to 401 (Unauthorized), but indicates that the client must first authenticate itself with the proxy.");
            case 408:
                return new NetworkException(thisClass, key, 408, "408 Request Timeout", "The client did not produce a request within the time that the server was prepared to wait.");
            case 409:
                return new NetworkException(thisClass, key, 409, "409 Conflict", "The request could not be completed due to a conflict with the current state of the resource.");
            case 410:
                return new NetworkException(thisClass, key, 410, "410 Gone", "The requested resource is no longer available at the server and no forwarding address is known.");
            case 411:
                return new NetworkException(thisClass, key, 411, "411 Length Required", "The server refuses to accept the request without a defined Content-Length.");
            case 412:
                return new NetworkException(thisClass, key, 412, "412 Precondition Failed", "The precondition given in one or more of the request-header fields evaluated to false when it was tested on the server.");
            case 413:
                return new NetworkException(thisClass, key, 413, "413 Request Entity Too Large", "The server is refusing to process a request because the request entity is larger than the server is willing or able to process.");
            case 414:
                return new NetworkException(thisClass, key, 414, "414 Request-URI Too Long", "The server is refusing to service the request because the Request-URI is longer than the server is willing to interpret.");
            case 415:
                return new NetworkException(thisClass, key, 415, "415 Unsupported Media Type", "The server is refusing to service the request because the entity of the request is in a format not supported by the requested resource for the requested method.");
            case 416:
                return new NetworkException(thisClass, key, 416, "416 Requested Range Not Satisfiable", "A server SHOULD return a response with this status code if a request included a Range request-header field (section 14.35), and none of the range-specifier values in this field overlap the current extent of the selected resource, and the request did not include an If-Range request-header field.");
            case 417:
                return new NetworkException(thisClass, key, 417, "417 Expectation Failed", "The expectation given in an Expect request-header field (see section 14.20) could not be met by this server.");
            case 500:
                return new NetworkException(thisClass, key, 500, "500 Internal Server Error", "The server encountered an unexpected condition which prevented it from fulfilling the request.");
            case 501:
                return new NetworkException(thisClass, key, 501, "501 Not Implemented", "The server does not support the functionality interface_function_view_model to fulfill the request.");
            case 502:
                return new NetworkException(thisClass, key, 502, "502 Bad Gateway", "The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.");
            case 503:
                return new NetworkException(thisClass, key, 503, "503 Service Unavailable", "The server is currently unable to handle the request due to a temporary overloading or maintenance of the server.");
            case 504:
                return new NetworkException(thisClass, key, 504, "504 Gateway Timeout", "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI.");
            case 505:
                return new NetworkException(thisClass, key, 505, "505 HTTP Version Not Supported", "The server does not support, or refuses to support, the HTTP protocol version that was used in the request message.");
            default:
                return new NetworkException(thisClass, key, 0);    
        }
    } 

    public override toString(): string {
        return "NetworkException(key: " + this.key + ", " +
            "statusCode: " + this.statusCode + ", " +
            "nameStatusCode (optional): " + this.nameStatusCode + ", " +
            "descriptionStatusCode (optional): " + this.descriptionStatusCode + ")";
    }
}

export abstract class BaseNamedState<T extends BaseDataForNamed<any>> implements IDispose {
    protected constructor() {
    }
    
    public abstract dispose(): void;

    public abstract get getDataForNamed(): T;
}

export class DefaultState<T extends BaseDataForNamed<any>> extends BaseNamedState<T> {
    private readonly dataForNamed: T;
    private isDispose: boolean = false;

    public constructor(dataForNamed: T) {
        super();
        this.dataForNamed = dataForNamed;
    }

    public override dispose(): void {
        if(this.isDispose) {
            return;
        }
        this.isDispose = true;
    }

    public override get getDataForNamed(): T {
        return this.dataForNamed;
    }
}

export abstract class BaseNamedStreamWState<T extends BaseDataForNamed<any>> implements IDispose {
    protected constructor() {
    }

    public abstract dispose(): void;

    public abstract get getDataForNamed(): T;

    public abstract listenStreamDataForNamedFromCallback(callback: (data: T) => void): void;

    public abstract notifyStreamDataForNamed(): void;
}

export class DefaultStreamWState<T extends BaseDataForNamed<any>> extends BaseNamedStreamWState<T> {
    private readonly dataForNamed: T;
    private isDispose: boolean = false;
    private callback: ((data: T) => void) | null;

    public constructor(dataForNamed: T) {
        super();
        this.dataForNamed = dataForNamed;
        this.callback = null;
    }
    
    public override dispose(): void {
        if(this.isDispose) {
            return;
        }
        this.isDispose = true;
        this.callback = null;
    }

    public override get getDataForNamed(): T {
        return this.dataForNamed;
    }

    public override listenStreamDataForNamedFromCallback(callback: (data: T) => void): void {
        if(this.isDispose) {
            throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQListenStreamDataForNamedFromCallback","Already disposed of");
        }
        if(this.callback != null) {
            throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQListenStreamDataForNamedFromCallback","Duplicate");
        }
        this.callback = callback;
    }

    public override notifyStreamDataForNamed(): void {
        if(this.isDispose) {
            throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQNotifyStreamDataForNamed","Already disposed of");
        }
        if(this.callback == null) {
            throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQNotifyStreamDataForNamed","Stream has no listener");
        }
        this.callback(this.dataForNamed);
    }
}

export class ExceptionController {
    private readonly exception: BaseException | null;

    private constructor(exception: BaseException | null) {
        this.exception = exception;
    }

    public static success(): ExceptionController {
        return new ExceptionController(null);
    }

    public static exception(exception: BaseException | null): ExceptionController {
        return new ExceptionController(exception);
    }

    public get getKeyParameterException(): string {
        return this.exception?.key ?? "";
    }

    public isWhereNotEqualsNullParameterException(): boolean {
        return this.exception != null;
    }
}

export interface IDispose {
    dispose(): void;
}

export interface IIterator<T> {
    get current(): T;
    moveNext(): boolean;
}

export class Result {
    public readonly parameter: any | null;
    public readonly exceptionController: ExceptionController;

    private constructor(parameter: any | null, exceptionController: ExceptionController) {
        this.parameter = parameter;
        this.exceptionController = exceptionController;
    }

    public static success(parameter: any): Result {
        return new Result(parameter,ExceptionController.success());
    }

    public static exception(exception: BaseException): Result {
        return new Result(null,ExceptionController.exception(exception));
    }
}

export function debugPrint(text: string) : void {
    console.log(text);
}

export function debugPrintException(text: string) : void {
    debugPrint("\x1B[31m" + text +"\x1b[0m");
}