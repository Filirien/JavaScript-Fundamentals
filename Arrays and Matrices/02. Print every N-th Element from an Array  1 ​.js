function nElement(input) {
    let n = Number(input[input.length-1]);
    let result = [];
    for (let i = 0; i < input.length-1; i+=n) {
        result.push(input[i]);
    }
    console.log(result.join('\n'));
}
nElement(['5','20','31','4','20','2']);