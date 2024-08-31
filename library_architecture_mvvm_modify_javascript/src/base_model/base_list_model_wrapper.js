import { EnumGuilty } from "../base_exception/enum_guilty.js";
import { LocalException } from "../base_exception/local_exception.js";

export class BaseListModelWrapper {
    #listsListObject;

    constructor(listsListObject) {
        if(new.target === BaseListModelWrapper) {
            throw new LocalException("BaseListModelWrapper",EnumGuilty.developer,"BaseListModelWrapperQQConstructor","Cannot instantiate abstract class");
        }
        this.#listsListObject = listsListObject;
    }

    createListModel() {
        throw new LocalException("BaseListModelWrapper",EnumGuilty.developer,"BaseListModelWrapperQQCreateListModel","Needs extends and must return type 'BaseListModel'");
    }

    get _listsListObject() {
        return this.#listsListObject;
    }
}