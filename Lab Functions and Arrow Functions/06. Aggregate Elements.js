function solution(arr) {
    aggregate(arr,0,(a,b) => {return a + b});
    aggregate(arr,0,(a,b) => {return a+ 1/b});
    aggregate(arr,'',(a,b) => {return a + b});
    function aggregate(arr,initialValue,arrow) {
        for (let i = 0; i < arr.length; i++) {
            initialValue = arrow(initialValue,arr[i])
        }
        console.log(initialValue)
    }
}