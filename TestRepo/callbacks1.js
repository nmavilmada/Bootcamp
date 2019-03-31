//Global variable
var generalLastName = {name:"Clinton",occupation:"president"}
var allUserData = [];


function logStuff (userData,x) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object" || typeof x === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
        for (var item in x) {
            console.log(item + ": " + x[item]);
        }
    

    }

}

function getInput (options, callback) {
    allUserData.push (options);
// Pass the global variable generalLastName to the callback function
    callback (options,generalLastName);
}

getInput({name:"larry",skill:"wizard"},logStuff);