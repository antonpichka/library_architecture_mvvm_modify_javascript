import { EnumGuilty } from "../utility/base_exception/enum_guilty";
import { LocalException } from "../utility/base_exception/local_exception";

export class TempCacheService {
    static instance = new TempCacheService();
    #tempCache;
    #tempCacheWListAction;

    constructor() {
        if(TempCacheService.instance != null) {
            return TempCacheService.instance;
        }
        this.#tempCache = new Map();
        this.#tempCacheWListAction = new Map();
    }

    static clearTempCacheParmeterInstance() {
        const tempCache = this.instance.#tempCache;
        tempCache.clear();
    }

    static closeStreamFromKeyTempCacheParmeterInstance(keyTempCache) {
        const tempCacheWListAction = this.instance.#tempCacheWListAction;
        if(!tempCacheWListAction.has(keyTempCache)) {
            return;
        }
        const get = tempCacheWListAction.get(keyTempCache);
        get.splice(0,get.length);
    }

    static closeStreamFromListKeyTempCacheParmeterInstance(listKeyTempCache) {
        const tempCacheWListAction = this.instance.#tempCacheWListAction;
        for(let i = 0; i < listKeyTempCache.length; i++) {
            const itemKeyTempCache = listKeyTempCache[i];
            if(!tempCacheWListAction.has(itemKeyTempCache)) {
                return;
            }
            const get = tempCacheWListAction.get(itemKeyTempCache);
            get.splice(0,get.length);
        }
    }

    static closeStreamsParameterInstance() {
        const tempCacheWListAction = this.instance.#tempCacheWListAction;
        for(const [,value] of tempCacheWListAction) {
            value.splice(0,value.length);
        }
    }
    
    getFromKeyTempCacheParameterTempCache(keyTempCache) {
        const tempCache = this.#tempCache;
        if(!tempCache.has(keyTempCache)) {
            throw new LocalException("TempCacheService",EnumGuilty.developer,keyTempCache,"No exists key");
        }
        return tempCache.get(keyTempCache);
    }

    listenStreamFromKeyTempCacheAndCallbackParameterOne(keyTempCache,callback) {
        const tempCacheWListAction = this.#tempCacheWListAction;
        if(!tempCacheWListAction.has(keyTempCache)) {
            tempCacheWListAction.set(keyTempCache,[]);
            tempCacheWListAction.get(keyTempCache).push(callback);
            return;
        }
        tempCacheWListAction.get(keyTempCache).push(callback);
    }

    updateFromKeyTempCacheAndValueParameterTempCache(keyTempCache,value) {
        this.#tempCache.set(keyTempCache,value);
    }

    updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterTempCache(keyTempCache,value) {
        this.updateFromKeyTempCacheAndValueParameterTempCache(keyTempCache,value);
        const tempCacheWListAction = this.#tempCacheWListAction;
        if(!tempCacheWListAction.has(keyTempCache)) {
            return;
        }
        const get = tempCacheWListAction.get(keyTempCache);
        for(let i = 0; i < get.length; i++) {
            const itemGet = get[i];
            itemGet(value);
        }
    }

    deleteFromKeyTempCacheParameterTempCache(keyTempCache) {
        this.#tempCache.delete(keyTempCache);
    }
}