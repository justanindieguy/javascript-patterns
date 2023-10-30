const man = {
  hands: 2,
  legs: 2,
  head: 1,
};

if (typeof Object.prototype.clone === 'undefined') {
  Object.prototype.clone = function () {};
}

// Avoids printing out "clone" due to prototype chain.
const hasOwn = Object.prototype.hasOwnProperty;
for (const prop in man) {
  if (hasOwn.call(man, prop)) {
    console.log(`${prop}: ${man[prop]}`);
  }
}
