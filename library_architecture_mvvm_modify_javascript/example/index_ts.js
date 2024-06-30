/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../dist/esm/index.js":
/*!****************************!*\
  !*** ../dist/esm/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseDataForNamed: () => (/* binding */ BaseDataForNamed),
/* harmony export */   BaseException: () => (/* binding */ BaseException),
/* harmony export */   BaseListModel: () => (/* binding */ BaseListModel),
/* harmony export */   BaseModel: () => (/* binding */ BaseModel),
/* harmony export */   BaseModelRepository: () => (/* binding */ BaseModelRepository),
/* harmony export */   BaseModelWNamedWNamedWNamedIterator: () => (/* binding */ BaseModelWNamedWNamedWNamedIterator),
/* harmony export */   BaseNamedState: () => (/* binding */ BaseNamedState),
/* harmony export */   BaseNamedStreamWState: () => (/* binding */ BaseNamedStreamWState),
/* harmony export */   CurrentModelWIndex: () => (/* binding */ CurrentModelWIndex),
/* harmony export */   DefaultState: () => (/* binding */ DefaultState),
/* harmony export */   DefaultStreamWState: () => (/* binding */ DefaultStreamWState),
/* harmony export */   EnumGuilty: () => (/* binding */ EnumGuilty),
/* harmony export */   EnumRWTMode: () => (/* binding */ EnumRWTMode),
/* harmony export */   ExceptionController: () => (/* binding */ ExceptionController),
/* harmony export */   LocalException: () => (/* binding */ LocalException),
/* harmony export */   NetworkException: () => (/* binding */ NetworkException),
/* harmony export */   Result: () => (/* binding */ Result),
/* harmony export */   TempCacheService: () => (/* binding */ TempCacheService),
/* harmony export */   debugPrint: () => (/* binding */ debugPrint),
/* harmony export */   debugPrintException: () => (/* binding */ debugPrintException)
/* harmony export */ });
class BaseDataForNamed {
    constructor(isLoading) {
        this.isLoading = isLoading;
        this.exceptionController = ExceptionController.success();
    }
}
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
var EnumGuilty;
(function (EnumGuilty) {
    EnumGuilty[EnumGuilty["developer"] = 0] = "developer";
    EnumGuilty[EnumGuilty["device"] = 1] = "device";
    EnumGuilty[EnumGuilty["user"] = 2] = "user";
})(EnumGuilty || (EnumGuilty = {}));
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
class CurrentModelWIndex {
    constructor(currentModel, index) {
        this.currentModel = currentModel;
        this.index = index;
    }
}
class BaseModelWNamedWNamedWNamedIterator {
    constructor() {
        this.listModelIterator = new Array();
    }
    getSortedListModelFromNewListModelParameterListModelIterator(newListModel) {
        if (newListModel.length <= 0) {
            return new Array();
        }
        this.listModelIterator.push(...newListModel);
        const newListModelFirst = new Array();
        while (this.listModelIterator.length > 0) {
            const currentModelWIndex = this.currentModelWIndex;
            this.listModelIterator.splice(currentModelWIndex.index, 1);
            newListModelFirst.push(currentModelWIndex.currentModel);
        }
        return newListModelFirst;
    }
}
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
class BaseModel {
    constructor(uniqueId) {
        this.uniqueId = uniqueId;
    }
}
class BaseNamedState {
    constructor() {
    }
}
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
class BaseNamedStreamWState {
    constructor() {
    }
}
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
    updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterOne(keyTempCache, value) {
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
TempCacheService.instance = new TempCacheService();
var EnumRWTMode;
(function (EnumRWTMode) {
    EnumRWTMode[EnumRWTMode["release"] = 0] = "release";
    EnumRWTMode[EnumRWTMode["test"] = 1] = "test";
})(EnumRWTMode || (EnumRWTMode = {}));
class BaseModelRepository {
    constructor() {
    }
    getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(releaseCallback, testCallback) {
        switch (BaseModelRepository.enumRWTMode) {
            case EnumRWTMode.release:
                return releaseCallback;
            case EnumRWTMode.test:
                return testCallback;
        }
    }
    getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(map, listKeys, index, defaultValue) {
        try {
            return map.has(listKeys[index]) ? map.get(listKeys[index]) : defaultValue;
        }
        catch (exception) {
            return defaultValue;
        }
    }
}
BaseModelRepository.enumRWTMode = EnumRWTMode.test;
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
    toString() {
        if (this.exception == null) {
            return "ExceptionController(exception: null)";
        }
        return "ExceptionController(exception: " + this.exception + ")";
    }
}
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
function debugPrint(text) {
    console.log(text);
}
function debugPrintException(text) {
    debugPrint("\x1B[31m" + text + "\x1b[0m");
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! library_architecture_mvvm_modify_javascript */ "../dist/esm/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class FactoryObjectUtility {
    constructor() {
    }
    /* ModelRepository */
    static get getIPAddressRepository() {
        return new IPAddressRepository();
    }
}
class ReadyDataUtility {
    constructor() {
    }
}
ReadyDataUtility.success = "success";
ReadyDataUtility.unknown = "unknown";
ReadyDataUtility.iPAPI = "https://jsonip.com/";
class KeysHttpServiceUtility {
    constructor() {
    }
}
/* IPAddress */
KeysHttpServiceUtility.iPAddressQQIp = "ip";
class IPAddress extends library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.BaseModel {
    constructor(ip) {
        super("" + ip + "");
        this.ip = ip;
    }
    get getClone() {
        return new IPAddress(this.ip);
    }
    toString() {
        return "IPAddress(ip: " + this.ip + ")";
    }
}
class ListIPAddress extends library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.BaseListModel {
    constructor(listModel) {
        super(listModel);
    }
    get getClone() {
        const newListModel = new Array();
        for (const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone);
        }
        return new ListIPAddress(newListModel);
    }
    toString() {
        let strListModel = "\n";
        for (const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListIPAddress(listModel: [" + strListModel + "])";
    }
}
/// This class needs to be called where there are network requests (in the data source), 
/// since without this class the developer will not know in which class the network requests are
class HttpService {
    constructor() {
    }
}
HttpService.instance = new HttpService();
class IPAddressRepository extends library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.BaseModelRepository {
    constructor() {
        super();
        this.httpService = HttpService.instance;
        this.getIPAddressParameterHttpServiceWReleaseCallback = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(ReadyDataUtility.iPAPI, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (response.status != 200) {
                    throw library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.NetworkException.fromKeyAndStatusCode("IPAddressRepository", response.status.toString(), response.status);
                }
                const json = yield response.json();
                const map = new Map(Object.entries(json));
                return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.success(this.getBaseModelFromMapAndListKeys(map, this.getIPAddressParameterHttpServiceWListKeys));
            }
            catch (exception) {
                if (exception instanceof library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.NetworkException) {
                    return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.exception(exception);
                }
                return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.exception(new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.LocalException("IPAddressRepository", library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.EnumGuilty.device, ReadyDataUtility.unknown, exception.toString()));
            }
        });
        this.getIPAddressParameterHttpServiceWTestCallback = () => __awaiter(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 1000));
            return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.success(this.getBaseModelFromMapAndListKeys(new Map([
                [KeysHttpServiceUtility.iPAddressQQIp, "121.121.12.12"]
            ]), this.getIPAddressParameterHttpServiceWListKeys));
        });
    }
    getBaseModelFromMapAndListKeys(map, listKeys) {
        return new IPAddress(this.getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(map, listKeys, 0, ""));
    }
    getBaseListModelFromListModel(listModel) {
        return new ListIPAddress(listModel);
    }
    getIPAddressParameterHttpService() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(this.getIPAddressParameterHttpServiceWReleaseCallback, this.getIPAddressParameterHttpServiceWTestCallback)();
        });
    }
    get getIPAddressParameterHttpServiceWListKeys() {
        return [KeysHttpServiceUtility.iPAddressQQIp];
    }
}
var EnumDataForMainVM;
(function (EnumDataForMainVM) {
    EnumDataForMainVM[EnumDataForMainVM["isLoading"] = 0] = "isLoading";
    EnumDataForMainVM[EnumDataForMainVM["exception"] = 1] = "exception";
    EnumDataForMainVM[EnumDataForMainVM["success"] = 2] = "success";
})(EnumDataForMainVM || (EnumDataForMainVM = {}));
class DataForMainVM extends library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.BaseDataForNamed {
    constructor(isLoading, iPAddress) {
        super(isLoading);
        this.iPAddress = iPAddress;
    }
    get getEnumDataForNamed() {
        if (this.isLoading) {
            return EnumDataForMainVM.isLoading;
        }
        if (this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForMainVM.exception;
        }
        return EnumDataForMainVM.success;
    }
    toString() {
        return "DataForMainVM(isLoading: " + this.isLoading + ", "
            + "exceptionController: " + this.exceptionController + ", "
            + "iPAddress: " + this.iPAddress + ")";
    }
}
class MainVM {
    constructor() {
        // ModelRepository
        this.iPAddressRepository = FactoryObjectUtility.getIPAddressRepository;
        this.namedStreamWState = new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.DefaultStreamWState(new DataForMainVM(true, new IPAddress("")));
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.namedStreamWState.listenStreamDataForNamedFromCallback((_data) => {
                this.build();
            });
            const firstRequest = yield this.firstRequest();
            (0,library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.debugPrint)("MainVM: " + firstRequest);
            this.namedStreamWState.notifyStreamDataForNamed();
        });
    }
    dispose() {
        this.namedStreamWState.dispose();
    }
    build() {
        const dataForNamed = this.namedStreamWState.getDataForNamed;
        switch (dataForNamed.getEnumDataForNamed) {
            case EnumDataForMainVM.isLoading:
                (0,library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.debugPrint)("Build: IsLoading");
                break;
            case EnumDataForMainVM.exception:
                (0,library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.debugPrint)("Build: Exception(" + dataForNamed.exceptionController.getKeyParameterException + ")");
                break;
            case EnumDataForMainVM.success:
                (0,library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.debugPrint)("Build: Success(" + dataForNamed.iPAddress + ")");
                break;
            default:
                break;
        }
    }
    firstRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            const getIPAddressParameterHttpService = yield this.iPAddressRepository.getIPAddressParameterHttpService();
            if (getIPAddressParameterHttpService.exceptionController.isWhereNotEqualsNullParameterException()) {
                return this.firstQQFirstRequestQQGetIPAddressParameterHttpService(getIPAddressParameterHttpService.exceptionController);
            }
            this.namedStreamWState.getDataForNamed.isLoading = false;
            this.namedStreamWState.getDataForNamed.iPAddress = getIPAddressParameterHttpService.parameter.getClone;
            return ReadyDataUtility.success;
        });
    }
    firstQQFirstRequestQQGetIPAddressParameterHttpService(exceptionController) {
        return __awaiter(this, void 0, void 0, function* () {
            this.namedStreamWState.getDataForNamed.isLoading = false;
            this.namedStreamWState.getDataForNamed.exceptionController = exceptionController;
            return exceptionController.getKeyParameterException;
        });
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.BaseModelRepository.enumRWTMode = library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.EnumRWTMode.release;
        const mainVM = new MainVM();
        yield mainVM.init();
        mainVM.dispose();
    });
}
main();
// EXPECTED OUTPUT:
//
// MainVM: success
// Build: Success(IPAddress(ip: ${your_ip}))
/// OR
// EXPECTED OUTPUT:
//
// ===start_to_trace_exception===
//
// WhereHappenedException(Class) --> ${WhereHappenedException(Class)}
// NameException(Class) --> ${NameException(Class)}
// toString() --> ${toString()}
//
// ===end_to_trace_exception===
//
// MainVM: ${getKeyParameterException}
// Build: Exception(${getKeyParameterException})

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7QUFDNUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFTLENBQUMsUUFBUSxDQUFDO1lBQ3ZHLE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUVhLHFEQUFxRCxDQUFDLG1CQUF3Qzs7WUFDeEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7WUFDakYsT0FBTyxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQztRQUN4RCxDQUFDO0tBQUE7Q0FDSjtBQUVELFNBQWUsSUFBSTs7UUFDZiw0RkFBbUIsQ0FBQyxXQUFXLEdBQUcsb0ZBQVcsQ0FBQyxPQUFPLENBQUM7UUFDdEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUM1QixNQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckIsQ0FBQztDQUFBO0FBQ0QsSUFBSSxFQUFFLENBQUM7QUFDUCxtQkFBbUI7QUFDbkIsRUFBRTtBQUNGLGtCQUFrQjtBQUNsQiw0Q0FBNEM7QUFFNUMsTUFBTTtBQUVOLG1CQUFtQjtBQUNuQixFQUFFO0FBQ0YsaUNBQWlDO0FBQ2pDLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsbURBQW1EO0FBQ25ELCtCQUErQjtBQUMvQixFQUFFO0FBQ0YsK0JBQStCO0FBQy9CLEVBQUU7QUFDRixzQ0FBc0M7QUFDdEMsZ0RBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS8uLi9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGFtcGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhhbXBsZS8uL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCYXNlRGF0YUZvck5hbWVkIHtcbiAgICBjb25zdHJ1Y3Rvcihpc0xvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBpc0xvYWRpbmc7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9uQ29udHJvbGxlciA9IEV4Y2VwdGlvbkNvbnRyb2xsZXIuc3VjY2VzcygpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0aGlzQ2xhc3MsIGV4Y2VwdGlvbkNsYXNzLCBrZXkpIHtcbiAgICAgICAgdGhpcy50aGlzQ2xhc3MgPSB0aGlzQ2xhc3M7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9uQ2xhc3MgPSBleGNlcHRpb25DbGFzcztcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgfVxuICAgIC8vLyBDYWxsIHRoaXMgbWV0aG9kIGluIHRoZSBkZXNjZW5kYW50IGNvbnN0cnVjdG9yIGFzIHRoZSBsYXN0IGxpbmVcbiAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uV2hlcmVUb1N0cmluZ1BhcmFtZXRlcnNUaGlzQ2xhc3NBbmRFeGNlcHRpb25DbGFzcygpIHtcbiAgICAgICAgZGVidWdQcmludEV4Y2VwdGlvbihcIlxcbj09PXN0YXJ0X3RvX3RyYWNlX2V4Y2VwdGlvbj09PVxcblwiKTtcbiAgICAgICAgZGVidWdQcmludEV4Y2VwdGlvbihcIldoZXJlSGFwcGVuZWRFeGNlcHRpb24oQ2xhc3MpIC0tPiBcIiArIHRoaXMudGhpc0NsYXNzICsgXCJcXG5cIiArXG4gICAgICAgICAgICBcIk5hbWVFeGNlcHRpb24oQ2xhc3MpIC0tPiBcIiArIHRoaXMuZXhjZXB0aW9uQ2xhc3MgKyBcIlxcblwiICtcbiAgICAgICAgICAgIFwidG9TdHJpbmcoKSAtLT4gXCIgKyB0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uKFwiXFxuPT09ZW5kX3RvX3RyYWNlX2V4Y2VwdGlvbj09PVxcblwiKTtcbiAgICB9XG59XG5leHBvcnQgdmFyIEVudW1HdWlsdHk7XG4oZnVuY3Rpb24gKEVudW1HdWlsdHkpIHtcbiAgICBFbnVtR3VpbHR5W0VudW1HdWlsdHlbXCJkZXZlbG9wZXJcIl0gPSAwXSA9IFwiZGV2ZWxvcGVyXCI7XG4gICAgRW51bUd1aWx0eVtFbnVtR3VpbHR5W1wiZGV2aWNlXCJdID0gMV0gPSBcImRldmljZVwiO1xuICAgIEVudW1HdWlsdHlbRW51bUd1aWx0eVtcInVzZXJcIl0gPSAyXSA9IFwidXNlclwiO1xufSkoRW51bUd1aWx0eSB8fCAoRW51bUd1aWx0eSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgTG9jYWxFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0aGlzQ2xhc3MsIHZhbHVlV0VudW1HdWlsdHksIGtleSwgbWVzc2FnZSA9IFwiXCIpIHtcbiAgICAgICAgc3VwZXIodGhpc0NsYXNzLCBcIkxvY2FsRXhjZXB0aW9uXCIsIGtleSk7XG4gICAgICAgIHRoaXMudmFsdWVXRW51bUd1aWx0eSA9IHZhbHVlV0VudW1HdWlsdHk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuZGVidWdQcmludEV4Y2VwdGlvbldoZXJlVG9TdHJpbmdQYXJhbWV0ZXJzVGhpc0NsYXNzQW5kRXhjZXB0aW9uQ2xhc3MoKTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIkxvY2FsRXhjZXB0aW9uKHZhbHVlV0VudW1HdWlsdHk6IFwiICsgdGhpcy52YWx1ZVdFbnVtR3VpbHR5ICsgXCIsIFwiICtcbiAgICAgICAgICAgIFwia2V5OiBcIiArIHRoaXMua2V5ICsgXCIsIFwiICtcbiAgICAgICAgICAgIFwibWVzc2FnZSAob3B0aW9uYWwpOiBcIiArIHRoaXMubWVzc2FnZSArIFwiKVwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOZXR3b3JrRXhjZXB0aW9uIGV4dGVuZHMgQmFzZUV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3IodGhpc0NsYXNzLCBrZXksIHN0YXR1c0NvZGUsIG5hbWVTdGF0dXNDb2RlID0gXCJcIiwgZGVzY3JpcHRpb25TdGF0dXNDb2RlID0gXCJcIikge1xuICAgICAgICBzdXBlcih0aGlzQ2xhc3MsIFwiTmV0d29ya0V4Y2VwdGlvblwiLCBrZXkpO1xuICAgICAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICAgICAgICB0aGlzLm5hbWVTdGF0dXNDb2RlID0gbmFtZVN0YXR1c0NvZGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25TdGF0dXNDb2RlID0gZGVzY3JpcHRpb25TdGF0dXNDb2RlO1xuICAgICAgICB0aGlzLmRlYnVnUHJpbnRFeGNlcHRpb25XaGVyZVRvU3RyaW5nUGFyYW1ldGVyc1RoaXNDbGFzc0FuZEV4Y2VwdGlvbkNsYXNzKCk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tS2V5QW5kU3RhdHVzQ29kZSh0aGlzQ2xhc3MsIGtleSwgc3RhdHVzQ29kZSkge1xuICAgICAgICBzd2l0Y2ggKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMjAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjAxLCBcIjIwMSBDcmVhdGVkXCIsIFwiVGhlIHJlcXVlc3QgaGFzIGJlZW4gZnVsZmlsbGVkIGFuZCByZXN1bHRlZCBpbiBhIG5ldyByZXNvdXJjZSBiZWluZyBjcmVhdGVkLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjAyLCBcIjIwMiBBY2NlcHRlZFwiLCBcIlRoZSByZXF1ZXN0IGhhcyBiZWVuIGFjY2VwdGVkIGZvciBwcm9jZXNzaW5nLCBidXQgdGhlIHByb2Nlc3NpbmcgaGFzIG5vdCBiZWVuIGNvbXBsZXRlZC5cIik7XG4gICAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDIwMywgXCIyMDMgTm9uLUF1dGhvcml0YXRpdmUgSW5mb3JtYXRpb25cIiwgXCJUaGUgcmV0dXJuZWQgbWV0YUluZm9ybWF0aW9uIGluIHRoZSBlbnRpdHktaGVhZGVyIGlzIG5vdCB0aGUgZGVmaW5pdGl2ZSBzZXQgYXMgYXZhaWxhYmxlIGZyb20gdGhlIG9yaWdpbiBzZXJ2ZXIsIGJ1dCBpcyBnYXRoZXJlZCBmcm9tIGEgbG9jYWwgb3IgYSB0aGlyZC1wYXJ0eSBjb3B5LlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjA0LCBcIjIwNCBObyBDb250ZW50XCIsIFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIHRoZSByZXF1ZXN0IGJ1dCBkb2VzIG5vdCBuZWVkIHRvIHJldHVybiBhbiBlbnRpdHktYm9keSwgYW5kIG1pZ2h0IHdhbnQgdG8gcmV0dXJuIHVwZGF0ZWQgbWV0YUluZm9ybWF0aW9uLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjA1LCBcIjIwNSBSZXNldCBDb250ZW50XCIsIFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIHRoZSByZXF1ZXN0IGFuZCB0aGUgdXNlciBhZ2VudCBTSE9VTEQgcmVzZXQgdGhlIGRvY3VtZW50IHZpZXcgd2hpY2ggY2F1c2VkIHRoZSByZXF1ZXN0IHRvIGJlIHNlbnQuXCIpO1xuICAgICAgICAgICAgY2FzZSAyMDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDYsIFwiMjA2IFBhcnRpYWwgQ29udGVudFwiLCBcIlRoZSBzZXJ2ZXIgaGFzIGZ1bGZpbGxlZCB0aGUgcGFydGlhbCBHRVQgcmVxdWVzdCBmb3IgdGhlIHJlc291cmNlLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzAwLCBcIjMwMCBNdWx0aXBsZSBDaG9pY2VzXCIsIFwiVXNlciAob3IgdXNlciBhZ2VudCkgY2FuIHNlbGVjdCBhIHByZWZlcnJlZCByZXByZXNlbnRhdGlvbiBhbmQgcmVkaXJlY3QgaXRzIHJlcXVlc3QgdG8gdGhhdCBsb2NhdGlvbi5cIik7XG4gICAgICAgICAgICBjYXNlIDMwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwMSwgXCIzMDEgTW92ZWQgUGVybWFuZW50bHlcIiwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIGhhcyBiZWVuIGFzc2lnbmVkIGEgbmV3IHBlcm1hbmVudCBVUkkgYW5kIGFueSBmdXR1cmUgcmVmZXJlbmNlcyB0byB0aGlzIHJlc291cmNlIFNIT1VMRCB1c2Ugb25lIG9mIHRoZSByZXR1cm5lZCBVUklzLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzAyLCBcIjMwMiBGb3VuZFwiLCBcIlRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgcmVzaWRlcyB0ZW1wb3JhcmlseSB1bmRlciBhIGRpZmZlcmVudCBVUkkuXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDMsIFwiMzAzIFNlZSBPdGhlclwiLCBcIlRoZSByZXNwb25zZSB0byB0aGUgcmVxdWVzdCBjYW4gYmUgZm91bmQgdW5kZXIgYSBkaWZmZXJlbnQgVVJJIGFuZCBTSE9VTEQgYmUgcmV0cmlldmVkIHVzaW5nIGEgR0VUIG1ldGhvZCBvbiB0aGF0IHJlc291cmNlLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzA0LCBcIjMwNCBOb3QgTW9kaWZpZWRcIiwgXCJJZiB0aGUgY2xpZW50IGhhcyBwZXJmb3JtZWQgYSBjb25kaXRpb25hbCBHRVQgcmVxdWVzdCBhbmQgYWNjZXNzIGlzIGFsbG93ZWQsIGJ1dCB0aGUgZG9jdW1lbnQgaGFzIG5vdCBiZWVuIG1vZGlmaWVkLCB0aGUgc2VydmVyIFNIT1VMRCByZXNwb25kIHdpdGggdGhpcyBzdGF0dXMgY29kZS5cIik7XG4gICAgICAgICAgICBjYXNlIDMwNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwNSwgXCIzMDUgVXNlIFByb3h5XCIsIFwiVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBNVVNUIGJlIGFjY2Vzc2VkIHRocm91Z2ggdGhlIHByb3h5IGdpdmVuIGJ5IHRoZSBMb2NhdGlvbiBmaWVsZC5cIik7XG4gICAgICAgICAgICBjYXNlIDMwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwNywgXCIzMDcgVGVtcG9yYXJ5IFJlZGlyZWN0XCIsIFwiVGhlIHJlcXVlc3RlZCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSS5cIik7XG4gICAgICAgICAgICBjYXNlIDQwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwMCwgXCI0MDAgQmFkIFJlcXVlc3RcIiwgXCJUaGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgdW5kZXJzdG9vZCBieSB0aGUgc2VydmVyIGR1ZSB0byBtYWxmb3JtZWQgc3ludGF4LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDAxLCBcIjQwMSBVbmF1dGhvcml6ZWRcIiwgXCJUaGUgcmVxdWVzdCByZXF1aXJlcyB1c2VyIGF1dGhlbnRpY2F0aW9uLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDAzLCBcIjQwMyBGb3JiaWRkZW5cIiwgXCJUaGUgc2VydmVyIHVuZGVyc3Rvb2QgdGhlIHJlcXVlc3QsIGJ1dCBpcyByZWZ1c2luZyB0byBmdWxmaWxsIGl0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDA0LCBcIjQwNCBOb3QgRm91bmRcIiwgXCJUaGUgc2VydmVyIGhhcyBub3QgZm91bmQgYW55dGhpbmcgbWF0Y2hpbmcgdGhlIFJlcXVlc3QtVVJJLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDA1LCBcIjQwNSBNZXRob2QgTm90IEFsbG93ZWQnLCdUaGUgbWV0aG9kIHNwZWNpZmllZCBpbiB0aGUgUmVxdWVzdC1MaW5lIGlzIG5vdCBhbGxvd2VkIGZvciB0aGUgcmVzb3VyY2UgaWRlbnRpZmllZCBieSB0aGUgUmVxdWVzdC1VUkkuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDYsIFwiNDA2IE5vdCBBY2NlcHRhYmxlXCIsIFwiVGhlIHJlc291cmNlIGlkZW50aWZpZWQgYnkgdGhlIHJlcXVlc3QgaXMgb25seSBjYXBhYmxlIG9mIGdlbmVyYXRpbmcgcmVzcG9uc2UgZW50aXRpZXMgd2hpY2ggaGF2ZSBjb250ZW50IGNoYXJhY3RlcmlzdGljcyBub3QgYWNjZXB0YWJsZSBhY2NvcmRpbmcgdG8gdGhlIGFjY2VwdCBoZWFkZXJzIHNlbnQgaW4gdGhlIHJlcXVlc3QuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDcsIFwiNDA3IFByb3h5IEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkXCIsIFwiVGhpcyBjb2RlIGlzIHNpbWlsYXIgdG8gNDAxIChVbmF1dGhvcml6ZWQpLCBidXQgaW5kaWNhdGVzIHRoYXQgdGhlIGNsaWVudCBtdXN0IGZpcnN0IGF1dGhlbnRpY2F0ZSBpdHNlbGYgd2l0aCB0aGUgcHJveHkuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDgsIFwiNDA4IFJlcXVlc3QgVGltZW91dFwiLCBcIlRoZSBjbGllbnQgZGlkIG5vdCBwcm9kdWNlIGEgcmVxdWVzdCB3aXRoaW4gdGhlIHRpbWUgdGhhdCB0aGUgc2VydmVyIHdhcyBwcmVwYXJlZCB0byB3YWl0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDA5LCBcIjQwOSBDb25mbGljdFwiLCBcIlRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBjb21wbGV0ZWQgZHVlIHRvIGEgY29uZmxpY3Qgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgcmVzb3VyY2UuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTAsIFwiNDEwIEdvbmVcIiwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIGlzIG5vIGxvbmdlciBhdmFpbGFibGUgYXQgdGhlIHNlcnZlciBhbmQgbm8gZm9yd2FyZGluZyBhZGRyZXNzIGlzIGtub3duLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDExOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDExLCBcIjQxMSBMZW5ndGggUmVxdWlyZWRcIiwgXCJUaGUgc2VydmVyIHJlZnVzZXMgdG8gYWNjZXB0IHRoZSByZXF1ZXN0IHdpdGhvdXQgYSBkZWZpbmVkIENvbnRlbnQtTGVuZ3RoLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDEyLCBcIjQxMiBQcmVjb25kaXRpb24gRmFpbGVkXCIsIFwiVGhlIHByZWNvbmRpdGlvbiBnaXZlbiBpbiBvbmUgb3IgbW9yZSBvZiB0aGUgcmVxdWVzdC1oZWFkZXIgZmllbGRzIGV2YWx1YXRlZCB0byBmYWxzZSB3aGVuIGl0IHdhcyB0ZXN0ZWQgb24gdGhlIHNlcnZlci5cIik7XG4gICAgICAgICAgICBjYXNlIDQxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQxMywgXCI0MTMgUmVxdWVzdCBFbnRpdHkgVG9vIExhcmdlXCIsIFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBwcm9jZXNzIGEgcmVxdWVzdCBiZWNhdXNlIHRoZSByZXF1ZXN0IGVudGl0eSBpcyBsYXJnZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgb3IgYWJsZSB0byBwcm9jZXNzLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE0LCBcIjQxNCBSZXF1ZXN0LVVSSSBUb28gTG9uZ1wiLCBcIlRoZSBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gc2VydmljZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSBSZXF1ZXN0LVVSSSBpcyBsb25nZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgdG8gaW50ZXJwcmV0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE1LCBcIjQxNSBVbnN1cHBvcnRlZCBNZWRpYSBUeXBlXCIsIFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBzZXJ2aWNlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIGVudGl0eSBvZiB0aGUgcmVxdWVzdCBpcyBpbiBhIGZvcm1hdCBub3Qgc3VwcG9ydGVkIGJ5IHRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgZm9yIHRoZSByZXF1ZXN0ZWQgbWV0aG9kLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE2LCBcIjQxNiBSZXF1ZXN0ZWQgUmFuZ2UgTm90IFNhdGlzZmlhYmxlXCIsIFwiQSBzZXJ2ZXIgU0hPVUxEIHJldHVybiBhIHJlc3BvbnNlIHdpdGggdGhpcyBzdGF0dXMgY29kZSBpZiBhIHJlcXVlc3QgaW5jbHVkZWQgYSBSYW5nZSByZXF1ZXN0LWhlYWRlciBmaWVsZCAoc2VjdGlvbiAxNC4zNSksIGFuZCBub25lIG9mIHRoZSByYW5nZS1zcGVjaWZpZXIgdmFsdWVzIGluIHRoaXMgZmllbGQgb3ZlcmxhcCB0aGUgY3VycmVudCBleHRlbnQgb2YgdGhlIHNlbGVjdGVkIHJlc291cmNlLCBhbmQgdGhlIHJlcXVlc3QgZGlkIG5vdCBpbmNsdWRlIGFuIElmLVJhbmdlIHJlcXVlc3QtaGVhZGVyIGZpZWxkLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE3LCBcIjQxNyBFeHBlY3RhdGlvbiBGYWlsZWRcIiwgXCJUaGUgZXhwZWN0YXRpb24gZ2l2ZW4gaW4gYW4gRXhwZWN0IHJlcXVlc3QtaGVhZGVyIGZpZWxkIChzZWUgc2VjdGlvbiAxNC4yMCkgY291bGQgbm90IGJlIG1ldCBieSB0aGlzIHNlcnZlci5cIik7XG4gICAgICAgICAgICBjYXNlIDUwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDUwMCwgXCI1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXCIsIFwiVGhlIHNlcnZlciBlbmNvdW50ZXJlZCBhbiB1bmV4cGVjdGVkIGNvbmRpdGlvbiB3aGljaCBwcmV2ZW50ZWQgaXQgZnJvbSBmdWxmaWxsaW5nIHRoZSByZXF1ZXN0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTAxLCBcIjUwMSBOb3QgSW1wbGVtZW50ZWRcIiwgXCJUaGUgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQgdGhlIGZ1bmN0aW9uYWxpdHkgaW50ZXJmYWNlX2Z1bmN0aW9uX3ZpZXdfbW9kZWwgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cIik7XG4gICAgICAgICAgICBjYXNlIDUwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDUwMiwgXCI1MDIgQmFkIEdhdGV3YXlcIiwgXCJUaGUgc2VydmVyLCB3aGlsZSBhY3RpbmcgYXMgYSBnYXRld2F5IG9yIHByb3h5LCByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIGZyb20gdGhlIHVwc3RyZWFtIHNlcnZlciBpdCBhY2Nlc3NlZCBpbiBhdHRlbXB0aW5nIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXCIpO1xuICAgICAgICAgICAgY2FzZSA1MDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA1MDMsIFwiNTAzIFNlcnZpY2UgVW5hdmFpbGFibGVcIiwgXCJUaGUgc2VydmVyIGlzIGN1cnJlbnRseSB1bmFibGUgdG8gaGFuZGxlIHRoZSByZXF1ZXN0IGR1ZSB0byBhIHRlbXBvcmFyeSBvdmVybG9hZGluZyBvciBtYWludGVuYW5jZSBvZiB0aGUgc2VydmVyLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTA0LCBcIjUwNCBHYXRld2F5IFRpbWVvdXRcIiwgXCJUaGUgc2VydmVyLCB3aGlsZSBhY3RpbmcgYXMgYSBnYXRld2F5IG9yIHByb3h5LCBkaWQgbm90IHJlY2VpdmUgYSB0aW1lbHkgcmVzcG9uc2UgZnJvbSB0aGUgdXBzdHJlYW0gc2VydmVyIHNwZWNpZmllZCBieSB0aGUgVVJJLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTA1LCBcIjUwNSBIVFRQIFZlcnNpb24gTm90IFN1cHBvcnRlZFwiLCBcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCwgb3IgcmVmdXNlcyB0byBzdXBwb3J0LCB0aGUgSFRUUCBwcm90b2NvbCB2ZXJzaW9uIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QgbWVzc2FnZS5cIik7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIk5ldHdvcmtFeGNlcHRpb24oa2V5OiBcIiArIHRoaXMua2V5ICsgXCIsIFwiICtcbiAgICAgICAgICAgIFwic3RhdHVzQ29kZTogXCIgKyB0aGlzLnN0YXR1c0NvZGUgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJuYW1lU3RhdHVzQ29kZSAob3B0aW9uYWwpOiBcIiArIHRoaXMubmFtZVN0YXR1c0NvZGUgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblN0YXR1c0NvZGUgKG9wdGlvbmFsKTogXCIgKyB0aGlzLmRlc2NyaXB0aW9uU3RhdHVzQ29kZSArIFwiKVwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDdXJyZW50TW9kZWxXSW5kZXgge1xuICAgIGNvbnN0cnVjdG9yKGN1cnJlbnRNb2RlbCwgaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TW9kZWwgPSBjdXJyZW50TW9kZWw7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsV05hbWVkV05hbWVkV05hbWVkSXRlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpc3RNb2RlbEl0ZXJhdG9yID0gbmV3IEFycmF5KCk7XG4gICAgfVxuICAgIGdldFNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvcihuZXdMaXN0TW9kZWwpIHtcbiAgICAgICAgaWYgKG5ld0xpc3RNb2RlbC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdE1vZGVsSXRlcmF0b3IucHVzaCguLi5uZXdMaXN0TW9kZWwpO1xuICAgICAgICBjb25zdCBuZXdMaXN0TW9kZWxGaXJzdCA9IG5ldyBBcnJheSgpO1xuICAgICAgICB3aGlsZSAodGhpcy5saXN0TW9kZWxJdGVyYXRvci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TW9kZWxXSW5kZXggPSB0aGlzLmN1cnJlbnRNb2RlbFdJbmRleDtcbiAgICAgICAgICAgIHRoaXMubGlzdE1vZGVsSXRlcmF0b3Iuc3BsaWNlKGN1cnJlbnRNb2RlbFdJbmRleC5pbmRleCwgMSk7XG4gICAgICAgICAgICBuZXdMaXN0TW9kZWxGaXJzdC5wdXNoKGN1cnJlbnRNb2RlbFdJbmRleC5jdXJyZW50TW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdMaXN0TW9kZWxGaXJzdDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZUxpc3RNb2RlbCB7XG4gICAgY29uc3RydWN0b3IobGlzdE1vZGVsKSB7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsID0gbGlzdE1vZGVsO1xuICAgIH1cbiAgICBzb3J0aW5nRnJvbU1vZGVsV05hbWVkV05hbWVkV05hbWVkSXRlcmF0b3JQYXJhbWV0ZXJMaXN0TW9kZWwobW9kZWxXTmFtZWRXTmFtZWRXTmFtZWRJdGVyYXRvcikge1xuICAgICAgICBjb25zdCBzb3J0ZWRMaXN0TW9kZWxGcm9tTmV3TGlzdE1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsSXRlcmF0b3IgPSBtb2RlbFdOYW1lZFdOYW1lZFdOYW1lZEl0ZXJhdG9yLmdldFNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvcih0aGlzLmxpc3RNb2RlbCk7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLmxlbmd0aCA+IDAgPyB0aGlzLmxpc3RNb2RlbC5zcGxpY2UoMCwgdGhpcy5saXN0TW9kZWwubGVuZ3RoKSA6IG51bGw7XG4gICAgICAgIHNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvci5sZW5ndGggPiAwID8gdGhpcy5saXN0TW9kZWwucHVzaCguLi5zb3J0ZWRMaXN0TW9kZWxGcm9tTmV3TGlzdE1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsSXRlcmF0b3IpIDogbnVsbDtcbiAgICB9XG4gICAgaW5zZXJ0RnJvbU5ld01vZGVsUGFyYW1ldGVyTGlzdE1vZGVsKG5ld01vZGVsKSB7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLnB1c2gobmV3TW9kZWwpO1xuICAgIH1cbiAgICB1cGRhdGVGcm9tTmV3TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobmV3TW9kZWwpIHtcbiAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSBuZXdNb2RlbC51bmlxdWVJZCk7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLnNwbGljZShmaW5kSW5kZXgsIDEsIG5ld01vZGVsKTtcbiAgICB9XG4gICAgZGVsZXRlRnJvbVVuaXF1ZUlkQnlNb2RlbFBhcmFtZXRlckxpc3RNb2RlbCh1bmlxdWVJZEJ5TW9kZWwpIHtcbiAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSB1bmlxdWVJZEJ5TW9kZWwpO1xuICAgICAgICB0aGlzLmxpc3RNb2RlbC5zcGxpY2UoZmluZEluZGV4LCAxKTtcbiAgICB9XG4gICAgaW5zZXJ0TGlzdEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobmV3TGlzdE1vZGVsKSB7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLnB1c2goLi4ubmV3TGlzdE1vZGVsKTtcbiAgICB9XG4gICAgdXBkYXRlTGlzdEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobmV3TGlzdE1vZGVsKSB7XG4gICAgICAgIGZvciAoY29uc3QgbmV3SXRlbU1vZGVsIG9mIG5ld0xpc3RNb2RlbCkge1xuICAgICAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSBuZXdJdGVtTW9kZWwudW5pcXVlSWQpO1xuICAgICAgICAgICAgdGhpcy5saXN0TW9kZWwuc3BsaWNlKGZpbmRJbmRleCwgMSwgbmV3SXRlbU1vZGVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWxldGVMaXN0RnJvbUxpc3RVbmlxdWVJZEJ5TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobGlzdFVuaXF1ZUlkQnlNb2RlbCkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW1VbmlxdWVJZEJ5TW9kZWwgb2YgbGlzdFVuaXF1ZUlkQnlNb2RlbCkge1xuICAgICAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSBpdGVtVW5pcXVlSWRCeU1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMubGlzdE1vZGVsLnNwbGljZShmaW5kSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbCB7XG4gICAgY29uc3RydWN0b3IodW5pcXVlSWQpIHtcbiAgICAgICAgdGhpcy51bmlxdWVJZCA9IHVuaXF1ZUlkO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTmFtZWRTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIERlZmF1bHRTdGF0ZSBleHRlbmRzIEJhc2VOYW1lZFN0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhRm9yTmFtZWQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhRm9yTmFtZWQgPSBkYXRhRm9yTmFtZWQ7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlID0gdHJ1ZTtcbiAgICB9XG4gICAgZ2V0IGdldERhdGFGb3JOYW1lZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YUZvck5hbWVkO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTmFtZWRTdHJlYW1XU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEZWZhdWx0U3RyZWFtV1N0YXRlIGV4dGVuZHMgQmFzZU5hbWVkU3RyZWFtV1N0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhRm9yTmFtZWQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhRm9yTmFtZWQgPSBkYXRhRm9yTmFtZWQ7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRGlzcG9zZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgICBnZXQgZ2V0RGF0YUZvck5hbWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhRm9yTmFtZWQ7XG4gICAgfVxuICAgIGxpc3RlblN0cmVhbURhdGFGb3JOYW1lZEZyb21DYWxsYmFjayhjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIkRlZmF1bHRTdHJlYW1XU3RhdGVcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVFRTGlzdGVuU3RyZWFtRGF0YUZvck5hbWVkRnJvbUNhbGxiYWNrXCIsIFwiQWxyZWFkeSBkaXNwb3NlZCBvZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJEZWZhdWx0U3RyZWFtV1N0YXRlXCIsIEVudW1HdWlsdHkuZGV2ZWxvcGVyLCBcIkRlZmF1bHRTdHJlYW1XU3RhdGVRUUxpc3RlblN0cmVhbURhdGFGb3JOYW1lZEZyb21DYWxsYmFja1wiLCBcIkR1cGxpY2F0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIG5vdGlmeVN0cmVhbURhdGFGb3JOYW1lZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJEZWZhdWx0U3RyZWFtV1N0YXRlXCIsIEVudW1HdWlsdHkuZGV2ZWxvcGVyLCBcIkRlZmF1bHRTdHJlYW1XU3RhdGVRUU5vdGlmeVN0cmVhbURhdGFGb3JOYW1lZFwiLCBcIkFscmVhZHkgZGlzcG9zZWQgb2ZcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2sgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVwiLCBFbnVtR3VpbHR5LmRldmVsb3BlciwgXCJEZWZhdWx0U3RyZWFtV1N0YXRlUVFOb3RpZnlTdHJlYW1EYXRhRm9yTmFtZWRcIiwgXCJTdHJlYW0gaGFzIG5vIGxpc3RlbmVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5kYXRhRm9yTmFtZWQpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUZW1wQ2FjaGVTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50ZW1wQ2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudGVtcENhY2hlV0xpc3RBY3Rpb24gPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHN0YXRpYyBjbGVhclRlbXBDYWNoZVBhcm1ldGVySW5zdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZSA9IHRoaXMuaW5zdGFuY2UudGVtcENhY2hlO1xuICAgICAgICB0ZW1wQ2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgc3RhdGljIGNsb3NlU3RyZWFtRnJvbUtleVRlbXBDYWNoZVBhcm1ldGVySW5zdGFuY2Uoa2V5VGVtcENhY2hlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZVdMaXN0QWN0aW9uID0gdGhpcy5pbnN0YW5jZS50ZW1wQ2FjaGVXTGlzdEFjdGlvbjtcbiAgICAgICAgaWYgKCF0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5oYXMoa2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdldCA9IHRlbXBDYWNoZVdMaXN0QWN0aW9uLmdldChrZXlUZW1wQ2FjaGUpO1xuICAgICAgICBnZXQgPT09IG51bGwgfHwgZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnZXQuc3BsaWNlKDAsIGdldC5sZW5ndGgpO1xuICAgIH1cbiAgICBzdGF0aWMgY2xvc2VTdHJlYW1Gcm9tTGlzdEtleVRlbXBDYWNoZVBhcm1ldGVySW5zdGFuY2UobGlzdEtleVRlbXBDYWNoZSkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMuaW5zdGFuY2UudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGZvciAoY29uc3QgaXRlbUtleVRlbXBDYWNoZSBvZiBsaXN0S2V5VGVtcENhY2hlKSB7XG4gICAgICAgICAgICBpZiAoIXRlbXBDYWNoZVdMaXN0QWN0aW9uLmhhcyhpdGVtS2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGdldCA9IHRlbXBDYWNoZVdMaXN0QWN0aW9uLmdldChpdGVtS2V5VGVtcENhY2hlKTtcbiAgICAgICAgICAgIGdldCA9PT0gbnVsbCB8fCBnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdldC5zcGxpY2UoMCwgZ2V0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGNsb3NlU3RyZWFtc1BhcmFtZXRlckluc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMuaW5zdGFuY2UudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGZvciAoY29uc3QgWywgdmFsdWVdIG9mIHRlbXBDYWNoZVdMaXN0QWN0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZS5zcGxpY2UoMCwgdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRGcm9tS2V5VGVtcENhY2hlUGFyYW1ldGVyVGVtcENhY2hlKGtleVRlbXBDYWNoZSkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGUgPSB0aGlzLnRlbXBDYWNoZTtcbiAgICAgICAgaWYgKCF0ZW1wQ2FjaGUuaGFzKGtleVRlbXBDYWNoZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIlRlbXBDYWNoZVNlcnZpY2VcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIGtleVRlbXBDYWNoZSwgXCJObyBleGlzdHMga2V5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wQ2FjaGUuZ2V0KGtleVRlbXBDYWNoZSk7XG4gICAgfVxuICAgIGxpc3RlblN0cmVhbUZyb21LZXlUZW1wQ2FjaGVBbmRDYWxsYmFja1BhcmFtZXRlck9uZShrZXlUZW1wQ2FjaGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZVdMaXN0QWN0aW9uID0gdGhpcy50ZW1wQ2FjaGVXTGlzdEFjdGlvbjtcbiAgICAgICAgaWYgKCF0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5oYXMoa2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgdGVtcENhY2hlV0xpc3RBY3Rpb24uc2V0KGtleVRlbXBDYWNoZSwgbmV3IEFycmF5KCkpO1xuICAgICAgICAgICAgKF9hID0gdGVtcENhY2hlV0xpc3RBY3Rpb24uZ2V0KGtleVRlbXBDYWNoZSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAoX2IgPSB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5nZXQoa2V5VGVtcENhY2hlKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICB1cGRhdGVGcm9tS2V5VGVtcENhY2hlQW5kVmFsdWVQYXJhbWV0ZXJUZW1wQ2FjaGUoa2V5VGVtcENhY2hlLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnRlbXBDYWNoZS5zZXQoa2V5VGVtcENhY2hlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHVwZGF0ZVdoZXJlU3RyZWFtTm90aWZpY2F0aW9uSXNQb3NzaWJsZUZyb21LZXlUZW1wQ2FjaGVBbmRWYWx1ZVBhcmFtZXRlck9uZShrZXlUZW1wQ2FjaGUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRnJvbUtleVRlbXBDYWNoZUFuZFZhbHVlUGFyYW1ldGVyVGVtcENhY2hlKGtleVRlbXBDYWNoZSwgdmFsdWUpO1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGlmICghdGVtcENhY2hlV0xpc3RBY3Rpb24uaGFzKGtleVRlbXBDYWNoZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnZXQgPSB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5nZXQoa2V5VGVtcENhY2hlKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtR2V0IG9mIGdldCkge1xuICAgICAgICAgICAgaXRlbUdldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVsZXRlRnJvbUtleVRlbXBDYWNoZVBhcmFtZXRlclRlbXBDYWNoZShrZXlUZW1wQ2FjaGUpIHtcbiAgICAgICAgdGhpcy50ZW1wQ2FjaGUuZGVsZXRlKGtleVRlbXBDYWNoZSk7XG4gICAgfVxufVxuVGVtcENhY2hlU2VydmljZS5pbnN0YW5jZSA9IG5ldyBUZW1wQ2FjaGVTZXJ2aWNlKCk7XG5leHBvcnQgdmFyIEVudW1SV1RNb2RlO1xuKGZ1bmN0aW9uIChFbnVtUldUTW9kZSkge1xuICAgIEVudW1SV1RNb2RlW0VudW1SV1RNb2RlW1wicmVsZWFzZVwiXSA9IDBdID0gXCJyZWxlYXNlXCI7XG4gICAgRW51bVJXVE1vZGVbRW51bVJXVE1vZGVbXCJ0ZXN0XCJdID0gMV0gPSBcInRlc3RcIjtcbn0pKEVudW1SV1RNb2RlIHx8IChFbnVtUldUTW9kZSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsUmVwb3NpdG9yeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuICAgIGdldE1vZGVDYWxsYmFja0Zyb21SZWxlYXNlQ2FsbGJhY2tBbmRUZXN0Q2FsbGJhY2tQYXJhbWV0ZXJFbnVtUldUTW9kZShyZWxlYXNlQ2FsbGJhY2ssIHRlc3RDYWxsYmFjaykge1xuICAgICAgICBzd2l0Y2ggKEJhc2VNb2RlbFJlcG9zaXRvcnkuZW51bVJXVE1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgRW51bVJXVE1vZGUucmVsZWFzZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVsZWFzZUNhbGxiYWNrO1xuICAgICAgICAgICAgY2FzZSBFbnVtUldUTW9kZS50ZXN0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0Q2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0U2FmZVZhbHVlV2hlcmVVc2VkSW5NZXRob2RHZXRNb2RlbEZyb21NYXBBbmRMaXN0S2V5c0FuZEluZGV4QW5kRGVmYXVsdFZhbHVlKG1hcCwgbGlzdEtleXMsIGluZGV4LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBtYXAuaGFzKGxpc3RLZXlzW2luZGV4XSkgPyBtYXAuZ2V0KGxpc3RLZXlzW2luZGV4XSkgOiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbkJhc2VNb2RlbFJlcG9zaXRvcnkuZW51bVJXVE1vZGUgPSBFbnVtUldUTW9kZS50ZXN0O1xuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKGV4Y2VwdGlvbikge1xuICAgICAgICB0aGlzLmV4Y2VwdGlvbiA9IGV4Y2VwdGlvbjtcbiAgICB9XG4gICAgc3RhdGljIHN1Y2Nlc3MoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXhjZXB0aW9uQ29udHJvbGxlcihudWxsKTtcbiAgICB9XG4gICAgc3RhdGljIGV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFeGNlcHRpb25Db250cm9sbGVyKGV4Y2VwdGlvbik7XG4gICAgfVxuICAgIGdldCBnZXRLZXlQYXJhbWV0ZXJFeGNlcHRpb24oKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHJldHVybiAoX2IgPSAoX2EgPSB0aGlzLmV4Y2VwdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmtleSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJcIjtcbiAgICB9XG4gICAgaXNXaGVyZU5vdEVxdWFsc051bGxQYXJhbWV0ZXJFeGNlcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4Y2VwdGlvbiAhPSBudWxsO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhjZXB0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkV4Y2VwdGlvbkNvbnRyb2xsZXIoZXhjZXB0aW9uOiBudWxsKVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIkV4Y2VwdGlvbkNvbnRyb2xsZXIoZXhjZXB0aW9uOiBcIiArIHRoaXMuZXhjZXB0aW9uICsgXCIpXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlc3VsdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVyLCBleGNlcHRpb25Db250cm9sbGVyKSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyID0gcGFyYW1ldGVyO1xuICAgICAgICB0aGlzLmV4Y2VwdGlvbkNvbnRyb2xsZXIgPSBleGNlcHRpb25Db250cm9sbGVyO1xuICAgIH1cbiAgICBzdGF0aWMgc3VjY2VzcyhwYXJhbWV0ZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXN1bHQocGFyYW1ldGVyLCBFeGNlcHRpb25Db250cm9sbGVyLnN1Y2Nlc3MoKSk7XG4gICAgfVxuICAgIHN0YXRpYyBleGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzdWx0KG51bGwsIEV4Y2VwdGlvbkNvbnRyb2xsZXIuZXhjZXB0aW9uKGV4Y2VwdGlvbikpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z1ByaW50KHRleHQpIHtcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z1ByaW50RXhjZXB0aW9uKHRleHQpIHtcbiAgICBkZWJ1Z1ByaW50KFwiXFx4MUJbMzFtXCIgKyB0ZXh0ICsgXCJcXHgxYlswbVwiKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTG9jYWxFeGNlcHRpb24sIEVudW1HdWlsdHksIEJhc2VNb2RlbCwgQmFzZUxpc3RNb2RlbCwgUmVzdWx0LCBOZXR3b3JrRXhjZXB0aW9uLCBCYXNlRGF0YUZvck5hbWVkLCBEZWZhdWx0U3RyZWFtV1N0YXRlLCBkZWJ1Z1ByaW50LCBFeGNlcHRpb25Db250cm9sbGVyLCBCYXNlTmFtZWRTdHJlYW1XU3RhdGUsIEJhc2VNb2RlbFJlcG9zaXRvcnksIEVudW1SV1RNb2RlIH0gZnJvbSBcImxpYnJhcnlfYXJjaGl0ZWN0dXJlX212dm1fbW9kaWZ5X2phdmFzY3JpcHRcIjtcclxuXHJcbmNsYXNzIEZhY3RvcnlPYmplY3RVdGlsaXR5IHtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLyogTW9kZWxSZXBvc2l0b3J5ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBnZXRJUEFkZHJlc3NSZXBvc2l0b3J5KCk6IElQQWRkcmVzc1JlcG9zaXRvcnk8SVBBZGRyZXNzLExpc3RJUEFkZHJlc3M8SVBBZGRyZXNzPj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgSVBBZGRyZXNzUmVwb3NpdG9yeTxJUEFkZHJlc3MsTGlzdElQQWRkcmVzczxJUEFkZHJlc3M+PigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBSZWFkeURhdGFVdGlsaXR5IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgc3VjY2VzcyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSB1bmtub3duID0gXCJ1bmtub3duXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGlQQVBJID0gXCJodHRwczovL2pzb25pcC5jb20vXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eSB7XHJcbiAgICAvKiBJUEFkZHJlc3MgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaVBBZGRyZXNzUVFJcCA9IFwiaXBcIjtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBJUEFkZHJlc3MgZXh0ZW5kcyBCYXNlTW9kZWwge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGlwOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGlwOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihcIlwiICsgaXAgKyBcIlwiKTtcclxuICAgICAgICB0aGlzLmlwID0gaXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldCBnZXRDbG9uZSgpOiBJUEFkZHJlc3Mge1xyXG4gICAgICAgIHJldHVybiBuZXcgSVBBZGRyZXNzKHRoaXMuaXApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIklQQWRkcmVzcyhpcDogXCIgKyB0aGlzLmlwICsgXCIpXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIExpc3RJUEFkZHJlc3M8VCBleHRlbmRzIElQQWRkcmVzcz4gZXh0ZW5kcyBCYXNlTGlzdE1vZGVsPFQ+IHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihsaXN0TW9kZWw6IEFycmF5PFQ+KSB7XHJcbiAgICAgICAgc3VwZXIobGlzdE1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0IGdldENsb25lKCk6IExpc3RJUEFkZHJlc3M8VD4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0xpc3RNb2RlbCA9IG5ldyBBcnJheTxUPigpO1xyXG4gICAgICAgIGZvcihjb25zdCBpdGVtTW9kZWwgb2YgdGhpcy5saXN0TW9kZWwpIHtcclxuICAgICAgICAgICAgbmV3TGlzdE1vZGVsLnB1c2goaXRlbU1vZGVsLmdldENsb25lIGFzIFQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IExpc3RJUEFkZHJlc3MobmV3TGlzdE1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgc3RyTGlzdE1vZGVsID0gXCJcXG5cIjtcclxuICAgICAgICBmb3IoY29uc3QgaXRlbU1vZGVsIG9mIHRoaXMubGlzdE1vZGVsKSB7XHJcbiAgICAgICAgICAgIHN0ckxpc3RNb2RlbCArPSBpdGVtTW9kZWwudG9TdHJpbmcoKSArIFwiLFxcblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJMaXN0SVBBZGRyZXNzKGxpc3RNb2RlbDogW1wiICsgc3RyTGlzdE1vZGVsICsgXCJdKVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gVGhpcyBjbGFzcyBuZWVkcyB0byBiZSBjYWxsZWQgd2hlcmUgdGhlcmUgYXJlIG5ldHdvcmsgcmVxdWVzdHMgKGluIHRoZSBkYXRhIHNvdXJjZSksIFxyXG4vLy8gc2luY2Ugd2l0aG91dCB0aGlzIGNsYXNzIHRoZSBkZXZlbG9wZXIgd2lsbCBub3Qga25vdyBpbiB3aGljaCBjbGFzcyB0aGUgbmV0d29yayByZXF1ZXN0cyBhcmVcclxuY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZSA9IG5ldyBIdHRwU2VydmljZSgpO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIElQQWRkcmVzc1JlcG9zaXRvcnk8VCBleHRlbmRzIElQQWRkcmVzcyxZIGV4dGVuZHMgTGlzdElQQWRkcmVzczxUPj4gZXh0ZW5kcyBCYXNlTW9kZWxSZXBvc2l0b3J5PFQsWT4ge1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGh0dHBTZXJ2aWNlID0gSHR0cFNlcnZpY2UuaW5zdGFuY2U7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldEJhc2VNb2RlbEZyb21NYXBBbmRMaXN0S2V5cyhtYXA6IE1hcDxzdHJpbmcsIGFueT4sIGxpc3RLZXlzOiBzdHJpbmdbXSk6IFQge1xyXG4gICAgICAgIHJldHVybiBuZXcgSVBBZGRyZXNzKFxyXG4gICAgICAgICAgICB0aGlzLmdldFNhZmVWYWx1ZVdoZXJlVXNlZEluTWV0aG9kR2V0TW9kZWxGcm9tTWFwQW5kTGlzdEtleXNBbmRJbmRleEFuZERlZmF1bHRWYWx1ZShcclxuICAgICAgICAgICAgICAgIG1hcCwgbGlzdEtleXMsIDAsIFwiXCIpKSBhcyBUO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBnZXRCYXNlTGlzdE1vZGVsRnJvbUxpc3RNb2RlbChsaXN0TW9kZWw6IFRbXSk6IFkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTGlzdElQQWRkcmVzcyhsaXN0TW9kZWwpIGFzIFk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldElQQWRkcmVzc1BhcmFtZXRlckh0dHBTZXJ2aWNlKCk6IFByb21pc2U8UmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TW9kZUNhbGxiYWNrRnJvbVJlbGVhc2VDYWxsYmFja0FuZFRlc3RDYWxsYmFja1BhcmFtZXRlckVudW1SV1RNb2RlKFxyXG4gICAgICAgICAgICB0aGlzLmdldElQQWRkcmVzc1BhcmFtZXRlckh0dHBTZXJ2aWNlV1JlbGVhc2VDYWxsYmFjayxcclxuICAgICAgICAgICAgdGhpcy5nZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZVdUZXN0Q2FsbGJhY2spKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBnZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZVdSZWxlYXNlQ2FsbGJhY2sgPSBhc3luYyAoKTogUHJvbWlzZTxSZXN1bHQ+ID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFJlYWR5RGF0YVV0aWxpdHkuaVBBUEksIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgTmV0d29ya0V4Y2VwdGlvbi5mcm9tS2V5QW5kU3RhdHVzQ29kZShcIklQQWRkcmVzc1JlcG9zaXRvcnlcIixyZXNwb25zZS5zdGF0dXMudG9TdHJpbmcoKSxyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcCA9IG5ldyBNYXA8c3RyaW5nLGFueT4oT2JqZWN0LmVudHJpZXMoanNvbikpO1xyXG4gICAgICAgICAgICByZXR1cm4gUmVzdWx0LnN1Y2Nlc3ModGhpcy5nZXRCYXNlTW9kZWxGcm9tTWFwQW5kTGlzdEtleXMoXHJcbiAgICAgICAgICAgICAgICBtYXAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldElQQWRkcmVzc1BhcmFtZXRlckh0dHBTZXJ2aWNlV0xpc3RLZXlzKSk7XHJcbiAgICAgICAgfSBjYXRjaChleGNlcHRpb24pIHtcclxuICAgICAgICAgICAgaWYoZXhjZXB0aW9uIGluc3RhbmNlb2YgTmV0d29ya0V4Y2VwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlc3VsdC5leGNlcHRpb24oZXhjZXB0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gUmVzdWx0LmV4Y2VwdGlvbihuZXcgTG9jYWxFeGNlcHRpb24oXCJJUEFkZHJlc3NSZXBvc2l0b3J5XCIsRW51bUd1aWx0eS5kZXZpY2UsUmVhZHlEYXRhVXRpbGl0eS51bmtub3duLGV4Y2VwdGlvbi50b1N0cmluZygpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0SVBBZGRyZXNzUGFyYW1ldGVySHR0cFNlcnZpY2VXVGVzdENhbGxiYWNrID0gYXN5bmMgKCk6IFByb21pc2U8UmVzdWx0PiA9PiB7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsMTAwMCkpO1xyXG4gICAgICAgIHJldHVybiBSZXN1bHQuc3VjY2Vzcyh0aGlzLmdldEJhc2VNb2RlbEZyb21NYXBBbmRMaXN0S2V5cyhcclxuICAgICAgICAgICAgbmV3IE1hcDxzdHJpbmcsYW55PihbXHJcbiAgICAgICAgICAgICAgICBbS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eS5pUEFkZHJlc3NRUUlwLFwiMTIxLjEyMS4xMi4xMlwiXVxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgdGhpcy5nZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZVdMaXN0S2V5cykpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGdldElQQWRkcmVzc1BhcmFtZXRlckh0dHBTZXJ2aWNlV0xpc3RLZXlzKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBbS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eS5pUEFkZHJlc3NRUUlwXTtcclxuICAgIH1cclxufVxyXG5cclxuZW51bSBFbnVtRGF0YUZvck1haW5WTSB7XHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBleGNlcHRpb24sXHJcbiAgICBzdWNjZXNzXHJcbn1cclxuXHJcbmNsYXNzIERhdGFGb3JNYWluVk0gZXh0ZW5kcyBCYXNlRGF0YUZvck5hbWVkPEVudW1EYXRhRm9yTWFpblZNPiB7XHJcbiAgICBwdWJsaWMgaVBBZGRyZXNzOiBJUEFkZHJlc3M7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGlzTG9hZGluZzogYm9vbGVhbixpUEFkZHJlc3M6IElQQWRkcmVzcykge1xyXG4gICAgICAgIHN1cGVyKGlzTG9hZGluZyk7XHJcbiAgICAgICAgdGhpcy5pUEFkZHJlc3MgPSBpUEFkZHJlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldCBnZXRFbnVtRGF0YUZvck5hbWVkKCk6IEVudW1EYXRhRm9yTWFpblZNIHtcclxuICAgICAgICBpZih0aGlzLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gRW51bURhdGFGb3JNYWluVk0uaXNMb2FkaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmV4Y2VwdGlvbkNvbnRyb2xsZXIuaXNXaGVyZU5vdEVxdWFsc051bGxQYXJhbWV0ZXJFeGNlcHRpb24oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW51bURhdGFGb3JNYWluVk0uZXhjZXB0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRW51bURhdGFGb3JNYWluVk0uc3VjY2VzcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJEYXRhRm9yTWFpblZNKGlzTG9hZGluZzogXCIgKyB0aGlzLmlzTG9hZGluZyArIFwiLCBcIiBcclxuICAgICAgICAgICAgKyBcImV4Y2VwdGlvbkNvbnRyb2xsZXI6IFwiICsgdGhpcy5leGNlcHRpb25Db250cm9sbGVyICsgXCIsIFwiIFxyXG4gICAgICAgICAgICArIFwiaVBBZGRyZXNzOiBcIiArIHRoaXMuaVBBZGRyZXNzICsgXCIpXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1haW5WTSB7XHJcbiAgICAvLyBNb2RlbFJlcG9zaXRvcnlcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaVBBZGRyZXNzUmVwb3NpdG9yeSA9IEZhY3RvcnlPYmplY3RVdGlsaXR5LmdldElQQWRkcmVzc1JlcG9zaXRvcnk7XHJcbiAgICBcclxuICAgIC8vIE5hbWVkVXRpbGl0eVxyXG4gICAgXHJcbiAgICAvLyBOYW1lZFN0cmVhbVdTdGF0ZVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBuYW1lZFN0cmVhbVdTdGF0ZTogQmFzZU5hbWVkU3RyZWFtV1N0YXRlPERhdGFGb3JNYWluVk0+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5hbWVkU3RyZWFtV1N0YXRlID0gbmV3IERlZmF1bHRTdHJlYW1XU3RhdGU8RGF0YUZvck1haW5WTT4obmV3IERhdGFGb3JNYWluVk0odHJ1ZSxuZXcgSVBBZGRyZXNzKFwiXCIpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdGhpcy5uYW1lZFN0cmVhbVdTdGF0ZS5saXN0ZW5TdHJlYW1EYXRhRm9yTmFtZWRGcm9tQ2FsbGJhY2soKF9kYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBmaXJzdFJlcXVlc3QgPSBhd2FpdCB0aGlzLmZpcnN0UmVxdWVzdCgpO1xyXG4gICAgICAgIGRlYnVnUHJpbnQoXCJNYWluVk06IFwiICsgZmlyc3RSZXF1ZXN0KTtcclxuICAgICAgICB0aGlzLm5hbWVkU3RyZWFtV1N0YXRlLm5vdGlmeVN0cmVhbURhdGFGb3JOYW1lZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubmFtZWRTdHJlYW1XU3RhdGUuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGF0YUZvck5hbWVkID0gdGhpcy5uYW1lZFN0cmVhbVdTdGF0ZS5nZXREYXRhRm9yTmFtZWQ7XHJcbiAgICAgICAgc3dpdGNoKGRhdGFGb3JOYW1lZC5nZXRFbnVtRGF0YUZvck5hbWVkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRW51bURhdGFGb3JNYWluVk0uaXNMb2FkaW5nOlxyXG4gICAgICAgICAgICAgICAgZGVidWdQcmludChcIkJ1aWxkOiBJc0xvYWRpbmdcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFbnVtRGF0YUZvck1haW5WTS5leGNlcHRpb246XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z1ByaW50KFwiQnVpbGQ6IEV4Y2VwdGlvbihcIiArIGRhdGFGb3JOYW1lZC5leGNlcHRpb25Db250cm9sbGVyLmdldEtleVBhcmFtZXRlckV4Y2VwdGlvbiArIFwiKVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVudW1EYXRhRm9yTWFpblZNLnN1Y2Nlc3M6XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z1ByaW50KFwiQnVpbGQ6IFN1Y2Nlc3MoXCIgKyBkYXRhRm9yTmFtZWQuaVBBZGRyZXNzICsgXCIpXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBmaXJzdFJlcXVlc3QoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBjb25zdCBnZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZSA9IGF3YWl0IHRoaXMuaVBBZGRyZXNzUmVwb3NpdG9yeS5nZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZSgpO1xyXG4gICAgICAgIGlmKGdldElQQWRkcmVzc1BhcmFtZXRlckh0dHBTZXJ2aWNlLmV4Y2VwdGlvbkNvbnRyb2xsZXIuaXNXaGVyZU5vdEVxdWFsc051bGxQYXJhbWV0ZXJFeGNlcHRpb24oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maXJzdFFRRmlyc3RSZXF1ZXN0UVFHZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZShnZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZS5leGNlcHRpb25Db250cm9sbGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uYW1lZFN0cmVhbVdTdGF0ZS5nZXREYXRhRm9yTmFtZWQuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uYW1lZFN0cmVhbVdTdGF0ZS5nZXREYXRhRm9yTmFtZWQuaVBBZGRyZXNzID0gZ2V0SVBBZGRyZXNzUGFyYW1ldGVySHR0cFNlcnZpY2UucGFyYW1ldGVyLmdldENsb25lO1xyXG4gICAgICAgIHJldHVybiBSZWFkeURhdGFVdGlsaXR5LnN1Y2Nlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBmaXJzdFFRRmlyc3RSZXF1ZXN0UVFHZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZShleGNlcHRpb25Db250cm9sbGVyOiBFeGNlcHRpb25Db250cm9sbGVyKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICB0aGlzLm5hbWVkU3RyZWFtV1N0YXRlLmdldERhdGFGb3JOYW1lZC5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5hbWVkU3RyZWFtV1N0YXRlLmdldERhdGFGb3JOYW1lZC5leGNlcHRpb25Db250cm9sbGVyID0gZXhjZXB0aW9uQ29udHJvbGxlcjtcclxuICAgICAgICByZXR1cm4gZXhjZXB0aW9uQ29udHJvbGxlci5nZXRLZXlQYXJhbWV0ZXJFeGNlcHRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgICBCYXNlTW9kZWxSZXBvc2l0b3J5LmVudW1SV1RNb2RlID0gRW51bVJXVE1vZGUucmVsZWFzZTtcclxuICAgIGNvbnN0IG1haW5WTSA9IG5ldyBNYWluVk0oKTtcclxuICAgIGF3YWl0IG1haW5WTS5pbml0KCk7XHJcbiAgICBtYWluVk0uZGlzcG9zZSgpO1xyXG59XHJcbm1haW4oKTtcclxuLy8gRVhQRUNURUQgT1VUUFVUOlxyXG4vL1xyXG4vLyBNYWluVk06IHN1Y2Nlc3NcclxuLy8gQnVpbGQ6IFN1Y2Nlc3MoSVBBZGRyZXNzKGlwOiAke3lvdXJfaXB9KSlcclxuXHJcbi8vLyBPUlxyXG5cclxuLy8gRVhQRUNURUQgT1VUUFVUOlxyXG4vL1xyXG4vLyA9PT1zdGFydF90b190cmFjZV9leGNlcHRpb249PT1cclxuLy9cclxuLy8gV2hlcmVIYXBwZW5lZEV4Y2VwdGlvbihDbGFzcykgLS0+ICR7V2hlcmVIYXBwZW5lZEV4Y2VwdGlvbihDbGFzcyl9XHJcbi8vIE5hbWVFeGNlcHRpb24oQ2xhc3MpIC0tPiAke05hbWVFeGNlcHRpb24oQ2xhc3MpfVxyXG4vLyB0b1N0cmluZygpIC0tPiAke3RvU3RyaW5nKCl9XHJcbi8vXHJcbi8vID09PWVuZF90b190cmFjZV9leGNlcHRpb249PT1cclxuLy9cclxuLy8gTWFpblZNOiAke2dldEtleVBhcmFtZXRlckV4Y2VwdGlvbn1cclxuLy8gQnVpbGQ6IEV4Y2VwdGlvbigke2dldEtleVBhcmFtZXRlckV4Y2VwdGlvbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9