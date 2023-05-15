const fs = require("fs");
const path = require("path");

// Get full path of each file
function readDir(myPath) {
  return new Promise((resolve, reject) => {
    try {
      let files = fs.readdirSync(myPath);
      const fullPath = files.map((file) => path.join(myPath, file));
      resolve(fullPath);
    } catch (e) {
      reject(`[Unable to read files full path]: ${e}`);
    }
  });
}

// Filter files that end with a specific pattern
function filesEndedWith(pattern) {
  return function (arr) {
    return arr.filter((el) => el.endsWith(pattern));
  };
}

// Read a file given its path
function readFile(myPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(myPath, { encoding: "utf-8" }, (err, data) => {
      if (data) {
        resolve(data.toString());
      } else {
        reject(`[Unable to read file]: ${err}`);
      }
    });
  });
}

// Read all files given an array of paths of files
function readFiles(paths) {
  return Promise.all(paths.map((path) => readFile(path)));
}

// Remove empty elements from array of strings
function removeEmptyElements(arr) {
  // trim() removes whitespaces from both ends of a string.
  // If the element is empty, trim() will return nothing (false).
  // For filter, we need to convert empty string (false) to boolean, thus
  // the double negation.
  return arr.filter((el) => !!el.trim());
}

// Remove elements from array of string based on a given pattern
function removeIfPattern(pattern) {
  return function (arr) {
    return arr.filter((el) => !el.includes(pattern));
  };
}

/**
 * Notes:
 * In JS:
 * NaN === NaN : false
 * NaN !== NaN : true
 * parseInt() return a number or NaN
 */
function removeOnlyNumbers(arr) {
  return arr.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num; // if number, returns false; if NaN, return true
  });
}

// Remove unwanted array of symbols from array of strings
function removeSymbols(symbols) {
  return function (arr) {
    // Iterate over all elements of the array
    return arr.map((str) => {
      // Iterate over each symbol to remove it from string
      return symbols.reduce((newText, symbol) => {
        return newText.split(symbol).join(""); // Remove symbol from string
      }, str);
    });
  };
}

// Remove string from array if the string has numbers
function removeIfHasNumber(arr) {
  return arr.filter((str) => !/\d/.test(str));
}

// Making object in the form
// {
//   {"word": "word01", "count": word01Count},
//   ...
// }
function countWords(words) {
  return Object.values(
    // The reduce makes an object in the format:
    // {
    //   "word01": {"word": "word01", "count": word01Count},
    //   ...
    // }
    words.reduce((wordObj, word) => {
      const w = word.toLowerCase();
      const count = wordObj[w] ? wordObj[w].count + 1 : 1;
      wordObj[w] = { word: w, count };
      return wordObj;
    }, {})
  );
}

// Custom sort of array of objects
function sortObjBy(attr, increasing = false) {
  return function (arr) {
    let compare;
    if (increasing) {
      compare = (o1, o2) => o1[attr] - o2[attr];
    } else {
      compare = (o1, o2) => o2[attr] - o1[attr];
    }
    return arr.sort(compare);
  };
}

// Save array to file
function saveToFile(fileName) {
  return function (arr) {
    const jsonContent = JSON.stringify(arr, null, 1);
    fs.writeFile("./" + fileName, jsonContent, "utf8", (err) => {
      if (err) throw err;
      else console.log(`Results saved in file '${fileName}'`);
    });
  };
}

// General array functions
const joinArrayBy = (separator) => (arr) => arr.join(separator);
const splitStringBy = (separator) => (str) => str.split(separator);

module.exports = {
  readDir,
  filesEndedWith,
  readFile,
  readFiles,
  removeEmptyElements,
  removeIfPattern,
  removeOnlyNumbers,
  removeSymbols,
  joinArrayBy,
  splitStringBy,
  removeIfHasNumber,
  countWords,
  sortObjBy,
  saveToFile,
};
