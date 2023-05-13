const matchPair = function (list1, list2) {
  const list3 = [];

  const lookup1 = {};
  for (const text of list1) {
    lookup1[text.slice(text.length - 4)] = text;
  }

  const lookup2 = {};
  for (const text of list2) {
    lookup2[text.slice(0, 4)] = text;
  }

  for (const key in lookup1) {
    list3.push(lookup1[key] + lookup2[key].slice(4));
  }

  return list3;
}

exports.matchPair = matchPair;