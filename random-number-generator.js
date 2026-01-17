const fs = require("fs");

const seed = process.argv[2] ?? "default";
const number = Math.floor(Math.random() * 100);

const output = `Seed: ${seed}\nRandom Number: ${number}\n`;
fs.writeFileSync("report.txt", output);

console.log(output);
