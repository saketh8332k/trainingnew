// let demo =  function(){
//     console.log("Hello, World!");
// }
// console.log(demo);
// demo();

let operator = function(a){
    console.log(a);
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]); 
}
operator(10,20,30);
operator();




//create a function expression to perform arithmetic operation for three numbers and find the largest of threee numbers and input should be taken from the end User.User
let demo1 = function(){
let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let num3 = Number(prompt("Enter third number"));
let max = Math.max(num1, num2, num3);
console.log("largest number: "+max);
let a = num1+num2+num3;
console.log("sum: "+a);
let b = num1-num2-num3;
console.log("subtarction: "+b);
let c = num1*num2*num3;
console.log("mul: "+c);
let d = num1/num2/num3;
console.log("div: "+d);
}
demo1();
