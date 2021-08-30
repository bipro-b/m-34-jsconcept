

// summary

const nums = [1, 2, 3, 4, 5, 6, 7];
//console.log(typeof nums)  // 0bject

//Array.isArray(nums);

function triple(x, y, z) {
    //  x = 909;
    x.age = 9999;

}
//console.log(typeof triple) // function
//console.log(triple.length); // 3
//console.log(typeof null); // object

// primitive type doesnot mind after chaning in function

const x = 3;
const y = 4;
const z = 7;
//triple(x, y, z);
//console.log(y) // 4     no change 


const myobj = { name: 'Kamal', age: 18 };
triple(myobj);
console.log(myobj.age) // 9999   value should be changed




