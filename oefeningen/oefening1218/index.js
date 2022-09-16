/*
* De gebruiker geeft een eindgetal in bijv. 100
* Het programma kiest daarvan zelf een getal tussen 0 en 100 die de gebruiker niet kent.
* Vervolgens dient de gebruiker het getal te raden.
* Het programma antwoord telkens als volgt:
* Het getal is kleiner of het getal is groter.
* Het resultaat: proficiat u hebt het getal in x aantal keer geraden.
* Tip: built in function bekijken
* */
let counter = 0;
const eindGetal = Number(prompt("Geef een eindgetal in:"))
const randomGetal = Math.floor(Math.random() * eindGetal) + 1
document.write(randomGetal);
let raadGetal = Number(prompt("Raad het getal"))
while(raadGetal !== randomGetal){
    if(raadGetal < randomGetal){
        console.log("if");
        document.write("getal is groter");
        counter++;
        raadGetal = Number(prompt("Raad het getal"));
    }else if(raadGetal > randomGetal){
        console.log("elseif");
        document.write("getal is kleiner");
        counter++;
        raadGetal = Number(prompt("Raad het getal"));

    }else{
        counter++;
        document.write("proficiat het getal is",randomGetal, "u heeft het getal in",counter, "geraden");
    }
}


