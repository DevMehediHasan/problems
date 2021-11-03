
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

// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
for ( var i = 0; i <= 15; i++) {
    if(i % 2 === 0){
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}

//Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.
var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}
console.log(Avgmarks);

console.log("Average grade: " + avg);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}

// Write a JavaScript program to construct the following pattern, using a nested for loop.
var mk = 10
for ( i = 1; i <=mk; i++ ) {
        var result = ''
    for( j=1; j <=i; j++) {
        result += '*'
    }
    console.log(result);
}