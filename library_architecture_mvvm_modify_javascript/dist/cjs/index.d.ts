export declare abstract class BaseDataForNamed<T> {
    isLoading: boolean;
    exceptionController: ExceptionController;
    protected constructor(isLoading: boolean);
    abstract get getEnumDataForNamed(): T;
}
export declare abstract class BaseModelWNamedWNamedWNamedIterator<T extends BaseModel> implements IIterator<T> {
    protected readonly listModelIterator: Array<T>;
    protected constructor();
    abstract get current(): T;
    getSortedListModelFromNewListModelParameterListModelIterator(newListModel: Array<T>): T[];
    moveNext(): boolean;
}
export declare abstract class BaseListModel<T extends BaseModel> {
    readonly listModel: Array<T>;
    protected constructor(listModel: Array<T>);
    abstract get getClone(): BaseListModel<T>;
    sortingFromModelWNamedWNamedWNamedIteratorParameterListModel(modelWNamedWNamedWNamedIterator: BaseModelWNamedWNamedWNamedIterator<T>): void;
    insertFromNewModelParameterListModel(newModel: T): void;
    updateFromNewModelParameterListModel(newModel: T): void;
    deleteFromUniqueIdByModelParameterListModel(uniqueIdByModel: string): void;
    insertListFromNewListModelParameterListModel(newListModel: Array<T>): void;
    updateListFromNewListModelParameterListModel(newListModel: Array<T>): void;
    deleteListFromListUniqueIdByModelParameterListModel(listUniqueIdByModel: Array<string>): void;
}
export declare abstract class BaseModel {
    readonly uniqueId: string;
    protected constructor(uniqueId: string);
    abstract get getClone(): BaseModel;
}
export declare class Bools extends BaseModel {
    readonly isField: boolean;
    constructor(isField: boolean);
    get getClone(): Bools;
    toString(): string;
}
export declare class DatesTimes extends BaseModel {
    readonly dateTime: Date;
    constructor(dateTime: Date);
    get getClone(): DatesTimes;
    toString(): string;
}
export declare class Doubles extends BaseModel {
    readonly field: number;
    constructor(field: number);
    get getClone(): Doubles;
    toString(): string;
}
export declare class Ints extends BaseModel {
    readonly field: number;
    constructor(field: number);
    get getClone(): Ints;
    toString(): string;
}
export declare class ListBools<T extends Bools> extends BaseListModel<T> {
    constructor(listModel: Array<T>);
    get getClone(): ListBools<T>;
    toString(): string;
}
export declare class ListDatesTimes<T extends DatesTimes> extends BaseListModel<T> {
    constructor(listModel: Array<T>);
    get getClone(): ListDatesTimes<T>;
    toString(): string;
}
export declare class ListDoubles<T extends Doubles> extends BaseListModel<T> {
    constructor(listModel: Array<T>);
    get getClone(): ListDoubles<T>;
    toString(): string;
}
export declare class ListInts<T extends Ints> extends BaseListModel<T> {
    constructor(listModel: Array<T>);
    get getClone(): ListInts<T>;
    toString(): string;
}
export declare class ListStrings<T extends Strings> extends BaseListModel<T> {
    constructor(listModel: Array<T>);
    get getClone(): ListStrings<T>;
    toString(): string;
}
export declare class Strings extends BaseModel {
    readonly field: string;
    constructor(field: string);
    get getClone(): Strings;
    toString(): string;
}
export declare abstract class BaseNamedViewModel<T extends BaseDataForNamed<any>, Y extends BaseNamedStreamWState<T>> implements IDispose {
    protected readonly namedStreamWState: Y;
    protected constructor(namedStreamWState: Y);
    abstract init(): Promise<string>;
    dispose(): void;
    get getDataForNamedParameterNamedStreamWState(): T;
    listenStreamDataForNamedFromCallbackParameterNamedStreamWState(callback: (data: T) => void): void;
    notifyStreamDataForNamedParameterNamedStreamWState(): void;
}
export declare abstract class BaseNamedViewModelCutDown<T extends BaseDataForNamed<any>, Y extends BaseNamedState<T>> implements IDispose {
    protected readonly namedState: Y;
    protected constructor(namedState: Y);
    abstract init(): Promise<string>;
    dispose(): void;
    get getDataForNamedParameterNamedState(): T;
}
export declare class TempCacheService {
    static readonly instance: TempCacheService;
    private readonly tempCache;
    private readonly tempCacheWListAction;
    private constructor();
    static clearTempCacheParmeterInstance(): void;
    static closeStreamFromKeyTempCacheParmeterInstance(keyTempCache: string): void;
    static closeStreamFromListKeyTempCacheParmeterInstance(listKeyTempCache: Array<string>): void;
    static closeStreamsParameterInstance(): void;
    getFromKeyTempCacheParameterTempCache(keyTempCache: string): any;
    listenStreamFromKeyTempCacheAndCallbackParameterOne(keyTempCache: string, callback: (data: any) => void): void;
    updateFromKeyTempCacheAndValueParameterTempCache(keyTempCache: string, value: any): void;
    updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterTempCache(keyTempCache: string, value: any): void;
    deleteFromKeyTempCacheParameterTempCache(keyTempCache: string): void;
}
export declare abstract class BaseException {
    readonly key: string;
    private readonly thisClass;
    private readonly exceptionClass;
    protected constructor(thisClass: string, exceptionClass: string, key: string);
    protected debugPrintExceptionWhereToStringParametersThisClassAndExceptionClass(): void;
}
export declare enum EnumGuilty {
    developer = 0,
    device = 1,
    user = 2
}
export declare class LocalException extends BaseException {
    readonly valueWEnumGuilty: EnumGuilty;
    readonly message: string;
    constructor(thisClass: string, valueWEnumGuilty: EnumGuilty, key: string, message?: string);
    toString(): string;
}
export declare class NetworkException extends BaseException {
    readonly statusCode: number;
    readonly nameStatusCode: string;
    readonly descriptionStatusCode: string;
    constructor(thisClass: string, key: string, statusCode: number, nameStatusCode?: string, descriptionStatusCode?: string);
    static fromKeyAndStatusCode(thisClass: string, key: string, statusCode: number): NetworkException;
    toString(): string;
}
export declare abstract class BaseNamedState<T extends BaseDataForNamed<any>> implements IDispose {
    protected constructor();
    abstract dispose(): void;
    abstract get getDataForNamed(): T;
}
export declare class DefaultState<T extends BaseDataForNamed<any>> extends BaseNamedState<T> {
    private readonly dataForNamed;
    private isDispose;
    constructor(dataForNamed: T);
    dispose(): void;
    get getDataForNamed(): T;
}
export declare abstract class BaseNamedStreamWState<T extends BaseDataForNamed<any>> implements IDispose {
    protected constructor();
    abstract dispose(): void;
    abstract get getDataForNamed(): T;
    abstract listenStreamDataForNamedFromCallback(callback: (data: T) => void): void;
    abstract notifyStreamDataForNamed(): void;
}
export declare class DefaultStreamWState<T extends BaseDataForNamed<any>> extends BaseNamedStreamWState<T> {
    private readonly dataForNamed;
    private isDispose;
    private callback;
    constructor(dataForNamed: T);
    dispose(): void;
    get getDataForNamed(): T;
    listenStreamDataForNamedFromCallback(callback: (data: T) => void): void;
    notifyStreamDataForNamed(): void;
}
export declare class ExceptionController {
    private readonly exception;
    private constructor();
    static success(): ExceptionController;
    static exception(exception: BaseException | null): ExceptionController;
    get getKeyParameterException(): string;
    isWhereNotEqualsNullParameterException(): boolean;
}
export interface IDispose {
    dispose(): void;
}
export interface IIterator<T> {
    get current(): T;
    moveNext(): boolean;
}
export declare class Result {
    readonly parameter: any | null;
    readonly exceptionController: ExceptionController;
    private constructor();
    static success(parameter: any): Result;
    static exception(exception: BaseException): Result;
}
export declare function debugPrint(text: string): void;
export declare function debugPrintException(text: string): void;
//# sourceMappingURL=index.d.ts.map