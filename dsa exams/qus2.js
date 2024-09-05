// 2. Search in a 2D Matrix

const matrix = [
    [1, 3, 5],
    [7, 9, 11],
    [13, 15, 17]
];
const target = 9;

const searchMatrix = (matrix, target) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == target) {
                return true;
            }
        }
    }
    return false;
}

console.log(searchMatrix(matrix, target));