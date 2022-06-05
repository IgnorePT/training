// EX: Potencia

const pow = (base, expoente) => {
    return Math.pow(base, expoente);
}

const powUsingFn = (base) => {
    return (exp = 0) => {
        return Math.pow(base, exp);
    }
}

const bits8 = pow(2, 8);
const powOf2 = powUsingFn(2);
console.log(bits8);
console.log(powOf2(8));


// Challenge
//SOMA - criar funcção soma(3)(4)(5)
//Calcular - Criar função calcular que receba 2 parametros consecutivos e uma função Ex: calcular(3)(2)(fn)


// Challege 1 
const challengeSum = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        } 
    }
}

const challengeSumResult = challengeSum(3)(2)(2);
console.log("Challenge 1: Sum Result: ", challengeSumResult);

// Challenge 2

const sum = (a, b) => a + b;
const minus = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

const calculate = (a) => {
    return (b) => {
        return (fn) => {
            return fn(a,b);
        }
    }
}

let result = calculate(3)(4)(sum);
console.log("Result for sum is: ", result);


result = calculate(3)(4)(minus);
console.log("Result for minus is: ", result);


result = calculate(10)(2)(divide);
console.log("Result for division is: ", result);

result = calculate(3)(4)(multiply);
console.log("Result for multiply is: ", result);