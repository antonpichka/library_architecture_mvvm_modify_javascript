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
/* harmony export */   CurrentModelWIndex: () => (/* binding */ CurrentModelWIndex),
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

    toString() {
        return "DataForMainVM(isLoading: " + this.isLoading + ", " 
            + "exceptionController: " + this.exceptionController + ", " 
            + "iPAddress: " + this.iPAddress + ")";
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
                new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.NamedCallback("init",this.#initReleaseCallback),
            ],
            [
                new library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.NamedCallback("init",this.#initTestCallback),
            ]
        );
    }

    async init() {
        this.#namedStreamWState.listenStreamDataForNamedFromCallback((_data) => {
            this.#build();
        });
        const result = await this.#rwtMode.getNamedCallbackFromName("init").callback();
        (0,library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.debugPrint)("MainVM: " + result);
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

    #initReleaseCallback = async () => {
        const getIPAddressWhereJsonipAPIParameterHttpService = await this.#getEEIPAddressEEWhereJsonipAPIEEParameterHttpService.getIPAddressWhereJsonipAPIParameterHttpService();
        if(getIPAddressWhereJsonipAPIParameterHttpService.exceptionController.isWhereNotEqualsNullParameterException()) {
            return this.#firstQQInitReleaseCallbackQQGetIPAddressWhereJsonipAPIParameterHttpService(getIPAddressWhereJsonipAPIParameterHttpService.exceptionController);
        }
        this.#namedStreamWState.getDataForNamed.isLoading = false;
        this.#namedStreamWState.getDataForNamed.iPAddress = getIPAddressWhereJsonipAPIParameterHttpService.parameter.getClone;
        return KeysSuccessUtility.sUCCESS;
    }

    #initTestCallback = async () => {
        // Simulation get "IPAddress"
        const iPAddress = new IPAddress("121.121.12.12");
        await new Promise(resolve => setTimeout(resolve,1000));
        this.#namedStreamWState.getDataForNamed.isLoading = false;
        this.#namedStreamWState.getDataForNamed.iPAddress = iPAddress.getClone;
        return KeysSuccessUtility.sUCCESS;
    }

    async #firstQQInitReleaseCallbackQQGetIPAddressWhereJsonipAPIParameterHttpService(exceptionController) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUMxQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDO0FBQzVCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7OztVQ3RaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFPO0FBQ3JPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVGQUFjLDBCQUEwQixtRkFBVTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVGQUFjLHdCQUF3QixtRkFBVTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVGQUFjLHNCQUFzQixtRkFBVTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtGQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0ZBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxzQkFBc0IseUZBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtFQUFNO0FBQ3pCLFVBQVU7QUFDVixvQ0FBb0MseUZBQWdCO0FBQ3BELHVCQUF1QiwrRUFBTTtBQUM3QjtBQUNBLG1CQUFtQiwrRUFBTSxlQUFlLHVGQUFjLHdEQUF3RCxtRkFBVTtBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlGQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw0RkFBbUI7QUFDekQsNEJBQTRCLGdGQUFPO0FBQ25DLFlBQVksb0ZBQVc7QUFDdkI7QUFDQSxvQkFBb0Isc0ZBQWE7QUFDakM7QUFDQTtBQUNBLG9CQUFvQixzRkFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVEsdUZBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1RkFBVTtBQUMxQjtBQUNBO0FBQ0EsZ0JBQWdCLHVGQUFVO0FBQzFCO0FBQ0E7QUFDQSxnQkFBZ0IsdUZBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLDhCQUE4QjtBQUM5QixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHNCQUFzQix5QkFBeUIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUvLi4vZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGFtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGFtcGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4YW1wbGUvLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmFzZURhdGFGb3JOYW1lZCB7XG4gICAgY29uc3RydWN0b3IoaXNMb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gaXNMb2FkaW5nO1xuICAgICAgICB0aGlzLmV4Y2VwdGlvbkNvbnRyb2xsZXIgPSBFeGNlcHRpb25Db250cm9sbGVyLnN1Y2Nlc3MoKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZUV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3IodGhpc0NsYXNzLCBleGNlcHRpb25DbGFzcywga2V5KSB7XG4gICAgICAgIHRoaXMudGhpc0NsYXNzID0gdGhpc0NsYXNzO1xuICAgICAgICB0aGlzLmV4Y2VwdGlvbkNsYXNzID0gZXhjZXB0aW9uQ2xhc3M7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIH1cbiAgICAvLy8gQ2FsbCB0aGlzIG1ldGhvZCBpbiB0aGUgZGVzY2VuZGFudCBjb25zdHJ1Y3RvciBhcyB0aGUgbGFzdCBsaW5lXG4gICAgZGVidWdQcmludEV4Y2VwdGlvbldoZXJlVG9TdHJpbmdQYXJhbWV0ZXJzVGhpc0NsYXNzQW5kRXhjZXB0aW9uQ2xhc3MoKSB7XG4gICAgICAgIGRlYnVnUHJpbnRFeGNlcHRpb24oXCJcXG49PT1zdGFydF90b190cmFjZV9leGNlcHRpb249PT1cXG5cIik7XG4gICAgICAgIGRlYnVnUHJpbnRFeGNlcHRpb24oXCJXaGVyZUhhcHBlbmVkRXhjZXB0aW9uKENsYXNzKSAtLT4gXCIgKyB0aGlzLnRoaXNDbGFzcyArIFwiXFxuXCIgK1xuICAgICAgICAgICAgXCJOYW1lRXhjZXB0aW9uKENsYXNzKSAtLT4gXCIgKyB0aGlzLmV4Y2VwdGlvbkNsYXNzICsgXCJcXG5cIiArXG4gICAgICAgICAgICBcInRvU3RyaW5nKCkgLS0+IFwiICsgdGhpcy50b1N0cmluZygpKTtcbiAgICAgICAgZGVidWdQcmludEV4Y2VwdGlvbihcIlxcbj09PWVuZF90b190cmFjZV9leGNlcHRpb249PT1cXG5cIik7XG4gICAgfVxufVxuZXhwb3J0IHZhciBFbnVtR3VpbHR5O1xuKGZ1bmN0aW9uIChFbnVtR3VpbHR5KSB7XG4gICAgRW51bUd1aWx0eVtFbnVtR3VpbHR5W1wiZGV2ZWxvcGVyXCJdID0gMF0gPSBcImRldmVsb3BlclwiO1xuICAgIEVudW1HdWlsdHlbRW51bUd1aWx0eVtcImRldmljZVwiXSA9IDFdID0gXCJkZXZpY2VcIjtcbiAgICBFbnVtR3VpbHR5W0VudW1HdWlsdHlbXCJ1c2VyXCJdID0gMl0gPSBcInVzZXJcIjtcbn0pKEVudW1HdWlsdHkgfHwgKEVudW1HdWlsdHkgPSB7fSkpO1xuZXhwb3J0IGNsYXNzIExvY2FsRXhjZXB0aW9uIGV4dGVuZHMgQmFzZUV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3IodGhpc0NsYXNzLCB2YWx1ZVdFbnVtR3VpbHR5LCBrZXksIG1lc3NhZ2UgPSBcIlwiKSB7XG4gICAgICAgIHN1cGVyKHRoaXNDbGFzcywgXCJMb2NhbEV4Y2VwdGlvblwiLCBrZXkpO1xuICAgICAgICB0aGlzLnZhbHVlV0VudW1HdWlsdHkgPSB2YWx1ZVdFbnVtR3VpbHR5O1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLmRlYnVnUHJpbnRFeGNlcHRpb25XaGVyZVRvU3RyaW5nUGFyYW1ldGVyc1RoaXNDbGFzc0FuZEV4Y2VwdGlvbkNsYXNzKCk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJMb2NhbEV4Y2VwdGlvbih2YWx1ZVdFbnVtR3VpbHR5OiBcIiArIHRoaXMudmFsdWVXRW51bUd1aWx0eSArIFwiLCBcIiArXG4gICAgICAgICAgICBcImtleTogXCIgKyB0aGlzLmtleSArIFwiLCBcIiArXG4gICAgICAgICAgICBcIm1lc3NhZ2UgKG9wdGlvbmFsKTogXCIgKyB0aGlzLm1lc3NhZ2UgKyBcIilcIjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTmV0d29ya0V4Y2VwdGlvbiBleHRlbmRzIEJhc2VFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHRoaXNDbGFzcywga2V5LCBzdGF0dXNDb2RlLCBuYW1lU3RhdHVzQ29kZSA9IFwiXCIsIGRlc2NyaXB0aW9uU3RhdHVzQ29kZSA9IFwiXCIpIHtcbiAgICAgICAgc3VwZXIodGhpc0NsYXNzLCBcIk5ldHdvcmtFeGNlcHRpb25cIiwga2V5KTtcbiAgICAgICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcbiAgICAgICAgdGhpcy5uYW1lU3RhdHVzQ29kZSA9IG5hbWVTdGF0dXNDb2RlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uU3RhdHVzQ29kZSA9IGRlc2NyaXB0aW9uU3RhdHVzQ29kZTtcbiAgICAgICAgdGhpcy5kZWJ1Z1ByaW50RXhjZXB0aW9uV2hlcmVUb1N0cmluZ1BhcmFtZXRlcnNUaGlzQ2xhc3NBbmRFeGNlcHRpb25DbGFzcygpO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbUtleUFuZFN0YXR1c0NvZGUodGhpc0NsYXNzLCBrZXksIHN0YXR1c0NvZGUpIHtcbiAgICAgICAgc3dpdGNoIChzdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDIwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDIwMSwgXCIyMDEgQ3JlYXRlZFwiLCBcIlRoZSByZXF1ZXN0IGhhcyBiZWVuIGZ1bGZpbGxlZCBhbmQgcmVzdWx0ZWQgaW4gYSBuZXcgcmVzb3VyY2UgYmVpbmcgY3JlYXRlZC5cIik7XG4gICAgICAgICAgICBjYXNlIDIwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDIwMiwgXCIyMDIgQWNjZXB0ZWRcIiwgXCJUaGUgcmVxdWVzdCBoYXMgYmVlbiBhY2NlcHRlZCBmb3IgcHJvY2Vzc2luZywgYnV0IHRoZSBwcm9jZXNzaW5nIGhhcyBub3QgYmVlbiBjb21wbGV0ZWQuXCIpO1xuICAgICAgICAgICAgY2FzZSAyMDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDMsIFwiMjAzIE5vbi1BdXRob3JpdGF0aXZlIEluZm9ybWF0aW9uXCIsIFwiVGhlIHJldHVybmVkIG1ldGFJbmZvcm1hdGlvbiBpbiB0aGUgZW50aXR5LWhlYWRlciBpcyBub3QgdGhlIGRlZmluaXRpdmUgc2V0IGFzIGF2YWlsYWJsZSBmcm9tIHRoZSBvcmlnaW4gc2VydmVyLCBidXQgaXMgZ2F0aGVyZWQgZnJvbSBhIGxvY2FsIG9yIGEgdGhpcmQtcGFydHkgY29weS5cIik7XG4gICAgICAgICAgICBjYXNlIDIwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDIwNCwgXCIyMDQgTm8gQ29udGVudFwiLCBcIlRoZSBzZXJ2ZXIgaGFzIGZ1bGZpbGxlZCB0aGUgcmVxdWVzdCBidXQgZG9lcyBub3QgbmVlZCB0byByZXR1cm4gYW4gZW50aXR5LWJvZHksIGFuZCBtaWdodCB3YW50IHRvIHJldHVybiB1cGRhdGVkIG1ldGFJbmZvcm1hdGlvbi5cIik7XG4gICAgICAgICAgICBjYXNlIDIwNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDIwNSwgXCIyMDUgUmVzZXQgQ29udGVudFwiLCBcIlRoZSBzZXJ2ZXIgaGFzIGZ1bGZpbGxlZCB0aGUgcmVxdWVzdCBhbmQgdGhlIHVzZXIgYWdlbnQgU0hPVUxEIHJlc2V0IHRoZSBkb2N1bWVudCB2aWV3IHdoaWNoIGNhdXNlZCB0aGUgcmVxdWVzdCB0byBiZSBzZW50LlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjA2LCBcIjIwNiBQYXJ0aWFsIENvbnRlbnRcIiwgXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgdGhlIHBhcnRpYWwgR0VUIHJlcXVlc3QgZm9yIHRoZSByZXNvdXJjZS5cIik7XG4gICAgICAgICAgICBjYXNlIDMwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwMCwgXCIzMDAgTXVsdGlwbGUgQ2hvaWNlc1wiLCBcIlVzZXIgKG9yIHVzZXIgYWdlbnQpIGNhbiBzZWxlY3QgYSBwcmVmZXJyZWQgcmVwcmVzZW50YXRpb24gYW5kIHJlZGlyZWN0IGl0cyByZXF1ZXN0IHRvIHRoYXQgbG9jYXRpb24uXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDEsIFwiMzAxIE1vdmVkIFBlcm1hbmVudGx5XCIsIFwiVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBoYXMgYmVlbiBhc3NpZ25lZCBhIG5ldyBwZXJtYW5lbnQgVVJJIGFuZCBhbnkgZnV0dXJlIHJlZmVyZW5jZXMgdG8gdGhpcyByZXNvdXJjZSBTSE9VTEQgdXNlIG9uZSBvZiB0aGUgcmV0dXJuZWQgVVJJcy5cIik7XG4gICAgICAgICAgICBjYXNlIDMwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwMiwgXCIzMDIgRm91bmRcIiwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzAzLCBcIjMwMyBTZWUgT3RoZXJcIiwgXCJUaGUgcmVzcG9uc2UgdG8gdGhlIHJlcXVlc3QgY2FuIGJlIGZvdW5kIHVuZGVyIGEgZGlmZmVyZW50IFVSSSBhbmQgU0hPVUxEIGJlIHJldHJpZXZlZCB1c2luZyBhIEdFVCBtZXRob2Qgb24gdGhhdCByZXNvdXJjZS5cIik7XG4gICAgICAgICAgICBjYXNlIDMwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwNCwgXCIzMDQgTm90IE1vZGlmaWVkXCIsIFwiSWYgdGhlIGNsaWVudCBoYXMgcGVyZm9ybWVkIGEgY29uZGl0aW9uYWwgR0VUIHJlcXVlc3QgYW5kIGFjY2VzcyBpcyBhbGxvd2VkLCBidXQgdGhlIGRvY3VtZW50IGhhcyBub3QgYmVlbiBtb2RpZmllZCwgdGhlIHNlcnZlciBTSE9VTEQgcmVzcG9uZCB3aXRoIHRoaXMgc3RhdHVzIGNvZGUuXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDUsIFwiMzA1IFVzZSBQcm94eVwiLCBcIlRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgTVVTVCBiZSBhY2Nlc3NlZCB0aHJvdWdoIHRoZSBwcm94eSBnaXZlbiBieSB0aGUgTG9jYXRpb24gZmllbGQuXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDcsIFwiMzA3IFRlbXBvcmFyeSBSZWRpcmVjdFwiLCBcIlRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgcmVzaWRlcyB0ZW1wb3JhcmlseSB1bmRlciBhIGRpZmZlcmVudCBVUkkuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDAsIFwiNDAwIEJhZCBSZXF1ZXN0XCIsIFwiVGhlIHJlcXVlc3QgY291bGQgbm90IGJlIHVuZGVyc3Rvb2QgYnkgdGhlIHNlcnZlciBkdWUgdG8gbWFsZm9ybWVkIHN5bnRheC5cIik7XG4gICAgICAgICAgICBjYXNlIDQwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwMSwgXCI0MDEgVW5hdXRob3JpemVkXCIsIFwiVGhlIHJlcXVlc3QgcmVxdWlyZXMgdXNlciBhdXRoZW50aWNhdGlvbi5cIik7XG4gICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwMywgXCI0MDMgRm9yYmlkZGVuXCIsIFwiVGhlIHNlcnZlciB1bmRlcnN0b29kIHRoZSByZXF1ZXN0LCBidXQgaXMgcmVmdXNpbmcgdG8gZnVsZmlsbCBpdC5cIik7XG4gICAgICAgICAgICBjYXNlIDQwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwNCwgXCI0MDQgTm90IEZvdW5kXCIsIFwiVGhlIHNlcnZlciBoYXMgbm90IGZvdW5kIGFueXRoaW5nIG1hdGNoaW5nIHRoZSBSZXF1ZXN0LVVSSS5cIik7XG4gICAgICAgICAgICBjYXNlIDQwNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwNSwgXCI0MDUgTWV0aG9kIE5vdCBBbGxvd2VkJywnVGhlIG1ldGhvZCBzcGVjaWZpZWQgaW4gdGhlIFJlcXVlc3QtTGluZSBpcyBub3QgYWxsb3dlZCBmb3IgdGhlIHJlc291cmNlIGlkZW50aWZpZWQgYnkgdGhlIFJlcXVlc3QtVVJJLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDA2LCBcIjQwNiBOb3QgQWNjZXB0YWJsZVwiLCBcIlRoZSByZXNvdXJjZSBpZGVudGlmaWVkIGJ5IHRoZSByZXF1ZXN0IGlzIG9ubHkgY2FwYWJsZSBvZiBnZW5lcmF0aW5nIHJlc3BvbnNlIGVudGl0aWVzIHdoaWNoIGhhdmUgY29udGVudCBjaGFyYWN0ZXJpc3RpY3Mgbm90IGFjY2VwdGFibGUgYWNjb3JkaW5nIHRvIHRoZSBhY2NlcHQgaGVhZGVycyBzZW50IGluIHRoZSByZXF1ZXN0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDA3LCBcIjQwNyBQcm94eSBBdXRoZW50aWNhdGlvbiBSZXF1aXJlZFwiLCBcIlRoaXMgY29kZSBpcyBzaW1pbGFyIHRvIDQwMSAoVW5hdXRob3JpemVkKSwgYnV0IGluZGljYXRlcyB0aGF0IHRoZSBjbGllbnQgbXVzdCBmaXJzdCBhdXRoZW50aWNhdGUgaXRzZWxmIHdpdGggdGhlIHByb3h5LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDA4LCBcIjQwOCBSZXF1ZXN0IFRpbWVvdXRcIiwgXCJUaGUgY2xpZW50IGRpZCBub3QgcHJvZHVjZSBhIHJlcXVlc3Qgd2l0aGluIHRoZSB0aW1lIHRoYXQgdGhlIHNlcnZlciB3YXMgcHJlcGFyZWQgdG8gd2FpdC5cIik7XG4gICAgICAgICAgICBjYXNlIDQwOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwOSwgXCI0MDkgQ29uZmxpY3RcIiwgXCJUaGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgY29tcGxldGVkIGR1ZSB0byBhIGNvbmZsaWN0IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHJlc291cmNlLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDEwLCBcIjQxMCBHb25lXCIsIFwiVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBpcyBubyBsb25nZXIgYXZhaWxhYmxlIGF0IHRoZSBzZXJ2ZXIgYW5kIG5vIGZvcndhcmRpbmcgYWRkcmVzcyBpcyBrbm93bi5cIik7XG4gICAgICAgICAgICBjYXNlIDQxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQxMSwgXCI0MTEgTGVuZ3RoIFJlcXVpcmVkXCIsIFwiVGhlIHNlcnZlciByZWZ1c2VzIHRvIGFjY2VwdCB0aGUgcmVxdWVzdCB3aXRob3V0IGEgZGVmaW5lZCBDb250ZW50LUxlbmd0aC5cIik7XG4gICAgICAgICAgICBjYXNlIDQxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQxMiwgXCI0MTIgUHJlY29uZGl0aW9uIEZhaWxlZFwiLCBcIlRoZSBwcmVjb25kaXRpb24gZ2l2ZW4gaW4gb25lIG9yIG1vcmUgb2YgdGhlIHJlcXVlc3QtaGVhZGVyIGZpZWxkcyBldmFsdWF0ZWQgdG8gZmFsc2Ugd2hlbiBpdCB3YXMgdGVzdGVkIG9uIHRoZSBzZXJ2ZXIuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTMsIFwiNDEzIFJlcXVlc3QgRW50aXR5IFRvbyBMYXJnZVwiLCBcIlRoZSBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gcHJvY2VzcyBhIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVxdWVzdCBlbnRpdHkgaXMgbGFyZ2VyIHRoYW4gdGhlIHNlcnZlciBpcyB3aWxsaW5nIG9yIGFibGUgdG8gcHJvY2Vzcy5cIik7XG4gICAgICAgICAgICBjYXNlIDQxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQxNCwgXCI0MTQgUmVxdWVzdC1VUkkgVG9vIExvbmdcIiwgXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHNlcnZpY2UgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgUmVxdWVzdC1VUkkgaXMgbG9uZ2VyIHRoYW4gdGhlIHNlcnZlciBpcyB3aWxsaW5nIHRvIGludGVycHJldC5cIik7XG4gICAgICAgICAgICBjYXNlIDQxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQxNSwgXCI0MTUgVW5zdXBwb3J0ZWQgTWVkaWEgVHlwZVwiLCBcIlRoZSBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gc2VydmljZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSBlbnRpdHkgb2YgdGhlIHJlcXVlc3QgaXMgaW4gYSBmb3JtYXQgbm90IHN1cHBvcnRlZCBieSB0aGUgcmVxdWVzdGVkIHJlc291cmNlIGZvciB0aGUgcmVxdWVzdGVkIG1ldGhvZC5cIik7XG4gICAgICAgICAgICBjYXNlIDQxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQxNiwgXCI0MTYgUmVxdWVzdGVkIFJhbmdlIE5vdCBTYXRpc2ZpYWJsZVwiLCBcIkEgc2VydmVyIFNIT1VMRCByZXR1cm4gYSByZXNwb25zZSB3aXRoIHRoaXMgc3RhdHVzIGNvZGUgaWYgYSByZXF1ZXN0IGluY2x1ZGVkIGEgUmFuZ2UgcmVxdWVzdC1oZWFkZXIgZmllbGQgKHNlY3Rpb24gMTQuMzUpLCBhbmQgbm9uZSBvZiB0aGUgcmFuZ2Utc3BlY2lmaWVyIHZhbHVlcyBpbiB0aGlzIGZpZWxkIG92ZXJsYXAgdGhlIGN1cnJlbnQgZXh0ZW50IG9mIHRoZSBzZWxlY3RlZCByZXNvdXJjZSwgYW5kIHRoZSByZXF1ZXN0IGRpZCBub3QgaW5jbHVkZSBhbiBJZi1SYW5nZSByZXF1ZXN0LWhlYWRlciBmaWVsZC5cIik7XG4gICAgICAgICAgICBjYXNlIDQxNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQxNywgXCI0MTcgRXhwZWN0YXRpb24gRmFpbGVkXCIsIFwiVGhlIGV4cGVjdGF0aW9uIGdpdmVuIGluIGFuIEV4cGVjdCByZXF1ZXN0LWhlYWRlciBmaWVsZCAoc2VlIHNlY3Rpb24gMTQuMjApIGNvdWxkIG5vdCBiZSBtZXQgYnkgdGhpcyBzZXJ2ZXIuXCIpO1xuICAgICAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA1MDAsIFwiNTAwIEludGVybmFsIFNlcnZlciBFcnJvclwiLCBcIlRoZSBzZXJ2ZXIgZW5jb3VudGVyZWQgYW4gdW5leHBlY3RlZCBjb25kaXRpb24gd2hpY2ggcHJldmVudGVkIGl0IGZyb20gZnVsZmlsbGluZyB0aGUgcmVxdWVzdC5cIik7XG4gICAgICAgICAgICBjYXNlIDUwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDUwMSwgXCI1MDEgTm90IEltcGxlbWVudGVkXCIsIFwiVGhlIHNlcnZlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBmdW5jdGlvbmFsaXR5IGludGVyZmFjZV9mdW5jdGlvbl92aWV3X21vZGVsIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXCIpO1xuICAgICAgICAgICAgY2FzZSA1MDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA1MDIsIFwiNTAyIEJhZCBHYXRld2F5XCIsIFwiVGhlIHNlcnZlciwgd2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSwgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIHRoZSB1cHN0cmVhbSBzZXJ2ZXIgaXQgYWNjZXNzZWQgaW4gYXR0ZW1wdGluZyB0byBmdWxmaWxsIHRoZSByZXF1ZXN0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTAzLCBcIjUwMyBTZXJ2aWNlIFVuYXZhaWxhYmxlXCIsIFwiVGhlIHNlcnZlciBpcyBjdXJyZW50bHkgdW5hYmxlIHRvIGhhbmRsZSB0aGUgcmVxdWVzdCBkdWUgdG8gYSB0ZW1wb3Jhcnkgb3ZlcmxvYWRpbmcgb3IgbWFpbnRlbmFuY2Ugb2YgdGhlIHNlcnZlci5cIik7XG4gICAgICAgICAgICBjYXNlIDUwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDUwNCwgXCI1MDQgR2F0ZXdheSBUaW1lb3V0XCIsIFwiVGhlIHNlcnZlciwgd2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSwgZGlkIG5vdCByZWNlaXZlIGEgdGltZWx5IHJlc3BvbnNlIGZyb20gdGhlIHVwc3RyZWFtIHNlcnZlciBzcGVjaWZpZWQgYnkgdGhlIFVSSS5cIik7XG4gICAgICAgICAgICBjYXNlIDUwNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDUwNSwgXCI1MDUgSFRUUCBWZXJzaW9uIE5vdCBTdXBwb3J0ZWRcIiwgXCJUaGUgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQsIG9yIHJlZnVzZXMgdG8gc3VwcG9ydCwgdGhlIEhUVFAgcHJvdG9jb2wgdmVyc2lvbiB0aGF0IHdhcyB1c2VkIGluIHRoZSByZXF1ZXN0IG1lc3NhZ2UuXCIpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJOZXR3b3JrRXhjZXB0aW9uKGtleTogXCIgKyB0aGlzLmtleSArIFwiLCBcIiArXG4gICAgICAgICAgICBcInN0YXR1c0NvZGU6IFwiICsgdGhpcy5zdGF0dXNDb2RlICsgXCIsIFwiICtcbiAgICAgICAgICAgIFwibmFtZVN0YXR1c0NvZGUgKG9wdGlvbmFsKTogXCIgKyB0aGlzLm5hbWVTdGF0dXNDb2RlICsgXCIsIFwiICtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25TdGF0dXNDb2RlIChvcHRpb25hbCk6IFwiICsgdGhpcy5kZXNjcmlwdGlvblN0YXR1c0NvZGUgKyBcIilcIjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ3VycmVudE1vZGVsV0luZGV4IHtcbiAgICBjb25zdHJ1Y3RvcihjdXJyZW50TW9kZWwsIGluZGV4KSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1vZGVsID0gY3VycmVudE1vZGVsO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbFdOYW1lZFdOYW1lZFdOYW1lZEl0ZXJhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0TW9kZWxJdGVyYXRvciA9IG5ldyBBcnJheSgpO1xuICAgIH1cbiAgICBnZXRTb3J0ZWRMaXN0TW9kZWxGcm9tTmV3TGlzdE1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsSXRlcmF0b3IobmV3TGlzdE1vZGVsKSB7XG4gICAgICAgIGlmIChuZXdMaXN0TW9kZWwubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3RNb2RlbEl0ZXJhdG9yLnB1c2goLi4ubmV3TGlzdE1vZGVsKTtcbiAgICAgICAgY29uc3QgbmV3TGlzdE1vZGVsRklSU1QgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMubGlzdE1vZGVsSXRlcmF0b3IubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE1vZGVsV0luZGV4ID0gdGhpcy5jdXJyZW50TW9kZWxXSW5kZXg7XG4gICAgICAgICAgICB0aGlzLmxpc3RNb2RlbEl0ZXJhdG9yLnNwbGljZShjdXJyZW50TW9kZWxXSW5kZXguaW5kZXgsIDEpO1xuICAgICAgICAgICAgbmV3TGlzdE1vZGVsRklSU1QucHVzaChjdXJyZW50TW9kZWxXSW5kZXguY3VycmVudE1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3TGlzdE1vZGVsRklSU1Q7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VMaXN0TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKGxpc3RNb2RlbCkge1xuICAgICAgICB0aGlzLmxpc3RNb2RlbCA9IGxpc3RNb2RlbDtcbiAgICB9XG4gICAgc29ydGluZ0Zyb21Nb2RlbFdOYW1lZFdOYW1lZFdOYW1lZEl0ZXJhdG9yUGFyYW1ldGVyTGlzdE1vZGVsKG1vZGVsV05hbWVkV05hbWVkV05hbWVkSXRlcmF0b3IpIHtcbiAgICAgICAgY29uc3Qgc29ydGVkTGlzdE1vZGVsRnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbEl0ZXJhdG9yID0gbW9kZWxXTmFtZWRXTmFtZWRXTmFtZWRJdGVyYXRvci5nZXRTb3J0ZWRMaXN0TW9kZWxGcm9tTmV3TGlzdE1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsSXRlcmF0b3IodGhpcy5saXN0TW9kZWwpO1xuICAgICAgICB0aGlzLmxpc3RNb2RlbC5sZW5ndGggPiAwID8gdGhpcy5saXN0TW9kZWwuc3BsaWNlKDAsIHRoaXMubGlzdE1vZGVsLmxlbmd0aCkgOiBudWxsO1xuICAgICAgICBzb3J0ZWRMaXN0TW9kZWxGcm9tTmV3TGlzdE1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsSXRlcmF0b3IubGVuZ3RoID4gMCA/IHRoaXMubGlzdE1vZGVsLnB1c2goLi4uc29ydGVkTGlzdE1vZGVsRnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbEl0ZXJhdG9yKSA6IG51bGw7XG4gICAgfVxuICAgIGluc2VydEZyb21OZXdNb2RlbFBhcmFtZXRlckxpc3RNb2RlbChuZXdNb2RlbCkge1xuICAgICAgICB0aGlzLmxpc3RNb2RlbC5wdXNoKG5ld01vZGVsKTtcbiAgICB9XG4gICAgdXBkYXRlRnJvbU5ld01vZGVsUGFyYW1ldGVyTGlzdE1vZGVsKG5ld01vZGVsKSB7XG4gICAgICAgIGNvbnN0IGZpbmRJbmRleCA9IHRoaXMubGlzdE1vZGVsLmZpbmRJbmRleCgoaXRlbU1vZGVsKSA9PiBpdGVtTW9kZWwudW5pcXVlSWQgPT0gbmV3TW9kZWwudW5pcXVlSWQpO1xuICAgICAgICB0aGlzLmxpc3RNb2RlbC5zcGxpY2UoZmluZEluZGV4LCAxLCBuZXdNb2RlbCk7XG4gICAgfVxuICAgIGRlbGV0ZUZyb21VbmlxdWVJZEJ5TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwodW5pcXVlSWRCeU1vZGVsKSB7XG4gICAgICAgIGNvbnN0IGZpbmRJbmRleCA9IHRoaXMubGlzdE1vZGVsLmZpbmRJbmRleCgoaXRlbU1vZGVsKSA9PiBpdGVtTW9kZWwudW5pcXVlSWQgPT0gdW5pcXVlSWRCeU1vZGVsKTtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwuc3BsaWNlKGZpbmRJbmRleCwgMSk7XG4gICAgfVxuICAgIGluc2VydExpc3RGcm9tTmV3TGlzdE1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsKG5ld0xpc3RNb2RlbCkge1xuICAgICAgICB0aGlzLmxpc3RNb2RlbC5wdXNoKC4uLm5ld0xpc3RNb2RlbCk7XG4gICAgfVxuICAgIHVwZGF0ZUxpc3RGcm9tTmV3TGlzdE1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsKG5ld0xpc3RNb2RlbCkge1xuICAgICAgICBmb3IgKGNvbnN0IG5ld0l0ZW1Nb2RlbCBvZiBuZXdMaXN0TW9kZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbmRJbmRleCA9IHRoaXMubGlzdE1vZGVsLmZpbmRJbmRleCgoaXRlbU1vZGVsKSA9PiBpdGVtTW9kZWwudW5pcXVlSWQgPT0gbmV3SXRlbU1vZGVsLnVuaXF1ZUlkKTtcbiAgICAgICAgICAgIHRoaXMubGlzdE1vZGVsLnNwbGljZShmaW5kSW5kZXgsIDEsIG5ld0l0ZW1Nb2RlbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVsZXRlTGlzdEZyb21MaXN0VW5pcXVlSWRCeU1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsKGxpc3RVbmlxdWVJZEJ5TW9kZWwpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtVW5pcXVlSWRCeU1vZGVsIG9mIGxpc3RVbmlxdWVJZEJ5TW9kZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbmRJbmRleCA9IHRoaXMubGlzdE1vZGVsLmZpbmRJbmRleCgoaXRlbU1vZGVsKSA9PiBpdGVtTW9kZWwudW5pcXVlSWQgPT0gaXRlbVVuaXF1ZUlkQnlNb2RlbCk7XG4gICAgICAgICAgICB0aGlzLmxpc3RNb2RlbC5zcGxpY2UoZmluZEluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHVuaXF1ZUlkKSB7XG4gICAgICAgIHRoaXMudW5pcXVlSWQgPSB1bmlxdWVJZDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZU5hbWVkU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEZWZhdWx0U3RhdGUgZXh0ZW5kcyBCYXNlTmFtZWRTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YUZvck5hbWVkKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGF0YUZvck5hbWVkID0gZGF0YUZvck5hbWVkO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRGlzcG9zZSA9IHRydWU7XG4gICAgfVxuICAgIGdldCBnZXREYXRhRm9yTmFtZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFGb3JOYW1lZDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZU5hbWVkU3RyZWFtV1N0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRGVmYXVsdFN0cmVhbVdTdGF0ZSBleHRlbmRzIEJhc2VOYW1lZFN0cmVhbVdTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YUZvck5hbWVkKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGF0YUZvck5hbWVkID0gZGF0YUZvck5hbWVkO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2UgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gICAgZ2V0IGdldERhdGFGb3JOYW1lZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YUZvck5hbWVkO1xuICAgIH1cbiAgICBsaXN0ZW5TdHJlYW1EYXRhRm9yTmFtZWRGcm9tQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJEZWZhdWx0U3RyZWFtV1N0YXRlXCIsIEVudW1HdWlsdHkuZGV2ZWxvcGVyLCBcIkRlZmF1bHRTdHJlYW1XU3RhdGVRUUxpc3RlblN0cmVhbURhdGFGb3JOYW1lZEZyb21DYWxsYmFja1wiLCBcIkFscmVhZHkgZGlzcG9zZWQgb2ZcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVwiLCBFbnVtR3VpbHR5LmRldmVsb3BlciwgXCJEZWZhdWx0U3RyZWFtV1N0YXRlUVFMaXN0ZW5TdHJlYW1EYXRhRm9yTmFtZWRGcm9tQ2FsbGJhY2tcIiwgXCJEdXBsaWNhdGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICBub3RpZnlTdHJlYW1EYXRhRm9yTmFtZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVwiLCBFbnVtR3VpbHR5LmRldmVsb3BlciwgXCJEZWZhdWx0U3RyZWFtV1N0YXRlUVFOb3RpZnlTdHJlYW1EYXRhRm9yTmFtZWRcIiwgXCJBbHJlYWR5IGRpc3Bvc2VkIG9mXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIkRlZmF1bHRTdHJlYW1XU3RhdGVcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVFRTm90aWZ5U3RyZWFtRGF0YUZvck5hbWVkXCIsIFwiU3RyZWFtIGhhcyBubyBsaXN0ZW5lclwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMuZGF0YUZvck5hbWVkKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGVtcENhY2hlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGVtcENhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnRlbXBDYWNoZVdMaXN0QWN0aW9uID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzdGF0aWMgY2xlYXJUZW1wQ2FjaGVQYXJtZXRlckluc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGUgPSB0aGlzLmluc3RhbmNlLnRlbXBDYWNoZTtcbiAgICAgICAgdGVtcENhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHN0YXRpYyBjbG9zZVN0cmVhbUZyb21LZXlUZW1wQ2FjaGVQYXJtZXRlckluc3RhbmNlKGtleVRlbXBDYWNoZSkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMuaW5zdGFuY2UudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGlmICghdGVtcENhY2hlV0xpc3RBY3Rpb24uaGFzKGtleVRlbXBDYWNoZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnZXQgPSB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5nZXQoa2V5VGVtcENhY2hlKTtcbiAgICAgICAgZ2V0ID09PSBudWxsIHx8IGdldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2V0LnNwbGljZSgwLCBnZXQubGVuZ3RoKTtcbiAgICB9XG4gICAgc3RhdGljIGNsb3NlU3RyZWFtRnJvbUxpc3RLZXlUZW1wQ2FjaGVQYXJtZXRlckluc3RhbmNlKGxpc3RLZXlUZW1wQ2FjaGUpIHtcbiAgICAgICAgY29uc3QgdGVtcENhY2hlV0xpc3RBY3Rpb24gPSB0aGlzLmluc3RhbmNlLnRlbXBDYWNoZVdMaXN0QWN0aW9uO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW1LZXlUZW1wQ2FjaGUgb2YgbGlzdEtleVRlbXBDYWNoZSkge1xuICAgICAgICAgICAgaWYgKCF0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5oYXMoaXRlbUtleVRlbXBDYWNoZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBnZXQgPSB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5nZXQoaXRlbUtleVRlbXBDYWNoZSk7XG4gICAgICAgICAgICBnZXQgPT09IG51bGwgfHwgZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnZXQuc3BsaWNlKDAsIGdldC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBjbG9zZVN0cmVhbXNQYXJhbWV0ZXJJbnN0YW5jZSgpIHtcbiAgICAgICAgY29uc3QgdGVtcENhY2hlV0xpc3RBY3Rpb24gPSB0aGlzLmluc3RhbmNlLnRlbXBDYWNoZVdMaXN0QWN0aW9uO1xuICAgICAgICBmb3IgKGNvbnN0IFssIHZhbHVlXSBvZiB0ZW1wQ2FjaGVXTGlzdEFjdGlvbikge1xuICAgICAgICAgICAgdmFsdWUuc3BsaWNlKDAsIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0RnJvbUtleVRlbXBDYWNoZVBhcmFtZXRlclRlbXBDYWNoZShrZXlUZW1wQ2FjaGUpIHtcbiAgICAgICAgY29uc3QgdGVtcENhY2hlID0gdGhpcy50ZW1wQ2FjaGU7XG4gICAgICAgIGlmICghdGVtcENhY2hlLmhhcyhrZXlUZW1wQ2FjaGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJUZW1wQ2FjaGVTZXJ2aWNlXCIsIEVudW1HdWlsdHkuZGV2ZWxvcGVyLCBrZXlUZW1wQ2FjaGUsIFwiTm8gZXhpc3RzIGtleVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcENhY2hlLmdldChrZXlUZW1wQ2FjaGUpO1xuICAgIH1cbiAgICBsaXN0ZW5TdHJlYW1Gcm9tS2V5VGVtcENhY2hlQW5kQ2FsbGJhY2tQYXJhbWV0ZXJPbmUoa2V5VGVtcENhY2hlLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGlmICghdGVtcENhY2hlV0xpc3RBY3Rpb24uaGFzKGtleVRlbXBDYWNoZSkpIHtcbiAgICAgICAgICAgIHRlbXBDYWNoZVdMaXN0QWN0aW9uLnNldChrZXlUZW1wQ2FjaGUsIG5ldyBBcnJheSgpKTtcbiAgICAgICAgICAgIChfYSA9IHRlbXBDYWNoZVdMaXN0QWN0aW9uLmdldChrZXlUZW1wQ2FjaGUpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgKF9iID0gdGVtcENhY2hlV0xpc3RBY3Rpb24uZ2V0KGtleVRlbXBDYWNoZSkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgdXBkYXRlRnJvbUtleVRlbXBDYWNoZUFuZFZhbHVlUGFyYW1ldGVyVGVtcENhY2hlKGtleVRlbXBDYWNoZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy50ZW1wQ2FjaGUuc2V0KGtleVRlbXBDYWNoZSwgdmFsdWUpO1xuICAgIH1cbiAgICB1cGRhdGVXaGVyZVN0cmVhbU5vdGlmaWNhdGlvbklzUG9zc2libGVGcm9tS2V5VGVtcENhY2hlQW5kVmFsdWVQYXJhbWV0ZXJPbmUoa2V5VGVtcENhY2hlLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUZyb21LZXlUZW1wQ2FjaGVBbmRWYWx1ZVBhcmFtZXRlclRlbXBDYWNoZShrZXlUZW1wQ2FjaGUsIHZhbHVlKTtcbiAgICAgICAgY29uc3QgdGVtcENhY2hlV0xpc3RBY3Rpb24gPSB0aGlzLnRlbXBDYWNoZVdMaXN0QWN0aW9uO1xuICAgICAgICBpZiAoIXRlbXBDYWNoZVdMaXN0QWN0aW9uLmhhcyhrZXlUZW1wQ2FjaGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2V0ID0gdGVtcENhY2hlV0xpc3RBY3Rpb24uZ2V0KGtleVRlbXBDYWNoZSk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbUdldCBvZiBnZXQpIHtcbiAgICAgICAgICAgIGl0ZW1HZXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlbGV0ZUZyb21LZXlUZW1wQ2FjaGVQYXJhbWV0ZXJUZW1wQ2FjaGUoa2V5VGVtcENhY2hlKSB7XG4gICAgICAgIHRoaXMudGVtcENhY2hlLmRlbGV0ZShrZXlUZW1wQ2FjaGUpO1xuICAgIH1cbn1cblRlbXBDYWNoZVNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgVGVtcENhY2hlU2VydmljZSgpO1xuZXhwb3J0IHZhciBFbnVtUldUTW9kZTtcbihmdW5jdGlvbiAoRW51bVJXVE1vZGUpIHtcbiAgICBFbnVtUldUTW9kZVtFbnVtUldUTW9kZVtcInJlbGVhc2VcIl0gPSAwXSA9IFwicmVsZWFzZVwiO1xuICAgIEVudW1SV1RNb2RlW0VudW1SV1RNb2RlW1widGVzdFwiXSA9IDFdID0gXCJ0ZXN0XCI7XG59KShFbnVtUldUTW9kZSB8fCAoRW51bVJXVE1vZGUgPSB7fSkpO1xuZXhwb3J0IGNsYXNzIE5hbWVkQ2FsbGJhY2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUldUTW9kZSB7XG4gICAgY29uc3RydWN0b3IoZW51bVJXVE1vZGUsIGxpc3ROYW1lZENhbGxiYWNrV1JlbGVhc2UsIGxpc3ROYW1lZENhbGxiYWNrV1Rlc3QpIHtcbiAgICAgICAgdGhpcy5lbnVtUldUTW9kZSA9IGVudW1SV1RNb2RlO1xuICAgICAgICB0aGlzLm1hcFN0cmluZ1dOYW1lZENhbGxiYWNrV1JlbGVhc2UgPSBSV1RNb2RlLmdldE1hcFN0cmluZ1dOYW1lZENhbGxiYWNrRnJvbUxpc3ROYW1lZENhbGxiYWNrKGxpc3ROYW1lZENhbGxiYWNrV1JlbGVhc2UpO1xuICAgICAgICB0aGlzLm1hcFN0cmluZ1dOYW1lZENhbGxiYWNrV1Rlc3QgPSBSV1RNb2RlLmdldE1hcFN0cmluZ1dOYW1lZENhbGxiYWNrRnJvbUxpc3ROYW1lZENhbGxiYWNrKGxpc3ROYW1lZENhbGxiYWNrV1Rlc3QpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0TWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tGcm9tTGlzdE5hbWVkQ2FsbGJhY2sobGlzdE5hbWVkQ2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgbWFwU3RyaW5nV05hbWVkQ2FsbGJhY2sgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbU5hbWVkQ2FsbGJhY2sgb2YgbGlzdE5hbWVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIG1hcFN0cmluZ1dOYW1lZENhbGxiYWNrLnNldChpdGVtTmFtZWRDYWxsYmFjay5uYW1lLCBpdGVtTmFtZWRDYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hcFN0cmluZ1dOYW1lZENhbGxiYWNrO1xuICAgIH1cbiAgICBnZXROYW1lZENhbGxiYWNrRnJvbU5hbWUobmFtZSkge1xuICAgICAgICBjb25zdCBtYXBTdHJpbmdXTmFtZWRDYWxsYmFja1doZXJlU2VsZWN0TW9kUGFyYW1ldGVyc1RocmVlID0gdGhpcy5nZXRNYXBTdHJpbmdXTmFtZWRDYWxsYmFja1doZXJlU2VsZWN0TW9kUGFyYW1ldGVyc1RocmVlO1xuICAgICAgICBpZiAoIW1hcFN0cmluZ1dOYW1lZENhbGxiYWNrV2hlcmVTZWxlY3RNb2RQYXJhbWV0ZXJzVGhyZWUuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJSV1RNb2RlXCIsIEVudW1HdWlsdHkuZGV2ZWxvcGVyLCBcIlJXVE1vZGVRUUdldE5hbWVkQ2FsbGJhY2tGcm9tTmFtZVwiLCBcIm5vIGV4aXN0cyBrZXk6IFwiICsgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hcFN0cmluZ1dOYW1lZENhbGxiYWNrV2hlcmVTZWxlY3RNb2RQYXJhbWV0ZXJzVGhyZWUuZ2V0KG5hbWUpO1xuICAgIH1cbiAgICBnZXQgZ2V0TWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tXaGVyZVNlbGVjdE1vZFBhcmFtZXRlcnNUaHJlZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW51bVJXVE1vZGUgPT0gRW51bVJXVE1vZGUucmVsZWFzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tXUmVsZWFzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tYXBTdHJpbmdXTmFtZWRDYWxsYmFja1dUZXN0O1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFeGNlcHRpb25Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihleGNlcHRpb24pIHtcbiAgICAgICAgdGhpcy5leGNlcHRpb24gPSBleGNlcHRpb247XG4gICAgfVxuICAgIHN0YXRpYyBzdWNjZXNzKCkge1xuICAgICAgICByZXR1cm4gbmV3IEV4Y2VwdGlvbkNvbnRyb2xsZXIobnVsbCk7XG4gICAgfVxuICAgIHN0YXRpYyBleGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXhjZXB0aW9uQ29udHJvbGxlcihleGNlcHRpb24pO1xuICAgIH1cbiAgICBnZXQgZ2V0S2V5UGFyYW1ldGVyRXhjZXB0aW9uKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICByZXR1cm4gKF9iID0gKF9hID0gdGhpcy5leGNlcHRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5rZXkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwiXCI7XG4gICAgfVxuICAgIGlzV2hlcmVOb3RFcXVhbHNOdWxsUGFyYW1ldGVyRXhjZXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGNlcHRpb24gIT0gbnVsbDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmV4Y2VwdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJFeGNlcHRpb25Db250cm9sbGVyKGV4Y2VwdGlvbjogbnVsbClcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJFeGNlcHRpb25Db250cm9sbGVyKGV4Y2VwdGlvbjogXCIgKyB0aGlzLmV4Y2VwdGlvbiArIFwiKVwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlciwgZXhjZXB0aW9uQ29udHJvbGxlcikge1xuICAgICAgICB0aGlzLnBhcmFtZXRlciA9IHBhcmFtZXRlcjtcbiAgICAgICAgdGhpcy5leGNlcHRpb25Db250cm9sbGVyID0gZXhjZXB0aW9uQ29udHJvbGxlcjtcbiAgICB9XG4gICAgc3RhdGljIHN1Y2Nlc3MocGFyYW1ldGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzdWx0KHBhcmFtZXRlciwgRXhjZXB0aW9uQ29udHJvbGxlci5zdWNjZXNzKCkpO1xuICAgIH1cbiAgICBzdGF0aWMgZXhjZXB0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IFJlc3VsdChudWxsLCBFeGNlcHRpb25Db250cm9sbGVyLmV4Y2VwdGlvbihleGNlcHRpb24pKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZGVidWdQcmludCh0ZXh0KSB7XG4gICAgY29uc29sZS5sb2codGV4dCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVidWdQcmludEV4Y2VwdGlvbih0ZXh0KSB7XG4gICAgZGVidWdQcmludChcIlxceDFCWzMxbVwiICsgdGV4dCArIFwiXFx4MWJbMG1cIik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IExvY2FsRXhjZXB0aW9uLCBFbnVtR3VpbHR5LCBCYXNlTW9kZWwsIEJhc2VMaXN0TW9kZWwsIFJlc3VsdCwgTmV0d29ya0V4Y2VwdGlvbiwgQmFzZURhdGFGb3JOYW1lZCwgRGVmYXVsdFN0cmVhbVdTdGF0ZSwgZGVidWdQcmludCwgUldUTW9kZSwgRW51bVJXVE1vZGUsIE5hbWVkQ2FsbGJhY2sgfSBmcm9tIFwibGlicmFyeV9hcmNoaXRlY3R1cmVfbXZ2bV9tb2RpZnlfamF2YXNjcmlwdFwiO1xyXG5cclxuY2xhc3MgS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eSB7XHJcbiAgICAvKiBJUEFkZHJlc3MgKi9cclxuICAgIHN0YXRpYyAjaVBBZGRyZXNzUVFJcCA9IFwiaXBcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAobmV3LnRhcmdldCA9PT0gS2V5c0h0dHBTZXJ2aWNlVXRpbGl0eSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJLZXlzSHR0cFNlcnZpY2VVdGlsaXR5XCIsRW51bUd1aWx0eS5kZXZlbG9wZXIsXCJLZXlzSHR0cFNlcnZpY2VVdGlsaXR5UVFDb25zdHJ1Y3RvclwiLFwiVGhpcyBjbGFzcyBpcyBzdGF0aWMsIHRoZXJlIGlzIG5vIHBvaW50IGluIGNhbGxpbmcgYW4gb2JqZWN0IGFuZCBpbmhlcml0YW5jZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBpUEFkZHJlc3NRUUlwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNpUEFkZHJlc3NRUUlwO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBLZXlzRXhjZXB0aW9uVXRpbGl0eSB7XHJcbiAgICAvKiBVTktOT1dOICovXHJcbiAgICBzdGF0aWMgI3VOS05PV04gPSBcInVOS05PV05cIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAobmV3LnRhcmdldCA9PT0gS2V5c0V4Y2VwdGlvblV0aWxpdHkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiS2V5c0V4Y2VwdGlvblV0aWxpdHlcIixFbnVtR3VpbHR5LmRldmVsb3BlcixcIktleXNFeGNlcHRpb25VdGlsaXR5UVFDb25zdHJ1Y3RvclwiLFwiVGhpcyBjbGFzcyBpcyBzdGF0aWMsIHRoZXJlIGlzIG5vIHBvaW50IGluIGNhbGxpbmcgYW4gb2JqZWN0IGFuZCBpbmhlcml0YW5jZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCB1TktOT1dOKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiN1TktOT1dOO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBLZXlzU3VjY2Vzc1V0aWxpdHkge1xyXG4gICAgLyogU1VDQ0VTUyAqL1xyXG4gICAgc3RhdGljICNzVUNDRVNTID0gXCJzVUNDRVNTXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKG5ldy50YXJnZXQgPT09IEtleXNTdWNjZXNzVXRpbGl0eSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJLZXlzU3VjY2Vzc1V0aWxpdHlcIixFbnVtR3VpbHR5LmRldmVsb3BlcixcIktleXNTdWNjZXNzVXRpbGl0eVFRQ29uc3RydWN0b3JcIixcIlRoaXMgY2xhc3MgaXMgc3RhdGljLCB0aGVyZSBpcyBubyBwb2ludCBpbiBjYWxsaW5nIGFuIG9iamVjdCBhbmQgaW5oZXJpdGFuY2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgc1VDQ0VTUygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jc1VDQ0VTUztcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSVBBZGRyZXNzIGV4dGVuZHMgQmFzZU1vZGVsIHtcclxuICAgICNpcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpcCkge1xyXG4gICAgICAgIHN1cGVyKFwiXCIgKyBpcCArIFwiXCIpO1xyXG4gICAgICAgIHRoaXMuI2lwID0gaXA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldENsb25lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgSVBBZGRyZXNzKHRoaXMuaXApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBcIklQQWRkcmVzcyhpcDogXCIgKyB0aGlzLmlwICsgXCIpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNpcDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTGlzdElQQWRkcmVzcyBleHRlbmRzIEJhc2VMaXN0TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IobGlzdE1vZGVsKSB7XHJcbiAgICAgICAgc3VwZXIobGlzdE1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0Q2xvbmUoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3TGlzdE1vZGVsID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yKGNvbnN0IGl0ZW1Nb2RlbCBvZiB0aGlzLmxpc3RNb2RlbCkge1xyXG4gICAgICAgICAgICBuZXdMaXN0TW9kZWwucHVzaChpdGVtTW9kZWwuZ2V0Q2xvbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IExpc3RJUEFkZHJlc3MobmV3TGlzdE1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBsZXQgc3RyTGlzdE1vZGVsID0gXCJcXG5cIjtcclxuICAgICAgICBmb3IoY29uc3QgaXRlbU1vZGVsIG9mIHRoaXMubGlzdE1vZGVsKSB7XHJcbiAgICAgICAgICAgIHN0ckxpc3RNb2RlbCArPSBpdGVtTW9kZWwudG9TdHJpbmcoKSArIFwiLFxcblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJMaXN0SVBBZGRyZXNzKGxpc3RNb2RlbDogW1wiICsgc3RyTGlzdE1vZGVsICsgXCJdKVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gVGhpcyBjbGFzcyBuZWVkcyB0byBiZSBjYWxsZWQgd2hlcmUgdGhlcmUgYXJlIG5ldHdvcmsgcmVxdWVzdHMgKGluIHRoZSBkYXRhIHNvdXJjZSksIFxyXG4vLy8gc2luY2Ugd2l0aG91dCB0aGlzIGNsYXNzIHRoZSBkZXZlbG9wZXIgd2lsbCBub3Qga25vdyBpbiB3aGljaCBjbGFzcyB0aGUgbmV0d29yayByZXF1ZXN0cyBhcmVcclxuY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG4gICAgc3RhdGljIGluc3RhbmNlID0gbmV3IEh0dHBTZXJ2aWNlKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYoSHR0cFNlcnZpY2UuaW5zdGFuY2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gSHR0cFNlcnZpY2UuaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBHZXRFRUlQQWRkcmVzc0VFV2hlcmVKc29uaXBBUElFRVBhcmFtZXRlckh0dHBTZXJ2aWNlIHtcclxuICAgICNodHRwU2VydmljZSA9IEh0dHBTZXJ2aWNlLmluc3RhbmNlO1xyXG5cclxuICAgIGFzeW5jIGdldElQQWRkcmVzc1doZXJlSnNvbmlwQVBJUGFyYW1ldGVySHR0cFNlcnZpY2UoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbmlwLmNvbS9cIiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBOZXR3b3JrRXhjZXB0aW9uLmZyb21LZXlBbmRTdGF0dXNDb2RlKFwiR2V0RUVJUEFkZHJlc3NFRVdoZXJlSnNvbmlwQVBJRUVQYXJhbWV0ZXJIdHRwU2VydmljZVwiLHJlc3BvbnNlLnN0YXR1cy50b1N0cmluZygpLHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbWFwID0gbmV3IE1hcChPYmplY3QuZW50cmllcyhqc29uKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlQQWRkcmVzcyA9IG5ldyBJUEFkZHJlc3MobWFwLmdldChLZXlzSHR0cFNlcnZpY2VVdGlsaXR5LmlQQWRkcmVzc1FRSXApKTtcclxuICAgICAgICAgICAgcmV0dXJuIFJlc3VsdC5zdWNjZXNzKGlQQWRkcmVzcyk7XHJcbiAgICAgICAgfSBjYXRjaChleGNlcHRpb24pIHtcclxuICAgICAgICAgICAgaWYoZXhjZXB0aW9uIGluc3RhbmNlb2YgTmV0d29ya0V4Y2VwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlc3VsdC5leGNlcHRpb24oZXhjZXB0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gUmVzdWx0LmV4Y2VwdGlvbihuZXcgTG9jYWxFeGNlcHRpb24oXCJHZXRFRUlQQWRkcmVzc0VFV2hlcmVKc29uaXBBUElFRVBhcmFtZXRlckh0dHBTZXJ2aWNlXCIsRW51bUd1aWx0eS5kZXZpY2UsS2V5c0V4Y2VwdGlvblV0aWxpdHkudU5LTk9XTixleGNlcHRpb24udG9TdHJpbmcoKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgX2h0dHBTZXJ2aWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNodHRwU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgRW51bURhdGFGb3JNYWluVk0gPSB7XHJcbiAgICBpc0xvYWRpbmcgOiBcImlzTG9hZGluZ1wiLFxyXG4gICAgZXhjZXB0aW9uIDogXCJleGNlcHRpb25cIixcclxuICAgIHN1Y2Nlc3MgOiBcInN1Y2Nlc3NcIixcclxufTtcclxuXHJcbmNsYXNzIERhdGFGb3JNYWluVk0gZXh0ZW5kcyBCYXNlRGF0YUZvck5hbWVkIHtcclxuICAgIGlQQWRkcmVzcztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihpc0xvYWRpbmcsaVBBZGRyZXNzKSB7XHJcbiAgICAgICAgc3VwZXIoaXNMb2FkaW5nKTtcclxuICAgICAgICB0aGlzLmlQQWRkcmVzcyA9IGlQQWRkcmVzcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0RW51bURhdGFGb3JOYW1lZCgpIHtcclxuICAgICAgICBpZih0aGlzLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gRW51bURhdGFGb3JNYWluVk0uaXNMb2FkaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmV4Y2VwdGlvbkNvbnRyb2xsZXIuaXNXaGVyZU5vdEVxdWFsc051bGxQYXJhbWV0ZXJFeGNlcHRpb24oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW51bURhdGFGb3JNYWluVk0uZXhjZXB0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRW51bURhdGFGb3JNYWluVk0uc3VjY2VzcztcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gXCJEYXRhRm9yTWFpblZNKGlzTG9hZGluZzogXCIgKyB0aGlzLmlzTG9hZGluZyArIFwiLCBcIiBcclxuICAgICAgICAgICAgKyBcImV4Y2VwdGlvbkNvbnRyb2xsZXI6IFwiICsgdGhpcy5leGNlcHRpb25Db250cm9sbGVyICsgXCIsIFwiIFxyXG4gICAgICAgICAgICArIFwiaVBBZGRyZXNzOiBcIiArIHRoaXMuaVBBZGRyZXNzICsgXCIpXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1haW5WTSB7XHJcbiAgICAvLyBPcGVyYXRpb25FRU1vZGVsKEVFV2hlcmVOYW1lZClbRUVGcm9tTmFtZWRdRUVQYXJhbWV0ZXJOYW1lZFNlcnZpY2VcclxuICAgICNnZXRFRUlQQWRkcmVzc0VFV2hlcmVKc29uaXBBUElFRVBhcmFtZXRlckh0dHBTZXJ2aWNlID0gbmV3IEdldEVFSVBBZGRyZXNzRUVXaGVyZUpzb25pcEFQSUVFUGFyYW1ldGVySHR0cFNlcnZpY2UoKTtcclxuICAgIC8vIE5hbWVkVXRpbGl0eVxyXG4gICAgXHJcbiAgICAvLyBNYWluIG9iamVjdHNcclxuICAgICNuYW1lZFN0cmVhbVdTdGF0ZTtcclxuICAgICNyd3RNb2RlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI25hbWVkU3RyZWFtV1N0YXRlID0gbmV3IERlZmF1bHRTdHJlYW1XU3RhdGUobmV3IERhdGFGb3JNYWluVk0odHJ1ZSxuZXcgSVBBZGRyZXNzKFwiXCIpKSk7XHJcbiAgICAgICAgdGhpcy4jcnd0TW9kZSA9IG5ldyBSV1RNb2RlKFxyXG4gICAgICAgICAgICBFbnVtUldUTW9kZS5yZWxlYXNlLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBuZXcgTmFtZWRDYWxsYmFjayhcImluaXRcIix0aGlzLiNpbml0UmVsZWFzZUNhbGxiYWNrKSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgbmV3IE5hbWVkQ2FsbGJhY2soXCJpbml0XCIsdGhpcy4jaW5pdFRlc3RDYWxsYmFjayksXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy4jbmFtZWRTdHJlYW1XU3RhdGUubGlzdGVuU3RyZWFtRGF0YUZvck5hbWVkRnJvbUNhbGxiYWNrKChfZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiNidWlsZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuI3J3dE1vZGUuZ2V0TmFtZWRDYWxsYmFja0Zyb21OYW1lKFwiaW5pdFwiKS5jYWxsYmFjaygpO1xyXG4gICAgICAgIGRlYnVnUHJpbnQoXCJNYWluVk06IFwiICsgcmVzdWx0KTtcclxuICAgICAgICB0aGlzLiNuYW1lZFN0cmVhbVdTdGF0ZS5ub3RpZnlTdHJlYW1EYXRhRm9yTmFtZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRoaXMuI25hbWVkU3RyZWFtV1N0YXRlLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAjYnVpbGQoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YUZvck5hbWVkID0gdGhpcy4jbmFtZWRTdHJlYW1XU3RhdGUuZ2V0RGF0YUZvck5hbWVkO1xyXG4gICAgICAgIHN3aXRjaChkYXRhRm9yTmFtZWQuZ2V0RW51bURhdGFGb3JOYW1lZCkge1xyXG4gICAgICAgICAgICBjYXNlIEVudW1EYXRhRm9yTWFpblZNLmlzTG9hZGluZzpcclxuICAgICAgICAgICAgICAgIGRlYnVnUHJpbnQoXCJCdWlsZDogSXNMb2FkaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRW51bURhdGFGb3JNYWluVk0uZXhjZXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgZGVidWdQcmludChcIkJ1aWxkOiBFeGNlcHRpb24oXCIgKyBkYXRhRm9yTmFtZWQuZXhjZXB0aW9uQ29udHJvbGxlci5nZXRLZXlQYXJhbWV0ZXJFeGNlcHRpb24gKyBcIilcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFbnVtRGF0YUZvck1haW5WTS5zdWNjZXNzOlxyXG4gICAgICAgICAgICAgICAgZGVidWdQcmludChcIkJ1aWxkOiBTdWNjZXNzKFwiICsgZGF0YUZvck5hbWVkLmlQQWRkcmVzcyArIFwiKVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNpbml0UmVsZWFzZUNhbGxiYWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdldElQQWRkcmVzc1doZXJlSnNvbmlwQVBJUGFyYW1ldGVySHR0cFNlcnZpY2UgPSBhd2FpdCB0aGlzLiNnZXRFRUlQQWRkcmVzc0VFV2hlcmVKc29uaXBBUElFRVBhcmFtZXRlckh0dHBTZXJ2aWNlLmdldElQQWRkcmVzc1doZXJlSnNvbmlwQVBJUGFyYW1ldGVySHR0cFNlcnZpY2UoKTtcclxuICAgICAgICBpZihnZXRJUEFkZHJlc3NXaGVyZUpzb25pcEFQSVBhcmFtZXRlckh0dHBTZXJ2aWNlLmV4Y2VwdGlvbkNvbnRyb2xsZXIuaXNXaGVyZU5vdEVxdWFsc051bGxQYXJhbWV0ZXJFeGNlcHRpb24oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jZmlyc3RRUUluaXRSZWxlYXNlQ2FsbGJhY2tRUUdldElQQWRkcmVzc1doZXJlSnNvbmlwQVBJUGFyYW1ldGVySHR0cFNlcnZpY2UoZ2V0SVBBZGRyZXNzV2hlcmVKc29uaXBBUElQYXJhbWV0ZXJIdHRwU2VydmljZS5leGNlcHRpb25Db250cm9sbGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4jbmFtZWRTdHJlYW1XU3RhdGUuZ2V0RGF0YUZvck5hbWVkLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuI25hbWVkU3RyZWFtV1N0YXRlLmdldERhdGFGb3JOYW1lZC5pUEFkZHJlc3MgPSBnZXRJUEFkZHJlc3NXaGVyZUpzb25pcEFQSVBhcmFtZXRlckh0dHBTZXJ2aWNlLnBhcmFtZXRlci5nZXRDbG9uZTtcclxuICAgICAgICByZXR1cm4gS2V5c1N1Y2Nlc3NVdGlsaXR5LnNVQ0NFU1M7XHJcbiAgICB9XHJcblxyXG4gICAgI2luaXRUZXN0Q2FsbGJhY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gU2ltdWxhdGlvbiBnZXQgXCJJUEFkZHJlc3NcIlxyXG4gICAgICAgIGNvbnN0IGlQQWRkcmVzcyA9IG5ldyBJUEFkZHJlc3MoXCIxMjEuMTIxLjEyLjEyXCIpO1xyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLDEwMDApKTtcclxuICAgICAgICB0aGlzLiNuYW1lZFN0cmVhbVdTdGF0ZS5nZXREYXRhRm9yTmFtZWQuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy4jbmFtZWRTdHJlYW1XU3RhdGUuZ2V0RGF0YUZvck5hbWVkLmlQQWRkcmVzcyA9IGlQQWRkcmVzcy5nZXRDbG9uZTtcclxuICAgICAgICByZXR1cm4gS2V5c1N1Y2Nlc3NVdGlsaXR5LnNVQ0NFU1M7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgI2ZpcnN0UVFJbml0UmVsZWFzZUNhbGxiYWNrUVFHZXRJUEFkZHJlc3NXaGVyZUpzb25pcEFQSVBhcmFtZXRlckh0dHBTZXJ2aWNlKGV4Y2VwdGlvbkNvbnRyb2xsZXIpIHtcclxuICAgICAgICB0aGlzLiNuYW1lZFN0cmVhbVdTdGF0ZS5nZXREYXRhRm9yTmFtZWQuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy4jbmFtZWRTdHJlYW1XU3RhdGUuZ2V0RGF0YUZvck5hbWVkLmV4Y2VwdGlvbkNvbnRyb2xsZXIgPSBleGNlcHRpb25Db250cm9sbGVyO1xyXG4gICAgICAgIHJldHVybiBleGNlcHRpb25Db250cm9sbGVyLmdldEtleVBhcmFtZXRlckV4Y2VwdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcclxuICAgIGNvbnN0IG1haW5WTSA9IG5ldyBNYWluVk0oKTtcclxuICAgIGF3YWl0IG1haW5WTS5pbml0KCk7XHJcbiAgICBtYWluVk0uZGlzcG9zZSgpO1xyXG59XHJcbm1haW4oKTtcclxuLy8gRVhQRUNURUQgT1VUUFVUOlxyXG4vL1xyXG4vLyBNYWluVk06IHNVQ0NFU1NcclxuLy8gQnVpbGQ6IFN1Y2Nlc3MoSVBBZGRyZXNzKGlwOiAke3lvdXJfaXB9KSlcclxuXHJcbi8vLyBPUlxyXG5cclxuLy8gRVhQRUNURUQgT1VUUFVUOlxyXG4vL1xyXG4vLyA9PT1zdGFydF90b190cmFjZV9leGNlcHRpb249PT1cclxuLy9cclxuLy8gV2hlcmVIYXBwZW5lZEV4Y2VwdGlvbihDbGFzcykgLS0+ICR7V2hlcmVIYXBwZW5lZEV4Y2VwdGlvbihDbGFzcyl9XHJcbi8vIE5hbWVFeGNlcHRpb24oQ2xhc3MpIC0tPiAke05hbWVFeGNlcHRpb24oQ2xhc3MpfVxyXG4vLyB0b1N0cmluZygpIC0tPiAke3RvU3RyaW5nKCl9XHJcbi8vXHJcbi8vID09PWVuZF90b190cmFjZV9leGNlcHRpb249PT1cclxuLy9cclxuLy8gTWFpblZNOiAke2dldEtleVBhcmFtZXRlckV4Y2VwdGlvbn1cclxuLy8gQnVpbGQ6IEV4Y2VwdGlvbigke2dldEtleVBhcmFtZXRlckV4Y2VwdGlvbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9