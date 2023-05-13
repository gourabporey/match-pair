const { describe, it } = require("node:test");
const { strictEqual, deepStrictEqual } = require("assert");
const { matchPair } = require("../src/match-pair");

describe("match-pair", () => {
  it("Should give one", () => {
    strictEqual(matchPair(), 1);
  })
})