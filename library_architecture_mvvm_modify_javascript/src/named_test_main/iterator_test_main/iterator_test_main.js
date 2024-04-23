import { BaseModel } from "../../base_model/base_model.js";
import { BaseListModel } from "../../base_model/base_list_model.js";
import { BaseModelWNamedWNamedWNamedIterator } from "../../base_model/base_model_w_named_w_named_w_named_iterator/base_model_w_named_w_named_w_named_iterator.js";

export class UserBalance extends BaseModel {
    #username;
    #money;

    constructor(username,money) {
        super(username);
        this.#username = username;
        this.#money = money;
    }

    get getClone() {
        return new UserBalance(this.username,this.money);
    }

    get username() {
        return this.#username;
    }

    get money() {
        return this.#money;
    }

    toString() {
        return "UserBalance(username: " + this.username + ", " 
            + "money: " + this.money + ")";
    }
}

export class ListUserBalance extends BaseListModel {
    constructor(listModel) {
        super(listModel);
    }

    get getClone() {
        const newListModel = new Array();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone);
        }
        return new ListUserBalance(newListModel);
    }

    toString() {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListUserBalance(listModel: [" + strListModel + "])";
    }
}

export class UserBalanceWOrderByDescWMoneyIterator extends BaseModelWNamedWNamedWNamedIterator {
    get _current() {
        let getClone = this._listModelIterator[0].getClone;
        if(this._listModelIterator.length <= 1) {
            this._listModelIterator.splice(0,1);
            return getClone;
        }
        let indexRemove = 0;
        for(let i = 1; i < this._listModelIterator.length; i++) {
            let itemModelIterator = this._listModelIterator[i];
            if(itemModelIterator.money > getClone.money) {
                getClone = itemModelIterator.getClone;
                indexRemove = i;
                continue;
            }
        }
        this._listModelIterator.splice(indexRemove,1);
        return getClone;
    }
}