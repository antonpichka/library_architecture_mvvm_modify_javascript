import { BaseNamedState } from "./base_named_state.js";

export class DefaultState extends BaseNamedState {
    #dataForNamed;
    #isDispose = false;

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
    }
}