if (typeof String.prototype.greet !== 'function') {
  String.prototype.greet = function () {
    return `Hello, ${this}!`;
  };
}

const myName = 'Emmanuel';
console.log(myName.greet());
