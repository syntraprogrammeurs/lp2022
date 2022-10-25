/*
Schrijf een programma die alle priemgetallen in een rij afdrukt. 
Voorbeeld:  Vraag een eindgetal aan de gebruiker: 
Alle getallen gelijk aan en lager dan het eindgetal dienen te worden getest.
  Zijn ze een priemgetal of niet. 
  Een priemgetal is enkel deelbaar door 1 en zichzelf.
*/

//opvragen van een eindgetal aan de gebruiker
let eindGetal = Number(prompt("Geef een eindgetal in:"));

//in de forloop zullen we tellen van 1 tem eindgetal. 1 staat voor de variabele i
for(let i=1;i<=eindGetal;i++){
    // hier stellen we de variabele count op 0
    var count=0;
    //count is een teller die zal nagaan of we aan 2 komen.
    //wanneer een priemgetal enkel deelbaar is door zichzelf en 1 dan zal deze dus
    //2 keer deelbaar zijn en NOOIT meer of NOOIT minder. Dan zijn we zeker
    //dat het over een priemgetal gaat.
    //bijvoorbeeld: het getal 3 is enkel deelbaar door 1 en 3 zelf.
    //hier heb je dus telkens een rest van 0.  Een rest van 0 wil zeggen 2x deelbaar,
    //dus een priemgetal
    //wanneer je het getal 15 zou kiezen dan is deze deelbaar door 1, 3, 5, en 15 en
    //dus 4 x deelbaar. Dit zou dus GEEN priemgetal zijn.
    for(let x=1;x<=i;x++){
        if(i%x===0){
            count++
        }
    }
    //Wanneer count dus ENKEL op twee staat kunnen we het getal afdrukken als zijnde
    //een priemgetal.
    if(count == 2){
        console.log(i);
    }
}
