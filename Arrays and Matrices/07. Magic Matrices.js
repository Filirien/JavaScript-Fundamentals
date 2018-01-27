function magicMatrix (matrix = []) {
    let isMagic = true;
    let sum = matrix[0].reduce((a,b) => a + b);

    for (let row = 1; row < matrix.length; row++) {
        let columnSum = 0;
        for (let col = 0; col < matrix.length; col++) {
            columnSum += Number(matrix[col][row]);
        }
        if (sum != columnSum) {
            isMagic = false;
            break;
        }
    }
    return isMagic;
}