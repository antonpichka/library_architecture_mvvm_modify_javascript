import { ExceptionController } from "../utility/exception_controller";
import { LocalException } from "../utility/base_exception/local_exception";
import { EnumGuilty } from "../utility/base_exception/enum_guilty";

export class BaseDataForNamed {
    isLoading;
    exceptionController;

    constructor(isLoading) {
        if (new.target === BaseDataForNamed) {
            throw new LocalException("BaseDataForNamed",EnumGuilty.developer,"BaseDataForNamedQQConstructor","Cannot instantiate abstract class");
        }
        this.isLoading = isLoading;
        this.exceptionController = new ExceptionController.success();
    }

    get getEnumDataForNamed() {
        throw new LocalException("BaseDataForNamed",EnumGuilty.developer,"BaseDataForNamedQQGetEnumDataForNamed","Needs extends and must return type 'Enum'");
    }
}