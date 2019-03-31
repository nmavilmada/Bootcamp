// global variable
var allUserData = [];// Defining the function "logstuff"
// generic logStuff function that prints to console
function logStuff (userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }

    }

}

// A function that takes two parameters, the last one a callback function
function getInput (options, callback) {
    // values enerted through allUserData array will be pushed to options
    // options is one of the parameters that "getInput" function takes as an agrgument
    allUserData.push (options);
    // " callback"is just a place holder function to indtcate that the second parameter of the 
    // "getInput" function is taking another function as its second argument.
    // The "callback" function is taking the values entered for the first parameter of the "getInput" function
    // as its arguments.
    callback (options);
}

// When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will called back (or executed) inside the getInput function
getInput ({name:"Rich",skill:"javascript"}, logStuff);
//  name: Rich
// speciality: JavaScript
console.log(allUserData)