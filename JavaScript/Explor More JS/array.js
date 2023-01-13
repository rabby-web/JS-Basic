const friend = [10, 11, 12, 13, 14, 15, 16, 17];
console.log(Array.isArray(friend));
console.log(friend.includes(13));
console.log(friend.includes(18));
if(friend.indexOf(20) !== -1){

}

// concat:
const newFriendAge = [20, 21, 22, 23, 24, 25, 26];
const allAge =newFriendAge.concat(friend);
console.log(allAge);