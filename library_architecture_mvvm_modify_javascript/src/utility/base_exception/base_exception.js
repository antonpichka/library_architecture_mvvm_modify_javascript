import "../utility";

export class BaseException {
    #key;

    constructor(thisClass,exceptionClass,key) {
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