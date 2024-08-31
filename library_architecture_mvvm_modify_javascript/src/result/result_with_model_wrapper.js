import { ExceptionController } from "../exception_controller.js";

export class ResultWithModelWrapper {
    #modelWrapper;
    #exceptionController;

    /// DO NOT CALL DIRECTLY, USE A STATIC METHOD: "success","exception"
    constructor(modelWrapper,exceptionController) {
        this.#modelWrapper = modelWrapper;
        this.#exceptionController = exceptionController;
    }

    static success(modelWrapper) {
        return new ResultWithModelWrapper(modelWrapper,ExceptionController.success());
    }

    static exception(exception) {
        return new ResultWithModelWrapper(null,ExceptionController.exception(exception));
    }

    get modelWrapper() {
        return this.#modelWrapper;
    }

    get exceptionController() {
        return this.#exceptionController;
    }
}