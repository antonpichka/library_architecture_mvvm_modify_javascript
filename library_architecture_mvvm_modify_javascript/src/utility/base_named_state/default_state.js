import { BaseNamedState } from "./base_named_state";
import { BaseDataForNamed } from "../../base_data_for_named/base_data_for_named";

export class DefaultState extends BaseNamedState {
    constructor(dataForNamed) {
        let dataForNamedq = (dataForNamed instanceof BaseDataForNamed ? dataForNamed : null);
        let isDisposeq = false;
        this.dispose = function() {
            if(isDisposeq) {
                return;
            }
            isDisposeq = true;
        }
        this.getDataForNamed = function() {
            return dataForNamedq;   
        }
    }
}