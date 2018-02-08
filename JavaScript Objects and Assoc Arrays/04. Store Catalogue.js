function storeCatalogue(input) {
    let catalogue = {};
    for (let line of input) {
        let args = line.split(' : ');
        let name = args[0];
        let price = Number(args[1]);

        if(!catalogue.hasOwnProperty(name)) {
            catalogue[name]= 0;
        }

        catalogue[name] = price;
    }

    let names = Object.keys(catalogue);
    names.sort();
    let letters = new Set();

    for (let product of names) {
        let currentLetter = product[0];
        if(!letters.has(currentLetter)){
            console.log(currentLetter);
        }

        letters.add(currentLetter);
        console.log(`  ${product}: ${catalogue[product]}`);
    }
}


storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
]);