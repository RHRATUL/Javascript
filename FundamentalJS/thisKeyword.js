// implicit binding
/**
 * this is only for normal function not arrow function
 * implicit binding er khetre amra dekhbo kotha theke call hoise and ke call korse
 * ekhane tamim theke call hoise tar name tamim er moddhe name thakle setai mean korba
 * 
 */
let tamim = {

    name:"tamim",
    age:34,
    printplayername: function () {
        console.log(this.name);
        
    }
}

tamim.printplayername();
// Another Example implicit binding

let person = function (name,age) {
    return {
        name:name,
        age:age,
        printname:function () {
            console.log(this.name);
        },
        father: {
            name:"Mr y",
            printfathername: function(){
                console.log(this.name);
            }
        }
    }
    
};


let mash = person("mash",34)
mash.printname();
mash.father.printfathername();

// explicit binding
// direct bole deya hosse 
 let printplayerName = function () {
     console.log(this.name);
     
 }

 let mushfiq = {
     name:"Mushfig",
     age:34
 }

 printplayerName.call(mushfiq);

// new binding
function Person(name,age) {
    this.name=name;
    this.age=age;
    console.log(`${name} is ${age} Years Old`);
}

let mahmudullah = new Person("Mahmud",40);


// window binding
/***
 * uporer kono gula kaj na korle seta new binding hobe 
 * 
 * new binding global object ke refer kore 
 * ar jodi chai je global object ke refer na korta taile "use strict " use korta hobe 
 */


let printnames = function () {
    console.log(this.name);
}

let riyad = {
    name:"Riyad"
}

printnames();