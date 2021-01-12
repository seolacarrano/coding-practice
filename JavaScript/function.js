'use strict';
// allows to turn on strict mode
// stric mode forbids us to do certain things and creates a visible error

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// function fruitProcessor(numberOfApples, numberOfOranges) {
//     console.log(numberOfApples, numberOfOranges);
//     const juice = `Juice with ${numberOfApples} apples and ${numberOfOranges} oranges`
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice);




// // function declaration: function that can be used before it's declared
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1)


// // function expression: essentially a function value stored in a variable
// // expression produces value
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }
// const age2 = calcAge2(1991)
// console.log(age1, age2);

// // Arrow Function: great for a quick one-line functions. has no this keyword 
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991)
// console.log(age3);

// // Arrow Function 2
// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUntilRetirement(1991));

// // Arrow Function 3
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Joans'));


// //call a function in the other function 
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(numberOfApples, numberOfOranges) {
//     const applePieces = cutFruitPieces(numberOfApples);
//     const orangePices = cutFruitPieces(numberOfOranges);

//     // console.log(numberOfApples, numberOfOranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePices} oranges`
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (year) {
//     return 2037 - year;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//         // if console.log is below the return statement, it will not be executed
//         // beceause it's not going to read after return statement 
//         // so console.log should go above the return statement
//         // alt+up moves a line up
//     } else {
//         console.log(`${firstName} has already retired!`);
//         return -1;
//     }

//     return retirement;
//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Teddy'));

// //console.log is itself a function 
// //the argument that we pass into console.log function 
// //is what will get printed to the developer console


//Coding Challenge 
function calcAverage(one, two, three) {
    const average = (one + two + three) / 3
    return average
}
// const calcAverage = (a,b,c,) => (a+b+c) / 3;

const avgDolphins1 = calcAverage(44, 23, 71)
const avgKoalas1 = calcAverage(65, 54, 49)

const avgDolphins2 = calcAverage(85, 54, 41)
const avgKoalas2 = calcAverage(23, 34, 27)

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
    } else {
        return 'No team wons';
    }
}

const result = checkWinner(avgDolphins1, avgKoalas1);
console.log(result)

const result2 = checkWinner(avgDolphins2, avgKoalas2);
console.log(result2)
