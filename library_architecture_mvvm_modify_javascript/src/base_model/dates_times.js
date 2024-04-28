import { BaseModel } from "./base_model.js";

export class DatesTimes extends BaseModel {
    #dateTime;

    constructor(dateTime) {
        super(dateTime.toString());
        this.#dateTime = dateTime;
    }

    get getClone() {
        return new DatesTimes(this.dateTime);
    }

    toString() {
        return "DatesTimes(dateTime: " + this.dateTime.toString() + ")";
    }

    get dateTime() {
        return this.#dateTime;
    }
}