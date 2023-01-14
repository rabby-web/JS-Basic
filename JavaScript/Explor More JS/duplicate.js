const names = ["apple", "orange", "banana", "mango","apple", "orange", "banana", "coconut"];
// console.log(names);
function removeDuplicate(names){
    unique = [];
    for(let i = 0; i < names. length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
const newName = removeDuplicate(names);
console.log(newName);