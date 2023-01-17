//const fs = require('fs')
//fs.readFileSync

//info: Another way to do it
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, "\n", second);
//output: Hello this is first text file \n Hello this is second text file

console.log(`${first}`);
//output: Hello this is first text file

//info: { flag: 'a' } appends the text in the given file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: \n ${first},\n ${second}`,
  { flag: "a" }
);
//output: This writes in the file
