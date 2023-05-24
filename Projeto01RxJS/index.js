const path = require("path");
const fn = require("./functions");
const _ = require("lodash");
const { groupBy, mergeMap, toArray, map } = require("rxjs/operators");

const myPath = path.join(__dirname, "subtitles");

const symbols = [".", "?", "-", ",", '"', "_", "<i>", "</i>", "\r", "[", "]", "(", ")", "!", ":", ";", "♪", "$", "+"];

fn.readDir(myPath)
  .pipe(
    fn.filesEndedWith(".srt"),
    fn.readFile(),
    fn.splitStringBy("\n"),
    fn.removeOnlyNumbers(),
    fn.removeSymbols(symbols),
    fn.removeEmptyElements(),
    fn.splitStringBy(" "),
    fn.removeOnlyNumbers(),
    groupBy((el) => el.toLowerCase()), // return several observables
    mergeMap((group) => group.pipe(toArray())), // receive observable as parameter
    map((wordArray) => ({ word: wordArray[0].toLowerCase(), count: wordArray.length })),
    toArray(),
    map((arr) => _.sortBy(arr, (el) => -el.count)),
    fn.saveToFile("results.json")
  )
  .subscribe(console.log);
