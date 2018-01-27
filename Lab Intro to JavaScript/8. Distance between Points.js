function calDistance(x1,y1,x2,y2) {
    let result =Math.sqrt((Math.abs(x1-x2)**2) + (Math.abs(y1-y2)**2));

    return result
}
calDistance(2,4,5,0);