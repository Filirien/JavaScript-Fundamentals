function extractLinks(args) {
    let regex = /www\.[A-Za-z0-9-]+(\.[a-z]+)+/g;
    for (let line of args) {
        let isMatch = line.match(regex);
        if (isMatch) {
            console.log(isMatch.join('\r\n'));
        }
    }
}