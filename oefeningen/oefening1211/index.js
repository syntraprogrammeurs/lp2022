/**
 * Fibonacci
 * **/

/** STAP 1**
 * Zorg ervoor dat het eerste cijfer namelijk 0 in je console.log als eerste wordt afgedrukt.
 * In onderstaande stap zullen 10 rijen met het getal 0 worden afgebeeld.
 */
/*
const number = Number(prompt('Enter the number of terms: '));
let g1 = 0;

console.log('Fibonacci reeks:');

for (let i = 1; i <= number; i++) {
    console.log(g1);
}
*/
/*--------------------------------*/
/** STAP 2**
 * Zorg ervoor dat het eerste cijfer namelijk 0 in je console.log als eerste wordt afgedrukt.
 * In onderstaande stap zal je het eerste getal (g1) namelijk 0 en het tweede getal namelijk (g2).
 * optellen met elkaar en in de variabele volgend item steken.
 * Aan het resultaat wijzigt er voorlopig niets
 */
/*
const number = Number(prompt('Enter the number of terms: '));
let g1 = 0, g2 = 1, volgendItem;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(g1);
    volgendItem = g1 + g2;
}
*/
/** STAP 3**
 * Dit is de stap die de moeilijkheid van deze oefening zal oplossen.
 * je dient namelijk de getallen te verplaatsen, m.a.w. te overschrijven.
 * g1 wordt overschreven met g2. Daarnaast heb je een derde variabele nodig, nl. volgendItem
 * Het volgendItem stop je dan weer in g2.  Aangezien het volgendItem van de vorige stap de
 * som was van g1 en g2, dan klopt dit.
 */
/*
const number = Number(prompt('Enter the number of terms: '));
let g1 = 0, g2 = 1, volgendItem;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(g1);
    volgendItem = g1 + g2;
    g1 = g2;
    g2 = volgendItem;
}
*/
/** STAP 4**
 * Zet het resultaat op 1 lijn. Hiervoor gebruiken we een vierde variabele "afdruk".
 * we vangen alle g1 op in afdruk. Wanneer de loop volledig doorlopen is, dan drukken
 * we die af BUITEN de loop.
 */
/*
const number = Number(prompt('Enter the number of terms: '));
let g1 = 0, g2 = 1, volgendItem, afdruk="";

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    afdruk = afdruk + g1 + ",";
    volgendItem = g1 + g2;
    g1 = g2;
    g2 = volgendItem;
}
console.log(afdruk);
*/
/** STAP 5**
 * we verwijderen de laatste komma in het resultaat
 */
const number = Number(prompt('Enter the number of terms: '));
let g1 = 0, g2 = 1, volgendItem, afdruk="";

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    afdruk = afdruk + g1 + ",";
    volgendItem = g1 + g2;
    g1 = g2;
    g2 = volgendItem;
}
console.log(afdruk.substring(0,afdruk.length-1));
