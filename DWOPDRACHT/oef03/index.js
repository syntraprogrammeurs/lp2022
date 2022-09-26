/*
3
* */
const eindGetal = Number(prompt("Geef een eindgetal in:"));
let hulpGetal = eindGetal;
let resultaat ="";

for(let i=1;i<=eindGetal;i++){
    resultaat+=(hulpGetal*hulpGetal)+",";
    hulpGetal=hulpGetal+eindGetal;
}
console.log(resultaat.substring(0,resultaat.length-1));