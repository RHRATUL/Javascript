
// Declare Function
function sum(a,b){

    return a+b;
}

let result = sum(5,5);
console.log(result);

// Inner Function

function fun2(a,b,c){

    console.log(arguments);

}
 fun2(5,5,5);

//  Function Expression

let func = function(x,y){
return x+y;
}

console.log(func(3,3));

// Inner Function
function a(greet,name) {
    
    function gret() {
        console.log(greet +" "+name);
        
    }
gret();

}

a("Good Morning","Ratul");

// Get Frist Name

function greet(greet,name) {
    
    function getFristName() {
        if(name){
            return name.split(" ")[0];
        } else {
            return " ";
        }
        
    }
  let   masage = greet + " "+getFristName();
    console.log(masage);

}

greet("Good Morning","Rashidul Hasan");

