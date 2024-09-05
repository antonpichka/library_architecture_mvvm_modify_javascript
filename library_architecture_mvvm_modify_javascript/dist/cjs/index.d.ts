export declare abstract class BaseDataForNamed<T> {
    isLoading: boolean;
    exceptionController: ExceptionController;
    protected constructor(isLoading: boolean);
    abstract get getEnumDataForNamed(): T;
    abstract toString(): string;
}
export declare abstract class BaseException {
    readonly key: string;
    private readonly thisClass;
    private readonly exceptionClass;
    protected constructor(thisClass: string, exceptionClass: string, key: string);
    abstract toString(): string;
    protected debugPrintExceptionParametersThisClassAndExceptionClass(): void;
}
export declare enum EnumGuilty {
    developer = 0,
    device = 1,
    user = 2
}
export declare class LocalException extends BaseException {
    readonly enumGuilty: EnumGuilty;
    readonly message: string;
    constructor(thisClass: string, enumGuilty: EnumGuilty, key: string, message?: string);
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
export declare class CurrentModelWIndex<T extends BaseModel> {
    readonly currentModel: T;
    readonly index: number;
    constructor(currentModel: T, index: number);
}
export declare abstract class BaseModelTTNamedTTNamedTTNamedTTIterator<T extends BaseModel> {
    protected readonly listModelIterator: Array<T>;
    protected constructor();
    protected abstract get currentModelWIndex(): CurrentModelWIndex<T>;
    getSortedListModelFromListModelParameterListModelIterator(listModel: Array<T>): T[];
}
export declare abstract class BaseListModel<T extends BaseModel> {
    readonly listModel: Array<T>;
    protected constructor(listModel: Array<T>);
    abstract clone(): BaseListModel<T>;
    abstract toString(): string;
    sortingFromModelTTNamedTTNamedTTNamedTTIteratorParameterListModel(modelTTNamedTTNamedTTNamedTTIterator: BaseModelTTNamedTTNamedTTNamedTTIterator<T>): void;
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
    abstract clone(): BaseModel;
    abstract toString(): string;
}
export declare abstract class BaseModelWrapper {
    protected readonly listObject: Array<any>;
    protected constructor(listObject: Array<any>);
    abstract createModel(): BaseModel;
}
export declare abstract class BaseListModelWrapper {
    protected readonly listsListObject: Array<Array<any>>;
    protected constructor(listsListObject: Array<Array<any>>);
    abstract createListModel(): BaseListModel<BaseModel>;
}
export declare abstract class BaseNamedState<T extends BaseDataForNamed<any>> implements IDispose {
    protected constructor();
    abstract get getDataForNamed(): T;
    abstract dispose(): void;
}
export declare class DefaultState<T extends BaseDataForNamed<any>> extends BaseNamedState<T> {
    private readonly dataForNamed;
    private isDispose;
    constructor(dataForNamed: T);
    get getDataForNamed(): T;
    dispose(): void;
}
export declare abstract class BaseNamedStreamWState<T extends BaseDataForNamed<any>> implements IDispose {
    protected constructor();
    abstract get getDataForNamed(): T;
    abstract dispose(): void;
    abstract listenStreamDataForNamedFromCallback(callback: (data: T) => void): void;
    abstract notifyStreamDataForNamed(): void;
}
export declare class DefaultStreamWState<T extends BaseDataForNamed<any>> extends BaseNamedStreamWState<T> {
    private readonly dataForNamed;
    private isDispose;
    private callback;
    constructor(dataForNamed: T);
    get getDataForNamed(): T;
    dispose(): void;
    listenStreamDataForNamedFromCallback(callback: (data: T) => void): void;
    notifyStreamDataForNamed(): void;
}
export declare class TempCacheService {
    static readonly instance: TempCacheService;
    private readonly tempCache;
    private readonly tempCacheWStreams;
    private constructor();
    getNamed<T>(keyTempCache: string, defaultValue: T): T;
    dispose(listKeyTempCache: Array<string>, iteration: number): void;
    listenNamed(keyTempCache: string, callback: (data: any) => void, iteration: number): void;
    update(keyTempCache: string, value: any): void;
    updateWNotify(keyTempCache: string, value: any): void;
    delete(keyTempCache: string): void;
}
export declare class IterationService {
    static readonly instance: IterationService;
    private iteration;
    private constructor();
    newValueParameterIteration(): number;
}
export declare class TempCacheProvider {
    private readonly tempCacheService;
    private readonly iteration;
    constructor();
    getNamed<T>(keyTempCache: string, defaultValue: T): T;
    dispose(listKeyTempCache: Array<string>): void;
    listenNamed(keyTempCache: string, callback: (data: any) => void): void;
    update(keyTempCache: string, value: any): void;
    updateWNotify(keyTempCache: string, value: any): void;
    delete(keyTempCache: string): void;
}
export declare abstract class BaseModelWrapperRepository implements IDispose {
    protected constructor();
    abstract dispose(): void;
    protected getSafeValueFromMapAndKeyAndDefaultValue(map: Map<string, any>, key: string, defaultValue: any): any;
}
export declare class ExceptionController {
    private readonly exception;
    private constructor();
    static success(): ExceptionController;
    static exception(exception: BaseException | null): ExceptionController;
    get getKeyParameterException(): string;
    isWhereNotEqualsNullParameterException(): boolean;
    toString(): string;
}
export interface IDispose {
    dispose(): void;
}
export declare class Result {
    readonly parameter: any | null;
    readonly exceptionController: ExceptionController;
    private constructor();
    static success(parameter: any): Result;
    static exception(exception: BaseException): Result;
}
export declare class ResultWithModelWrapper {
    readonly modelWrapper: BaseModelWrapper | null;
    readonly exceptionController: ExceptionController;
    private constructor();
    static success(modelWrapper: BaseModelWrapper): ResultWithModelWrapper;
    static exception(exception: BaseException): ResultWithModelWrapper;
}
export declare class ResultWithListModelsWrapper {
    readonly listModelWrapper: BaseListModelWrapper | null;
    readonly exceptionController: ExceptionController;
    private constructor();
    static success(listModelWrapper: BaseListModelWrapper): ResultWithListModelsWrapper;
    static exception(exception: BaseException): ResultWithListModelsWrapper;
}
export declare function debugPrint(text: string): void;
export declare function debugPrintException(text: string): void;
//# sourceMappingURL=index.d.ts.map