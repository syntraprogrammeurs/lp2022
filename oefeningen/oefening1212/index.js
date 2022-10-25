/**
 Schrijf een programma die de grootst gemene deler van 2 getallen
 op het scherm schrijft.
  Vraag aan de gebruiker de 2 getallen
  Voorbeeld:
 o Getallen 75 en 105
 o Grootste gemene deler is 15
 o Weergave op het scherm:
 o De grootste gemene deler van 105 en 75 is: 15
 */

/**STAP
 * We schrijven een for loop die beide getallen door de teller x zal doorlopen
 * De teller start natuurlijk bij 1. Wanneer de REST van de deling 0 is voor BEIDE getallen
 * dan is het resultaat op dat moment de grootste gemene deler van beide getallen.
 * De deling van beide getallen doen we in één beweging dmv de AND (&&) operator te gebruiken
 * binnen het if statement.
 * **/

let eersteGetal = Number(prompt('Geef eerste getal in'));
let tweedeGetal = Number(prompt('Geef tweede getal in'));
let grootsteGemeneDeler;

for(let x=1;x<=eersteGetal;x++){
    if(eersteGetal%x === 0 && tweedeGetal%x === 0){
        grootsteGemeneDeler = x;
    }
}
console.log(grootsteGemeneDeler);
