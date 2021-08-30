// null vs undefined
/*

Undefined :

1. Variable value not asssigned 
2. function but didn't write return anything 
3. Just wrote return but didn't rturn anything
4. parameter didn't pass 
5. property that didn't contain in  object
6. accessing array element out of range 
7. accesssing deleted element in an array 
8. exxplicitly set value  to undefined 

*/
let first;
// console.log(first); // undefined 

function second(x, y) {
    const sum = x + y;
}
//console.log(second(3, 5)) // undefined 

function add(a, b) {
    const sum = a + b;
    // return;
    if (a < b) {
        return;
    }

}

//console.log(add(4,5)); // undefined 

function double(a, b) {
    const result = a * b;
    return result;
}

//console.log(double(81)) // undefined 

const fifth = { name: 'bani', age: 18 };
console.log(fifth.phone); // undefined 


const sixth = [1, 2, 3, 4, 5];
//console.log(sixth[10]); // undefined 

delete sixth[2];
//console.log(sixth[2]); // undefined 

const seventh = undefined;
// console.log(seventh); // undefined


/*
null :

1. explicitly value to null


*/

const myobj = { ame: 'bani', profession: null }

/*

summary :

null means it is not contain
and undefined means it is not defined

*/








