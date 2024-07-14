const { TempCacheService, debugPrint } = require("library_architecture_mvvm_modify_javascript");

async function main() {
    const tempCacheService = TempCacheService.instance;
    const key = "key";
    tempCacheService.updateWNotificationFromKeyTempCacheAndValueParameterOne(key,"One");
    const fromKeyTempCacheParameterTempCache = tempCacheService.getFromKeyTempCacheParameterTempCache(key);
    debugPrint("FromKeyTempCacheParameterTempCache: " + fromKeyTempCacheParameterTempCache);
    tempCacheService.listenStreamFromKeyTempCacheAndCallbackParameterOne(key,(data)=> {
        debugPrint("Listen: " + data);
    });
    await new Promise(resolve => setTimeout(resolve,1000));
    tempCacheService.updateWNotificationFromKeyTempCacheAndValueParameterOne(key,"Two");
    tempCacheService.listenStreamFromKeyTempCacheAndCallbackParameterOne(key,(data)=> {
        debugPrint("ListenTwo: " + data);
    });
    await new Promise(resolve => setTimeout(resolve,1000));
    tempCacheService.updateWNotificationFromKeyTempCacheAndValueParameterOne(key,"Three");
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