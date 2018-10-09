var mymodal = document.getElementsByClassName("mymodal")[0];
var infobtn = document.querySelectorAll("#infobtn");
var closeModal = document.querySelectorAll(".close-modal");
var addcart = document.querySelectorAll("addcart")

// let details = document.getElementById("description");
// let close = document.querySelector(".close");
// let closeModal = document.querySelector(".close-modal");
// let addcart = document.querySelector("cart");
//function will display modal inline when clicked
function displayModal() {
    mymodal.style.display = "block";
}

// closeModal.onclick = function(){
//     mymodal.style.display = "none"
// }
window.onclick = function (event) {
    if (event.target === mymodal) {
        mymodal.style.display = "none";
    }
}
