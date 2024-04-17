import { ExceptionController } from "./exception_controller";

export class Result {
    /// DO NOT CALL DIRECTLY, USE A STATIC METHOD
    constructor(parameter,exceptionController) {
        let exceptionControllerq = (exceptionController instanceof ExceptionController ? exceptionController : null)
        this.parameter = function() {
            return parameter;
        }
        this.exceptionController = function() {
            return exceptionControllerq;
        }
    }

    static success(parameter) {
        return new Result(parameter,new ExceptionController.success());
    }

    static exception(exception) {
        return new Result(null,new ExceptionController.exception(exception));
    }
}