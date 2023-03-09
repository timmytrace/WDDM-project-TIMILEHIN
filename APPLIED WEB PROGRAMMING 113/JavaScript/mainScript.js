// CREATING NEW OBJECT
const newFruits = new fruits("grapefruits","strawberries","rockmelons","peaches","mangoes");

// PRINITNG TO CONSOLE
console.log("New Fruits\nCitrus: " + newFruits.citrus + "\nBerries: " + newFruits.berries + "\nMelon: " + newFruits.melon + "\nStone Fruit: " + newFruits.stoneFruit + "\nTrophical: " + newFruits.trophical);

// CALL THE OBJECT METHOD

newFruits.changeFruit("Passion Fruit")

// PRINT TO CONSOLE
console.log("New List\nCitrus: " + newFruits.citrus + "\nBerries: " + newFruits.berries + "\nMelon: " + newFruits.melon + "\nStone Fruit: " + newFruits.stoneFruit + "\nTrophical: " + newFruits.trophical);




// document.getElementById("btn").addEventListener("click", function () {
//   document.querySelector("p").innerHTML = "Hello Everyone";
// });

function myWhenClicked() {
  console.log("THIS BUTTON WAS CLICKED!!!");
  document.querySelector("h3").style.color = "white";
  document.querySelector("h3").style.fontFamily = "sans-serif";
  document.querySelector("h3").style.background = "#6D972E";
  document.querySelector("h3").style.font = "100%";
  document.querySelector("h1").style.color = "white";
  document.querySelector("h1").style.fontFamily = "script";
  document.querySelector("h1").style.background = "grey";
  document.getElementById("myImg").style.display = "none";
  document.getElementById("myImg2").style.height = "400px";
  document.getElementById("myImg2").style.width = "50vw";
  document.getElementById("btn").innerHTML = "CLICKED!";
  document.getElementById("btn").style.color = "white";
  document.getElementById("btn").style.backgroundColor = "#6D972E";
  document.getElementById("btn").style.border = "2px solid grey";
  document.getElementById("btn").style.borderRadius = "8px";
}

// // creating variables
// let a;
// var b;

// // Using variables
// a = 5;
// b = 17;
// // reassigning a
// a = 14;
// let sum = a /* lets add the value of a to b */ + b;
// // printing the sum
// console.log(sum);

// // another example, operator precedence
// let x = 10 + 3 * 5;
// console.log(x);

// // creating const variables. A const varuable cannot be reassigned. you cannot chande the value

// const num = 76;
// console.log("The number is: " + num);

// // this is a string
// const firstName = "Timilehin";
// const lastName = "Owolabi";
// // this is a number
// let currentAge = 15;
// // this is a boolean
// let funTimes = true;
// // logging to the console
// console.log(
//   "My Full Name is " +
//     firstName +
//     " " +
//     lastName +
//     "\n" +
//     "I am " +
//     currentAge +
//     " " +
//     "years old. " +
//     "Is coding fun for now?: " +
//     funTimes
// );
// // another example
// console.log("This is " + "a " + "combined string with an integer: " + a);

// // Javascript Arithmetic Operator

// // the addition operator
// var c = 6 + 8 + 4;
// console.log("The addition operator returns: " + c);

// // the subtraction operator
// var d = 8 - 6;
// console.log("The subtraction operator returns: " + d);

// // the multiplication operator
// var e = 8 * 6;
// console.log("The multiplication operator returns: " + e);

// // the division operator
// var f = 8 / 2;
// console.log("The division operator returns: " + f);

// // the exponentiation operator
// var g = 2 ** 8;
// console.log("The exponentiation operator returns: " + g);

// // the remainder operator
// var h = 5 % 2;
// console.log("The remainder operator returns: " + h);

// // the increment operator
// var z = 15;
// z++; //adds 1 to z
// console.log("The value of Z after increment operator is: " + z);

// // the decrement operator
// var z = 15;
// z--; //deducts 1 from z
// console.log("The value of Z after decrement operator is: " + z);
