var player1throw = Math.ceil(Math.random()*6);
var player2throw = Math.ceil(Math.random()*6);
var diceP1 = "images/dice" + player1throw + ".png";
var diceP2 = "images/dice" + player2throw + ".png";

// var image1 = document.querySelector("img")[0];
// image1.setAttribute("src", diceP1)

document.querySelector(".img1").setAttribute("src", diceP1);
document.querySelector(".img2").setAttribute("src", diceP2);

if (player1throw > player2throw) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}else if (player2throw > player1throw) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}else{
    document.querySelector("h1").innerHTML = "It is a draw :("
}