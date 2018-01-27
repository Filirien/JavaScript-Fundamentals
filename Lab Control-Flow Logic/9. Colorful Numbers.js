function colorfulNumbers (n) {
    let result = "<ul>\n";
    for (let i = 1; i <= n; i++) {
        let color = 'blue';
        if(i%2!=0){
            color = 'green';
        }
        result +=`<li><span style='color:${color}'>${i}</span></li>\n`;
    }
    result += "</ul>";
    return result;
}