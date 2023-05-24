const fs = require("fs");
const path = require("path");
const { Observable } = require("rxjs");

// Get full path of each file
function readDir(myPath) {
  return new Observable((subscriber) => {
    try {
      // Data stream
      fs.readdirSync(myPath).forEach((file) => {
        subscriber.next(path.join(myPath, file));
      });
      subscriber.complete();
    } catch (e) {
      subscriber.error(e);
    }
  });
}

// Operator: Filter files that end with a specific pattern
function filesEndedWith(pattern) {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      if (text.endsWith(pattern)) {
        subscriber.next(text);
      }
    },
  }));
}

// Read a file given its path
function readFile() {
  return createPipeableOperator((subscriber) => ({
    next(myPath) {
      try {
        const data = fs.readFileSync(myPath, { encoding: "utf-8" });
        subscriber.next(data.toString());
      } catch (e) {
        subscriber.error(e);
      }
    },
  }));
}

// Reject empty data
function removeEmptyElements() {
  // trim() removes whitespaces from both ends of a string.
  // If the element is empty, trim() will return nothing (false).
  // For filter, we need to convert empty string (false) to boolean, thus
  // the double negation.
  return createPipeableOperator((subscriber) => ({
    next(text) {
      if (!!text.trim()) {
        subscriber.next(text.trim());
      }
    },
  }));
}

/**
 * Notes:
 * In JS:
 * NaN === NaN : false
 * NaN !== NaN : true
 * parseInt() return a number or NaN
 */
function removeOnlyNumbers() {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      const num = parseInt(text.trim());
      // if number, gets false; if NaN, gets true
      if (num !== num) {
        subscriber.next(text);
      }
    },
  }));
}

// Remove unwanted symbols from string
function removeSymbols(symbols) {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      // Iterate over each symbol to remove it from string
      const noSymbols = symbols.reduce((newText, symbol) => {
        return newText.split(symbol).join(""); // Remove symbol from string
      }, text);

      subscriber.next(noSymbols);
    },
  }));
}



// Save array to file
function saveToFile(fileName) {
  return createPipeableOperator((subscriber) => ({
    next(arr) {
      let success = false;
      const jsonContent = JSON.stringify(arr, null, 1);
      fs.writeFile("./" + fileName, jsonContent, "utf8", (err) => {
        if (err) subscriber.error(err);
        else success = true;
      });
      if (success) {
        subscriber.next(`Results saved in file '${fileName}'`);
      }
    },
  }));
}

// Generate a stream of lines
function splitStringBy(separator) {
  return createPipeableOperator((subscriber) => ({
    next(str) {
      str.split(separator).forEach((part) => subscriber.next(part));
    },
  }));
}

function createPipeableOperator(operatorFn) {
  return function (source$) {
    return new Observable((subscriber) => {
      // Recebendo objeto com as funcoes
      const sub = operatorFn(subscriber);
      // Setando funcoes padrao
      source$.subscribe({
        next: sub.next,
        error: sub.error || ((e) => subscriber.error(e)),
        complete: sub.complete || (() => subscriber.complete()),
      });
    });
  };
}

module.exports = {
  readDir,
  filesEndedWith,
  readFile,
  removeEmptyElements,
  removeOnlyNumbers,
  removeSymbols,
  splitStringBy,
  saveToFile,
};
