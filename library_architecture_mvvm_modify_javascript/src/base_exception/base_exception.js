import { debugPrintException } from "../utility.js";
import { EnumGuilty } from "./enum_guilty.js";
import { LocalException } from "./local_exception.js";

export class BaseException {
    #thisClass;
    #exceptionClass;
    #key;

    constructor(thisClass,exceptionClass,key) {
        if (new.target === BaseException) {
            throw new LocalException("BaseException",EnumGuilty.developer,"BaseExceptionQQConstructor","Cannot instantiate abstract class");
        }
        this.#thisClass = thisClass;
        this.#exceptionClass = exceptionClass;
        this.#key = key;
    }
    
    toString() {
        throw new Error("BaseException,EnumGuilty.developer,BaseExceptionQQToString,Needs extends and must return type 'string'");
    }

    get key() {
        return this.#key;
    }
    
    /// Call this method in the descendant constructor as the last line
    _debugPrintExceptionParametersThisClassAndExceptionClass() {
        debugPrintException("\n===start_to_trace_exception===\n");
        debugPrintException(
            "WhereHappenedException(Class) --> " + this.#thisClass + "\n" +
            "NameException(Class) --> " + this.#exceptionClass + "\n" +
            "toString() --> " + this.toString());
        debugPrintException("\n===end_to_trace_exception===\n");
    }
}