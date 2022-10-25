function getInputForm() {
    maxGetal = document.getElementById("maxgetal").value;
    hoeveelGetallen = document.getElementById("maxoef").value;
    myPrint();
}

let maxGetal;
let hoeveelGetallen;
let array1 = [];
let array2 = [];
let array3 = [];

function myPrint() {
    let resultaat="";
    let x = 0;
    while (x < hoeveelGetallen) {
        array1.push(Math.floor(Math.random() * maxGetal));
        array2.push(Math.floor(Math.random() * maxGetal));
        array3.push(array1[x] + array2[x]);
        /*document.write(`${array1[x]} + ${array2[x]} = ${array3[x]}<br>`);*/
        resultaat = document.getElementById("cardExample");
        resultaat.innerHTML +=`
        <div class="p-lg-2 col-lg-3">
          <div class="card">
              <img src="https://via.placeholder.com/800x600" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
         </div>
       `
        x++;
    }
}

