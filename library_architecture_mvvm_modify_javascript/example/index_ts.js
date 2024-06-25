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
        const newListModelFIRST = new Array();
        while (this.listModelIterator.length > 0) {
            const currentModelWIndex = this.currentModelWIndex;
            this.listModelIterator.splice(currentModelWIndex.index, 1);
            newListModelFIRST.push(currentModelWIndex.currentModel);
        }
        return newListModelFIRST;
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
class BaseModelRepository {
    constructor(enumRWTMode) {
        this.enumRWTMode = enumRWTMode;
    }
    getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(releaseCallback, testCallback) {
        switch (this.enumRWTMode) {
            case EnumRWTMode.release:
                return releaseCallback;
            case EnumRWTMode.test:
                return testCallback;
        }
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
    constructor(enumRWTMode) {
        super(enumRWTMode);
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
                return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.success(this.getBaseModelFromMapAndListKeys(map, [KeysHttpServiceUtility.iPAddressQQIp]));
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
            ]), [KeysHttpServiceUtility.iPAddressQQIp]));
        });
    }
    getBaseModelFromMapAndListKeys(map, listKeys) {
        if (listKeys.length <= 0) {
            return new IPAddress("");
        }
        return new IPAddress(map.has(listKeys[0]) ? map.get(listKeys[0]) : "");
    }
    getBaseListModelFromListModel(listModel) {
        return new ListIPAddress(listModel);
    }
    getIPAddressParameterHttpService() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(this.getIPAddressParameterHttpServiceWReleaseCallback, this.getIPAddressParameterHttpServiceWTestCallback)();
        });
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
        this.iPAddressRepository = new IPAddressRepository(library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.EnumRWTMode.release);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFD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UUFBUSxDQUFDO1lBQ3ZHLE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUVhLHFEQUFxRCxDQUFDLG1CQUF3Qzs7WUFDeEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7WUFDakYsT0FBTyxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQztRQUN4RCxDQUFDO0tBQUE7Q0FDSjtBQUVELFNBQWUsSUFBSTs7UUFDZixNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQzVCLE1BQU0sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBQUE7QUFDRCxJQUFJLEVBQUUsQ0FBQztBQUNQLG1CQUFtQjtBQUNuQixFQUFFO0FBQ0Ysa0JBQWtCO0FBQ2xCLDRDQUE0QztBQUU1QyxNQUFNO0FBRU4sbUJBQW1CO0FBQ25CLEVBQUU7QUFDRixpQ0FBaUM7QUFDakMsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxtREFBbUQ7QUFDbkQsK0JBQStCO0FBQy9CLEVBQUU7QUFDRiwrQkFBK0I7QUFDL0IsRUFBRTtBQUNGLHNDQUFzQztBQUN0QyxnREFBZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLy4uL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL2V4YW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGFtcGxlLy4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJhc2VEYXRhRm9yTmFtZWQge1xuICAgIGNvbnN0cnVjdG9yKGlzTG9hZGluZykge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGlzTG9hZGluZztcbiAgICAgICAgdGhpcy5leGNlcHRpb25Db250cm9sbGVyID0gRXhjZXB0aW9uQ29udHJvbGxlci5zdWNjZXNzKCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHRoaXNDbGFzcywgZXhjZXB0aW9uQ2xhc3MsIGtleSkge1xuICAgICAgICB0aGlzLnRoaXNDbGFzcyA9IHRoaXNDbGFzcztcbiAgICAgICAgdGhpcy5leGNlcHRpb25DbGFzcyA9IGV4Y2VwdGlvbkNsYXNzO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG4gICAgLy8vIENhbGwgdGhpcyBtZXRob2QgaW4gdGhlIGRlc2NlbmRhbnQgY29uc3RydWN0b3IgYXMgdGhlIGxhc3QgbGluZVxuICAgIGRlYnVnUHJpbnRFeGNlcHRpb25XaGVyZVRvU3RyaW5nUGFyYW1ldGVyc1RoaXNDbGFzc0FuZEV4Y2VwdGlvbkNsYXNzKCkge1xuICAgICAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uKFwiXFxuPT09c3RhcnRfdG9fdHJhY2VfZXhjZXB0aW9uPT09XFxuXCIpO1xuICAgICAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uKFwiV2hlcmVIYXBwZW5lZEV4Y2VwdGlvbihDbGFzcykgLS0+IFwiICsgdGhpcy50aGlzQ2xhc3MgKyBcIlxcblwiICtcbiAgICAgICAgICAgIFwiTmFtZUV4Y2VwdGlvbihDbGFzcykgLS0+IFwiICsgdGhpcy5leGNlcHRpb25DbGFzcyArIFwiXFxuXCIgK1xuICAgICAgICAgICAgXCJ0b1N0cmluZygpIC0tPiBcIiArIHRoaXMudG9TdHJpbmcoKSk7XG4gICAgICAgIGRlYnVnUHJpbnRFeGNlcHRpb24oXCJcXG49PT1lbmRfdG9fdHJhY2VfZXhjZXB0aW9uPT09XFxuXCIpO1xuICAgIH1cbn1cbmV4cG9ydCB2YXIgRW51bUd1aWx0eTtcbihmdW5jdGlvbiAoRW51bUd1aWx0eSkge1xuICAgIEVudW1HdWlsdHlbRW51bUd1aWx0eVtcImRldmVsb3BlclwiXSA9IDBdID0gXCJkZXZlbG9wZXJcIjtcbiAgICBFbnVtR3VpbHR5W0VudW1HdWlsdHlbXCJkZXZpY2VcIl0gPSAxXSA9IFwiZGV2aWNlXCI7XG4gICAgRW51bUd1aWx0eVtFbnVtR3VpbHR5W1widXNlclwiXSA9IDJdID0gXCJ1c2VyXCI7XG59KShFbnVtR3VpbHR5IHx8IChFbnVtR3VpbHR5ID0ge30pKTtcbmV4cG9ydCBjbGFzcyBMb2NhbEV4Y2VwdGlvbiBleHRlbmRzIEJhc2VFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHRoaXNDbGFzcywgdmFsdWVXRW51bUd1aWx0eSwga2V5LCBtZXNzYWdlID0gXCJcIikge1xuICAgICAgICBzdXBlcih0aGlzQ2xhc3MsIFwiTG9jYWxFeGNlcHRpb25cIiwga2V5KTtcbiAgICAgICAgdGhpcy52YWx1ZVdFbnVtR3VpbHR5ID0gdmFsdWVXRW51bUd1aWx0eTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5kZWJ1Z1ByaW50RXhjZXB0aW9uV2hlcmVUb1N0cmluZ1BhcmFtZXRlcnNUaGlzQ2xhc3NBbmRFeGNlcHRpb25DbGFzcygpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiTG9jYWxFeGNlcHRpb24odmFsdWVXRW51bUd1aWx0eTogXCIgKyB0aGlzLnZhbHVlV0VudW1HdWlsdHkgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJrZXk6IFwiICsgdGhpcy5rZXkgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJtZXNzYWdlIChvcHRpb25hbCk6IFwiICsgdGhpcy5tZXNzYWdlICsgXCIpXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE5ldHdvcmtFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0aGlzQ2xhc3MsIGtleSwgc3RhdHVzQ29kZSwgbmFtZVN0YXR1c0NvZGUgPSBcIlwiLCBkZXNjcmlwdGlvblN0YXR1c0NvZGUgPSBcIlwiKSB7XG4gICAgICAgIHN1cGVyKHRoaXNDbGFzcywgXCJOZXR3b3JrRXhjZXB0aW9uXCIsIGtleSk7XG4gICAgICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gICAgICAgIHRoaXMubmFtZVN0YXR1c0NvZGUgPSBuYW1lU3RhdHVzQ29kZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblN0YXR1c0NvZGUgPSBkZXNjcmlwdGlvblN0YXR1c0NvZGU7XG4gICAgICAgIHRoaXMuZGVidWdQcmludEV4Y2VwdGlvbldoZXJlVG9TdHJpbmdQYXJhbWV0ZXJzVGhpc0NsYXNzQW5kRXhjZXB0aW9uQ2xhc3MoKTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21LZXlBbmRTdGF0dXNDb2RlKHRoaXNDbGFzcywga2V5LCBzdGF0dXNDb2RlKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgY2FzZSAyMDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDEsIFwiMjAxIENyZWF0ZWRcIiwgXCJUaGUgcmVxdWVzdCBoYXMgYmVlbiBmdWxmaWxsZWQgYW5kIHJlc3VsdGVkIGluIGEgbmV3IHJlc291cmNlIGJlaW5nIGNyZWF0ZWQuXCIpO1xuICAgICAgICAgICAgY2FzZSAyMDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDIsIFwiMjAyIEFjY2VwdGVkXCIsIFwiVGhlIHJlcXVlc3QgaGFzIGJlZW4gYWNjZXB0ZWQgZm9yIHByb2Nlc3NpbmcsIGJ1dCB0aGUgcHJvY2Vzc2luZyBoYXMgbm90IGJlZW4gY29tcGxldGVkLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjAzLCBcIjIwMyBOb24tQXV0aG9yaXRhdGl2ZSBJbmZvcm1hdGlvblwiLCBcIlRoZSByZXR1cm5lZCBtZXRhSW5mb3JtYXRpb24gaW4gdGhlIGVudGl0eS1oZWFkZXIgaXMgbm90IHRoZSBkZWZpbml0aXZlIHNldCBhcyBhdmFpbGFibGUgZnJvbSB0aGUgb3JpZ2luIHNlcnZlciwgYnV0IGlzIGdhdGhlcmVkIGZyb20gYSBsb2NhbCBvciBhIHRoaXJkLXBhcnR5IGNvcHkuXCIpO1xuICAgICAgICAgICAgY2FzZSAyMDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDQsIFwiMjA0IE5vIENvbnRlbnRcIiwgXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYnV0IGRvZXMgbm90IG5lZWQgdG8gcmV0dXJuIGFuIGVudGl0eS1ib2R5LCBhbmQgbWlnaHQgd2FudCB0byByZXR1cm4gdXBkYXRlZCBtZXRhSW5mb3JtYXRpb24uXCIpO1xuICAgICAgICAgICAgY2FzZSAyMDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDUsIFwiMjA1IFJlc2V0IENvbnRlbnRcIiwgXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYW5kIHRoZSB1c2VyIGFnZW50IFNIT1VMRCByZXNldCB0aGUgZG9jdW1lbnQgdmlldyB3aGljaCBjYXVzZWQgdGhlIHJlcXVlc3QgdG8gYmUgc2VudC5cIik7XG4gICAgICAgICAgICBjYXNlIDIwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDIwNiwgXCIyMDYgUGFydGlhbCBDb250ZW50XCIsIFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIHRoZSBwYXJ0aWFsIEdFVCByZXF1ZXN0IGZvciB0aGUgcmVzb3VyY2UuXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDAsIFwiMzAwIE11bHRpcGxlIENob2ljZXNcIiwgXCJVc2VyIChvciB1c2VyIGFnZW50KSBjYW4gc2VsZWN0IGEgcHJlZmVycmVkIHJlcHJlc2VudGF0aW9uIGFuZCByZWRpcmVjdCBpdHMgcmVxdWVzdCB0byB0aGF0IGxvY2F0aW9uLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzAxLCBcIjMwMSBNb3ZlZCBQZXJtYW5lbnRseVwiLCBcIlRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgaGFzIGJlZW4gYXNzaWduZWQgYSBuZXcgcGVybWFuZW50IFVSSSBhbmQgYW55IGZ1dHVyZSByZWZlcmVuY2VzIHRvIHRoaXMgcmVzb3VyY2UgU0hPVUxEIHVzZSBvbmUgb2YgdGhlIHJldHVybmVkIFVSSXMuXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDIsIFwiMzAyIEZvdW5kXCIsIFwiVGhlIHJlcXVlc3RlZCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSS5cIik7XG4gICAgICAgICAgICBjYXNlIDMwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwMywgXCIzMDMgU2VlIE90aGVyXCIsIFwiVGhlIHJlc3BvbnNlIHRvIHRoZSByZXF1ZXN0IGNhbiBiZSBmb3VuZCB1bmRlciBhIGRpZmZlcmVudCBVUkkgYW5kIFNIT1VMRCBiZSByZXRyaWV2ZWQgdXNpbmcgYSBHRVQgbWV0aG9kIG9uIHRoYXQgcmVzb3VyY2UuXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDQsIFwiMzA0IE5vdCBNb2RpZmllZFwiLCBcIklmIHRoZSBjbGllbnQgaGFzIHBlcmZvcm1lZCBhIGNvbmRpdGlvbmFsIEdFVCByZXF1ZXN0IGFuZCBhY2Nlc3MgaXMgYWxsb3dlZCwgYnV0IHRoZSBkb2N1bWVudCBoYXMgbm90IGJlZW4gbW9kaWZpZWQsIHRoZSBzZXJ2ZXIgU0hPVUxEIHJlc3BvbmQgd2l0aCB0aGlzIHN0YXR1cyBjb2RlLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzA1LCBcIjMwNSBVc2UgUHJveHlcIiwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIE1VU1QgYmUgYWNjZXNzZWQgdGhyb3VnaCB0aGUgcHJveHkgZ2l2ZW4gYnkgdGhlIExvY2F0aW9uIGZpZWxkLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzA3LCBcIjMwNyBUZW1wb3JhcnkgUmVkaXJlY3RcIiwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDAwLCBcIjQwMCBCYWQgUmVxdWVzdFwiLCBcIlRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSB1bmRlcnN0b29kIGJ5IHRoZSBzZXJ2ZXIgZHVlIHRvIG1hbGZvcm1lZCBzeW50YXguXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDEsIFwiNDAxIFVuYXV0aG9yaXplZFwiLCBcIlRoZSByZXF1ZXN0IHJlcXVpcmVzIHVzZXIgYXV0aGVudGljYXRpb24uXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDMsIFwiNDAzIEZvcmJpZGRlblwiLCBcIlRoZSBzZXJ2ZXIgdW5kZXJzdG9vZCB0aGUgcmVxdWVzdCwgYnV0IGlzIHJlZnVzaW5nIHRvIGZ1bGZpbGwgaXQuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDQsIFwiNDA0IE5vdCBGb3VuZFwiLCBcIlRoZSBzZXJ2ZXIgaGFzIG5vdCBmb3VuZCBhbnl0aGluZyBtYXRjaGluZyB0aGUgUmVxdWVzdC1VUkkuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDUsIFwiNDA1IE1ldGhvZCBOb3QgQWxsb3dlZCcsJ1RoZSBtZXRob2Qgc3BlY2lmaWVkIGluIHRoZSBSZXF1ZXN0LUxpbmUgaXMgbm90IGFsbG93ZWQgZm9yIHRoZSByZXNvdXJjZSBpZGVudGlmaWVkIGJ5IHRoZSBSZXF1ZXN0LVVSSS5cIik7XG4gICAgICAgICAgICBjYXNlIDQwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwNiwgXCI0MDYgTm90IEFjY2VwdGFibGVcIiwgXCJUaGUgcmVzb3VyY2UgaWRlbnRpZmllZCBieSB0aGUgcmVxdWVzdCBpcyBvbmx5IGNhcGFibGUgb2YgZ2VuZXJhdGluZyByZXNwb25zZSBlbnRpdGllcyB3aGljaCBoYXZlIGNvbnRlbnQgY2hhcmFjdGVyaXN0aWNzIG5vdCBhY2NlcHRhYmxlIGFjY29yZGluZyB0byB0aGUgYWNjZXB0IGhlYWRlcnMgc2VudCBpbiB0aGUgcmVxdWVzdC5cIik7XG4gICAgICAgICAgICBjYXNlIDQwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwNywgXCI0MDcgUHJveHkgQXV0aGVudGljYXRpb24gUmVxdWlyZWRcIiwgXCJUaGlzIGNvZGUgaXMgc2ltaWxhciB0byA0MDEgKFVuYXV0aG9yaXplZCksIGJ1dCBpbmRpY2F0ZXMgdGhhdCB0aGUgY2xpZW50IG11c3QgZmlyc3QgYXV0aGVudGljYXRlIGl0c2VsZiB3aXRoIHRoZSBwcm94eS5cIik7XG4gICAgICAgICAgICBjYXNlIDQwODpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwOCwgXCI0MDggUmVxdWVzdCBUaW1lb3V0XCIsIFwiVGhlIGNsaWVudCBkaWQgbm90IHByb2R1Y2UgYSByZXF1ZXN0IHdpdGhpbiB0aGUgdGltZSB0aGF0IHRoZSBzZXJ2ZXIgd2FzIHByZXBhcmVkIHRvIHdhaXQuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDksIFwiNDA5IENvbmZsaWN0XCIsIFwiVGhlIHJlcXVlc3QgY291bGQgbm90IGJlIGNvbXBsZXRlZCBkdWUgdG8gYSBjb25mbGljdCB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSByZXNvdXJjZS5cIik7XG4gICAgICAgICAgICBjYXNlIDQxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQxMCwgXCI0MTAgR29uZVwiLCBcIlRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZSBhdCB0aGUgc2VydmVyIGFuZCBubyBmb3J3YXJkaW5nIGFkZHJlc3MgaXMga25vd24uXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTEsIFwiNDExIExlbmd0aCBSZXF1aXJlZFwiLCBcIlRoZSBzZXJ2ZXIgcmVmdXNlcyB0byBhY2NlcHQgdGhlIHJlcXVlc3Qgd2l0aG91dCBhIGRlZmluZWQgQ29udGVudC1MZW5ndGguXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTIsIFwiNDEyIFByZWNvbmRpdGlvbiBGYWlsZWRcIiwgXCJUaGUgcHJlY29uZGl0aW9uIGdpdmVuIGluIG9uZSBvciBtb3JlIG9mIHRoZSByZXF1ZXN0LWhlYWRlciBmaWVsZHMgZXZhbHVhdGVkIHRvIGZhbHNlIHdoZW4gaXQgd2FzIHRlc3RlZCBvbiB0aGUgc2VydmVyLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDEzLCBcIjQxMyBSZXF1ZXN0IEVudGl0eSBUb28gTGFyZ2VcIiwgXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHByb2Nlc3MgYSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlcXVlc3QgZW50aXR5IGlzIGxhcmdlciB0aGFuIHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyBvciBhYmxlIHRvIHByb2Nlc3MuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTQsIFwiNDE0IFJlcXVlc3QtVVJJIFRvbyBMb25nXCIsIFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBzZXJ2aWNlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIFJlcXVlc3QtVVJJIGlzIGxvbmdlciB0aGFuIHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyB0byBpbnRlcnByZXQuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTUsIFwiNDE1IFVuc3VwcG9ydGVkIE1lZGlhIFR5cGVcIiwgXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHNlcnZpY2UgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgZW50aXR5IG9mIHRoZSByZXF1ZXN0IGlzIGluIGEgZm9ybWF0IG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHJlcXVlc3RlZCByZXNvdXJjZSBmb3IgdGhlIHJlcXVlc3RlZCBtZXRob2QuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTYsIFwiNDE2IFJlcXVlc3RlZCBSYW5nZSBOb3QgU2F0aXNmaWFibGVcIiwgXCJBIHNlcnZlciBTSE9VTEQgcmV0dXJuIGEgcmVzcG9uc2Ugd2l0aCB0aGlzIHN0YXR1cyBjb2RlIGlmIGEgcmVxdWVzdCBpbmNsdWRlZCBhIFJhbmdlIHJlcXVlc3QtaGVhZGVyIGZpZWxkIChzZWN0aW9uIDE0LjM1KSwgYW5kIG5vbmUgb2YgdGhlIHJhbmdlLXNwZWNpZmllciB2YWx1ZXMgaW4gdGhpcyBmaWVsZCBvdmVybGFwIHRoZSBjdXJyZW50IGV4dGVudCBvZiB0aGUgc2VsZWN0ZWQgcmVzb3VyY2UsIGFuZCB0aGUgcmVxdWVzdCBkaWQgbm90IGluY2x1ZGUgYW4gSWYtUmFuZ2UgcmVxdWVzdC1oZWFkZXIgZmllbGQuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTcsIFwiNDE3IEV4cGVjdGF0aW9uIEZhaWxlZFwiLCBcIlRoZSBleHBlY3RhdGlvbiBnaXZlbiBpbiBhbiBFeHBlY3QgcmVxdWVzdC1oZWFkZXIgZmllbGQgKHNlZSBzZWN0aW9uIDE0LjIwKSBjb3VsZCBub3QgYmUgbWV0IGJ5IHRoaXMgc2VydmVyLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTAwLCBcIjUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiwgXCJUaGUgc2VydmVyIGVuY291bnRlcmVkIGFuIHVuZXhwZWN0ZWQgY29uZGl0aW9uIHdoaWNoIHByZXZlbnRlZCBpdCBmcm9tIGZ1bGZpbGxpbmcgdGhlIHJlcXVlc3QuXCIpO1xuICAgICAgICAgICAgY2FzZSA1MDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA1MDEsIFwiNTAxIE5vdCBJbXBsZW1lbnRlZFwiLCBcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgZnVuY3Rpb25hbGl0eSBpbnRlcmZhY2VfZnVuY3Rpb25fdmlld19tb2RlbCB0byBmdWxmaWxsIHRoZSByZXF1ZXN0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTAyLCBcIjUwMiBCYWQgR2F0ZXdheVwiLCBcIlRoZSBzZXJ2ZXIsIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHksIHJlY2VpdmVkIGFuIGludmFsaWQgcmVzcG9uc2UgZnJvbSB0aGUgdXBzdHJlYW0gc2VydmVyIGl0IGFjY2Vzc2VkIGluIGF0dGVtcHRpbmcgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cIik7XG4gICAgICAgICAgICBjYXNlIDUwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDUwMywgXCI1MDMgU2VydmljZSBVbmF2YWlsYWJsZVwiLCBcIlRoZSBzZXJ2ZXIgaXMgY3VycmVudGx5IHVuYWJsZSB0byBoYW5kbGUgdGhlIHJlcXVlc3QgZHVlIHRvIGEgdGVtcG9yYXJ5IG92ZXJsb2FkaW5nIG9yIG1haW50ZW5hbmNlIG9mIHRoZSBzZXJ2ZXIuXCIpO1xuICAgICAgICAgICAgY2FzZSA1MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA1MDQsIFwiNTA0IEdhdGV3YXkgVGltZW91dFwiLCBcIlRoZSBzZXJ2ZXIsIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHksIGRpZCBub3QgcmVjZWl2ZSBhIHRpbWVseSByZXNwb25zZSBmcm9tIHRoZSB1cHN0cmVhbSBzZXJ2ZXIgc3BlY2lmaWVkIGJ5IHRoZSBVUkkuXCIpO1xuICAgICAgICAgICAgY2FzZSA1MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA1MDUsIFwiNTA1IEhUVFAgVmVyc2lvbiBOb3QgU3VwcG9ydGVkXCIsIFwiVGhlIHNlcnZlciBkb2VzIG5vdCBzdXBwb3J0LCBvciByZWZ1c2VzIHRvIHN1cHBvcnQsIHRoZSBIVFRQIHByb3RvY29sIHZlcnNpb24gdGhhdCB3YXMgdXNlZCBpbiB0aGUgcmVxdWVzdCBtZXNzYWdlLlwiKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiTmV0d29ya0V4Y2VwdGlvbihrZXk6IFwiICsgdGhpcy5rZXkgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJzdGF0dXNDb2RlOiBcIiArIHRoaXMuc3RhdHVzQ29kZSArIFwiLCBcIiArXG4gICAgICAgICAgICBcIm5hbWVTdGF0dXNDb2RlIChvcHRpb25hbCk6IFwiICsgdGhpcy5uYW1lU3RhdHVzQ29kZSArIFwiLCBcIiArXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uU3RhdHVzQ29kZSAob3B0aW9uYWwpOiBcIiArIHRoaXMuZGVzY3JpcHRpb25TdGF0dXNDb2RlICsgXCIpXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEN1cnJlbnRNb2RlbFdJbmRleCB7XG4gICAgY29uc3RydWN0b3IoY3VycmVudE1vZGVsLCBpbmRleCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNb2RlbCA9IGN1cnJlbnRNb2RlbDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTW9kZWxXTmFtZWRXTmFtZWRXTmFtZWRJdGVyYXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsSXRlcmF0b3IgPSBuZXcgQXJyYXkoKTtcbiAgICB9XG4gICAgZ2V0U29ydGVkTGlzdE1vZGVsRnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbEl0ZXJhdG9yKG5ld0xpc3RNb2RlbCkge1xuICAgICAgICBpZiAobmV3TGlzdE1vZGVsLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXN0TW9kZWxJdGVyYXRvci5wdXNoKC4uLm5ld0xpc3RNb2RlbCk7XG4gICAgICAgIGNvbnN0IG5ld0xpc3RNb2RlbEZJUlNUID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmxpc3RNb2RlbEl0ZXJhdG9yLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRNb2RlbFdJbmRleCA9IHRoaXMuY3VycmVudE1vZGVsV0luZGV4O1xuICAgICAgICAgICAgdGhpcy5saXN0TW9kZWxJdGVyYXRvci5zcGxpY2UoY3VycmVudE1vZGVsV0luZGV4LmluZGV4LCAxKTtcbiAgICAgICAgICAgIG5ld0xpc3RNb2RlbEZJUlNULnB1c2goY3VycmVudE1vZGVsV0luZGV4LmN1cnJlbnRNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0xpc3RNb2RlbEZJUlNUO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTGlzdE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihsaXN0TW9kZWwpIHtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwgPSBsaXN0TW9kZWw7XG4gICAgfVxuICAgIHNvcnRpbmdGcm9tTW9kZWxXTmFtZWRXTmFtZWRXTmFtZWRJdGVyYXRvclBhcmFtZXRlckxpc3RNb2RlbChtb2RlbFdOYW1lZFdOYW1lZFdOYW1lZEl0ZXJhdG9yKSB7XG4gICAgICAgIGNvbnN0IHNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvciA9IG1vZGVsV05hbWVkV05hbWVkV05hbWVkSXRlcmF0b3IuZ2V0U29ydGVkTGlzdE1vZGVsRnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbEl0ZXJhdG9yKHRoaXMubGlzdE1vZGVsKTtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwubGVuZ3RoID4gMCA/IHRoaXMubGlzdE1vZGVsLnNwbGljZSgwLCB0aGlzLmxpc3RNb2RlbC5sZW5ndGgpIDogbnVsbDtcbiAgICAgICAgc29ydGVkTGlzdE1vZGVsRnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbEl0ZXJhdG9yLmxlbmd0aCA+IDAgPyB0aGlzLmxpc3RNb2RlbC5wdXNoKC4uLnNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvcikgOiBudWxsO1xuICAgIH1cbiAgICBpbnNlcnRGcm9tTmV3TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobmV3TW9kZWwpIHtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwucHVzaChuZXdNb2RlbCk7XG4gICAgfVxuICAgIHVwZGF0ZUZyb21OZXdNb2RlbFBhcmFtZXRlckxpc3RNb2RlbChuZXdNb2RlbCkge1xuICAgICAgICBjb25zdCBmaW5kSW5kZXggPSB0aGlzLmxpc3RNb2RlbC5maW5kSW5kZXgoKGl0ZW1Nb2RlbCkgPT4gaXRlbU1vZGVsLnVuaXF1ZUlkID09IG5ld01vZGVsLnVuaXF1ZUlkKTtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwuc3BsaWNlKGZpbmRJbmRleCwgMSwgbmV3TW9kZWwpO1xuICAgIH1cbiAgICBkZWxldGVGcm9tVW5pcXVlSWRCeU1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsKHVuaXF1ZUlkQnlNb2RlbCkge1xuICAgICAgICBjb25zdCBmaW5kSW5kZXggPSB0aGlzLmxpc3RNb2RlbC5maW5kSW5kZXgoKGl0ZW1Nb2RlbCkgPT4gaXRlbU1vZGVsLnVuaXF1ZUlkID09IHVuaXF1ZUlkQnlNb2RlbCk7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLnNwbGljZShmaW5kSW5kZXgsIDEpO1xuICAgIH1cbiAgICBpbnNlcnRMaXN0RnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbChuZXdMaXN0TW9kZWwpIHtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwucHVzaCguLi5uZXdMaXN0TW9kZWwpO1xuICAgIH1cbiAgICB1cGRhdGVMaXN0RnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbChuZXdMaXN0TW9kZWwpIHtcbiAgICAgICAgZm9yIChjb25zdCBuZXdJdGVtTW9kZWwgb2YgbmV3TGlzdE1vZGVsKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5kSW5kZXggPSB0aGlzLmxpc3RNb2RlbC5maW5kSW5kZXgoKGl0ZW1Nb2RlbCkgPT4gaXRlbU1vZGVsLnVuaXF1ZUlkID09IG5ld0l0ZW1Nb2RlbC51bmlxdWVJZCk7XG4gICAgICAgICAgICB0aGlzLmxpc3RNb2RlbC5zcGxpY2UoZmluZEluZGV4LCAxLCBuZXdJdGVtTW9kZWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlbGV0ZUxpc3RGcm9tTGlzdFVuaXF1ZUlkQnlNb2RlbFBhcmFtZXRlckxpc3RNb2RlbChsaXN0VW5pcXVlSWRCeU1vZGVsKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbVVuaXF1ZUlkQnlNb2RlbCBvZiBsaXN0VW5pcXVlSWRCeU1vZGVsKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5kSW5kZXggPSB0aGlzLmxpc3RNb2RlbC5maW5kSW5kZXgoKGl0ZW1Nb2RlbCkgPT4gaXRlbU1vZGVsLnVuaXF1ZUlkID09IGl0ZW1VbmlxdWVJZEJ5TW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5saXN0TW9kZWwuc3BsaWNlKGZpbmRJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsIHtcbiAgICBjb25zdHJ1Y3Rvcih1bmlxdWVJZCkge1xuICAgICAgICB0aGlzLnVuaXF1ZUlkID0gdW5pcXVlSWQ7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbFJlcG9zaXRvcnkge1xuICAgIGNvbnN0cnVjdG9yKGVudW1SV1RNb2RlKSB7XG4gICAgICAgIHRoaXMuZW51bVJXVE1vZGUgPSBlbnVtUldUTW9kZTtcbiAgICB9XG4gICAgZ2V0TW9kZUNhbGxiYWNrRnJvbVJlbGVhc2VDYWxsYmFja0FuZFRlc3RDYWxsYmFja1BhcmFtZXRlckVudW1SV1RNb2RlKHJlbGVhc2VDYWxsYmFjaywgdGVzdENhbGxiYWNrKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5lbnVtUldUTW9kZSkge1xuICAgICAgICAgICAgY2FzZSBFbnVtUldUTW9kZS5yZWxlYXNlOlxuICAgICAgICAgICAgICAgIHJldHVybiByZWxlYXNlQ2FsbGJhY2s7XG4gICAgICAgICAgICBjYXNlIEVudW1SV1RNb2RlLnRlc3Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3RDYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTmFtZWRTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIERlZmF1bHRTdGF0ZSBleHRlbmRzIEJhc2VOYW1lZFN0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhRm9yTmFtZWQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhRm9yTmFtZWQgPSBkYXRhRm9yTmFtZWQ7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlID0gdHJ1ZTtcbiAgICB9XG4gICAgZ2V0IGdldERhdGFGb3JOYW1lZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YUZvck5hbWVkO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTmFtZWRTdHJlYW1XU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEZWZhdWx0U3RyZWFtV1N0YXRlIGV4dGVuZHMgQmFzZU5hbWVkU3RyZWFtV1N0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhRm9yTmFtZWQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhRm9yTmFtZWQgPSBkYXRhRm9yTmFtZWQ7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRGlzcG9zZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgICBnZXQgZ2V0RGF0YUZvck5hbWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhRm9yTmFtZWQ7XG4gICAgfVxuICAgIGxpc3RlblN0cmVhbURhdGFGb3JOYW1lZEZyb21DYWxsYmFjayhjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIkRlZmF1bHRTdHJlYW1XU3RhdGVcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVFRTGlzdGVuU3RyZWFtRGF0YUZvck5hbWVkRnJvbUNhbGxiYWNrXCIsIFwiQWxyZWFkeSBkaXNwb3NlZCBvZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJEZWZhdWx0U3RyZWFtV1N0YXRlXCIsIEVudW1HdWlsdHkuZGV2ZWxvcGVyLCBcIkRlZmF1bHRTdHJlYW1XU3RhdGVRUUxpc3RlblN0cmVhbURhdGFGb3JOYW1lZEZyb21DYWxsYmFja1wiLCBcIkR1cGxpY2F0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIG5vdGlmeVN0cmVhbURhdGFGb3JOYW1lZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJEZWZhdWx0U3RyZWFtV1N0YXRlXCIsIEVudW1HdWlsdHkuZGV2ZWxvcGVyLCBcIkRlZmF1bHRTdHJlYW1XU3RhdGVRUU5vdGlmeVN0cmVhbURhdGFGb3JOYW1lZFwiLCBcIkFscmVhZHkgZGlzcG9zZWQgb2ZcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2sgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVwiLCBFbnVtR3VpbHR5LmRldmVsb3BlciwgXCJEZWZhdWx0U3RyZWFtV1N0YXRlUVFOb3RpZnlTdHJlYW1EYXRhRm9yTmFtZWRcIiwgXCJTdHJlYW0gaGFzIG5vIGxpc3RlbmVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5kYXRhRm9yTmFtZWQpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUZW1wQ2FjaGVTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50ZW1wQ2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudGVtcENhY2hlV0xpc3RBY3Rpb24gPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHN0YXRpYyBjbGVhclRlbXBDYWNoZVBhcm1ldGVySW5zdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZSA9IHRoaXMuaW5zdGFuY2UudGVtcENhY2hlO1xuICAgICAgICB0ZW1wQ2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgc3RhdGljIGNsb3NlU3RyZWFtRnJvbUtleVRlbXBDYWNoZVBhcm1ldGVySW5zdGFuY2Uoa2V5VGVtcENhY2hlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZVdMaXN0QWN0aW9uID0gdGhpcy5pbnN0YW5jZS50ZW1wQ2FjaGVXTGlzdEFjdGlvbjtcbiAgICAgICAgaWYgKCF0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5oYXMoa2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdldCA9IHRlbXBDYWNoZVdMaXN0QWN0aW9uLmdldChrZXlUZW1wQ2FjaGUpO1xuICAgICAgICBnZXQgPT09IG51bGwgfHwgZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnZXQuc3BsaWNlKDAsIGdldC5sZW5ndGgpO1xuICAgIH1cbiAgICBzdGF0aWMgY2xvc2VTdHJlYW1Gcm9tTGlzdEtleVRlbXBDYWNoZVBhcm1ldGVySW5zdGFuY2UobGlzdEtleVRlbXBDYWNoZSkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMuaW5zdGFuY2UudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGZvciAoY29uc3QgaXRlbUtleVRlbXBDYWNoZSBvZiBsaXN0S2V5VGVtcENhY2hlKSB7XG4gICAgICAgICAgICBpZiAoIXRlbXBDYWNoZVdMaXN0QWN0aW9uLmhhcyhpdGVtS2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGdldCA9IHRlbXBDYWNoZVdMaXN0QWN0aW9uLmdldChpdGVtS2V5VGVtcENhY2hlKTtcbiAgICAgICAgICAgIGdldCA9PT0gbnVsbCB8fCBnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdldC5zcGxpY2UoMCwgZ2V0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGNsb3NlU3RyZWFtc1BhcmFtZXRlckluc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMuaW5zdGFuY2UudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGZvciAoY29uc3QgWywgdmFsdWVdIG9mIHRlbXBDYWNoZVdMaXN0QWN0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZS5zcGxpY2UoMCwgdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRGcm9tS2V5VGVtcENhY2hlUGFyYW1ldGVyVGVtcENhY2hlKGtleVRlbXBDYWNoZSkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGUgPSB0aGlzLnRlbXBDYWNoZTtcbiAgICAgICAgaWYgKCF0ZW1wQ2FjaGUuaGFzKGtleVRlbXBDYWNoZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIlRlbXBDYWNoZVNlcnZpY2VcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIGtleVRlbXBDYWNoZSwgXCJObyBleGlzdHMga2V5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wQ2FjaGUuZ2V0KGtleVRlbXBDYWNoZSk7XG4gICAgfVxuICAgIGxpc3RlblN0cmVhbUZyb21LZXlUZW1wQ2FjaGVBbmRDYWxsYmFja1BhcmFtZXRlck9uZShrZXlUZW1wQ2FjaGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZVdMaXN0QWN0aW9uID0gdGhpcy50ZW1wQ2FjaGVXTGlzdEFjdGlvbjtcbiAgICAgICAgaWYgKCF0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5oYXMoa2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgdGVtcENhY2hlV0xpc3RBY3Rpb24uc2V0KGtleVRlbXBDYWNoZSwgbmV3IEFycmF5KCkpO1xuICAgICAgICAgICAgKF9hID0gdGVtcENhY2hlV0xpc3RBY3Rpb24uZ2V0KGtleVRlbXBDYWNoZSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAoX2IgPSB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5nZXQoa2V5VGVtcENhY2hlKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICB1cGRhdGVGcm9tS2V5VGVtcENhY2hlQW5kVmFsdWVQYXJhbWV0ZXJUZW1wQ2FjaGUoa2V5VGVtcENhY2hlLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnRlbXBDYWNoZS5zZXQoa2V5VGVtcENhY2hlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHVwZGF0ZVdoZXJlU3RyZWFtTm90aWZpY2F0aW9uSXNQb3NzaWJsZUZyb21LZXlUZW1wQ2FjaGVBbmRWYWx1ZVBhcmFtZXRlck9uZShrZXlUZW1wQ2FjaGUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRnJvbUtleVRlbXBDYWNoZUFuZFZhbHVlUGFyYW1ldGVyVGVtcENhY2hlKGtleVRlbXBDYWNoZSwgdmFsdWUpO1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGlmICghdGVtcENhY2hlV0xpc3RBY3Rpb24uaGFzKGtleVRlbXBDYWNoZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnZXQgPSB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5nZXQoa2V5VGVtcENhY2hlKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtR2V0IG9mIGdldCkge1xuICAgICAgICAgICAgaXRlbUdldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVsZXRlRnJvbUtleVRlbXBDYWNoZVBhcmFtZXRlclRlbXBDYWNoZShrZXlUZW1wQ2FjaGUpIHtcbiAgICAgICAgdGhpcy50ZW1wQ2FjaGUuZGVsZXRlKGtleVRlbXBDYWNoZSk7XG4gICAgfVxufVxuVGVtcENhY2hlU2VydmljZS5pbnN0YW5jZSA9IG5ldyBUZW1wQ2FjaGVTZXJ2aWNlKCk7XG5leHBvcnQgdmFyIEVudW1SV1RNb2RlO1xuKGZ1bmN0aW9uIChFbnVtUldUTW9kZSkge1xuICAgIEVudW1SV1RNb2RlW0VudW1SV1RNb2RlW1wicmVsZWFzZVwiXSA9IDBdID0gXCJyZWxlYXNlXCI7XG4gICAgRW51bVJXVE1vZGVbRW51bVJXVE1vZGVbXCJ0ZXN0XCJdID0gMV0gPSBcInRlc3RcIjtcbn0pKEVudW1SV1RNb2RlIHx8IChFbnVtUldUTW9kZSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgRXhjZXB0aW9uQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoZXhjZXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9uID0gZXhjZXB0aW9uO1xuICAgIH1cbiAgICBzdGF0aWMgc3VjY2VzcygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFeGNlcHRpb25Db250cm9sbGVyKG51bGwpO1xuICAgIH1cbiAgICBzdGF0aWMgZXhjZXB0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IEV4Y2VwdGlvbkNvbnRyb2xsZXIoZXhjZXB0aW9uKTtcbiAgICB9XG4gICAgZ2V0IGdldEtleVBhcmFtZXRlckV4Y2VwdGlvbigpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMuZXhjZXB0aW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eua2V5KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiO1xuICAgIH1cbiAgICBpc1doZXJlTm90RXF1YWxzTnVsbFBhcmFtZXRlckV4Y2VwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhjZXB0aW9uICE9IG51bGw7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5leGNlcHRpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiRXhjZXB0aW9uQ29udHJvbGxlcihleGNlcHRpb246IG51bGwpXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiRXhjZXB0aW9uQ29udHJvbGxlcihleGNlcHRpb246IFwiICsgdGhpcy5leGNlcHRpb24gKyBcIilcIjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmVzdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXIsIGV4Y2VwdGlvbkNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXIgPSBwYXJhbWV0ZXI7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9uQ29udHJvbGxlciA9IGV4Y2VwdGlvbkNvbnRyb2xsZXI7XG4gICAgfVxuICAgIHN0YXRpYyBzdWNjZXNzKHBhcmFtZXRlcikge1xuICAgICAgICByZXR1cm4gbmV3IFJlc3VsdChwYXJhbWV0ZXIsIEV4Y2VwdGlvbkNvbnRyb2xsZXIuc3VjY2VzcygpKTtcbiAgICB9XG4gICAgc3RhdGljIGV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXN1bHQobnVsbCwgRXhjZXB0aW9uQ29udHJvbGxlci5leGNlcHRpb24oZXhjZXB0aW9uKSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnUHJpbnQodGV4dCkge1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnUHJpbnRFeGNlcHRpb24odGV4dCkge1xuICAgIGRlYnVnUHJpbnQoXCJcXHgxQlszMW1cIiArIHRleHQgKyBcIlxceDFiWzBtXCIpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBMb2NhbEV4Y2VwdGlvbiwgRW51bUd1aWx0eSwgQmFzZU1vZGVsLCBCYXNlTGlzdE1vZGVsLCBSZXN1bHQsIE5ldHdvcmtFeGNlcHRpb24sIEJhc2VEYXRhRm9yTmFtZWQsIERlZmF1bHRTdHJlYW1XU3RhdGUsIGRlYnVnUHJpbnQsIEV4Y2VwdGlvbkNvbnRyb2xsZXIsIEJhc2VOYW1lZFN0cmVhbVdTdGF0ZSwgQmFzZU1vZGVsUmVwb3NpdG9yeSwgRW51bVJXVE1vZGUgfSBmcm9tIFwibGlicmFyeV9hcmNoaXRlY3R1cmVfbXZ2bV9tb2RpZnlfamF2YXNjcmlwdFwiO1xyXG5cclxuY2xhc3MgUmVhZHlEYXRhVXRpbGl0eSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHN1Y2Nlc3MgPSBcInN1Y2Nlc3NcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdW5rbm93biA9IFwidW5rbm93blwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpUEFQSSA9IFwiaHR0cHM6Ly9qc29uaXAuY29tL1wiO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEtleXNIdHRwU2VydmljZVV0aWxpdHkge1xyXG4gICAgLyogSVBBZGRyZXNzICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGlQQWRkcmVzc1FRSXAgPSBcImlwXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSVBBZGRyZXNzIGV4dGVuZHMgQmFzZU1vZGVsIHtcclxuICAgIHB1YmxpYyByZWFkb25seSBpcDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihpcDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoXCJcIiArIGlwICsgXCJcIik7XHJcbiAgICAgICAgdGhpcy5pcCA9IGlwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgZ2V0Q2xvbmUoKTogSVBBZGRyZXNzIHtcclxuICAgICAgICByZXR1cm4gbmV3IElQQWRkcmVzcyh0aGlzLmlwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJJUEFkZHJlc3MoaXA6IFwiICsgdGhpcy5pcCArIFwiKVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBMaXN0SVBBZGRyZXNzPFQgZXh0ZW5kcyBJUEFkZHJlc3M+IGV4dGVuZHMgQmFzZUxpc3RNb2RlbDxUPiB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobGlzdE1vZGVsOiBBcnJheTxUPikge1xyXG4gICAgICAgIHN1cGVyKGxpc3RNb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldCBnZXRDbG9uZSgpOiBMaXN0SVBBZGRyZXNzPFQ+IHtcclxuICAgICAgICBjb25zdCBuZXdMaXN0TW9kZWwgPSBuZXcgQXJyYXk8VD4oKTtcclxuICAgICAgICBmb3IoY29uc3QgaXRlbU1vZGVsIG9mIHRoaXMubGlzdE1vZGVsKSB7XHJcbiAgICAgICAgICAgIG5ld0xpc3RNb2RlbC5wdXNoKGl0ZW1Nb2RlbC5nZXRDbG9uZSBhcyBUKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMaXN0SVBBZGRyZXNzKG5ld0xpc3RNb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHN0ckxpc3RNb2RlbCA9IFwiXFxuXCI7XHJcbiAgICAgICAgZm9yKGNvbnN0IGl0ZW1Nb2RlbCBvZiB0aGlzLmxpc3RNb2RlbCkge1xyXG4gICAgICAgICAgICBzdHJMaXN0TW9kZWwgKz0gaXRlbU1vZGVsLnRvU3RyaW5nKCkgKyBcIixcXG5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiTGlzdElQQWRkcmVzcyhsaXN0TW9kZWw6IFtcIiArIHN0ckxpc3RNb2RlbCArIFwiXSlcIjtcclxuICAgIH1cclxufVxyXG5cclxuLy8vIFRoaXMgY2xhc3MgbmVlZHMgdG8gYmUgY2FsbGVkIHdoZXJlIHRoZXJlIGFyZSBuZXR3b3JrIHJlcXVlc3RzIChpbiB0aGUgZGF0YSBzb3VyY2UpLCBcclxuLy8vIHNpbmNlIHdpdGhvdXQgdGhpcyBjbGFzcyB0aGUgZGV2ZWxvcGVyIHdpbGwgbm90IGtub3cgaW4gd2hpY2ggY2xhc3MgdGhlIG5ldHdvcmsgcmVxdWVzdHMgYXJlXHJcbmNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2UgPSBuZXcgSHR0cFNlcnZpY2UoKTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBJUEFkZHJlc3NSZXBvc2l0b3J5PFQgZXh0ZW5kcyBJUEFkZHJlc3MsWSBleHRlbmRzIExpc3RJUEFkZHJlc3M8VD4+IGV4dGVuZHMgQmFzZU1vZGVsUmVwb3NpdG9yeTxULFk+IHtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBodHRwU2VydmljZSA9IEh0dHBTZXJ2aWNlLmluc3RhbmNlO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbnVtUldUTW9kZTogRW51bVJXVE1vZGUpIHtcclxuICAgICAgICBzdXBlcihlbnVtUldUTW9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldEJhc2VNb2RlbEZyb21NYXBBbmRMaXN0S2V5cyhtYXA6IE1hcDxzdHJpbmcsIGFueT4sIGxpc3RLZXlzOiBzdHJpbmdbXSk6IFQge1xyXG4gICAgICAgIGlmKGxpc3RLZXlzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSVBBZGRyZXNzKFwiXCIpIGFzIFQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSVBBZGRyZXNzKG1hcC5oYXMobGlzdEtleXNbMF0pID8gbWFwLmdldChsaXN0S2V5c1swXSkgOiBcIlwiKSBhcyBUO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBnZXRCYXNlTGlzdE1vZGVsRnJvbUxpc3RNb2RlbChsaXN0TW9kZWw6IFRbXSk6IFkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTGlzdElQQWRkcmVzcyhsaXN0TW9kZWwpIGFzIFk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldElQQWRkcmVzc1BhcmFtZXRlckh0dHBTZXJ2aWNlKCk6IFByb21pc2U8UmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TW9kZUNhbGxiYWNrRnJvbVJlbGVhc2VDYWxsYmFja0FuZFRlc3RDYWxsYmFja1BhcmFtZXRlckVudW1SV1RNb2RlKFxyXG4gICAgICAgICAgICB0aGlzLmdldElQQWRkcmVzc1BhcmFtZXRlckh0dHBTZXJ2aWNlV1JlbGVhc2VDYWxsYmFjayxcclxuICAgICAgICAgICAgdGhpcy5nZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZVdUZXN0Q2FsbGJhY2spKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgZ2V0SVBBZGRyZXNzUGFyYW1ldGVySHR0cFNlcnZpY2VXUmVsZWFzZUNhbGxiYWNrID0gYXN5bmMgKCk6IFByb21pc2U8UmVzdWx0PiA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChSZWFkeURhdGFVdGlsaXR5LmlQQVBJLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IE5ldHdvcmtFeGNlcHRpb24uZnJvbUtleUFuZFN0YXR1c0NvZGUoXCJJUEFkZHJlc3NSZXBvc2l0b3J5XCIscmVzcG9uc2Uuc3RhdHVzLnRvU3RyaW5nKCkscmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwPHN0cmluZyxhbnk+KE9iamVjdC5lbnRyaWVzKGpzb24pKTtcclxuICAgICAgICAgICAgcmV0dXJuIFJlc3VsdC5zdWNjZXNzKHRoaXMuZ2V0QmFzZU1vZGVsRnJvbU1hcEFuZExpc3RLZXlzKG1hcCxbS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eS5pUEFkZHJlc3NRUUlwXSkpO1xyXG4gICAgICAgIH0gY2F0Y2goZXhjZXB0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmKGV4Y2VwdGlvbiBpbnN0YW5jZW9mIE5ldHdvcmtFeGNlcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBSZXN1bHQuZXhjZXB0aW9uKGV4Y2VwdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFJlc3VsdC5leGNlcHRpb24obmV3IExvY2FsRXhjZXB0aW9uKFwiSVBBZGRyZXNzUmVwb3NpdG9yeVwiLEVudW1HdWlsdHkuZGV2aWNlLFJlYWR5RGF0YVV0aWxpdHkudW5rbm93bixleGNlcHRpb24udG9TdHJpbmcoKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZVdUZXN0Q2FsbGJhY2sgPSBhc3luYyAoKTogUHJvbWlzZTxSZXN1bHQ+ID0+IHtcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwxMDAwKSk7XHJcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5zdWNjZXNzKHRoaXMuZ2V0QmFzZU1vZGVsRnJvbU1hcEFuZExpc3RLZXlzKFxyXG4gICAgICAgICAgICBuZXcgTWFwPHN0cmluZyxhbnk+KFtcclxuICAgICAgICAgICAgICAgIFtLZXlzSHR0cFNlcnZpY2VVdGlsaXR5LmlQQWRkcmVzc1FRSXAsXCIxMjEuMTIxLjEyLjEyXCJdXHJcbiAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICBbS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eS5pUEFkZHJlc3NRUUlwXSkpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZW51bSBFbnVtRGF0YUZvck1haW5WTSB7XHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBleGNlcHRpb24sXHJcbiAgICBzdWNjZXNzXHJcbn1cclxuXHJcbmNsYXNzIERhdGFGb3JNYWluVk0gZXh0ZW5kcyBCYXNlRGF0YUZvck5hbWVkPEVudW1EYXRhRm9yTWFpblZNPiB7XHJcbiAgICBwdWJsaWMgaVBBZGRyZXNzOiBJUEFkZHJlc3M7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGlzTG9hZGluZzogYm9vbGVhbixpUEFkZHJlc3M6IElQQWRkcmVzcykge1xyXG4gICAgICAgIHN1cGVyKGlzTG9hZGluZyk7XHJcbiAgICAgICAgdGhpcy5pUEFkZHJlc3MgPSBpUEFkZHJlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldCBnZXRFbnVtRGF0YUZvck5hbWVkKCk6IEVudW1EYXRhRm9yTWFpblZNIHtcclxuICAgICAgICBpZih0aGlzLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gRW51bURhdGFGb3JNYWluVk0uaXNMb2FkaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmV4Y2VwdGlvbkNvbnRyb2xsZXIuaXNXaGVyZU5vdEVxdWFsc051bGxQYXJhbWV0ZXJFeGNlcHRpb24oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW51bURhdGFGb3JNYWluVk0uZXhjZXB0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRW51bURhdGFGb3JNYWluVk0uc3VjY2VzcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJEYXRhRm9yTWFpblZNKGlzTG9hZGluZzogXCIgKyB0aGlzLmlzTG9hZGluZyArIFwiLCBcIiBcclxuICAgICAgICAgICAgKyBcImV4Y2VwdGlvbkNvbnRyb2xsZXI6IFwiICsgdGhpcy5leGNlcHRpb25Db250cm9sbGVyICsgXCIsIFwiIFxyXG4gICAgICAgICAgICArIFwiaVBBZGRyZXNzOiBcIiArIHRoaXMuaVBBZGRyZXNzICsgXCIpXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1haW5WTSB7XHJcbiAgICAvLyBNb2RlbFJlcG9zaXRvcnlcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaVBBZGRyZXNzUmVwb3NpdG9yeSA9IG5ldyBJUEFkZHJlc3NSZXBvc2l0b3J5KEVudW1SV1RNb2RlLnJlbGVhc2UpO1xyXG4gICAgXHJcbiAgICAvLyBOYW1lZFV0aWxpdHlcclxuICAgIFxyXG4gICAgLy8gTmFtZWRTdHJlYW1XU3RhdGVcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmFtZWRTdHJlYW1XU3RhdGU6IEJhc2VOYW1lZFN0cmVhbVdTdGF0ZTxEYXRhRm9yTWFpblZNPjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lZFN0cmVhbVdTdGF0ZSA9IG5ldyBEZWZhdWx0U3RyZWFtV1N0YXRlPERhdGFGb3JNYWluVk0+KG5ldyBEYXRhRm9yTWFpblZNKHRydWUsbmV3IElQQWRkcmVzcyhcIlwiKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMubmFtZWRTdHJlYW1XU3RhdGUubGlzdGVuU3RyZWFtRGF0YUZvck5hbWVkRnJvbUNhbGxiYWNrKChfZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZmlyc3RSZXF1ZXN0ID0gYXdhaXQgdGhpcy5maXJzdFJlcXVlc3QoKTtcclxuICAgICAgICBkZWJ1Z1ByaW50KFwiTWFpblZNOiBcIiArIGZpcnN0UmVxdWVzdCk7XHJcbiAgICAgICAgdGhpcy5uYW1lZFN0cmVhbVdTdGF0ZS5ub3RpZnlTdHJlYW1EYXRhRm9yTmFtZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5hbWVkU3RyZWFtV1N0YXRlLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRhdGFGb3JOYW1lZCA9IHRoaXMubmFtZWRTdHJlYW1XU3RhdGUuZ2V0RGF0YUZvck5hbWVkO1xyXG4gICAgICAgIHN3aXRjaChkYXRhRm9yTmFtZWQuZ2V0RW51bURhdGFGb3JOYW1lZCkge1xyXG4gICAgICAgICAgICBjYXNlIEVudW1EYXRhRm9yTWFpblZNLmlzTG9hZGluZzpcclxuICAgICAgICAgICAgICAgIGRlYnVnUHJpbnQoXCJCdWlsZDogSXNMb2FkaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRW51bURhdGFGb3JNYWluVk0uZXhjZXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgZGVidWdQcmludChcIkJ1aWxkOiBFeGNlcHRpb24oXCIgKyBkYXRhRm9yTmFtZWQuZXhjZXB0aW9uQ29udHJvbGxlci5nZXRLZXlQYXJhbWV0ZXJFeGNlcHRpb24gKyBcIilcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFbnVtRGF0YUZvck1haW5WTS5zdWNjZXNzOlxyXG4gICAgICAgICAgICAgICAgZGVidWdQcmludChcIkJ1aWxkOiBTdWNjZXNzKFwiICsgZGF0YUZvck5hbWVkLmlQQWRkcmVzcyArIFwiKVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZmlyc3RSZXF1ZXN0KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgZ2V0SVBBZGRyZXNzUGFyYW1ldGVySHR0cFNlcnZpY2UgPSBhd2FpdCB0aGlzLmlQQWRkcmVzc1JlcG9zaXRvcnkuZ2V0SVBBZGRyZXNzUGFyYW1ldGVySHR0cFNlcnZpY2UoKTtcclxuICAgICAgICBpZihnZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZS5leGNlcHRpb25Db250cm9sbGVyLmlzV2hlcmVOb3RFcXVhbHNOdWxsUGFyYW1ldGVyRXhjZXB0aW9uKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3RRUUZpcnN0UmVxdWVzdFFRR2V0SVBBZGRyZXNzUGFyYW1ldGVySHR0cFNlcnZpY2UoZ2V0SVBBZGRyZXNzUGFyYW1ldGVySHR0cFNlcnZpY2UuZXhjZXB0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmFtZWRTdHJlYW1XU3RhdGUuZ2V0RGF0YUZvck5hbWVkLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubmFtZWRTdHJlYW1XU3RhdGUuZ2V0RGF0YUZvck5hbWVkLmlQQWRkcmVzcyA9IGdldElQQWRkcmVzc1BhcmFtZXRlckh0dHBTZXJ2aWNlLnBhcmFtZXRlci5nZXRDbG9uZTtcclxuICAgICAgICByZXR1cm4gUmVhZHlEYXRhVXRpbGl0eS5zdWNjZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZmlyc3RRUUZpcnN0UmVxdWVzdFFRR2V0SVBBZGRyZXNzUGFyYW1ldGVySHR0cFNlcnZpY2UoZXhjZXB0aW9uQ29udHJvbGxlcjogRXhjZXB0aW9uQ29udHJvbGxlcik6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgdGhpcy5uYW1lZFN0cmVhbVdTdGF0ZS5nZXREYXRhRm9yTmFtZWQuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uYW1lZFN0cmVhbVdTdGF0ZS5nZXREYXRhRm9yTmFtZWQuZXhjZXB0aW9uQ29udHJvbGxlciA9IGV4Y2VwdGlvbkNvbnRyb2xsZXI7XHJcbiAgICAgICAgcmV0dXJuIGV4Y2VwdGlvbkNvbnRyb2xsZXIuZ2V0S2V5UGFyYW1ldGVyRXhjZXB0aW9uO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xyXG4gICAgY29uc3QgbWFpblZNID0gbmV3IE1haW5WTSgpO1xyXG4gICAgYXdhaXQgbWFpblZNLmluaXQoKTtcclxuICAgIG1haW5WTS5kaXNwb3NlKCk7XHJcbn1cclxubWFpbigpO1xyXG4vLyBFWFBFQ1RFRCBPVVRQVVQ6XHJcbi8vXHJcbi8vIE1haW5WTTogc3VjY2Vzc1xyXG4vLyBCdWlsZDogU3VjY2VzcyhJUEFkZHJlc3MoaXA6ICR7eW91cl9pcH0pKVxyXG5cclxuLy8vIE9SXHJcblxyXG4vLyBFWFBFQ1RFRCBPVVRQVVQ6XHJcbi8vXHJcbi8vID09PXN0YXJ0X3RvX3RyYWNlX2V4Y2VwdGlvbj09PVxyXG4vL1xyXG4vLyBXaGVyZUhhcHBlbmVkRXhjZXB0aW9uKENsYXNzKSAtLT4gJHtXaGVyZUhhcHBlbmVkRXhjZXB0aW9uKENsYXNzKX1cclxuLy8gTmFtZUV4Y2VwdGlvbihDbGFzcykgLS0+ICR7TmFtZUV4Y2VwdGlvbihDbGFzcyl9XHJcbi8vIHRvU3RyaW5nKCkgLS0+ICR7dG9TdHJpbmcoKX1cclxuLy9cclxuLy8gPT09ZW5kX3RvX3RyYWNlX2V4Y2VwdGlvbj09PVxyXG4vL1xyXG4vLyBNYWluVk06ICR7Z2V0S2V5UGFyYW1ldGVyRXhjZXB0aW9ufVxyXG4vLyBCdWlsZDogRXhjZXB0aW9uKCR7Z2V0S2V5UGFyYW1ldGVyRXhjZXB0aW9ufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=