// Write a function:
// function solution(arr);
// that, given an array arr of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// Works as Prototype
const smallestPosibleInterger = (arr) => {
    // Problem Too Many Cycles
    //O(n*n)
    if (!arr.includes(1)) { mineSolution = 1 };

    const onlyPositives = arr.filter(val => val > 1).sort();

    for (let i = 0; i < onlyPositives.length; i++) {
        if (onlyPositives[i + 1] === 'undefined' || onlyPositives[i] + 1 !== onlyPositives[i + 1]) {
            return onlyPositives[i] + 1;
        }
    }
}

const isLessThanOne = (num) => {
    return num < 1;
}

const biggerThanSmaller = (num, smaller) => {
    return num > smaller;
}

const smallerThanCurrentValue = (num, current) => {
    return current > num;
}

const equalToSmaller = (num, smaller) => {
    return num === smaller;
}


const smallestPosibleInterger2 = (arr) => {

    let smallestInterger = 1;
    let currentSmaller = 1;

    arr.sort((a,b) => a - b);

    for (let i = 0; i < arr.length; i++) {


        if (isLessThanOne(arr[i])) {
            console.log("isLessThanOne");
            break;
        }

        if (equalToSmaller(arr[i], smallestInterger)) {
            currentSmaller = smallestInterger;
            smallestInterger = currentSmaller;
        }

        if (biggerThanSmaller(arr[i], smallestInterger) && smallerThanCurrentValue(arr[i], currentSmaller)) {
            currentSmaller = arr[i];
        }


    }

    return smallestInterger;


}


console.log(smallestPosibleInterger2([1, 3, 6, 4, 1, 2]))

function solution(A) {
    let smallestInterger = 1;
    let currentSmaller = 1;

    A.sort((a,b) => a - b);
    
    for (let i = 0; i < A.length; i++) {

        if (isLessThanOne(A[i])) {
            break;
        }
        
        if (equalToSmaller(A[i], smallestInterger)) {
            currentSmaller = smallestInterger + 1;
            smallestInterger = currentSmaller;
        }
    }

    return smallestInterger;
}