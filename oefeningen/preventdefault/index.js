document.querySelector("#id-checkbox").addEventListener("click",function(event){
    document.querySelector("#resultaat").innerHTML += "Sorry! <code>prevendefault()</code>verbied u dit aan te vinken. Click event uitgeschakeld";
    event.preventDefault();
})