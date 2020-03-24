const brain = require("brain.js");
const network = new brain.NeuralNetwork();
const data = require("./training-data");

const trainingData = data.map(item => ({
  input: item.input,
  output: item.output
}));

const lstmBrain = new brain.recurrent.LSTM(); // Long Short Term Memory

lstmBrain.train(trainingData, {
  iterations: 1000
});

const resolve = lstmBrain.run("hair pink");

console.log(`I guess that ${resolve} told it`);
