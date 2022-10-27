/**
*Author: Daphne Cheng, Philip Orihuela
*Created: October 25, 2022
*License: Public Domain
*/

function isEven(x){
  return (x % 2 == 0);
}

// test function
console.log("Is 1683 even?", isEven(1683));
console.log("Is 1126 even?", isEven(1126));

array = [1, 4, 9, 16, 25, 36, 400, 10000]
console.log("My array", array);

var result = array.map(isEven);
// should return [false, true, false, true, false, true, true, true]
console.log("Test of evenness of array:", result)

var result = array.map(function(x){
  return x ** 0.5;
})
// should return [1, 2, 3, 4, 5, 6, 20, 100]
console.log("Squareroot of array:,")
