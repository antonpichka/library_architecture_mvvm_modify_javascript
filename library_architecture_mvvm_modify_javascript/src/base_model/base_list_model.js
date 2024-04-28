import { EnumGuilty } from "../utility/base_exception/enum_guilty.js";
import { LocalException } from "../utility/base_exception/local_exception.js";

export class BaseListModel {
    #listModel;

    constructor(listModel) {
        if (new.target === BaseListModel) {
            throw new LocalException("BaseListModel",EnumGuilty.developer,"BaseListModelQQConstructor","Cannot instantiate abstract class");
        }
        this.#listModel = listModel;
    }

    get getClone() {
        throw new LocalException("BaseListModel",EnumGuilty.developer,"BaseListModelQQGetClone","Needs extends and must return type 'BaseListModel'"); 
    }   

    get listModel() {
        return this.#listModel;
    }

    sortingFromModelWNamedWNamedWNamedIteratorParameterListModel(modelWNamedWNamedWNamedIterator) {
        const sortedListModelFromNewListModelParameterListModelIterator = modelWNamedWNamedWNamedIterator.getSortedListModelFromNewListModelParameterListModelIterator(this.listModel);
        this.listModel.length > 0 ? this.listModel.splice(0,this.listModel.length) : null; 
        sortedListModelFromNewListModelParameterListModelIterator.length > 0 ? this.listModel.push(...sortedListModelFromNewListModelParameterListModelIterator) : null;
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