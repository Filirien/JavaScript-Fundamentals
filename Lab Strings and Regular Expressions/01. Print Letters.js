function printLetters(arr) {

    for (let word in arr) {
        console.log(`str[${word}] -> ${arr[word]}`)
    }
}
printLetters(['Hello, World!'])