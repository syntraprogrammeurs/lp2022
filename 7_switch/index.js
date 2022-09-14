let onderwijs = prompt("Geef een instelling in?");
switch(onderwijs){
    case 'vdab':
        console.log("Cursus gegeven door vdab");
        break;
    case 'syntra':
        console.log("Cursus gegeven door syntra");
        break;
    default:
        console.log("Cursus gegeven door een andere instelling");
}

/**VERKORTE NOTATIE IF STATEMENT**/
let getal1 = 2;
let getal2 = 3;

getal1>getal2 ? console.log("getal1 is groter") : console.log("getal2 is groter");

/**ORIGINELE VORM**/
if(getal1>getal2){
    console.log("getal1 is groter")
}else{
    console.log("getal2 is groter");
}

