import { BaseModel } from "./base_model.js";

export class Doubles extends BaseModel {
    #field;

    constructor(field) {
        super("" + field + "");
        this.#field = field;
    }

    get getClone() {
        return new Doubles(this.field);
    }

    toString() {
        return "Doubles(field: " + this.field + ")";
    }

    get field() {
        return this.#field;
    }
}