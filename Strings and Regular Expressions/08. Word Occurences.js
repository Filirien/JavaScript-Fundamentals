function countWordOccurrences(text, word) {
    let regex = new RegExp('\\b'+word+'\\b', 'gi');
    let result = text.match(regex);
    if (result) {
        return result.length
    }

    return 0;
}