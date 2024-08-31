export class IterationService {
    static instance = new IterationService();
    #iteration;

    constructor() {
        if(IterationService.instance != null) {
            return IterationService.instance;
        }
        this.#iteration = -1;
    }

    newValueParameterIteration() {
        this.#iteration++;
        return this.#iteration;
    }
}