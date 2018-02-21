function theHungryProgrammer(portions, commands) {
    let result = '';
    let eatenMeals = 0;

    for (let c of commands) {
        let command = c.split(' ');
        if (command[0].toLowerCase() == 'end') {
            break;
        }
        switch (command[0].toLowerCase()) {
            case 'serve':
                if(portions.length < 1){
                    break;
                }
                result += `${portions.pop()} served!\n`;
                break;
            case 'add':
                if(command[1] == undefined){
                    break;
                }
                portions.unshift(command[1]);
                break;
            case'shift':
                if(command[1] != undefined && command[2] != undefined) {
                    let first = portions[Number(command[1])];
                    portions[Number(command[1])] = portions[Number(command[2])];
                    portions[Number(command[2])] = first;
                }
                break;
            case 'eat':
                if(portions.length < 1){
                    break;
                }
                result += `${portions.shift()} eaten\n`;
                eatenMeals++;
                break;
            case'consume':
                if(command[1] != undefined && command[2] != undefined) {

                    portions.splice(Number(command[1]), (Number(command[2]) - Number(command[1])) + 1);
                    result += 'Burp!\n';
                    eatenMeals += (Number(command[2]) - Number(command[1])) + 1;
                }
                break;
            default:
                break;
        }

    }
    if (portions.length > 0) {
        result += `Meals left: ${portions.join(', ')}\n`;
        console.log(result);
    }else{
        console.log('The food is gone')
    }
    console.log(`Meals eaten: ${eatenMeals}`);
}
theHungryProgrammer([],['Serve','Eat','Consume 0 0','Add','chicken','Add rice','Eat','End']);