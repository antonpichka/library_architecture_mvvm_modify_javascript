import { ExceptionController } from "../utility/exception_controller";
import { LocalException } from "../utility/base_exception/local_exception";
import { EnumGuilty } from "../utility/base_exception/enum_guilty";

export class BaseDataForNamed {
    constructor(isLoading) {
        this.isLoading = (isLoading instanceof Boolean ? isLoading : null);
        let exceptionControllerq = new ExceptionController.success();
        this.exceptionController = exceptionControllerq instanceof ExceptionController ? exceptionControllerq : null;
    }

    getEnumDataForNamed() {
        throw new LocalException("BaseDataForNamed",EnumGuilty.developer,"BaseDataForNamedQQGetEnumDataForNamed","Needs extends and must return type 'Enum'");
    }   
}