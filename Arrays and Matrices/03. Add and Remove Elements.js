function addAndRemoveElements(input) {
    let result = [];
    for (let i = 1; i <= input.length; i++) {
        switch (input[i - 1]) {
            case "add":
                result.push(i);
                break;
            case "remove":
                result.pop();
                break;
        }
    }
    if (result.length > 0) {
        console.log(result.join('\n'));
    }else{
        console.log('Empty')
    }
}
addAndRemoveElements(['remove','remove','remove','remove'])