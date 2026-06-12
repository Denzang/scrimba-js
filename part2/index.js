// Push Pop Unshift Shift Challenge
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

// Removing Monaco using pop
largeCountries.pop();
console.log(`Array after removing Monaco: ${largeCountries}`);

// Shift removes first element from the arrray
largeCountries.shift();
console.log(`Array after shifting Tuvalu: ${largeCountries}`);

// Push adds an element to the last of the array
largeCountries.push("Pakistan");
console.log(`Array after pushing Pakistan: ${largeCountries}`);

// Unshift is used to add elements to the beginning of the array
largeCountries.unshift("China");
console.log(`Array after unshifting China: ${largeCountries}`);
