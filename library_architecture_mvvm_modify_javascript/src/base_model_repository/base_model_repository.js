import { LocalException } from "../base_exception/local_exception.js";
import { EnumGuilty } from "../base_exception/enum_guilty.js";
import { EnumRWTMode } from "../enum_rwt_mode.js";

export class BaseModelRepository {
    static enumRWTMode = EnumRWTMode.test;

    constructor() {
        if (new.target === BaseModelRepository) {
            throw new LocalException("BaseModelRepository",EnumGuilty.developer,"BaseModelRepositoryQQConstructor","Cannot instantiate abstract class");
        }
    }

    _getBaseModelFromMapAndListKeys(map,listKeys) {
        throw new LocalException("BaseModelRepository",EnumGuilty.developer,"BaseModelRepositoryQQGetBaseModelFromMapAndListKeys","Needs extends and must return type 'BaseModel'");
    }

    _getBaseListModelFromListModel(listModel) {
        throw new LocalException("BaseModelRepository",EnumGuilty.developer,"BaseModelRepositoryQQGetBaseListModelFromListModel","Needs extends and must return type 'BaseListModel'");
    }

    _getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(releaseCallback,testCallback) {
        switch(BaseModelRepository.enumRWTMode) {
            case EnumRWTMode.release:
                return releaseCallback;
            case EnumRWTMode.test:
                return testCallback;
        }
    }

    _getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(map,listKeys,index,defaultValue) {
        try {
            return map.has(listKeys[index]) ? map.get(listKeys[index]) : defaultValue;
        } catch(e) {
            return defaultValue;
        }
    }
}