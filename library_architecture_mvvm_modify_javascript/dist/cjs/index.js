"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debugPrintException = exports.debugPrint = exports.Result = exports.ExceptionController = exports.DefaultStreamWState = exports.BaseNamedStreamWState = exports.DefaultState = exports.BaseNamedState = exports.NetworkException = exports.LocalException = exports.EnumGuilty = exports.BaseException = exports.TempCacheService = exports.BaseNamedViewModelCutDown = exports.BaseNamedViewModel = exports.Strings = exports.ListStrings = exports.ListInts = exports.ListDoubles = exports.ListDatesTimes = exports.ListBools = exports.Ints = exports.Doubles = exports.DatesTimes = exports.Bools = exports.BaseModel = exports.BaseListModel = exports.BaseModelWNamedWNamedWNamedIterator = exports.BaseDataForNamed = void 0;
class BaseDataForNamed {
    constructor(isLoading) {
        this.isLoading = isLoading;
        this.exceptionController = ExceptionController.success();
    }
}
exports.BaseDataForNamed = BaseDataForNamed;
class BaseModelWNamedWNamedWNamedIterator {
    constructor() {
        this.listModelIterator = new Array();
    }
    getSortedListModelFromNewListModelParameterListModelIterator(newListModel) {
        if (newListModel.length <= 0) {
            return new Array();
        }
        this.listModelIterator.push(...newListModel);
        const newListModelFIRST = new Array();
        while (this.moveNext()) {
            const newModel = this.current;
            newListModelFIRST.push(newModel);
        }
        return newListModelFIRST;
    }
    moveNext() {
        return this.listModelIterator.length > 0;
    }
}
exports.BaseModelWNamedWNamedWNamedIterator = BaseModelWNamedWNamedWNamedIterator;
class BaseListModel {
    constructor(listModel) {
        this.listModel = listModel;
    }
    sortingFromModelWNamedWNamedWNamedIteratorParameterListModel(modelWNamedWNamedWNamedIterator) {
        const sortedListModelFromNewListModelParameterListModelIterator = modelWNamedWNamedWNamedIterator.getSortedListModelFromNewListModelParameterListModelIterator(this.listModel);
        this.listModel.length > 0 ? this.listModel.splice(0, this.listModel.length) : null;
        sortedListModelFromNewListModelParameterListModelIterator.length > 0 ? this.listModel.push(...sortedListModelFromNewListModelParameterListModelIterator) : null;
    }
    insertFromNewModelParameterListModel(newModel) {
        this.listModel.push(newModel);
    }
    updateFromNewModelParameterListModel(newModel) {
        const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == newModel.uniqueId);
        this.listModel.splice(findIndex, 1, newModel);
    }
    deleteFromUniqueIdByModelParameterListModel(uniqueIdByModel) {
        const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == uniqueIdByModel);
        this.listModel.splice(findIndex, 1);
    }
    insertListFromNewListModelParameterListModel(newListModel) {
        this.listModel.push(...newListModel);
    }
    updateListFromNewListModelParameterListModel(newListModel) {
        for (const newItemModel of newListModel) {
            const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == newItemModel.uniqueId);
            this.listModel.splice(findIndex, 1, newItemModel);
        }
    }
    deleteListFromListUniqueIdByModelParameterListModel(listUniqueIdByModel) {
        for (const itemUniqueIdByModel of listUniqueIdByModel) {
            const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == itemUniqueIdByModel);
            this.listModel.splice(findIndex, 1);
        }
    }
}
exports.BaseListModel = BaseListModel;
class BaseModel {
    constructor(uniqueId) {
        this.uniqueId = uniqueId;
    }
}
exports.BaseModel = BaseModel;
class Bools extends BaseModel {
    constructor(isField) {
        super("" + isField + "");
        this.isField = isField;
    }
    get getClone() {
        return new Bools(this.isField);
    }
    toString() {
        return "Bools(isField: " + this.isField + ")";
    }
}
exports.Bools = Bools;
class DatesTimes extends BaseModel {
    constructor(dateTime) {
        super(dateTime.toString());
        this.dateTime = dateTime;
    }
    get getClone() {
        return new DatesTimes(this.dateTime);
    }
    toString() {
        return "DatesTimes(dateTime: " + this.dateTime.toString() + ")";
    }
}
exports.DatesTimes = DatesTimes;
class Doubles extends BaseModel {
    constructor(field) {
        super("" + field + "");
        this.field = field;
    }
    get getClone() {
        return new Doubles(this.field);
    }
    toString() {
        return "Doubles(field: " + this.field + ")";
    }
}
exports.Doubles = Doubles;
class Ints extends BaseModel {
    constructor(field) {
        super("" + field + "");
        this.field = field;
    }
    get getClone() {
        return new Ints(this.field);
    }
    toString() {
        return "Ints(field: " + this.field + ")";
    }
}
exports.Ints = Ints;
class ListBools extends BaseListModel {
    constructor(listModel) {
        super(listModel);
    }
    get getClone() {
        const newListModel = new Array();
        for (const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone);
        }
        return new ListBools(newListModel);
    }
    toString() {
        let strListModel = "\n";
        for (const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListBools(listModel: [" + strListModel + "])";
    }
}
exports.ListBools = ListBools;
class ListDatesTimes extends BaseListModel {
    constructor(listModel) {
        super(listModel);
    }
    get getClone() {
        const newListModel = new Array();
        for (const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone);
        }
        return new ListDatesTimes(newListModel);
    }
    toString() {
        let strListModel = "\n";
        for (const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListDatesTimes(listModel: [" + strListModel + "])";
    }
}
exports.ListDatesTimes = ListDatesTimes;
class ListDoubles extends BaseListModel {
    constructor(listModel) {
        super(listModel);
    }
    get getClone() {
        const newListModel = new Array();
        for (const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone);
        }
        return new ListDoubles(newListModel);
    }
    toString() {
        let strListModel = "\n";
        for (const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListDoubles(listModel: [" + strListModel + "])";
    }
}
exports.ListDoubles = ListDoubles;
class ListInts extends BaseListModel {
    constructor(listModel) {
        super(listModel);
    }
    get getClone() {
        const newListModel = new Array();
        for (const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone);
        }
        return new ListInts(newListModel);
    }
    toString() {
        let strListModel = "\n";
        for (const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListInts(listModel: [" + strListModel + "])";
    }
}
exports.ListInts = ListInts;
class ListStrings extends BaseListModel {
    constructor(listModel) {
        super(listModel);
    }
    get getClone() {
        const newListModel = new Array();
        for (const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone);
        }
        return new ListStrings(newListModel);
    }
    toString() {
        let strListModel = "\n";
        for (const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListStrings(listModel: [" + strListModel + "])";
    }
}
exports.ListStrings = ListStrings;
class Strings extends BaseModel {
    constructor(field) {
        super("" + field + "");
        this.field = field;
    }
    get getClone() {
        return new Strings(this.field);
    }
    toString() {
        return "Strings(field: " + this.field + ")";
    }
}
exports.Strings = Strings;
// OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
// NamedUtility
class BaseNamedViewModel {
    constructor(namedStreamWState) {
        this.namedStreamWState = namedStreamWState;
    }
    dispose() {
        this.namedStreamWState.dispose();
    }
    get getDataForNamedParameterNamedStreamWState() {
        return this.namedStreamWState.getDataForNamed;
    }
    listenStreamDataForNamedFromCallbackParameterNamedStreamWState(callback) {
        this.namedStreamWState.listenStreamDataForNamedFromCallback(callback);
    }
    notifyStreamDataForNamedParameterNamedStreamWState() {
        this.namedStreamWState.notifyStreamDataForNamed();
    }
}
exports.BaseNamedViewModel = BaseNamedViewModel;
// OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
// NamedUtility
class BaseNamedViewModelCutDown {
    constructor(namedState) {
        this.namedState = namedState;
    }
    dispose() {
        this.namedState.dispose();
    }
    get getDataForNamedParameterNamedState() {
        return this.namedState.getDataForNamed;
    }
}
exports.BaseNamedViewModelCutDown = BaseNamedViewModelCutDown;
class TempCacheService {
    constructor() {
        this.tempCache = new Map();
        this.tempCacheWListAction = new Map();
    }
    static clearTempCacheParmeterInstance() {
        const tempCache = this.instance.tempCache;
        tempCache.clear();
    }
    static closeStreamFromKeyTempCacheParmeterInstance(keyTempCache) {
        const tempCacheWListAction = this.instance.tempCacheWListAction;
        if (!tempCacheWListAction.has(keyTempCache)) {
            return;
        }
        const get = tempCacheWListAction.get(keyTempCache);
        get === null || get === void 0 ? void 0 : get.splice(0, get.length);
    }
    static closeStreamFromListKeyTempCacheParmeterInstance(listKeyTempCache) {
        const tempCacheWListAction = this.instance.tempCacheWListAction;
        for (const itemKeyTempCache of listKeyTempCache) {
            if (!tempCacheWListAction.has(itemKeyTempCache)) {
                return;
            }
            const get = tempCacheWListAction.get(itemKeyTempCache);
            get === null || get === void 0 ? void 0 : get.splice(0, get.length);
        }
    }
    static closeStreamsParameterInstance() {
        const tempCacheWListAction = this.instance.tempCacheWListAction;
        for (const [, value] of tempCacheWListAction) {
            value.splice(0, value.length);
        }
    }
    getFromKeyTempCacheParameterTempCache(keyTempCache) {
        const tempCache = this.tempCache;
        if (!tempCache.has(keyTempCache)) {
            throw new LocalException("TempCacheService", EnumGuilty.developer, keyTempCache, "No exists key");
        }
        return tempCache.get(keyTempCache);
    }
    listenStreamFromKeyTempCacheAndCallbackParameterOne(keyTempCache, callback) {
        var _a, _b;
        const tempCacheWListAction = this.tempCacheWListAction;
        if (!tempCacheWListAction.has(keyTempCache)) {
            tempCacheWListAction.set(keyTempCache, new Array());
            (_a = tempCacheWListAction.get(keyTempCache)) === null || _a === void 0 ? void 0 : _a.push(callback);
            return;
        }
        (_b = tempCacheWListAction.get(keyTempCache)) === null || _b === void 0 ? void 0 : _b.push(callback);
    }
    updateFromKeyTempCacheAndValueParameterTempCache(keyTempCache, value) {
        this.tempCache.set(keyTempCache, value);
    }
    updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterTempCache(keyTempCache, value) {
        this.updateFromKeyTempCacheAndValueParameterTempCache(keyTempCache, value);
        const tempCacheWListAction = this.tempCacheWListAction;
        if (!tempCacheWListAction.has(keyTempCache)) {
            return;
        }
        const get = tempCacheWListAction.get(keyTempCache);
        for (const itemGet of get) {
            itemGet(value);
        }
    }
    deleteFromKeyTempCacheParameterTempCache(keyTempCache) {
        this.tempCache.delete(keyTempCache);
    }
}
exports.TempCacheService = TempCacheService;
TempCacheService.instance = new TempCacheService();
class BaseException {
    constructor(thisClass, exceptionClass, key) {
        this.thisClass = thisClass;
        this.exceptionClass = exceptionClass;
        this.key = key;
    }
    /// Call this method in the descendant constructor as the last line
    debugPrintExceptionWhereToStringParametersThisClassAndExceptionClass() {
        debugPrintException("\n===start_to_trace_exception===\n");
        debugPrintException("WhereHappenedException(Class) --> " + this.thisClass + "\n" +
            "NameException(Class) --> " + this.exceptionClass + "\n" +
            "toString() --> " + this.toString());
        debugPrintException("\n===end_to_trace_exception===\n");
    }
}
exports.BaseException = BaseException;
var EnumGuilty;
(function (EnumGuilty) {
    EnumGuilty[EnumGuilty["developer"] = 0] = "developer";
    EnumGuilty[EnumGuilty["device"] = 1] = "device";
    EnumGuilty[EnumGuilty["user"] = 2] = "user";
})(EnumGuilty || (exports.EnumGuilty = EnumGuilty = {}));
class LocalException extends BaseException {
    constructor(thisClass, valueWEnumGuilty, key, message = "") {
        super(thisClass, "LocalException", key);
        this.valueWEnumGuilty = valueWEnumGuilty;
        this.message = message;
        this.debugPrintExceptionWhereToStringParametersThisClassAndExceptionClass();
    }
    toString() {
        return "LocalException(valueWEnumGuilty: " + this.valueWEnumGuilty + ", " +
            "key: " + this.key + ", " +
            "message (optional): " + this.message + ")";
    }
}
exports.LocalException = LocalException;
class NetworkException extends BaseException {
    constructor(thisClass, key, statusCode, nameStatusCode = "", descriptionStatusCode = "") {
        super(thisClass, "NetworkException", key);
        this.statusCode = statusCode;
        this.nameStatusCode = nameStatusCode;
        this.descriptionStatusCode = descriptionStatusCode;
        this.debugPrintExceptionWhereToStringParametersThisClassAndExceptionClass();
    }
    static fromKeyAndStatusCode(thisClass, key, statusCode) {
        switch (statusCode) {
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
    toString() {
        return "NetworkException(key: " + this.key + ", " +
            "statusCode: " + this.statusCode + ", " +
            "nameStatusCode (optional): " + this.nameStatusCode + ", " +
            "descriptionStatusCode (optional): " + this.descriptionStatusCode + ")";
    }
}
exports.NetworkException = NetworkException;
class BaseNamedState {
    constructor() {
    }
}
exports.BaseNamedState = BaseNamedState;
class DefaultState extends BaseNamedState {
    constructor(dataForNamed) {
        super();
        this.isDispose = false;
        this.dataForNamed = dataForNamed;
    }
    dispose() {
        if (this.isDispose) {
            return;
        }
        this.isDispose = true;
    }
    get getDataForNamed() {
        return this.dataForNamed;
    }
}
exports.DefaultState = DefaultState;
class BaseNamedStreamWState {
    constructor() {
    }
}
exports.BaseNamedStreamWState = BaseNamedStreamWState;
class DefaultStreamWState extends BaseNamedStreamWState {
    constructor(dataForNamed) {
        super();
        this.isDispose = false;
        this.dataForNamed = dataForNamed;
        this.callback = null;
    }
    dispose() {
        if (this.isDispose) {
            return;
        }
        this.isDispose = true;
        this.callback = null;
    }
    get getDataForNamed() {
        return this.dataForNamed;
    }
    listenStreamDataForNamedFromCallback(callback) {
        if (this.isDispose) {
            throw new LocalException("DefaultStreamWState", EnumGuilty.developer, "DefaultStreamWStateQQListenStreamDataForNamedFromCallback", "Already disposed of");
        }
        if (this.callback != null) {
            throw new LocalException("DefaultStreamWState", EnumGuilty.developer, "DefaultStreamWStateQQListenStreamDataForNamedFromCallback", "Duplicate");
        }
        this.callback = callback;
    }
    notifyStreamDataForNamed() {
        if (this.isDispose) {
            throw new LocalException("DefaultStreamWState", EnumGuilty.developer, "DefaultStreamWStateQQNotifyStreamDataForNamed", "Already disposed of");
        }
        if (this.callback == null) {
            throw new LocalException("DefaultStreamWState", EnumGuilty.developer, "DefaultStreamWStateQQNotifyStreamDataForNamed", "Stream has no listener");
        }
        this.callback(this.dataForNamed);
    }
}
exports.DefaultStreamWState = DefaultStreamWState;
class ExceptionController {
    constructor(exception) {
        this.exception = exception;
    }
    static success() {
        return new ExceptionController(null);
    }
    static exception(exception) {
        return new ExceptionController(exception);
    }
    get getKeyParameterException() {
        var _a, _b;
        return (_b = (_a = this.exception) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0 ? _b : "";
    }
    isWhereNotEqualsNullParameterException() {
        return this.exception != null;
    }
}
exports.ExceptionController = ExceptionController;
class Result {
    constructor(parameter, exceptionController) {
        this.parameter = parameter;
        this.exceptionController = exceptionController;
    }
    static success(parameter) {
        return new Result(parameter, ExceptionController.success());
    }
    static exception(exception) {
        return new Result(null, ExceptionController.exception(exception));
    }
}
exports.Result = Result;
function debugPrint(text) {
    console.log(text);
}
exports.debugPrint = debugPrint;
function debugPrintException(text) {
    debugPrint("\x1B[31m" + text + "\x1b[0m");
}
exports.debugPrintException = debugPrintException;
