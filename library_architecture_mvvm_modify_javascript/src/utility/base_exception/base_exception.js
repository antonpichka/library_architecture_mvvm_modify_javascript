import "../utility.js";

export class BaseException { 
    constructor(thisClass,exceptionClass,key) {
        this.key = function() {
            return key instanceof String ? key : null;
        };
        let thisClassq = thisClass instanceof Object ? thisClass : null;
        let exceptionClassq = exceptionClass instanceof Object ? exceptionClass : null;
        debugPrintException("\n===start_to_trace_exception===\n");
        debugPrintException(
            "WhereHappenedException(Class) --> " + thisClassq.constructor.name  + "\n" +
            "NameException(Class) --> " + exceptionClassq.constructor.name + "\n" +
            "toString() --> " + toString());
        debugPrintException("\n===end_to_trace_exception===\n");
    }
    
    toString() {
        throw new Error("This is method 'toString()' needs extends and must return type 'String'");
    }
}