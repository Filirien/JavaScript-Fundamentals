function extractText(text) {
    let result = [];
    let startIndex = text.indexOf('(');
    while(startIndex > -1){
        let endIndex = text.indexOf(')',startIndex);
        if(endIndex == -1){
            break;
        }
        result.push(text.substring(startIndex + 1,endIndex));
        startIndex = text.indexOf('(',endIndex);
    }
    console.log(result.join(', '));
}