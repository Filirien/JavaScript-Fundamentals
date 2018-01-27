function cookingByNumber(input) {
    let num = input[0];
    let operations = input.slice(1);

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num -= num * 0.2;
                break;
        }
        console.log(num);
    }
}
cookingByNumber([32, 'chop', 'chop', 'chop', 'chop', 'chop']);