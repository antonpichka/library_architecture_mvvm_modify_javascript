const { TempCacheProvider, IterationService, debugPrint } = require("library_architecture_mvvm_modify_javascript");

function main() {
    new TempCacheProvider();
    new TempCacheProvider();
    new TempCacheProvider();
    new TempCacheProvider();
    new TempCacheProvider();
    debugPrint("Iteration: " + IterationService.instance.newValueParameterIteration());
}
main();
// EXPECTED OUTPUT:
//
// Iteration: 5