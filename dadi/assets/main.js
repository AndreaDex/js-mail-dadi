//tiro dadi per il giocatore
var playerDice = Math.floor(Math.random() * 6) +1;
console.log(playerDice);
//tiro dadi per pc
var pcDice = Math.floor(Math.random() * 6) +1;
console.log(pcDice);

var playerRes = document.getElementById("player_result").innerHTML = "il tuo lancio è pari a " + playerDice;

var pcRes = document.getElementById("pc_result").innerHTML = "il lancio del tuo avversario è pari a " + pcDice;

var gameRes = document.getElementById("game_result")

if (playerDice > pcDice){
    playerRes;
    pcRes;
    gameRes.innerHTML = "Congrtulazioni, hai VINTO"
} else if(playerDice < pcDice) {
    playerRes;
    pcRes;
    gameRes.innerHTML = "Mi dispiace, hai PERSO"
} else if(playerDice == pcDice){
    playerRes;
    pcRes;
    gameRes.innerHTML = "PAREGGIO"
}
