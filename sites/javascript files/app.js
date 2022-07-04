let index;
let planeten = undefined;

function showUI(){
    let htmlObj = document.getElementById("identification");
    htmlObj.innerHTML =
        `Planet: ${planeten.planet}<br>`+
        `Umfang: ${planeten.umfang}<br>`+
        `Nummerierung: ${planeten.nummerierung}`;


    htmlObj = document.getElementById("monde");
    htmlObj.innerHTML = "";
    planeten.monde.monde.forEach(modulid => {
        htmlObj.innerHTML += `${modulid}<br>`;
    });

    htmlObj = document.getElementById("showIndex");
    htmlObj.innerHTML = "";
    htmlObj.innerHTML = index;
}
function showNext() {
    index = localStorage.getItem("index");
    console.log(index);
    if (index == undefined){
        index = 0;
    } else {
        if (planetenListe.length-1 > index){
            index++;
        }
    }
    localStorage.setItem("index", index);
    planeten = planetenListe[index];
    showUI();
}
function showPrevious() {
    index = localStorage.getItem("index");
    console.log(index);
    if (index == undefined){
        index = 0;
    } else {
        if (index > 0){
            index--;
        }
    }
    localStorage.setItem("index", index);
    planeten = planetenListe[index];
    showUI();
}
if (planeten === undefined){
    index = 0;
    localStorage.setItem("index", index);
    showUI();
}
