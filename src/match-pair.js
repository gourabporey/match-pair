const matchPair = function (list1, list2) {
  const list3 = [];

  for (const text1 of list1) {
    for (const text2 of list2) {
      if (text1.slice(text1.length - 4) === text2.slice(0, 4)) {
        list3.push(text1 + text2.slice(4));
      }
    }
  }

  return list3;
}

exports.matchPair = matchPair;