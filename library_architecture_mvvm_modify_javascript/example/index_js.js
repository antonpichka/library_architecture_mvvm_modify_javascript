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
/* harmony export */   BaseModelWNamedWNamedWNamedIterator: () => (/* binding */ BaseModelWNamedWNamedWNamedIterator),
/* harmony export */   BaseNamedState: () => (/* binding */ BaseNamedState),
/* harmony export */   BaseNamedStreamWState: () => (/* binding */ BaseNamedStreamWState),
/* harmony export */   DefaultState: () => (/* binding */ DefaultState),
/* harmony export */   DefaultStreamWState: () => (/* binding */ DefaultStreamWState),
/* harmony export */   EnumGuilty: () => (/* binding */ EnumGuilty),
/* harmony export */   EnumRWTMode: () => (/* binding */ EnumRWTMode),
/* harmony export */   ExceptionController: () => (/* binding */ ExceptionController),
/* harmony export */   LocalException: () => (/* binding */ LocalException),
/* harmony export */   NamedCallback: () => (/* binding */ NamedCallback),
/* harmony export */   NetworkException: () => (/* binding */ NetworkException),
/* harmony export */   RWTMode: () => (/* binding */ RWTMode),
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
TempCacheService.instance = new TempCacheService();
var EnumRWTMode;
(function (EnumRWTMode) {
    EnumRWTMode[EnumRWTMode["release"] = 0] = "release";
    EnumRWTMode[EnumRWTMode["test"] = 1] = "test";
})(EnumRWTMode || (EnumRWTMode = {}));
class NamedCallback {
    constructor(name, callback) {
        this.name = name;
        this.callback = callback;
    }
}
class RWTMode {
    constructor(enumRWTMode, listNamedCallbackWRelease, listNamedCallbackWTest) {
        this.enumRWTMode = enumRWTMode;
        this.mapStringWNamedCallbackWRelease = RWTMode.getMapStringWNamedCallbackFromListNamedCallback(listNamedCallbackWRelease);
        this.mapStringWNamedCallbackWTest = RWTMode.getMapStringWNamedCallbackFromListNamedCallback(listNamedCallbackWTest);
    }
    static getMapStringWNamedCallbackFromListNamedCallback(listNamedCallback) {
        const mapStringWNamedCallback = new Map();
        for (const itemNamedCallback of listNamedCallback) {
            mapStringWNamedCallback.set(itemNamedCallback.name, itemNamedCallback);
        }
        return mapStringWNamedCallback;
    }
    getNamedCallbackFromName(name) {
        const mapStringWNamedCallbackWhereSelectModParametersThree = this.getMapStringWNamedCallbackWhereSelectModParametersThree;
        if (!mapStringWNamedCallbackWhereSelectModParametersThree.has(name)) {
            throw new LocalException("RWTMode", EnumGuilty.developer, "RWTModeQQGetNamedCallbackFromName", "no exists key: " + name);
        }
        return mapStringWNamedCallbackWhereSelectModParametersThree.get(name);
    }
    get getMapStringWNamedCallbackWhereSelectModParametersThree() {
        if (this.enumRWTMode == EnumRWTMode.release) {
            return this.mapStringWNamedCallbackWRelease;
        }
        return this.mapStringWNamedCallbackWTest;
    }
}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! library_architecture_mvvm_modify_javascript */ "../dist/esm/index.js");


class KeysHttpServiceUtility {
    /* IPAddress */
    static #iPAddressQQIp = "ip";

    constructor() {
        if (new.target === KeysHttpServiceUtility) {
            throw new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.LocalException("KeysHttpServiceUtility",library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.EnumGuilty.developer,"KeysHttpServiceUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get iPAddressQQIp() {
        return this.#iPAddressQQIp;
    }
}

class KeysExceptionUtility {
    /* UNKNOWN */
    static #uNKNOWN = "uNKNOWN";

    constructor() {
        if (new.target === KeysExceptionUtility) {
            throw new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.LocalException("KeysExceptionUtility",library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.EnumGuilty.developer,"KeysExceptionUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get uNKNOWN() {
        return this.#uNKNOWN;
    }
}

class KeysSuccessUtility {
    /* SUCCESS */
    static #sUCCESS = "sUCCESS";

    constructor() {
        if (new.target === KeysSuccessUtility) {
            throw new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.LocalException("KeysSuccessUtility",library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.EnumGuilty.developer,"KeysSuccessUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get sUCCESS() {
        return this.#sUCCESS;
    }
}

class IPAddress extends library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.BaseModel {
    #ip;

    constructor(ip) {
        super("" + ip + "");
        this.#ip = ip;
    }

    get getClone() {
        return new IPAddress(this.ip);
    }

    toString() {
        return "IPAddress(ip: " + this.ip + ")";
    }

    get ip() {
        return this.#ip;
    }
}

class ListIPAddress extends library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.BaseListModel {
    constructor(listModel) {
        super(listModel);
    }

    get getClone() {
        const newListModel = new Array();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone);
        }
        return new ListIPAddress(newListModel);
    }

    toString() {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListIPAddress(listModel: [" + strListModel + "])";
    }
}

/// This class needs to be called where there are network requests (in the data source), 
/// since without this class the developer will not know in which class the network requests are
class HttpService {
    static instance = new HttpService();

    constructor() {
        if(HttpService.instance != null) {
            return HttpService.instance;
        }
    }
}

class GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService {
    #httpService = HttpService.instance;

    async getIPAddressWhereJsonipAPIParameterHttpService() {
        try {
            const response = await fetch("https://jsonip.com/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.status != 200) {
                throw library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.NetworkException.fromKeyAndStatusCode("GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService",response.status.toString(),response.status);
            }
            const json = await response.json();
            const map = new Map(Object.entries(json));
            const iPAddress = new IPAddress(map.get(KeysHttpServiceUtility.iPAddressQQIp));
            return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.success(iPAddress);
        } catch(exception) {
            if(exception instanceof library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.NetworkException) {
                return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.exception(exception);
            }
            return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.exception(new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.LocalException("GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService",library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.EnumGuilty.device,KeysExceptionUtility.uNKNOWN,exception.toString()));
        }
    }

    get _httpService() {
        return this.#httpService;
    }
}

const EnumDataForMainVM = {
    isLoading : "isLoading",
    exception : "exception",
    success : "success",
};

class DataForMainVM extends library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.BaseDataForNamed {
    iPAddress;

    constructor(isLoading,iPAddress) {
        super(isLoading);
        this.iPAddress = iPAddress;
    }

    get getEnumDataForNamed() {
        if(this.isLoading) {
            return EnumDataForMainVM.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForMainVM.exception;
        }
        return EnumDataForMainVM.success;
    }
}

class MainVM {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    #getEEIPAddressEEWhereJsonipAPIEEParameterHttpService = new GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService();
    // NamedUtility
    
    // Main objects
    #namedStreamWState;
    #rwtMode;

    constructor() {
        this.#namedStreamWState = new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.DefaultStreamWState(new DataForMainVM(true,new IPAddress("")));
        this.#rwtMode = new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.RWTMode(
            library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.EnumRWTMode.release,
            [
                new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.NamedCallback("init",async () => {
                    const getIPAddressWhereJsonipAPIParameterHttpService = await this.#getEEIPAddressEEWhereJsonipAPIEEParameterHttpService.getIPAddressWhereJsonipAPIParameterHttpService();
                    if(getIPAddressWhereJsonipAPIParameterHttpService.exceptionController.isWhereNotEqualsNullParameterException()) {
                        return this.#firstQQInitQQGetIPAddressWhereJsonipAPIParameterHttpService(getIPAddressWhereJsonipAPIParameterHttpService.exceptionController);
                    }
                    this.#namedStreamWState.getDataForNamed.isLoading = false;
                    this.#namedStreamWState.getDataForNamed.iPAddress = getIPAddressWhereJsonipAPIParameterHttpService.parameter.getClone;
                    return KeysSuccessUtility.sUCCESS;
                }),
            ],
            [
                new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.NamedCallback("init",async () => {
                    // Simulation get "IPAddress"
                    const iPAddress = new IPAddress("121.121.12.12");
                    await new Promise(resolve => setTimeout(resolve,1000));
                    this.#namedStreamWState.getDataForNamed.isLoading = false;
                    this.#namedStreamWState.getDataForNamed.iPAddress = iPAddress.getClone;
                    return KeysSuccessUtility.sUCCESS;
                }),
            ]
        );
        this.#init();
    }

    async #init() {
        this.#namedStreamWState.listenStreamDataForNamedFromCallback((data) => {
            this.#build();
        });
        const result = await this.#rwtMode.getNamedCallbackFromName("init").callback();
        (0,library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.debugPrint)("MainVM: " + result);
        this.#namedStreamWState.notifyStreamDataForNamed();
    }

