// Two way to declare Array

let arr1 = [1,2,3,4,5];
let arr2 = new Array(1,2,3);

console.log(arr1);
console.log(arr1[1]);
console.log(arr2);

//An array can store elements of any type.
// Mix of Value
let arr = [ 'Apple', { name: 'John' }, true, function() { console.log("Hello"); } ];

console.log(arr);

// Basic Method pop/push, shift/unshift
/**
 * push appends an element to the end.
 * shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.
*Extracts the first element of the array and returns it
*Add the element to the beginning of the array
 */

let username = ['Ratul','Rh',"Rashidul"];
// Traversing Element of Array
for(let i=0;i<username.length;i++){
    console.log("Name is "+username[i]);
}

let count = username.indexOf('Rh');



if(count==1){
    console.log("This is RH");
} else {
    console.log("Dont have Name in Array");
}

