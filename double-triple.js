// == vs ====

/*
we can compare few primitive type using ==



*/


const first = 2; // 1 == true // 
const second = '2';// true 
if (first === second) {
    console.log('Condition is true'); // for ==
}
else {
    console.log('Condition is false'); // ===
}
// double equal actualyy cannot check ,it doesn't check data types , implicite coersion  it ... 

// triple  equal check strictly , it check data types ..

// more comparison

const a = { name: 'ali' };
const b = { name: 'ali' };

if (a === b) {
    console.log('both are same');
}
else {
    console.log('not same ');
}



