// Problem:2 Search JS File-----------------------
function isJavaScriptFile(string){
    let isItJsFile = string.endsWith(".js");
    return isItJsFile;
}
const myFile = isJavaScriptFile(".js");
console.log(myFile);