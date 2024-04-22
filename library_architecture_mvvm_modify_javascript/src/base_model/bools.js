import { BaseModel } from "./base_model";

export class Bools extends BaseModel {
    #isField;

    constructor(isField) {
        super("" + isField + "");
        this.#isField = isField;
    }

    get getClone() {
        return new Bools(this.isField());
    }

    get isField() {
        return this.#isField;
    }

    toString() {
        return "Bools(isField: " + this.isField() + ")";
    }
}