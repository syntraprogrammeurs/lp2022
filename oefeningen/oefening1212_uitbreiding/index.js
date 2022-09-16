/**
 Schrijf een programma die de grootst gemene deler van 2 getallen
 op het scherm schrijft.
  Vraag aan de gebruiker de 2 getallen
  Voorbeeld:
 o Getallen 75 en 105
 o Grootste gemene deler is 15
 o Weergave op het scherm:
 o De grootste gemene deler van 105 en 75 is: 15

 uitbreiding : we proberen meer dan 1 getal in te geven en deze te testen op de grootste gemene deler

 Let op: dit is een oefening met een ARRAY en functies.  In de basiscursus leren programmeren dien je deze NIET
 te kennen. Dit is enkel een oefening op vraag van een cursist
 */

// Function ggd van twee getallen
function ggd(a, b) {
    if (a == 0)
        return b;
    return ggd(b % a, a);
}

// Function vind de grootste gemene deler
function vindGGD(arr, n) {
    let resultaat = arr[0];
    for (let i = 1; i < n; i++) {
        resultaat = ggd(arr[i], resultaat);

        if (resultaat == 1) {
            return 1;
        }
    }
    return resultaat;
}

// Programma
let arr = [2, 4, 6, 8, 16];
let n = arr.length;
console.log(vindGGD(arr, n));
