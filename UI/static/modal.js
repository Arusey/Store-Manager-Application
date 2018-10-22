let editmodal = document.getElementsByClassName("editmodal")[0];
function editModal() {
    editmodal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target === editmodal) {
        editmodal.style.display = "none"; 
    }
}