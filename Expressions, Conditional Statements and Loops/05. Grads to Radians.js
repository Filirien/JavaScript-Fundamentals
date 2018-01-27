function degreesToRadians(grad)
{
     grad = grad % 400;
    let degree = grad * 0.9;
    let result = degree > 0 ? degree : 360 + degree;
    console.log(result);
}