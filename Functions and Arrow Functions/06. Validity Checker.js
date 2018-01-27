function validityChecker([x1, y1, x2, y2] ) {


    let firstCoordinates = Math.sqrt(x1*x1+y1*y1);
    if(firstCoordinates ===  Math.round(firstCoordinates))
    {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }


    let secondCoordinates = Math.sqrt(x2*x2 + y2*y2);
    if ( secondCoordinates === Math.round(secondCoordinates))
    {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let a = x1 - x2;
    let b = y1 - y2;
    let c = Math.sqrt( a*a + b*b );

    if(c ===  Math.round(c))
    {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
validityChecker([2,1,1,1]);