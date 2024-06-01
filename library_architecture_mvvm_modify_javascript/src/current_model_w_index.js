export class CurrentModelWIndex {
    #currentModel;
    #index;
    
    constructor(currentModel, index) {
        this.#currentModel = currentModel;
        this.#index = index;
    }

    get currentModel() {
        return this.#currentModel;
    }

    get index() {
        return this.#index;
    }
}