/** Numeriek arrays **/
let cursist = [] /*lege array*/
let cursisten = ['Tom', 'Tim', 'Bart', 'Els']; /* array van strings*/
let cursusJaar =[2018,2019,2020,2023];/*Array van Numbers*/
/*let cursusjaar= new Array(2018,2019,2020,2023);*/
/*console.log(cursisten);
console.log(cursisten.length);
console.log(cursusJaar[1]);*/
let divResultaat = document.getElementById("resultaat");
divResultaat.innerHTML = cursisten[0];

/** associatieve arrays **/
let leerling={
    "Voornaam":'Tom',
    "Familienaam": 'Vanhoutte',
    "Plaats":'Roeselare',
    "Telefoon": "050112233",
}
console.log(leerling["Voornaam"]);
let familienaam = document.getElementById("familienaam");
familienaam.innerHTML = leerling["Familienaam"];

familienaam.innerHTML += " " + leerling["Voornaam"];
familienaam.innerHTML += " " + leerling["Telefoon"];

/**meerdimensionale arrays**/
let courseTeacher = [
    ['HTML5','Tom Vanhoutte'],
    ['CSS3', 'Tom Vanhoutte'],
    ['PHP', 'Tim Vanpimperzele'],
    ['JAVASCRIPT', 'Nie moeilijk']
]
console.log(courseTeacher[2][1]);

/** elementen toevoegen/verwijderen aan een array **/
cursisten.push('Marieke'); /* toegevoegd aan het einde van de array*/
console.log(cursisten);
cursisten.unshift('Thomas');/*toevoegen aan het begin van de array*/
console.log(cursisten);
cursisten.pop(); /*verwijderen laatste element*/
console.log(cursisten);
cursisten.shift(); /* verwijderen eerste cursist*/
console.log(cursisten);
cursisten.sort();/*sorteren van een array*/
console.log(cursisten);
cursisten.reverse();
console.log(cursisten);

let zin = "Full Stack Developers"
zin.split("");/*uit een array worden strings gemaakt*/
console.log(zin[0]);
let test = zin.split(" ");
console.log(test);

zin.toLowerCase();/*omzetten naar kleine letters*/
zin.toString();/* zet een array naar een string om */

/**arrays en loops**/
for(let i=0;i<cursisten.length;i++){
    console.log(cursisten[i]);
}

let i=0;
while(i <cursisten.length){
    console.log(cursisten[i]);
    i++;
}

for(let item in cursisten){
    console.log(item,':',cursisten[item]);
}

cursisten.forEach(mijnFunctie)

function mijnFunctie(value,index){
    console.log(index,':', value);
}
let getal1 = 5;
let getal2= 6;
function som(a,b){
    return a+b;
}
function product(vanpimperzele,brugge){
    return vanpimperzele*brugge;
}
let resultaat = product(getal1,getal2);
console.log(resultaat);


let numbers = [1,2,3,4,5];

let multiply = numbers.map(x => x*2);
console.log(multiply);



