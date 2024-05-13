import { EnumGuilty } from "../base_exception/enum_guilty.js";
import { LocalException } from "../base_exception/local_exception.js";
import { EnumRWTMode } from "./enum_rwt_mode.js"

export class RWTMode {
    #enumRWTMode;
    #mapStringWNamedCallbackWRelease;
    #mapStringWNamedCallbackWTest;

    constructor(enumRWTMode,listNamedCallbackWRelease,listNamedCallbackWTest) {
        this.#enumRWTMode = enumRWTMode;
        this.#mapStringWNamedCallbackWRelease = RWTMode.#getMapStringWNamedCallbackFromListNamedCallback(listNamedCallbackWRelease);
        this.#mapStringWNamedCallbackWTest = RWTMode.#getMapStringWNamedCallbackFromListNamedCallback(listNamedCallbackWTest);
    }

    static #getMapStringWNamedCallbackFromListNamedCallback(listNamedCallback) {
        const mapStringWNamedCallback = new Map();
        for(const itemNamedCallback of listNamedCallback) {
            mapStringWNamedCallback.set(itemNamedCallback.name,itemNamedCallback);
        }
        return mapStringWNamedCallback;
    }

    getNamedCallbackFromName(name) {
        const mapStringWNamedCallbackWhereSelectModParametersThree = this.#getMapStringWNamedCallbackWhereSelectModParametersThree;
        if(!mapStringWNamedCallbackWhereSelectModParametersThree.has(name)) {
            throw new LocalException("RWTMode",EnumGuilty.developer,"RWTModeQQGetNamedCallbackFromName","no exists key: " + name);
        }
        return mapStringWNamedCallbackWhereSelectModParametersThree.get(name);
    }

    get #getMapStringWNamedCallbackWhereSelectModParametersThree() {
        if(this.#enumRWTMode == EnumRWTMode.release) {
            return this.#mapStringWNamedCallbackWRelease;
        }
        return this.#mapStringWNamedCallbackWTest;
    }
}