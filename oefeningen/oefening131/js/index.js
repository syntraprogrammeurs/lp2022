/*
Schrijf  een  programma  waarmee  je  aan  de  gebruiker  vraagt  om  getallen  in  te  geven
tot hij een negatief getal intikt.  Lees de getallen in een array in.
Geef GETAL x in:
Vervolgens  vraag  je  aan  de  gebruiker  het  hoeveelste  getal  hij  wenst  te  zien  op  het
scherm.*/
let getal=0;
let getallenArray=[];
let teller = 1;

/**opvragen van alle getallen**/
while(getal >=0){
    getal = Number(prompt(`Geef getal ${teller} in`));
    getallenArray.push(getal);
    teller++;
}
getallenArray.pop();

/**hoeveelste getal**/
let index = Number(prompt("Het hoeveelste getal wens je te zien?"))-1;
document.write(getallenArray[index]);





