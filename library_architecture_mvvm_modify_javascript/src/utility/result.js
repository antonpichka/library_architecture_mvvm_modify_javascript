import { ExceptionController } from "./exception_controller.js";

export class Result {
    #parameter;
    #exceptionController;

    /// DO NOT CALL DIRECTLY, USE A STATIC METHOD: "success","exception"
    constructor(parameter,exceptionController) {
        this.#parameter = parameter;
        this.#exceptionController = exceptionController;
    }

    static success(parameter) {
        return new Result(parameter,ExceptionController.success());
    }

    static exception(exception) {
        return new Result(null,ExceptionController.exception(exception));
    }

    get parameter() {
        return this.#parameter;
    }

    get exceptionController() {
        return this.#exceptionController;
    }
}