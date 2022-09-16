/*
Schrijf een programma die een aantal getallen inleest en
eindigt wanneer de gebruiker een negatief getal ingeeft.
 Schrijf daarna de som van de getallen op het scherm.
*/
let som = 0;
let getal = Number(prompt('Geef een getal in, stop met een negatief getal'));
while(getal >=0){
    som += getal;
    getal = Number(prompt('Geef een getal in, stop met een negatief getal'));
}
console.log(som);
