import { LocalException } from "../utility/base_exception/local_exception.js";
import { EnumGuilty } from "../utility/base_exception/enum_guilty.js";

export class IDispose {
    dispose() {
        throw new LocalException("IDispose",EnumGuilty.developer,"IDisposeQQDispose","Needs extends");
    }
}