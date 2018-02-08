function cappyJuice(input) {
    let juiceQuantity = new Map();
    let juiceBottles = new Map();
    for (let line of input) {
        let args = line.split(' => ');
        let juiceType = args[0];
        let quantity = Number(args[1]);
        if(!juiceQuantity.has(juiceType)) {
            juiceQuantity.set(juiceType, 0)
        }

        let oldQuantity = juiceQuantity.get(juiceType);
        juiceQuantity.set(juiceType, oldQuantity+quantity);
        let currentQuantity = juiceQuantity.get(juiceType);

        if(currentQuantity >= 1000){
           if(!juiceBottles.has(juiceType)){
               juiceBottles.set(juiceType, 0);
           }

           let newBottles = Math.floor(currentQuantity/1000);
           let oldBottles = juiceBottles.get(juiceType);
           juiceBottles.set(juiceType, oldBottles + newBottles);

            let juiceLeft = currentQuantity % 1000;
            juiceQuantity.set(juiceType, juiceLeft);
        }
    }
    for (let [juice, bottles] of juiceBottles) {
        console.log(`${juice} => ${bottles}`);
    }
}