export class ExceptionController {
    #exception;

    /// DO NOT CALL DIRECTLY, USE A STATIC METHOD: "success","exception"
    constructor(exception) {
        this.#exception = exception;
    }

    static success() {
        return new ExceptionController(null);
    }

    static exception(exception) {
        return new ExceptionController(exception);
    }

    get getKeyParameterException() {
        return this.#exception.key;
    }

    isWhereNotEqualsNullParameterException() {
        return this.#exception != null;
    }

    toString() {
        if(this.#exception == null) {
            return "ExceptionController(exception: null)";
        }
        return "ExceptionController(exception: " + this.#exception + ")";
    }
}