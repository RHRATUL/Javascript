
// Object literal syntax
let name = {
    fristName:"Ratul",
    lastName:"Hasan"
};



console.log(name);
// Object Constructor
let versity = new Object();
versity.name="Daffodil";
versity.est = "2004";
console.log(typeof versity);
console.log(versity);

let key="est";

console.log(key in versity);

for(let key in name){
    console.log(key);
    console.log(name[key]);
}