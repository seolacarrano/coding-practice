// const friends = ['Michael', 'Steven', 'Peter'];
// // const years = new Array(1991, 1984, 2008, 2020);

// // console.log(friends[0]);

// // console.log(friends.length);
// // console.log(friends[friends.length - 1]);

// // friends[2] = 'Jay';
// // console.log(friends[2]);

// // const jonas = ['Jonas', 'Schmedtamnn', 2037 - 1991]

// //add elements to array
// const newLength = friends.push('Jay'); // add to the last
// console.log(friends);

// friends.unshift('John'); // add to the first
// console.log(friends);


// // remove elements from array
// const popped = friends.pop(); // last element
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven')); // return index of Steven

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Sara'));

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }



// Coding Challenge

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        const tip = bill * 0.15
        return tip
    } else {
        const tip = bill * 0.2
        return tip
    }
}
// ternary function
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// arrow function 
// const calcTip = bill => bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(250))
console.log(calcTip(4500))

const bills = [125, 555, 44];
console.log(calcTip(bills[0]))
console.log(calcTip(bills[1]))
console.log(calcTip(bills[2]))
//const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//console.log(tips)


const total = bills[0] + calcTip(bills[0])
// const totals = [bills[0] + tips[0], [bills[1] + tips[1], [bills[2] + tips[2]]
console.log(total)