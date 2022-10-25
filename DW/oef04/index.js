/*
 *Geef een string in en draai deze om.

Voorbeeld:
Geef een string in: Full Stack Developers
Resultaat: srepoleveD kcatS lluF

 */
let zin = prompt("Geef een zin in:");//Full Stack Developers
let omgekeerd ="";

let i = zin.length; //21
let x = zin.length-1;//20

while(i>=0){
    omgekeerd += zin.substring(x,i);//s
    x--;
    i--;
}
console.log(omgekeerd);

