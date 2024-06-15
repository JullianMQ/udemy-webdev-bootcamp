var output = [];
function FizzBuzz() {
    if((output.length + 1) % 3 === 0 && (output.length + 1) % 5 === 0) {
        output.push("FizzBuzz");
    } else if((output.length + 1) % 3 === 0) {
        output.push("Fizz");
    } else if((output.length + 1) % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(output.length + 1);
    }
    console.log(output);
}
