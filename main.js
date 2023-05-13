const { matchPair } = require("./src/match-pair");
const fs = require("fs");

const convertToList = function (texts) {
  return texts.split("\n");
}

const convertToString = function (elements) {
  return elements.join("\n");
}

const main = function (args) {
  const file1Text = fs.readFileSync(args[0], "utf8");
  const file2Text = fs.readFileSync(args[1], "utf8");

  const file1texts = convertToList(file1Text);
  const file2texts = convertToList(file2Text);

  const file3Texts = matchPair(file1texts, file2texts);
  const file3Content = convertToString(file3Texts);

  fs.writeFileSync("./match-data/match-data-output-final.txt", file3Content);
}

main(process.argv.slice(2));