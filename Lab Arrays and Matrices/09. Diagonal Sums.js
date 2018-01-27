function diagonalSums(matrix) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < matrix.length; i++) {
        a += matrix[i][i];
        b += matrix[i][matrix.length - i - 1];
    }

    console.log(a + ' ' + b);
}
diagonalSums([[20, 40],
    [10, 60]])