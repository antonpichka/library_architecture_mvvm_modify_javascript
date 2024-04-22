import { LocalException } from "../base_exception/local_exception";
import { EnumGuilty } from "../base_exception/enum_guilty";

export class BaseNamedState {
    constructor() {
        if (new.target === BaseNamedState) {
            throw new LocalException("BaseNamedState",EnumGuilty.developer,"BaseNamedStateQQConstructor","Cannot instantiate abstract class");
        }
    }

    dispose() {
        throw new LocalException("BaseNamedState",EnumGuilty.developer,"BaseNamedStateQQDispose","Needs extends");
    }

    get getDataForNamed() {
        throw new LocalException("BaseNamedState",EnumGuilty.developer,"BaseNamedStateQQGetDataForNamed","Needs extends and must return type 'BaseDataForNamed'");
    }
}