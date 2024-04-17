import { BaseException } from "./base_exception";

export class LocalException extends BaseException {
    constructor(thisClass,valueWEnumGuilty,key,message = "") {
        this.valueWEnumGuilty = function() {
            return (valueWEnumGuilty instanceof String ? valueWEnumGuilty : null);
        };
        this.message = function() {
            return (message instanceof String ? message : null);
        };
        super(thisClass,"LocalException",key);
    }

    toString() {
        return "LocalException(valueWEnumGuilty: " + this.valueWEnumGuilty() + ", " + 
            "key: " + this.key() + ", " + 
            "message (optional): " + this.message() + ")";
    }
}