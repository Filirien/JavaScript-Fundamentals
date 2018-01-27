function roadRadar(input) {
    let speed = input[0];
    let zone = input[1];
    let limit = getLimit(zone);
    let isOverSpeed = isOverSp(speed,limit);
    let dif = speed - limit;
    if(isOverSpeed){
        if(dif > 0 && dif <= 20){
            console.log('speeding')
        }
        else if(dif > 20 && dif <= 40){
            console.log('excessive speeding ');
        }
        else {
            console.log('reckless driving');
        }
    }


    function isOverSp(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false;
        }
        return true
    }

    function getLimit(zone) {
        switch (zone) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
        }
    }
}
roadRadar([120, 'interstate'])