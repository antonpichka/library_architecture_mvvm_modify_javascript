import { BaseException } from "../utility/base_exception/base_exception";

export class ExceptionController {
    /// DO NOT CALL DIRECTLY, USE A STATIC METHOD
    constructor(exception) {
        let exceptionq = (exception instanceof BaseException ? exception : null);
        this.getKeyParameterException = function() {
            return exceptionq.key;
        }
        this.isWhereNotEqualsNullParameterException = function() {
            return exceptionq != null;
        }
    }

    static success() {
        return new ExceptionController(null);
    }

    static exception(exception) {
        return new ExceptionController(exception);
    }
}