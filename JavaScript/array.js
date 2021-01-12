const friends = ['Michael', 'Steven', 'Peter'];
// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends[2]);

// const jonas = ['Jonas', 'Schmedtamnn', 2037 - 1991]

//add elements to array
const newLength = friends.push('Jay'); // add to the last
console.log(friends);

friends.unshift('John'); // add to the first
console.log(friends);


// remove elements from array
const popped = friends.pop(); // last element
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven')); // return index of Steven

console.log(friends.includes('Steven'));
console.log(friends.includes('Sara'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

