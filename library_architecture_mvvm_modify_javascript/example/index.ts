import { LocalException, EnumGuilty, BaseModel, BaseListModel, Result, NetworkException, BaseDataForNamed, DefaultStreamWState, debugPrint, ExceptionController, BaseNamedStreamWState, RWTMode, EnumRWTMode, NamedCallback } from "library_architecture_mvvm_modify_javascript";

class KeysHttpServiceUtility {
    /* IPAddress */
    public static readonly iPAddressQQIp = "ip";

    private constructor() {
    }
}

class KeysExceptionUtility {
    /* UNKNOWN */
    public static readonly uNKNOWN = "uNKNOWN";

    private constructor() {
    }
}

class KeysSuccessUtility {
    /* SUCCESS */
    public static readonly sUCCESS = "sUCCESS";

    private constructor() {
    }
}

class IPAddress extends BaseModel {
    public readonly ip: string;

    public constructor(ip: string) {
        super("" + ip + "");
        this.ip = ip;
    }

    public override get getClone(): IPAddress {
        return new IPAddress(this.ip);
    }

    public override toString(): string {
        return "IPAddress(ip: " + this.ip + ")";
    }
}

class ListIPAddress<T extends IPAddress> extends BaseListModel<T> {
    public constructor(listModel: Array<T>) {
        super(listModel);
    }

    public override get getClone(): ListIPAddress<T> {
        const newListModel = new Array<T>();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone as T);
        }
        return new ListIPAddress(newListModel);
    }

    public override toString(): string {
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
    public static readonly instance = new HttpService();

    private constructor() {
    }
}

class GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService {
    protected readonly httpService = HttpService.instance;

    public async getIPAddressWhereJsonipAPIParameterHttpService(): Promise<Result> {
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
            const map = new Map<string,any>(Object.entries(json));
            const iPAddress = new IPAddress(map.get(KeysHttpServiceUtility.iPAddressQQIp) as string);
            return Result.success(iPAddress);
        } catch(exception) {
            if(exception instanceof NetworkException) {
                return Result.exception(exception);
            }
            return Result.exception(new LocalException("GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService",EnumGuilty.device,KeysExceptionUtility.uNKNOWN,exception.toString()));
        }
    }
}

enum EnumDataForMainVM {
    isLoading,
    exception,
    success
}

class DataForMainVM extends BaseDataForNamed<EnumDataForMainVM> {
    public iPAddress: IPAddress;

    public constructor(isLoading: boolean,iPAddress: IPAddress) {
        super(isLoading);
        this.iPAddress = iPAddress;
    }

    public override get getEnumDataForNamed(): EnumDataForMainVM {
        if(this.isLoading) {
            return EnumDataForMainVM.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForMainVM.exception;
        }
        return EnumDataForMainVM.success;
    }
}

class MainVM {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    private readonly getEEIPAddressEEWhereJsonipAPIEEParameterHttpService = new GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService();
    // NamedUtility
    
    // Main objects
    private readonly namedStreamWState: BaseNamedStreamWState<DataForMainVM>;
    private readonly rwtMode: RWTMode;

    public constructor() {
        this.namedStreamWState = new DefaultStreamWState<DataForMainVM>(new DataForMainVM(true,new IPAddress("")));
        this.rwtMode = new RWTMode(
            EnumRWTMode.release,
            [
                new NamedCallback("init",async () => {
                    const getIPAddressWhereJsonipAPIParameterHttpService = await this.getEEIPAddressEEWhereJsonipAPIEEParameterHttpService.getIPAddressWhereJsonipAPIParameterHttpService();
                    if(getIPAddressWhereJsonipAPIParameterHttpService.exceptionController.isWhereNotEqualsNullParameterException()) {
                        return this.firstQQInitQQGetIPAddressWhereJsonipAPIParameterHttpService(getIPAddressWhereJsonipAPIParameterHttpService.exceptionController);
                    }
                    this.namedStreamWState.getDataForNamed.isLoading = false;
                    this.namedStreamWState.getDataForNamed.iPAddress = getIPAddressWhereJsonipAPIParameterHttpService.parameter.getClone;
                    return KeysSuccessUtility.sUCCESS;
                }),
            ],
            [
                new NamedCallback("init",async () => {
                    // Simulation get "IPAddress"
                    const iPAddress = new IPAddress("121.121.12.12");
                    await new Promise(resolve => setTimeout(resolve,1000));
                    this.namedStreamWState.getDataForNamed.isLoading = false;
                    this.namedStreamWState.getDataForNamed.iPAddress = iPAddress.getClone;
                    return KeysSuccessUtility.sUCCESS;
                }),
            ]
        );
        this.init();
    }

    private async init(): Promise<void> {
        this.namedStreamWState.listenStreamDataForNamedFromCallback((data) => {
            this.build();
        });
        const result = await this.rwtMode.getNamedCallbackFromName("init").callback();
        debugPrint("MainVM: " + result);
        this.namedStreamWState.notifyStreamDataForNamed();
    }

    private build(): void {
        const dataForNamed = this.namedStreamWState.getDataForNamed;
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

    private async firstQQInitQQGetIPAddressWhereJsonipAPIParameterHttpService(exceptionController: ExceptionController): Promise<string> {
        this.namedStreamWState.getDataForNamed.isLoading = false;
        this.namedStreamWState.getDataForNamed.exceptionController = exceptionController;
        return exceptionController.getKeyParameterException;
    }
}
new MainVM();
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