// closure , encaosulation

function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}

let clock1 = stopWatch();
let clock2 = stopWatch();
console.log(clock1());//1
console.log(clock1());//2
console.log(clock1());//3
console.log(clock1());//4
console.log(clock2());//1
console.log(clock2());//2
console.log(clock2());//3
console.log(clock1());//5

// Clousere : A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). ... In JavaScript, closures are created every time a function is created, at function creation time.
