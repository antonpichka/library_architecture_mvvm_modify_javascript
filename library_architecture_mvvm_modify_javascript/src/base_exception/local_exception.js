import { BaseException } from "./base_exception.js";

export class LocalException extends BaseException {
    #valueWEnumGuilty;
    #message;
    
    constructor(thisClass,valueWEnumGuilty,key,message = "") {
        super(thisClass,"LocalException",key);
        this.#valueWEnumGuilty = valueWEnumGuilty;
        this.#message = message;
        this._debugPrintExceptionWhereToStringParametersThisClassAndExceptionClass();
    }

    toString() {
        return "LocalException(valueWEnumGuilty: " + this.valueWEnumGuilty + ", " + 
            "key: " + this.key + ", " + 
            "message (optional): " + this.message + ")";
    }

    get valueWEnumGuilty() {
        return this.#valueWEnumGuilty;
    }

    get message() {
        return this.#message;
    }
}