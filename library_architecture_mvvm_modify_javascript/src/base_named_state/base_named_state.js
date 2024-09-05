import { LocalException } from "../base_exception/local_exception.js";
import { EnumGuilty } from "../base_exception/enum_guilty.js";

export class BaseNamedState {
    constructor() {
        if (new.target === BaseNamedState) {
            throw new LocalException("BaseNamedState",EnumGuilty.developer,"BaseNamedStateQQConstructor","Cannot instantiate abstract class");
        }
    }

    get getDataForNamed() {
        throw new LocalException("BaseNamedState",EnumGuilty.developer,"BaseNamedStateQQGetDataForNamed","Needs extends and must return type 'BaseDataForNamed'");
    }
    
    dispose() {
        throw new LocalException("BaseNamedState",EnumGuilty.developer,"BaseNamedStateQQDispose","Needs extends");
    }
}