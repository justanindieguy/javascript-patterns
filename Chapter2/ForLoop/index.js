const users = [
  { username: 'user1', password: 'foo' },
  { username: 'user2', password: 'dummyPassword' },
  { username: 'user3', password: 'lengthyPass' },
];

// Caching the length in 'n' variable.
function forLoop() {
  console.log('-- For Loop:');
  for (let i = 0, n = users.length; i < n; i++) {
    console.log(`User: ${users[i].username}`);
  }
}

// Comparing against 0
function optimizedForLoop() {
  console.log('-- Optimized For Loop:');

  for (let i = users.length; i--; ) {
    console.log(`User: ${users[i].username}`);
  }
}

function whileLoop() {
  console.log('-- While Loop:');
  let i = users.length;
  while (i--) {
    console.log(`User: ${users[i].username}`);
  }
}

forLoop();
optimizedForLoop();
whileLoop();
