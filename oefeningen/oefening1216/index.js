/*
Schrijf een programma die de facultateit van een getal weergeeft.
  De faculteit van 5 is bijvoorbeeld:
  5x4x3x2x1 = 120
 Vraag dit getal aan de gebruiker

Dit is de tegenhanger van de for loop. Je zal zien dat deze iets eenvoudiger is in gebruik.
*/
let faculteit = 1;
let teller = 1;
let afdruk = "";

const getal = Number(prompt('Geef getal in'));
while(teller <= getal){
    faculteit *= teller;
    afdruk += teller + 'x';
    teller++;
}
console.log("De faculteit van",getal,"is",faculteit);
console.log(afdruk.substring(0,afdruk.length-1) + "=" + faculteit)
