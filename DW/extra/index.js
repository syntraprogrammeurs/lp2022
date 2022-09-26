/** loops **/

/**optellen en onder elkaar weergeven**/
for(let i=1;i<=10;i++){
    console.log(i);
}
/**optellen met 2 cijfers en onder elkaar weergeven**/
for(let i=1;i<=10;i+=2){
    console.log(i);
}
/**optellen en naast elkaar weergeven**/
let resultaat ="";
for(let i=1;i<=10;i++){
    resultaat = resultaat + i +",";
}
console.log(resultaat);
console.log(resultaat.substring(0,resultaat.length-1));

/**aftrekken en onder elkaar weergeven**/
for(let i=10;i>=0;i--){
    console.log(i);
}
/**aftrekken met 2 cijfers en onder elkaar weergeven**/
for(let i=10;i>=0;i-=2){
    console.log(i);
}
/**aftrekken en naast elkaar weergeven**/
let resultaat2 ="";
for(let i=10;i>=0;i--){
    resultaat2 = resultaat2 + i +",";
}
console.log(resultaat2);
console.log(resultaat2.substring(0,resultaat2.length-1));

/**geneste for loop**/
for(let i=1;i<=20;i++){
    for(let x=1;x<=i;x++){
        console.log(i+":"+x);
    }
}