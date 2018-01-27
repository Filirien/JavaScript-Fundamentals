function chessBoard (n) {
    let result = '<div class="chessboard">\n';
    for (let i = 0; i < n; i++) {
        result += '<div>\n';
        let color = 'black';
        if(i%2===1){
          color = 'white';
        }
        for (let j = 0; j < n; j++) {
            result += `    <span class="${color}"></span>\n`;
            color = (color=='white') ? 'black' : 'white';
        }
        result += '</div>\n';
    }
    return result+'</div>';
}