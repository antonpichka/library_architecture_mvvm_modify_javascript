import { BaseNamedStreamWState } from "./base_named_stream_w_state";
import { LocalException } from "../base_exception/local_exception";
import { EnumGuilty } from "../base_exception/enum_guilty";

export class DefaultStreamWState extends BaseNamedStreamWState {
    #dataForNamed;
    #isDispose = false;
    #callback;

    constructor(dataForNamed) {
        super();
        this.#dataForNamed = dataForNamed;
    }
    
    dispose() {
        if(this.#isDispose) {
            return;
        }
        this.#isDispose = true;
        this.#callback = null;
    }

    get getDataForNamed() {
        return this.#dataForNamed;
    }

    listenStreamDataForNamedFromCallback(callback) {
        if(this.#isDispose) {
            throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQListenStreamDataForNamedFromCallback","Already disposed of");
        }
        if(this.#callback != null) {
            throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQListenStreamDataForNamedFromCallback","Duplicate");
        }
        this.#callback = callback;
    }

    notifyStreamDataForNamed() {
        if(this.#isDispose) {
            throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQNotifyStreamDataForNamed","Already disposed of");
        }
        if(this.#callback == null) {
            throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQNotifyStreamDataForNamed","Stream has no listener");
        }
        this.#callback(this.#dataForNamed);
    }
}