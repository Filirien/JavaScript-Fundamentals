function matchTheDates(text) {
    let myRe = /(\b[0-9]{1,2})-([A-Z]{1}[a-z]{2})-([0-9]{4})/g;
    let match = myRe.exec(text);
    while(match != null) {
        console.log(match[0] +` (Day: ${match[0].split('-')[0]}, Month: ${match[0].split('-')[1]}, Year: ${match[0].split('-')[2]})`);
        match =myRe.exec(text);
    }
}
matchTheDates('1-Jan-1999 is a valid date.\n' +
    'So is 01-July-2000.arr\n' +
    'I am an awful liar, by the way – Ivo, 28-Sep-2016.\n')