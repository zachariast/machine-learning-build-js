const brain = require("brain.js");
const network = new brain.NeuralNetwork();

// Teams
// 0 = Red Wolfs
// 1 = White Wolfs
// 2 = Fast Lions
// 3 = Thunder
// 4 = London Kings
// 5 = Amsterdam Winners

// 0 if home team win and 1 if away team win

network.train([
  { input: [0, 1], output: [0] }, // Red Wolfs WIN
  { input: [0, 2], output: [0] }, // Fast Lions WIN
  { input: [1, 5], output: [1] }, // Amsterdam Winners WIN
  { input: [3, 4], output: [1] }, // London Kings WIN
  { input: [2, 4], output: [0] }, // Fast Lions WIN
  { input: [5, 0], output: [0] }, // Amsterdam Winners WIN
  { input: [5, 1], output: [0] } // Amsterdam Winners WIN
]);

const resolve = network.run([5, 1]); // Amsterdam Winners VS Red Wolfs

console.log(resolve);
