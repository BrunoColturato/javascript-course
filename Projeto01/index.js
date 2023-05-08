const path = require("path");
const fn = require("./functions");

const myPath = path.join(__dirname, "subtitles");

const symbols = [".", "?", "-", ",", '"', "_", "<i>", "</i>", "\r", "[", "]", "(", ")", "!", ":", ";", "♪"];

fn.readDir(myPath) // Get name of files
  .then(fn.filesEndedWith(".srt")) // Filter valid files
  .then(fn.readFiles) // Get content of files
  .then(fn.joinArrayBy(" ")) // Join all array of contents in one big string
  .then(fn.splitStringBy("\n")) // Turning the big string in one big array of lines
  .then(fn.removeEmptyElements) // Remove empty lines
  .then(fn.removeIfPattern("-->")) // Remove timestamps
  .then(fn.removeOnlyNumbers) // Remove lines with just numbers
  .then(fn.removeSymbols(symbols)) // Remove unwanted symbols from lines
  .then(fn.joinArrayBy(" ")) // Merge lines again
  .then(fn.splitStringBy(" ")) // Split in array of words
  .then(fn.removeEmptyElements) // Remove empty words
  .then(fn.removeIfHasNumber) // Remove words with numbers
  .then(fn.countWords) // Count the frequency of words
  .then(fn.sortObjBy("count")) // Sort frequency by non-increasing order
  .then(fn.saveToFile("results.json"))
  .catch(console.error);
