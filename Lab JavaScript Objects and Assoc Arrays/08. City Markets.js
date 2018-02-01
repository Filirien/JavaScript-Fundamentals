function cityMarkets(input) {
    let result = new Map();

    for (let line of input) {
        let [town, product, sales] = line
            .split(' -> ');

        sales = sales
            .split(' : ')
            .map(Number)
            .reduce((a,b) => a*b);

        if(!result.has(town)){
            result.set(town,new Map())
        }

        if(!result.get(town).has(product)){
            result.get(town).set(product,0)
        }

       let oldSales = result.get(town).get(product);
            result.get(town).set(product,oldSales + sales);
    }
    for (let [town,values] of result) {
        console.log(`Town - ${town}`);
        for (let [product, sales] of values) {
            console.log(`$$$${product} : ${sales}`)
        }
    }
}