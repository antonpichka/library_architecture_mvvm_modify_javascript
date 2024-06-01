import { LocalException } from "../../base_exception/local_exception.js";
import { EnumGuilty } from "../../base_exception/enum_guilty.js";

export class BaseModelWNamedWNamedWNamedIterator {
    #listModelIterator;

    constructor() {
        if (new.target === BaseModelWNamedWNamedWNamedIterator) {
            throw new LocalException("BaseModelWNamedWNamedWNamedIterator",EnumGuilty.developer,"BaseModelWNamedWNamedWNamedIteratorQQConstructor","Cannot instantiate abstract class");
        }
        this.#listModelIterator = new Array();
    }

    get _currentModelWIndex() {
        throw new LocalException("BaseModelWNamedWNamedWNamedIterator",EnumGuilty.developer,"BaseModelWNamedWNamedWNamedIteratorQQCurrentModelWIndex","Needs extends and must return type 'CurrentModelWIndex'");
    } 

    getSortedListModelFromNewListModelParameterListModelIterator(newListModel) {
        if(newListModel.length <= 0) {
            return new Array();
        }
        this._listModelIterator.push(...newListModel);
        const newListModelFIRST = new Array();
        while(this._listModelIterator.length > 0) {
            const currentModelWIndex = this._currentModelWIndex;
            this._listModelIterator.splice(currentModelWIndex.index,1);
            newListModelFIRST.push(currentModelWIndex.currentModel);
        }
        return newListModelFIRST;
    }

    get _listModelIterator() {
        return this.#listModelIterator;
    }
}