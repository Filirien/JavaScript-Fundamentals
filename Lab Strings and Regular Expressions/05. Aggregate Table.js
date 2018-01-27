function aggregateTable(arr) {
    let sum = 0;
    let result = [];
    for (let line of arr) {
        line = line.split('|');
        result.push(line[1].trim());
        sum += Number(line[2].trim())
    }
    console.log(result.join(', ') + '\n' + sum)
}
aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)