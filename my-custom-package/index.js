// import("upper-case").then(upperCaseModule => {

// const upperCase = upperCaseModule.upperCase;
    const upperCase = require("upper-case").upperCase;

    function greet(name) {
        console.log(upperCase(`Hello ${name}, Welcome to codevolution !!!!.`));
    }
    
    greet("Sajjad");
    
    module.exports = greet;
// });