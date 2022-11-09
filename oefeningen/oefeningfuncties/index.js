function opV(zijde1,zijde2){/*tussen haakjes = parameters (variabelen)**/
    return zijde1 * zijde2
}

function mv(grondtal, exponent){
    return grondtal**exponent
}
function myupper(letter){

    let letterCijfer = letter.charCodeAt(0)-32;
    letterCijfer= String.fromCharCode(letterCijfer);
    return letterCijfer;
}

const pi = Math.sqrt(5);
/** GEBRUIK IN JE PROGRAMMA **/
let kleineLetter ="a";
console.log(myupper(kleineLetter));

/*let getal1= Number(prompt("Geef een zijde in:"));
let getal2=Number(prompt("Geef een zijde in:"));
let resultaat;

resultaat = opV(getal1,getal2);
document.write(resultaat);
resultaat = mv(getal1,getal2);
document.write(resultaat);*/
