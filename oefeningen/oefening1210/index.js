/*
1x1=1; 1x2=2; 1x3=3 ... 1x12=12
*/

/** stap 1 ***/
/*const tafel = Number(prompt("geef een tafel in:")); //1
const eindGetal = Number(prompt("Geef een eindgetal in:"));//12

for(let i=1;i<=eindGetal;i++){
  console.log(tafel,"x",i,"=",tafel*i,",");
}*/
/**stap 2
 * naast elkaar zetten van de berekeningen
 * **/
/*
const tafel = Number(prompt("geef een tafel in:")); //1
const eindGetal = Number(prompt("Geef een eindgetal in:"));//12
let resultaat="";
for(let i=1;i<=eindGetal;i++){
    resultaat = resultaat + tafel+"x"+i+"="+tafel*i+","
}
console.log(resultaat);*/
/**stap 3
 * onder elkaar zetten per drie
 * **/
/*const tafel = Number(prompt("geef een tafel in:")); //1
const eindGetal = Number(prompt("Geef een eindgetal in:"));//12
let resultaat="";
for(let i=1;i<=eindGetal;i++){
    for(let x=1;x<=3;x++){
        resultaat = resultaat + tafel+"x"+i+"="+tafel*i+","
    }
    console.log(resultaat);
    resultaat ="";
}*/
/**stap 4
 * extra teller voorzien om te vermenigvuldigen
 * de i wordt vervangen door een andere teller
 * **/
/*const tafel = Number(prompt("geef een tafel in:")); //1
const eindGetal = Number(prompt("Geef een eindgetal in:"));//12
let resultaat="";
let y=1;
for(let i=1;i<=eindGetal;i++){
    for(let x=1;x<=3;x++){
        resultaat = resultaat + tafel+"x"+y+"="+tafel*y+","
        y++;
    }
    console.log(resultaat);
    resultaat ="";
}*/
/**stap 5
 * enkel het aantal lijnen tonen die gevraagd zijn
 * **/
/*const tafel = Number(prompt("geef een tafel in:")); //1
const eindGetal = Number(prompt("Geef een eindgetal in:"));//12
let resultaat="";
let y=1;
for(let i=1;i<=eindGetal;i++){
    if(y<=eindGetal){
        for(let x=1;x<=3;x++){
            resultaat = resultaat + tafel+"x"+y+"="+tafel*y+","
            y++;
        }
    }
    console.log(resultaat);
    resultaat ="";
}*/
/**stap 6
 * komma's weg
 * **/
/*const tafel = Number(prompt("geef een tafel in:")); //1
const eindGetal = Number(prompt("Geef een eindgetal in:"));//12
let resultaat="";
let y=1;
for(let i=1;i<=eindGetal;i++){
    if(y<=eindGetal){
        for(let x=1;x<=3;x++){
            resultaat = resultaat + tafel+"x"+y+"="+tafel*y+","
            y++;
        }
    }
    console.log(resultaat.substring(0,resultaat.length-1));
    resultaat ="";
}*/
/**stap 7
 * test op tafel 2 met combinatie 49 verwijder overbodige berekening
 * **/
const tafel = Number(prompt("geef een tafel in:")); //1
const eindGetal = Number(prompt("Geef een eindgetal in:"));//12
let resultaat="■ ";
let y=1;
for(let i=1;i<=eindGetal;i++){
    if(y<=eindGetal){
        for(let x=1;x<=3;x++){
            if(y<=eindGetal) {
                resultaat = resultaat + tafel + "x" + y + "=" + tafel * y + ","
                y++;
            }
        }
        console.log(resultaat.substring(0,resultaat.length-1));
        resultaat ="■ ";
    }

}