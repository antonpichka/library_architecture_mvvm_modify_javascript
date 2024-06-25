import { LocalException } from "../base_exception/local_exception.js";
import { EnumGuilty } from "../base_exception/enum_guilty.js";
import { EnumRWTMode } from "../enum_rwt_mode.js";

export class BaseModelRepository {
    #enumRWTMode;

    constructor(enumRWTMode) {
        if (new.target === BaseModelRepository) {
            throw new LocalException("BaseModelRepository",EnumGuilty.developer,"BaseModelRepositoryQQConstructor","Cannot instantiate abstract class");
        }
        this.#enumRWTMode = enumRWTMode;
    }

    _getBaseModelFromMapAndListKeys(map,listKeys) {
        throw new LocalException("BaseModelRepository",EnumGuilty.developer,"BaseModelRepositoryQQGetBaseModelFromMapAndListKeys","Needs extends and must return type 'BaseModel'");
    }

    _getBaseListModelFromListModel(listModel) {
        throw new LocalException("BaseModelRepository",EnumGuilty.developer,"BaseModelRepositoryQQGetBaseListModelFromListModel","Needs extends and must return type 'BaseListModel'");
    }

    _getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(releaseCallback,testCallback) {
        switch(this.#enumRWTMode) {
            case EnumRWTMode.release:
                return releaseCallback;
            case EnumRWTMode.test:
                return testCallback;
        }
    }
}