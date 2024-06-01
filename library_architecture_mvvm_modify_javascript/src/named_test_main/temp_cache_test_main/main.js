/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../dist/esm/index.js":
/*!**********************************!*\
  !*** ../../../dist/esm/index.js ***!
  \**********************************/
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
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! library_architecture_mvvm_modify_javascript */ "../../../dist/esm/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const tempCacheService = library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.TempCacheService.instance;
        const key = "key";
        tempCacheService.updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterOne(key, "One");
        const fromKeyTempCacheParameterTempCache = tempCacheService.getFromKeyTempCacheParameterTempCache(key);
        (0,library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.debugPrint)("FromKeyTempCacheParameterTempCache: " + fromKeyTempCacheParameterTempCache);
        tempCacheService.listenStreamFromKeyTempCacheAndCallbackParameterOne(key, (data) => {
            (0,library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.debugPrint)("Listen: " + data);
        });
        yield new Promise(resolve => setTimeout(resolve, 1000));
        tempCacheService.updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterOne(key, "Two");
        tempCacheService.listenStreamFromKeyTempCacheAndCallbackParameterOne(key, (data) => {
            (0,library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.debugPrint)("ListenTwo: " + data);
        });
        yield new Promise(resolve => setTimeout(resolve, 1000));
        tempCacheService.updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterOne(key, "Three");
        tempCacheService.listenStreamFromKeyTempCacheAndCallbackParameterOne(key, (data) => {
            (0,library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.debugPrint)("ListenThree: " + data);
        });
    });
}
main();
// EXPECTED OUTPUT:
//
// FromKeyTempCacheParameterTempCache: One
// Listen: Two
// Listen: Three
// ListenTwo: Three

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7QUFDNUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7O1VDdFpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkY7QUFFM0YsU0FBZSxJQUFJOztRQUNmLE1BQU0sZ0JBQWdCLEdBQUcseUZBQWdCLENBQUMsUUFBUSxDQUFDO1FBQ25ELE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBZ0IsQ0FBQywyRUFBMkUsQ0FBQyxHQUFHLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEcsTUFBTSxrQ0FBa0MsR0FBRyxnQkFBZ0IsQ0FBQyxxQ0FBcUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2Ryx1RkFBVSxDQUFDLHNDQUFzQyxHQUFHLGtDQUFrQyxDQUFDLENBQUM7UUFDeEYsZ0JBQWdCLENBQUMsbURBQW1ELENBQUMsR0FBRyxFQUFDLENBQUMsSUFBSSxFQUFDLEVBQUU7WUFDN0UsdUZBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELGdCQUFnQixDQUFDLDJFQUEyRSxDQUFDLEdBQUcsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUN4RyxnQkFBZ0IsQ0FBQyxtREFBbUQsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtZQUM3RSx1RkFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkQsZ0JBQWdCLENBQUMsMkVBQTJFLENBQUMsR0FBRyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFHLGdCQUFnQixDQUFDLG1EQUFtRCxDQUFDLEdBQUcsRUFBQyxDQUFDLElBQUksRUFBQyxFQUFFO1lBQzdFLHVGQUFVLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUFBO0FBQ0QsSUFBSSxFQUFFLENBQUM7QUFDUCxtQkFBbUI7QUFDbkIsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBfY2FjaGVfdGVzdF9tYWluLy4uLy4uLy4uL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBfY2FjaGVfdGVzdF9tYWluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBfY2FjaGVfdGVzdF9tYWluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wX2NhY2hlX3Rlc3RfbWFpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBfY2FjaGVfdGVzdF9tYWluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcF9jYWNoZV90ZXN0X21haW4vLi9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCYXNlRGF0YUZvck5hbWVkIHtcbiAgICBjb25zdHJ1Y3Rvcihpc0xvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBpc0xvYWRpbmc7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9uQ29udHJvbGxlciA9IEV4Y2VwdGlvbkNvbnRyb2xsZXIuc3VjY2VzcygpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0aGlzQ2xhc3MsIGV4Y2VwdGlvbkNsYXNzLCBrZXkpIHtcbiAgICAgICAgdGhpcy50aGlzQ2xhc3MgPSB0aGlzQ2xhc3M7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9uQ2xhc3MgPSBleGNlcHRpb25DbGFzcztcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgfVxuICAgIC8vLyBDYWxsIHRoaXMgbWV0aG9kIGluIHRoZSBkZXNjZW5kYW50IGNvbnN0cnVjdG9yIGFzIHRoZSBsYXN0IGxpbmVcbiAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uV2hlcmVUb1N0cmluZ1BhcmFtZXRlcnNUaGlzQ2xhc3NBbmRFeGNlcHRpb25DbGFzcygpIHtcbiAgICAgICAgZGVidWdQcmludEV4Y2VwdGlvbihcIlxcbj09PXN0YXJ0X3RvX3RyYWNlX2V4Y2VwdGlvbj09PVxcblwiKTtcbiAgICAgICAgZGVidWdQcmludEV4Y2VwdGlvbihcIldoZXJlSGFwcGVuZWRFeGNlcHRpb24oQ2xhc3MpIC0tPiBcIiArIHRoaXMudGhpc0NsYXNzICsgXCJcXG5cIiArXG4gICAgICAgICAgICBcIk5hbWVFeGNlcHRpb24oQ2xhc3MpIC0tPiBcIiArIHRoaXMuZXhjZXB0aW9uQ2xhc3MgKyBcIlxcblwiICtcbiAgICAgICAgICAgIFwidG9TdHJpbmcoKSAtLT4gXCIgKyB0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uKFwiXFxuPT09ZW5kX3RvX3RyYWNlX2V4Y2VwdGlvbj09PVxcblwiKTtcbiAgICB9XG59XG5leHBvcnQgdmFyIEVudW1HdWlsdHk7XG4oZnVuY3Rpb24gKEVudW1HdWlsdHkpIHtcbiAgICBFbnVtR3VpbHR5W0VudW1HdWlsdHlbXCJkZXZlbG9wZXJcIl0gPSAwXSA9IFwiZGV2ZWxvcGVyXCI7XG4gICAgRW51bUd1aWx0eVtFbnVtR3VpbHR5W1wiZGV2aWNlXCJdID0gMV0gPSBcImRldmljZVwiO1xuICAgIEVudW1HdWlsdHlbRW51bUd1aWx0eVtcInVzZXJcIl0gPSAyXSA9IFwidXNlclwiO1xufSkoRW51bUd1aWx0eSB8fCAoRW51bUd1aWx0eSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgTG9jYWxFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0aGlzQ2xhc3MsIHZhbHVlV0VudW1HdWlsdHksIGtleSwgbWVzc2FnZSA9IFwiXCIpIHtcbiAgICAgICAgc3VwZXIodGhpc0NsYXNzLCBcIkxvY2FsRXhjZXB0aW9uXCIsIGtleSk7XG4gICAgICAgIHRoaXMudmFsdWVXRW51bUd1aWx0eSA9IHZhbHVlV0VudW1HdWlsdHk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuZGVidWdQcmludEV4Y2VwdGlvbldoZXJlVG9TdHJpbmdQYXJhbWV0ZXJzVGhpc0NsYXNzQW5kRXhjZXB0aW9uQ2xhc3MoKTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIkxvY2FsRXhjZXB0aW9uKHZhbHVlV0VudW1HdWlsdHk6IFwiICsgdGhpcy52YWx1ZVdFbnVtR3VpbHR5ICsgXCIsIFwiICtcbiAgICAgICAgICAgIFwia2V5OiBcIiArIHRoaXMua2V5ICsgXCIsIFwiICtcbiAgICAgICAgICAgIFwibWVzc2FnZSAob3B0aW9uYWwpOiBcIiArIHRoaXMubWVzc2FnZSArIFwiKVwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOZXR3b3JrRXhjZXB0aW9uIGV4dGVuZHMgQmFzZUV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3IodGhpc0NsYXNzLCBrZXksIHN0YXR1c0NvZGUsIG5hbWVTdGF0dXNDb2RlID0gXCJcIiwgZGVzY3JpcHRpb25TdGF0dXNDb2RlID0gXCJcIikge1xuICAgICAgICBzdXBlcih0aGlzQ2xhc3MsIFwiTmV0d29ya0V4Y2VwdGlvblwiLCBrZXkpO1xuICAgICAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICAgICAgICB0aGlzLm5hbWVTdGF0dXNDb2RlID0gbmFtZVN0YXR1c0NvZGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25TdGF0dXNDb2RlID0gZGVzY3JpcHRpb25TdGF0dXNDb2RlO1xuICAgICAgICB0aGlzLmRlYnVnUHJpbnRFeGNlcHRpb25XaGVyZVRvU3RyaW5nUGFyYW1ldGVyc1RoaXNDbGFzc0FuZEV4Y2VwdGlvbkNsYXNzKCk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tS2V5QW5kU3RhdHVzQ29kZSh0aGlzQ2xhc3MsIGtleSwgc3RhdHVzQ29kZSkge1xuICAgICAgICBzd2l0Y2ggKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMjAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjAxLCBcIjIwMSBDcmVhdGVkXCIsIFwiVGhlIHJlcXVlc3QgaGFzIGJlZW4gZnVsZmlsbGVkIGFuZCByZXN1bHRlZCBpbiBhIG5ldyByZXNvdXJjZSBiZWluZyBjcmVhdGVkLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjAyLCBcIjIwMiBBY2NlcHRlZFwiLCBcIlRoZSByZXF1ZXN0IGhhcyBiZWVuIGFjY2VwdGVkIGZvciBwcm9jZXNzaW5nLCBidXQgdGhlIHByb2Nlc3NpbmcgaGFzIG5vdCBiZWVuIGNvbXBsZXRlZC5cIik7XG4gICAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDIwMywgXCIyMDMgTm9uLUF1dGhvcml0YXRpdmUgSW5mb3JtYXRpb25cIiwgXCJUaGUgcmV0dXJuZWQgbWV0YUluZm9ybWF0aW9uIGluIHRoZSBlbnRpdHktaGVhZGVyIGlzIG5vdCB0aGUgZGVmaW5pdGl2ZSBzZXQgYXMgYXZhaWxhYmxlIGZyb20gdGhlIG9yaWdpbiBzZXJ2ZXIsIGJ1dCBpcyBnYXRoZXJlZCBmcm9tIGEgbG9jYWwgb3IgYSB0aGlyZC1wYXJ0eSBjb3B5LlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjA0LCBcIjIwNCBObyBDb250ZW50XCIsIFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIHRoZSByZXF1ZXN0IGJ1dCBkb2VzIG5vdCBuZWVkIHRvIHJldHVybiBhbiBlbnRpdHktYm9keSwgYW5kIG1pZ2h0IHdhbnQgdG8gcmV0dXJuIHVwZGF0ZWQgbWV0YUluZm9ybWF0aW9uLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjA1LCBcIjIwNSBSZXNldCBDb250ZW50XCIsIFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIHRoZSByZXF1ZXN0IGFuZCB0aGUgdXNlciBhZ2VudCBTSE9VTEQgcmVzZXQgdGhlIGRvY3VtZW50IHZpZXcgd2hpY2ggY2F1c2VkIHRoZSByZXF1ZXN0IHRvIGJlIHNlbnQuXCIpO1xuICAgICAgICAgICAgY2FzZSAyMDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDYsIFwiMjA2IFBhcnRpYWwgQ29udGVudFwiLCBcIlRoZSBzZXJ2ZXIgaGFzIGZ1bGZpbGxlZCB0aGUgcGFydGlhbCBHRVQgcmVxdWVzdCBmb3IgdGhlIHJlc291cmNlLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzAwLCBcIjMwMCBNdWx0aXBsZSBDaG9pY2VzXCIsIFwiVXNlciAob3IgdXNlciBhZ2VudCkgY2FuIHNlbGVjdCBhIHByZWZlcnJlZCByZXByZXNlbnRhdGlvbiBhbmQgcmVkaXJlY3QgaXRzIHJlcXVlc3QgdG8gdGhhdCBsb2NhdGlvbi5cIik7XG4gICAgICAgICAgICBjYXNlIDMwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwMSwgXCIzMDEgTW92ZWQgUGVybWFuZW50bHlcIiwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIGhhcyBiZWVuIGFzc2lnbmVkIGEgbmV3IHBlcm1hbmVudCBVUkkgYW5kIGFueSBmdXR1cmUgcmVmZXJlbmNlcyB0byB0aGlzIHJlc291cmNlIFNIT1VMRCB1c2Ugb25lIG9mIHRoZSByZXR1cm5lZCBVUklzLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzAyLCBcIjMwMiBGb3VuZFwiLCBcIlRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgcmVzaWRlcyB0ZW1wb3JhcmlseSB1bmRlciBhIGRpZmZlcmVudCBVUkkuXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDMsIFwiMzAzIFNlZSBPdGhlclwiLCBcIlRoZSByZXNwb25zZSB0byB0aGUgcmVxdWVzdCBjYW4gYmUgZm91bmQgdW5kZXIgYSBkaWZmZXJlbnQgVVJJIGFuZCBTSE9VTEQgYmUgcmV0cmlldmVkIHVzaW5nIGEgR0VUIG1ldGhvZCBvbiB0aGF0IHJlc291cmNlLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzA0LCBcIjMwNCBOb3QgTW9kaWZpZWRcIiwgXCJJZiB0aGUgY2xpZW50IGhhcyBwZXJmb3JtZWQgYSBjb25kaXRpb25hbCBHRVQgcmVxdWVzdCBhbmQgYWNjZXNzIGlzIGFsbG93ZWQsIGJ1dCB0aGUgZG9jdW1lbnQgaGFzIG5vdCBiZWVuIG1vZGlmaWVkLCB0aGUgc2VydmVyIFNIT1VMRCByZXNwb25kIHdpdGggdGhpcyBzdGF0dXMgY29kZS5cIik7XG4gICAgICAgICAgICBjYXNlIDMwNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwNSwgXCIzMDUgVXNlIFByb3h5XCIsIFwiVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBNVVNUIGJlIGFjY2Vzc2VkIHRocm91Z2ggdGhlIHByb3h5IGdpdmVuIGJ5IHRoZSBMb2NhdGlvbiBmaWVsZC5cIik7XG4gICAgICAgICAgICBjYXNlIDMwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwNywgXCIzMDcgVGVtcG9yYXJ5IFJlZGlyZWN0XCIsIFwiVGhlIHJlcXVlc3RlZCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSS5cIik7XG4gICAgICAgICAgICBjYXNlIDQwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwMCwgXCI0MDAgQmFkIFJlcXVlc3RcIiwgXCJUaGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgdW5kZXJzdG9vZCBieSB0aGUgc2VydmVyIGR1ZSB0byBtYWxmb3JtZWQgc3ludGF4LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDAxLCBcIjQwMSBVbmF1dGhvcml6ZWRcIiwgXCJUaGUgcmVxdWVzdCByZXF1aXJlcyB1c2VyIGF1dGhlbnRpY2F0aW9uLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDAzLCBcIjQwMyBGb3JiaWRkZW5cIiwgXCJUaGUgc2VydmVyIHVuZGVyc3Rvb2QgdGhlIHJlcXVlc3QsIGJ1dCBpcyByZWZ1c2luZyB0byBmdWxmaWxsIGl0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDA0LCBcIjQwNCBOb3QgRm91bmRcIiwgXCJUaGUgc2VydmVyIGhhcyBub3QgZm91bmQgYW55dGhpbmcgbWF0Y2hpbmcgdGhlIFJlcXVlc3QtVVJJLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDA1LCBcIjQwNSBNZXRob2QgTm90IEFsbG93ZWQnLCdUaGUgbWV0aG9kIHNwZWNpZmllZCBpbiB0aGUgUmVxdWVzdC1MaW5lIGlzIG5vdCBhbGxvd2VkIGZvciB0aGUgcmVzb3VyY2UgaWRlbnRpZmllZCBieSB0aGUgUmVxdWVzdC1VUkkuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDYsIFwiNDA2IE5vdCBBY2NlcHRhYmxlXCIsIFwiVGhlIHJlc291cmNlIGlkZW50aWZpZWQgYnkgdGhlIHJlcXVlc3QgaXMgb25seSBjYXBhYmxlIG9mIGdlbmVyYXRpbmcgcmVzcG9uc2UgZW50aXRpZXMgd2hpY2ggaGF2ZSBjb250ZW50IGNoYXJhY3RlcmlzdGljcyBub3QgYWNjZXB0YWJsZSBhY2NvcmRpbmcgdG8gdGhlIGFjY2VwdCBoZWFkZXJzIHNlbnQgaW4gdGhlIHJlcXVlc3QuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDcsIFwiNDA3IFByb3h5IEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkXCIsIFwiVGhpcyBjb2RlIGlzIHNpbWlsYXIgdG8gNDAxIChVbmF1dGhvcml6ZWQpLCBidXQgaW5kaWNhdGVzIHRoYXQgdGhlIGNsaWVudCBtdXN0IGZpcnN0IGF1dGhlbnRpY2F0ZSBpdHNlbGYgd2l0aCB0aGUgcHJveHkuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDgsIFwiNDA4IFJlcXVlc3QgVGltZW91dFwiLCBcIlRoZSBjbGllbnQgZGlkIG5vdCBwcm9kdWNlIGEgcmVxdWVzdCB3aXRoaW4gdGhlIHRpbWUgdGhhdCB0aGUgc2VydmVyIHdhcyBwcmVwYXJlZCB0byB3YWl0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDA5LCBcIjQwOSBDb25mbGljdFwiLCBcIlRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBjb21wbGV0ZWQgZHVlIHRvIGEgY29uZmxpY3Qgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgcmVzb3VyY2UuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTAsIFwiNDEwIEdvbmVcIiwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIGlzIG5vIGxvbmdlciBhdmFpbGFibGUgYXQgdGhlIHNlcnZlciBhbmQgbm8gZm9yd2FyZGluZyBhZGRyZXNzIGlzIGtub3duLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDExOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDExLCBcIjQxMSBMZW5ndGggUmVxdWlyZWRcIiwgXCJUaGUgc2VydmVyIHJlZnVzZXMgdG8gYWNjZXB0IHRoZSByZXF1ZXN0IHdpdGhvdXQgYSBkZWZpbmVkIENvbnRlbnQtTGVuZ3RoLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDEyLCBcIjQxMiBQcmVjb25kaXRpb24gRmFpbGVkXCIsIFwiVGhlIHByZWNvbmRpdGlvbiBnaXZlbiBpbiBvbmUgb3IgbW9yZSBvZiB0aGUgcmVxdWVzdC1oZWFkZXIgZmllbGRzIGV2YWx1YXRlZCB0byBmYWxzZSB3aGVuIGl0IHdhcyB0ZXN0ZWQgb24gdGhlIHNlcnZlci5cIik7XG4gICAgICAgICAgICBjYXNlIDQxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQxMywgXCI0MTMgUmVxdWVzdCBFbnRpdHkgVG9vIExhcmdlXCIsIFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBwcm9jZXNzIGEgcmVxdWVzdCBiZWNhdXNlIHRoZSByZXF1ZXN0IGVudGl0eSBpcyBsYXJnZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgb3IgYWJsZSB0byBwcm9jZXNzLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE0LCBcIjQxNCBSZXF1ZXN0LVVSSSBUb28gTG9uZ1wiLCBcIlRoZSBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gc2VydmljZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSBSZXF1ZXN0LVVSSSBpcyBsb25nZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgdG8gaW50ZXJwcmV0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE1LCBcIjQxNSBVbnN1cHBvcnRlZCBNZWRpYSBUeXBlXCIsIFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBzZXJ2aWNlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIGVudGl0eSBvZiB0aGUgcmVxdWVzdCBpcyBpbiBhIGZvcm1hdCBub3Qgc3VwcG9ydGVkIGJ5IHRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgZm9yIHRoZSByZXF1ZXN0ZWQgbWV0aG9kLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE2LCBcIjQxNiBSZXF1ZXN0ZWQgUmFuZ2UgTm90IFNhdGlzZmlhYmxlXCIsIFwiQSBzZXJ2ZXIgU0hPVUxEIHJldHVybiBhIHJlc3BvbnNlIHdpdGggdGhpcyBzdGF0dXMgY29kZSBpZiBhIHJlcXVlc3QgaW5jbHVkZWQgYSBSYW5nZSByZXF1ZXN0LWhlYWRlciBmaWVsZCAoc2VjdGlvbiAxNC4zNSksIGFuZCBub25lIG9mIHRoZSByYW5nZS1zcGVjaWZpZXIgdmFsdWVzIGluIHRoaXMgZmllbGQgb3ZlcmxhcCB0aGUgY3VycmVudCBleHRlbnQgb2YgdGhlIHNlbGVjdGVkIHJlc291cmNlLCBhbmQgdGhlIHJlcXVlc3QgZGlkIG5vdCBpbmNsdWRlIGFuIElmLVJhbmdlIHJlcXVlc3QtaGVhZGVyIGZpZWxkLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDE3LCBcIjQxNyBFeHBlY3RhdGlvbiBGYWlsZWRcIiwgXCJUaGUgZXhwZWN0YXRpb24gZ2l2ZW4gaW4gYW4gRXhwZWN0IHJlcXVlc3QtaGVhZGVyIGZpZWxkIChzZWUgc2VjdGlvbiAxNC4yMCkgY291bGQgbm90IGJlIG1ldCBieSB0aGlzIHNlcnZlci5cIik7XG4gICAgICAgICAgICBjYXNlIDUwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDUwMCwgXCI1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXCIsIFwiVGhlIHNlcnZlciBlbmNvdW50ZXJlZCBhbiB1bmV4cGVjdGVkIGNvbmRpdGlvbiB3aGljaCBwcmV2ZW50ZWQgaXQgZnJvbSBmdWxmaWxsaW5nIHRoZSByZXF1ZXN0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTAxLCBcIjUwMSBOb3QgSW1wbGVtZW50ZWRcIiwgXCJUaGUgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQgdGhlIGZ1bmN0aW9uYWxpdHkgaW50ZXJmYWNlX2Z1bmN0aW9uX3ZpZXdfbW9kZWwgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cIik7XG4gICAgICAgICAgICBjYXNlIDUwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDUwMiwgXCI1MDIgQmFkIEdhdGV3YXlcIiwgXCJUaGUgc2VydmVyLCB3aGlsZSBhY3RpbmcgYXMgYSBnYXRld2F5IG9yIHByb3h5LCByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIGZyb20gdGhlIHVwc3RyZWFtIHNlcnZlciBpdCBhY2Nlc3NlZCBpbiBhdHRlbXB0aW5nIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXCIpO1xuICAgICAgICAgICAgY2FzZSA1MDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA1MDMsIFwiNTAzIFNlcnZpY2UgVW5hdmFpbGFibGVcIiwgXCJUaGUgc2VydmVyIGlzIGN1cnJlbnRseSB1bmFibGUgdG8gaGFuZGxlIHRoZSByZXF1ZXN0IGR1ZSB0byBhIHRlbXBvcmFyeSBvdmVybG9hZGluZyBvciBtYWludGVuYW5jZSBvZiB0aGUgc2VydmVyLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTA0LCBcIjUwNCBHYXRld2F5IFRpbWVvdXRcIiwgXCJUaGUgc2VydmVyLCB3aGlsZSBhY3RpbmcgYXMgYSBnYXRld2F5IG9yIHByb3h5LCBkaWQgbm90IHJlY2VpdmUgYSB0aW1lbHkgcmVzcG9uc2UgZnJvbSB0aGUgdXBzdHJlYW0gc2VydmVyIHNwZWNpZmllZCBieSB0aGUgVVJJLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTA1LCBcIjUwNSBIVFRQIFZlcnNpb24gTm90IFN1cHBvcnRlZFwiLCBcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCwgb3IgcmVmdXNlcyB0byBzdXBwb3J0LCB0aGUgSFRUUCBwcm90b2NvbCB2ZXJzaW9uIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QgbWVzc2FnZS5cIik7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIk5ldHdvcmtFeGNlcHRpb24oa2V5OiBcIiArIHRoaXMua2V5ICsgXCIsIFwiICtcbiAgICAgICAgICAgIFwic3RhdHVzQ29kZTogXCIgKyB0aGlzLnN0YXR1c0NvZGUgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJuYW1lU3RhdHVzQ29kZSAob3B0aW9uYWwpOiBcIiArIHRoaXMubmFtZVN0YXR1c0NvZGUgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblN0YXR1c0NvZGUgKG9wdGlvbmFsKTogXCIgKyB0aGlzLmRlc2NyaXB0aW9uU3RhdHVzQ29kZSArIFwiKVwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDdXJyZW50TW9kZWxXSW5kZXgge1xuICAgIGNvbnN0cnVjdG9yKGN1cnJlbnRNb2RlbCwgaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TW9kZWwgPSBjdXJyZW50TW9kZWw7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsV05hbWVkV05hbWVkV05hbWVkSXRlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpc3RNb2RlbEl0ZXJhdG9yID0gbmV3IEFycmF5KCk7XG4gICAgfVxuICAgIGdldFNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvcihuZXdMaXN0TW9kZWwpIHtcbiAgICAgICAgaWYgKG5ld0xpc3RNb2RlbC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdE1vZGVsSXRlcmF0b3IucHVzaCguLi5uZXdMaXN0TW9kZWwpO1xuICAgICAgICBjb25zdCBuZXdMaXN0TW9kZWxGSVJTVCA9IG5ldyBBcnJheSgpO1xuICAgICAgICB3aGlsZSAodGhpcy5saXN0TW9kZWxJdGVyYXRvci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TW9kZWxXSW5kZXggPSB0aGlzLmN1cnJlbnRNb2RlbFdJbmRleDtcbiAgICAgICAgICAgIHRoaXMubGlzdE1vZGVsSXRlcmF0b3Iuc3BsaWNlKGN1cnJlbnRNb2RlbFdJbmRleC5pbmRleCwgMSk7XG4gICAgICAgICAgICBuZXdMaXN0TW9kZWxGSVJTVC5wdXNoKGN1cnJlbnRNb2RlbFdJbmRleC5jdXJyZW50TW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdMaXN0TW9kZWxGSVJTVDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZUxpc3RNb2RlbCB7XG4gICAgY29uc3RydWN0b3IobGlzdE1vZGVsKSB7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsID0gbGlzdE1vZGVsO1xuICAgIH1cbiAgICBzb3J0aW5nRnJvbU1vZGVsV05hbWVkV05hbWVkV05hbWVkSXRlcmF0b3JQYXJhbWV0ZXJMaXN0TW9kZWwobW9kZWxXTmFtZWRXTmFtZWRXTmFtZWRJdGVyYXRvcikge1xuICAgICAgICBjb25zdCBzb3J0ZWRMaXN0TW9kZWxGcm9tTmV3TGlzdE1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsSXRlcmF0b3IgPSBtb2RlbFdOYW1lZFdOYW1lZFdOYW1lZEl0ZXJhdG9yLmdldFNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvcih0aGlzLmxpc3RNb2RlbCk7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLmxlbmd0aCA+IDAgPyB0aGlzLmxpc3RNb2RlbC5zcGxpY2UoMCwgdGhpcy5saXN0TW9kZWwubGVuZ3RoKSA6IG51bGw7XG4gICAgICAgIHNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvci5sZW5ndGggPiAwID8gdGhpcy5saXN0TW9kZWwucHVzaCguLi5zb3J0ZWRMaXN0TW9kZWxGcm9tTmV3TGlzdE1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsSXRlcmF0b3IpIDogbnVsbDtcbiAgICB9XG4gICAgaW5zZXJ0RnJvbU5ld01vZGVsUGFyYW1ldGVyTGlzdE1vZGVsKG5ld01vZGVsKSB7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLnB1c2gobmV3TW9kZWwpO1xuICAgIH1cbiAgICB1cGRhdGVGcm9tTmV3TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobmV3TW9kZWwpIHtcbiAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSBuZXdNb2RlbC51bmlxdWVJZCk7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLnNwbGljZShmaW5kSW5kZXgsIDEsIG5ld01vZGVsKTtcbiAgICB9XG4gICAgZGVsZXRlRnJvbVVuaXF1ZUlkQnlNb2RlbFBhcmFtZXRlckxpc3RNb2RlbCh1bmlxdWVJZEJ5TW9kZWwpIHtcbiAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSB1bmlxdWVJZEJ5TW9kZWwpO1xuICAgICAgICB0aGlzLmxpc3RNb2RlbC5zcGxpY2UoZmluZEluZGV4LCAxKTtcbiAgICB9XG4gICAgaW5zZXJ0TGlzdEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobmV3TGlzdE1vZGVsKSB7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLnB1c2goLi4ubmV3TGlzdE1vZGVsKTtcbiAgICB9XG4gICAgdXBkYXRlTGlzdEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobmV3TGlzdE1vZGVsKSB7XG4gICAgICAgIGZvciAoY29uc3QgbmV3SXRlbU1vZGVsIG9mIG5ld0xpc3RNb2RlbCkge1xuICAgICAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSBuZXdJdGVtTW9kZWwudW5pcXVlSWQpO1xuICAgICAgICAgICAgdGhpcy5saXN0TW9kZWwuc3BsaWNlKGZpbmRJbmRleCwgMSwgbmV3SXRlbU1vZGVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWxldGVMaXN0RnJvbUxpc3RVbmlxdWVJZEJ5TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobGlzdFVuaXF1ZUlkQnlNb2RlbCkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW1VbmlxdWVJZEJ5TW9kZWwgb2YgbGlzdFVuaXF1ZUlkQnlNb2RlbCkge1xuICAgICAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGhpcy5saXN0TW9kZWwuZmluZEluZGV4KChpdGVtTW9kZWwpID0+IGl0ZW1Nb2RlbC51bmlxdWVJZCA9PSBpdGVtVW5pcXVlSWRCeU1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMubGlzdE1vZGVsLnNwbGljZShmaW5kSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbCB7XG4gICAgY29uc3RydWN0b3IodW5pcXVlSWQpIHtcbiAgICAgICAgdGhpcy51bmlxdWVJZCA9IHVuaXF1ZUlkO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTmFtZWRTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIERlZmF1bHRTdGF0ZSBleHRlbmRzIEJhc2VOYW1lZFN0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhRm9yTmFtZWQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhRm9yTmFtZWQgPSBkYXRhRm9yTmFtZWQ7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlID0gdHJ1ZTtcbiAgICB9XG4gICAgZ2V0IGdldERhdGFGb3JOYW1lZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YUZvck5hbWVkO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTmFtZWRTdHJlYW1XU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEZWZhdWx0U3RyZWFtV1N0YXRlIGV4dGVuZHMgQmFzZU5hbWVkU3RyZWFtV1N0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhRm9yTmFtZWQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhRm9yTmFtZWQgPSBkYXRhRm9yTmFtZWQ7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRGlzcG9zZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgICBnZXQgZ2V0RGF0YUZvck5hbWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhRm9yTmFtZWQ7XG4gICAgfVxuICAgIGxpc3RlblN0cmVhbURhdGFGb3JOYW1lZEZyb21DYWxsYmFjayhjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIkRlZmF1bHRTdHJlYW1XU3RhdGVcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVFRTGlzdGVuU3RyZWFtRGF0YUZvck5hbWVkRnJvbUNhbGxiYWNrXCIsIFwiQWxyZWFkeSBkaXNwb3NlZCBvZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJEZWZhdWx0U3RyZWFtV1N0YXRlXCIsIEVudW1HdWlsdHkuZGV2ZWxvcGVyLCBcIkRlZmF1bHRTdHJlYW1XU3RhdGVRUUxpc3RlblN0cmVhbURhdGFGb3JOYW1lZEZyb21DYWxsYmFja1wiLCBcIkR1cGxpY2F0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIG5vdGlmeVN0cmVhbURhdGFGb3JOYW1lZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJEZWZhdWx0U3RyZWFtV1N0YXRlXCIsIEVudW1HdWlsdHkuZGV2ZWxvcGVyLCBcIkRlZmF1bHRTdHJlYW1XU3RhdGVRUU5vdGlmeVN0cmVhbURhdGFGb3JOYW1lZFwiLCBcIkFscmVhZHkgZGlzcG9zZWQgb2ZcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2sgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVwiLCBFbnVtR3VpbHR5LmRldmVsb3BlciwgXCJEZWZhdWx0U3RyZWFtV1N0YXRlUVFOb3RpZnlTdHJlYW1EYXRhRm9yTmFtZWRcIiwgXCJTdHJlYW0gaGFzIG5vIGxpc3RlbmVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5kYXRhRm9yTmFtZWQpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUZW1wQ2FjaGVTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50ZW1wQ2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudGVtcENhY2hlV0xpc3RBY3Rpb24gPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHN0YXRpYyBjbGVhclRlbXBDYWNoZVBhcm1ldGVySW5zdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZSA9IHRoaXMuaW5zdGFuY2UudGVtcENhY2hlO1xuICAgICAgICB0ZW1wQ2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgc3RhdGljIGNsb3NlU3RyZWFtRnJvbUtleVRlbXBDYWNoZVBhcm1ldGVySW5zdGFuY2Uoa2V5VGVtcENhY2hlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZVdMaXN0QWN0aW9uID0gdGhpcy5pbnN0YW5jZS50ZW1wQ2FjaGVXTGlzdEFjdGlvbjtcbiAgICAgICAgaWYgKCF0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5oYXMoa2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdldCA9IHRlbXBDYWNoZVdMaXN0QWN0aW9uLmdldChrZXlUZW1wQ2FjaGUpO1xuICAgICAgICBnZXQgPT09IG51bGwgfHwgZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnZXQuc3BsaWNlKDAsIGdldC5sZW5ndGgpO1xuICAgIH1cbiAgICBzdGF0aWMgY2xvc2VTdHJlYW1Gcm9tTGlzdEtleVRlbXBDYWNoZVBhcm1ldGVySW5zdGFuY2UobGlzdEtleVRlbXBDYWNoZSkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMuaW5zdGFuY2UudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGZvciAoY29uc3QgaXRlbUtleVRlbXBDYWNoZSBvZiBsaXN0S2V5VGVtcENhY2hlKSB7XG4gICAgICAgICAgICBpZiAoIXRlbXBDYWNoZVdMaXN0QWN0aW9uLmhhcyhpdGVtS2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGdldCA9IHRlbXBDYWNoZVdMaXN0QWN0aW9uLmdldChpdGVtS2V5VGVtcENhY2hlKTtcbiAgICAgICAgICAgIGdldCA9PT0gbnVsbCB8fCBnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdldC5zcGxpY2UoMCwgZ2V0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGNsb3NlU3RyZWFtc1BhcmFtZXRlckluc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMuaW5zdGFuY2UudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGZvciAoY29uc3QgWywgdmFsdWVdIG9mIHRlbXBDYWNoZVdMaXN0QWN0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZS5zcGxpY2UoMCwgdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRGcm9tS2V5VGVtcENhY2hlUGFyYW1ldGVyVGVtcENhY2hlKGtleVRlbXBDYWNoZSkge1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGUgPSB0aGlzLnRlbXBDYWNoZTtcbiAgICAgICAgaWYgKCF0ZW1wQ2FjaGUuaGFzKGtleVRlbXBDYWNoZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIlRlbXBDYWNoZVNlcnZpY2VcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIGtleVRlbXBDYWNoZSwgXCJObyBleGlzdHMga2V5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wQ2FjaGUuZ2V0KGtleVRlbXBDYWNoZSk7XG4gICAgfVxuICAgIGxpc3RlblN0cmVhbUZyb21LZXlUZW1wQ2FjaGVBbmRDYWxsYmFja1BhcmFtZXRlck9uZShrZXlUZW1wQ2FjaGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZVdMaXN0QWN0aW9uID0gdGhpcy50ZW1wQ2FjaGVXTGlzdEFjdGlvbjtcbiAgICAgICAgaWYgKCF0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5oYXMoa2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgdGVtcENhY2hlV0xpc3RBY3Rpb24uc2V0KGtleVRlbXBDYWNoZSwgbmV3IEFycmF5KCkpO1xuICAgICAgICAgICAgKF9hID0gdGVtcENhY2hlV0xpc3RBY3Rpb24uZ2V0KGtleVRlbXBDYWNoZSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAoX2IgPSB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5nZXQoa2V5VGVtcENhY2hlKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICB1cGRhdGVGcm9tS2V5VGVtcENhY2hlQW5kVmFsdWVQYXJhbWV0ZXJUZW1wQ2FjaGUoa2V5VGVtcENhY2hlLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnRlbXBDYWNoZS5zZXQoa2V5VGVtcENhY2hlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHVwZGF0ZVdoZXJlU3RyZWFtTm90aWZpY2F0aW9uSXNQb3NzaWJsZUZyb21LZXlUZW1wQ2FjaGVBbmRWYWx1ZVBhcmFtZXRlck9uZShrZXlUZW1wQ2FjaGUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRnJvbUtleVRlbXBDYWNoZUFuZFZhbHVlUGFyYW1ldGVyVGVtcENhY2hlKGtleVRlbXBDYWNoZSwgdmFsdWUpO1xuICAgICAgICBjb25zdCB0ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IHRoaXMudGVtcENhY2hlV0xpc3RBY3Rpb247XG4gICAgICAgIGlmICghdGVtcENhY2hlV0xpc3RBY3Rpb24uaGFzKGtleVRlbXBDYWNoZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnZXQgPSB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5nZXQoa2V5VGVtcENhY2hlKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtR2V0IG9mIGdldCkge1xuICAgICAgICAgICAgaXRlbUdldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVsZXRlRnJvbUtleVRlbXBDYWNoZVBhcmFtZXRlclRlbXBDYWNoZShrZXlUZW1wQ2FjaGUpIHtcbiAgICAgICAgdGhpcy50ZW1wQ2FjaGUuZGVsZXRlKGtleVRlbXBDYWNoZSk7XG4gICAgfVxufVxuVGVtcENhY2hlU2VydmljZS5pbnN0YW5jZSA9IG5ldyBUZW1wQ2FjaGVTZXJ2aWNlKCk7XG5leHBvcnQgdmFyIEVudW1SV1RNb2RlO1xuKGZ1bmN0aW9uIChFbnVtUldUTW9kZSkge1xuICAgIEVudW1SV1RNb2RlW0VudW1SV1RNb2RlW1wicmVsZWFzZVwiXSA9IDBdID0gXCJyZWxlYXNlXCI7XG4gICAgRW51bVJXVE1vZGVbRW51bVJXVE1vZGVbXCJ0ZXN0XCJdID0gMV0gPSBcInRlc3RcIjtcbn0pKEVudW1SV1RNb2RlIHx8IChFbnVtUldUTW9kZSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgTmFtZWRDYWxsYmFjayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBSV1RNb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihlbnVtUldUTW9kZSwgbGlzdE5hbWVkQ2FsbGJhY2tXUmVsZWFzZSwgbGlzdE5hbWVkQ2FsbGJhY2tXVGVzdCkge1xuICAgICAgICB0aGlzLmVudW1SV1RNb2RlID0gZW51bVJXVE1vZGU7XG4gICAgICAgIHRoaXMubWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tXUmVsZWFzZSA9IFJXVE1vZGUuZ2V0TWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tGcm9tTGlzdE5hbWVkQ2FsbGJhY2sobGlzdE5hbWVkQ2FsbGJhY2tXUmVsZWFzZSk7XG4gICAgICAgIHRoaXMubWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tXVGVzdCA9IFJXVE1vZGUuZ2V0TWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tGcm9tTGlzdE5hbWVkQ2FsbGJhY2sobGlzdE5hbWVkQ2FsbGJhY2tXVGVzdCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRNYXBTdHJpbmdXTmFtZWRDYWxsYmFja0Zyb21MaXN0TmFtZWRDYWxsYmFjayhsaXN0TmFtZWRDYWxsYmFjaykge1xuICAgICAgICBjb25zdCBtYXBTdHJpbmdXTmFtZWRDYWxsYmFjayA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtTmFtZWRDYWxsYmFjayBvZiBsaXN0TmFtZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgbWFwU3RyaW5nV05hbWVkQ2FsbGJhY2suc2V0KGl0ZW1OYW1lZENhbGxiYWNrLm5hbWUsIGl0ZW1OYW1lZENhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwU3RyaW5nV05hbWVkQ2FsbGJhY2s7XG4gICAgfVxuICAgIGdldE5hbWVkQ2FsbGJhY2tGcm9tTmFtZShuYW1lKSB7XG4gICAgICAgIGNvbnN0IG1hcFN0cmluZ1dOYW1lZENhbGxiYWNrV2hlcmVTZWxlY3RNb2RQYXJhbWV0ZXJzVGhyZWUgPSB0aGlzLmdldE1hcFN0cmluZ1dOYW1lZENhbGxiYWNrV2hlcmVTZWxlY3RNb2RQYXJhbWV0ZXJzVGhyZWU7XG4gICAgICAgIGlmICghbWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tXaGVyZVNlbGVjdE1vZFBhcmFtZXRlcnNUaHJlZS5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIlJXVE1vZGVcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIFwiUldUTW9kZVFRR2V0TmFtZWRDYWxsYmFja0Zyb21OYW1lXCIsIFwibm8gZXhpc3RzIGtleTogXCIgKyBuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tXaGVyZVNlbGVjdE1vZFBhcmFtZXRlcnNUaHJlZS5nZXQobmFtZSk7XG4gICAgfVxuICAgIGdldCBnZXRNYXBTdHJpbmdXTmFtZWRDYWxsYmFja1doZXJlU2VsZWN0TW9kUGFyYW1ldGVyc1RocmVlKCkge1xuICAgICAgICBpZiAodGhpcy5lbnVtUldUTW9kZSA9PSBFbnVtUldUTW9kZS5yZWxlYXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXBTdHJpbmdXTmFtZWRDYWxsYmFja1dSZWxlYXNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1hcFN0cmluZ1dOYW1lZENhbGxiYWNrV1Rlc3Q7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKGV4Y2VwdGlvbikge1xuICAgICAgICB0aGlzLmV4Y2VwdGlvbiA9IGV4Y2VwdGlvbjtcbiAgICB9XG4gICAgc3RhdGljIHN1Y2Nlc3MoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXhjZXB0aW9uQ29udHJvbGxlcihudWxsKTtcbiAgICB9XG4gICAgc3RhdGljIGV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFeGNlcHRpb25Db250cm9sbGVyKGV4Y2VwdGlvbik7XG4gICAgfVxuICAgIGdldCBnZXRLZXlQYXJhbWV0ZXJFeGNlcHRpb24oKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHJldHVybiAoX2IgPSAoX2EgPSB0aGlzLmV4Y2VwdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmtleSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJcIjtcbiAgICB9XG4gICAgaXNXaGVyZU5vdEVxdWFsc051bGxQYXJhbWV0ZXJFeGNlcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4Y2VwdGlvbiAhPSBudWxsO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhjZXB0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkV4Y2VwdGlvbkNvbnRyb2xsZXIoZXhjZXB0aW9uOiBudWxsKVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIkV4Y2VwdGlvbkNvbnRyb2xsZXIoZXhjZXB0aW9uOiBcIiArIHRoaXMuZXhjZXB0aW9uICsgXCIpXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlc3VsdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVyLCBleGNlcHRpb25Db250cm9sbGVyKSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyID0gcGFyYW1ldGVyO1xuICAgICAgICB0aGlzLmV4Y2VwdGlvbkNvbnRyb2xsZXIgPSBleGNlcHRpb25Db250cm9sbGVyO1xuICAgIH1cbiAgICBzdGF0aWMgc3VjY2VzcyhwYXJhbWV0ZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXN1bHQocGFyYW1ldGVyLCBFeGNlcHRpb25Db250cm9sbGVyLnN1Y2Nlc3MoKSk7XG4gICAgfVxuICAgIHN0YXRpYyBleGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzdWx0KG51bGwsIEV4Y2VwdGlvbkNvbnRyb2xsZXIuZXhjZXB0aW9uKGV4Y2VwdGlvbikpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z1ByaW50KHRleHQpIHtcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z1ByaW50RXhjZXB0aW9uKHRleHQpIHtcbiAgICBkZWJ1Z1ByaW50KFwiXFx4MUJbMzFtXCIgKyB0ZXh0ICsgXCJcXHgxYlswbVwiKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVGVtcENhY2hlU2VydmljZSwgZGVidWdQcmludCB9IGZyb20gXCJsaWJyYXJ5X2FyY2hpdGVjdHVyZV9tdnZtX21vZGlmeV9qYXZhc2NyaXB0XCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xyXG4gICAgY29uc3QgdGVtcENhY2hlU2VydmljZSA9IFRlbXBDYWNoZVNlcnZpY2UuaW5zdGFuY2U7XHJcbiAgICBjb25zdCBrZXkgPSBcImtleVwiO1xyXG4gICAgdGVtcENhY2hlU2VydmljZS51cGRhdGVXaGVyZVN0cmVhbU5vdGlmaWNhdGlvbklzUG9zc2libGVGcm9tS2V5VGVtcENhY2hlQW5kVmFsdWVQYXJhbWV0ZXJPbmUoa2V5LFwiT25lXCIpO1xyXG4gICAgY29uc3QgZnJvbUtleVRlbXBDYWNoZVBhcmFtZXRlclRlbXBDYWNoZSA9IHRlbXBDYWNoZVNlcnZpY2UuZ2V0RnJvbUtleVRlbXBDYWNoZVBhcmFtZXRlclRlbXBDYWNoZShrZXkpO1xyXG4gICAgZGVidWdQcmludChcIkZyb21LZXlUZW1wQ2FjaGVQYXJhbWV0ZXJUZW1wQ2FjaGU6IFwiICsgZnJvbUtleVRlbXBDYWNoZVBhcmFtZXRlclRlbXBDYWNoZSk7XHJcbiAgICB0ZW1wQ2FjaGVTZXJ2aWNlLmxpc3RlblN0cmVhbUZyb21LZXlUZW1wQ2FjaGVBbmRDYWxsYmFja1BhcmFtZXRlck9uZShrZXksKGRhdGEpPT4ge1xyXG4gICAgICAgIGRlYnVnUHJpbnQoXCJMaXN0ZW46IFwiICsgZGF0YSk7XHJcbiAgICB9KTtcclxuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLDEwMDApKTtcclxuICAgIHRlbXBDYWNoZVNlcnZpY2UudXBkYXRlV2hlcmVTdHJlYW1Ob3RpZmljYXRpb25Jc1Bvc3NpYmxlRnJvbUtleVRlbXBDYWNoZUFuZFZhbHVlUGFyYW1ldGVyT25lKGtleSxcIlR3b1wiKTtcclxuICAgIHRlbXBDYWNoZVNlcnZpY2UubGlzdGVuU3RyZWFtRnJvbUtleVRlbXBDYWNoZUFuZENhbGxiYWNrUGFyYW1ldGVyT25lKGtleSwoZGF0YSk9PiB7XHJcbiAgICAgICAgZGVidWdQcmludChcIkxpc3RlblR3bzogXCIgKyBkYXRhKTtcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsMTAwMCkpO1xyXG4gICAgdGVtcENhY2hlU2VydmljZS51cGRhdGVXaGVyZVN0cmVhbU5vdGlmaWNhdGlvbklzUG9zc2libGVGcm9tS2V5VGVtcENhY2hlQW5kVmFsdWVQYXJhbWV0ZXJPbmUoa2V5LFwiVGhyZWVcIik7XHJcbiAgICB0ZW1wQ2FjaGVTZXJ2aWNlLmxpc3RlblN0cmVhbUZyb21LZXlUZW1wQ2FjaGVBbmRDYWxsYmFja1BhcmFtZXRlck9uZShrZXksKGRhdGEpPT4ge1xyXG4gICAgICAgIGRlYnVnUHJpbnQoXCJMaXN0ZW5UaHJlZTogXCIgKyBkYXRhKTtcclxuICAgIH0pO1xyXG59XHJcbm1haW4oKTtcclxuLy8gRVhQRUNURUQgT1VUUFVUOlxyXG4vL1xyXG4vLyBGcm9tS2V5VGVtcENhY2hlUGFyYW1ldGVyVGVtcENhY2hlOiBPbmVcclxuLy8gTGlzdGVuOiBUd29cclxuLy8gTGlzdGVuOiBUaHJlZVxyXG4vLyBMaXN0ZW5Ud286IFRocmVlIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9