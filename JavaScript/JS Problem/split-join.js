// split-----------------
const lyrics = "The winter morning is misty and cool. There is dance fog every is look thing haze. The winter morning is misty and cool.";
const parts = lyrics.split(" ");
const sentence = lyrics.split(".");
const word = lyrics.split("");
console.log(parts, sentence, word);

// slice-----------------
const partial = lyrics.slice(10, 20);
const partial1 =lyrics.substring(10, 20);
console.log(partial, partial1);

// join-----------------
const lines =[
    'The winter morning is misty and cool',
    'There is dance fog every is look thing haze',
    'The winter morning is misty and cool',
  ];
const newSong = lines.join(":");
console.log(newSong);