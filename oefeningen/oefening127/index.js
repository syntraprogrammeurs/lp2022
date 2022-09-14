let getal = Number(prompt("Geef een getal in:"));
while(getal > 100){
    getal = Number(prompt("kleiner of gelijk aan 100:"));
}

let teller = 1;
for(teller;teller <= getal;teller++){
   if(teller%2==0){
       console.log(teller);
   }
}