// Module encapsulates related code into a single unit of code. 
// This is equivalent to moving all related functions into a file.
// This is the file that will be accessed by other js files
// In order to make this file accessible the inbuilt module.exports object or exports object is used
// for easy reference module.exports can be assigned to a variable and that variable can be passed
// The below example uses the in built "exports" object
// The two functions are passed an object propert inside the exports object
// this will allow these two functions to be called from a diffrerent file.
 
exports.sayHelloinEnglish = function(){
    console.log("Hello");
},

exports.sayHelloinSpanish = function(){
   console.log("Hola" );

};




