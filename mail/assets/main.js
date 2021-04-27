// lista mail utenti registrati
var usersMail = ["lamiamail@mail.it", "latuamail@mail.it", "lasuamail@mail.it", "lanostramail@mail.it", "lavostramail@mail.it", "laloromail@mail.it" ];
console.log(usersMail);

//chiedere indirizzo mail all'utente
var inputMail = prompt("Per favore inserisci la tua mail");
var verified = false;
// verifica mail e comunicazione risultato

for (var i = 0; i < usersMail.length; i++) {
     if (usersMail[i] == inputMail ){
          verified = true
     }
};

if (verified) {
     document.getElementById("result").innerHTML = "Congratulazioni, puoi accedere alla classe."
} else {
     document.getElementById("result").innerHTML = "Mi dispiace, non hai i requisiti necessari per accedere."
}
