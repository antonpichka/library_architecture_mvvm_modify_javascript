import { ExceptionController } from "../utility/exception_controller.js";

export class BaseDataForNamed {
    constructor(isLoading) {
        this.isLoading = isLoading;
        this.exceptionController = ExceptionController(null);
    }

    getEnumDataForNamed() {
        throw new Error("This is method 'getEnumDataForNamed()' needs extends and must return type 'Enum'");
    }   
}