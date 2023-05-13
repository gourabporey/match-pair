const { describe, it } = require("node:test");
const { strictEqual, deepStrictEqual } = require("assert");
const { matchPair } = require("../src/match-pair");

describe("match-pair", () => {
  it("Should give the combined text if only one pair is present", () => {
    deepStrictEqual(matchPair(["gourab"], ["urab56"]), ["gourab56"]);
  });

  it("Should give the combined texts for more than one element present", () => {
    deepStrictEqual(matchPair(["gourab", "567milan"], ["ilan34", "urab56"]), ["gourab56", "567milan34"]);
  });
})