const matchPair = function (list1, list2) {
  const lookup = {};

  for (const word of list1) {
    const lastFourChars = word.slice(word.length - 4);
    lookup[lastFourChars] = word;
  }

  const mergedWords = list2.map((word) => {
    const firstFourChars = word.slice(0, 4);
    return lookup[firstFourChars] + word.slice(4);
  });

  return mergedWords;
}

exports.matchPair = matchPair;