import { TempCacheService, debugPrint } from "library_architecture_mvvm_modify_javascript";

async function main() {
    const tempCacheService = TempCacheService.instance;
    const key = "key";
    tempCacheService.updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterTempCache(key,"One");
    const getFromKeyTempCacheParameterTempCache = tempCacheService.getFromKeyTempCacheParameterTempCache(key);
    debugPrint("GetFromKeyTempCacheParameterTempCache: " + getFromKeyTempCacheParameterTempCache);
    tempCacheService.listenStreamFromKeyTempCacheAndCallbackParameterOne(key,(data)=> {
        debugPrint("Listen: " + data);
    });
    await new Promise(resolve => setTimeout(resolve,1000));
    tempCacheService.updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterTempCache(key,"Two");
    tempCacheService.listenStreamFromKeyTempCacheAndCallbackParameterOne(key,(data)=> {
        debugPrint("ListenTwo: " + data);
    });
    await new Promise(resolve => setTimeout(resolve,1000));
    tempCacheService.updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterTempCache(key,"Three");
    tempCacheService.listenStreamFromKeyTempCacheAndCallbackParameterOne(key,(data)=> {
        debugPrint("ListenThree: " + data);
    });
}
main();
// EXPECTED OUTPUT:
//
// GetFromKeyTempCacheParameterTempCache: One
// Listen: Two
// Listen: Three
// ListenTwo: Three