import { LocalException, EnumGuilty, BaseModel, BaseListModel, Result, NetworkException, BaseDataForNamed, DefaultStreamWState, debugPrint, RWTMode, EnumRWTMode, NamedCallback } from "library_architecture_mvvm_modify_javascript";

class KeysHttpServiceUtility {
    /* IPAddress */
    static #iPAddressQQIp = "ip";

    constructor() {
        if (new.target === KeysHttpServiceUtility) {
            throw new LocalException("KeysHttpServiceUtility",EnumGuilty.developer,"KeysHttpServiceUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get iPAddressQQIp() {
        return this.#iPAddressQQIp;
    }
}

class KeysExceptionUtility {
    /* UNKNOWN */
    static #uNKNOWN = "uNKNOWN";

    constructor() {
        if (new.target === KeysExceptionUtility) {
            throw new LocalException("KeysExceptionUtility",EnumGuilty.developer,"KeysExceptionUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get uNKNOWN() {
        return this.#uNKNOWN;
    }
}

class KeysSuccessUtility {
    /* SUCCESS */
    static #sUCCESS = "sUCCESS";

    constructor() {
        if (new.target === KeysSuccessUtility) {
            throw new LocalException("KeysSuccessUtility",EnumGuilty.developer,"KeysSuccessUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get sUCCESS() {
        return this.#sUCCESS;
    }
}

class IPAddress extends BaseModel {
    #ip;

    constructor(ip) {
        super("" + ip + "");
        this.#ip = ip;
    }

    get getClone() {
        return new IPAddress(this.ip);
    }

    toString() {
        return "IPAddress(ip: " + this.ip + ")";
    }

    get ip() {
        return this.#ip;
    }
}

class ListIPAddress extends BaseListModel {
    constructor(listModel) {
        super(listModel);
    }

    get getClone() {
        const newListModel = new Array();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone);
        }
        return new ListIPAddress(newListModel);
    }

    toString() {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListIPAddress(listModel: [" + strListModel + "])";
    }
}

/// This class needs to be called where there are network requests (in the data source), 
/// since without this class the developer will not know in which class the network requests are
class HttpService {
    static instance = new HttpService();

    constructor() {
        if(HttpService.instance != null) {
            return HttpService.instance;
        }
    }
}

class GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService {
    #httpService = HttpService.instance;

    async getIPAddressWhereJsonipAPIParameterHttpService() {
        try {
            const response = await fetch("https://jsonip.com/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.status != 200) {
                throw NetworkException.fromKeyAndStatusCode("GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService",response.status.toString(),response.status);
            }
            const json = await response.json();
            const map = new Map(Object.entries(json));
            const iPAddress = new IPAddress(map.get(KeysHttpServiceUtility.iPAddressQQIp));
            return Result.success(iPAddress);
        } catch(exception) {
            if(exception instanceof NetworkException) {
                return Result.exception(exception);
            }
            return Result.exception(new LocalException("GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService",EnumGuilty.device,KeysExceptionUtility.uNKNOWN,exception.toString()));
        }
    }

    get _httpService() {
        return this.#httpService;
    }
}

const EnumDataForMainVM = {
    isLoading : "isLoading",
    exception : "exception",
    success : "success",
};

class DataForMainVM extends BaseDataForNamed {
    iPAddress;

    constructor(isLoading,iPAddress) {
        super(isLoading);
        this.iPAddress = iPAddress;
    }

    get getEnumDataForNamed() {
        if(this.isLoading) {
            return EnumDataForMainVM.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForMainVM.exception;
        }
        return EnumDataForMainVM.success;
    }

    toString() {
        return "DataForMainVM(isLoading: " + this.isLoading + ", " 
            + "exceptionController: " + this.exceptionController + ", " 
            + "iPAddress: " + this.iPAddress + ")";
    }
}

class MainVM {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    #getEEIPAddressEEWhereJsonipAPIEEParameterHttpService = new GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService();
    // NamedUtility
    
    // Main objects
    #namedStreamWState;
    #rwtMode;

    constructor() {
        this.#namedStreamWState = new DefaultStreamWState(new DataForMainVM(true,new IPAddress("")));
        this.#rwtMode = new RWTMode(
            EnumRWTMode.release,
            [
                new NamedCallback("init",this.#initReleaseCallback),
            ],
            [
                new NamedCallback("init",this.#initTestCallback),
            ]
        );
    }

    async init() {
        this.#namedStreamWState.listenStreamDataForNamedFromCallback((_data) => {
            this.#build();
        });
        const result = await this.#rwtMode.getNamedCallbackFromName("init").callback();
        debugPrint("MainVM: " + result);
        this.#namedStreamWState.notifyStreamDataForNamed();
    }

    dispose() {
        this.#namedStreamWState.dispose();
    }

    #build() {
        const dataForNamed = this.#namedStreamWState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForMainVM.isLoading:
                debugPrint("Build: IsLoading");
                break;
            case EnumDataForMainVM.exception:
                debugPrint("Build: Exception(" + dataForNamed.exceptionController.getKeyParameterException + ")");
                break;
            case EnumDataForMainVM.success:
                debugPrint("Build: Success(" + dataForNamed.iPAddress + ")");
                break;
            default:
                break;      
        }
    }

    #initReleaseCallback = async () => {
        const getIPAddressWhereJsonipAPIParameterHttpService = await this.#getEEIPAddressEEWhereJsonipAPIEEParameterHttpService.getIPAddressWhereJsonipAPIParameterHttpService();
        if(getIPAddressWhereJsonipAPIParameterHttpService.exceptionController.isWhereNotEqualsNullParameterException()) {
            return this.#firstQQInitReleaseCallbackQQGetIPAddressWhereJsonipAPIParameterHttpService(getIPAddressWhereJsonipAPIParameterHttpService.exceptionController);
        }
        this.#namedStreamWState.getDataForNamed.isLoading = false;
        this.#namedStreamWState.getDataForNamed.iPAddress = getIPAddressWhereJsonipAPIParameterHttpService.parameter.getClone;
        return KeysSuccessUtility.sUCCESS;
    }

    #initTestCallback = async () => {
        // Simulation get "IPAddress"
        const iPAddress = new IPAddress("121.121.12.12");
        await new Promise(resolve => setTimeout(resolve,1000));
        this.#namedStreamWState.getDataForNamed.isLoading = false;
        this.#namedStreamWState.getDataForNamed.iPAddress = iPAddress.getClone;
        return KeysSuccessUtility.sUCCESS;
    }

    async #firstQQInitReleaseCallbackQQGetIPAddressWhereJsonipAPIParameterHttpService(exceptionController) {
        this.#namedStreamWState.getDataForNamed.isLoading = false;
        this.#namedStreamWState.getDataForNamed.exceptionController = exceptionController;
        return exceptionController.getKeyParameterException;
    }
}

async function main() {
    const mainVM = new MainVM();
    await mainVM.init();
    mainVM.dispose();
}
main();
// EXPECTED OUTPUT:
//
// MainVM: sUCCESS
// Build: Success(IPAddress(ip: ${your_ip}))

/// OR

// EXPECTED OUTPUT:
//
// ===start_to_trace_exception===
//
// WhereHappenedException(Class) --> ${WhereHappenedException(Class)}
// NameException(Class) --> ${NameException(Class)}
// toString() --> ${toString()}
//
// ===end_to_trace_exception===
//
// MainVM: ${getKeyParameterException}
// Build: Exception(${getKeyParameterException})