import { BaseListModel } from "./base_list_model";

export class ListDatesTimes extends BaseListModel {
    constructor(listModel) {
        super(listModel);
    }

    get getClone() {
        const newListModel = new Array();
        for(const itemModel of this.listModel()) {
            newListModel.push(itemModel.getClone());
        }
        return new ListDatesTimes(newListModel);
    }

    toString() {
        let strListModel = "\n";
        for(const itemModel of this.listModel()) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListDatesTimes(listModel: [" + strListModel + "])";
    }
}