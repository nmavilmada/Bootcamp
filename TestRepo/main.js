// In order to import the funcitons from modules.js 
// we need to access the require()method.


// This is how "require" is defined. It's a function  that takes a file path as an argument.
// var require = function (path){



//     return module.exports;
// }

// require(path) will include the file path that requires access. 
// For convinience this is assigned to a variable which takes in the two functions as property objects.
var greetings = require("./greetings.js");

greetings.sayHelloinEnglish();
greetings.sayHelloinSpanish();