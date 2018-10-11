let mymodal = document.getElementsByClassName("mymodal")[0];
// let infobtn = document.querySelectorAll("#infobtn");
// let closeModal = document.querySelectorAll(".close-modal");
// let addcart = document.getElementsByClassName("addcart")["0"];
 
let salemodal = document.getElementsByClassName("sale-modal")[0];

function displayModal() {
    mymodal.style.display = "block";
}
function saleModal() {

    salemodal.style.display = "block"
}
// function addCart() {
//     addcart
// }


window.onclick = function (event) {
    if (event.target === mymodal || event.target === salemodal) {
        mymodal.style.display = "none";
        salemodal.style.display = "none";
    }
}
mymodal.style.display = "none"
// window.onclick = function (event) {
//     if (event.target === salemodal) {
//         salemodal.style.display = "none";
//     }
// }