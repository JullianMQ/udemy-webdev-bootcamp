// Challenge: in Karel IDE 5x5
// Trying to move Karel to Top Right Corner
// https://stanford.edu/~cpiech/karel/ide.html
// function main() {
//     moveMaxForward();
//     turnLeft();
//     moveMaxForward();
// }
// function moveMaxForward() {
//     move();
//     move();
//     move();
//     move();
// }

// Make a diagonal line with beepers
// function main() {
//     putDiagonalBeeper();
//     putDiagonalBeeper();
//     putDiagonalBeeper();
//     putDiagonalBeeper();
//     putDiagonalBeeper();
// }

// function putDiagonalBeeper() {
//     putBeeper();
//     move();
//     turnLeft();
//     move();
//     turnRight();
// }
//
// Challenge: make a chessboard pattern with beepers
// function main() {
//     threeBeeps();
//     turnLeftMoveTurnLeft();
//     twoBeeps();
//     turnRightMoveTurnRight();
//     threeBeeps();
//     turnLeftMoveTurnLeft();
//     twoBeeps();
//     turnRightMoveTurnRight();
//     threeBeeps();
// }

// function threeBeeps() {
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
// }

// function twoBeeps() {
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
// }

// function turnLeftMoveTurnLeft() {
//     turnLeft();    
//     move();
//     turnLeft();
// }

// function turnRightMoveTurnRight() {
//     turnRight();
//     move();
//     turnRight();
// }

// Challenge: Calculate the amount of bottles of milk the robot will be able to buy given the amount
// of money it's been given
// The bottles of milk cost $1.50
// function getMilk(money) {
//     var amtOfBottles = Math.floor(money / 1.5);
//     console.log(`Buy ${amtOfBottles} bottles of milk`);
// }
// getMilk(10);

// Challenge: Calculate the number of days, weeks and months that you have left
// In this challenge, you are going to create a function that tells us how many days, weeks and months 
// we have left if we live until 90 years old.
// For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.
// 365 days in a year
// 52 weeks in a year
// 12 months in a year
// Example Input
// e.g. If you are 56 years old:
//     lifeInWeeks(56)
// Example Output
//     You have 12410 days, 1768 weeks, and 408 months left.
//
// function lifeInWeeks(age) {
//     var yearsLeft = 90 - age;
//     var daysLeft = 365 * yearsLeft;
//     var weeksLeft = 52 * yearsLeft;
//     var monthsLeft = 12 * yearsLeft;
//     console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`);
// }

// lifeInWeeks(56);
//
// Challenge: BMI Calculator Challenge
function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    // return bmi;
    return Math.round(bmi);
}
console.log(bmiCalculator(65, 1.8));
