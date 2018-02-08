function carsRegistry(input) {
    let carRegister = new Map();

    for (let line of input){
        let [brand, model, car] = line
            .split(' | ');

        if (!carRegister.has(brand)) {
            carRegister.set(brand, new Map());
        }
        if (!carRegister.get(brand).has(model)) {
            carRegister.get(brand).set(model, 0);
        }

        let oldCars = carRegister.get(brand).get(model);
        carRegister.get(brand).set(model, oldCars + Number(car));
    }

    for (let [brand, models] of carRegister) {
        console.log(`${brand}`);
        for (let [model, car] of models) {
            console.log(`###${model} -> ${car}`)
        }
    }
}


carsRegistry([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
]);