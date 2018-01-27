function task(n) {
    let r = ' ';
    n = Number(n);
    let space = (2 * n - 4) / 2;

    if(n % 2 == 0) {
        for (let i = 1; i <= 2; i++) {
            console.log(r = '+' + '-'.repeat(space) + '+' + '-'.repeat(space) + '+');
            for (let m = 1; m <= (n / 2) - 2; m++){
                console.log(r = '|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|');
            }
        }
        console.log(r = '+' + '-'.repeat(space) + '+' + '-'.repeat(space) + '+');
    }
    else{
        for (let i = 1; i <= 2; i++) {
            console.log(r = '+' + '-'.repeat(space) + '+' + '-'.repeat(space) + '+');
            for (let m = 1; m <= (n / 2) - 1; m++){
                console.log(r = '|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|');
            }
        }
        console.log(r = '+' + '-'.repeat(space) + '+' + '-'.repeat(space) + '+');
    }
}

task(2);