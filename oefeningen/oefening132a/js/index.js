

function getInputForm(){
    maxGetal = document.getElementById("maxgetal").value;
    hoeveelGetallen = document.getElementById("maxoef").value;
    myPrint();
}
let resultaat="";
let maxGetal;
let hoeveelGetallen;
let array1 = [];
let array2 = [];
let array3 = [];
let x = 0;
let accordion="";
function myPrint(){
    while(x < hoeveelGetallen){
        array1.push(Math.floor(Math.random()* maxGetal));
        array2.push(Math.floor(Math.random()* maxGetal));
        array3.push(array1[x]+array2[x]);
        /*document.write(`${array1[x]} + ${array2[x]} = ${array3[x]}<br>`);*/
        resultaat = document.getElementById("resultaat");
        resultaat.innerHTML += `<p class="text-primary list-group-item m-0">${array1[x]} + ${array2[x]} = ${array3[x]}</p>`;
        accordion = document.getElementById("accordionExample");
        if(x === 0){
            accordion.innerHTML +=` <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ${array1[x]} + ${array2[x]} =
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    ${array1[x]} + ${array2[x]} = ${array3[x]}
                </div>
            </div>`
        }else{
            accordion.innerHTML +=`  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        ${array1[x]} + ${array2[x]} =
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        ${array1[x]} + ${array2[x]} = ${array3[x]}
      </div>
    </div>
  </div>`
        }

        x++;
    }
}

