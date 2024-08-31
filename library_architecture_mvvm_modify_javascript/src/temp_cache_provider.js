import { TempCacheService } from "./named_service/temp_cache_service.js"
import { IterationService } from "./named_service/iteration_service.js";

export class TempCacheProvider {
    #tempCacheService;
    #iteration

    constructor() {
        this.#tempCacheService = TempCacheService.instance;
        this.#iteration = IterationService.instance.newValueParameterIteration();
    }

    getNamed(keyTempCache, defaultValue) {
        return this.#tempCacheService.getNamed(keyTempCache,defaultValue);
    }

    dispose(listKeyTempCache) {
        this.#tempCacheService.dispose(listKeyTempCache,this.#iteration);
    }

    listenNamed(keyTempCache, callback) {
        this.#tempCacheService.listenNamed(keyTempCache,callback,this.#iteration);
    }

    update(keyTempCache, value) {
        this.#tempCacheService.update(keyTempCache,value);
    }

    updateWNotify(keyTempCache, value) {
        this.#tempCacheService.updateWNotify(keyTempCache,value);
    }

    delete(keyTempCache) {
        this.#tempCacheService.delete(keyTempCache);
    }
}