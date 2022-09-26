/*
4
* */
let beginGetal = Number(prompt("Geef een begingetal in:"));
let eindGetal = Number(prompt("Geef een eindgetal in:"));;
let sprong = Number(prompt("Geef een sprong in:"));;
let regel = 1;
let resultaat = "";

for(let i=1;i<=eindGetal;i++){
    for(let x=1;x<=regel;x++){
        if(regel > 1){
            beginGetal+=1;
        }
        resultaat += beginGetal+",";
    }
    console.log(resultaat)
    resultaat="";
    regel=sprong+regel;
}
