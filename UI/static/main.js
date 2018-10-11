let mymodal = document.getElementsByClassName("mymodal")[0];
let salemodal = document.getElementsByClassName("sale-modal")[0];

function displayModal() {
    mymodal.style.display = "block";
}
function saleModal() {

    salemodal.style.display = "block"
}


window.onclick = function (event) {
    if (event.target === mymodal || event.target === salemodal) {
        mymodal.style.display = "none";
        salemodal.style.display = "none";
    }
}
mymodal.style.display = "none"