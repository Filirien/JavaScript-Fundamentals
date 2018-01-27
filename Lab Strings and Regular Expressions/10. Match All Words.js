function matchAllWords(text) {
    if (Array.isArray(text)){
        text = text[0];
    }
    let words = text.match(/\w+/g);
    console.log(words.join('|'));;
}
matchAllWords(['A Regular Expression needs to have the global flag in order to match all occurrences in the text']);