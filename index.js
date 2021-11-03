
//Find large num
const x = 14
const y = 14

if ( parseInt(x) > parseInt(y)) {
    console.log('The large num of ' + x);
} else if ( parseInt(y) > parseInt(x) ){
    console.log('The large of num ' + y);
} else{
    console.log('The values are equal');
}

//Write a JavaScript conditional statement to find the sign of product of three numbers.
let a = -10
let b = 17
let c = -14

if (a > 0 && b > 0 && c > 0) {
    console.log('the sign is +');
} else if(a < 0 && b < 0 && c < 0) {
    console.log('the sign is -');
} else if(a > 0 && b<0 && c<0) {
    console.log('the sign is +');
} else if(a<0 && b>0 && c<0) {
    console.log('the sign is +');
} else {
    console.log('the sign is -');
}

//Write a JavaScript conditional statement to find the largest of five numbers.

let m = -10
let n = -0
let o = -0
let p = -1
let q = -10

if(m>n && m>o && m>p && m>q) {
    console.log(m);
} else if(n>m && n>o && n>p && n>q) {
    console.log(n);
} else if(o>m && o>n && o>p && o>q) {
    console.log(o);
} else if(p>m && p>n && p>o && p>q) {
    console.log(p);
} else {
    console.log(a);
}
