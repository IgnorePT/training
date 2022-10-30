/* 
Write a funtion that given an interger N, return a string, consisting of N lowercase letters (a-z) such that each letter occurs an odd number of times. We only care about occurrences of the letters that appear at least once in the result.

Examples:

1- Given N = 4, the functions may return "code" (each of the letters "c", "o", "d", "e" occurs once). Other correct answers are: "cats", "uutu" or "xxxy".

2- Given N = 7, the function may return "gwgtgww" ("g" amd "w" occur three timmes each and "t" occurs once).

3- Given N = 1, the function must return "z"

Write an efficient algorithm for the following assumpions:

    - N is an interger within the range [1...200,000].
*/
const solution = (N) => {

    if (N === 1) {
        return "z";
    }

    if (N % 2 === 0) {
        return "a".repeat(N - 1) + "z"
    }

    return "a".repeat(N);
}

const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

const findOdds = (N) => {
    let oddFound = [];

    for (var i = N; i > 0; i--) {
        if (i % 2 !== 0) {
            oddFound = [...oddFound, i]

            if ((N - i) === 1) {
                oddFound = [...oddFound, N - i]
            }

            i = N - i;
        }
    }

    return oddFound;
}

const solution2 = (N) => {

    if (N === 1) {
        return "z"
    }
    if (N % 2 === 0) {
        return findOdds(N).map((number, index) => alphabet[index].repeat(number)).join("")
    }

    return alphabet[1].repeat(N)
}

