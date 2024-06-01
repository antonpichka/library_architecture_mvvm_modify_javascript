import { ExceptionController } from "../exception_controller.js";
import { LocalException } from "../base_exception/local_exception.js";
import { EnumGuilty } from "../base_exception/enum_guilty.js";

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

    toString() {
        throw new LocalException("BaseDataForNamed",EnumGuilty.developer,"BaseDataForNamedQQToString","Needs extends and must return type 'string'");
    }
}