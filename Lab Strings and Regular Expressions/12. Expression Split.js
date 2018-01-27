function expressionSplit(str) {

    let words = str.split(/[\(\),;\.\\\s.]+/g);
    console.log(words.join('\n'));
}
expressionSplit('let sum = 1 + 2;if(sum > 2){\\console.log(sum);}')