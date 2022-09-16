/*
Schrijf een programma die het kleinste gemeen veelvoud van 2 getallen weergeeft.
Vraag aan de gebruiker de 2 getallen  Voorbeeld:
o Getallen 15 en 27
o Weergave op het scherm:
o Het kleinste gemene veelvoud van 15 en 27 is: 135
*/

/** STAP 1
 * Het kleinste gemeen veelvoud van 2 getallen
 * Voorbeeld:
 * het kleinste gemeen veelvoud van 15 en 27 is = 135
 *
 * Berekening:
 * 15x27 = 405
 * dan bereken je eerste de grootste gemene deler van deze twee.
 * de grootste gemene deler van 15 en 27 is 3
 * 405/3 = 135.
 * 135 is het kleinste gemene veelvoud.
 *
 * We nemen dus eigenlijk integraal de vorige oefening over
 * en voegen de vermenigvuldiging van de twee getallen toe in breukTeller
 * Vervolgens delen we breukTeller door grootsteGemeneDeler.
 * **/
let breukTeller=0;
let eersteGetal=Number(prompt('Eerste getal'));
let tweedeGetal=Number(prompt('Tweede getal'));
let grootsteGemeneDeler = 0;
let kleinsteGemeenVeelvoud = 0;

breukTeller = eersteGetal * tweedeGetal;
for(let x=1; x <=eersteGetal;x++){
    if(eersteGetal%x == 0 && tweedeGetal%x ==0){
        grootsteGemeneDeler = x;
    }
}
kleinsteGemeenVeelvoud = breukTeller/grootsteGemeneDeler;
console.log(kleinsteGemeenVeelvoud)
