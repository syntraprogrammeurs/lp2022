/*
5
* */

let getal1= Number(prompt("Geef getal 1 in:"))
let getal2=Number(prompt("Geef getal 2 in:"))
let getal3=Number(prompt("Geef getal 3 in:"))
let som=0
let resultaat = "";
for(let i=getal1;i<=getal2;i++){
    for(let x=0;x<i.toString().length;x++){
        let testNumber = i.toString()[x];
        som = som + Number(testNumber);
    }
    if(som ===getal3){
        resultaat = resultaat + i+","
    }
    som=0;
}
console.log(resultaat.substring(0,resultaat.length-1));