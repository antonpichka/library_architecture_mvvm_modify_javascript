import { TempCacheService, debugPrint } from "library_architecture_mvvm_modify_javascript";

async function main() {
    const tempCacheService = TempCacheService.instance;
    const key = "key";
    tempCacheService.updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterOne(key,"One");
    const fromKeyTempCacheParameterTempCache = tempCacheService.getFromKeyTempCacheParameterTempCache(key);
    debugPrint("FromKeyTempCacheParameterTempCache: " + fromKeyTempCacheParameterTempCache);
    tempCacheService.listenStreamFromKeyTempCacheAndCallbackParameterOne(key,(data)=> {
        debugPrint("Listen: " + data);
    });
    await new Promise(resolve => setTimeout(resolve,1000));
    tempCacheService.updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterOne(key,"Two");
    tempCacheService.listenStreamFromKeyTempCacheAndCallbackParameterOne(key,(data)=> {
        debugPrint("ListenTwo: " + data);
    });
    await new Promise(resolve => setTimeout(resolve,1000));
    tempCacheService.updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterOne(key,"Three");
    tempCacheService.listenStreamFromKeyTempCacheAndCallbackParameterOne(key,(data)=> {
        debugPrint("ListenThree: " + data);
    });
}
main();
// EXPECTED OUTPUT:
//
// FromKeyTempCacheParameterTempCache: One
// Listen: Two
// Listen: Three
// ListenTwo: Three