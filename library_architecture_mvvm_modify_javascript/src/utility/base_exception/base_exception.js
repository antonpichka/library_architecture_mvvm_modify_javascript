import "../utility";

export class BaseException { 
    constructor(thisClass,exceptionClass,key) {
        this.key = function() {
            return (key instanceof String ? key : null);
        };
        let thisClassq = (thisClass instanceof String ? thisClass : null);
        let exceptionClassq = (exceptionClass instanceof String ? exceptionClass : null);
        debugPrintException("\n===start_to_trace_exception===\n");
        debugPrintException(
            "WhereHappenedException(Class) --> " + thisClassq + "\n" +
            "NameException(Class) --> " + exceptionClassq + "\n" +
            "toString() --> " + this.toString());
        debugPrintException("\n===end_to_trace_exception===\n");
    }
    
    toString() {
        throw new Error("BaseException,EnumGuilty.developer,BaseExceptionQQToString,Needs extends and must return type 'String'");
    }
}