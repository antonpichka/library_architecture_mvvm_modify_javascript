import { LocalException } from "../utility/base_exception/local_exception";
import { EnumGuilty } from "../utility/base_exception/enum_guilty";

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
}