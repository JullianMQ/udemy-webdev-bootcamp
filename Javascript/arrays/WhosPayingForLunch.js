// Write a function that will select a random person from a list of names. The person selected
// will pay for the bill for everybody in the list.
function whosPaying(names) {
    //Write your code here.
    var lenOfArray = names.length;
    var generateNumber = Math.floor(Math.random() * lenOfArray);
    return `${names[generateNumber]} is going to buy lunch today!`;
}
