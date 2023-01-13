 function reversString (text){
    let reversed = " ";
    for(i = text.length-1; i >= 0; i--){
        const element = text[i];
        reversed = reversed + element;
        console.log(element,element);
    }
    return reversed
 }
 const myString = "I am a good boy";
 const re = reversString(myString);
 console.log(re);