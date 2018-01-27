function extract(input) {
    let result = [];
    input = input.map(Number);
    result.push(input[0]);
    for (let i = 1; i <= input.length; i++) {
        if(result[result.length -1] <= input[i]){
            result.push(input[i]);
        }
    }
    console.log(result.join('\n'));
}
extract([
    '1',
    '3',
    '8',
    '4',
    '10',
    '12',
    '3',
    '2',
    '24']);