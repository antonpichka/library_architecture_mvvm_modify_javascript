import { BaseModel } from "../../base_model/base_model.js";
import { BaseListModel } from "../../base_model/base_list_model.js";
import { BaseModelWNamedWNamedWNamedIterator } from "../../base_model/base_model_w_named_w_named_w_named_iterator/base_model_w_named_w_named_w_named_iterator.js";

class UserBalance extends BaseModel {
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

    toString() {
        return "UserBalance(username: " + this.username + ", " 
            + "money: " + this.money + ")";
    }

    get username() {
        return this.#username;
    }

    get money() {
        return this.#money;
    }
}

class ListUserBalance extends BaseListModel {
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

class UserBalanceWOrderByDescWMoneyIterator extends BaseModelWNamedWNamedWNamedIterator {
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

function main() {
    const listUserBalance = new ListUserBalance(new Array());
    listUserBalance.insertListFromNewListModelParameterListModel([
        new UserBalance("Jone",3),
        new UserBalance("Freddy",1),
        new UserBalance("Mitsuya",10),
        new UserBalance("Duramichi",5),
        new UserBalance("Hook",7),
        new UserBalance("Sexy",-1)
    ]);
    document.getElementById("txt").innerText += "\nBefore: " + listUserBalance.toString();
    const userBalanceWOrderByDescWMoneyIterator = new UserBalanceWOrderByDescWMoneyIterator();
    listUserBalance.sortingFromModelWNamedWNamedWNamedIteratorParameterListModel(userBalanceWOrderByDescWMoneyIterator);
    document.getElementById("txt").innerText += "\nAfter: " + listUserBalance.toString();
    listUserBalance.updateFromNewModelParameterListModel(new UserBalance("Duramichi", 15));
    listUserBalance.sortingFromModelWNamedWNamedWNamedIteratorParameterListModel(userBalanceWOrderByDescWMoneyIterator);
    document.getElementById("txt").innerText += "\nAfter (Two): " + listUserBalance.toString();
}
main();
// EXPECTED OUTPUT:
//
// Before: ListUserBalance(listModel: [
// UserBalance(username: Jone, money: 3),
// UserBalance(username: Freddy, money: 1),
// UserBalance(username: Mitsuya, money: 10),
// UserBalance(username: Duramichi, money: 5),
// UserBalance(username: Hook, money: 7),
// UserBalance(username: Sexy, money: -1),
// ])
// After: ListUserBalance(listModel: [
// UserBalance(username: Mitsuya, money: 10),
// UserBalance(username: Hook, money: 7),
// UserBalance(username: Duramichi, money: 5),
// UserBalance(username: Jone, money: 3),
// UserBalance(username: Freddy, money: 1),
// UserBalance(username: Sexy, money: -1),
// ])
// After (Two): ListUserBalance(listModel: [
// UserBalance(username: Duramichi, money: 15),
// UserBalance(username: Mitsuya, money: 10),
// UserBalance(username: Hook, money: 7),
// UserBalance(username: Jone, money: 3),
// UserBalance(username: Freddy, money: 1),
// UserBalance(username: Sexy, money: -1),
// ])