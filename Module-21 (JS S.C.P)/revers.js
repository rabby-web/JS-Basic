function reversWord(str) {
    const words = str.split(" ");
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i]
        result.push(element)
    }
    const revesed = result.join(" ")
    return revesed;
}
const myString = "I am a good boy"
reversWord(myString);