import { LocalException } from "../base_exception/local_exception.js";
import { EnumGuilty } from "../base_exception/enum_guilty.js";

export class BaseModel {
    #uniqueId;
    
    constructor(uniqueId) {
        if (new.target === BaseModel) {
            throw new LocalException("BaseModel",EnumGuilty.developer,"BaseModelQQConstructor","Cannot instantiate abstract class");
        }
        this.#uniqueId = uniqueId;
    }

    clone() {
        throw new LocalException("BaseModel",EnumGuilty.developer,"BaseModelQQClone","Needs extends and must return type 'BaseModel'");
    }

    toString() {
        throw new LocalException("BaseModel",EnumGuilty.developer,"BaseModelQQToString","Needs extends and must return type 'string'");
    }

    get uniqueId() {
        return this.#uniqueId;
    }
}