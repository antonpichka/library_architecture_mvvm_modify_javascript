import { ExceptionController } from "../exception_controller.js";

export class ResultWithListModelsWrapper {
    #listModelWrapper;
    #exceptionController;

    /// DO NOT CALL DIRECTLY, USE A STATIC METHOD: "success","exception"
    constructor(listModelWrapper,exceptionController) {
        this.#listModelWrapper = listModelWrapper;
        this.#exceptionController = exceptionController;
    }

    static success(listModelWrapper) {
        return new ResultWithListModelsWrapper(listModelWrapper,ExceptionController.success());
    }

    static exception(exception) {
        return new ResultWithListModelsWrapper(null,ExceptionController.exception(exception));
    }

    get listModelWrapper() {
        return this.#listModelWrapper;
    }

    get exceptionController() {
        return this.#exceptionController;
    }
}