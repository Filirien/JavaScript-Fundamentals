function distanceOverTime(arr) {
    let v1 = Number(arr[0]);
    let v2 = Number(arr[1]);
    let t = Number(arr[2]);
    let time = t/3600;
    let dist1 = v1*time;
    let dist2 = v2*time;
    let delta = Math.abs(dist1-dist2)*1000;
    console.log(delta);
}
distanceOverTime([0,60,3600])