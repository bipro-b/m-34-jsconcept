// Advanced  callback functoin and pass differetn function

function welcomeMessage(name, greetHandler) {
    // console.log(greetHandler);
    greetHandler(name);

}

function greetMoring(name) {
    console.log('Good Morning', name)
}

function greetAfternoon(name) {
    console.log('Good Afternoon', name)
}
function greetEvening(name) {
    console.log('Good Evening', name)
}

welcomeMessage('Bani', greetMoring);
welcomeMessage('Bipro', greetAfternoon);
welcomeMessage('Baby', greetEvening);