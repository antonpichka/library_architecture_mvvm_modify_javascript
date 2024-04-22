import { BaseListModel } from "./base_list_model";

export class ListDoubles extends BaseListModel {
    constructor(listModel) {
        super(listModel);
    }

    get getClone() {
        const newListModel = new Array();
        for(const itemModel of this.listModel()) {
            newListModel.push(itemModel.getClone());
        }
        return new ListDoubles(newListModel);
    }

    toString() {
        let strListModel = "\n";
        for(const itemModel of this.listModel()) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListDoubles(listModel: [" + strListModel + "])";
    }
}