import { BaseNamedStreamWState } from "./base_named_stream_w_state.js";
import { LocalException } from "../base_exception/local_exception.js";
import { EnumGuilty } from "../base_exception/enum_guilty.js";

export class DefaultStreamWState extends BaseNamedStreamWState {
    #dataForNamed;
    #isDispose = false;
    #callback;

    constructor(dataForNamed) {
        super();
        this.#dataForNamed = dataForNamed;
    }
    
    get getDataForNamed() {
        return this.#dataForNamed;
    }
    
    dispose() {
        if(this.#isDispose) {
            return;
        }
        this.#isDispose = true;
        this.#callback = null;
    }

    listenStreamDataForNamedFromCallback(callback) {
        if(this.#isDispose) {
            throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQListenStreamDataWNamedWCallback","Already disposed of");
        }
        if(this.#callback != null) {
            throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQListenStreamDataWNamedWCallback","Duplicate");
        }
        this.#callback = callback;
    }

    notifyStreamDataForNamed() {
        if(this.#isDispose) {
            throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQNotifyStreamDataWNamed","Already disposed of");
        }
        if(this.#callback == null) {
            throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQNotifyStreamDataWNamed","Stream has no listener");
        }
        this.#callback(this.#dataForNamed);
    }
}