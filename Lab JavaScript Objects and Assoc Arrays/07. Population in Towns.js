function populationsInTowns(text) {
    let result = new Map();

    for (let line of text) {
        let tokens = line.split(/\s*<->\s*/);
        let town = tokens[0];
        let population = Number(tokens[1]);

        if(!result.has(town)){
            result.set(town, population)
        }else{
            result.set(town,result.get(town)+population);
        }
    }

    for (let [key,value] of result) {
        console.log(`${key} : ${value}`)
    }
}
populationsInTowns(['Sofia <-> 1200000', 'Montana <-> 20000','New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000'])