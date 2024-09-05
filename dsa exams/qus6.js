// 6. N Traversal of a 2D Matrix

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const nTraversal = (matrix) => {
    const n = matrix.length;
    const result = [];

    for (let i = n - 1; i >= 0; i--) {
        result.push(matrix[i][0]);
    }

    for (let j = 1; j < n; j++) {
        result.push(matrix[j][j]);
    }

    for (let i = n - 2; i >= 0; i--) {
        result.push(matrix[i][n - 1]);
    }

    return result;
}
console.log(nTraversal(matrix));