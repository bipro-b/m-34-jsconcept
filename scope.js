// block scope , global scope , hoisting

const favNum = 7;  // global scope 

function add(first, second) {
    //console.log(mood); // hoisting 
    const result = first + second;

    if (result > 9) {
        // const mood ='happy'; // if var used then it global scope 
        var mood = 'happy';
        // console.log(mood); // block scope 
    }
    console.log(mood);
}
const sum = add(11, 15);
// console.log(result); // moood is noot defined
