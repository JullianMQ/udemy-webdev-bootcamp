// Can get the length of the array using .length, just like how we would use it for strings.
// var myArray = [1, 2, 3, 4, 5];
// When doing this with dev tools, the length also gets outputted to the console.
// console.log(myArray);

// We retrieve items, the same way we create them by using square brackets.
// console.log(myArray[0]); // gets the first item

// Can use .includes to check if an item is in the array
// console.log(myArray.includes(3)); // true

// Add numbers to the array, fizzBuzz(?kinda?)
// Everytime we call the function, we push a number into the array. But we need to make sure that 
// it's the next number in the sequence.
// EXAMPLE: 
// fizzBuzz()
// fizzBuzz_array = [1]
// fizzBuzz()
// fizzBuzz_array = [1, 2]
// Solution 1:
// var output = [];
// function FizzBuzz() {
//     output.push(output.length + 1);
//     console.log(output);
// }
// Solution 2:
// var output = [];
// var counter = 1;
// function FizzBuzz(counter, array) {
//     array.push(counter);
//     counter++;
//     console.log(array);
//     return counter;
// }
// need to call change the value of counter each time we call it
// counter = FizzBuzz(counter, output);
