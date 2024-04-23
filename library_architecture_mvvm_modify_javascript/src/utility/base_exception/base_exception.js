import { debugPrintException } from "../utility.js";
import { EnumGuilty } from "./enum_guilty.js";
import { LocalException } from "./local_exception.js";

export class BaseException {
    #key;

    constructor(thisClass,exceptionClass,key) {
        if (new.target === BaseException) {
            throw new LocalException("BaseException",EnumGuilty.developer,"BaseExceptionQQConstructor","Cannot instantiate abstract class");
        }
        this.#key = key;
        debugPrintException("\n===start_to_trace_exception===\n");
        debugPrintException(
            "WhereHappenedException(Class) --> " + thisClass + "\n" +
            "NameException(Class) --> " + exceptionClass + "\n" +
            "toString() --> " + this.toString());
        debugPrintException("\n===end_to_trace_exception===\n");
    }

    get key() {
        return this.#key;
    }
    
    toString() {
        throw new Error("BaseException,EnumGuilty.developer,BaseExceptionQQToString,Needs extends and must return type 'String'");
    }
}