function escaping(arr) {
    console.log('<ul>');

    for (let item of arr) {
       item = htmlEscape(item);
    }
    for (let element of arr) {
        console.log(`   <li>${htmlEscape(element)}</li>`);
    }
    console.log('</ul>');

    function htmlEscape (text) {
        return  text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
}

escaping(['<b>unescaped text</b>', 'normal text'])