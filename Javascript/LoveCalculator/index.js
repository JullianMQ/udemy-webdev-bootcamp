var first_name = prompt("Enter your name: ")
var second_name = prompt("Enter name: ")

function loveCalculator() {
    var love_score = Math.floor(Math.random() * 100) + 1
    return love_score;
}
alert(`The love score for ${first_name}  ${second_name} is ` + loveCalculator(first_name, second_name) + "%")
