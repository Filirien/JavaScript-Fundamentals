function countOccurences(str, text) {
    let count = -1;
    let index =  str.indexOf(str);
    while(index > -1){
        count++;
        index = text.indexOf(str,index+1);
    }
    console.log(count)
}