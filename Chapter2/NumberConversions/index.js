const month = '06';
const year = '09';

/**
 * The second parameter in parseInt function is radix. It is recommended to
 * always specify it.
 */
console.log('--- parseInt radix ---');
console.log(parseInt(month, 10)); // 6
console.log(parseInt(year, 10)); // 9

// Alternative ways to convert a string to a number
console.log('--- alternative ways to convert a string to a number ---');
console.log(+'08'); // 8
console.log(Number('08')); // 8

// parseInt parses and does not simply convert
console.log('--- difference between parseInt and other ways ---');
console.log(parseInt('08 hello')); // 8
console.log(Number('08 hello')); // NaN
