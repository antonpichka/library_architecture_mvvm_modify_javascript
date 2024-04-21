import { LocalException } from "../base_exception/local_exception";
import { EnumGuilty } from "../base_exception/enum_guilty";

export class BaseNamedStreamWState {
    dispose() {
        throw new LocalException("BaseNamedStreamWState",EnumGuilty.developer,"BaseNamedStreamWStateQQDispose","Needs extends");
    }

    get getDataForNamed() {
        throw new LocalException("BaseNamedStreamWState",EnumGuilty.developer,"BaseNamedStreamWStateQQGetDataForNamed","Needs extends and must return type 'BaseDataForNamed'");
    }

    listenStreamDataForNamedFromCallback(callback) {
        throw new LocalException("BaseNamedStreamWState",EnumGuilty.developer,"BaseNamedStreamWStateQQListenStreamDataForNamedFromCallback","Needs extends"); 
    }

    notifyStreamDataForNamed() {
        throw new LocalException("BaseNamedStreamWState",EnumGuilty.developer,"BaseNamedStreamWStateQQNotifyStreamDataForNamed","Needs extends"); 
    }
}