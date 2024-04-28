// importing the whole module or file
// require("./02_add.js");


// importing only certian variable or functions
//default export
// const add=require("./02_add");
// console.log(add(3,5));
// console.log("hello world");

// module scope
require("./03_batman");
require("./04_superman");


// module caching by improting instance of class
// const batman=require("./06_superhero")
// console.log(batman.getName());
// batman.setName("Bruce Wayne");
// console.log(batman.getName());


// const newSuperHero=require("./06_superhero")
// console.log(newSuperHero.getName());



// module caching by improting  class itself
// const SuperHero=require("./06_superhero")
// const batman=new SuperHero("Batman");
// console.log(batman.getName());
// batman.setName("Bruce Wayne");
// console.log(batman.getName());

// const superman=new SuperHero("Supertman");
// console.log(superman.getName());

