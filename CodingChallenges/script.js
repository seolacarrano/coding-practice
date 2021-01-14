// // Sales By Match

// function SockMerchant(n, ar) {
//     let pairOfSocks = 0;
//     let i;

//     ar.sort();
//     for (i = 0; i < n; i++) {
//         if (ar[i] === ar[i + 1]) {
//             i++
//             pairOfSocks++;
//         }
//     }
//     return pairOfSocks

// }

// console.log(SockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
// console.log(SockMerchant(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]))
// // compare the first index to the next one
// // if they are the same, pairOfSocks goes up 
// // and the indexs should be eliminated
// // else pairOfSocks remains the same 

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

// calcAge: function (birthYear) {
//     return 2037 - birthYear;
// }

// calcAge: function () {
//     console.log(this)
//     return 2037 - this.birthYear;
// }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };

// // console.log(`${jonas.firstName} has ${jonas.friends.length} ${jonas.friends} and his best friend is called ${jonas.friends[0]}`)

// console.log(jonas.calcAge(1991));

// console.log(jonas.getSummary());


// "Jonas is a 46-year old teacher, and he has a driver's license"


// coding challenge 

function calcBMI(mass, height) {
    const BMI = mass / height ** 2
    return BMI
}

const mark = {
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2
        return this.BMI;
    }
}

const john = {
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2
        return this.BMI;
    }
}

console.log(` John's BMI(${john.calcBMI()}) is lower than Mark's(${mark.calcBMI()})`)