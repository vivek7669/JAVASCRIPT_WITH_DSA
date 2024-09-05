//  1. Rotate a 2D Matrix by 90 Degrees Clockwise

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rotateMatrix = (matrix) => {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = matrix[i][j];
        }
    }

    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;
}

const rotatedMatrix = rotateMatrix(matrix);

console.log(rotatedMatrix);