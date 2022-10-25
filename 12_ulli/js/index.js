let cursisten = ['Tom', 'Bart', 'Tim','Els'];
var newUl = document.createElement("ul");
document.body.appendChild(newUl);
for(index in cursisten){
    var newli = document.createElement("li");
    newUl.appendChild(newli);
    newli.innerHTML=newli.innerHTML + cursisten[index];
}
