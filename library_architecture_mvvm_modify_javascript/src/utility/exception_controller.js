import { BaseException } from "../utility/base_exception/base_exception.js";

export class ExceptionController {
    constructor(exception) {
        let exceptionq = (exception instanceof BaseException ? exception : null);
        this.getKeyParameterException = function() {
            return exceptionq.key;
        }
        this.IsWhereNotEqualsNullParameterException = function() {
            return exceptionq != null;
        }
    }
}