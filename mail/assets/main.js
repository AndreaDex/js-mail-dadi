// lista mail utenti registrati
var usersMail = ["lamiamail@mail.it", "latuamail@mail.it", "lasuamail@mail.it", "lanostramail@mail.it", "lavostramail@mail.it", "laloromail@mail.it" ];
console.log(usersMail);

//chiedere indirizzo mail all'utente
var inputMail = prompt("Per favore inserisci la tua mail");
var result = document.getElementById("result"); 
// verifica mail e comunicazione risultato
switch (inputMail) {

    case "lamiamail@mail.it" :
        document.getElementById("result").innerHTML = "Congratulazioni, puoi accedere alla classe"
        break;
        
    case "latuamail@mail.it" :
         result.innerHTML = "Congratulazioni, puoi accedere alla classe"
         break;   
    
    case "lasuamail@mail.it" :  
         result.innerHTML = "Congratulazioni, puoi accedere alla classe"
         break;   

     case "lanostramail@mail.it" :  
         result.innerHTML = "Congratulazioni, puoi accedere alla classe"
         break;  

    case "lavostramail@mail.it" :  
         result.innerHTML = "Congratulazioni, puoi accedere alla classe"
         break;   

    case "laloromail@mail.it" :  
         result.innerHTML = "Congratulazioni, puoi accedere alla classe"
         break;   

    default:
        result.innerHTML = "Mi dispiace ma non hai i requisiti necessari per accedere";
}