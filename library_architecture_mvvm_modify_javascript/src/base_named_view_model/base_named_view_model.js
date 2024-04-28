import { EnumGuilty } from "../utility/base_exception/enum_guilty.js";
import { LocalException } from "../utility/base_exception/local_exception.js";

// OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
// NamedUtility

export class BaseNamedViewModel {
    #namedStreamWState;

    constructor(namedStreamWState) {
        if (new.target === BaseNamedViewModel) {
            throw new LocalException("BaseNamedViewModel",EnumGuilty.developer,"BaseNamedViewModelQQConstructor","Cannot instantiate abstract class");
        }
        this.#namedStreamWState = namedStreamWState;
    }

    init() {
        throw new LocalException("BaseNamedViewModel",EnumGuilty.developer,"BaseNamedViewModelQQInit","Needs extends and must return type 'String'");
    }

    dispose() {
        this._namedStreamWState.dispose();
    }

    get getDataForNamedParameterNamedStreamWState() {
        return this._namedStreamWState.getDataForNamed;       
    }

    get _namedStreamWState() {
        return this.#namedStreamWState;
    }

    listenStreamDataForNamedFromCallbackParameterNamedStreamWState(callback) {
        this._namedStreamWState.listenStreamDataForNamedFromCallback(callback);
    }

    notifyStreamDataForNamedParameterNamedStreamWState() {
        this._namedStreamWState.notifyStreamDataForNamed();
    }
}