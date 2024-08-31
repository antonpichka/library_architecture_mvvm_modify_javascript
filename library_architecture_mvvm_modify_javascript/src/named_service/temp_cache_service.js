import { EnumGuilty } from "../base_exception/enum_guilty.js";
import { LocalException } from "../base_exception/local_exception.js";

export class TempCacheService {
    static instance = new TempCacheService();
    #tempCache;
    #tempCacheWStreams;

    constructor() {
        if(TempCacheService.instance != null) {
            return TempCacheService.instance;
        }
        this.#tempCache = new Map();
        this.#tempCacheWStreams = new Map();
    }
    
    getNamed(keyTempCache, defaultValue) {
        if(!this.#tempCache.has(keyTempCache)) {
            return defaultValue;
        }
        return this.#tempCache.get(keyTempCache);
    }

    dispose(listKeyTempCache, iteration) {
        for(const itemKeyTempCache of listKeyTempCache) {
            if(!this.#tempCacheWStreams.has(itemKeyTempCache)) {
                return;
            }
            this.#tempCacheWStreams.get(itemKeyTempCache).delete(iteration);
        }
    }

    listenNamed(keyTempCache,callback,iteration) {
        if(!this.#tempCacheWStreams.has(keyTempCache)) {
            this.#tempCacheWStreams.set(keyTempCache,new Map());
            this.#tempCacheWStreams.get(keyTempCache).set(iteration,callback);
            return;
        }
        if(this.#tempCacheWStreams.get(keyTempCache).has(iteration)) {
            throw new LocalException(
                "TempCacheService",
                EnumGuilty.developer,
                "{ " + keyTempCache + "---" + iteration + "}", 
                "Under such a key and iteration there already exists a listener: " + "{ " + keyTempCache + "---" + iteration + "}"); 
        }
        this.#tempCacheWStreams.get(keyTempCache).set(iteration,callback);
    }

    update(keyTempCache,value) {
        this.#tempCache.set(keyTempCache,value);
    }

    updateWNotify(keyTempCache,value) {
        this.update(keyTempCache,value);
        if(!this.#tempCacheWStreams.has(keyTempCache)) {
            return;
        }
        for(const [_key,callback] of this.#tempCacheWStreams.get(keyTempCache).entries()) {
            callback(value);
        }
    }

    delete(keyTempCache) {
        this.#tempCache.delete(keyTempCache);
        this.#tempCacheWStreams.delete(keyTempCache);
    }
}