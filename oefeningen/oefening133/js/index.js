function getInputForm(){
    var maxGetal = document.getElementById("maxgetal").value;
    var hoeveelGetallen = document.getElementById("maxoef").value;
}

let array1 = [];
let array2 = [];
let array3 = [];
let x = 0;

/*maxGetal = Number(prompt("geef een maximum getal in:"));
hoeveelGetallen = Number(prompt("Hoeveel oefeningen wil je?"))*/
while(x < hoeveelGetallen){
    array1.push(Math.floor(Math.random()* maxGetal));
    array2.push(Math.floor(Math.random()* maxGetal));
    array3.push(array1[x]+array2[x]);
    document.write(`${array1[x]} + ${array2[x]} = ${array3[x]}<br>`);
    x++;
}





