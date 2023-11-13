/**
 * Reverse a string
 *
 * @param {String} originalStr input string to reverse
 * @returns {String} The reversed string
 */
const reverse = (originalStr) => {
  let reversedStr = '';

  for (let i = originalStr.length - 1; i >= 0; i--) {
    reversedStr += originalStr[i];
  }

  return reversedStr;
};

const myStr = 'Hello, World!';
console.log(reverse(myStr));
