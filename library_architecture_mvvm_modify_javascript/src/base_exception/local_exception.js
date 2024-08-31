import { BaseException } from "./base_exception.js";

export class LocalException extends BaseException {
    #enumGuilty;
    #message;
    
    constructor(thisClass,enumGuilty,key,message = "") {
        super(thisClass,"LocalException",key);
        this.#enumGuilty = enumGuilty;
        this.#message = message;
        this._debugPrintExceptionParametersThisClassAndExceptionClass();
    }

    toString() {
        return "LocalException(enumGuilty: " + this.enumGuilty + ", " + 
            "key: " + this.key + ", " + 
            "message (optional): " + this.message + ")";
    }

    get enumGuilty() {
        return this.#enumGuilty;
    }

    get message() {
        return this.#message;
    }
}