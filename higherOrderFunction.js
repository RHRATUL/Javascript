// 5. We can Pass function as arguments

function add(a,b) {
    return a+b;
}
 
function res(a,b,cb) {
    function sum() {
      return  a+b+cb(6,6);
    } 
    return sum;
}

let result = res(5,5,add);
console.log(result());
//6. We can return function from another function




