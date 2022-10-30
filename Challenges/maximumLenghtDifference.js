// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string


const a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

Array.prototype.sortByWordsLenghtSize = function () { return this.sort((a, b) => b.length - a.length) };

const mxdiflg = (a1, a2) => {

    const sortedA1 = a1.sortByWordsLenghtSize();
    const sortedA2 = a2.sortByWordsLenghtSize();

    console.log("A1 - 0: ", sortedA1[0].length);
    console.log("A2 - 0: ", sortedA2[0].length);
    console.log("A1 -1: ", sortedA1[a1.length -1].length);
    console.log("A2 - 1: ",sortedA2[a2.length -1].length);

    console.log(sortedA1[0].length >= sortedA2[0].length)
    


    return (sortedA1[0].length >= sortedA2[0].length) ? Math.abs(sortedA1[0].length - sortedA2[a2.length - 1].length) : Math.abs(sortedA1[a1.length - 1].length - sortedA2[0].length);
}

console.log(mxdiflg(a1, a2));