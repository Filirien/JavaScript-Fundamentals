function findVariable(str) {
    let myRe = /\b_{1}([A-Za-z0-9]+)\b/g;
    let result = [];
    let test = myRe.exec(str);
    while(test){
        result.push(test[1]);
        test = myRe.exec(str);
    }
    console.log(result.join(','))
}
findVariable('Calculate the _area of the _perfectRectangle object.')