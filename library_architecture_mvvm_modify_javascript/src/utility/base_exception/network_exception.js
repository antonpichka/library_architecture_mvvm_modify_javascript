import { BaseException } from "./base_exception";

export class NetworkException extends BaseException {
    #statusCode;
    #nameStatusCode;
    #descriptionStatusCode;

    constructor(thisClass,key,statusCode,nameStatusCode = "",descriptionStatusCode = "") {
        super(thisClass,"NetworkException",key);
        this.#statusCode = statusCode;
        this.#nameStatusCode = nameStatusCode;
        this.#descriptionStatusCode = descriptionStatusCode;
    }

    get statusCode() {
        return this.#statusCode;
    }

    get nameStatusCode() {
        return this.#nameStatusCode;
    }

    get descriptionStatusCode() {
        return this.#descriptionStatusCode;
    }

    toString() {
        return "NetworkException(key: " + this.key() + ", " +
            "statusCode: " + this.#statusCode + ", " +
            "nameStatusCode (optional): " + this.#nameStatusCode + ", " +
            "descriptionStatusCode (optional): " + this.#descriptionStatusCode + ")";
    }
}