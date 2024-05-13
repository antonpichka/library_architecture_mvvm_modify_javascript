import { LocalException } from "./base_exception/local_exception.js";
import { EnumGuilty } from "./base_exception/enum_guilty.js";

export class IIterator {
    get current() {
        throw new LocalException("IIterator",EnumGuilty.developer,"IIteratorQQCurrent","Needs extends and must return type 'Object'");
    }

    moveNext() {
        throw new LocalException("IIterator",EnumGuilty.developer,"IIteratorQQMoveNext","Needs extends and must return type 'Boolean'");
    }
}