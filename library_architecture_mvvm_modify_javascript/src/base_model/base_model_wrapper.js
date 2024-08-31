import { EnumGuilty } from "../base_exception/enum_guilty.js";
import { LocalException } from "../base_exception/local_exception.js";

export class BaseModelWrapper {
    #listObject;

    constructor(listObject) {
        if(new.target === BaseModelWrapper) {
            throw new LocalException("BaseModelWrapper",EnumGuilty.developer,"BaseModelWrapperQQConstructor","Cannot instantiate abstract class");
        }
        this.#listObject = listObject;
    }

    createModel() {
        throw new LocalException("BaseModelWrapper",EnumGuilty.developer,"BaseModelWrapperQQCreateModel","Needs extends and must return type 'BaseModel'");
    }

    get _listObject() {
        return this.#listObject;
    }
}