import { LocalException, EnumGuilty, BaseModel, BaseListModel, Result, NetworkException, BaseDataForNamed, BaseNamedViewModel, DefaultStreamWState, debugPrint } from "../../node_modules/library_architecture_mvvm_modify_javascript";

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

    get ip() {
        return this.#ip;
    }

    toString() {
        return "IPAddress(ip: " + this.ip + ")";
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

    get _httpService() {
        return this.#httpService;
    }

    async getIPAddressWhereJsonipAPIParameterHttpService() {
        try {
            const response = await fetch("https://jsonip.com/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.status != 200) {
                throw new NetworkException.fromKeyAndStatusCode("GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService",response.status.toString(),response.status);
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
}

const EnumDataForMainView = {
    isLoading : "isLoading",
    exception : "exception",
    success : "success",
};

class DataForMainView extends BaseDataForNamed {
    iPAddress;
    isDoneInit;
    isDoneLoadedHtml;

    constructor(isLoading,iPAddress,isDoneInit,isDoneLoadedHtml) {
        super(isLoading);
        this.iPAddress = iPAddress;
        this.isDoneInit = isDoneInit;
        this.isDoneLoadedHtml = isDoneLoadedHtml;
    }

    get getEnumDataForNamed() {
        if(this.isLoading) {
            return EnumDataForMainView.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForMainView.exception;
        }
        return EnumDataForMainView.success;
    }

    isWhereThereAreUndoneParametersIsDoneInitAndIsDoneLoadedHtml() {
        return !this.isDoneInit || !this.isDoneLoadedHtml;
    }
}

/// This class is an interface, but since there are no interfaces in JS, the presence of this class gives information to the developer. 
/// Which ones specifically methods should there be in the "MainViewModel" and "TestMainViewModel" classes
class IMainViewModel {

}

class TestMainViewModel extends BaseNamedViewModel {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility

    constructor() {
        super(new DefaultStreamWState(new DataForMainView(true,new IPAddress(""),false)));
    }

    setIsDoneLoadedHtmlTrue() {
        this.getDataForNamedParameterNamedStreamWState.isDoneLoadedHtml = true;
    }

    notifyStream() {
        if(this.getDataForNamedParameterNamedStreamWState.isWhereThereAreUndoneParametersIsDoneInitAndIsDoneLoadedHtml()) {
            return;
        }
        this.notifyStreamDataForNamedParameterNamedStreamWState();
    }

    async init() {
        // Simulation get "IPAddress"
        const iPAddress = new IPAddress("121.121.12.12");
        await new Promise(resolve => setTimeout(resolve,1));
        this.getDataForNamedParameterNamedStreamWState.isLoading = false;
        this.getDataForNamedParameterNamedStreamWState.iPAddress = iPAddress.getClone;
        this.getDataForNamedParameterNamedStreamWState.isDoneInit = true;
        return KeysSuccessUtility.sUCCESS;
    }
}

class MainViewModel extends BaseNamedViewModel {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    #getEEIPAddressEEWhereJsonipAPIEEParameterHttpService = new GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService();

    // NamedUtility

    constructor() {
        super(new DefaultStreamWState(new DataForMainView(true,new IPAddress(""),false)));
    }

    setIsDoneLoadedHtmlTrue() {
        this.getDataForNamedParameterNamedStreamWState.isDoneLoadedHtml = true;
    }

    notifyStream() {
        if(this.getDataForNamedParameterNamedStreamWState.isWhereThereAreUndoneParametersIsDoneInitAndIsDoneLoadedHtml()) {
            return;
        }
        this.notifyStreamDataForNamedParameterNamedStreamWState();
    }

    async init() {
        const getIPAddressWhereJsonipAPIParameterHttpService = await this.#getEEIPAddressEEWhereJsonipAPIEEParameterHttpService.getIPAddressWhereJsonipAPIParameterHttpService();
        if(getIPAddressWhereJsonipAPIParameterHttpService.exceptionController.isWhereNotEqualsNullParameterException()) {
            return this.#firstQQInitQQGetIPAddressWhereJsonipAPIParameterHttpService(getIPAddressWhereJsonipAPIParameterHttpService.exceptionController);
        }
        this.getDataForNamedParameterNamedStreamWState.isLoading = false;
        this.getDataForNamedParameterNamedStreamWState.iPAddress = getIPAddressWhereJsonipAPIParameterHttpService.parameter.getClone;
        this.getDataForNamedParameterNamedStreamWState.isDoneInit = true;
        return KeysSuccessUtility.sUCCESS;
    }

    async #firstQQInitQQGetIPAddressWhereJsonipAPIParameterHttpService(exceptionController) {
        this.getDataForNamedParameterNamedStreamWState.isLoading = false;
        this.getDataForNamedParameterNamedStreamWState.exceptionController = exceptionController;
        this.getDataForNamedParameterNamedStreamWState.isDoneInit = true;
        return exceptionController.getKeyParameterException;
    }
}

export class MainView {
    #viewModel;

    constructor() {
        /// RELEASE CODE
        this.#viewModel = new MainViewModel();
        /// TEST CODE
        // this.#viewModel = new TestMainViewModel();
        this.#initParameterViewModel();
    }

    notifyStreamWhereDoneLoadedHtmlParameterViewModel() {
        this.#viewModel.setIsDoneLoadedHtmlTrue();
        this.#viewModel.notifyStream();
    }

    async #initParameterViewModel() {
        this.#viewModel.listenStreamDataForNamedFromCallbackParameterNamedStreamWState((data) => {
            this.#buildParameterViewModel();
        });
        const result = await this.#viewModel.init();
        debugPrint("MainView: " + result);
        this.#viewModel.notifyStream();
    }

    #buildParameterViewModel() {
        const dataForNamedParameterNamedStreamWState = this.#viewModel.getDataForNamedParameterNamedStreamWState;
        switch(dataForNamedParameterNamedStreamWState.getEnumDataForNamed) {
            case EnumDataForMainView.isLoading:
                document.getElementById("pMessage").innerText = "Loading";
                break;
            case EnumDataForMainView.exception:
                document.getElementById("pMessage").innerText = dataForNamedParameterNamedStreamWState.exceptionController.getKeyParameterException;
                break;
            case EnumDataForMainView.success:
                document.getElementById("pMessage").innerText = dataForNamedParameterNamedStreamWState.iPAddress.toString();
                break;
            default:
                break;      
        }
    }
}