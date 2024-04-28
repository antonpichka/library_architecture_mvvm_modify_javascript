import { BaseModel } from "./base_model.js";

export class Ints extends BaseModel {
    #field;

    constructor(field) {
        super("" + field + "");
        this.#field = field;
    }

    get getClone() {
        return new Ints(this.field);
    }

    toString() {
        return "Ints(field: " + this.field + ")";
    }

    get field() {
        return this.#field;
    }
}