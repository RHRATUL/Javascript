
// First Class Function
function sum(a,b) {
    return a+b;
    
}
// 1. A function can be stored in a variable
let result = sum;

console.log(result(5,5));
// 2. A function can be stored on array
let arr=[];

arr.push(sum);
console.log(arr[0](3,3));

// 3. A function can be store in object
let obj = {

    add:sum
}

console.log(obj.add(7,7));
// 4. We can create Function as Need

setTimeout(function () {
    console.log("Hello");
},2000);

// 5. We can Pass function as arguments



//6. We can return function from another function

