/*
2
* */
let resultaat ="";
let eindGetal = prompt("Geef een eindgetal in:");
for(let i=eindGetal;i >= 0;i--){
    if(i*2-1 === -1){
        resultaat += 0
    }else{
        resultaat+= i*2-1+","
    }
}
console.log(resultaat);