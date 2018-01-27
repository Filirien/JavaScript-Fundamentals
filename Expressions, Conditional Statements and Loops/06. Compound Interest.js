function compoundINterest(data) {
    let sum = Number(data[0]);
    let nominalInteresRate = Number(data[1])/100;
    let frequency = 12/Number(data[2]);
    let years = Number(data[3]);

    let formula = sum * Math.pow(1 + nominalInteresRate / frequency, frequency * years);
    console.log(formula.toFixed(2));
}
compoundINterest([1500,4.3,3,6])