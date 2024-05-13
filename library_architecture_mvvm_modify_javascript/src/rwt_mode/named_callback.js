export class NamedCallback {
    #name;
    #callback;

    constructor(name,callback) {
        this.#name = name;
        this.#callback = callback;
    }

    get name() {
        return this.#name;
    }

    get callback() {
        return this.#callback;
    }
}