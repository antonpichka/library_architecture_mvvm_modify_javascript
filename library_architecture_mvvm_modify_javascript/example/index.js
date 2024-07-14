const { LocalException, EnumGuilty, BaseModel, BaseListModel, Result, NetworkException, BaseDataForNamed, DefaultStreamWState, debugPrint, ExceptionController, BaseNamedStreamWState, BaseModelRepository, EnumRWTMode } = require("library_architecture_mvvm_modify_javascript");

class FactoryObjectUtility {
    constructor() {
        if (new.target === FactoryObjectUtility) {
            throw new LocalException("FactoryObjectUtility",EnumGuilty.developer,"FactoryObjectUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }
    
    /* ModelRepository */
    static get getIPAddressRepository() {
        return new IPAddressRepository();
    }

    /* NamedStreamWState */
    static get getNamedStreamWStateWhereDataWMainVM() {
        return new DefaultStreamWState(new DataForMainVM(true,new IPAddress("")));
    }
}

class ReadyDataUtility {
    static #success = "success";
    static #unknown = "unknown";
    static #iPAPI = "https://jsonip.com/";

    constructor() {
        if (new.target === ReadyDataUtility) {
            throw new LocalException("ReadyDataUtility",EnumGuilty.developer,"ReadyDataUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }
    
    static get success() {
        return this.#success;
    }

    static get unknown() {
        return this.#unknown;
    }

    static get iPAPI() {
        return this.#iPAPI;
    }
}

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

class IPAddressRepository extends BaseModelRepository {
    #httpService = HttpService.instance;

    _getBaseModelFromMapAndListKeys(map,listKeys) {
        return new IPAddress(
            this.getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(
                map, listKeys, 0, ""));
    }

    _getBaseListModelFromListModel(listModel) {
        return new ListIPAddress(listModel);
    }

    async getIPAddressParameterHttpService() {
        return this.getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(
            this._getIPAddressParameterHttpServiceWReleaseCallback,
            this._getIPAddressParameterHttpServiceWTestCallback)();
    }

    get _httpService() {
        return this.#httpService;
    }

    _getIPAddressParameterHttpServiceWReleaseCallback = async () => {
        try {
            const response = await fetch(ReadyDataUtility.iPAPI, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.status != 200) {
                throw NetworkException.fromKeyAndStatusCode("IPAddressRepository",response.status.toString(),response.status);
            }
            const json = await response.json();
            const map = new Map(Object.entries(json));
            return Result.success(this._getBaseModelFromMapAndListKeys(
                map,
                this._getIPAddressParameterHttpClientServiceWListKeys()));
        } catch(exception) {
            if(exception instanceof NetworkException) {
                return Result.exception(exception);
            }
            return Result.exception(new LocalException("IPAddressRepository",EnumGuilty.device,ReadyDataUtility.unknown,exception.toString()));
        }
    };

    _getIPAddressParameterHttpServiceWTestCallback = async () => {
        await new Promise(resolve => setTimeout(resolve,1000));
        return Result.success(this._getBaseModelFromMapAndListKeys(
            new Map([
                [KeysHttpServiceUtility.iPAddressQQIp,"121.121.12.12"]
            ]),
            this._getIPAddressParameterHttpClientServiceWListKeys()));
    };

    _getIPAddressParameterHttpClientServiceWListKeys() {
        return [KeysHttpServiceUtility.iPAddressQQIp];
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
    // ModelRepository
    #iPAddressRepository = FactoryObjectUtility.getIPAddressRepository;
    
    // NamedUtility
    
    // NamedStreamWState
    #namedStreamWState;

    constructor() {
        this.#namedStreamWState = FactoryObjectUtility.getNamedStreamWStateWhereDataWMainVM;
    }

    async init() {
        this.#namedStreamWState.listenStreamDataForNamedFromCallback((_data) => {
            this.#build();
        });
        const firstRequest = await this.#firstRequest();
        debugPrint("MainVM: " + firstRequest);
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

    async #firstRequest() {
        const getIPAddressParameterHttpService = await this.#iPAddressRepository.getIPAddressParameterHttpService();
        if(getIPAddressParameterHttpService.exceptionController.isWhereNotEqualsNullParameterException()) {
            return this.#firstQQFirstRequestQQGetIPAddressParameterHttpService(getIPAddressParameterHttpService.exceptionController);
        }
        this.#namedStreamWState.getDataForNamed.isLoading = false;
        this.#namedStreamWState.getDataForNamed.iPAddress = getIPAddressParameterHttpService.parameter.getClone;
        return ReadyDataUtility.success;
    }

    async #firstQQFirstRequestQQGetIPAddressParameterHttpService(exceptionController) {
        this.#namedStreamWState.getDataForNamed.isLoading = false;
        this.#namedStreamWState.getDataForNamed.exceptionController = exceptionController;
        return exceptionController.getKeyParameterException;
    }
}

async function main() {
    BaseModelRepository.enumRWTMode = EnumRWTMode.release;
    const mainVM = new MainVM();
    await mainVM.init();
    mainVM.dispose();
}
main();
// EXPECTED OUTPUT:
//
// MainVM: success
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