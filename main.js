const { matchPair } = require("./src/match-pair.js");
const fs = require("fs");

const convertToList = function (texts) {
  return texts.split("\n");
}

const convertToString = function (elements) {
  return elements.join("\n");
}

const main = function (args) {
  const file1Content = fs.readFileSync(args[0], "utf8");
  const file2Content = fs.readFileSync(args[1], "utf8");

  const file1Texts = convertToList(file1Content);
  const file2Texts = convertToList(file2Content);

  const file3Texts = matchPair(file1Texts, file2Texts);
  const file3Content = convertToString(file3Texts);

  fs.writeFileSync("./match-data/match-data-output-final.txt", file3Content);
}

main(process.argv.slice(2));
