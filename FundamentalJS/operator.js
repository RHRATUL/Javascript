// Arithmetic operator + - * / % ++ -- 

let a = 5;
let b =4;
let sum = a +b;

console.log(sum);

// Comparison Operator  == ,!=,
let c = 5;
let d=6;
let result = c == d;

let result2 = c !=d;
let result3 = c >d ;
let result4 = c < d ;
console.log(result);
console.log(result2);
console.log(result4);

let e = 5;
let f = 6;
let names  = "Ratul";
let name2 = "RH";

if(names===name2){
    console.log("This is Equal");
} else {
    console.log("this is not equal");

}

if(e<f){
    console.log("e grater than f");
}

let age = 20;

// && mane duitai true howa lagba akta false hole full false 
if(age>18 && age<60){
    console.log("Your Age is Between 18-60");
} else {
    console.log("Buira");
}