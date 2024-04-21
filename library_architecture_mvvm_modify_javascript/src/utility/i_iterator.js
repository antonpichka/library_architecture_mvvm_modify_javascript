import { LocalException } from "../utility/base_exception/local_exception";
import { EnumGuilty } from "../utility/base_exception/enum_guilty";

export class IIterator {
    get current() {
        throw new LocalException("IIterator",EnumGuilty.developer,"IIteratorQQCurrent","Needs extends and must return type 'Object'");
    }

    get moveNext() {
        throw new LocalException("IIterator",EnumGuilty.developer,"IIteratorQQMoveNext","Needs extends and must return type 'Boolean'");
    }
}