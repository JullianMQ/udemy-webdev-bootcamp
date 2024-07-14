const gamePattern = [];
const userClickedPattern = [];
const buttonColors = ['red', 'blue', 'green', 'yellow']
var hasStarted = false;
var level = 0;
var counter = 0;
var count = 0;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const nextSequence = async () => {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    for (const element of gamePattern) {
        console.log(element)

        await sleep(250);

            $(`#${element}`).fadeOut(250).fadeIn(250);
            var sound = new Audio(`sounds/${element}.mp3`);
            sound.play();

        await sleep(250);
    }

    level++;
    $("#level-title").text(`Level ${level}`)
}

const playSound = (name) => {
    let clickedSound = new Audio(`sounds/${name}.mp3`);
    clickedSound.play();
}

const animatePress = (currentColor) => {
    $(`.${currentColor}`).addClass('pressed');

    setTimeout(() => {
    $(`.${currentColor}`).removeClass('pressed');
    }, 100);
}

const startOver = () => {
    let gameOverSound = new Audio('sounds/wrong.mp3');
    gameOverSound.play();
    $('body').addClass('game-over');
    setTimeout(() => {
        $('body').removeClass('game-over');
    }, 300);
    counter = 0;
    gamePattern.length = 0;
    userClickedPattern.length = 0;
    hasStarted = false;
    level = 0;
}

// Check if the player pattern is correct and matches the game pattern while clicking the buttons
$('.btn').click((event) => {
    let userChosenColor = event.currentTarget.id;
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor)
    if (gamePattern[counter] === userChosenColor) {
        if ((gamePattern.length - 1) === counter) {
            counter = 0;
            counter--;
            userClickedPattern.length = 0;
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    counter++;
})

$(document).on("touchstart",() => {
    if (hasStarted === false) {
        counter = 0;
        nextSequence();
        hasStarted = true;
    } 
})

$(document).keydown(() => {
    if (hasStarted === false) {
        counter = 0;
        nextSequence();
        hasStarted = true;
    } 
})
