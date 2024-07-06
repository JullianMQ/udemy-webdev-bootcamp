// Notice that we didn't use any parenthesis when calling the function
// document.querySelector('button').addEventListener('click', handleClick());
// document.querySelector('button').addEventListener('click', () => {
//     alert("I got clicked");
// });

// // My Solution to Drum Kit

// Since we're making a drum, the sound needs to not be stored in a variable. Since this causes a
// delay when using the drum, as it needs to wait for the variable to finish playing before it can
// play again. Which is why we've changed the drum to make the object as a key gets pressed.
// This is bad ↓

// const drumset = [tom_1, tom_2, tom_3, tom_4, snare, crash, kick_bass];
// const keyset = {
//     'w': tom_1,
//     'a': tom_2,
//     's': tom_3,
//     'd': tom_4,
//     'j': snare,
//     'k': crash,
//     'l': kick_bass
// };
// // Keypress Listener to play drum
// document.addEventListener('keydown', function (event) {
//     console.log(keyset[event.key].play());
// })

// var buttons = document.querySelectorAll('.drum');
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function () {
//         console.log(this);
//         drumset[i].play();
//     })
// }

// Udemy Solution

var buttons = document.querySelectorAll('.drum');
var buttonsLength = buttons.length;

for (let i = 0; i < buttonsLength; i++) {
    buttons[i].addEventListener('click', function () {

        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}
// For displaying the key pressed
document.addEventListener('keydown', function (event) {
    console.log(event.key);
});
// For playing the sound
console.log(document.addEventListener('keydown', function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
}));

function playSound(event) {
    switch (event) {
        case "w":
            var tom_1 = new Audio('sounds/tom-1.mp3');
            tom_1.play();
            break;
        case "a":
            var tom_2 = new Audio('sounds/tom-2.mp3');
            tom_2.play();
            break;
        case "s":
            var tom_3 = new Audio('sounds/tom-3.mp3');
            tom_3.play();
            break;
        case "d":
            var tom_4 = new Audio('sounds/tom-4.mp3');
            tom_4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick_bass = new Audio('sounds/kick-bass.mp3');
            kick_bass.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(buttonKey) {
    var pressedButton = document.querySelector("." + buttonKey);
    pressedButton.classList.toggle('pressed');

    setTimeout(() => {
    pressedButton.classList.toggle('pressed');
    }, 200);
}


// document.addEventListener("keypress", function (event) {
//     console.log(event);
// })

// function add(num1, num2) {
//     return num1 + num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }
