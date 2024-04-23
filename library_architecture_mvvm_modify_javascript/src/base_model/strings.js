import { BaseModel } from "./base_model.js";

export class Strings extends BaseModel {
    #field;

    constructor(field) {
        super("" + field + "");
        this.#field = field;
    }

    get getClone() {
        return new Strings(this.field);
    }

    get field() {
        return this.#field;
    }

    toString() {
        return "Strings(field: " + this.field + ")";
    }
}