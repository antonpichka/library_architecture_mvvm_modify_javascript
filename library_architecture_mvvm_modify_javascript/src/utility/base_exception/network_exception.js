import { BaseException } from "./base_exception";

export class NetworkException extends BaseException {
    constructor(thisClass,key,statusCode,nameStatusCode = "",descriptionStatusCode = "") {
        this.statusCode = function() {
            return (statusCode instanceof Number ? statusCode : null);
        };
        this.nameStatusCode = function() {
            return (nameStatusCode instanceof String ? nameStatusCode : null);
        };
        this.descriptionStatusCode = function() {
            return (descriptionStatusCode instanceof String ? descriptionStatusCode : null);
        }
        super(thisClass,"NetworkException",key);
    }

    toString() {
        return "NetworkException(key: " + this.key() + ", " +
            "statusCode: " + this.statusCode() + ", " +
            "nameStatusCode (optional): " + this.nameStatusCode() + ", " +
            "descriptionStatusCode (optional): " + this.descriptionStatusCode() + ")";
    }
}