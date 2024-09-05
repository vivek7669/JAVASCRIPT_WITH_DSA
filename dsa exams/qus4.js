// 4. Diagonal Traversal of a 2D Matrix

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const diagonalOrder = (matrix) => {
    const result = [];
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < rows + cols - 1; i++) {
        let intermediate = [];

        for (let j = 0; j < rows; j++) {
            let k = i - j;
            if (k >= 0 && k < cols) {
                intermediate.push(matrix[j][k]);
            }
        }

        if (i % 2 == 0) {
            intermediate.reverse();
        }

        result.push(...intermediate);
    }

    return result;
}

console.log(diagonalOrder(matrix));