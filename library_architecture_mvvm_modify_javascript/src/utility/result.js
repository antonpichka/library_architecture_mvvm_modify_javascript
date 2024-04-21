import { ExceptionController } from "./exception_controller";

export class Result {
    #parameter;
    #exceptionController;

    /// DO NOT CALL DIRECTLY, USE A STATIC METHOD: "success","exception"
    constructor(parameter,exceptionController) {
        this.#parameter = parameter;
        this.#exceptionController = exceptionController;
    }

    static success(parameter) {
        return new Result(parameter,new ExceptionController.success());
    }

    static exception(exception) {
        return new Result(null,new ExceptionController.exception(exception));
    }

    get parameter() {
        return this.#parameter;
    }

    get exceptionController() {
        return this.#exceptionController;
    }
}