const Blockchain = require('./blockchain');
const solution = new Blockchain();

const previousBlockHash = 'HKTYKVKVYTCJYTCJYTCVJRDJC';
const currentBlockData = [
  {
    amount: 10,
    sender: 'HGDRVHGFBJHFJF',
    recipient: 'FSDVHGGKUGKFJYT'
  },
  {
    amount: 30,
    sender: 'KJGKJVKUHGFBJHFJF',
    recipient: 'JHDHDVDTKUGKFJYT'
  },
  {
    amount: 200,
    sender: 'JHFJHGJYFTJYDJ',
    recipient: 'HGRDFJFKFGJDD'
  },
];

// Find the correct nounce where the hash starts with 0000
console.log(solution.proofOfWork(previousBlockHash, currentBlockData));

// Check the hash starts with 0000
console.log(304, solution.hashBlock(previousBlockHash, currentBlockData, 304)); // 00
console.log(9986, solution.hashBlock(previousBlockHash, currentBlockData, 9986)); // 000
console.log(54816, solution.hashBlock(previousBlockHash, currentBlockData, 54816)); // 0000