import { BaseNamedStreamWState } from "./base_named_stream_w_state";
import { LocalException } from "../base_exception/local_exception";
import { BaseDataForNamed } from "../../base_data_for_named/base_data_for_named";
import { EnumGuilty } from "../base_exception/enum_guilty";

export class DefaultStreamWState extends BaseNamedStreamWState {
    constructor(dataForNamed) {
        let dataForNamedq = (dataForNamed instanceof BaseDataForNamed ? dataForNamed : null);
        let isDisposeq = false;
        let callbackq;
        this.dispose = function() {
            if(isDisposeq) {
                return;
            }
            isDisposeq = true;
            callbackq = null;
        }
        this.getDataForNamed = function() {
            return dataForNamedq;   
        }
        this.listenStreamDataForNamedFromCallback = function(callback) {
            if(isDisposeq) {
                throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQListenStreamDataForNamedFromCallback","Already disposed of");
            }
            if(callbackq != null) {
                throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQListenStreamDataForNamedFromCallback","Duplicate");
            }
            callbackq = callback;
        }
        this.notifyStreamDataForNamed = function() {
            if(isDisposeq) {
                throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQNotifyStreamDataForNamed","Already disposed of");
            }
            if(callbackq == null) {
                throw new LocalException("DefaultStreamWState",EnumGuilty.developer,"DefaultStreamWStateQQNotifyStreamDataForNamed","Stream has no listener");
            }
            callbackq(dataForNamedq);
        }
    }
}