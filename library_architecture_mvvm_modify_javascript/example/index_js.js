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
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! library_architecture_mvvm_modify_javascript */ "../dist/esm/index.js");


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

    constructor(enumRWTMode) {
        super(enumRWTMode);
    }

    getBaseModelFromMapAndListKeys(map,listKeys) {
        if(listKeys.length <= 0) {
            return new IPAddress("");
        }
        return new IPAddress(map.has(listKeys[0]) ? map.get(listKeys[0]) : "");
    }

    getBaseListModelFromListModel(listModel) {
        return new ListIPAddress(listModel);
    }

    async getIPAddressParameterHttpService() {
        return this.getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(
            this.#getIPAddressParameterHttpServiceWReleaseCallback,
            this.#getIPAddressParameterHttpServiceWTestCallback)();
    }

    get _httpService() {
        return this.#httpService;
    }

    #getIPAddressParameterHttpServiceWReleaseCallback = async () => {
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
            return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.success(this.getBaseModelFromMapAndListKeys(map,[KeysHttpServiceUtility.iPAddressQQIp]));
        } catch(exception) {
            if(exception instanceof library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.NetworkException) {
                return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.exception(exception);
            }
            return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.exception(new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.LocalException("IPAddressRepository",library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.EnumGuilty.device,ReadyDataUtility.unknown,exception.toString()));
        }
    };

    #getIPAddressParameterHttpServiceWTestCallback = async () => {
        await new Promise(resolve => setTimeout(resolve,1000));
        return library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.Result.success(this.getBaseModelFromMapAndListKeys(
            new Map([
                [KeysHttpServiceUtility.iPAddressQQIp,"121.121.12.12"]
            ]),
            [KeysHttpServiceUtility.iPAddressQQIp]));
    };
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
    #iPAddressRepository = new IPAddressRepository(library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.EnumRWTMode.release);
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDLGtDQUFrQztBQUM1QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7VUNsWUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOOFE7QUFDOVE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1RkFBYyxvQkFBb0IsbUZBQVU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUZBQWMsMEJBQTBCLG1GQUFVO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0ZBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzRkFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNEZBQW1CO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esc0JBQXNCLHlGQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0VBQU07QUFDekIsVUFBVTtBQUNWLG9DQUFvQyx5RkFBZ0I7QUFDcEQsdUJBQXVCLCtFQUFNO0FBQzdCO0FBQ0EsbUJBQW1CLCtFQUFNLGVBQWUsdUZBQWMsdUJBQXVCLG1GQUFVO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtFQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlGQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG9GQUFXO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDRGQUFtQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUUFBUSx1RkFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVGQUFVO0FBQzFCO0FBQ0E7QUFDQSxnQkFBZ0IsdUZBQVU7QUFDMUI7QUFDQTtBQUNBLGdCQUFnQix1RkFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsOEJBQThCO0FBQzlCLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2Isc0JBQXNCLHlCQUF5QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS8uLi9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGFtcGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhhbXBsZS8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCYXNlRGF0YUZvck5hbWVkIHtcbiAgICBjb25zdHJ1Y3Rvcihpc0xvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBpc0xvYWRpbmc7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9uQ29udHJvbGxlciA9IEV4Y2VwdGlvbkNvbnRyb2xsZXIuc3VjY2VzcygpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0aGlzQ2xhc3MsIGV4Y2VwdGlvbkNsYXNzLCBrZXkpIHtcbiAgICAgICAgdGhpcy50aGlzQ2xhc3MgPSB0aGlzQ2xhc3M7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9uQ2xhc3MgPSBleGNlcHRpb25DbGFzcztcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgfVxuICAgIC8vLyBDYWxsIHRoaXMgbWV0aG9kIGluIHRoZSBkZXNjZW5kYW50IGNvbnN0cnVjdG9yIGFzIHRoZSBsYXN0IGxpbmVcbiAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uV2hlcmVUb1N0cmluZ1BhcmFtZXRlcnNUaGlzQ2xhc3NBbmRFeGNlcHRpb25DbGFzcygpIHtcbiAgICAgICAgZGVidWdQcmludEV4Y2VwdGlvbihcIlxcbj09PXN0YXJ0X3RvX3RyYWNlX2V4Y2VwdGlvbj09PVxcblwiKTtcbiAgICAgICAgZGVidWdQcmludEV4Y2VwdGlvbihcIldoZXJlSGFwcGVuZWRFeGNlcHRpb24oQ2xhc3MpIC0tPiBcIiArIHRoaXMudGhpc0NsYXNzICsgXCJcXG5cIiArXG4gICAgICAgICAgICBcIk5hbWVFeGNlcHRpb24oQ2xhc3MpIC0tPiBcIiArIHRoaXMuZXhjZXB0aW9uQ2xhc3MgKyBcIlxcblwiICtcbiAgICAgICAgICAgIFwidG9TdHJpbmcoKSAtLT4gXCIgKyB0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uKFwiXFxuPT09ZW5kX3RvX3RyYWNlX2V4Y2VwdGlvbj09PVxcblwiKTtcbiAgICB9XG59XG5leHBvcnQgdmFyIEVudW1HdWlsdHk7XG4oZnVuY3Rpb24gKEVudW1HdWlsdHkpIHtcbiAgICBFbnVtR3VpbHR5W0VudW1HdWlsdHlbXCJkZXZlbG9wZXJcIl0gPSAwXSA9IFwiZGV2ZWxvcGVyXCI7XG4gICAgRW51bUd1aWx0eVtFbnVtR3VpbHR5W1wiZGV2aWNlXCJdID0gMV0gPSBcImRldmljZVwiO1xuICAgIEVudW1HdWlsdHlbRW51bUd1aWx0eVtcInVzZXJcIl0gPSAyXSA9IFwidXNlclwiO1xufSkoRW51bUd1aWx0eSB8fCAoRW51bUd1aWx0eSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgTG9jYWxFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0aGlzQ2xhc3MsIHZhbHVlV0VudW1HdWlsdHksIGtleSwgbWVzc2FnZSA9IFwiXCIpIHtcbiAgICAgICAgc3VwZXIodGhpc0NsYXNzLCBcIkxvY2FsRXhjZXB0aW9uXCIsIGtleSk7XG4gICAgICAgIHRoaXMudmFsdWVXRW51bUd1aWx0eSA9IHZhbHVlV0VudW1HdWlsdHk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuZGVidWdQcmludEV4Y2VwdGlvbldoZXJlVG9TdHJpbmdQYXJhbWV0ZXJzVGhpc0NsYXNzQW5kRXhjZXB0aW9uQ2xhc3MoKTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIkxvY2FsRXhjZXB0aW9uKHZhbHVlV0VudW1HdWlsdHk6IFwiICsgdGhpcy52YWx1ZVdFbnVtR3VpbHR5ICsgXCIsIFwiICtcbiAgICAgICAgICAgIFwia2V5OiBcIiArIHRoaXMua2V5ICsgXCIsIFwiICtcbiAgICAgICAgICAgIFwibWVzc2FnZSAob3B0aW9uYWwpOiBcIiArIHRoaXMubWVzc2FnZSArIFwiKVwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOZXR3b3JrRXhjZXB0aW9uIGV4dGVuZHMgQmFzZUV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3IodGhpc0NsYXNzLCBrZXksIHN0YXR1c0NvZGUsIG5hbWVTdGF0dXNDb2RlID0gXCJcIiwgZGVzY3JpcHRpb25TdGF0dXNDb2RlID0gXCJcIikge1xuICAgICAgICBzdXBlcih0aGlzQ2xhc3MsIFwiTmV0d29ya0V4Y2VwdGlvblwiLCBrZXkpO1xuICAgICAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICAgICAgICB0aGlzLm5hbWVTdGF0dXNDb2RlID0gbmFtZVN0YXR1c0NvZGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25TdGF0dXNDb2RlID0gZGVzY3JpcHRpb25TdGF0dXNDb2RlO1xuICAgICAgICB0aGlzLmRlYnVnUHJpbnRFeGNlcHRpb25XaGVyZVRvU3RyaW5nUGFyYW1ldGVyc1RoaXNDbGFzc0FuZEV4Y2VwdGlvbkNsYXNzKCk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tS2V5QW5kU3RhdHVzQ29kZSh0aGlzQ2xhc3MsIGtleSwgc3RhdHVzQ29kZSkge1xuICAgICAgICBzd2l0Y2ggKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMjAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjAxLCBcIjIwMSBDcmVhdGVkXCIsIFwiVGhlIHJlcXVlc3QgaGFzIGJlZW4gZnVsZmlsbGVkIGFuZCByZXN1bHRlZCBpbiBhIG5ldyByZXNvdXJjZSBiZWluZyBjcmVhdGVkLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjAyLCBcIjIwMiBBY2NlcHRlZFwiLCBcIlRoZSByZXF1ZXN0IGhhcyBiZWVuIGFjY2VwdGVkIGZvciBwcm9jZXNzaW5nLCBidXQgdGhlIHByb2Nlc3NpbmcgaGFzIG5vdCBiZWVuIGNvbXBsZXRlZC5cIik7XG4gICAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDIwMywgXCIyMDMgTm9uLUF1dGhvcml0YXRpdmUgSW5mb3JtYXRpb25cIiwgXCJUaGUgcmV0dXJuZWQgbWV0YUluZm9ybWF0aW9uIGluIHRoZSBlbnRpdHktaGVhZGVyIGlzIG5vdCB0aGUgZGVmaW5pdGl2ZSBzZXQgYXMgYXZhaWxhYmxlIGZyb20gdGhlIG9yaWdpbiBzZXJ2ZXIsIGJ1dCBpcyBnYXRoZXJlZCBmcm9tIGEgbG9jYWwgb3IgYSB0aGlyZC1wYXJ0eSBjb3B5LlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjA0LCBcIjIwNCBObyBDb250ZW50XCIsIFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIHRoZSByZXF1ZXN0IGJ1dCBkb2VzIG5vdCBuZWVkIHRvIHJldHVybiBhbiBlbnRpdHktYm9keSwgYW5kIG1pZ2h0IHdhbnQgdG8gcmV0dXJuIHVwZGF0ZWQgbWV0YUluZm9ybWF0aW9uLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjA1LCBcIjIwNSBSZXNldCBDb250ZW50XCIsIFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIHRoZSByZXF1ZXN0IGFuZCB0aGUgdXNlciBhZ2VudCBTSE9VTEQgcmVzZXQgdGhlIGRvY3VtZW50IHZpZXcgd2hpY2ggY2F1c2VkIHRoZSByZXF1ZXN0IHRvIGJlIHNlbnQuXCIpO1xuICAgICAgICAgICAgY2FzZSAyMDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDYsIFwiMjA2IFBhcnRpYWwgQ29udGVudFwiLCBcIlRoZSBzZXJ2ZXIgaGFzIGZ1bGZpbGxlZCB0aGUgcGFydGlhbCBHRVQgcmVxdWVzdCBmb3IgdGhlIHJlc291cmNlLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzAwLCBcIjMwMCBNdWx0aXBsZSBDaG9pY2VzXCIsIFwiVXNlciAob3IgdXNlciBhZ2VudCkgY2FuIHNlbGVjdCBhIHByZWZlcnJlZCByZXByZXNlbnRhdGlvbiBhbmQgcmVkaXJlY3QgaXRzIHJlcXVlc3QgdG8gdGhhdCBsb2NhdGlvbi5cIik7XG4gICAgICAgICAgICBjYXNlIDMwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwMSwgXCIzMDEgTW92ZWQgUGVybWFuZW50bHlcIiwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIGhhcyBiZWVuIGFzc2lnbmVkIGEgbmV3IHBlcm1hbmVudCBVUkkgYW5kIGFueSBmdXR1cmUgcmVmZXJlbmNlcyB0byB0aGlzIHJlc291cmNlIFNIT1VMRCB1c2Ugb25lIG9mIHRoZSByZXR1cm5lZCBVUklzLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzAyLCBcIjMwMiBGb3VuZFwiLCBcIlRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgcmVzaWRlcyB0ZW1wb3JhcmlseSB1bmRlciBhIGRpZmZlcmVudCBVUkkuXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDMsIFwiMzAzIFNlZSBPdGhlclwiLCBcIlRoZSByZXNwb25zZSB0byB0aGUgcmVxdWVzdCBjYW4gYmUgZm91bmQgdW5kZXIgYSBkaWZmZXJlbnQgVVJJIGFuZCBTSE9VTEQgYmUgcmV0cmlldmVkIHVzaW5nIGEgR0VUIG1ldGhvZCBvbiB0aGF0IHJlc291cmNlLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzA0LCBcIjMwNCBOb3QgTW9kaWZpZWRcIiwgXCJJZiB0aGUgY2xpZW50IGhhcyBwZXJmb3JtZWQgYSBjb25kaXRpb25hbCBHRVQgcmVxdWVzdCBhbmQgYWNjZXNzIGlzIGFsbG93ZWQsIGJ1dCB0aGUgZG9jdW1lbnQgaGFzIG5vdCBiZWVuIG1vZGlmaWVkLCB0aGUgc2VydmVyIFNIT1VMRCByZXNwb25kIHdpdGggdGhpcyBzdGF0dXMgY29kZS5cIik7XG4gICAgICAgICAgICBjYXNlIDMwNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwNSwgXCIzMDUgVXNlIFByb3h5XCIsIFwiVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBNVVNUIGJlIGFjY2Vzc2VkIHRocm91Z2ggdGhlIHByb3h5IGdpdmVuIGJ5IHRoZSBMb2NhdGlvbiBmaWVsZC5cIik7XG4gICAgICAgICAgICBjYXNlIDMwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwNywgXCIzMDcgVGVtcG9yYXJ5IFJlZGlyZWN0XCIsIFwiVGhlIHJlcXVlc3RlZCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSS5cIik7XG4gICAgICAgICAgICBjYXNlIDQwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwMCwgXCI0MDAgQmFkIFJlcXVlc3RcIiwgXCJUaGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgdW5kZXJzdG9vZCBieSB0aGUgc2VydmVyIGR1ZSB0byBtYWxmb3JtZWQgc3ludGF4LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDAxLCBcIjQwMSBVbmF1dGhvcml6ZWRcIiwgXCJUaGUgcmVxdWVzdCByZXF1aXJlcyB1c2VyIGF1dGhlbnRpY2F0aW9uLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDAzLCBcIjQwMyBGb3JiaWRkZW5cIiwgXCJUaGUgc2VydmVyIHVuZGVyc3Rvb2QgdGhlIHJlcXVlc3QsIGJ1dCBpcyByZWZ1c2luZyB0byBmdWxmaWxsIGl0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDA0LCBcIjQwNCBOb3QgRm91bmRcIiwgXCJUaGUgc2VydmVyIGhhcyBub3QgZm91bmQgYW55dGhpbmcgbWF0Y2hpbmcgdGhlIFJlcXVlc3QtVVJJLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDA1LCBcIjQwNSBNZXRob2QgTm90IEFsbG93ZWQnLCdUaGUgbWV0aG9kIHNwZWNpZmllZCBpbiB0aGUgUmVxdWVzdC1MaW5lIGlzIG5vdCBhbGxvd2VkIGZvciB0aGUgcmVzb3VyY2UgaWRlbnRpZmllZCBieSB0aGUgUmVxdWVzdC1VUkkuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDYsIFwiNDA2IE5vdCBBY2NlcHRhYmxlXCIsIFwiVGhlIHJlc291cmNlIGlkZW50aWZpZWQgYnkgdGhlIHJlcXVlc3QgaXMgb25seSBjYXBhYmxlIG9mIGdlbmVyYXRpbmcgcmVzcG9uc2UgZW50aXRpZXMgd2hpY2ggaGF2ZSBjb250ZW50IGNoYXJhY3RlcmlzdGljcyBub3QgYWNjZXB0YWJsZSBhY2NvcmRpbmcgdG8gdGhlIGFjY2VwdCBoZWFkZXJzIHNlbnQgaW4gdGhlIHJlcXVlc3QuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDcsIFwiNDA3IFByb3h5IEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkXCIsIFwiVGhpcyBjb2RlIGlzIHNpbWlsYXIgdG8gNDAxIChVbmF1dGhvcml6ZWQpLCBidXQgaW5kaWNhdGVzIHRoYXQgdGhlIGNsaWVudCBtdXN0IGZpcnN0IGF1dGhlbnRpY2F0ZSBpdHNlbGYgd2l0aCB0aGUgcHJveHkuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDgsIFwiNDA4IFJlcXVlc3QgVGltZW91dFwiLCBcIlRoZSBjbGllbnQgZGlkIG5vdCBwcm9kdWNlIGEgcmVxdWVzdCB3aXRoaW4gdGhlIHRpbWUgdGhhdCB0aGUgc2VydmVyIHdhcyBwcmVwYXJlZCB0byB3YWl0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDA5LCBcIjQwOSBDb25mbGljdFwiLCBcIlRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBjb21wbGV0ZWQgZHVlIHRvIGEgY29uZmxpY3Qgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgcmVzb3VyY2UuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTAsIFwiNDEwIEdvbmVcIiwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIGlzIG5vIGxvbmdlciBhdmFpbGFibGUgYXQgdGhlIHNlcnZlciBhbmQgbm8gZm9yd2FyZGluZyBhZGRyZXNzIGlzIGtub3duLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDExOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDExLCBcIjQxMSBMZW5ndGggUmVxdWlyZWRcIiwgXCJUaGUgc2VydmVyIHJlZnVzZXMgdG8gYWNjZXB0IHRoZSByZXF1ZXN0IHdpdGhvdXQgYSBkZWZpbmVkIENvbnRlbnQtTGVuZ3RoLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDEyLCBcIjQxMiBQcmVjb25kaXRpb24gRmFpbGVkXCIsIFwiVGhlIHByZWNvbmRpdGlvbiBnaXZlbiBpbiBvbmUgb3IgbW9yZSBvZiB0aGUgcmVxdWVzdC1oZWFkZXIgZmllbGRzIGV2YWx1YXRlZCB0byBmYWxzZSB3aGVuIGl0IHdhcyB0ZXN0ZWQgb24gdGhlIHNlcnZlci5cIik7XG4gICAgICAgICAgICBjYXNlIDQxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQxMywgXCI0MTMgUmVxdWVzdCBFbnRpdHkgVG9vIExhcmdlXCIsIFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBwcm9jZXNzIGEgcmVxdWVzdCBiZWNhdXNlIHRoZSByZXF1ZXN0IGVudGl0eSBpcyBsYXJnZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgb3IgYWJsZSB0byBwcm9jZXNzLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE0LCBcIjQxNCBSZXF1ZXN0LVVSSSBUb28gTG9uZ1wiLCBcIlRoZSBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gc2VydmljZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSBSZXF1ZXN0LVVSSSBpcyBsb25nZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgdG8gaW50ZXJwcmV0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE1LCBcIjQxNSBVbnN1cHBvcnRlZCBNZWRpYSBUeXBlXCIsIFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBzZXJ2aWNlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIGVudGl0eSBvZiB0aGUgcmVxdWVzdCBpcyBpbiBhIGZvcm1hdCBub3Qgc3VwcG9ydGVkIGJ5IHRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgZm9yIHRoZSByZXF1ZXN0ZWQgbWV0aG9kLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE2LCBcIjQxNiBSZXF1ZXN0ZWQgUmFuZ2UgTm90IFNhdGlzZmlhYmxlXCIsIFwiQSBzZXJ2ZXIgU0hPVUxEIHJldHVybiBhIHJlc3BvbnNlIHdpdGggdGhpcyBzdGF0dXMgY29kZSBpZiBhIHJlcXVlc3QgaW5jbHVkZWQgYSBSYW5nZSByZXF1ZXN0LWhlYWRlciBmaWVsZCAoc2VjdGlvbiAxNC4zNSksIGFuZCBub25lIG9mIHRoZSByYW5nZS1zcGVjaWZpZXIgdmFsdWVzIGluIHRoaXMgZmllbGQgb3ZlcmxhcCB0aGUgY3VycmVudCBleHRlbnQgb2YgdGhlIHNlbGVjdGVkIHJlc291cmNlLCBhbmQgdGhlIHJlcXVlc3QgZGlkIG5vdCBpbmNsdWRlIGFuIElmLVJhbmdlIHJlcXVlc3QtaGVhZGVyIGZpZWxkLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE3LCBcIjQxNyBFeHBlY3RhdGlvbiBGYWlsZWRcIiwgXCJUaGUgZXhwZWN0YXRpb24gZ2l2ZW4gaW4gYW4gRXhwZWN0IHJlcXVlc3QtaGVhZGVyIGZpZWxkIChzZWUgc2VjdGlvbiAxNC4yMCkgY291bGQgbm90IGJlIG1ldCBieSB0aGlzIHNlcnZlci5cIik7XG4gICAgICAgICAgICBjYXNlIDUwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDUwMCwgXCI1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXCIsIFwiVGhlIHNlcnZlciBlbmNvdW50ZXJlZCBhbiB1bmV4cGVjdGVkIGNvbmRpdGlvbiB3aGljaCBwcmV2ZW50ZWQgaXQgZnJvbSBmdWxmaWxsaW5nIHRoZSByZXF1ZXN0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTAxLCBcIjUwMSBOb3QgSW1wbGVtZW50ZWRcIiwgXCJUaGUgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQgdGhlIGZ1bmN0aW9uYWxpdHkgaW50ZXJmYWNlX2Z1bmN0aW9uX3ZpZXdfbW9kZWwgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cIik7XG4gICAgICAgICAgICBjYXNlIDUwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDUwMiwgXCI1MDIgQmFkIEdhdGV3YXlcIiwgXCJUaGUgc2VydmVyLCB3aGlsZSBhY3RpbmcgYXMgYSBnYXRld2F5IG9yIHByb3h5LCByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIGZyb20gdGhlIHVwc3RyZWFtIHNlcnZlciBpdCBhY2Nlc3NlZCBpbiBhdHRlbXB0aW5nIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXCIpO1xuICAgICAgICAgICAgY2FzZSA1MDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA1MDMsIFwiNTAzIFNlcnZpY2UgVW5hdmFpbGFibGVcIiwgXCJUaGUgc2VydmVyIGlzIGN1cnJlbnRseSB1bmFibGUgdG8gaGFuZGxlIHRoZSByZXF1ZXN0IGR1ZSB0byBhIHRlbXBvcmFyeSBvdmVybG9hZGluZyBvciBtYWludGVuYW5jZSBvZiB0aGUgc2VydmVyLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTA0LCBcIjUwNCBHYXRld2F5IFRpbWVvdXRcIiwgXCJUaGUgc2VydmVyLCB3aGlsZSBhY3RpbmcgYXMgYSBnYXRld2F5IG9yIHByb3h5LCBkaWQgbm90IHJlY2VpdmUgYSB0aW1lbHkgcmVzcG9uc2UgZnJvbSB0aGUgdXBzdHJlYW0gc2VydmVyIHNwZWNpZmllZCBieSB0aGUgVVJJLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTA1LCBcIjUwNSBIVFRQIFZlcnNpb24gTm90IFN1cHBvcnRlZFwiLCBcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCwgb3IgcmVmdXNlcyB0byBzdXBwb3J0LCB0aGUgSFRUUCBwcm90b2NvbCB2ZXJzaW9uIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QgbWVzc2FnZS5cIik7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIk5ldHdvcmtFeGNlcHRpb24oa2V5OiBcIiArIHRoaXMua2V5ICsgXCIsIFwiICtcbiAgICAgICAgICAgIFwic3RhdHVzQ29kZTogXCIgKyB0aGlzLnN0YXR1c0NvZGUgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJuYW1lU3RhdHVzQ29kZSAob3B0aW9uYWwpOiBcIiArIHRoaXMubmFtZVN0YXR1c0NvZGUgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblN0YXR1c0NvZGUgKG9wdGlvbmFsKTogXCIgKyB0aGlzLmRlc2NyaXB0aW9uU3RhdHVzQ29kZSArIFwiKVwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDdXJyZW50TW9kZWxXSW5kZXgge1xuICAgIGNvbnN0cnVjdG9yKGN1cnJlbnRNb2RlbCwgaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TW9kZWwgPSBjdXJyZW50TW9kZWw7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsV05hbWVkV05hbWVkV05hbWVkSXRlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpc3RNb2RlbEl0ZXJhdG9yID0gbmV3IEFycmF5KCk7XG4gICAgfVxuICAgIGdldFNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvcihuZXdMaXN0TW9kZWwpIHtcbiAgICAgICAgaWYgKG5ld0xpc3RNb2RlbC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdE1vZGVsSXRlcmF0b3IucHVzaCguLi5uZXdMaXN0TW9kZWwpO1xuICAgICAgICBjb25zdCBuZXdMaXN0TW9kZWxGSVJTVCA9IG5ldyBBcnJheSgpO1xuICAgICAgICB3aGlsZSAodGhpcy5saXN0TW9kZWxJdGVyYXRvci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TW9kZWxXSW5kZXggPSB0aGlzLmN1cnJlbnRNb2RlbFdJbmRleDtcbiAgICAgICAgICAgIHRoaXMubGlzdE1vZGVsSXRlcmF0b3Iuc3BsaWNlKGN1cnJlbnRNb2RlbFdJbmRleC5pbmRleCwgMSk7XG4gICAgICAgICAgICBuZXdMaXN0TW9kZWxGSVJTVC5wdXNoKGN1cnJlbnRNb2RlbFdJbmRleC5jdXJyZW50TW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdMaXN0TW9kZWxGSVJTVDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZUxpc3RNb2RlbCB7XG4gICAgY29uc3RydWN0b3IobGlzdE1vZGVsKSB7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsID0gbGlzdE1vZGVsO1xuICAgIH1cbiAgICBzb3J0aW5nRnJvbU1vZGVsV05hbWVkV05hbWVkV05hbWVkSXRlcmF0b3JQYXJhbWV0ZXJMaXN0TW9kZWwobW9kZWxXTmFtZWRXTmFtZWRXTmFtZWRJdGVyYXRvcikge1xuICAgICAgICBjb25zdCBzb3J0ZWRMaXN0TW9kZWxGcm9tTmV3TGlzdE1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsSXRlcmF0b3IgPSBtb2RlbFdOYW1lZFdOYW1lZFdOYW1lZEl0ZXJhdG9yLmdldFNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvcih0aGlzLmxpc3RNb2RlbCk7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLmxlbmd0aCA+IDAgPyB0aGlzLmxpc3RNb2RlbC5zcGxpY2UoMCwgdGhpcy5saXN0TW9kZWwubGVuZ3RoKSA6IG51bGw7XG4gICAgICAgIHNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvci5sZW5ndGggPiAwID8gdGhpcy5saXN0TW9kZWwucHVzaCguLi5zb3J0ZWRMaXN0TW9kZWxGcm9tTmV3TGlzdE1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsSXRlcmF0b3IpIDogbnVsbDtcbiAgICB9XG4gICAgaW5zZXJ0RnJvbU5ld01vZGVsUGFyYW1ldGVyTGlzdE1vZGVsKG5ld01vZGVsKSB7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLnB1c2gobmV3TW9kZWwpO1xuICAgIH1cbiAgICB1cGRhdGVGcm9tTmV3TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobmV3TW9kZWwpIHtcbiAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSBuZXdNb2RlbC51bmlxdWVJZCk7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLnNwbGljZShmaW5kSW5kZXgsIDEsIG5ld01vZGVsKTtcbiAgICB9XG4gICAgZGVsZXRlRnJvbVVuaXF1ZUlkQnlNb2RlbFBhcmFtZXRlckxpc3RNb2RlbCh1bmlxdWVJZEJ5TW9kZWwpIHtcbiAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSB1bmlxdWVJZEJ5TW9kZWwpO1xuICAgICAgICB0aGlzLmxpc3RNb2RlbC5zcGxpY2UoZmluZEluZGV4LCAxKTtcbiAgICB9XG4gICAgaW5zZXJ0TGlzdEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobmV3TGlzdE1vZGVsKSB7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLnB1c2goLi4ubmV3TGlzdE1vZGVsKTtcbiAgICB9XG4gICAgdXBkYXRlTGlzdEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobmV3TGlzdE1vZGVsKSB7XG4gICAgICAgIGZvciAoY29uc3QgbmV3SXRlbU1vZGVsIG9mIG5ld0xpc3RNb2RlbCkge1xuICAgICAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSBuZXdJdGVtTW9kZWwudW5pcXVlSWQpO1xuICAgICAgICAgICAgdGhpcy5saXN0TW9kZWwuc3BsaWNlKGZpbmRJbmRleCwgMSwgbmV3SXRlbU1vZGVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWxldGVMaXN0RnJvbUxpc3RVbmlxdWVJZEJ5TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobGlzdFVuaXF1ZUlkQnlNb2RlbCkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW1VbmlxdWVJZEJ5TW9kZWwgb2YgbGlzdFVuaXF1ZUlkQnlNb2RlbCkge1xuICAgICAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSBpdGVtVW5pcXVlSWRCeU1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMubGlzdE1vZGVsLnNwbGljZShmaW5kSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbCB7XG4gICAgY29uc3RydWN0b3IodW5pcXVlSWQpIHtcbiAgICAgICAgdGhpcy51bmlxdWVJZCA9IHVuaXF1ZUlkO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTW9kZWxSZXBvc2l0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihlbnVtUldUTW9kZSkge1xuICAgICAgICB0aGlzLmVudW1SV1RNb2RlID0gZW51bVJXVE1vZGU7XG4gICAgfVxuICAgIGdldE1vZGVDYWxsYmFja0Zyb21SZWxlYXNlQ2FsbGJhY2tBbmRUZXN0Q2FsbGJhY2tQYXJhbWV0ZXJFbnVtUldUTW9kZShyZWxlYXNlQ2FsbGJhY2ssIHRlc3RDYWxsYmFjaykge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZW51bVJXVE1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgRW51bVJXVE1vZGUucmVsZWFzZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVsZWFzZUNhbGxiYWNrO1xuICAgICAgICAgICAgY2FzZSBFbnVtUldUTW9kZS50ZXN0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0Q2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZU5hbWVkU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEZWZhdWx0U3RhdGUgZXh0ZW5kcyBCYXNlTmFtZWRTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YUZvck5hbWVkKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGF0YUZvck5hbWVkID0gZGF0YUZvck5hbWVkO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRGlzcG9zZSA9IHRydWU7XG4gICAgfVxuICAgIGdldCBnZXREYXRhRm9yTmFtZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFGb3JOYW1lZDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZU5hbWVkU3RyZWFtV1N0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRGVmYXVsdFN0cmVhbVdTdGF0ZSBleHRlbmRzIEJhc2VOYW1lZFN0cmVhbVdTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YUZvck5hbWVkKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGF0YUZvck5hbWVkID0gZGF0YUZvck5hbWVkO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2UgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gICAgZ2V0IGdldERhdGFGb3JOYW1lZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YUZvck5hbWVkO1xuICAgIH1cbiAgICBsaXN0ZW5TdHJlYW1EYXRhRm9yTmFtZWRGcm9tQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJEZWZhdWx0U3RyZWFtV1N0YXRlXCIsIEVudW1HdWlsdHkuZGV2ZWxvcGVyLCBcIkRlZmF1bHRTdHJlYW1XU3RhdGVRUUxpc3RlblN0cmVhbURhdGFGb3JOYW1lZEZyb21DYWxsYmFja1wiLCBcIkFscmVhZHkgZGlzcG9zZWQgb2ZcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVwiLCBFbnVtR3VpbHR5LmRldmVsb3BlciwgXCJEZWZhdWx0U3RyZWFtV1N0YXRlUVFMaXN0ZW5TdHJlYW1EYXRhRm9yTmFtZWRGcm9tQ2FsbGJhY2tcIiwgXCJEdXBsaWNhdGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICBub3RpZnlTdHJlYW1EYXRhRm9yTmFtZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVwiLCBFbnVtR3VpbHR5LmRldmVsb3BlciwgXCJEZWZhdWx0U3RyZWFtV1N0YXRlUVFOb3RpZnlTdHJlYW1EYXRhRm9yTmFtZWRcIiwgXCJBbHJlYWR5IGRpc3Bvc2VkIG9mXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIkRlZmF1bHRTdHJlYW1XU3RhdGVcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVFRTm90aWZ5U3RyZWFtRGF0YUZvck5hbWVkXCIsIFwiU3RyZWFtIGhhcyBubyBsaXN0ZW5lclwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMuZGF0YUZvck5hbWVkKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGVtcENhY2hlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGVtcENhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnRlbXBDYWNoZVdMaXN0QWN0aW9uID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzdGF0aWMgY2xlYXJUZW1wQ2FjaGVQYXJtZXRlckluc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGUgPSB0aGlzLmluc3RhbmNlLnRlbXBDYWNoZTtcbiAgICAgICAgdGVtcENhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHN0YXRpYyBjbG9zZVN0cmVhbUZyb21LZXlUZW1wQ2FjaGVQYXJtZXRlckluc3RhbmNlKGtleVRlbXBDYWNoZSkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMuaW5zdGFuY2UudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGlmICghdGVtcENhY2hlV0xpc3RBY3Rpb24uaGFzKGtleVRlbXBDYWNoZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnZXQgPSB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5nZXQoa2V5VGVtcENhY2hlKTtcbiAgICAgICAgZ2V0ID09PSBudWxsIHx8IGdldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2V0LnNwbGljZSgwLCBnZXQubGVuZ3RoKTtcbiAgICB9XG4gICAgc3RhdGljIGNsb3NlU3RyZWFtRnJvbUxpc3RLZXlUZW1wQ2FjaGVQYXJtZXRlckluc3RhbmNlKGxpc3RLZXlUZW1wQ2FjaGUpIHtcbiAgICAgICAgY29uc3QgdGVtcENhY2hlV0xpc3RBY3Rpb24gPSB0aGlzLmluc3RhbmNlLnRlbXBDYWNoZVdMaXN0QWN0aW9uO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW1LZXlUZW1wQ2FjaGUgb2YgbGlzdEtleVRlbXBDYWNoZSkge1xuICAgICAgICAgICAgaWYgKCF0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5oYXMoaXRlbUtleVRlbXBDYWNoZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBnZXQgPSB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5nZXQoaXRlbUtleVRlbXBDYWNoZSk7XG4gICAgICAgICAgICBnZXQgPT09IG51bGwgfHwgZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnZXQuc3BsaWNlKDAsIGdldC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBjbG9zZVN0cmVhbXNQYXJhbWV0ZXJJbnN0YW5jZSgpIHtcbiAgICAgICAgY29uc3QgdGVtcENhY2hlV0xpc3RBY3Rpb24gPSB0aGlzLmluc3RhbmNlLnRlbXBDYWNoZVdMaXN0QWN0aW9uO1xuICAgICAgICBmb3IgKGNvbnN0IFssIHZhbHVlXSBvZiB0ZW1wQ2FjaGVXTGlzdEFjdGlvbikge1xuICAgICAgICAgICAgdmFsdWUuc3BsaWNlKDAsIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0RnJvbUtleVRlbXBDYWNoZVBhcmFtZXRlclRlbXBDYWNoZShrZXlUZW1wQ2FjaGUpIHtcbiAgICAgICAgY29uc3QgdGVtcENhY2hlID0gdGhpcy50ZW1wQ2FjaGU7XG4gICAgICAgIGlmICghdGVtcENhY2hlLmhhcyhrZXlUZW1wQ2FjaGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJUZW1wQ2FjaGVTZXJ2aWNlXCIsIEVudW1HdWlsdHkuZGV2ZWxvcGVyLCBrZXlUZW1wQ2FjaGUsIFwiTm8gZXhpc3RzIGtleVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcENhY2hlLmdldChrZXlUZW1wQ2FjaGUpO1xuICAgIH1cbiAgICBsaXN0ZW5TdHJlYW1Gcm9tS2V5VGVtcENhY2hlQW5kQ2FsbGJhY2tQYXJhbWV0ZXJPbmUoa2V5VGVtcENhY2hlLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGlmICghdGVtcENhY2hlV0xpc3RBY3Rpb24uaGFzKGtleVRlbXBDYWNoZSkpIHtcbiAgICAgICAgICAgIHRlbXBDYWNoZVdMaXN0QWN0aW9uLnNldChrZXlUZW1wQ2FjaGUsIG5ldyBBcnJheSgpKTtcbiAgICAgICAgICAgIChfYSA9IHRlbXBDYWNoZVdMaXN0QWN0aW9uLmdldChrZXlUZW1wQ2FjaGUpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgKF9iID0gdGVtcENhY2hlV0xpc3RBY3Rpb24uZ2V0KGtleVRlbXBDYWNoZSkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgdXBkYXRlRnJvbUtleVRlbXBDYWNoZUFuZFZhbHVlUGFyYW1ldGVyVGVtcENhY2hlKGtleVRlbXBDYWNoZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy50ZW1wQ2FjaGUuc2V0KGtleVRlbXBDYWNoZSwgdmFsdWUpO1xuICAgIH1cbiAgICB1cGRhdGVXaGVyZVN0cmVhbU5vdGlmaWNhdGlvbklzUG9zc2libGVGcm9tS2V5VGVtcENhY2hlQW5kVmFsdWVQYXJhbWV0ZXJPbmUoa2V5VGVtcENhY2hlLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUZyb21LZXlUZW1wQ2FjaGVBbmRWYWx1ZVBhcmFtZXRlclRlbXBDYWNoZShrZXlUZW1wQ2FjaGUsIHZhbHVlKTtcbiAgICAgICAgY29uc3QgdGVtcENhY2hlV0xpc3RBY3Rpb24gPSB0aGlzLnRlbXBDYWNoZVdMaXN0QWN0aW9uO1xuICAgICAgICBpZiAoIXRlbXBDYWNoZVdMaXN0QWN0aW9uLmhhcyhrZXlUZW1wQ2FjaGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2V0ID0gdGVtcENhY2hlV0xpc3RBY3Rpb24uZ2V0KGtleVRlbXBDYWNoZSk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbUdldCBvZiBnZXQpIHtcbiAgICAgICAgICAgIGl0ZW1HZXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlbGV0ZUZyb21LZXlUZW1wQ2FjaGVQYXJhbWV0ZXJUZW1wQ2FjaGUoa2V5VGVtcENhY2hlKSB7XG4gICAgICAgIHRoaXMudGVtcENhY2hlLmRlbGV0ZShrZXlUZW1wQ2FjaGUpO1xuICAgIH1cbn1cblRlbXBDYWNoZVNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgVGVtcENhY2hlU2VydmljZSgpO1xuZXhwb3J0IHZhciBFbnVtUldUTW9kZTtcbihmdW5jdGlvbiAoRW51bVJXVE1vZGUpIHtcbiAgICBFbnVtUldUTW9kZVtFbnVtUldUTW9kZVtcInJlbGVhc2VcIl0gPSAwXSA9IFwicmVsZWFzZVwiO1xuICAgIEVudW1SV1RNb2RlW0VudW1SV1RNb2RlW1widGVzdFwiXSA9IDFdID0gXCJ0ZXN0XCI7XG59KShFbnVtUldUTW9kZSB8fCAoRW51bVJXVE1vZGUgPSB7fSkpO1xuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKGV4Y2VwdGlvbikge1xuICAgICAgICB0aGlzLmV4Y2VwdGlvbiA9IGV4Y2VwdGlvbjtcbiAgICB9XG4gICAgc3RhdGljIHN1Y2Nlc3MoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXhjZXB0aW9uQ29udHJvbGxlcihudWxsKTtcbiAgICB9XG4gICAgc3RhdGljIGV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFeGNlcHRpb25Db250cm9sbGVyKGV4Y2VwdGlvbik7XG4gICAgfVxuICAgIGdldCBnZXRLZXlQYXJhbWV0ZXJFeGNlcHRpb24oKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHJldHVybiAoX2IgPSAoX2EgPSB0aGlzLmV4Y2VwdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmtleSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJcIjtcbiAgICB9XG4gICAgaXNXaGVyZU5vdEVxdWFsc051bGxQYXJhbWV0ZXJFeGNlcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4Y2VwdGlvbiAhPSBudWxsO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhjZXB0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkV4Y2VwdGlvbkNvbnRyb2xsZXIoZXhjZXB0aW9uOiBudWxsKVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIkV4Y2VwdGlvbkNvbnRyb2xsZXIoZXhjZXB0aW9uOiBcIiArIHRoaXMuZXhjZXB0aW9uICsgXCIpXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlc3VsdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVyLCBleGNlcHRpb25Db250cm9sbGVyKSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyID0gcGFyYW1ldGVyO1xuICAgICAgICB0aGlzLmV4Y2VwdGlvbkNvbnRyb2xsZXIgPSBleGNlcHRpb25Db250cm9sbGVyO1xuICAgIH1cbiAgICBzdGF0aWMgc3VjY2VzcyhwYXJhbWV0ZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXN1bHQocGFyYW1ldGVyLCBFeGNlcHRpb25Db250cm9sbGVyLnN1Y2Nlc3MoKSk7XG4gICAgfVxuICAgIHN0YXRpYyBleGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzdWx0KG51bGwsIEV4Y2VwdGlvbkNvbnRyb2xsZXIuZXhjZXB0aW9uKGV4Y2VwdGlvbikpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z1ByaW50KHRleHQpIHtcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z1ByaW50RXhjZXB0aW9uKHRleHQpIHtcbiAgICBkZWJ1Z1ByaW50KFwiXFx4MUJbMzFtXCIgKyB0ZXh0ICsgXCJcXHgxYlswbVwiKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTG9jYWxFeGNlcHRpb24sIEVudW1HdWlsdHksIEJhc2VNb2RlbCwgQmFzZUxpc3RNb2RlbCwgUmVzdWx0LCBOZXR3b3JrRXhjZXB0aW9uLCBCYXNlRGF0YUZvck5hbWVkLCBEZWZhdWx0U3RyZWFtV1N0YXRlLCBkZWJ1Z1ByaW50LCBFeGNlcHRpb25Db250cm9sbGVyLCBCYXNlTmFtZWRTdHJlYW1XU3RhdGUsIEJhc2VNb2RlbFJlcG9zaXRvcnksIEVudW1SV1RNb2RlIH0gZnJvbSBcImxpYnJhcnlfYXJjaGl0ZWN0dXJlX212dm1fbW9kaWZ5X2phdmFzY3JpcHRcIjtcclxuXHJcbmNsYXNzIFJlYWR5RGF0YVV0aWxpdHkge1xyXG4gICAgc3RhdGljICNzdWNjZXNzID0gXCJzdWNjZXNzXCI7XHJcbiAgICBzdGF0aWMgI3Vua25vd24gPSBcInVua25vd25cIjtcclxuICAgIHN0YXRpYyAjaVBBUEkgPSBcImh0dHBzOi8vanNvbmlwLmNvbS9cIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAobmV3LnRhcmdldCA9PT0gUmVhZHlEYXRhVXRpbGl0eSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJSZWFkeURhdGFVdGlsaXR5XCIsRW51bUd1aWx0eS5kZXZlbG9wZXIsXCJSZWFkeURhdGFVdGlsaXR5UVFDb25zdHJ1Y3RvclwiLFwiVGhpcyBjbGFzcyBpcyBzdGF0aWMsIHRoZXJlIGlzIG5vIHBvaW50IGluIGNhbGxpbmcgYW4gb2JqZWN0IGFuZCBpbmhlcml0YW5jZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXQgc3VjY2VzcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jc3VjY2VzcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IHVua25vd24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Vua25vd247XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBpUEFQSSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jaVBBUEk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEtleXNIdHRwU2VydmljZVV0aWxpdHkge1xyXG4gICAgLyogSVBBZGRyZXNzICovXHJcbiAgICBzdGF0aWMgI2lQQWRkcmVzc1FRSXAgPSBcImlwXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKG5ldy50YXJnZXQgPT09IEtleXNIdHRwU2VydmljZVV0aWxpdHkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eVwiLEVudW1HdWlsdHkuZGV2ZWxvcGVyLFwiS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eVFRQ29uc3RydWN0b3JcIixcIlRoaXMgY2xhc3MgaXMgc3RhdGljLCB0aGVyZSBpcyBubyBwb2ludCBpbiBjYWxsaW5nIGFuIG9iamVjdCBhbmQgaW5oZXJpdGFuY2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaVBBZGRyZXNzUVFJcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jaVBBZGRyZXNzUVFJcDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSVBBZGRyZXNzIGV4dGVuZHMgQmFzZU1vZGVsIHtcclxuICAgICNpcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpcCkge1xyXG4gICAgICAgIHN1cGVyKFwiXCIgKyBpcCArIFwiXCIpO1xyXG4gICAgICAgIHRoaXMuI2lwID0gaXA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldENsb25lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgSVBBZGRyZXNzKHRoaXMuaXApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBcIklQQWRkcmVzcyhpcDogXCIgKyB0aGlzLmlwICsgXCIpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNpcDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTGlzdElQQWRkcmVzcyBleHRlbmRzIEJhc2VMaXN0TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IobGlzdE1vZGVsKSB7XHJcbiAgICAgICAgc3VwZXIobGlzdE1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0Q2xvbmUoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3TGlzdE1vZGVsID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yKGNvbnN0IGl0ZW1Nb2RlbCBvZiB0aGlzLmxpc3RNb2RlbCkge1xyXG4gICAgICAgICAgICBuZXdMaXN0TW9kZWwucHVzaChpdGVtTW9kZWwuZ2V0Q2xvbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IExpc3RJUEFkZHJlc3MobmV3TGlzdE1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBsZXQgc3RyTGlzdE1vZGVsID0gXCJcXG5cIjtcclxuICAgICAgICBmb3IoY29uc3QgaXRlbU1vZGVsIG9mIHRoaXMubGlzdE1vZGVsKSB7XHJcbiAgICAgICAgICAgIHN0ckxpc3RNb2RlbCArPSBpdGVtTW9kZWwudG9TdHJpbmcoKSArIFwiLFxcblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJMaXN0SVBBZGRyZXNzKGxpc3RNb2RlbDogW1wiICsgc3RyTGlzdE1vZGVsICsgXCJdKVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gVGhpcyBjbGFzcyBuZWVkcyB0byBiZSBjYWxsZWQgd2hlcmUgdGhlcmUgYXJlIG5ldHdvcmsgcmVxdWVzdHMgKGluIHRoZSBkYXRhIHNvdXJjZSksIFxyXG4vLy8gc2luY2Ugd2l0aG91dCB0aGlzIGNsYXNzIHRoZSBkZXZlbG9wZXIgd2lsbCBub3Qga25vdyBpbiB3aGljaCBjbGFzcyB0aGUgbmV0d29yayByZXF1ZXN0cyBhcmVcclxuY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG4gICAgc3RhdGljIGluc3RhbmNlID0gbmV3IEh0dHBTZXJ2aWNlKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYoSHR0cFNlcnZpY2UuaW5zdGFuY2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gSHR0cFNlcnZpY2UuaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBJUEFkZHJlc3NSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZU1vZGVsUmVwb3NpdG9yeSB7XHJcbiAgICAjaHR0cFNlcnZpY2UgPSBIdHRwU2VydmljZS5pbnN0YW5jZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbnVtUldUTW9kZSkge1xyXG4gICAgICAgIHN1cGVyKGVudW1SV1RNb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCYXNlTW9kZWxGcm9tTWFwQW5kTGlzdEtleXMobWFwLGxpc3RLZXlzKSB7XHJcbiAgICAgICAgaWYobGlzdEtleXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJUEFkZHJlc3MoXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSVBBZGRyZXNzKG1hcC5oYXMobGlzdEtleXNbMF0pID8gbWFwLmdldChsaXN0S2V5c1swXSkgOiBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCYXNlTGlzdE1vZGVsRnJvbUxpc3RNb2RlbChsaXN0TW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IExpc3RJUEFkZHJlc3MobGlzdE1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRNb2RlQ2FsbGJhY2tGcm9tUmVsZWFzZUNhbGxiYWNrQW5kVGVzdENhbGxiYWNrUGFyYW1ldGVyRW51bVJXVE1vZGUoXHJcbiAgICAgICAgICAgIHRoaXMuI2dldElQQWRkcmVzc1BhcmFtZXRlckh0dHBTZXJ2aWNlV1JlbGVhc2VDYWxsYmFjayxcclxuICAgICAgICAgICAgdGhpcy4jZ2V0SVBBZGRyZXNzUGFyYW1ldGVySHR0cFNlcnZpY2VXVGVzdENhbGxiYWNrKSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBfaHR0cFNlcnZpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2h0dHBTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgICNnZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZVdSZWxlYXNlQ2FsbGJhY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChSZWFkeURhdGFVdGlsaXR5LmlQQVBJLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IE5ldHdvcmtFeGNlcHRpb24uZnJvbUtleUFuZFN0YXR1c0NvZGUoXCJJUEFkZHJlc3NSZXBvc2l0b3J5XCIscmVzcG9uc2Uuc3RhdHVzLnRvU3RyaW5nKCkscmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKGpzb24pKTtcclxuICAgICAgICAgICAgcmV0dXJuIFJlc3VsdC5zdWNjZXNzKHRoaXMuZ2V0QmFzZU1vZGVsRnJvbU1hcEFuZExpc3RLZXlzKG1hcCxbS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eS5pUEFkZHJlc3NRUUlwXSkpO1xyXG4gICAgICAgIH0gY2F0Y2goZXhjZXB0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmKGV4Y2VwdGlvbiBpbnN0YW5jZW9mIE5ldHdvcmtFeGNlcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBSZXN1bHQuZXhjZXB0aW9uKGV4Y2VwdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFJlc3VsdC5leGNlcHRpb24obmV3IExvY2FsRXhjZXB0aW9uKFwiSVBBZGRyZXNzUmVwb3NpdG9yeVwiLEVudW1HdWlsdHkuZGV2aWNlLFJlYWR5RGF0YVV0aWxpdHkudW5rbm93bixleGNlcHRpb24udG9TdHJpbmcoKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI2dldElQQWRkcmVzc1BhcmFtZXRlckh0dHBTZXJ2aWNlV1Rlc3RDYWxsYmFjayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwxMDAwKSk7XHJcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5zdWNjZXNzKHRoaXMuZ2V0QmFzZU1vZGVsRnJvbU1hcEFuZExpc3RLZXlzKFxyXG4gICAgICAgICAgICBuZXcgTWFwKFtcclxuICAgICAgICAgICAgICAgIFtLZXlzSHR0cFNlcnZpY2VVdGlsaXR5LmlQQWRkcmVzc1FRSXAsXCIxMjEuMTIxLjEyLjEyXCJdXHJcbiAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICBbS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eS5pUEFkZHJlc3NRUUlwXSkpO1xyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3QgRW51bURhdGFGb3JNYWluVk0gPSB7XHJcbiAgICBpc0xvYWRpbmcgOiBcImlzTG9hZGluZ1wiLFxyXG4gICAgZXhjZXB0aW9uIDogXCJleGNlcHRpb25cIixcclxuICAgIHN1Y2Nlc3MgOiBcInN1Y2Nlc3NcIixcclxufTtcclxuXHJcbmNsYXNzIERhdGFGb3JNYWluVk0gZXh0ZW5kcyBCYXNlRGF0YUZvck5hbWVkIHtcclxuICAgIGlQQWRkcmVzcztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihpc0xvYWRpbmcsaVBBZGRyZXNzKSB7XHJcbiAgICAgICAgc3VwZXIoaXNMb2FkaW5nKTtcclxuICAgICAgICB0aGlzLmlQQWRkcmVzcyA9IGlQQWRkcmVzcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0RW51bURhdGFGb3JOYW1lZCgpIHtcclxuICAgICAgICBpZih0aGlzLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gRW51bURhdGFGb3JNYWluVk0uaXNMb2FkaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmV4Y2VwdGlvbkNvbnRyb2xsZXIuaXNXaGVyZU5vdEVxdWFsc051bGxQYXJhbWV0ZXJFeGNlcHRpb24oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW51bURhdGFGb3JNYWluVk0uZXhjZXB0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRW51bURhdGFGb3JNYWluVk0uc3VjY2VzcztcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gXCJEYXRhRm9yTWFpblZNKGlzTG9hZGluZzogXCIgKyB0aGlzLmlzTG9hZGluZyArIFwiLCBcIiBcclxuICAgICAgICAgICAgKyBcImV4Y2VwdGlvbkNvbnRyb2xsZXI6IFwiICsgdGhpcy5leGNlcHRpb25Db250cm9sbGVyICsgXCIsIFwiIFxyXG4gICAgICAgICAgICArIFwiaVBBZGRyZXNzOiBcIiArIHRoaXMuaVBBZGRyZXNzICsgXCIpXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1haW5WTSB7XHJcbiAgICAvLyBNb2RlbFJlcG9zaXRvcnlcclxuICAgICNpUEFkZHJlc3NSZXBvc2l0b3J5ID0gbmV3IElQQWRkcmVzc1JlcG9zaXRvcnkoRW51bVJXVE1vZGUucmVsZWFzZSk7XHJcbiAgICBcclxuICAgIC8vIE5hbWVkVXRpbGl0eVxyXG4gICAgXHJcbiAgICAvLyBOYW1lZFN0cmVhbVdTdGF0ZVxyXG4gICAgI25hbWVkU3RyZWFtV1N0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI25hbWVkU3RyZWFtV1N0YXRlID0gbmV3IERlZmF1bHRTdHJlYW1XU3RhdGUobmV3IERhdGFGb3JNYWluVk0odHJ1ZSxuZXcgSVBBZGRyZXNzKFwiXCIpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLiNuYW1lZFN0cmVhbVdTdGF0ZS5saXN0ZW5TdHJlYW1EYXRhRm9yTmFtZWRGcm9tQ2FsbGJhY2soKF9kYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuI2J1aWxkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZmlyc3RSZXF1ZXN0ID0gYXdhaXQgdGhpcy4jZmlyc3RSZXF1ZXN0KCk7XHJcbiAgICAgICAgZGVidWdQcmludChcIk1haW5WTTogXCIgKyBmaXJzdFJlcXVlc3QpO1xyXG4gICAgICAgIHRoaXMuI25hbWVkU3RyZWFtV1N0YXRlLm5vdGlmeVN0cmVhbURhdGFGb3JOYW1lZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy4jbmFtZWRTdHJlYW1XU3RhdGUuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgICNidWlsZCgpIHtcclxuICAgICAgICBjb25zdCBkYXRhRm9yTmFtZWQgPSB0aGlzLiNuYW1lZFN0cmVhbVdTdGF0ZS5nZXREYXRhRm9yTmFtZWQ7XHJcbiAgICAgICAgc3dpdGNoKGRhdGFGb3JOYW1lZC5nZXRFbnVtRGF0YUZvck5hbWVkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRW51bURhdGFGb3JNYWluVk0uaXNMb2FkaW5nOlxyXG4gICAgICAgICAgICAgICAgZGVidWdQcmludChcIkJ1aWxkOiBJc0xvYWRpbmdcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFbnVtRGF0YUZvck1haW5WTS5leGNlcHRpb246XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z1ByaW50KFwiQnVpbGQ6IEV4Y2VwdGlvbihcIiArIGRhdGFGb3JOYW1lZC5leGNlcHRpb25Db250cm9sbGVyLmdldEtleVBhcmFtZXRlckV4Y2VwdGlvbiArIFwiKVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVudW1EYXRhRm9yTWFpblZNLnN1Y2Nlc3M6XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z1ByaW50KFwiQnVpbGQ6IFN1Y2Nlc3MoXCIgKyBkYXRhRm9yTmFtZWQuaVBBZGRyZXNzICsgXCIpXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgI2ZpcnN0UmVxdWVzdCgpIHtcclxuICAgICAgICBjb25zdCBnZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZSA9IGF3YWl0IHRoaXMuI2lQQWRkcmVzc1JlcG9zaXRvcnkuZ2V0SVBBZGRyZXNzUGFyYW1ldGVySHR0cFNlcnZpY2UoKTtcclxuICAgICAgICBpZihnZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZS5leGNlcHRpb25Db250cm9sbGVyLmlzV2hlcmVOb3RFcXVhbHNOdWxsUGFyYW1ldGVyRXhjZXB0aW9uKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI2ZpcnN0UVFGaXJzdFJlcXVlc3RRUUdldElQQWRkcmVzc1BhcmFtZXRlckh0dHBTZXJ2aWNlKGdldElQQWRkcmVzc1BhcmFtZXRlckh0dHBTZXJ2aWNlLmV4Y2VwdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiNuYW1lZFN0cmVhbVdTdGF0ZS5nZXREYXRhRm9yTmFtZWQuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy4jbmFtZWRTdHJlYW1XU3RhdGUuZ2V0RGF0YUZvck5hbWVkLmlQQWRkcmVzcyA9IGdldElQQWRkcmVzc1BhcmFtZXRlckh0dHBTZXJ2aWNlLnBhcmFtZXRlci5nZXRDbG9uZTtcclxuICAgICAgICByZXR1cm4gUmVhZHlEYXRhVXRpbGl0eS5zdWNjZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jICNmaXJzdFFRRmlyc3RSZXF1ZXN0UVFHZXRJUEFkZHJlc3NQYXJhbWV0ZXJIdHRwU2VydmljZShleGNlcHRpb25Db250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy4jbmFtZWRTdHJlYW1XU3RhdGUuZ2V0RGF0YUZvck5hbWVkLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuI25hbWVkU3RyZWFtV1N0YXRlLmdldERhdGFGb3JOYW1lZC5leGNlcHRpb25Db250cm9sbGVyID0gZXhjZXB0aW9uQ29udHJvbGxlcjtcclxuICAgICAgICByZXR1cm4gZXhjZXB0aW9uQ29udHJvbGxlci5nZXRLZXlQYXJhbWV0ZXJFeGNlcHRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgICBjb25zdCBtYWluVk0gPSBuZXcgTWFpblZNKCk7XHJcbiAgICBhd2FpdCBtYWluVk0uaW5pdCgpO1xyXG4gICAgbWFpblZNLmRpc3Bvc2UoKTtcclxufVxyXG5tYWluKCk7XHJcbi8vIEVYUEVDVEVEIE9VVFBVVDpcclxuLy9cclxuLy8gTWFpblZNOiBzdWNjZXNzXHJcbi8vIEJ1aWxkOiBTdWNjZXNzKElQQWRkcmVzcyhpcDogJHt5b3VyX2lwfSkpXHJcblxyXG4vLy8gT1JcclxuXHJcbi8vIEVYUEVDVEVEIE9VVFBVVDpcclxuLy9cclxuLy8gPT09c3RhcnRfdG9fdHJhY2VfZXhjZXB0aW9uPT09XHJcbi8vXHJcbi8vIFdoZXJlSGFwcGVuZWRFeGNlcHRpb24oQ2xhc3MpIC0tPiAke1doZXJlSGFwcGVuZWRFeGNlcHRpb24oQ2xhc3MpfVxyXG4vLyBOYW1lRXhjZXB0aW9uKENsYXNzKSAtLT4gJHtOYW1lRXhjZXB0aW9uKENsYXNzKX1cclxuLy8gdG9TdHJpbmcoKSAtLT4gJHt0b1N0cmluZygpfVxyXG4vL1xyXG4vLyA9PT1lbmRfdG9fdHJhY2VfZXhjZXB0aW9uPT09XHJcbi8vXHJcbi8vIE1haW5WTTogJHtnZXRLZXlQYXJhbWV0ZXJFeGNlcHRpb259XHJcbi8vIEJ1aWxkOiBFeGNlcHRpb24oJHtnZXRLZXlQYXJhbWV0ZXJFeGNlcHRpb259KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==