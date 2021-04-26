// lista mail utenti registrati
var usersMail = ["lamiamail@mail.it", "latuamail@mail.it", "lasuamail@mail.it", "lanostramail@mail.it", "lavostramail@mail.it", "laloromail@mail.it" ];
console.log(usersMail);

//chiedere indirizzo mail all'utente
var inputMail = prompt("Per favore inserisci la tua mail");

// verifica mail e comunicazione risultato

for (i = 0; i < usersMail.length; i++) {
     if (usersMail[i] == inputMail ){
          document.getElementById("result").innerHTML = "congratulazioni, puoi accedere alla classe"
     } else {
          document.getElementById("result").innerHTML = "mi dispiace ma non i requisiti per accedere"
     }
}
