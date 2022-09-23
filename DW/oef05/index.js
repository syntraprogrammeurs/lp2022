/*
 *Geef een string in: Full Stack Developers
Welke letters wil je veranderen ? a,e,...
In welke letters wens je deze te veranderen ? u,i,...

Resultaat: Full Stuck Divilopirs
a,e
* u,i
 */
let zin = prompt("Geef een zin in:").split("");
let lettersVeranderen = prompt("Geef de letters in gescheiden door een komma").split(",");
let lettersNieuw = prompt("In welke letters wens je deze te wijzigen (ingave gescheiden door een komma)").split(",");

for (let i = 0;i <= zin.length; i++){
    for(let x=0;x<= lettersVeranderen.length-1;x++){
        if(zin[i]===lettersVeranderen[x]){
            console.log(zin[i],lettersVeranderen[x],lettersNieuw[x]);
           zin[i]=lettersNieuw[x];
            console.log(zin[i], lettersNieuw[x]);
        }
    }
}
zin=zin.toString();
zin =zin.replaceAll(",","");
console.log(zin);

