function capitaliza(arr) {
    let result = [];
    arr = arr.split(' ')
    for (let word of arr) {
       let first= word[0].toUpperCase();
        let lower = word.toLowerCase();

        result.push(first.concat(lower.substr(1)))
    }
    console.log(result.join(' '))
}
capitaliza('Was that Easy? tRY thIs onE for SiZe!');