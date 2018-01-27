function calculator(a,b,symbol) {
    let add = function (c,d) { return c + d }
    let substract = function (c,d) { return c - d }
    let multiply = function (c,d) { return c * d }
    let divide = function (c,d) { return c / d }
    switch(symbol)
    {
        case '+': return add(a,b)
        case '-': return substract(a,b)
        case '*': return multiply(a,b)
        case '/': return divide(a,b)
    }
}

console.log(calculator(5, 6, '+'));