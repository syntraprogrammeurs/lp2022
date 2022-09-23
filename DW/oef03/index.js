/*
 *Schrijf een programma die het langste woord uit een zin als resultaat weergeeft.
Voorbeeld:
Geef een zin in: Full Stack Developers are awesome!
Langste woord: Developers

 */
let zin = prompt("Geef een zin in:");
let aantalkarakters = 0;
zin = zin.split(' ');
let langsteWoord = 0;
for(var i = 0; i < zin.length; i++){
    if(zin[i].length > aantalkarakters){
        langsteWoord = zin[i];
        aantalkarakters=zin[i].length;
    }
}
console.log(langsteWoord);
console.log(aantalkarakters);
