const matchPair = function (list1, list2) {
  const lookup = {};
  for (const text of list1) {
    lookup[text.slice(text.length - 4)] = text;
  }

  const list3 = list2.map((text) => {
    const precidingChars = text.slice(0, 4);
    return lookup[precidingChars] + text.slice(4);
  });

  return list3;
}

exports.matchPair = matchPair;