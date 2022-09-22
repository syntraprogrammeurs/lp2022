/*
 *Vraag aan de gebruiker een eindgetal.
Zorg ervoor dat het resultaat kleiner is dan het eindgetal.
Zoek zelf het verband.
Voorbeeld:
Geef een eindgetal in: 6
Resultaat: 122333444455555
 */
let eindGetal = Number(prompt("Geef een eindgetal in:"));//6
let resultaat = "";

for(let i=1;i<eindGetal;i++){//1tem6
    for(let x=1;x<=i;x++){
        resultaat += i;
    }
}
console.log(resultaat);