function printArray(input) {
    let delimeter = input[input.length-1];
    let result = [];
    for (let i = 0; i < input.length - 1; i++) {
        if(i< input.length-2) {
            result.push(input[i] + delimeter);
        }else if(i === input.length - 2){
            result.push(input[i]);
        }
    }
    console.log(result.join(''))
}
printArray(['One','Two','Three','Four','Five','-']);