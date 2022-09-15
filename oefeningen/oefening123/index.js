/*
Schrijf een programma die het volgende op het scherm weergeeft:
 De gebruiker geef een even aantal even lijnen in.
*
**
***
****
*****
*****
****
***
**
*
*/

const aantalLijnen = Number(prompt("Geef een aantal lijnen in:"));//10
const helft = aantalLijnen/2;//5
let ster = "*";
//1<=5
for(let i=1;i<=helft;i++){
    console.log(ster);
    ster=ster + "*";
}
ster = ster.substring(0,ster.length-1);
for(let i=1; i<= helft;i++){
    console.log(ster);
    ster = ster.substring(0,ster.length-1);
}