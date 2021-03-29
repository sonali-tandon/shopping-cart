function showandhideimg(p,q,r){
    let x = document.getElementById(p);
    let y = document.getElementById(q);
    let z = document.getElementById(r);
    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'block';
    } else {
        x.style.display = 'none';
        y.style.display = 'block';
        z.style.display = 'none';
    }
}



