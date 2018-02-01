function countWords(input) {
    let text = input.join('\r\n');
    let result = {};
    let words = text
        .split(/[^\w]+/g)
        .filter(e => e !== '');
    for (let word of words) {
        if(!result.hasOwnProperty(word)){
            result[word] = 0;
        }
        result[word]++;
    }
    console.log(JSON.stringify(result))
}