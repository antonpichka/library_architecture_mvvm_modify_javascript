import { TempCacheService } from "../../named_service/temp_cache_service.js";

export async function main() {
    const tempCacheService = TempCacheService.instance;
    const key = "key";
    tempCacheService.updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterTempCache(key,"One");
    const getFromKeyTempCacheParameterTempCache = tempCacheService.getFromKeyTempCacheParameterTempCache(key);
    document.getElementById("txt").innerText = "\nGetFromKeyTempCacheParameterTempCache: " + getFromKeyTempCacheParameterTempCache;
    tempCacheService.listenStreamFromKeyTempCacheAndCallbackParameterOne(key,(data)=> {
        document.getElementById("txt").innerText += "\nListen: " + data;
    });
    await new Promise(resolve => setTimeout(resolve,1000));
    tempCacheService.updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterTempCache(key,"Two");
    tempCacheService.listenStreamFromKeyTempCacheAndCallbackParameterOne(key,(data)=> {
        document.getElementById("txt").innerText += "\nListenTwo: " + data;
    });
    await new Promise(resolve => setTimeout(resolve,1000));
    tempCacheService.updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterTempCache(key,"Three");
    tempCacheService.listenStreamFromKeyTempCacheAndCallbackParameterOne(key,(data)=> {
        document.getElementById("txt").innerText += "\nListenThree: " + data;
    });
    // EXPECTED OUTPUT:
    //
    // GetFromKeyTempCacheParameterTempCache: One
    // Listen: Two
    // Listen: Three
    // ListenTwo: Three
}