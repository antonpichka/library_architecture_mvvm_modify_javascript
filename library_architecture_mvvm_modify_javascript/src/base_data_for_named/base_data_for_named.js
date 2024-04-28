import { ExceptionController } from "../utility/exception_controller.js";
import { LocalException } from "../utility/base_exception/local_exception.js";
import { EnumGuilty } from "../utility/base_exception/enum_guilty.js";

export class BaseDataForNamed {
    isLoading;
    exceptionController;

    constructor(isLoading) {
        if (new.target === BaseDataForNamed) {
            throw new LocalException("BaseDataForNamed",EnumGuilty.developer,"BaseDataForNamedQQConstructor","Cannot instantiate abstract class");
        }
        this.isLoading = isLoading;
        this.exceptionController = ExceptionController.success();
    }

    get getEnumDataForNamed() {
        throw new LocalException("BaseDataForNamed",EnumGuilty.developer,"BaseDataForNamedQQGetEnumDataForNamed","Needs extends and must return type 'Enum'");
    }
}