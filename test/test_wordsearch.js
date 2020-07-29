const chai = require("chai");
const assert = chai.assert;

const wordSearch = require("../wordsearch.js");

describe("#wordSearch()", function () {
  it("should return false if the word is not present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK"
    );

    assert.isFalse(result);
  });

  it("should return true if the word is present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });
  it("should return true if the word is present vertically", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["B", "F", "C", "F", "Q", "U", "A", "L"],
        ["O", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["I", "F", "R", "E", "N", "E", "Y", "B"],
        ["E", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "BOWIE"
    );
    assert.isTrue(result);
  });
  it("should return true if the word is present backwards", function () {
    const result = wordSearch(
      [
        ["A", "W", "R", "E", "C", "A", "R", "T"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["B", "F", "C", "F", "Q", "U", "A", "L"],
        ["O", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["I", "F", "R", "E", "N", "E", "Y", "B"],
        ["E", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "TRACER"
    );
    assert.isTrue(result);
  });
  it("should return true if the word is present diagonally", function () {
    const result = wordSearch(
      [
        ["D", "W", "R", "E", "C", "A", "R", "T"],
        ["S", "I", "I", "N", "F", "E", "L", "D"],
        ["B", "F", "A", "F", "Q", "U", "A", "L"],
        ["O", "M", "J", "G", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "O", "E", "R", "L"],
        ["I", "F", "R", "E", "N", "N", "Y", "B"],
        ["E", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "L"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "DIAGONAL"
    );
    assert.isTrue(result);
  });
});
