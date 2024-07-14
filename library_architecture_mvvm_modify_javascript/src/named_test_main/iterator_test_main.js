const { BaseModel, BaseListModel, BaseModelWNamedWNamedWNamedIterator, debugPrint, CurrentModelWIndex } =  require("library_architecture_mvvm_modify_javascript");

class UserBalance extends BaseModel {
    #username;
    #money;

    constructor(username, money) {
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
            strListModel += itemModel + ",\n";
        }
        return "ListUserBalance(listModel: [" + strListModel + "])";
    }
}

class UserBalanceWOrderByDescWMoneyIterator extends BaseModelWNamedWNamedWNamedIterator {
    constructor() {
        super();
    }

    get currentModelWIndex() {
        let clone = this.listModelIterator[0].getClone;
        if(this.listModelIterator.length <= 1) {
            return new CurrentModelWIndex(clone,0)
        }
        let indexRemove = 0;
        for(let i = 1; i < this.listModelIterator.length; i++) {
            const itemModelIterator = this.listModelIterator[i];
            if(itemModelIterator.money > clone.money) {
                clone = itemModelIterator.getClone;
                indexRemove = i;
                continue;
            }
        }
        return new CurrentModelWIndex(clone,indexRemove)
    }
}
const listUserBalance = new ListUserBalance(new Array());
listUserBalance.insertListFromNewListModelParameterListModel([
    new UserBalance("Jone",3),
    new UserBalance("Freddy",1),
    new UserBalance("Mitsuya",10),
    new UserBalance("Duramichi",5),
    new UserBalance("Hook",7),
    new UserBalance("Sexy",-1)
]);
debugPrint("Before: " + listUserBalance); // 3, 1, 10, 5, 7, -1
const userBalanceWOrderByDescWMoneyIterator = new UserBalanceWOrderByDescWMoneyIterator();
listUserBalance.sortingFromModelWNamedWNamedWNamedIteratorParameterListModel(userBalanceWOrderByDescWMoneyIterator);
debugPrint("After: " + listUserBalance); // 10, 7, 5, 3, 1, -1
listUserBalance.updateFromNewModelParameterListModel(new UserBalance("Duramichi", 15));
listUserBalance.sortingFromModelWNamedWNamedWNamedIteratorParameterListModel(userBalanceWOrderByDescWMoneyIterator);
debugPrint("After(Two): " + listUserBalance); // 15, 10, 7, 3, 1, -1
listUserBalance.deleteFromUniqueIdByModelParameterListModel("Mitsuya")
listUserBalance.sortingFromModelWNamedWNamedWNamedIteratorParameterListModel(userBalanceWOrderByDescWMoneyIterator);
debugPrint("After(Three): " + listUserBalance); // 15, 7, 3, 1, -1
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
// After(Two): ListUserBalance(listModel: [
// UserBalance(username: Duramichi, money: 15),
// UserBalance(username: Mitsuya, money: 10),
// UserBalance(username: Hook, money: 7),
// UserBalance(username: Jone, money: 3),
// UserBalance(username: Freddy, money: 1),
// UserBalance(username: Sexy, money: -1),
// ])
// After(Three): ListUserBalance(listModel: [
// UserBalance(username: Duramichi, money: 15),
// UserBalance(username: Hook, money: 7),
// UserBalance(username: Jone, money: 3),
// UserBalance(username: Freddy, money: 1),
// UserBalance(username: Sexy, money: -1),
// ])