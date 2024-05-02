import { LocalException } from "../../utility/base_exception/local_exception.js";
import { EnumGuilty } from "../../utility/base_exception/enum_guilty.js";

export class BaseModelWNamedWNamedWNamedIterator {
    #listModelIterator;

    constructor() {
        if (new.target === BaseModelWNamedWNamedWNamedIterator) {
            throw new LocalException("BaseModelWNamedWNamedWNamedIterator",EnumGuilty.developer,"BaseModelWNamedWNamedWNamedIteratorQQConstructor","Cannot instantiate abstract class");
        }
        this.#listModelIterator = new Array();
    }

    get current() {
        throw new LocalException("BaseModelWNamedWNamedWNamedIterator",EnumGuilty.developer,"BaseModelWNamedWNamedWNamedIteratorQQCurrent","Needs extends and must return type 'BaseModel'");
    } 

    getSortedListModelFromNewListModelParameterListModelIterator(newListModel) {
        if(newListModel.length <= 0) {
            return new Array();
        }
        this._listModelIterator.push(...newListModel);
        const newListModelFIRST = new Array();
        while(this.moveNext()) {
            const newModel = this.current;
            newListModelFIRST.push(newModel);
        }
        return newListModelFIRST;
    }

    get _listModelIterator() {
        return this.#listModelIterator;
    }

    moveNext() {
        return this._listModelIterator.length > 0;
    }
}