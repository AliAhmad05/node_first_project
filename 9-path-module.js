const path = require("path");

console.log(path.sep);
// output: \

const filePath = path.join("/content", "subFolder", "test.txt");
console.log(filePath);
// output: \content\subFolder\test.txt

// get the last of filePath
const base = path.basename(filePath);
console.log(base);
// output: test.txt

const absolute = path.resolve(__dirname, "content", "subFolder", "test.txt");
console.log(absolute);
// output: C:\Users\ApeX\Desktop\Development\NodeJS\content\subFolder\test.txt
