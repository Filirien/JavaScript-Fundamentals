function lastKNums (n, k) {
    n=Number(n);
    k=Number(k);
    let resultNumbers = [];
    resultNumbers.push(1);

    for (let i = 1; i < n; i++) {

        let sum = 0;

        for (let j = resultNumbers.length - 1; j >= 0 && j >= i - k; j--) {
            sum += Number(resultNumbers[j]);
        }
        resultNumbers.push(sum);
    }
    console.log(resultNumbers.join('\n'))
}
lastKNums(6,3)