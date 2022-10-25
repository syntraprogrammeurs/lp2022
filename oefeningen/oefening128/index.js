/**
 Schrijf een programma die de volgende reeks horizontaal op het scherm schrijft:
  Voorbeeld:
 o Vraag een getal aan de gebruiker:
 o Wanneer dit getal bijvoorbeeld 100 is dan is de volgende reeks de uitkomst:
  1, 2, 4, 8, 16, 32, 64
 o Wanneer dit getal bijvoorbeeld 130 is dan is de volgende reeks de uitkomst:
  1, 2, 4, 8, 16, 32, 64, 128
 **/
let getal = Number(prompt("Geef een getal in:"));
let i = 1;
let x = 1;
let resultaat = "";
for(i;i<=getal;i++){
   if(x <= getal){
      // console.log(x);
       resultaat=resultaat + x + ",";
   }
    x=x*2;
}
console.log(resultaat.substring(0,resultaat.length-1));
