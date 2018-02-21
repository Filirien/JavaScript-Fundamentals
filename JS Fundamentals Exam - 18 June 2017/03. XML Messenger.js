function messenger(input) {
    let pattern = /<message((?:\s[a-z]+="[A-Za-z0-9 .]+")+)>((?:.|\n)+)<\/message>$/;
    let result = '<article>\n';
    let match = pattern.exec(input);
   if(match !== null){
       let toPattern = /\bto="([A-Za-z ]+)"/;
       let fromPattern = /\bfrom="([A-Za-z ]+)"/;
       let matchTo =toPattern.exec(match[1]);
       let matchFrom = fromPattern.exec(match[1]);
       if(matchTo !== null && matchFrom !== null){
           result += `  <div>From: <span class="sender">${matchFrom[1]}</span></div>\n`;
           result += `  <div>To: <span class="recipient">${matchTo[1]}</span></div>\n`;
       }else{
           console.log('Missing attributes');
           return;
       }
       if(match[2] !== null){
            result += '  <div>\n';
            let sentences = match[2].split('\n');
           for (let i = 0; i < sentences.length; i++) {
                result += `    <p>${sentences[i]}</p>\n`
           }
            result += '  </div>\n';
       }
   }else{
       console.log('Invalid message format');
       return;
   }
   result += '</article>';
   console.log(result);
}
messenger('<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old\n' +
    'Let\'s go out for a beer</message>');