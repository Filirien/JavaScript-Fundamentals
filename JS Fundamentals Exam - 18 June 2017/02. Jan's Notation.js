function janNotation(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if(typeof(input[i]) ==="number"){
            result.push(input[i]);
        }else{
            if(result.length < 2){
                console.log('Error: not enough operands!');
                return;
            }
            let num1 = result.pop();
            let num2 = result.pop();
            switch (input[i]){
                case '+':
                    result.push(num2 + num1);
                    break;
                case '-':
                    result.push(num2 - num1);
                    break;
                case '*':
                    result.push(num2 * num1);
                    break;
                case '/':
                    result.push(num2 / num1);
                    break;
                default:
                    break;
            }
        }
    }
    if(result.length > 1){
        console.log('Error: too many operands!')
        return;
    }
    console.log(result[0])
}
janNotation([31, 2, '+', 11, '/']);