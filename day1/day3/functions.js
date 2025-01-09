// function sum(a,b){
//     let c = a+b;
//     return c
//     console.log(c);
// }
// console.log(sum(10,10));
// console.log(sum(10+10,10));

// let a = Number(window.prompt("enter first number"));
// let b = Number(window.prompt("enter second number"));
// let c = a + b;
// let d = a - b;
// let e = a * b;
// let f = a / b;
// console.log("c:"+c);
// console.log("d:"+d);
// console.log("e:"+e);
// console.log("f:"+f);

//create a function to find largest of three numbers and i/p from user
function largestOfThree(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }
}
let a = Number(window.prompt("enter first number"));
let b = Number(window.prompt("enter second number"));
let c = Number(window.prompt("enter third number"));
console.log(largestOfThree(a,b,c));
