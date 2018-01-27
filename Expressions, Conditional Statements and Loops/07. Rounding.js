function rounding(nums) {
    let num = Number(nums[0]);
    let precision = Number(nums[1]);
    if(precision>15)
    {
        precision = 15;
    }
    console.log(Math.round(num*Math.pow(10,precision))/(Math.pow(10,precision)));
}
rounding([3.1415926535897932384626433832795, 2]);