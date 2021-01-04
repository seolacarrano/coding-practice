'use strict';
// allows to turn on strict mode
// stric mode forbids us to do certain things and creates a visible error

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

function fruitProcessor(numberOfApples, numberOfOranges) {
    console.log(numberOfApples, numberOfOranges);
    const juice = `Juice with ${numberOfApples} apples and ${numberOfOranges} oranges`
    return juice;
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice);
