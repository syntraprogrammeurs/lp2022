/*
Schrijf een programma die ervoor zorgt
dat je ieder derde getal in een reeks 2x weergeeft en ieder
reëel 10de getal in een reeks weglaat maar wel een spatie schrijft.
De gebruiker geeft het eindgetal in. Voorbeeld van de output:
1,2,3,3,4,5,6,6,7,8,9,   ,11.. 99
*/
let teller = 1;
let tellerElkeTiende=10;
let afdruk = "";

//je vraag eerst het eindgetal op aan de gebruiker
let getal = Number(prompt('Geef een getal in:'));
//bovenaan declareren we de teller en stellen die gelijk aan 1
//we laten dus de while loop tellen van 1 tem het ingegeven getal van de gebruiker
while(teller <= getal){
    //eerst zullen we telkens het 10de getal aanpakken in de reeks
    //we declareren het eerste tiende getal bovenaan de code en stellen die gelijk aan 10
    //die vanzelfsprekend het eerste tiende getal zal zijn.
    //in het if statement hieronder testen we de teller. wanneer deze gelijk komt de staan
    //met het 10de getal, nl. tellerElkeTiende dan zullen we enkel een spatie met komma laten
    //staan ipv het getal. Vervolgens tellen we tellerElkeTiende met 10 op zodat we de volgende keer
    //op 20 komen te staan etc.... tot het einde van de reeks . Dit voegen we toe aan de variabele
    //afdruk die bovenaan als een lege string zal gedeclareerd staan.
    if(teller == tellerElkeTiende){
        afdruk += " ,"
        tellerElkeTiende +=10
    //In de elseif doen we een RESTDELING van de teller wanneer deze deelbaar is door 3 met rest 0
        // dan zullen we deze teller 2x voorzien als getal.
    }else if(teller%3 == 0){
        afdruk += teller + "," + teller + ","
        //In alle andere gevallen zal iedere teller gewoon aan afdruk worden toegevoegd.
    }else{
        afdruk += teller + ","
    }
    //vervolgens dienen we niet de vergeten de teller op te tellen om de while loop verder
    //te laten lopen.
    teller++;
}
console.log(afdruk.substring(0,afdruk.length-1));


