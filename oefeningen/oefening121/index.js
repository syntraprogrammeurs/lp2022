let aantalGetallen = Number(prompt("Geef aantal getallen"));

let i = 1;
let totaleSom=0;
for(i;i<=aantalGetallen;i++){
    let ingaveGetal = Number(prompt("Geef getal "+i+ " in"));
    totaleSom = totaleSom + ingaveGetal;
}
console.log("De totale som van",aantalGetallen, "is", totaleSom);

