//  5.  ZTraversal of a 2D Matrix

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const zTraversal = (matrix) => {
    const result = [];
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < cols; i++) {
        result.push(matrix[0][i]);
    }

    for (let j = 1; j < rows && j < cols; j++) {
        result.push(matrix[j][cols - 1 - j]);
    }

    for (let i = 1; i < cols; i++) {
        result.push(matrix[rows - 1][i]);
    }

    return result;
}

console.log(zTraversal(matrix));