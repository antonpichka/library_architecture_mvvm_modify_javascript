import { EnumGuilty } from "../base_exception/enum_guilty.js";
import { LocalException } from "../base_exception/local_exception.js";

export class BaseListModel {
    #listModel;

    constructor(listModel) {
        if (new.target === BaseListModel) {
            throw new LocalException("BaseListModel",EnumGuilty.developer,"BaseListModelQQConstructor","Cannot instantiate abstract class");
        }
        this.#listModel = listModel;
    }

    clone() {
        throw new LocalException("BaseListModel",EnumGuilty.developer,"BaseListModelQQClone","Needs extends and must return type 'BaseListModel'"); 
    }

    toString() {
        throw new LocalException("BaseListModel",EnumGuilty.developer,"BaseListModelQQToString","Needs extends and must return type 'string'");
    }

    get listModel() {
        return this.#listModel;
    }

    sortingFromModelTTNamedTTNamedTTNamedTTIteratorParameterListModel(modelTTNamedTTNamedTTNamedTTIterator) {
        const sortedListModelFromListModelParameterListModelIterator = modelTTNamedTTNamedTTNamedTTIterator.getSortedListModelFromListModelParameterListModelIterator(this.listModel);
        this.listModel.length > 0 ? this.listModel.splice(0,this.listModel.length) : null; 
        sortedListModelFromListModelParameterListModelIterator.length > 0 ? this.listModel.push(...sortedListModelFromListModelParameterListModelIterator) : null;
    }

    insertFromNewModelParameterListModel(newModel) {
        this.listModel.push(newModel);
    }

    updateFromNewModelParameterListModel(newModel) {
        const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == newModel.uniqueId);
        this.listModel.splice(findIndex,1,newModel);
    }

    deleteFromUniqueIdByModelParameterListModel(uniqueIdByModel) {
        const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == uniqueIdByModel);
        this.listModel.splice(findIndex,1);
    }

    insertListFromNewListModelParameterListModel(newListModel) {
        this.listModel.push(...newListModel);
    }

    updateListFromNewListModelParameterListModel(newListModel) {
        for(const newItemModel of newListModel) {
            const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == newItemModel.uniqueId);
            this.listModel.splice(findIndex,1,newItemModel);
        }
    }

    deleteListFromListUniqueIdByModelParameterListModel(listUniqueIdByModel) {
        for(const itemUniqueIdByModel of listUniqueIdByModel) {
            const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == itemUniqueIdByModel);
            this.listModel.splice(findIndex,1);
        }
    }
}