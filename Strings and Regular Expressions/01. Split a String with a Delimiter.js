function splitString(str, delimiter) {
    let result = str.split(delimiter);
    for (let element of result) {
        console.log(element);
    }
}
splitString('One-Two-Three-Four-Five','-')