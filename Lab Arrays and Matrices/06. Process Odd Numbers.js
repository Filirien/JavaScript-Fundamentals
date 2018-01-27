function OddNums(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if(i % 2 === 1) {
            result.push(Number(input[i])*2);
        }
    }
    result.reverse()
    console.log(result.join(' '))
}
OddNums([10, 15, 20, 25])