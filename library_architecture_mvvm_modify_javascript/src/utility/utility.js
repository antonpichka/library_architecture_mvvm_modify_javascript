export function debugPrint(text) {
    console.log(text);
}

export function debugPrintException(text) {
    debugPrint("\x1B[31m" + text +"\x1b[0m");
}