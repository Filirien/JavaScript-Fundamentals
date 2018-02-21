function pyramidOfKing(base, increment) {
    let stoneSum = 0;
    let marbleSum = 0;
    let lapisSum = 0;
    let gold = base % 2 === 0 ? 4 : 1;

    let levelsOfPyramind = Math.ceil(base/2);
    for (let i = 1; i <= levelsOfPyramind - 1; i++) {
        if(i%5===0){
            let stone = (base - 2) * (base - 2);
            lapisSum += base*base - stone;
            stoneSum += stone;
        }else{
           let stone = (base - 2) * (base - 2);
           let marble = base * base - stone;
           stoneSum += stone;
           marbleSum += marble;
        }
        base -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stoneSum * increment)}`);
    console.log(`Marble required: ${Math.ceil(marbleSum * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisSum * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(levelsOfPyramind * increment)}`)
}

pyramidOfKing(11,0.75);
