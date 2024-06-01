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

    get getClone() {
        throw new LocalException("BaseModel",EnumGuilty.developer,"BaseModelQQGetClone","Needs extends and must return type 'BaseModel'");
    }

    get uniqueId() {
        return this.#uniqueId;
    }

    toString() {
        throw new LocalException("BaseModel",EnumGuilty.developer,"BaseModelQQToString","Needs extends and must return type 'string'");
    }
}