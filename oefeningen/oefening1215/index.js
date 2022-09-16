/*
Schrijf een programma waarin je aan de gebruiker vraagt
hoeveel getallen hij wil ingeven. Schrijf vervolgens het totaal
van alle ingegeven getallen op het scherm.
 De totale som van x getallen is x.
 Voorbeeld:
 Hoeveel getallen?: 3
 Geef getal 1 in:
 Geef getal 2 in:
 Geef getal 3 in
 De totale som van 3 getallen is x.
 Het gemiddelde van de 3 getallen is x

*/

let som = 0;
let teller = 1;
let gemiddelde = 0;

// vraag het aantal in te geven getallen aan de gebruiker
aantalGetallen = Number(prompt('Geef getal in:'));
// dankzij het aantalGetallen weten we nu hoeveel keer we de while loop zullen gebruiken
//we hebben hiervoor een variabele teller nodig die we bovenaan onze code op 1 zetten
// we lussen dus van 1 tem het aantalGetallen in de while
while(teller <= aantalGetallen){
    //hier zullen we telkens de vraag herhalen om een getal in te geven
    //deze vraag wordt zolang gesteld tot we het aantalGetallen bereiken die gewenst waren
    let getal = Number(prompt('Geef getal in'));
    //bovenaan de code declareren we een som die start op 0. Deze som zullen we telkens optellen
    //met het nieuwe getal die de gebruiker ingeeft
    som += getal;
    //In tegenstelling tot de for loop moeten we in de while loop ZELF de teller laten optellen
    //we verhogen de teller dus met 1
    teller++;
}
//vervolgens drukken we de totale som af
console.log("De totale som van:",aantalGetallen,"getallen is", som);
//dankzij de som kunnen we nu ook het gemiddelde berekenen door de som te delen door het
//aantal getallen
gemiddelde = som/aantalGetallen;
//vervolgens drukken we het gemiddelde af
console.log("Het gemiddelde van:",aantalGetallen,"getallen is", gemiddelde);