    #build() {
        const dataForNamed = this.#namedStreamWState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
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

    async #firstQQInitQQGetIPAddressWhereJsonipAPIParameterHttpService(exceptionController) {
        this.#namedStreamWState.getDataForNamed.isLoading = false;
        this.#namedStreamWState.getDataForNamed.exceptionController = exceptionController;
        return exceptionController.getKeyParameterException;
    }
}
new MainVM();
// EXPECTED OUTPUT:
//
// MainVM: sUCCESS
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDO0FBQzVCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7OztVQzVZQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFPO0FBQ3JPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVGQUFjLDBCQUEwQixtRkFBVTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVGQUFjLHdCQUF3QixtRkFBVTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVGQUFjLHNCQUFzQixtRkFBVTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtGQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0ZBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxzQkFBc0IseUZBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtFQUFNO0FBQ3pCLFVBQVU7QUFDVixvQ0FBb0MseUZBQWdCO0FBQ3BELHVCQUF1QiwrRUFBTTtBQUM3QjtBQUNBLG1CQUFtQiwrRUFBTSxlQUFlLHVGQUFjLHdEQUF3RCxtRkFBVTtBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlGQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw0RkFBbUI7QUFDekQsNEJBQTRCLGdGQUFPO0FBQ25DLFlBQVksb0ZBQVc7QUFDdkI7QUFDQSxvQkFBb0Isc0ZBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG9CQUFvQixzRkFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVEsdUZBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUZBQVU7QUFDMUI7QUFDQTtBQUNBLGdCQUFnQix1RkFBVTtBQUMxQjtBQUNBO0FBQ0EsZ0JBQWdCLHVGQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsOEJBQThCO0FBQzlCLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2Isc0JBQXNCLHlCQUF5QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS8uLi9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGFtcGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhhbXBsZS8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCYXNlRGF0YUZvck5hbWVkIHtcbiAgICBjb25zdHJ1Y3Rvcihpc0xvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBpc0xvYWRpbmc7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9uQ29udHJvbGxlciA9IEV4Y2VwdGlvbkNvbnRyb2xsZXIuc3VjY2VzcygpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0aGlzQ2xhc3MsIGV4Y2VwdGlvbkNsYXNzLCBrZXkpIHtcbiAgICAgICAgdGhpcy50aGlzQ2xhc3MgPSB0aGlzQ2xhc3M7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9uQ2xhc3MgPSBleGNlcHRpb25DbGFzcztcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgfVxuICAgIC8vLyBDYWxsIHRoaXMgbWV0aG9kIGluIHRoZSBkZXNjZW5kYW50IGNvbnN0cnVjdG9yIGFzIHRoZSBsYXN0IGxpbmVcbiAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uV2hlcmVUb1N0cmluZ1BhcmFtZXRlcnNUaGlzQ2xhc3NBbmRFeGNlcHRpb25DbGFzcygpIHtcbiAgICAgICAgZGVidWdQcmludEV4Y2VwdGlvbihcIlxcbj09PXN0YXJ0X3RvX3RyYWNlX2V4Y2VwdGlvbj09PVxcblwiKTtcbiAgICAgICAgZGVidWdQcmludEV4Y2VwdGlvbihcIldoZXJlSGFwcGVuZWRFeGNlcHRpb24oQ2xhc3MpIC0tPiBcIiArIHRoaXMudGhpc0NsYXNzICsgXCJcXG5cIiArXG4gICAgICAgICAgICBcIk5hbWVFeGNlcHRpb24oQ2xhc3MpIC0tPiBcIiArIHRoaXMuZXhjZXB0aW9uQ2xhc3MgKyBcIlxcblwiICtcbiAgICAgICAgICAgIFwidG9TdHJpbmcoKSAtLT4gXCIgKyB0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uKFwiXFxuPT09ZW5kX3RvX3RyYWNlX2V4Y2VwdGlvbj09PVxcblwiKTtcbiAgICB9XG59XG5leHBvcnQgdmFyIEVudW1HdWlsdHk7XG4oZnVuY3Rpb24gKEVudW1HdWlsdHkpIHtcbiAgICBFbnVtR3VpbHR5W0VudW1HdWlsdHlbXCJkZXZlbG9wZXJcIl0gPSAwXSA9IFwiZGV2ZWxvcGVyXCI7XG4gICAgRW51bUd1aWx0eVtFbnVtR3VpbHR5W1wiZGV2aWNlXCJdID0gMV0gPSBcImRldmljZVwiO1xuICAgIEVudW1HdWlsdHlbRW51bUd1aWx0eVtcInVzZXJcIl0gPSAyXSA9IFwidXNlclwiO1xufSkoRW51bUd1aWx0eSB8fCAoRW51bUd1aWx0eSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgTG9jYWxFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0aGlzQ2xhc3MsIHZhbHVlV0VudW1HdWlsdHksIGtleSwgbWVzc2FnZSA9IFwiXCIpIHtcbiAgICAgICAgc3VwZXIodGhpc0NsYXNzLCBcIkxvY2FsRXhjZXB0aW9uXCIsIGtleSk7XG4gICAgICAgIHRoaXMudmFsdWVXRW51bUd1aWx0eSA9IHZhbHVlV0VudW1HdWlsdHk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuZGVidWdQcmludEV4Y2VwdGlvbldoZXJlVG9TdHJpbmdQYXJhbWV0ZXJzVGhpc0NsYXNzQW5kRXhjZXB0aW9uQ2xhc3MoKTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIkxvY2FsRXhjZXB0aW9uKHZhbHVlV0VudW1HdWlsdHk6IFwiICsgdGhpcy52YWx1ZVdFbnVtR3VpbHR5ICsgXCIsIFwiICtcbiAgICAgICAgICAgIFwia2V5OiBcIiArIHRoaXMua2V5ICsgXCIsIFwiICtcbiAgICAgICAgICAgIFwibWVzc2FnZSAob3B0aW9uYWwpOiBcIiArIHRoaXMubWVzc2FnZSArIFwiKVwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOZXR3b3JrRXhjZXB0aW9uIGV4dGVuZHMgQmFzZUV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3IodGhpc0NsYXNzLCBrZXksIHN0YXR1c0NvZGUsIG5hbWVTdGF0dXNDb2RlID0gXCJcIiwgZGVzY3JpcHRpb25TdGF0dXNDb2RlID0gXCJcIikge1xuICAgICAgICBzdXBlcih0aGlzQ2xhc3MsIFwiTmV0d29ya0V4Y2VwdGlvblwiLCBrZXkpO1xuICAgICAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICAgICAgICB0aGlzLm5hbWVTdGF0dXNDb2RlID0gbmFtZVN0YXR1c0NvZGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25TdGF0dXNDb2RlID0gZGVzY3JpcHRpb25TdGF0dXNDb2RlO1xuICAgICAgICB0aGlzLmRlYnVnUHJpbnRFeGNlcHRpb25XaGVyZVRvU3RyaW5nUGFyYW1ldGVyc1RoaXNDbGFzc0FuZEV4Y2VwdGlvbkNsYXNzKCk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tS2V5QW5kU3RhdHVzQ29kZSh0aGlzQ2xhc3MsIGtleSwgc3RhdHVzQ29kZSkge1xuICAgICAgICBzd2l0Y2ggKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMjAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjAxLCBcIjIwMSBDcmVhdGVkXCIsIFwiVGhlIHJlcXVlc3QgaGFzIGJlZW4gZnVsZmlsbGVkIGFuZCByZXN1bHRlZCBpbiBhIG5ldyByZXNvdXJjZSBiZWluZyBjcmVhdGVkLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjAyLCBcIjIwMiBBY2NlcHRlZFwiLCBcIlRoZSByZXF1ZXN0IGhhcyBiZWVuIGFjY2VwdGVkIGZvciBwcm9jZXNzaW5nLCBidXQgdGhlIHByb2Nlc3NpbmcgaGFzIG5vdCBiZWVuIGNvbXBsZXRlZC5cIik7XG4gICAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDIwMywgXCIyMDMgTm9uLUF1dGhvcml0YXRpdmUgSW5mb3JtYXRpb25cIiwgXCJUaGUgcmV0dXJuZWQgbWV0YUluZm9ybWF0aW9uIGluIHRoZSBlbnRpdHktaGVhZGVyIGlzIG5vdCB0aGUgZGVmaW5pdGl2ZSBzZXQgYXMgYXZhaWxhYmxlIGZyb20gdGhlIG9yaWdpbiBzZXJ2ZXIsIGJ1dCBpcyBnYXRoZXJlZCBmcm9tIGEgbG9jYWwgb3IgYSB0aGlyZC1wYXJ0eSBjb3B5LlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjA0LCBcIjIwNCBObyBDb250ZW50XCIsIFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIHRoZSByZXF1ZXN0IGJ1dCBkb2VzIG5vdCBuZWVkIHRvIHJldHVybiBhbiBlbnRpdHktYm9keSwgYW5kIG1pZ2h0IHdhbnQgdG8gcmV0dXJuIHVwZGF0ZWQgbWV0YUluZm9ybWF0aW9uLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjA1LCBcIjIwNSBSZXNldCBDb250ZW50XCIsIFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIHRoZSByZXF1ZXN0IGFuZCB0aGUgdXNlciBhZ2VudCBTSE9VTEQgcmVzZXQgdGhlIGRvY3VtZW50IHZpZXcgd2hpY2ggY2F1c2VkIHRoZSByZXF1ZXN0IHRvIGJlIHNlbnQuXCIpO1xuICAgICAgICAgICAgY2FzZSAyMDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDYsIFwiMjA2IFBhcnRpYWwgQ29udGVudFwiLCBcIlRoZSBzZXJ2ZXIgaGFzIGZ1bGZpbGxlZCB0aGUgcGFydGlhbCBHRVQgcmVxdWVzdCBmb3IgdGhlIHJlc291cmNlLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzAwLCBcIjMwMCBNdWx0aXBsZSBDaG9pY2VzXCIsIFwiVXNlciAob3IgdXNlciBhZ2VudCkgY2FuIHNlbGVjdCBhIHByZWZlcnJlZCByZXByZXNlbnRhdGlvbiBhbmQgcmVkaXJlY3QgaXRzIHJlcXVlc3QgdG8gdGhhdCBsb2NhdGlvbi5cIik7XG4gICAgICAgICAgICBjYXNlIDMwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwMSwgXCIzMDEgTW92ZWQgUGVybWFuZW50bHlcIiwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIGhhcyBiZWVuIGFzc2lnbmVkIGEgbmV3IHBlcm1hbmVudCBVUkkgYW5kIGFueSBmdXR1cmUgcmVmZXJlbmNlcyB0byB0aGlzIHJlc291cmNlIFNIT1VMRCB1c2Ugb25lIG9mIHRoZSByZXR1cm5lZCBVUklzLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzAyLCBcIjMwMiBGb3VuZFwiLCBcIlRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgcmVzaWRlcyB0ZW1wb3JhcmlseSB1bmRlciBhIGRpZmZlcmVudCBVUkkuXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDMsIFwiMzAzIFNlZSBPdGhlclwiLCBcIlRoZSByZXNwb25zZSB0byB0aGUgcmVxdWVzdCBjYW4gYmUgZm91bmQgdW5kZXIgYSBkaWZmZXJlbnQgVVJJIGFuZCBTSE9VTEQgYmUgcmV0cmlldmVkIHVzaW5nIGEgR0VUIG1ldGhvZCBvbiB0aGF0IHJlc291cmNlLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzA0LCBcIjMwNCBOb3QgTW9kaWZpZWRcIiwgXCJJZiB0aGUgY2xpZW50IGhhcyBwZXJmb3JtZWQgYSBjb25kaXRpb25hbCBHRVQgcmVxdWVzdCBhbmQgYWNjZXNzIGlzIGFsbG93ZWQsIGJ1dCB0aGUgZG9jdW1lbnQgaGFzIG5vdCBiZWVuIG1vZGlmaWVkLCB0aGUgc2VydmVyIFNIT1VMRCByZXNwb25kIHdpdGggdGhpcyBzdGF0dXMgY29kZS5cIik7XG4gICAgICAgICAgICBjYXNlIDMwNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwNSwgXCIzMDUgVXNlIFByb3h5XCIsIFwiVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBNVVNUIGJlIGFjY2Vzc2VkIHRocm91Z2ggdGhlIHByb3h5IGdpdmVuIGJ5IHRoZSBMb2NhdGlvbiBmaWVsZC5cIik7XG4gICAgICAgICAgICBjYXNlIDMwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwNywgXCIzMDcgVGVtcG9yYXJ5IFJlZGlyZWN0XCIsIFwiVGhlIHJlcXVlc3RlZCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSS5cIik7XG4gICAgICAgICAgICBjYXNlIDQwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwMCwgXCI0MDAgQmFkIFJlcXVlc3RcIiwgXCJUaGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgdW5kZXJzdG9vZCBieSB0aGUgc2VydmVyIGR1ZSB0byBtYWxmb3JtZWQgc3ludGF4LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDAxLCBcIjQwMSBVbmF1dGhvcml6ZWRcIiwgXCJUaGUgcmVxdWVzdCByZXF1aXJlcyB1c2VyIGF1dGhlbnRpY2F0aW9uLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDAzLCBcIjQwMyBGb3JiaWRkZW5cIiwgXCJUaGUgc2VydmVyIHVuZGVyc3Rvb2QgdGhlIHJlcXVlc3QsIGJ1dCBpcyByZWZ1c2luZyB0byBmdWxmaWxsIGl0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDA0LCBcIjQwNCBOb3QgRm91bmRcIiwgXCJUaGUgc2VydmVyIGhhcyBub3QgZm91bmQgYW55dGhpbmcgbWF0Y2hpbmcgdGhlIFJlcXVlc3QtVVJJLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDA1LCBcIjQwNSBNZXRob2QgTm90IEFsbG93ZWQnLCdUaGUgbWV0aG9kIHNwZWNpZmllZCBpbiB0aGUgUmVxdWVzdC1MaW5lIGlzIG5vdCBhbGxvd2VkIGZvciB0aGUgcmVzb3VyY2UgaWRlbnRpZmllZCBieSB0aGUgUmVxdWVzdC1VUkkuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDYsIFwiNDA2IE5vdCBBY2NlcHRhYmxlXCIsIFwiVGhlIHJlc291cmNlIGlkZW50aWZpZWQgYnkgdGhlIHJlcXVlc3QgaXMgb25seSBjYXBhYmxlIG9mIGdlbmVyYXRpbmcgcmVzcG9uc2UgZW50aXRpZXMgd2hpY2ggaGF2ZSBjb250ZW50IGNoYXJhY3RlcmlzdGljcyBub3QgYWNjZXB0YWJsZSBhY2NvcmRpbmcgdG8gdGhlIGFjY2VwdCBoZWFkZXJzIHNlbnQgaW4gdGhlIHJlcXVlc3QuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDcsIFwiNDA3IFByb3h5IEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkXCIsIFwiVGhpcyBjb2RlIGlzIHNpbWlsYXIgdG8gNDAxIChVbmF1dGhvcml6ZWQpLCBidXQgaW5kaWNhdGVzIHRoYXQgdGhlIGNsaWVudCBtdXN0IGZpcnN0IGF1dGhlbnRpY2F0ZSBpdHNlbGYgd2l0aCB0aGUgcHJveHkuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDgsIFwiNDA4IFJlcXVlc3QgVGltZW91dFwiLCBcIlRoZSBjbGllbnQgZGlkIG5vdCBwcm9kdWNlIGEgcmVxdWVzdCB3aXRoaW4gdGhlIHRpbWUgdGhhdCB0aGUgc2VydmVyIHdhcyBwcmVwYXJlZCB0byB3YWl0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDA5LCBcIjQwOSBDb25mbGljdFwiLCBcIlRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBjb21wbGV0ZWQgZHVlIHRvIGEgY29uZmxpY3Qgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgcmVzb3VyY2UuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTAsIFwiNDEwIEdvbmVcIiwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIGlzIG5vIGxvbmdlciBhdmFpbGFibGUgYXQgdGhlIHNlcnZlciBhbmQgbm8gZm9yd2FyZGluZyBhZGRyZXNzIGlzIGtub3duLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDExOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDExLCBcIjQxMSBMZW5ndGggUmVxdWlyZWRcIiwgXCJUaGUgc2VydmVyIHJlZnVzZXMgdG8gYWNjZXB0IHRoZSByZXF1ZXN0IHdpdGhvdXQgYSBkZWZpbmVkIENvbnRlbnQtTGVuZ3RoLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDEyLCBcIjQxMiBQcmVjb25kaXRpb24gRmFpbGVkXCIsIFwiVGhlIHByZWNvbmRpdGlvbiBnaXZlbiBpbiBvbmUgb3IgbW9yZSBvZiB0aGUgcmVxdWVzdC1oZWFkZXIgZmllbGRzIGV2YWx1YXRlZCB0byBmYWxzZSB3aGVuIGl0IHdhcyB0ZXN0ZWQgb24gdGhlIHNlcnZlci5cIik7XG4gICAgICAgICAgICBjYXNlIDQxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQxMywgXCI0MTMgUmVxdWVzdCBFbnRpdHkgVG9vIExhcmdlXCIsIFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBwcm9jZXNzIGEgcmVxdWVzdCBiZWNhdXNlIHRoZSByZXF1ZXN0IGVudGl0eSBpcyBsYXJnZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgb3IgYWJsZSB0byBwcm9jZXNzLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE0LCBcIjQxNCBSZXF1ZXN0LVVSSSBUb28gTG9uZ1wiLCBcIlRoZSBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gc2VydmljZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSBSZXF1ZXN0LVVSSSBpcyBsb25nZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgdG8gaW50ZXJwcmV0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE1LCBcIjQxNSBVbnN1cHBvcnRlZCBNZWRpYSBUeXBlXCIsIFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBzZXJ2aWNlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIGVudGl0eSBvZiB0aGUgcmVxdWVzdCBpcyBpbiBhIGZvcm1hdCBub3Qgc3VwcG9ydGVkIGJ5IHRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgZm9yIHRoZSByZXF1ZXN0ZWQgbWV0aG9kLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE2LCBcIjQxNiBSZXF1ZXN0ZWQgUmFuZ2UgTm90IFNhdGlzZmlhYmxlXCIsIFwiQSBzZXJ2ZXIgU0hPVUxEIHJldHVybiBhIHJlc3BvbnNlIHdpdGggdGhpcyBzdGF0dXMgY29kZSBpZiBhIHJlcXVlc3QgaW5jbHVkZWQgYSBSYW5nZSByZXF1ZXN0LWhlYWRlciBmaWVsZCAoc2VjdGlvbiAxNC4zNSksIGFuZCBub25lIG9mIHRoZSByYW5nZS1zcGVjaWZpZXIgdmFsdWVzIGluIHRoaXMgZmllbGQgb3ZlcmxhcCB0aGUgY3VycmVudCBleHRlbnQgb2YgdGhlIHNlbGVjdGVkIHJlc291cmNlLCBhbmQgdGhlIHJlcXVlc3QgZGlkIG5vdCBpbmNsdWRlIGFuIElmLVJhbmdlIHJlcXVlc3QtaGVhZGVyIGZpZWxkLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE3LCBcIjQxNyBFeHBlY3RhdGlvbiBGYWlsZWRcIiwgXCJUaGUgZXhwZWN0YXRpb24gZ2l2ZW4gaW4gYW4gRXhwZWN0IHJlcXVlc3QtaGVhZGVyIGZpZWxkIChzZWUgc2VjdGlvbiAxNC4yMCkgY291bGQgbm90IGJlIG1ldCBieSB0aGlzIHNlcnZlci5cIik7XG4gICAgICAgICAgICBjYXNlIDUwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDUwMCwgXCI1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXCIsIFwiVGhlIHNlcnZlciBlbmNvdW50ZXJlZCBhbiB1bmV4cGVjdGVkIGNvbmRpdGlvbiB3aGljaCBwcmV2ZW50ZWQgaXQgZnJvbSBmdWxmaWxsaW5nIHRoZSByZXF1ZXN0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTAxLCBcIjUwMSBOb3QgSW1wbGVtZW50ZWRcIiwgXCJUaGUgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQgdGhlIGZ1bmN0aW9uYWxpdHkgaW50ZXJmYWNlX2Z1bmN0aW9uX3ZpZXdfbW9kZWwgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cIik7XG4gICAgICAgICAgICBjYXNlIDUwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDUwMiwgXCI1MDIgQmFkIEdhdGV3YXlcIiwgXCJUaGUgc2VydmVyLCB3aGlsZSBhY3RpbmcgYXMgYSBnYXRld2F5IG9yIHByb3h5LCByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIGZyb20gdGhlIHVwc3RyZWFtIHNlcnZlciBpdCBhY2Nlc3NlZCBpbiBhdHRlbXB0aW5nIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXCIpO1xuICAgICAgICAgICAgY2FzZSA1MDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA1MDMsIFwiNTAzIFNlcnZpY2UgVW5hdmFpbGFibGVcIiwgXCJUaGUgc2VydmVyIGlzIGN1cnJlbnRseSB1bmFibGUgdG8gaGFuZGxlIHRoZSByZXF1ZXN0IGR1ZSB0byBhIHRlbXBvcmFyeSBvdmVybG9hZGluZyBvciBtYWludGVuYW5jZSBvZiB0aGUgc2VydmVyLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTA0LCBcIjUwNCBHYXRld2F5IFRpbWVvdXRcIiwgXCJUaGUgc2VydmVyLCB3aGlsZSBhY3RpbmcgYXMgYSBnYXRld2F5IG9yIHByb3h5LCBkaWQgbm90IHJlY2VpdmUgYSB0aW1lbHkgcmVzcG9uc2UgZnJvbSB0aGUgdXBzdHJlYW0gc2VydmVyIHNwZWNpZmllZCBieSB0aGUgVVJJLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTA1LCBcIjUwNSBIVFRQIFZlcnNpb24gTm90IFN1cHBvcnRlZFwiLCBcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCwgb3IgcmVmdXNlcyB0byBzdXBwb3J0LCB0aGUgSFRUUCBwcm90b2NvbCB2ZXJzaW9uIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QgbWVzc2FnZS5cIik7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIk5ldHdvcmtFeGNlcHRpb24oa2V5OiBcIiArIHRoaXMua2V5ICsgXCIsIFwiICtcbiAgICAgICAgICAgIFwic3RhdHVzQ29kZTogXCIgKyB0aGlzLnN0YXR1c0NvZGUgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJuYW1lU3RhdHVzQ29kZSAob3B0aW9uYWwpOiBcIiArIHRoaXMubmFtZVN0YXR1c0NvZGUgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblN0YXR1c0NvZGUgKG9wdGlvbmFsKTogXCIgKyB0aGlzLmRlc2NyaXB0aW9uU3RhdHVzQ29kZSArIFwiKVwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTW9kZWxXTmFtZWRXTmFtZWRXTmFtZWRJdGVyYXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsSXRlcmF0b3IgPSBuZXcgQXJyYXkoKTtcbiAgICB9XG4gICAgZ2V0U29ydGVkTGlzdE1vZGVsRnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbEl0ZXJhdG9yKG5ld0xpc3RNb2RlbCkge1xuICAgICAgICBpZiAobmV3TGlzdE1vZGVsLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXN0TW9kZWxJdGVyYXRvci5wdXNoKC4uLm5ld0xpc3RNb2RlbCk7XG4gICAgICAgIGNvbnN0IG5ld0xpc3RNb2RlbEZJUlNUID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHdoaWxlICh0aGlzLm1vdmVOZXh0KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld01vZGVsID0gdGhpcy5jdXJyZW50O1xuICAgICAgICAgICAgbmV3TGlzdE1vZGVsRklSU1QucHVzaChuZXdNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0xpc3RNb2RlbEZJUlNUO1xuICAgIH1cbiAgICBtb3ZlTmV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdE1vZGVsSXRlcmF0b3IubGVuZ3RoID4gMDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZUxpc3RNb2RlbCB7XG4gICAgY29uc3RydWN0b3IobGlzdE1vZGVsKSB7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsID0gbGlzdE1vZGVsO1xuICAgIH1cbiAgICBzb3J0aW5nRnJvbU1vZGVsV05hbWVkV05hbWVkV05hbWVkSXRlcmF0b3JQYXJhbWV0ZXJMaXN0TW9kZWwobW9kZWxXTmFtZWRXTmFtZWRXTmFtZWRJdGVyYXRvcikge1xuICAgICAgICBjb25zdCBzb3J0ZWRMaXN0TW9kZWxGcm9tTmV3TGlzdE1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsSXRlcmF0b3IgPSBtb2RlbFdOYW1lZFdOYW1lZFdOYW1lZEl0ZXJhdG9yLmdldFNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvcih0aGlzLmxpc3RNb2RlbCk7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLmxlbmd0aCA+IDAgPyB0aGlzLmxpc3RNb2RlbC5zcGxpY2UoMCwgdGhpcy5saXN0TW9kZWwubGVuZ3RoKSA6IG51bGw7XG4gICAgICAgIHNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvci5sZW5ndGggPiAwID8gdGhpcy5saXN0TW9kZWwucHVzaCguLi5zb3J0ZWRMaXN0TW9kZWxGcm9tTmV3TGlzdE1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsSXRlcmF0b3IpIDogbnVsbDtcbiAgICB9XG4gICAgaW5zZXJ0RnJvbU5ld01vZGVsUGFyYW1ldGVyTGlzdE1vZGVsKG5ld01vZGVsKSB7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLnB1c2gobmV3TW9kZWwpO1xuICAgIH1cbiAgICB1cGRhdGVGcm9tTmV3TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobmV3TW9kZWwpIHtcbiAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSBuZXdNb2RlbC51bmlxdWVJZCk7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLnNwbGljZShmaW5kSW5kZXgsIDEsIG5ld01vZGVsKTtcbiAgICB9XG4gICAgZGVsZXRlRnJvbVVuaXF1ZUlkQnlNb2RlbFBhcmFtZXRlckxpc3RNb2RlbCh1bmlxdWVJZEJ5TW9kZWwpIHtcbiAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSB1bmlxdWVJZEJ5TW9kZWwpO1xuICAgICAgICB0aGlzLmxpc3RNb2RlbC5zcGxpY2UoZmluZEluZGV4LCAxKTtcbiAgICB9XG4gICAgaW5zZXJ0TGlzdEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobmV3TGlzdE1vZGVsKSB7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLnB1c2goLi4ubmV3TGlzdE1vZGVsKTtcbiAgICB9XG4gICAgdXBkYXRlTGlzdEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobmV3TGlzdE1vZGVsKSB7XG4gICAgICAgIGZvciAoY29uc3QgbmV3SXRlbU1vZGVsIG9mIG5ld0xpc3RNb2RlbCkge1xuICAgICAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSBuZXdJdGVtTW9kZWwudW5pcXVlSWQpO1xuICAgICAgICAgICAgdGhpcy5saXN0TW9kZWwuc3BsaWNlKGZpbmRJbmRleCwgMSwgbmV3SXRlbU1vZGVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWxldGVMaXN0RnJvbUxpc3RVbmlxdWVJZEJ5TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobGlzdFVuaXF1ZUlkQnlNb2RlbCkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW1VbmlxdWVJZEJ5TW9kZWwgb2YgbGlzdFVuaXF1ZUlkQnlNb2RlbCkge1xuICAgICAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSBpdGVtVW5pcXVlSWRCeU1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMubGlzdE1vZGVsLnNwbGljZShmaW5kSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbCB7XG4gICAgY29uc3RydWN0b3IodW5pcXVlSWQpIHtcbiAgICAgICAgdGhpcy51bmlxdWVJZCA9IHVuaXF1ZUlkO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTmFtZWRTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIERlZmF1bHRTdGF0ZSBleHRlbmRzIEJhc2VOYW1lZFN0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhRm9yTmFtZWQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhRm9yTmFtZWQgPSBkYXRhRm9yTmFtZWQ7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlID0gdHJ1ZTtcbiAgICB9XG4gICAgZ2V0IGdldERhdGFGb3JOYW1lZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YUZvck5hbWVkO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTmFtZWRTdHJlYW1XU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEZWZhdWx0U3RyZWFtV1N0YXRlIGV4dGVuZHMgQmFzZU5hbWVkU3RyZWFtV1N0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhRm9yTmFtZWQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhRm9yTmFtZWQgPSBkYXRhRm9yTmFtZWQ7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRGlzcG9zZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgICBnZXQgZ2V0RGF0YUZvck5hbWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhRm9yTmFtZWQ7XG4gICAgfVxuICAgIGxpc3RlblN0cmVhbURhdGFGb3JOYW1lZEZyb21DYWxsYmFjayhjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIkRlZmF1bHRTdHJlYW1XU3RhdGVcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVFRTGlzdGVuU3RyZWFtRGF0YUZvck5hbWVkRnJvbUNhbGxiYWNrXCIsIFwiQWxyZWFkeSBkaXNwb3NlZCBvZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJEZWZhdWx0U3RyZWFtV1N0YXRlXCIsIEVudW1HdWlsdHkuZGV2ZWxvcGVyLCBcIkRlZmF1bHRTdHJlYW1XU3RhdGVRUUxpc3RlblN0cmVhbURhdGFGb3JOYW1lZEZyb21DYWxsYmFja1wiLCBcIkR1cGxpY2F0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIG5vdGlmeVN0cmVhbURhdGFGb3JOYW1lZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJEZWZhdWx0U3RyZWFtV1N0YXRlXCIsIEVudW1HdWlsdHkuZGV2ZWxvcGVyLCBcIkRlZmF1bHRTdHJlYW1XU3RhdGVRUU5vdGlmeVN0cmVhbURhdGFGb3JOYW1lZFwiLCBcIkFscmVhZHkgZGlzcG9zZWQgb2ZcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2sgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVwiLCBFbnVtR3VpbHR5LmRldmVsb3BlciwgXCJEZWZhdWx0U3RyZWFtV1N0YXRlUVFOb3RpZnlTdHJlYW1EYXRhRm9yTmFtZWRcIiwgXCJTdHJlYW0gaGFzIG5vIGxpc3RlbmVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5kYXRhRm9yTmFtZWQpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUZW1wQ2FjaGVTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50ZW1wQ2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudGVtcENhY2hlV0xpc3RBY3Rpb24gPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHN0YXRpYyBjbGVhclRlbXBDYWNoZVBhcm1ldGVySW5zdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZSA9IHRoaXMuaW5zdGFuY2UudGVtcENhY2hlO1xuICAgICAgICB0ZW1wQ2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgc3RhdGljIGNsb3NlU3RyZWFtRnJvbUtleVRlbXBDYWNoZVBhcm1ldGVySW5zdGFuY2Uoa2V5VGVtcENhY2hlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZVdMaXN0QWN0aW9uID0gdGhpcy5pbnN0YW5jZS50ZW1wQ2FjaGVXTGlzdEFjdGlvbjtcbiAgICAgICAgaWYgKCF0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5oYXMoa2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdldCA9IHRlbXBDYWNoZVdMaXN0QWN0aW9uLmdldChrZXlUZW1wQ2FjaGUpO1xuICAgICAgICBnZXQgPT09IG51bGwgfHwgZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnZXQuc3BsaWNlKDAsIGdldC5sZW5ndGgpO1xuICAgIH1cbiAgICBzdGF0aWMgY2xvc2VTdHJlYW1Gcm9tTGlzdEtleVRlbXBDYWNoZVBhcm1ldGVySW5zdGFuY2UobGlzdEtleVRlbXBDYWNoZSkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMuaW5zdGFuY2UudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGZvciAoY29uc3QgaXRlbUtleVRlbXBDYWNoZSBvZiBsaXN0S2V5VGVtcENhY2hlKSB7XG4gICAgICAgICAgICBpZiAoIXRlbXBDYWNoZVdMaXN0QWN0aW9uLmhhcyhpdGVtS2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGdldCA9IHRlbXBDYWNoZVdMaXN0QWN0aW9uLmdldChpdGVtS2V5VGVtcENhY2hlKTtcbiAgICAgICAgICAgIGdldCA9PT0gbnVsbCB8fCBnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdldC5zcGxpY2UoMCwgZ2V0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGNsb3NlU3RyZWFtc1BhcmFtZXRlckluc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMuaW5zdGFuY2UudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGZvciAoY29uc3QgWywgdmFsdWVdIG9mIHRlbXBDYWNoZVdMaXN0QWN0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZS5zcGxpY2UoMCwgdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRGcm9tS2V5VGVtcENhY2hlUGFyYW1ldGVyVGVtcENhY2hlKGtleVRlbXBDYWNoZSkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGUgPSB0aGlzLnRlbXBDYWNoZTtcbiAgICAgICAgaWYgKCF0ZW1wQ2FjaGUuaGFzKGtleVRlbXBDYWNoZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIlRlbXBDYWNoZVNlcnZpY2VcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIGtleVRlbXBDYWNoZSwgXCJObyBleGlzdHMga2V5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wQ2FjaGUuZ2V0KGtleVRlbXBDYWNoZSk7XG4gICAgfVxuICAgIGxpc3RlblN0cmVhbUZyb21LZXlUZW1wQ2FjaGVBbmRDYWxsYmFja1BhcmFtZXRlck9uZShrZXlUZW1wQ2FjaGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZVdMaXN0QWN0aW9uID0gdGhpcy50ZW1wQ2FjaGVXTGlzdEFjdGlvbjtcbiAgICAgICAgaWYgKCF0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5oYXMoa2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgdGVtcENhY2hlV0xpc3RBY3Rpb24uc2V0KGtleVRlbXBDYWNoZSwgbmV3IEFycmF5KCkpO1xuICAgICAgICAgICAgKF9hID0gdGVtcENhY2hlV0xpc3RBY3Rpb24uZ2V0KGtleVRlbXBDYWNoZSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAoX2IgPSB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5nZXQoa2V5VGVtcENhY2hlKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICB1cGRhdGVGcm9tS2V5VGVtcENhY2hlQW5kVmFsdWVQYXJhbWV0ZXJUZW1wQ2FjaGUoa2V5VGVtcENhY2hlLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnRlbXBDYWNoZS5zZXQoa2V5VGVtcENhY2hlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHVwZGF0ZVdoZXJlU3RyZWFtTm90aWZpY2F0aW9uSXNQb3NzaWJsZUZyb21LZXlUZW1wQ2FjaGVBbmRWYWx1ZVBhcmFtZXRlclRlbXBDYWNoZShrZXlUZW1wQ2FjaGUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRnJvbUtleVRlbXBDYWNoZUFuZFZhbHVlUGFyYW1ldGVyVGVtcENhY2hlKGtleVRlbXBDYWNoZSwgdmFsdWUpO1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGlmICghdGVtcENhY2hlV0xpc3RBY3Rpb24uaGFzKGtleVRlbXBDYWNoZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnZXQgPSB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5nZXQoa2V5VGVtcENhY2hlKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtR2V0IG9mIGdldCkge1xuICAgICAgICAgICAgaXRlbUdldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVsZXRlRnJvbUtleVRlbXBDYWNoZVBhcmFtZXRlclRlbXBDYWNoZShrZXlUZW1wQ2FjaGUpIHtcbiAgICAgICAgdGhpcy50ZW1wQ2FjaGUuZGVsZXRlKGtleVRlbXBDYWNoZSk7XG4gICAgfVxufVxuVGVtcENhY2hlU2VydmljZS5pbnN0YW5jZSA9IG5ldyBUZW1wQ2FjaGVTZXJ2aWNlKCk7XG5leHBvcnQgdmFyIEVudW1SV1RNb2RlO1xuKGZ1bmN0aW9uIChFbnVtUldUTW9kZSkge1xuICAgIEVudW1SV1RNb2RlW0VudW1SV1RNb2RlW1wicmVsZWFzZVwiXSA9IDBdID0gXCJyZWxlYXNlXCI7XG4gICAgRW51bVJXVE1vZGVbRW51bVJXVE1vZGVbXCJ0ZXN0XCJdID0gMV0gPSBcInRlc3RcIjtcbn0pKEVudW1SV1RNb2RlIHx8IChFbnVtUldUTW9kZSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgTmFtZWRDYWxsYmFjayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBSV1RNb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihlbnVtUldUTW9kZSwgbGlzdE5hbWVkQ2FsbGJhY2tXUmVsZWFzZSwgbGlzdE5hbWVkQ2FsbGJhY2tXVGVzdCkge1xuICAgICAgICB0aGlzLmVudW1SV1RNb2RlID0gZW51bVJXVE1vZGU7XG4gICAgICAgIHRoaXMubWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tXUmVsZWFzZSA9IFJXVE1vZGUuZ2V0TWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tGcm9tTGlzdE5hbWVkQ2FsbGJhY2sobGlzdE5hbWVkQ2FsbGJhY2tXUmVsZWFzZSk7XG4gICAgICAgIHRoaXMubWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tXVGVzdCA9IFJXVE1vZGUuZ2V0TWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tGcm9tTGlzdE5hbWVkQ2FsbGJhY2sobGlzdE5hbWVkQ2FsbGJhY2tXVGVzdCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRNYXBTdHJpbmdXTmFtZWRDYWxsYmFja0Zyb21MaXN0TmFtZWRDYWxsYmFjayhsaXN0TmFtZWRDYWxsYmFjaykge1xuICAgICAgICBjb25zdCBtYXBTdHJpbmdXTmFtZWRDYWxsYmFjayA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtTmFtZWRDYWxsYmFjayBvZiBsaXN0TmFtZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgbWFwU3RyaW5nV05hbWVkQ2FsbGJhY2suc2V0KGl0ZW1OYW1lZENhbGxiYWNrLm5hbWUsIGl0ZW1OYW1lZENhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwU3RyaW5nV05hbWVkQ2FsbGJhY2s7XG4gICAgfVxuICAgIGdldE5hbWVkQ2FsbGJhY2tGcm9tTmFtZShuYW1lKSB7XG4gICAgICAgIGNvbnN0IG1hcFN0cmluZ1dOYW1lZENhbGxiYWNrV2hlcmVTZWxlY3RNb2RQYXJhbWV0ZXJzVGhyZWUgPSB0aGlzLmdldE1hcFN0cmluZ1dOYW1lZENhbGxiYWNrV2hlcmVTZWxlY3RNb2RQYXJhbWV0ZXJzVGhyZWU7XG4gICAgICAgIGlmICghbWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tXaGVyZVNlbGVjdE1vZFBhcmFtZXRlcnNUaHJlZS5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIlJXVE1vZGVcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIFwiUldUTW9kZVFRR2V0TmFtZWRDYWxsYmFja0Zyb21OYW1lXCIsIFwibm8gZXhpc3RzIGtleTogXCIgKyBuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tXaGVyZVNlbGVjdE1vZFBhcmFtZXRlcnNUaHJlZS5nZXQobmFtZSk7XG4gICAgfVxuICAgIGdldCBnZXRNYXBTdHJpbmdXTmFtZWRDYWxsYmFja1doZXJlU2VsZWN0TW9kUGFyYW1ldGVyc1RocmVlKCkge1xuICAgICAgICBpZiAodGhpcy5lbnVtUldUTW9kZSA9PSBFbnVtUldUTW9kZS5yZWxlYXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXBTdHJpbmdXTmFtZWRDYWxsYmFja1dSZWxlYXNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1hcFN0cmluZ1dOYW1lZENhbGxiYWNrV1Rlc3Q7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKGV4Y2VwdGlvbikge1xuICAgICAgICB0aGlzLmV4Y2VwdGlvbiA9IGV4Y2VwdGlvbjtcbiAgICB9XG4gICAgc3RhdGljIHN1Y2Nlc3MoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXhjZXB0aW9uQ29udHJvbGxlcihudWxsKTtcbiAgICB9XG4gICAgc3RhdGljIGV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFeGNlcHRpb25Db250cm9sbGVyKGV4Y2VwdGlvbik7XG4gICAgfVxuICAgIGdldCBnZXRLZXlQYXJhbWV0ZXJFeGNlcHRpb24oKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHJldHVybiAoX2IgPSAoX2EgPSB0aGlzLmV4Y2VwdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmtleSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJcIjtcbiAgICB9XG4gICAgaXNXaGVyZU5vdEVxdWFsc051bGxQYXJhbWV0ZXJFeGNlcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4Y2VwdGlvbiAhPSBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlciwgZXhjZXB0aW9uQ29udHJvbGxlcikge1xuICAgICAgICB0aGlzLnBhcmFtZXRlciA9IHBhcmFtZXRlcjtcbiAgICAgICAgdGhpcy5leGNlcHRpb25Db250cm9sbGVyID0gZXhjZXB0aW9uQ29udHJvbGxlcjtcbiAgICB9XG4gICAgc3RhdGljIHN1Y2Nlc3MocGFyYW1ldGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzdWx0KHBhcmFtZXRlciwgRXhjZXB0aW9uQ29udHJvbGxlci5zdWNjZXNzKCkpO1xuICAgIH1cbiAgICBzdGF0aWMgZXhjZXB0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IFJlc3VsdChudWxsLCBFeGNlcHRpb25Db250cm9sbGVyLmV4Y2VwdGlvbihleGNlcHRpb24pKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZGVidWdQcmludCh0ZXh0KSB7XG4gICAgY29uc29sZS5sb2codGV4dCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVidWdQcmludEV4Y2VwdGlvbih0ZXh0KSB7XG4gICAgZGVidWdQcmludChcIlxceDFCWzMxbVwiICsgdGV4dCArIFwiXFx4MWJbMG1cIik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IExvY2FsRXhjZXB0aW9uLCBFbnVtR3VpbHR5LCBCYXNlTW9kZWwsIEJhc2VMaXN0TW9kZWwsIFJlc3VsdCwgTmV0d29ya0V4Y2VwdGlvbiwgQmFzZURhdGFGb3JOYW1lZCwgRGVmYXVsdFN0cmVhbVdTdGF0ZSwgZGVidWdQcmludCwgUldUTW9kZSwgRW51bVJXVE1vZGUsIE5hbWVkQ2FsbGJhY2sgfSBmcm9tIFwibGlicmFyeV9hcmNoaXRlY3R1cmVfbXZ2bV9tb2RpZnlfamF2YXNjcmlwdFwiO1xyXG5cclxuY2xhc3MgS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eSB7XHJcbiAgICAvKiBJUEFkZHJlc3MgKi9cclxuICAgIHN0YXRpYyAjaVBBZGRyZXNzUVFJcCA9IFwiaXBcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAobmV3LnRhcmdldCA9PT0gS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJLZXlzSHR0cFNlcnZpY2VVdGlsaXR5XCIsRW51bUd1aWx0eS5kZXZlbG9wZXIsXCJLZXlzSHR0cFNlcnZpY2VVdGlsaXR5UVFDb25zdHJ1Y3RvclwiLFwiVGhpcyBjbGFzcyBpcyBzdGF0aWMsIHRoZXJlIGlzIG5vIHBvaW50IGluIGNhbGxpbmcgYW4gb2JqZWN0IGFuZCBpbmhlcml0YW5jZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBpUEFkZHJlc3NRUUlwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNpUEFkZHJlc3NRUUlwO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBLZXlzRXhjZXB0aW9uVXRpbGl0eSB7XHJcbiAgICAvKiBVTktOT1dOICovXHJcbiAgICBzdGF0aWMgI3VOS05PV04gPSBcInVOS05PV05cIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAobmV3LnRhcmdldCA9PT0gS2V5c0V4Y2VwdGlvblV0aWxpdHkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiS2V5c0V4Y2VwdGlvblV0aWxpdHlcIixFbnVtR3VpbHR5LmRldmVsb3BlcixcIktleXNFeGNlcHRpb25VdGlsaXR5UVFDb25zdHJ1Y3RvclwiLFwiVGhpcyBjbGFzcyBpcyBzdGF0aWMsIHRoZXJlIGlzIG5vIHBvaW50IGluIGNhbGxpbmcgYW4gb2JqZWN0IGFuZCBpbmhlcml0YW5jZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCB1TktOT1dOKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiN1TktOT1dOO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBLZXlzU3VjY2Vzc1V0aWxpdHkge1xyXG4gICAgLyogU1VDQ0VTUyAqL1xyXG4gICAgc3RhdGljICNzVUNDRVNTID0gXCJzVUNDRVNTXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKG5ldy50YXJnZXQgPT09IEtleXNTdWNjZXNzVXRpbGl0eSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJLZXlzU3VjY2Vzc1V0aWxpdHlcIixFbnVtR3VpbHR5LmRldmVsb3BlcixcIktleXNTdWNjZXNzVXRpbGl0eVFRQ29uc3RydWN0b3JcIixcIlRoaXMgY2xhc3MgaXMgc3RhdGljLCB0aGVyZSBpcyBubyBwb2ludCBpbiBjYWxsaW5nIGFuIG9iamVjdCBhbmQgaW5oZXJpdGFuY2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgc1VDQ0VTUygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jc1VDQ0VTUztcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSVBBZGRyZXNzIGV4dGVuZHMgQmFzZU1vZGVsIHtcclxuICAgICNpcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpcCkge1xyXG4gICAgICAgIHN1cGVyKFwiXCIgKyBpcCArIFwiXCIpO1xyXG4gICAgICAgIHRoaXMuI2lwID0gaXA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldENsb25lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgSVBBZGRyZXNzKHRoaXMuaXApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBcIklQQWRkcmVzcyhpcDogXCIgKyB0aGlzLmlwICsgXCIpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNpcDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTGlzdElQQWRkcmVzcyBleHRlbmRzIEJhc2VMaXN0TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IobGlzdE1vZGVsKSB7XHJcbiAgICAgICAgc3VwZXIobGlzdE1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0Q2xvbmUoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3TGlzdE1vZGVsID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yKGNvbnN0IGl0ZW1Nb2RlbCBvZiB0aGlzLmxpc3RNb2RlbCkge1xyXG4gICAgICAgICAgICBuZXdMaXN0TW9kZWwucHVzaChpdGVtTW9kZWwuZ2V0Q2xvbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IExpc3RJUEFkZHJlc3MobmV3TGlzdE1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBsZXQgc3RyTGlzdE1vZGVsID0gXCJcXG5cIjtcclxuICAgICAgICBmb3IoY29uc3QgaXRlbU1vZGVsIG9mIHRoaXMubGlzdE1vZGVsKSB7XHJcbiAgICAgICAgICAgIHN0ckxpc3RNb2RlbCArPSBpdGVtTW9kZWwudG9TdHJpbmcoKSArIFwiLFxcblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJMaXN0SVBBZGRyZXNzKGxpc3RNb2RlbDogW1wiICsgc3RyTGlzdE1vZGVsICsgXCJdKVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gVGhpcyBjbGFzcyBuZWVkcyB0byBiZSBjYWxsZWQgd2hlcmUgdGhlcmUgYXJlIG5ldHdvcmsgcmVxdWVzdHMgKGluIHRoZSBkYXRhIHNvdXJjZSksIFxyXG4vLy8gc2luY2Ugd2l0aG91dCB0aGlzIGNsYXNzIHRoZSBkZXZlbG9wZXIgd2lsbCBub3Qga25vdyBpbiB3aGljaCBjbGFzcyB0aGUgbmV0d29yayByZXF1ZXN0cyBhcmVcclxuY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG4gICAgc3RhdGljIGluc3RhbmNlID0gbmV3IEh0dHBTZXJ2aWNlKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYoSHR0cFNlcnZpY2UuaW5zdGFuY2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gSHR0cFNlcnZpY2UuaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBHZXRFRUlQQWRkcmVzc0VFV2hlcmVKc29uaXBBUElFRVBhcmFtZXRlckh0dHBTZXJ2aWNlIHtcclxuICAgICNodHRwU2VydmljZSA9IEh0dHBTZXJ2aWNlLmluc3RhbmNlO1xyXG5cclxuICAgIGFzeW5jIGdldElQQWRkcmVzc1doZXJlSnNvbmlwQVBJUGFyYW1ldGVySHR0cFNlcnZpY2UoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbmlwLmNvbS9cIiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBOZXR3b3JrRXhjZXB0aW9uLmZyb21LZXlBbmRTdGF0dXNDb2RlKFwiR2V0RUVJUEFkZHJlc3NFRVdoZXJlSnNvbmlwQVBJRUVQYXJhbWV0ZXJIdHRwU2VydmljZVwiLHJlc3BvbnNlLnN0YXR1cy50b1N0cmluZygpLHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbWFwID0gbmV3IE1hcChPYmplY3QuZW50cmllcyhqc29uKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlQQWRkcmVzcyA9IG5ldyBJUEFkZHJlc3MobWFwLmdldChLZXlzSHR0cFNlcnZpY2VVdGlsaXR5LmlQQWRkcmVzc1FRSXApKTtcclxuICAgICAgICAgICAgcmV0dXJuIFJlc3VsdC5zdWNjZXNzKGlQQWRkcmVzcyk7XHJcbiAgICAgICAgfSBjYXRjaChleGNlcHRpb24pIHtcclxuICAgICAgICAgICAgaWYoZXhjZXB0aW9uIGluc3RhbmNlb2YgTmV0d29ya0V4Y2VwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlc3VsdC5leGNlcHRpb24oZXhjZXB0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gUmVzdWx0LmV4Y2VwdGlvbihuZXcgTG9jYWxFeGNlcHRpb24oXCJHZXRFRUlQQWRkcmVzc0VFV2hlcmVKc29uaXBBUElFRVBhcmFtZXRlckh0dHBTZXJ2aWNlXCIsRW51bUd1aWx0eS5kZXZpY2UsS2V5c0V4Y2VwdGlvblV0aWxpdHkudU5LTk9XTixleGNlcHRpb24udG9TdHJpbmcoKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgX2h0dHBTZXJ2aWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNodHRwU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgRW51bURhdGFGb3JNYWluVk0gPSB7XHJcbiAgICBpc0xvYWRpbmcgOiBcImlzTG9hZGluZ1wiLFxyXG4gICAgZXhjZXB0aW9uIDogXCJleGNlcHRpb25cIixcclxuICAgIHN1Y2Nlc3MgOiBcInN1Y2Nlc3NcIixcclxufTtcclxuXHJcbmNsYXNzIERhdGFGb3JNYWluVk0gZXh0ZW5kcyBCYXNlRGF0YUZvck5hbWVkIHtcclxuICAgIGlQQWRkcmVzcztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihpc0xvYWRpbmcsaVBBZGRyZXNzKSB7XHJcbiAgICAgICAgc3VwZXIoaXNMb2FkaW5nKTtcclxuICAgICAgICB0aGlzLmlQQWRkcmVzcyA9IGlQQWRkcmVzcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0RW51bURhdGFGb3JOYW1lZCgpIHtcclxuICAgICAgICBpZih0aGlzLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gRW51bURhdGFGb3JNYWluVk0uaXNMb2FkaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmV4Y2VwdGlvbkNvbnRyb2xsZXIuaXNXaGVyZU5vdEVxdWFsc051bGxQYXJhbWV0ZXJFeGNlcHRpb24oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW51bURhdGFGb3JNYWluVk0uZXhjZXB0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRW51bURhdGFGb3JNYWluVk0uc3VjY2VzcztcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTWFpblZNIHtcclxuICAgIC8vIE9wZXJhdGlvbkVFTW9kZWwoRUVXaGVyZU5hbWVkKVtFRUZyb21OYW1lZF1FRVBhcmFtZXRlck5hbWVkU2VydmljZVxyXG4gICAgI2dldEVFSVBBZGRyZXNzRUVXaGVyZUpzb25pcEFQSUVFUGFyYW1ldGVySHR0cFNlcnZpY2UgPSBuZXcgR2V0RUVJUEFkZHJlc3NFRVdoZXJlSnNvbmlwQVBJRUVQYXJhbWV0ZXJIdHRwU2VydmljZSgpO1xyXG4gICAgLy8gTmFtZWRVdGlsaXR5XHJcbiAgICBcclxuICAgIC8vIE1haW4gb2JqZWN0c1xyXG4gICAgI25hbWVkU3RyZWFtV1N0YXRlO1xyXG4gICAgI3J3dE1vZGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jbmFtZWRTdHJlYW1XU3RhdGUgPSBuZXcgRGVmYXVsdFN0cmVhbVdTdGF0ZShuZXcgRGF0YUZvck1haW5WTSh0cnVlLG5ldyBJUEFkZHJlc3MoXCJcIikpKTtcclxuICAgICAgICB0aGlzLiNyd3RNb2RlID0gbmV3IFJXVE1vZGUoXHJcbiAgICAgICAgICAgIEVudW1SV1RNb2RlLnJlbGVhc2UsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIG5ldyBOYW1lZENhbGxiYWNrKFwiaW5pdFwiLGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRJUEFkZHJlc3NXaGVyZUpzb25pcEFQSVBhcmFtZXRlckh0dHBTZXJ2aWNlID0gYXdhaXQgdGhpcy4jZ2V0RUVJUEFkZHJlc3NFRVdoZXJlSnNvbmlwQVBJRUVQYXJhbWV0ZXJIdHRwU2VydmljZS5nZXRJUEFkZHJlc3NXaGVyZUpzb25pcEFQSVBhcmFtZXRlckh0dHBTZXJ2aWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZ2V0SVBBZGRyZXNzV2hlcmVKc29uaXBBUElQYXJhbWV0ZXJIdHRwU2VydmljZS5leGNlcHRpb25Db250cm9sbGVyLmlzV2hlcmVOb3RFcXVhbHNOdWxsUGFyYW1ldGVyRXhjZXB0aW9uKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuI2ZpcnN0UVFJbml0UVFHZXRJUEFkZHJlc3NXaGVyZUpzb25pcEFQSVBhcmFtZXRlckh0dHBTZXJ2aWNlKGdldElQQWRkcmVzc1doZXJlSnNvbmlwQVBJUGFyYW1ldGVySHR0cFNlcnZpY2UuZXhjZXB0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI25hbWVkU3RyZWFtV1N0YXRlLmdldERhdGFGb3JOYW1lZC5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNuYW1lZFN0cmVhbVdTdGF0ZS5nZXREYXRhRm9yTmFtZWQuaVBBZGRyZXNzID0gZ2V0SVBBZGRyZXNzV2hlcmVKc29uaXBBUElQYXJhbWV0ZXJIdHRwU2VydmljZS5wYXJhbWV0ZXIuZ2V0Q2xvbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEtleXNTdWNjZXNzVXRpbGl0eS5zVUNDRVNTO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIG5ldyBOYW1lZENhbGxiYWNrKFwiaW5pdFwiLGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaW11bGF0aW9uIGdldCBcIklQQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaVBBZGRyZXNzID0gbmV3IElQQWRkcmVzcyhcIjEyMS4xMjEuMTIuMTJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsMTAwMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI25hbWVkU3RyZWFtV1N0YXRlLmdldERhdGFGb3JOYW1lZC5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNuYW1lZFN0cmVhbVdTdGF0ZS5nZXREYXRhRm9yTmFtZWQuaVBBZGRyZXNzID0gaVBBZGRyZXNzLmdldENsb25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBLZXlzU3VjY2Vzc1V0aWxpdHkuc1VDQ0VTUztcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLiNpbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgI2luaXQoKSB7XHJcbiAgICAgICAgdGhpcy4jbmFtZWRTdHJlYW1XU3RhdGUubGlzdGVuU3RyZWFtRGF0YUZvck5hbWVkRnJvbUNhbGxiYWNrKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuI2J1aWxkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy4jcnd0TW9kZS5nZXROYW1lZENhbGxiYWNrRnJvbU5hbWUoXCJpbml0XCIpLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgZGVidWdQcmludChcIk1haW5WTTogXCIgKyByZXN1bHQpO1xyXG4gICAgICAgIHRoaXMuI25hbWVkU3RyZWFtV1N0YXRlLm5vdGlmeVN0cmVhbURhdGFGb3JOYW1lZCgpO1xyXG4gICAgfVxyXG5cclxuICAgICNidWlsZCgpIHtcclxuICAgICAgICBjb25zdCBkYXRhRm9yTmFtZWQgPSB0aGlzLiNuYW1lZFN0cmVhbVdTdGF0ZS5nZXREYXRhRm9yTmFtZWQ7XHJcbiAgICAgICAgc3dpdGNoKGRhdGFGb3JOYW1lZC5nZXRFbnVtRGF0YUZvck5hbWVkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRW51bURhdGFGb3JNYWluVk0uaXNMb2FkaW5nOlxyXG4gICAgICAgICAgICAgICAgZGVidWdQcmludChcIkJ1aWxkOiBJc0xvYWRpbmdcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFbnVtRGF0YUZvck1haW5WTS5leGNlcHRpb246XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z1ByaW50KFwiQnVpbGQ6IEV4Y2VwdGlvbihcIiArIGRhdGFGb3JOYW1lZC5leGNlcHRpb25Db250cm9sbGVyLmdldEtleVBhcmFtZXRlckV4Y2VwdGlvbiArIFwiKVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVudW1EYXRhRm9yTWFpblZNLnN1Y2Nlc3M6XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z1ByaW50KFwiQnVpbGQ6IFN1Y2Nlc3MoXCIgKyBkYXRhRm9yTmFtZWQuaVBBZGRyZXNzICsgXCIpXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgI2ZpcnN0UVFJbml0UVFHZXRJUEFkZHJlc3NXaGVyZUpzb25pcEFQSVBhcmFtZXRlckh0dHBTZXJ2aWNlKGV4Y2VwdGlvbkNvbnRyb2xsZXIpIHtcclxuICAgICAgICB0aGlzLiNuYW1lZFN0cmVhbVdTdGF0ZS5nZXREYXRhRm9yTmFtZWQuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy4jbmFtZWRTdHJlYW1XU3RhdGUuZ2V0RGF0YUZvck5hbWVkLmV4Y2VwdGlvbkNvbnRyb2xsZXIgPSBleGNlcHRpb25Db250cm9sbGVyO1xyXG4gICAgICAgIHJldHVybiBleGNlcHRpb25Db250cm9sbGVyLmdldEtleVBhcmFtZXRlckV4Y2VwdGlvbjtcclxuICAgIH1cclxufVxyXG5uZXcgTWFpblZNKCk7XHJcbi8vIEVYUEVDVEVEIE9VVFBVVDpcclxuLy9cclxuLy8gTWFpblZNOiBzVUNDRVNTXHJcbi8vIEJ1aWxkOiBTdWNjZXNzKElQQWRkcmVzcyhpcDogJHt5b3VyX2lwfSkpXHJcblxyXG4vLy8gT1JcclxuXHJcbi8vIEVYUEVDVEVEIE9VVFBVVDpcclxuLy9cclxuLy8gPT09c3RhcnRfdG9fdHJhY2VfZXhjZXB0aW9uPT09XHJcbi8vXHJcbi8vIFdoZXJlSGFwcGVuZWRFeGNlcHRpb24oQ2xhc3MpIC0tPiAke1doZXJlSGFwcGVuZWRFeGNlcHRpb24oQ2xhc3MpfVxyXG4vLyBOYW1lRXhjZXB0aW9uKENsYXNzKSAtLT4gJHtOYW1lRXhjZXB0aW9uKENsYXNzKX1cclxuLy8gdG9TdHJpbmcoKSAtLT4gJHt0b1N0cmluZygpfVxyXG4vL1xyXG4vLyA9PT1lbmRfdG9fdHJhY2VfZXhjZXB0aW9uPT09XHJcbi8vXHJcbi8vIE1haW5WTTogJHtnZXRLZXlQYXJhbWV0ZXJFeGNlcHRpb259XHJcbi8vIEJ1aWxkOiBFeGNlcHRpb24oJHtnZXRLZXlQYXJhbWV0ZXJFeGNlcHRpb259KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==