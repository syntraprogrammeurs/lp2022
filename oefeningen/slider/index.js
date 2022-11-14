var index = 0;
function show_slide(){
    //ophalen van de aangeklikte foto

    // alle image tags inladen
    var images = document.getElementsByClassName('image');
    // dots inladen
    var dots = document.getElementsByClassName('dot');
    //for loop verwijderd active class met leeg
    for(i=0 ; i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active" , "");

            images[i].style.display = "none"

    }
    //wanneer de index groter is dan het aantal images zet dan de index terug op 0
    if(index > images.length-1){
        index = 0;
    }
    //wanneer de index kleiner is dan 0 zet ze dan gelijk met de lengte mvan de images (aantal)
    if(index < 0){
        index = images.length -1;
    }
    //toon enkel de vorige volgende image
    images[index].style.display = "block";
    // actief maken van de huidige dots
    dots[index].className += " active";

}
/**i = 0,1,2**/
function showdot(i){
    index = i;
    show_slide();
}
/* i= -1 of 1*/
function showbtn(i){
 index += i;
 show_slide();
}
window.addEventListener("onload",show_slide(index));
