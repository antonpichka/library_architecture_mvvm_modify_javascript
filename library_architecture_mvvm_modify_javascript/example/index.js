const { LocalException, EnumGuilty, BaseModel, BaseListModel, BaseModelWrapper, BaseListModelWrapper, ResultWithModelWrapper, NetworkException, BaseDataForNamed, DefaultStreamWState, debugPrint, ExceptionController, BaseNamedStreamWState, BaseModelWrapperRepository, TempCacheProvider } = require("library_architecture_mvvm_modify_javascript");

class FactoryObjectUtility {
    constructor() {
        if (new.target === FactoryObjectUtility) {
            throw new LocalException("FactoryObjectUtility",EnumGuilty.developer,"FactoryObjectUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }
    
    /* ModelWrapperRepository */
    static getIPAddressWrapperRepositoryFromNamedHttpClientService(namedHttpClientService) {
        return new IPAddressWrapperRepository(namedHttpClientService);
    }

    /* NamedStreamWState */
    static get getNamedStreamWStateWhereDataWMainVM() {
        return new DefaultStreamWState(new DataForMainVM(true,new IPAddress("")));
    }
}

class KeysUrlEndpointUtility {
    /* JsonipAPI */
    static #jsonipAPI = "https://jsonip.com";
    static #jsonipAPIQQProviders = this.#jsonipAPI + "/providers";

    constructor() {
        if (new.target === KeysUrlEndpointUtility) {
            throw new LocalException("KeysUrlEndpointUtility",EnumGuilty.developer,"KeysUrlEndpointUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get jsonipAPI() {
        return this.#jsonipAPI;
    }

    static get jsonipAPIQQProviders() {
        return this.#jsonipAPIQQProviders;
    }
}

class ReadyDataUtility {
    static #unknown = "unknown";
    static #success = "success";

    constructor() {
        if (new.target === ReadyDataUtility) {
            throw new LocalException("ReadyDataUtility",EnumGuilty.developer,"ReadyDataUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get unknown() {
        return this.#unknown;
    }

    static get success() {
        return this.#success;
    }
}

class KeysHttpClientServiceUtility {
    /* IPAddress */
    static #iPAddressQQIp = "ip";

    constructor() {
        if (new.target === KeysHttpClientServiceUtility) {
            throw new LocalException("KeysHttpClientServiceUtility",EnumGuilty.developer,"KeysHttpClientServiceUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
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

    clone() {
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

    clone() {
        const newListModel = new Array();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.clone());
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

class IPAddressWrapper extends BaseModelWrapper {
    constructor(listObject) {
        super(listObject);
    }

    createModel() {
        return new IPAddress(this.listObject[0]);
    }
}

class ListIPAddressWrapper extends BaseListModelWrapper {
    constructor(listsListObject) {
        super(listsListObject);
    }

    createListModel() {
        const listModel = new Array();
        for(const itemListObject of this.listsListObject) {
            listModel.push(new IPAddress(itemListObject[0]));
        }
        return new ListIPAddress(listModel);
    }
}

class BaseNamedHttpClient {
    constructor() {
        if (new.target === BaseNamedHttpClient) {
            throw new LocalException("BaseNamedHttpClient",EnumGuilty.developer,"BaseNamedHttpClientQQConstructor","Cannot instantiate abstract class");
        }
    }
}

class DefaultHttpClient extends BaseNamedHttpClient {

}

class BaseNamedHttpClientService {
    constructor() {
        if (new.target === BaseNamedHttpClientService) {
            throw new LocalException("BaseNamedHttpClientService",EnumGuilty.developer,"BaseNamedHttpClientServiceQQConstructor","Cannot instantiate abstract class");
        }
    }

    get getParameterNamedHttpClient() {
        throw new LocalException("BaseNamedHttpClientService",EnumGuilty.developer,"BaseNamedHttpClientServiceQQGetParameterNamedHttpClient","Needs extends and must return type 'BaseNamedHttpClient'");
    }
}

class DefaultHttpClientService extends BaseNamedHttpClientService {
    static instance = new DefaultHttpClientService();
    #namedHttpClient;

    constructor() {
        super();
        if(DefaultHttpClientService.instance != null) {
            return DefaultHttpClientService.instance;
        }
    }

    get getParameterNamedHttpClient() {
        if(this.#namedHttpClient != null) {
            return this.#namedHttpClient;
        }
        this.#namedHttpClient = DefaultHttpClient();
        return this.#namedHttpClient;
    }
}

class IPAddressWrapperRepository extends BaseModelWrapperRepository {
    #namedHttpClientService;

    constructor(namedHttpClientService) {
        super();
        this.#namedHttpClientService = namedHttpClientService;
    }

    dispose() {
    }

    async getIPAddressParameterNamedHttpClientService() {
        try {
            const response = await fetch(KeysUrlEndpointUtility.jsonipAPI, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.status != 200) {
                throw NetworkException.fromKeyAndStatusCode("IPAddressWrapperRepository",response.status.toString(),response.status);
            }
            const json = await response.json();
            const data = new Map(Object.entries(json));
            const ipByIPAddress = this.getSafeValueFromMapAndKeyAndDefaultValue(data,KeysHttpClientServiceUtility.iPAddressQQIp,"");
            return ResultWithModelWrapper.success(new IPAddressWrapper([ipByIPAddress]));
        } catch(exception) {
            if(exception instanceof NetworkException) {
                return ResultWithModelWrapper.exception(exception);
            }
            return ResultWithModelWrapper.exception(new LocalException("IPAddressWrapperRepository",EnumGuilty.device,ReadyDataUtility.unknown,exception.toString()));
        }
    }

    get _namedHttpClientService() {
        return this.#namedHttpClientService;
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
    // ModelWrapperRepository
    #iPAddressWrapperRepository = FactoryObjectUtility.getIPAddressWrapperRepositoryFromNamedHttpClientService(DefaultHttpClientService.instance);
    
    // TempCacheProvider
    #tempCacheProvider = new TempCacheProvider();

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
        this.#iPAddressWrapperRepository.dispose();
        this.#tempCacheProvider.dispose(new Array());
        this.#namedStreamWState.dispose();
    }

    #build() {
        const dataWNamed = this.#namedStreamWState.getDataForNamed;
        switch(dataWNamed.getEnumDataForNamed) {
            case EnumDataForMainVM.isLoading:
                debugPrint("Build: IsLoading");
                break;
            case EnumDataForMainVM.exception:
                debugPrint("Build: Exception(" + dataWNamed.exceptionController.getKeyParameterException + ")");
                break;
            case EnumDataForMainVM.success:
                debugPrint("Build: Success(" + dataWNamed.iPAddress + ")");
                break;
            default:
                break;      
        }
    }

    async #firstRequest() {
        const getIPAddressParameterNamedHttpClientService = await this.#iPAddressWrapperRepository.getIPAddressParameterNamedHttpClientService();
        if(getIPAddressParameterNamedHttpClientService.exceptionController.isWhereNotEqualsNullParameterException()) {
            return this.#firstQQFirstRequestQQGetIPAddressParameterNamedHttpClientService(getIPAddressParameterNamedHttpClientService.exceptionController);
        }
        this.#namedStreamWState.getDataForNamed.isLoading = false;
        this.#namedStreamWState.getDataForNamed.iPAddress = getIPAddressParameterNamedHttpClientService.modelWrapper.createModel();
        return ReadyDataUtility.success;
    }

    async #firstQQFirstRequestQQGetIPAddressParameterNamedHttpClientService(exceptionController) {
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