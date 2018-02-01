function getUniqueWords(input) {
    let text = input.join('\r\n');
    let words = text.split(/\W+/)
        .filter(e => e !== '')
        .map(e => e.toLowerCase());

    let result = new Set();
    for (let word of words) {
        result.add(word);
    }

    console.log([...result].join(', '));
}