var randInt_dice1 = Math.floor( Math.random() * 6 ) + 1;
var dice1 = (`dice${randInt_dice1}.png`);

var randInt_dice2 = Math.floor( Math.random() * 6 ) + 1;
var dice2 = (`dice${randInt_dice2}.png`);

document.getElementsByClassName("img1")[0].setAttribute('src', `images/${dice1}`);
document.getElementsByClassName("img2")[0].setAttribute('src', `images/${dice2}`);

var showWinner = (dice1 < dice2) ? "Player 2 Wins! 	&#128681" :
                 (dice1 === dice2) ? "Draw!"
                                  : "&#128681 Player 1 Wins!";
document.querySelector("h1").innerHTML = showWinner;
