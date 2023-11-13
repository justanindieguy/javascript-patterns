const inNewLine = () => {
  return
  // Unreachable code...
  {
    name : 'Tony'
  };
};

const inTheSameLine = () => {
  return {
    name: 'Tony'
  };
}

console.log(inNewLine()); // undefined
console.log(inTheSameLine()); // { name: 'Tony' }

/**
 * Always use curly braces and always put the opening one on the same line as
 * the previous statement.
 */
