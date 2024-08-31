import { LocalException } from "../base_exception/local_exception.js";
import { EnumGuilty } from "../base_exception/enum_guilty.js";

export class BaseModelTTNamedTTNamedTTNamedTTIterator {
    #listModelIterator;

    constructor() {
        if (new.target === BaseModelTTNamedTTNamedTTNamedTTIterator) {
            throw new LocalException("BaseModelTTNamedTTNamedTTNamedTTIterator",EnumGuilty.developer,"BaseModelTTNamedTTNamedTTNamedTTIteratorQQConstructor","Cannot instantiate abstract class");
        }
        this.#listModelIterator = new Array();
    }

    get _currentModelWIndex() {
        throw new LocalException("BaseModelTTNamedTTNamedTTNamedTTIterator",EnumGuilty.developer,"BaseModelTTNamedTTNamedTTNamedTTIteratorQQCurrentModelWIndex","Needs extends and must return type 'CurrentModelWIndex'");
    }

    getSortedListModelFromListModelParameterListModelIterator(listModel) {
        if(listModel.length <= 0) {
            return new Array();
        }
        this._listModelIterator.push(...listModel);
        const newListModel = new Array();
        while(this._listModelIterator.length > 0) {
            const currentModelWIndex = this._currentModelWIndex;
            this._listModelIterator.splice(currentModelWIndex.index,1);
            newListModel.push(currentModelWIndex.currentModel);
        }
        return newListModel;
    }

    get _listModelIterator() {
        return this.#listModelIterator;
    }
}