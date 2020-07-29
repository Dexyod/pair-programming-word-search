const { transpose } = require("./transpose");

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const reverseWord = word.split("").reverse().join("");
  //   const splitWord = word.split("");
  for (const l of horizontalJoin) {
    if (l.includes(word) || l.includes(reverseWord)) return true;
  }
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  for (const l of verticalJoin) {
    if (l.includes(word) || l.includes(reverseWord)) return true;
  }

  //   let count = 0;
  //   let result = [];
  //   for (let i = 0; i < letters.length; i++) {
  //     for (let j = 0; j < letters[0].length; j++) {
  //       if (splitWord[i] === letters[j + count][i + count]) {
  //         result.push(splitWord[i]);
  //         // console.log(letters[j + count][i + count]);
  //         count++;
  //       }
  //     }
  //     console.log(result);
  return false;
};

module.exports = wordSearch;
