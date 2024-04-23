import { EnumGuilty } from "../utility/base_exception/enum_guilty.js";
import { LocalException } from "../utility/base_exception/local_exception.js";

// OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
// NamedUtility

export class BaseNamedViewModelCutDown {
    #namedState;

    constructor(namedState) {
        if (new.target === BaseNamedViewModelCutDown) {
            throw new LocalException("BaseNamedViewModelCutDown",EnumGuilty.developer,"BaseNamedViewModelCutDownQQConstructor","Cannot instantiate abstract class");
        }
        this.#namedState = namedState;
    }

    init() {
        throw new LocalException("BaseNamedViewModelCutDown",EnumGuilty.developer,"BaseNamedViewModelCutDownQQInit","Needs extends and must return type 'String'");
    }

    dispose() {
        this._namedState.dispose();
    }

    get _namedState() {
        return this.#namedState;
    }

    get getDataForNamedParameterNamedState() {
        return this._namedState.getDataForNamed();
    }
}