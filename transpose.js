const transpose = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;

  const newMatrix = [];

  for (let i = 0; i < col; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < row; j++) {
      newMatrix[i][j] = matrix[j][i];
    }
  }
  return newMatrix;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

module.exports = { transpose };
