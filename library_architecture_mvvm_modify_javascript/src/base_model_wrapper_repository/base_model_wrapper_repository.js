import { LocalException } from "../base_exception/local_exception.js";
import { EnumGuilty } from "../base_exception/enum_guilty.js";

export class BaseModelWrapperRepository {
    constructor() {
        if (new.target === BaseModelWrapperRepository) {
            throw new LocalException("BaseModelWrapperRepository",EnumGuilty.developer,"BaseModelWrapperRepositoryQQConstructor","Cannot instantiate abstract class");
        }
    }

    dispose() {
        throw new LocalException("BaseModelWrapperRepository",EnumGuilty.developer,"BaseModelWrapperRepositoryQQDispose","Needs extends");
    }

    _getSafeValueFromMapAndKeyAndDefaultValue(map,key,defaultValue) {
        try {
            return map.has(key) ? map.get(key) : defaultValue;
        } catch(e) {
            return defaultValue;
        }
    }
}