function biggestElement(matrix) {
    let result = Number.NEGATIVE_INFINITY;
    for (let obj of matrix) {
        for (let num of obj) {
            result = Math.max(result,num)
        }
    }
    console.log(result)
}
biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]])