function heroicInventory(input) {
    let heroData = [];
    for (let i = 0; i < input.length; i++) {
        let currentHeroArguments = input[i]
            .split(" / ")
            .filter(e => e !== '');

        let name = currentHeroArguments[0];
        let level = Number(currentHeroArguments[1]);
        let items = [];

        if (currentHeroArguments.length > 2) {
            items = currentHeroArguments[2]
                .split(", ")
                .filter(e => e !== '');
        }

        let hero = {
            name: name,
            level: level,
            items: items
        };

        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData))
}

 console.log(heroicInventory([
     'Isacc / 25 / Apple, Gravity Gun',
     'Derek / 12 / BarrelVest, DestructionSword',
     'Hes / 1 / Desolator, Sentinel, Antara',
 ]));