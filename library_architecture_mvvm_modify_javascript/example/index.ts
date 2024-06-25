import { LocalException, EnumGuilty, BaseModel, BaseListModel, Result, NetworkException, BaseDataForNamed, DefaultStreamWState, debugPrint, ExceptionController, BaseNamedStreamWState, BaseModelRepository, EnumRWTMode } from "library_architecture_mvvm_modify_javascript";

class ReadyDataUtility {
    public static readonly success = "success";
    public static readonly unknown = "unknown";
    public static readonly iPAPI = "https://jsonip.com/";

    private constructor() {
    }
}

class KeysHttpServiceUtility {
    /* IPAddress */
    public static readonly iPAddressQQIp = "ip";

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

class IPAddressRepository<T extends IPAddress,Y extends ListIPAddress<T>> extends BaseModelRepository<T,Y> {
    protected readonly httpService = HttpService.instance;

    public constructor(enumRWTMode: EnumRWTMode) {
        super(enumRWTMode);
    }

    protected override getBaseModelFromMapAndListKeys(map: Map<string, any>, listKeys: string[]): T {
        if(listKeys.length <= 0) {
            return new IPAddress("") as T;
        }
        return new IPAddress(map.has(listKeys[0]) ? map.get(listKeys[0]) : "") as T;
    }

    protected override getBaseListModelFromListModel(listModel: T[]): Y {
        return new ListIPAddress(listModel) as Y;
    }

    public async getIPAddressParameterHttpService(): Promise<Result> {
        return this.getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(
            this.getIPAddressParameterHttpServiceWReleaseCallback,
            this.getIPAddressParameterHttpServiceWTestCallback)();
    }
    
    private getIPAddressParameterHttpServiceWReleaseCallback = async (): Promise<Result> => {
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
            const map = new Map<string,any>(Object.entries(json));
            return Result.success(this.getBaseModelFromMapAndListKeys(map,[KeysHttpServiceUtility.iPAddressQQIp]));
        } catch(exception) {
            if(exception instanceof NetworkException) {
                return Result.exception(exception);
            }
            return Result.exception(new LocalException("IPAddressRepository",EnumGuilty.device,ReadyDataUtility.unknown,exception.toString()));
        }
    };

    private getIPAddressParameterHttpServiceWTestCallback = async (): Promise<Result> => {
        await new Promise(resolve => setTimeout(resolve,1000));
        return Result.success(this.getBaseModelFromMapAndListKeys(
            new Map<string,any>([
                [KeysHttpServiceUtility.iPAddressQQIp,"121.121.12.12"]
            ]),
            [KeysHttpServiceUtility.iPAddressQQIp]));
    };
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

    public override toString(): string {
        return "DataForMainVM(isLoading: " + this.isLoading + ", " 
            + "exceptionController: " + this.exceptionController + ", " 
            + "iPAddress: " + this.iPAddress + ")";
    }
}

class MainVM {
    // ModelRepository
    private readonly iPAddressRepository = new IPAddressRepository(EnumRWTMode.release);
    
    // NamedUtility
    
    // NamedStreamWState
    private readonly namedStreamWState: BaseNamedStreamWState<DataForMainVM>;

    public constructor() {
        this.namedStreamWState = new DefaultStreamWState<DataForMainVM>(new DataForMainVM(true,new IPAddress("")));
    }

    public async init(): Promise<void> {
        this.namedStreamWState.listenStreamDataForNamedFromCallback((_data) => {
            this.build();
        });
        const firstRequest = await this.firstRequest();
        debugPrint("MainVM: " + firstRequest);
        this.namedStreamWState.notifyStreamDataForNamed();
    }

    public dispose(): void {
        this.namedStreamWState.dispose();
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

    private async firstRequest(): Promise<string> {
        const getIPAddressParameterHttpService = await this.iPAddressRepository.getIPAddressParameterHttpService();
        if(getIPAddressParameterHttpService.exceptionController.isWhereNotEqualsNullParameterException()) {
            return this.firstQQFirstRequestQQGetIPAddressParameterHttpService(getIPAddressParameterHttpService.exceptionController);
        }
        this.namedStreamWState.getDataForNamed.isLoading = false;
        this.namedStreamWState.getDataForNamed.iPAddress = getIPAddressParameterHttpService.parameter.getClone;
        return ReadyDataUtility.success;
    }

    private async firstQQFirstRequestQQGetIPAddressParameterHttpService(exceptionController: ExceptionController): Promise<string> {
        this.namedStreamWState.getDataForNamed.isLoading = false;
        this.namedStreamWState.getDataForNamed.exceptionController = exceptionController;
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