/*
1
* */
const huidigeLeeftijd = prompt("Wat is de huidige leeftijd?");
const pensioen = prompt("Wanneer zou je op pensioen willen gaan?");
const huidigJaar = 2022
console.log("U dient nog", pensioen-huidigeLeeftijd,"te werken alvorens u op pensioen kan gaan. We zijn nu in het jaar", huidigJaar,"dus u kan op pensioen gaan in het jaar",huidigJaar+(pensioen-huidigeLeeftijd));
