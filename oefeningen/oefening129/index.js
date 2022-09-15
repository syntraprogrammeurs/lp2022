/*
Schrijf een programma die alle priemgetallen in een rij afdrukt. 
Voorbeeld:  Vraag een eindgetal aan de gebruiker: 
Alle getallen gelijk aan en lager dan het eindgetal dienen te worden getest.
  Zijn ze een priemgetal of niet. 
  Een priemgetal is enkel deelbaar door 1 en zichzelf.
*/
let eindGetal = Number(prompt("Geef een eindgetal in:"));

for(let i=1;i<=eindGetal;i++){
    var count=0;
    for(let x=1;x<=i;x++){
        if(x%i==0){
            count++
        }
    }

    console.log(count);
    if(count == 2){
        console.log(i);
    }
}

