/*
* Vraag aan de gebruiker een eindgetal.
Zorg ervoor dat het resultaat kleiner is dan het eindgetal.
Zoek zelf het verband.
Voorbeeld:
*
Geef een eindgetal in: 20
Resultaat: 1,2,4,7,11,16
* */
let eindGetal = Number(prompt("Geef een eindgetal in:"));
let getal = 1;
let resultaat = "";
for(let i=1;i<=eindGetal;i++){ //1<=20
    if(getal < eindGetal){
       resultaat += getal +',';
    }
    getal=getal + i;
}
console.log("Resultaat:",resultaat.substring(0,resultaat.length-1));
