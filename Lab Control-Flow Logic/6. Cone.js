function coneArea (r, h) {
    let s = Math.sqrt((r * r) + (h * h));
    let V = (Math.PI * r * r * h) / 3;
    let B = Math.PI * r *r;
    let L = Math.PI * r *s;
    let area = B + L;
    console.log(V);
    console.log(area);
}