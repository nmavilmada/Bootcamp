/* eslint-disable camelcase */
// eslint-disable-next-line camelcase
var num_1 = parseInt(prompt("Give me a number!"));
// eslint-disable-next-line camelcase
var num_2 = parseInt(prompt("Give me another number!"));
var result;

var operation = prompt("What would you like to do? (add, subtract, multiply, divide)").toUpperCase();

if (operation === "ADD") {
  // eslint-disable-next-line camelcase
  result = num_1 + num_2;
  // eslint-disable-next-line camelcase
  alert("The sum of " + num_1 + " and " + num_2 + " is " + result);
} else if (operation === "SUBTRACT") {
  // eslint-disable-next-line camelcase
  result = num_1 - num_2;
  alert("The difference between " + num_1 + " and " + num_2 + " is " + result);
} else if (operation === "MULTIPLY") {
  result = num_1 * num_2;
  alert("The product of " + num_1 + " and " + num_2 + " is " + result);
} else if (operation === "DIVIDE") {
  result = num_1 / num_2;
  alert("The quotient of " + num_1 + " and " + num_2 + " is " + result);
} else {
  alert("Not a valid option!");
}

