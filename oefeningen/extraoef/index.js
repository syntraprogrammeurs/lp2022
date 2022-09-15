/**
 * Geef een te raden getal in: 67
 * Raad het getal: 5
 *
 * de pc zegt dan hoger of lager tot het getal geraden is
 * geef ook weer hoeveel pogingen de gebruiker nodig heeft.
 *
 * for loop!
 * **/
let teRadenGetal = Number(prompt("Te raden getal?"));
var raadGetal =Number(prompt("Geef een getal in?"));
let counter = 0;
for(let teller=1;teller > 0;teller++){
    if(raadGetal < teRadenGetal){
        console.log("getal is groter");
        counter++;
        raadGetal =Number(prompt("Geef een getal in?"));
    }else if(raadGetal > teRadenGetal){
        console.log("getal is kleiner");
        counter++;
        raadGetal =Number(prompt("Geef een getal in?"));
    }else{
        counter++;
        console.log("gevonden, het getal is", raadGetal, "en je hebt", counter, "geraden");
        teller = -1;
    }

}
