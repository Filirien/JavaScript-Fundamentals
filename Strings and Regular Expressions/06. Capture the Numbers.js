function captureTheNumbers (text) {
    let myRegexp = /\d+/g;
    let element;
    let result= [];
    while (element = myRegexp.exec(text)) {
       result.push(element);
    }
    console.log(result.join(' '))
}
captureTheNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.','Lets watch it at 22:45']);