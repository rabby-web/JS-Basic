// Fast search option (includes)---------
const lyrics = "The winter morning is misty and cool.There is dance fog every is look thing haze";
const doesExist = lyrics.includes("The");
console.log(doesExist);

const searchString = "Winter";
const lowerCase = searchString.toLowerCase();
const exist = lowerCase.includes(lowerCase);
console.log(exist);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExistOneLine);

// Second Search Option (indexOf)-------------------
console.log(lyrics.indexOf("cool"));
console.log(lyrics.indexOf("iss"));

if(lyrics.indexOf('looking') !== -1){
    console.log("Exit inside the string");
}
else{
    console.log("can not find it");
}

// startsWith------------
console.log(lyrics.startsWith("The"));

// endWith--------------
const fileName = "pic.jpeg";
const otherFile = "picture.png";
console.log(fileName.endsWith(".jpeg"));