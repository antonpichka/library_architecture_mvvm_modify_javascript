const { TempCacheProvider, debugPrint } = require("library_architecture_mvvm_modify_javascript");

async function main() {
    const tempCacheProvider = new TempCacheProvider();
    const key = "key";
    const keyFirst = tempCacheProvider.getNamed(key,"default");
    debugPrint("KeyFirst: " + keyFirst);
    tempCacheProvider.listenNamed(key,(event)=> {
        debugPrint("Listen: " + event);
    });
    await new Promise(resolve => setTimeout(resolve,1000));
    tempCacheProvider.updateWNotify(key,"Two");
    tempCacheProvider.dispose([key]);
    tempCacheProvider.listenNamed(key, (event)=> {
        debugPrint("ListenTwo: " + event);
    });
    await new Promise(resolve => setTimeout(resolve,1000));
    tempCacheProvider.updateWNotify(key,"Three");
}
main();
// EXPECTED OUTPUT:
//
// KeyFirst: default
// Listen: Two
// ListenTwo: Three