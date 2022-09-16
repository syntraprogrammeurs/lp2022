let geboorteJaar = Number(prompt("Geef je geboorteJaar in"));
let lopendeJaar = Number(prompt("Geef het huidige jaartal in"));
if(lopendeJaar - geboorteJaar >= 18){
    console.log("Vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen.")
}else if(lopendeJaar- geboorteJaar < 1){
    console.log("Geboortejaar is groter dan huidig jaar, dit kan niet")
}else{
    console.log("Gelukkig heb ik mijn ouders die alles voor me regelen.")
}

