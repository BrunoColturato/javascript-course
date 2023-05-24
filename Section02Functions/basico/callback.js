const fs = require("fs"); // file system
const path = require("path");

const caminho = path.join(__dirname, "data.txt");

console.log("Start...");

// Assync file reading
fs.readFile(caminho, (err, data) => {
  if (data) {
    console.log(data.toString());
  } else {
    console.log(err.message);
  }
});

console.log("End...");
