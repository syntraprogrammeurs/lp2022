/*
* declareer de volgende variabelen:
* getal1,getal2, quotient, verschil, som, product
* Druk af in console.log wat het resultaat is van
* deze 2 getallen.
* */

let getal1 = Number(prompt("Geef getal 1 in:"));
let getal2 = Number(prompt("Geef getal 2 in:"));
let quotient, rest, verschil, som, product;
quotient = getal1/getal2;
rest = getal1%getal2;
verschil = getal1-getal2;
som =getal1+getal2;
product = getal1*getal2;

console.log("het quotient is:",quotient);
console.log(rest);
console.log(verschil);
console.log(som);
console.log(product);
