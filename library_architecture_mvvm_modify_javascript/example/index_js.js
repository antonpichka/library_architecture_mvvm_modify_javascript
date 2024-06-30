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
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! library_architecture_mvvm_modify_javascript */ "../dist/esm/index.js");


class FactoryObjectUtility {
    constructor() {
        if (new.target === FactoryObjectUtility) {
            throw new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.LocalException("FactoryObjectUtility",library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.EnumGuilty.developer,"FactoryObjectUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }
    
    /* ModelRepository */
    static get getIPAddressRepository() {
        return new IPAddressRepository();
    }
}

class ReadyDataUtility {
    static #success = "success";
    static #unknown = "unknown";
    static #iPAPI = "https://jsonip.com/";

    constructor() {
        if (new.target === ReadyDataUtility) {
            throw new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.LocalException("ReadyDataUtility",library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.EnumGuilty.developer,"ReadyDataUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }
    
    static get success() {
        return this.#success;
    }

    static get unknown() {
        return this.#unknown;
    }

    static get iPAPI() {
        return this.#iPAPI;
    }
}

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

class IPAddressRepository extends library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.BaseModelRepository {
    #httpService = HttpService.instance;

    _getBaseModelFromMapAndListKeys(map,listKeys) {
        return new IPAddress(
            this.getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(
                map, listKeys, 0, ""));
    }

    _getBaseListModelFromListModel(listModel) {
        return new ListIPAddress(listModel);
    }

    async getIPAddressParameterHttpService() {
        return this.getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(
            this._getIPAddressParameterHttpServiceWReleaseCallback,
            this._getIPAddressParameterHttpServiceWTestCallback)();
    }

    get _httpService() {
        return this.#httpService;
    }

    _getIPAddressParameterHttpServiceWReleaseCallback = async () => {
        try {
            const response = await fetch(ReadyDataUtility.iPAPI, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.status != 200) {
                throw library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.NetworkException.fromKeyAndStatusCode("IPAddressRepository",response.status.toString(),response.status);
            }
            const json = await response.json();
            const map = new Map(Object.entries(json));
            return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.success(this._getBaseModelFromMapAndListKeys(
                map,
                this._getIPAddressParameterHttpClientServiceWListKeys()));
        } catch(exception) {
            if(exception instanceof library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.NetworkException) {
                return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.exception(exception);
            }
            return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.exception(new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.LocalException("IPAddressRepository",library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.EnumGuilty.device,ReadyDataUtility.unknown,exception.toString()));
        }
    };

    _getIPAddressParameterHttpServiceWTestCallback = async () => {
        await new Promise(resolve => setTimeout(resolve,1000));
        return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.success(this._getBaseModelFromMapAndListKeys(
            new Map([
                [KeysHttpServiceUtility.iPAddressQQIp,"121.121.12.12"]
            ]),
            this._getIPAddressParameterHttpClientServiceWListKeys()));
    };

    _getIPAddressParameterHttpClientServiceWListKeys() {
        return [KeysHttpServiceUtility.iPAddressQQIp];
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

    toString() {
        return "DataForMainVM(isLoading: " + this.isLoading + ", " 
            + "exceptionController: " + this.exceptionController + ", " 
            + "iPAddress: " + this.iPAddress + ")";
    }
}

class MainVM {
    // ModelRepository
    #iPAddressRepository = FactoryObjectUtility.getIPAddressRepository;
    
    // NamedUtility
    
    // NamedStreamWState
    #namedStreamWState;

    constructor() {
        this.#namedStreamWState = new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.DefaultStreamWState(new DataForMainVM(true,new IPAddress("")));
    }

    async init() {
        this.#namedStreamWState.listenStreamDataForNamedFromCallback((_data) => {
            this.#build();
        });
        const firstRequest = await this.#firstRequest();
        (0,library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.debugPrint)("MainVM: " + firstRequest);
        this.#namedStreamWState.notifyStreamDataForNamed();
    }

    dispose() {
        this.#namedStreamWState.dispose();
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

    async #firstRequest() {
        const getIPAddressParameterHttpService = await this.#iPAddressRepository.getIPAddressParameterHttpService();
        if(getIPAddressParameterHttpService.exceptionController.isWhereNotEqualsNullParameterException()) {
            return this.#firstQQFirstRequestQQGetIPAddressParameterHttpService(getIPAddressParameterHttpService.exceptionController);
        }
        this.#namedStreamWState.getDataForNamed.isLoading = false;
        this.#namedStreamWState.getDataForNamed.iPAddress = getIPAddressParameterHttpService.parameter.getClone;
        return ReadyDataUtility.success;
    }

    async #firstQQFirstRequestQQGetIPAddressParameterHttpService(exceptionController) {
        this.#namedStreamWState.getDataForNamed.isLoading = false;
        this.#namedStreamWState.getDataForNamed.exceptionController = exceptionController;
        return exceptionController.getKeyParameterException;
    }
}

async function main() {
    library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.BaseModelRepository.enumRWTMode = library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.EnumRWTMode.release;
    const mainVM = new MainVM();
    await mainVM.init();
    mainVM.dispose();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7QUFDNUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7O1VDMVlBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTjhRO0FBQzlRO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVGQUFjLHdCQUF3QixtRkFBVTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1RkFBYyxvQkFBb0IsbUZBQVU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUZBQWMsMEJBQTBCLG1GQUFVO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0ZBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzRkFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNEZBQW1CO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxzQkFBc0IseUZBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrRUFBTTtBQUN6QjtBQUNBO0FBQ0EsVUFBVTtBQUNWLG9DQUFvQyx5RkFBZ0I7QUFDcEQsdUJBQXVCLCtFQUFNO0FBQzdCO0FBQ0EsbUJBQW1CLCtFQUFNLGVBQWUsdUZBQWMsdUJBQXVCLG1GQUFVO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtFQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUZBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDRGQUFtQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUUFBUSx1RkFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVGQUFVO0FBQzFCO0FBQ0E7QUFDQSxnQkFBZ0IsdUZBQVU7QUFDMUI7QUFDQTtBQUNBLGdCQUFnQix1RkFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRGQUFtQixlQUFlLG9GQUFXO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2Qyw4QkFBOEI7QUFDOUIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixzQkFBc0IseUJBQXlCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLy4uL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL2V4YW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGFtcGxlLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJhc2VEYXRhRm9yTmFtZWQge1xuICAgIGNvbnN0cnVjdG9yKGlzTG9hZGluZykge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGlzTG9hZGluZztcbiAgICAgICAgdGhpcy5leGNlcHRpb25Db250cm9sbGVyID0gRXhjZXB0aW9uQ29udHJvbGxlci5zdWNjZXNzKCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHRoaXNDbGFzcywgZXhjZXB0aW9uQ2xhc3MsIGtleSkge1xuICAgICAgICB0aGlzLnRoaXNDbGFzcyA9IHRoaXNDbGFzcztcbiAgICAgICAgdGhpcy5leGNlcHRpb25DbGFzcyA9IGV4Y2VwdGlvbkNsYXNzO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG4gICAgLy8vIENhbGwgdGhpcyBtZXRob2QgaW4gdGhlIGRlc2NlbmRhbnQgY29uc3RydWN0b3IgYXMgdGhlIGxhc3QgbGluZVxuICAgIGRlYnVnUHJpbnRFeGNlcHRpb25XaGVyZVRvU3RyaW5nUGFyYW1ldGVyc1RoaXNDbGFzc0FuZEV4Y2VwdGlvbkNsYXNzKCkge1xuICAgICAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uKFwiXFxuPT09c3RhcnRfdG9fdHJhY2VfZXhjZXB0aW9uPT09XFxuXCIpO1xuICAgICAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uKFwiV2hlcmVIYXBwZW5lZEV4Y2VwdGlvbihDbGFzcykgLS0+IFwiICsgdGhpcy50aGlzQ2xhc3MgKyBcIlxcblwiICtcbiAgICAgICAgICAgIFwiTmFtZUV4Y2VwdGlvbihDbGFzcykgLS0+IFwiICsgdGhpcy5leGNlcHRpb25DbGFzcyArIFwiXFxuXCIgK1xuICAgICAgICAgICAgXCJ0b1N0cmluZygpIC0tPiBcIiArIHRoaXMudG9TdHJpbmcoKSk7XG4gICAgICAgIGRlYnVnUHJpbnRFeGNlcHRpb24oXCJcXG49PT1lbmRfdG9fdHJhY2VfZXhjZXB0aW9uPT09XFxuXCIpO1xuICAgIH1cbn1cbmV4cG9ydCB2YXIgRW51bUd1aWx0eTtcbihmdW5jdGlvbiAoRW51bUd1aWx0eSkge1xuICAgIEVudW1HdWlsdHlbRW51bUd1aWx0eVtcImRldmVsb3BlclwiXSA9IDBdID0gXCJkZXZlbG9wZXJcIjtcbiAgICBFbnVtR3VpbHR5W0VudW1HdWlsdHlbXCJkZXZpY2VcIl0gPSAxXSA9IFwiZGV2aWNlXCI7XG4gICAgRW51bUd1aWx0eVtFbnVtR3VpbHR5W1widXNlclwiXSA9IDJdID0gXCJ1c2VyXCI7XG59KShFbnVtR3VpbHR5IHx8IChFbnVtR3VpbHR5ID0ge30pKTtcbmV4cG9ydCBjbGFzcyBMb2NhbEV4Y2VwdGlvbiBleHRlbmRzIEJhc2VFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHRoaXNDbGFzcywgdmFsdWVXRW51bUd1aWx0eSwga2V5LCBtZXNzYWdlID0gXCJcIikge1xuICAgICAgICBzdXBlcih0aGlzQ2xhc3MsIFwiTG9jYWxFeGNlcHRpb25cIiwga2V5KTtcbiAgICAgICAgdGhpcy52YWx1ZVdFbnVtR3VpbHR5ID0gdmFsdWVXRW51bUd1aWx0eTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5kZWJ1Z1ByaW50RXhjZXB0aW9uV2hlcmVUb1N0cmluZ1BhcmFtZXRlcnNUaGlzQ2xhc3NBbmRFeGNlcHRpb25DbGFzcygpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiTG9jYWxFeGNlcHRpb24odmFsdWVXRW51bUd1aWx0eTogXCIgKyB0aGlzLnZhbHVlV0VudW1HdWlsdHkgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJrZXk6IFwiICsgdGhpcy5rZXkgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJtZXNzYWdlIChvcHRpb25hbCk6IFwiICsgdGhpcy5tZXNzYWdlICsgXCIpXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE5ldHdvcmtFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0aGlzQ2xhc3MsIGtleSwgc3RhdHVzQ29kZSwgbmFtZVN0YXR1c0NvZGUgPSBcIlwiLCBkZXNjcmlwdGlvblN0YXR1c0NvZGUgPSBcIlwiKSB7XG4gICAgICAgIHN1cGVyKHRoaXNDbGFzcywgXCJOZXR3b3JrRXhjZXB0aW9uXCIsIGtleSk7XG4gICAgICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gICAgICAgIHRoaXMubmFtZVN0YXR1c0NvZGUgPSBuYW1lU3RhdHVzQ29kZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblN0YXR1c0NvZGUgPSBkZXNjcmlwdGlvblN0YXR1c0NvZGU7XG4gICAgICAgIHRoaXMuZGVidWdQcmludEV4Y2VwdGlvbldoZXJlVG9TdHJpbmdQYXJhbWV0ZXJzVGhpc0NsYXNzQW5kRXhjZXB0aW9uQ2xhc3MoKTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21LZXlBbmRTdGF0dXNDb2RlKHRoaXNDbGFzcywga2V5LCBzdGF0dXNDb2RlKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgY2FzZSAyMDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDEsIFwiMjAxIENyZWF0ZWRcIiwgXCJUaGUgcmVxdWVzdCBoYXMgYmVlbiBmdWxmaWxsZWQgYW5kIHJlc3VsdGVkIGluIGEgbmV3IHJlc291cmNlIGJlaW5nIGNyZWF0ZWQuXCIpO1xuICAgICAgICAgICAgY2FzZSAyMDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDIsIFwiMjAyIEFjY2VwdGVkXCIsIFwiVGhlIHJlcXVlc3QgaGFzIGJlZW4gYWNjZXB0ZWQgZm9yIHByb2Nlc3NpbmcsIGJ1dCB0aGUgcHJvY2Vzc2luZyBoYXMgbm90IGJlZW4gY29tcGxldGVkLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjAzLCBcIjIwMyBOb24tQXV0aG9yaXRhdGl2ZSBJbmZvcm1hdGlvblwiLCBcIlRoZSByZXR1cm5lZCBtZXRhSW5mb3JtYXRpb24gaW4gdGhlIGVudGl0eS1oZWFkZXIgaXMgbm90IHRoZSBkZWZpbml0aXZlIHNldCBhcyBhdmFpbGFibGUgZnJvbSB0aGUgb3JpZ2luIHNlcnZlciwgYnV0IGlzIGdhdGhlcmVkIGZyb20gYSBsb2NhbCBvciBhIHRoaXJkLXBhcnR5IGNvcHkuXCIpO1xuICAgICAgICAgICAgY2FzZSAyMDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDQsIFwiMjA0IE5vIENvbnRlbnRcIiwgXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYnV0IGRvZXMgbm90IG5lZWQgdG8gcmV0dXJuIGFuIGVudGl0eS1ib2R5LCBhbmQgbWlnaHQgd2FudCB0byByZXR1cm4gdXBkYXRlZCBtZXRhSW5mb3JtYXRpb24uXCIpO1xuICAgICAgICAgICAgY2FzZSAyMDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDUsIFwiMjA1IFJlc2V0IENvbnRlbnRcIiwgXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYW5kIHRoZSB1c2VyIGFnZW50IFNIT1VMRCByZXNldCB0aGUgZG9jdW1lbnQgdmlldyB3aGljaCBjYXVzZWQgdGhlIHJlcXVlc3QgdG8gYmUgc2VudC5cIik7XG4gICAgICAgICAgICBjYXNlIDIwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDIwNiwgXCIyMDYgUGFydGlhbCBDb250ZW50XCIsIFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIHRoZSBwYXJ0aWFsIEdFVCByZXF1ZXN0IGZvciB0aGUgcmVzb3VyY2UuXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDAsIFwiMzAwIE11bHRpcGxlIENob2ljZXNcIiwgXCJVc2VyIChvciB1c2VyIGFnZW50KSBjYW4gc2VsZWN0IGEgcHJlZmVycmVkIHJlcHJlc2VudGF0aW9uIGFuZCByZWRpcmVjdCBpdHMgcmVxdWVzdCB0byB0aGF0IGxvY2F0aW9uLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzAxLCBcIjMwMSBNb3ZlZCBQZXJtYW5lbnRseVwiLCBcIlRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgaGFzIGJlZW4gYXNzaWduZWQgYSBuZXcgcGVybWFuZW50IFVSSSBhbmQgYW55IGZ1dHVyZSByZWZlcmVuY2VzIHRvIHRoaXMgcmVzb3VyY2UgU0hPVUxEIHVzZSBvbmUgb2YgdGhlIHJldHVybmVkIFVSSXMuXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDIsIFwiMzAyIEZvdW5kXCIsIFwiVGhlIHJlcXVlc3RlZCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSS5cIik7XG4gICAgICAgICAgICBjYXNlIDMwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwMywgXCIzMDMgU2VlIE90aGVyXCIsIFwiVGhlIHJlc3BvbnNlIHRvIHRoZSByZXF1ZXN0IGNhbiBiZSBmb3VuZCB1bmRlciBhIGRpZmZlcmVudCBVUkkgYW5kIFNIT1VMRCBiZSByZXRyaWV2ZWQgdXNpbmcgYSBHRVQgbWV0aG9kIG9uIHRoYXQgcmVzb3VyY2UuXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDQsIFwiMzA0IE5vdCBNb2RpZmllZFwiLCBcIklmIHRoZSBjbGllbnQgaGFzIHBlcmZvcm1lZCBhIGNvbmRpdGlvbmFsIEdFVCByZXF1ZXN0IGFuZCBhY2Nlc3MgaXMgYWxsb3dlZCwgYnV0IHRoZSBkb2N1bWVudCBoYXMgbm90IGJlZW4gbW9kaWZpZWQsIHRoZSBzZXJ2ZXIgU0hPVUxEIHJlc3BvbmQgd2l0aCB0aGlzIHN0YXR1cyBjb2RlLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzA1LCBcIjMwNSBVc2UgUHJveHlcIiwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIE1VU1QgYmUgYWNjZXNzZWQgdGhyb3VnaCB0aGUgcHJveHkgZ2l2ZW4gYnkgdGhlIExvY2F0aW9uIGZpZWxkLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzA3LCBcIjMwNyBUZW1wb3JhcnkgUmVkaXJlY3RcIiwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDAwLCBcIjQwMCBCYWQgUmVxdWVzdFwiLCBcIlRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSB1bmRlcnN0b29kIGJ5IHRoZSBzZXJ2ZXIgZHVlIHRvIG1hbGZvcm1lZCBzeW50YXguXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDEsIFwiNDAxIFVuYXV0aG9yaXplZFwiLCBcIlRoZSByZXF1ZXN0IHJlcXVpcmVzIHVzZXIgYXV0aGVudGljYXRpb24uXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDMsIFwiNDAzIEZvcmJpZGRlblwiLCBcIlRoZSBzZXJ2ZXIgdW5kZXJzdG9vZCB0aGUgcmVxdWVzdCwgYnV0IGlzIHJlZnVzaW5nIHRvIGZ1bGZpbGwgaXQuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDQsIFwiNDA0IE5vdCBGb3VuZFwiLCBcIlRoZSBzZXJ2ZXIgaGFzIG5vdCBmb3VuZCBhbnl0aGluZyBtYXRjaGluZyB0aGUgUmVxdWVzdC1VUkkuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDUsIFwiNDA1IE1ldGhvZCBOb3QgQWxsb3dlZCcsJ1RoZSBtZXRob2Qgc3BlY2lmaWVkIGluIHRoZSBSZXF1ZXN0LUxpbmUgaXMgbm90IGFsbG93ZWQgZm9yIHRoZSByZXNvdXJjZSBpZGVudGlmaWVkIGJ5IHRoZSBSZXF1ZXN0LVVSSS5cIik7XG4gICAgICAgICAgICBjYXNlIDQwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwNiwgXCI0MDYgTm90IEFjY2VwdGFibGVcIiwgXCJUaGUgcmVzb3VyY2UgaWRlbnRpZmllZCBieSB0aGUgcmVxdWVzdCBpcyBvbmx5IGNhcGFibGUgb2YgZ2VuZXJhdGluZyByZXNwb25zZSBlbnRpdGllcyB3aGljaCBoYXZlIGNvbnRlbnQgY2hhcmFjdGVyaXN0aWNzIG5vdCBhY2NlcHRhYmxlIGFjY29yZGluZyB0byB0aGUgYWNjZXB0IGhlYWRlcnMgc2VudCBpbiB0aGUgcmVxdWVzdC5cIik7XG4gICAgICAgICAgICBjYXNlIDQwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwNywgXCI0MDcgUHJveHkgQXV0aGVudGljYXRpb24gUmVxdWlyZWRcIiwgXCJUaGlzIGNvZGUgaXMgc2ltaWxhciB0byA0MDEgKFVuYXV0aG9yaXplZCksIGJ1dCBpbmRpY2F0ZXMgdGhhdCB0aGUgY2xpZW50IG11c3QgZmlyc3QgYXV0aGVudGljYXRlIGl0c2VsZiB3aXRoIHRoZSBwcm94eS5cIik7XG4gICAgICAgICAgICBjYXNlIDQwODpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwOCwgXCI0MDggUmVxdWVzdCBUaW1lb3V0XCIsIFwiVGhlIGNsaWVudCBkaWQgbm90IHByb2R1Y2UgYSByZXF1ZXN0IHdpdGhpbiB0aGUgdGltZSB0aGF0IHRoZSBzZXJ2ZXIgd2FzIHByZXBhcmVkIHRvIHdhaXQuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDksIFwiNDA5IENvbmZsaWN0XCIsIFwiVGhlIHJlcXVlc3QgY291bGQgbm90IGJlIGNvbXBsZXRlZCBkdWUgdG8gYSBjb25mbGljdCB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSByZXNvdXJjZS5cIik7XG4gICAgICAgICAgICBjYXNlIDQxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQxMCwgXCI0MTAgR29uZVwiLCBcIlRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZSBhdCB0aGUgc2VydmVyIGFuZCBubyBmb3J3YXJkaW5nIGFkZHJlc3MgaXMga25vd24uXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTEsIFwiNDExIExlbmd0aCBSZXF1aXJlZFwiLCBcIlRoZSBzZXJ2ZXIgcmVmdXNlcyB0byBhY2NlcHQgdGhlIHJlcXVlc3Qgd2l0aG91dCBhIGRlZmluZWQgQ29udGVudC1MZW5ndGguXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTIsIFwiNDEyIFByZWNvbmRpdGlvbiBGYWlsZWRcIiwgXCJUaGUgcHJlY29uZGl0aW9uIGdpdmVuIGluIG9uZSBvciBtb3JlIG9mIHRoZSByZXF1ZXN0LWhlYWRlciBmaWVsZHMgZXZhbHVhdGVkIHRvIGZhbHNlIHdoZW4gaXQgd2FzIHRlc3RlZCBvbiB0aGUgc2VydmVyLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDEzLCBcIjQxMyBSZXF1ZXN0IEVudGl0eSBUb28gTGFyZ2VcIiwgXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHByb2Nlc3MgYSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlcXVlc3QgZW50aXR5IGlzIGxhcmdlciB0aGFuIHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyBvciBhYmxlIHRvIHByb2Nlc3MuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTQsIFwiNDE0IFJlcXVlc3QtVVJJIFRvbyBMb25nXCIsIFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBzZXJ2aWNlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIFJlcXVlc3QtVVJJIGlzIGxvbmdlciB0aGFuIHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyB0byBpbnRlcnByZXQuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTUsIFwiNDE1IFVuc3VwcG9ydGVkIE1lZGlhIFR5cGVcIiwgXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHNlcnZpY2UgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgZW50aXR5IG9mIHRoZSByZXF1ZXN0IGlzIGluIGEgZm9ybWF0IG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHJlcXVlc3RlZCByZXNvdXJjZSBmb3IgdGhlIHJlcXVlc3RlZCBtZXRob2QuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTYsIFwiNDE2IFJlcXVlc3RlZCBSYW5nZSBOb3QgU2F0aXNmaWFibGVcIiwgXCJBIHNlcnZlciBTSE9VTEQgcmV0dXJuIGEgcmVzcG9uc2Ugd2l0aCB0aGlzIHN0YXR1cyBjb2RlIGlmIGEgcmVxdWVzdCBpbmNsdWRlZCBhIFJhbmdlIHJlcXVlc3QtaGVhZGVyIGZpZWxkIChzZWN0aW9uIDE0LjM1KSwgYW5kIG5vbmUgb2YgdGhlIHJhbmdlLXNwZWNpZmllciB2YWx1ZXMgaW4gdGhpcyBmaWVsZCBvdmVybGFwIHRoZSBjdXJyZW50IGV4dGVudCBvZiB0aGUgc2VsZWN0ZWQgcmVzb3VyY2UsIGFuZCB0aGUgcmVxdWVzdCBkaWQgbm90IGluY2x1ZGUgYW4gSWYtUmFuZ2UgcmVxdWVzdC1oZWFkZXIgZmllbGQuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTcsIFwiNDE3IEV4cGVjdGF0aW9uIEZhaWxlZFwiLCBcIlRoZSBleHBlY3RhdGlvbiBnaXZlbiBpbiBhbiBFeHBlY3QgcmVxdWVzdC1oZWFkZXIgZmllbGQgKHNlZSBzZWN0aW9uIDE0LjIwKSBjb3VsZCBub3QgYmUgbWV0IGJ5IHRoaXMgc2VydmVyLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTAwLCBcIjUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiwgXCJUaGUgc2VydmVyIGVuY291bnRlcmVkIGFuIHVuZXhwZWN0ZWQgY29uZGl0aW9uIHdoaWNoIHByZXZlbnRlZCBpdCBmcm9tIGZ1bGZpbGxpbmcgdGhlIHJlcXVlc3QuXCIpO1xuICAgICAgICAgICAgY2FzZSA1MDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA1MDEsIFwiNTAxIE5vdCBJbXBsZW1lbnRlZFwiLCBcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgZnVuY3Rpb25hbGl0eSBpbnRlcmZhY2VfZnVuY3Rpb25fdmlld19tb2RlbCB0byBmdWxmaWxsIHRoZSByZXF1ZXN0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTAyLCBcIjUwMiBCYWQgR2F0ZXdheVwiLCBcIlRoZSBzZXJ2ZXIsIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHksIHJlY2VpdmVkIGFuIGludmFsaWQgcmVzcG9uc2UgZnJvbSB0aGUgdXBzdHJlYW0gc2VydmVyIGl0IGFjY2Vzc2VkIGluIGF0dGVtcHRpbmcgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cIik7XG4gICAgICAgICAgICBjYXNlIDUwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDUwMywgXCI1MDMgU2VydmljZSBVbmF2YWlsYWJsZVwiLCBcIlRoZSBzZXJ2ZXIgaXMgY3VycmVudGx5IHVuYWJsZSB0byBoYW5kbGUgdGhlIHJlcXVlc3QgZHVlIHRvIGEgdGVtcG9yYXJ5IG92ZXJsb2FkaW5nIG9yIG1haW50ZW5hbmNlIG9mIHRoZSBzZXJ2ZXIuXCIpO1xuICAgICAgICAgICAgY2FzZSA1MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA1MDQsIFwiNTA0IEdhdGV3YXkgVGltZW91dFwiLCBcIlRoZSBzZXJ2ZXIsIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHksIGRpZCBub3QgcmVjZWl2ZSBhIHRpbWVseSByZXNwb25zZSBmcm9tIHRoZSB1cHN0cmVhbSBzZXJ2ZXIgc3BlY2lmaWVkIGJ5IHRoZSBVUkkuXCIpO1xuICAgICAgICAgICAgY2FzZSA1MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA1MDUsIFwiNTA1IEhUVFAgVmVyc2lvbiBOb3QgU3VwcG9ydGVkXCIsIFwiVGhlIHNlcnZlciBkb2VzIG5vdCBzdXBwb3J0LCBvciByZWZ1c2VzIHRvIHN1cHBvcnQsIHRoZSBIVFRQIHByb3RvY29sIHZlcnNpb24gdGhhdCB3YXMgdXNlZCBpbiB0aGUgcmVxdWVzdCBtZXNzYWdlLlwiKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiTmV0d29ya0V4Y2VwdGlvbihrZXk6IFwiICsgdGhpcy5rZXkgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJzdGF0dXNDb2RlOiBcIiArIHRoaXMuc3RhdHVzQ29kZSArIFwiLCBcIiArXG4gICAgICAgICAgICBcIm5hbWVTdGF0dXNDb2RlIChvcHRpb25hbCk6IFwiICsgdGhpcy5uYW1lU3RhdHVzQ29kZSArIFwiLCBcIiArXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uU3RhdHVzQ29kZSAob3B0aW9uYWwpOiBcIiArIHRoaXMuZGVzY3JpcHRpb25TdGF0dXNDb2RlICsgXCIpXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEN1cnJlbnRNb2RlbFdJbmRleCB7XG4gICAgY29uc3RydWN0b3IoY3VycmVudE1vZGVsLCBpbmRleCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNb2RlbCA9IGN1cnJlbnRNb2RlbDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTW9kZWxXTmFtZWRXTmFtZWRXTmFtZWRJdGVyYXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsSXRlcmF0b3IgPSBuZXcgQXJyYXkoKTtcbiAgICB9XG4gICAgZ2V0U29ydGVkTGlzdE1vZGVsRnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbEl0ZXJhdG9yKG5ld0xpc3RNb2RlbCkge1xuICAgICAgICBpZiAobmV3TGlzdE1vZGVsLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXN0TW9kZWxJdGVyYXRvci5wdXNoKC4uLm5ld0xpc3RNb2RlbCk7XG4gICAgICAgIGNvbnN0IG5ld0xpc3RNb2RlbEZpcnN0ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmxpc3RNb2RlbEl0ZXJhdG9yLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRNb2RlbFdJbmRleCA9IHRoaXMuY3VycmVudE1vZGVsV0luZGV4O1xuICAgICAgICAgICAgdGhpcy5saXN0TW9kZWxJdGVyYXRvci5zcGxpY2UoY3VycmVudE1vZGVsV0luZGV4LmluZGV4LCAxKTtcbiAgICAgICAgICAgIG5ld0xpc3RNb2RlbEZpcnN0LnB1c2goY3VycmVudE1vZGVsV0luZGV4LmN1cnJlbnRNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0xpc3RNb2RlbEZpcnN0O1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTGlzdE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihsaXN0TW9kZWwpIHtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwgPSBsaXN0TW9kZWw7XG4gICAgfVxuICAgIHNvcnRpbmdGcm9tTW9kZWxXTmFtZWRXTmFtZWRXTmFtZWRJdGVyYXRvclBhcmFtZXRlckxpc3RNb2RlbChtb2RlbFdOYW1lZFdOYW1lZFdOYW1lZEl0ZXJhdG9yKSB7XG4gICAgICAgIGNvbnN0IHNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvciA9IG1vZGVsV05hbWVkV05hbWVkV05hbWVkSXRlcmF0b3IuZ2V0U29ydGVkTGlzdE1vZGVsRnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbEl0ZXJhdG9yKHRoaXMubGlzdE1vZGVsKTtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwubGVuZ3RoID4gMCA/IHRoaXMubGlzdE1vZGVsLnNwbGljZSgwLCB0aGlzLmxpc3RNb2RlbC5sZW5ndGgpIDogbnVsbDtcbiAgICAgICAgc29ydGVkTGlzdE1vZGVsRnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbEl0ZXJhdG9yLmxlbmd0aCA+IDAgPyB0aGlzLmxpc3RNb2RlbC5wdXNoKC4uLnNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvcikgOiBudWxsO1xuICAgIH1cbiAgICBpbnNlcnRGcm9tTmV3TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobmV3TW9kZWwpIHtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwucHVzaChuZXdNb2RlbCk7XG4gICAgfVxuICAgIHVwZGF0ZUZyb21OZXdNb2RlbFBhcmFtZXRlckxpc3RNb2RlbChuZXdNb2RlbCkge1xuICAgICAgICBjb25zdCBmaW5kSW5kZXggPSB0aGlzLmxpc3RNb2RlbC5maW5kSW5kZXgoKGl0ZW1Nb2RlbCkgPT4gaXRlbU1vZGVsLnVuaXF1ZUlkID09IG5ld01vZGVsLnVuaXF1ZUlkKTtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwuc3BsaWNlKGZpbmRJbmRleCwgMSwgbmV3TW9kZWwpO1xuICAgIH1cbiAgICBkZWxldGVGcm9tVW5pcXVlSWRCeU1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsKHVuaXF1ZUlkQnlNb2RlbCkge1xuICAgICAgICBjb25zdCBmaW5kSW5kZXggPSB0aGlzLmxpc3RNb2RlbC5maW5kSW5kZXgoKGl0ZW1Nb2RlbCkgPT4gaXRlbU1vZGVsLnVuaXF1ZUlkID09IHVuaXF1ZUlkQnlNb2RlbCk7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLnNwbGljZShmaW5kSW5kZXgsIDEpO1xuICAgIH1cbiAgICBpbnNlcnRMaXN0RnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbChuZXdMaXN0TW9kZWwpIHtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwucHVzaCguLi5uZXdMaXN0TW9kZWwpO1xuICAgIH1cbiAgICB1cGRhdGVMaXN0RnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbChuZXdMaXN0TW9kZWwpIHtcbiAgICAgICAgZm9yIChjb25zdCBuZXdJdGVtTW9kZWwgb2YgbmV3TGlzdE1vZGVsKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5kSW5kZXggPSB0aGlzLmxpc3RNb2RlbC5maW5kSW5kZXgoKGl0ZW1Nb2RlbCkgPT4gaXRlbU1vZGVsLnVuaXF1ZUlkID09IG5ld0l0ZW1Nb2RlbC51bmlxdWVJZCk7XG4gICAgICAgICAgICB0aGlzLmxpc3RNb2RlbC5zcGxpY2UoZmluZEluZGV4LCAxLCBuZXdJdGVtTW9kZWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlbGV0ZUxpc3RGcm9tTGlzdFVuaXF1ZUlkQnlNb2RlbFBhcmFtZXRlckxpc3RNb2RlbChsaXN0VW5pcXVlSWRCeU1vZGVsKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbVVuaXF1ZUlkQnlNb2RlbCBvZiBsaXN0VW5pcXVlSWRCeU1vZGVsKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5kSW5kZXggPSB0aGlzLmxpc3RNb2RlbC5maW5kSW5kZXgoKGl0ZW1Nb2RlbCkgPT4gaXRlbU1vZGVsLnVuaXF1ZUlkID09IGl0ZW1VbmlxdWVJZEJ5TW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5saXN0TW9kZWwuc3BsaWNlKGZpbmRJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsIHtcbiAgICBjb25zdHJ1Y3Rvcih1bmlxdWVJZCkge1xuICAgICAgICB0aGlzLnVuaXF1ZUlkID0gdW5pcXVlSWQ7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VOYW1lZFN0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRGVmYXVsdFN0YXRlIGV4dGVuZHMgQmFzZU5hbWVkU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGFGb3JOYW1lZCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzRGlzcG9zZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRhdGFGb3JOYW1lZCA9IGRhdGFGb3JOYW1lZDtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2UgPSB0cnVlO1xuICAgIH1cbiAgICBnZXQgZ2V0RGF0YUZvck5hbWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhRm9yTmFtZWQ7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VOYW1lZFN0cmVhbVdTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIERlZmF1bHRTdHJlYW1XU3RhdGUgZXh0ZW5kcyBCYXNlTmFtZWRTdHJlYW1XU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGFGb3JOYW1lZCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzRGlzcG9zZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRhdGFGb3JOYW1lZCA9IGRhdGFGb3JOYW1lZDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICAgIGdldCBnZXREYXRhRm9yTmFtZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFGb3JOYW1lZDtcbiAgICB9XG4gICAgbGlzdGVuU3RyZWFtRGF0YUZvck5hbWVkRnJvbUNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVwiLCBFbnVtR3VpbHR5LmRldmVsb3BlciwgXCJEZWZhdWx0U3RyZWFtV1N0YXRlUVFMaXN0ZW5TdHJlYW1EYXRhRm9yTmFtZWRGcm9tQ2FsbGJhY2tcIiwgXCJBbHJlYWR5IGRpc3Bvc2VkIG9mXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIkRlZmF1bHRTdHJlYW1XU3RhdGVcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVFRTGlzdGVuU3RyZWFtRGF0YUZvck5hbWVkRnJvbUNhbGxiYWNrXCIsIFwiRHVwbGljYXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgbm90aWZ5U3RyZWFtRGF0YUZvck5hbWVkKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIkRlZmF1bHRTdHJlYW1XU3RhdGVcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVFRTm90aWZ5U3RyZWFtRGF0YUZvck5hbWVkXCIsIFwiQWxyZWFkeSBkaXNwb3NlZCBvZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjayA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJEZWZhdWx0U3RyZWFtV1N0YXRlXCIsIEVudW1HdWlsdHkuZGV2ZWxvcGVyLCBcIkRlZmF1bHRTdHJlYW1XU3RhdGVRUU5vdGlmeVN0cmVhbURhdGFGb3JOYW1lZFwiLCBcIlN0cmVhbSBoYXMgbm8gbGlzdGVuZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmRhdGFGb3JOYW1lZCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRlbXBDYWNoZVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRlbXBDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy50ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgc3RhdGljIGNsZWFyVGVtcENhY2hlUGFybWV0ZXJJbnN0YW5jZSgpIHtcbiAgICAgICAgY29uc3QgdGVtcENhY2hlID0gdGhpcy5pbnN0YW5jZS50ZW1wQ2FjaGU7XG4gICAgICAgIHRlbXBDYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICBzdGF0aWMgY2xvc2VTdHJlYW1Gcm9tS2V5VGVtcENhY2hlUGFybWV0ZXJJbnN0YW5jZShrZXlUZW1wQ2FjaGUpIHtcbiAgICAgICAgY29uc3QgdGVtcENhY2hlV0xpc3RBY3Rpb24gPSB0aGlzLmluc3RhbmNlLnRlbXBDYWNoZVdMaXN0QWN0aW9uO1xuICAgICAgICBpZiAoIXRlbXBDYWNoZVdMaXN0QWN0aW9uLmhhcyhrZXlUZW1wQ2FjaGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2V0ID0gdGVtcENhY2hlV0xpc3RBY3Rpb24uZ2V0KGtleVRlbXBDYWNoZSk7XG4gICAgICAgIGdldCA9PT0gbnVsbCB8fCBnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdldC5zcGxpY2UoMCwgZ2V0Lmxlbmd0aCk7XG4gICAgfVxuICAgIHN0YXRpYyBjbG9zZVN0cmVhbUZyb21MaXN0S2V5VGVtcENhY2hlUGFybWV0ZXJJbnN0YW5jZShsaXN0S2V5VGVtcENhY2hlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZVdMaXN0QWN0aW9uID0gdGhpcy5pbnN0YW5jZS50ZW1wQ2FjaGVXTGlzdEFjdGlvbjtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtS2V5VGVtcENhY2hlIG9mIGxpc3RLZXlUZW1wQ2FjaGUpIHtcbiAgICAgICAgICAgIGlmICghdGVtcENhY2hlV0xpc3RBY3Rpb24uaGFzKGl0ZW1LZXlUZW1wQ2FjaGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZ2V0ID0gdGVtcENhY2hlV0xpc3RBY3Rpb24uZ2V0KGl0ZW1LZXlUZW1wQ2FjaGUpO1xuICAgICAgICAgICAgZ2V0ID09PSBudWxsIHx8IGdldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2V0LnNwbGljZSgwLCBnZXQubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgY2xvc2VTdHJlYW1zUGFyYW1ldGVySW5zdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZVdMaXN0QWN0aW9uID0gdGhpcy5pbnN0YW5jZS50ZW1wQ2FjaGVXTGlzdEFjdGlvbjtcbiAgICAgICAgZm9yIChjb25zdCBbLCB2YWx1ZV0gb2YgdGVtcENhY2hlV0xpc3RBY3Rpb24pIHtcbiAgICAgICAgICAgIHZhbHVlLnNwbGljZSgwLCB2YWx1ZS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEZyb21LZXlUZW1wQ2FjaGVQYXJhbWV0ZXJUZW1wQ2FjaGUoa2V5VGVtcENhY2hlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZSA9IHRoaXMudGVtcENhY2hlO1xuICAgICAgICBpZiAoIXRlbXBDYWNoZS5oYXMoa2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiVGVtcENhY2hlU2VydmljZVwiLCBFbnVtR3VpbHR5LmRldmVsb3Blciwga2V5VGVtcENhY2hlLCBcIk5vIGV4aXN0cyBrZXlcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBDYWNoZS5nZXQoa2V5VGVtcENhY2hlKTtcbiAgICB9XG4gICAgbGlzdGVuU3RyZWFtRnJvbUtleVRlbXBDYWNoZUFuZENhbGxiYWNrUGFyYW1ldGVyT25lKGtleVRlbXBDYWNoZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgdGVtcENhY2hlV0xpc3RBY3Rpb24gPSB0aGlzLnRlbXBDYWNoZVdMaXN0QWN0aW9uO1xuICAgICAgICBpZiAoIXRlbXBDYWNoZVdMaXN0QWN0aW9uLmhhcyhrZXlUZW1wQ2FjaGUpKSB7XG4gICAgICAgICAgICB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5zZXQoa2V5VGVtcENhY2hlLCBuZXcgQXJyYXkoKSk7XG4gICAgICAgICAgICAoX2EgPSB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5nZXQoa2V5VGVtcENhY2hlKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIChfYiA9IHRlbXBDYWNoZVdMaXN0QWN0aW9uLmdldChrZXlUZW1wQ2FjaGUpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIHVwZGF0ZUZyb21LZXlUZW1wQ2FjaGVBbmRWYWx1ZVBhcmFtZXRlclRlbXBDYWNoZShrZXlUZW1wQ2FjaGUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMudGVtcENhY2hlLnNldChrZXlUZW1wQ2FjaGUsIHZhbHVlKTtcbiAgICB9XG4gICAgdXBkYXRlV2hlcmVTdHJlYW1Ob3RpZmljYXRpb25Jc1Bvc3NpYmxlRnJvbUtleVRlbXBDYWNoZUFuZFZhbHVlUGFyYW1ldGVyT25lKGtleVRlbXBDYWNoZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGcm9tS2V5VGVtcENhY2hlQW5kVmFsdWVQYXJhbWV0ZXJUZW1wQ2FjaGUoa2V5VGVtcENhY2hlLCB2YWx1ZSk7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZVdMaXN0QWN0aW9uID0gdGhpcy50ZW1wQ2FjaGVXTGlzdEFjdGlvbjtcbiAgICAgICAgaWYgKCF0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5oYXMoa2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdldCA9IHRlbXBDYWNoZVdMaXN0QWN0aW9uLmdldChrZXlUZW1wQ2FjaGUpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW1HZXQgb2YgZ2V0KSB7XG4gICAgICAgICAgICBpdGVtR2V0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWxldGVGcm9tS2V5VGVtcENhY2hlUGFyYW1ldGVyVGVtcENhY2hlKGtleVRlbXBDYWNoZSkge1xuICAgICAgICB0aGlzLnRlbXBDYWNoZS5kZWxldGUoa2V5VGVtcENhY2hlKTtcbiAgICB9XG59XG5UZW1wQ2FjaGVTZXJ2aWNlLmluc3RhbmNlID0gbmV3IFRlbXBDYWNoZVNlcnZpY2UoKTtcbmV4cG9ydCB2YXIgRW51bVJXVE1vZGU7XG4oZnVuY3Rpb24gKEVudW1SV1RNb2RlKSB7XG4gICAgRW51bVJXVE1vZGVbRW51bVJXVE1vZGVbXCJyZWxlYXNlXCJdID0gMF0gPSBcInJlbGVhc2VcIjtcbiAgICBFbnVtUldUTW9kZVtFbnVtUldUTW9kZVtcInRlc3RcIl0gPSAxXSA9IFwidGVzdFwiO1xufSkoRW51bVJXVE1vZGUgfHwgKEVudW1SV1RNb2RlID0ge30pKTtcbmV4cG9ydCBjbGFzcyBCYXNlTW9kZWxSZXBvc2l0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgZ2V0TW9kZUNhbGxiYWNrRnJvbVJlbGVhc2VDYWxsYmFja0FuZFRlc3RDYWxsYmFja1BhcmFtZXRlckVudW1SV1RNb2RlKHJlbGVhc2VDYWxsYmFjaywgdGVzdENhbGxiYWNrKSB7XG4gICAgICAgIHN3aXRjaCAoQmFzZU1vZGVsUmVwb3NpdG9yeS5lbnVtUldUTW9kZSkge1xuICAgICAgICAgICAgY2FzZSBFbnVtUldUTW9kZS5yZWxlYXNlOlxuICAgICAgICAgICAgICAgIHJldHVybiByZWxlYXNlQ2FsbGJhY2s7XG4gICAgICAgICAgICBjYXNlIEVudW1SV1RNb2RlLnRlc3Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3RDYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRTYWZlVmFsdWVXaGVyZVVzZWRJbk1ldGhvZEdldE1vZGVsRnJvbU1hcEFuZExpc3RLZXlzQW5kSW5kZXhBbmREZWZhdWx0VmFsdWUobWFwLCBsaXN0S2V5cywgaW5kZXgsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIG1hcC5oYXMobGlzdEtleXNbaW5kZXhdKSA/IG1hcC5nZXQobGlzdEtleXNbaW5kZXhdKSA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuQmFzZU1vZGVsUmVwb3NpdG9yeS5lbnVtUldUTW9kZSA9IEVudW1SV1RNb2RlLnRlc3Q7XG5leHBvcnQgY2xhc3MgRXhjZXB0aW9uQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoZXhjZXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9uID0gZXhjZXB0aW9uO1xuICAgIH1cbiAgICBzdGF0aWMgc3VjY2VzcygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFeGNlcHRpb25Db250cm9sbGVyKG51bGwpO1xuICAgIH1cbiAgICBzdGF0aWMgZXhjZXB0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IEV4Y2VwdGlvbkNvbnRyb2xsZXIoZXhjZXB0aW9uKTtcbiAgICB9XG4gICAgZ2V0IGdldEtleVBhcmFtZXRlckV4Y2VwdGlvbigpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMuZXhjZXB0aW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eua2V5KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiO1xuICAgIH1cbiAgICBpc1doZXJlTm90RXF1YWxzTnVsbFBhcmFtZXRlckV4Y2VwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhjZXB0aW9uICE9IG51bGw7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5leGNlcHRpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiRXhjZXB0aW9uQ29udHJvbGxlcihleGNlcHRpb246IG51bGwpXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiRXhjZXB0aW9uQ29udHJvbGxlcihleGNlcHRpb246IFwiICsgdGhpcy5leGNlcHRpb24gKyBcIilcIjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmVzdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXIsIGV4Y2VwdGlvbkNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXIgPSBwYXJhbWV0ZXI7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9uQ29udHJvbGxlciA9IGV4Y2VwdGlvbkNvbnRyb2xsZXI7XG4gICAgfVxuICAgIHN0YXRpYyBzdWNjZXNzKHBhcmFtZXRlcikge1xuICAgICAgICByZXR1cm4gbmV3IFJlc3VsdChwYXJhbWV0ZXIsIEV4Y2VwdGlvbkNvbnRyb2xsZXIuc3VjY2VzcygpKTtcbiAgICB9XG4gICAgc3RhdGljIGV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXN1bHQobnVsbCwgRXhjZXB0aW9uQ29udHJvbGxlci5leGNlcHRpb24oZXhjZXB0aW9uKSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnUHJpbnQodGV4dCkge1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnUHJpbnRFeGNlcHRpb24odGV4dCkge1xuICAgIGRlYnVnUHJpbnQoXCJcXHgxQlszMW1cIiArIHRleHQgKyBcIlxceDFiWzBtXCIpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBMb2NhbEV4Y2VwdGlvbiwgRW51bUd1aWx0eSwgQmFzZU1vZGVsLCBCYXNlTGlzdE1vZGVsLCBSZXN1bHQsIE5ldHdvcmtFeGNlcHRpb24sIEJhc2VEYXRhRm9yTmFtZWQsIERlZmF1bHRTdHJlYW1XU3RhdGUsIGRlYnVnUHJpbnQsIEV4Y2VwdGlvbkNvbnRyb2xsZXIsIEJhc2VOYW1lZFN0cmVhbVdTdGF0ZSwgQmFzZU1vZGVsUmVwb3NpdG9yeSwgRW51bVJXVE1vZGUgfSBmcm9tIFwibGlicmFyeV9hcmNoaXRlY3R1cmVfbXZ2bV9tb2RpZnlfamF2YXNjcmlwdFwiO1xyXG5cclxuY2xhc3MgRmFjdG9yeU9iamVjdFV0aWxpdHkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKG5ldy50YXJnZXQgPT09IEZhY3RvcnlPYmplY3RVdGlsaXR5KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIkZhY3RvcnlPYmplY3RVdGlsaXR5XCIsRW51bUd1aWx0eS5kZXZlbG9wZXIsXCJGYWN0b3J5T2JqZWN0VXRpbGl0eVFRQ29uc3RydWN0b3JcIixcIlRoaXMgY2xhc3MgaXMgc3RhdGljLCB0aGVyZSBpcyBubyBwb2ludCBpbiBjYWxsaW5nIGFuIG9iamVjdCBhbmQgaW5oZXJpdGFuY2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBNb2RlbFJlcG9zaXRvcnkgKi9cclxuICAgIHN0YXRpYyBnZXQgZ2V0SVBBZGRyZXNzUmVwb3NpdG9yeSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IElQQWRkcmVzc1JlcG9zaXRvcnkoKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUmVhZHlEYXRhVXRpbGl0eSB7XHJcbiAgICBzdGF0aWMgI3N1Y2Nlc3MgPSBcInN1Y2Nlc3NcIjtcclxuICAgIHN0YXRpYyAjdW5rbm93biA9IFwidW5rbm93blwiO1xyXG4gICAgc3RhdGljICNpUEFQSSA9IFwiaHR0cHM6Ly9qc29uaXAuY29tL1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmIChuZXcudGFyZ2V0ID09PSBSZWFkeURhdGFVdGlsaXR5KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIlJlYWR5RGF0YVV0aWxpdHlcIixFbnVtR3VpbHR5LmRldmVsb3BlcixcIlJlYWR5RGF0YVV0aWxpdHlRUUNvbnN0cnVjdG9yXCIsXCJUaGlzIGNsYXNzIGlzIHN0YXRpYywgdGhlcmUgaXMgbm8gcG9pbnQgaW4gY2FsbGluZyBhbiBvYmplY3QgYW5kIGluaGVyaXRhbmNlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGdldCBzdWNjZXNzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNzdWNjZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgdW5rbm93bigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jdW5rbm93bjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGlQQVBJKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNpUEFQSTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eSB7XHJcbiAgICAvKiBJUEFkZHJlc3MgKi9cclxuICAgIHN0YXRpYyAjaVBBZGRyZXNzUVFJcCA9IFwiaXBcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAobmV3LnRhcmdldCA9PT0gS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJLZXlzSHR0cFNlcnZpY2VVdGlsaXR5XCIsRW51bUd1aWx0eS5kZXZlbG9wZXIsXCJLZXlzSHR0cFNlcnZpY2VVdGlsaXR5UVFDb25zdHJ1Y3RvclwiLFwiVGhpcyBjbGFzcyBpcyBzdGF0aWMsIHRoZXJlIGlzIG5vIHBvaW50IGluIGNhbGxpbmcgYW4gb2JqZWN0IGFuZCBpbmhlcml0YW5jZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBpUEFkZHJlc3NRUUlwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNpUEFkZHJlc3NRUUlwO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBJUEFkZHJlc3MgZXh0ZW5kcyBCYXNlTW9kZWwge1xyXG4gICAgI2lwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlwKSB7XHJcbiAgICAgICAgc3VwZXIoXCJcIiArIGlwICsgXCJcIik7XHJcbiAgICAgICAgdGhpcy4jaXAgPSBpcDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0Q2xvbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJUEFkZHJlc3ModGhpcy5pcCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiSVBBZGRyZXNzKGlwOiBcIiArIHRoaXMuaXAgKyBcIilcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lwO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBMaXN0SVBBZGRyZXNzIGV4dGVuZHMgQmFzZUxpc3RNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihsaXN0TW9kZWwpIHtcclxuICAgICAgICBzdXBlcihsaXN0TW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBnZXRDbG9uZSgpIHtcclxuICAgICAgICBjb25zdCBuZXdMaXN0TW9kZWwgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IoY29uc3QgaXRlbU1vZGVsIG9mIHRoaXMubGlzdE1vZGVsKSB7XHJcbiAgICAgICAgICAgIG5ld0xpc3RNb2RlbC5wdXNoKGl0ZW1Nb2RlbC5nZXRDbG9uZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgTGlzdElQQWRkcmVzcyhuZXdMaXN0TW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGxldCBzdHJMaXN0TW9kZWwgPSBcIlxcblwiO1xyXG4gICAgICAgIGZvcihjb25zdCBpdGVtTW9kZWwgb2YgdGhpcy5saXN0TW9kZWwpIHtcclxuICAgICAgICAgICAgc3RyTGlzdE1vZGVsICs9IGl0ZW1Nb2RlbC50b1N0cmluZygpICsgXCIsXFxuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIkxpc3RJUEFkZHJlc3MobGlzdE1vZGVsOiBbXCIgKyBzdHJMaXN0TW9kZWwgKyBcIl0pXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBUaGlzIGNsYXNzIG5lZWRzIHRvIGJlIGNhbGxlZCB3aGVyZSB0aGVyZSBhcmUgbmV0d29yayByZXF1ZXN0cyAoaW4gdGhlIGRhdGEgc291cmNlKSwgXHJcbi8vLyBzaW5jZSB3aXRob3V0IHRoaXMgY2xhc3MgdGhlIGRldmVsb3BlciB3aWxsIG5vdCBrbm93IGluIHdoaWNoIGNsYXNzIHRoZSBuZXR3b3JrIHJlcXVlc3RzIGFyZVxyXG5jbGFzcyBIdHRwU2VydmljZSB7XHJcbiAgICBzdGF0aWMgaW5zdGFuY2UgPSBuZXcgSHR0cFNlcnZpY2UoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZihIdHRwU2VydmljZS5pbnN0YW5jZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBIdHRwU2VydmljZS5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIElQQWRkcmVzc1JlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlTW9kZWxSZXBvc2l0b3J5IHtcclxuICAgICNodHRwU2VydmljZSA9IEh0dHBTZXJ2aWNlLmluc3RhbmNlO1xyXG5cclxuICAgIF9nZXRCYXNlTW9kZWxGcm9tTWFwQW5kTGlzdEtleXMobWFwLGxpc3RLZXlzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJUEFkZHJlc3MoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2FmZVZhbHVlV2hlcmVVc2VkSW5NZXRob2RHZXRNb2RlbEZyb21NYXBBbmRMaXN0S2V5c0FuZEluZGV4QW5kRGVmYXVsdFZhbHVlKFxyXG4gICAgICAgICAgICAgICAgbWFwLCBsaXN0S2V5cywgMCwgXCJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRCYXNlTGlzdE1vZGVsRnJvbUxpc3RNb2RlbChsaXN0TW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IExpc3RJUEFkZHJlc3MobGlzdE1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRNb2RlQ2FsbGJhY2tGcm9tUmVsZWFzZUNhbGxiYWNrQW5kVGVzdENhbGxiYWNrUGFyYW1ldGVyRW51bVJXVE1vZGUoXHJcbiAgICAgICAgICAgIHRoaXMuX2dldElQQWRkcmVzc1BhcmFtZXRlckh0dHBTZXJ2aWNlV1JlbGVhc2VDYWxsYmFjayxcclxuICAgICAgICAgICAgdGhpcy5fZ2V0SVBBZGRyZXNzUGFyYW1ldGVySHR0cFNlcnZpY2VXVGVzdENhbGxiYWNrKSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBfaHR0cFNlcnZpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2h0dHBTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZVdSZWxlYXNlQ2FsbGJhY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChSZWFkeURhdGFVdGlsaXR5LmlQQVBJLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IE5ldHdvcmtFeGNlcHRpb24uZnJvbUtleUFuZFN0YXR1c0NvZGUoXCJJUEFkZHJlc3NSZXBvc2l0b3J5XCIscmVzcG9uc2Uuc3RhdHVzLnRvU3RyaW5nKCkscmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKGpzb24pKTtcclxuICAgICAgICAgICAgcmV0dXJuIFJlc3VsdC5zdWNjZXNzKHRoaXMuX2dldEJhc2VNb2RlbEZyb21NYXBBbmRMaXN0S2V5cyhcclxuICAgICAgICAgICAgICAgIG1hcCxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dldElQQWRkcmVzc1BhcmFtZXRlckh0dHBDbGllbnRTZXJ2aWNlV0xpc3RLZXlzKCkpKTtcclxuICAgICAgICB9IGNhdGNoKGV4Y2VwdGlvbikge1xyXG4gICAgICAgICAgICBpZihleGNlcHRpb24gaW5zdGFuY2VvZiBOZXR3b3JrRXhjZXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVzdWx0LmV4Y2VwdGlvbihleGNlcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBSZXN1bHQuZXhjZXB0aW9uKG5ldyBMb2NhbEV4Y2VwdGlvbihcIklQQWRkcmVzc1JlcG9zaXRvcnlcIixFbnVtR3VpbHR5LmRldmljZSxSZWFkeURhdGFVdGlsaXR5LnVua25vd24sZXhjZXB0aW9uLnRvU3RyaW5nKCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9nZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZVdUZXN0Q2FsbGJhY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsMTAwMCkpO1xyXG4gICAgICAgIHJldHVybiBSZXN1bHQuc3VjY2Vzcyh0aGlzLl9nZXRCYXNlTW9kZWxGcm9tTWFwQW5kTGlzdEtleXMoXHJcbiAgICAgICAgICAgIG5ldyBNYXAoW1xyXG4gICAgICAgICAgICAgICAgW0tleXNIdHRwU2VydmljZVV0aWxpdHkuaVBBZGRyZXNzUVFJcCxcIjEyMS4xMjEuMTIuMTJcIl1cclxuICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgIHRoaXMuX2dldElQQWRkcmVzc1BhcmFtZXRlckh0dHBDbGllbnRTZXJ2aWNlV0xpc3RLZXlzKCkpKTtcclxuICAgIH07XHJcblxyXG4gICAgX2dldElQQWRkcmVzc1BhcmFtZXRlckh0dHBDbGllbnRTZXJ2aWNlV0xpc3RLZXlzKCkge1xyXG4gICAgICAgIHJldHVybiBbS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eS5pUEFkZHJlc3NRUUlwXTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgRW51bURhdGFGb3JNYWluVk0gPSB7XHJcbiAgICBpc0xvYWRpbmcgOiBcImlzTG9hZGluZ1wiLFxyXG4gICAgZXhjZXB0aW9uIDogXCJleGNlcHRpb25cIixcclxuICAgIHN1Y2Nlc3MgOiBcInN1Y2Nlc3NcIixcclxufTtcclxuXHJcbmNsYXNzIERhdGFGb3JNYWluVk0gZXh0ZW5kcyBCYXNlRGF0YUZvck5hbWVkIHtcclxuICAgIGlQQWRkcmVzczsgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlzTG9hZGluZyxpUEFkZHJlc3MpIHtcclxuICAgICAgICBzdXBlcihpc0xvYWRpbmcpO1xyXG4gICAgICAgIHRoaXMuaVBBZGRyZXNzID0gaVBBZGRyZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBnZXRFbnVtRGF0YUZvck5hbWVkKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFbnVtRGF0YUZvck1haW5WTS5pc0xvYWRpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZXhjZXB0aW9uQ29udHJvbGxlci5pc1doZXJlTm90RXF1YWxzTnVsbFBhcmFtZXRlckV4Y2VwdGlvbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFbnVtRGF0YUZvck1haW5WTS5leGNlcHRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBFbnVtRGF0YUZvck1haW5WTS5zdWNjZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBcIkRhdGFGb3JNYWluVk0oaXNMb2FkaW5nOiBcIiArIHRoaXMuaXNMb2FkaW5nICsgXCIsIFwiIFxyXG4gICAgICAgICAgICArIFwiZXhjZXB0aW9uQ29udHJvbGxlcjogXCIgKyB0aGlzLmV4Y2VwdGlvbkNvbnRyb2xsZXIgKyBcIiwgXCIgXHJcbiAgICAgICAgICAgICsgXCJpUEFkZHJlc3M6IFwiICsgdGhpcy5pUEFkZHJlc3MgKyBcIilcIjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTWFpblZNIHtcclxuICAgIC8vIE1vZGVsUmVwb3NpdG9yeVxyXG4gICAgI2lQQWRkcmVzc1JlcG9zaXRvcnkgPSBGYWN0b3J5T2JqZWN0VXRpbGl0eS5nZXRJUEFkZHJlc3NSZXBvc2l0b3J5O1xyXG4gICAgXHJcbiAgICAvLyBOYW1lZFV0aWxpdHlcclxuICAgIFxyXG4gICAgLy8gTmFtZWRTdHJlYW1XU3RhdGVcclxuICAgICNuYW1lZFN0cmVhbVdTdGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNuYW1lZFN0cmVhbVdTdGF0ZSA9IG5ldyBEZWZhdWx0U3RyZWFtV1N0YXRlKG5ldyBEYXRhRm9yTWFpblZNKHRydWUsbmV3IElQQWRkcmVzcyhcIlwiKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy4jbmFtZWRTdHJlYW1XU3RhdGUubGlzdGVuU3RyZWFtRGF0YUZvck5hbWVkRnJvbUNhbGxiYWNrKChfZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiNidWlsZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0UmVxdWVzdCA9IGF3YWl0IHRoaXMuI2ZpcnN0UmVxdWVzdCgpO1xyXG4gICAgICAgIGRlYnVnUHJpbnQoXCJNYWluVk06IFwiICsgZmlyc3RSZXF1ZXN0KTtcclxuICAgICAgICB0aGlzLiNuYW1lZFN0cmVhbVdTdGF0ZS5ub3RpZnlTdHJlYW1EYXRhRm9yTmFtZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRoaXMuI25hbWVkU3RyZWFtV1N0YXRlLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAjYnVpbGQoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YUZvck5hbWVkID0gdGhpcy4jbmFtZWRTdHJlYW1XU3RhdGUuZ2V0RGF0YUZvck5hbWVkO1xyXG4gICAgICAgIHN3aXRjaChkYXRhRm9yTmFtZWQuZ2V0RW51bURhdGFGb3JOYW1lZCkge1xyXG4gICAgICAgICAgICBjYXNlIEVudW1EYXRhRm9yTWFpblZNLmlzTG9hZGluZzpcclxuICAgICAgICAgICAgICAgIGRlYnVnUHJpbnQoXCJCdWlsZDogSXNMb2FkaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRW51bURhdGFGb3JNYWluVk0uZXhjZXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgZGVidWdQcmludChcIkJ1aWxkOiBFeGNlcHRpb24oXCIgKyBkYXRhRm9yTmFtZWQuZXhjZXB0aW9uQ29udHJvbGxlci5nZXRLZXlQYXJhbWV0ZXJFeGNlcHRpb24gKyBcIilcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFbnVtRGF0YUZvck1haW5WTS5zdWNjZXNzOlxyXG4gICAgICAgICAgICAgICAgZGVidWdQcmludChcIkJ1aWxkOiBTdWNjZXNzKFwiICsgZGF0YUZvck5hbWVkLmlQQWRkcmVzcyArIFwiKVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jICNmaXJzdFJlcXVlc3QoKSB7XHJcbiAgICAgICAgY29uc3QgZ2V0SVBBZGRyZXNzUGFyYW1ldGVySHR0cFNlcnZpY2UgPSBhd2FpdCB0aGlzLiNpUEFkZHJlc3NSZXBvc2l0b3J5LmdldElQQWRkcmVzc1BhcmFtZXRlckh0dHBTZXJ2aWNlKCk7XHJcbiAgICAgICAgaWYoZ2V0SVBBZGRyZXNzUGFyYW1ldGVySHR0cFNlcnZpY2UuZXhjZXB0aW9uQ29udHJvbGxlci5pc1doZXJlTm90RXF1YWxzTnVsbFBhcmFtZXRlckV4Y2VwdGlvbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNmaXJzdFFRRmlyc3RSZXF1ZXN0UVFHZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZShnZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZS5leGNlcHRpb25Db250cm9sbGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4jbmFtZWRTdHJlYW1XU3RhdGUuZ2V0RGF0YUZvck5hbWVkLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuI25hbWVkU3RyZWFtV1N0YXRlLmdldERhdGFGb3JOYW1lZC5pUEFkZHJlc3MgPSBnZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZS5wYXJhbWV0ZXIuZ2V0Q2xvbmU7XHJcbiAgICAgICAgcmV0dXJuIFJlYWR5RGF0YVV0aWxpdHkuc3VjY2VzcztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyAjZmlyc3RRUUZpcnN0UmVxdWVzdFFRR2V0SVBBZGRyZXNzUGFyYW1ldGVySHR0cFNlcnZpY2UoZXhjZXB0aW9uQ29udHJvbGxlcikge1xyXG4gICAgICAgIHRoaXMuI25hbWVkU3RyZWFtV1N0YXRlLmdldERhdGFGb3JOYW1lZC5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLiNuYW1lZFN0cmVhbVdTdGF0ZS5nZXREYXRhRm9yTmFtZWQuZXhjZXB0aW9uQ29udHJvbGxlciA9IGV4Y2VwdGlvbkNvbnRyb2xsZXI7XHJcbiAgICAgICAgcmV0dXJuIGV4Y2VwdGlvbkNvbnRyb2xsZXIuZ2V0S2V5UGFyYW1ldGVyRXhjZXB0aW9uO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xyXG4gICAgQmFzZU1vZGVsUmVwb3NpdG9yeS5lbnVtUldUTW9kZSA9IEVudW1SV1RNb2RlLnJlbGVhc2U7XHJcbiAgICBjb25zdCBtYWluVk0gPSBuZXcgTWFpblZNKCk7XHJcbiAgICBhd2FpdCBtYWluVk0uaW5pdCgpO1xyXG4gICAgbWFpblZNLmRpc3Bvc2UoKTtcclxufVxyXG5tYWluKCk7XHJcbi8vIEVYUEVDVEVEIE9VVFBVVDpcclxuLy9cclxuLy8gTWFpblZNOiBzdWNjZXNzXHJcbi8vIEJ1aWxkOiBTdWNjZXNzKElQQWRkcmVzcyhpcDogJHt5b3VyX2lwfSkpXHJcblxyXG4vLy8gT1JcclxuXHJcbi8vIEVYUEVDVEVEIE9VVFBVVDpcclxuLy9cclxuLy8gPT09c3RhcnRfdG9fdHJhY2VfZXhjZXB0aW9uPT09XHJcbi8vXHJcbi8vIFdoZXJlSGFwcGVuZWRFeGNlcHRpb24oQ2xhc3MpIC0tPiAke1doZXJlSGFwcGVuZWRFeGNlcHRpb24oQ2xhc3MpfVxyXG4vLyBOYW1lRXhjZXB0aW9uKENsYXNzKSAtLT4gJHtOYW1lRXhjZXB0aW9uKENsYXNzKX1cclxuLy8gdG9TdHJpbmcoKSAtLT4gJHt0b1N0cmluZygpfVxyXG4vL1xyXG4vLyA9PT1lbmRfdG9fdHJhY2VfZXhjZXB0aW9uPT09XHJcbi8vXHJcbi8vIE1haW5WTTogJHtnZXRLZXlQYXJhbWV0ZXJFeGNlcHRpb259XHJcbi8vIEJ1aWxkOiBFeGNlcHRpb24oJHtnZXRLZXlQYXJhbWV0ZXJFeGNlcHRpb259KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==