let mymodal = document.getElementsByClassName("mymodal")[0];
let salemodal = document.getElementsByClassName("sale-modal")[0];
let singleproduct = document.getElementById('oneproduct')

let token = localStorage.getItem('token')
function displayModal(id) {
    console.log(id)
    fetch('http://127.0.0.1:5000/api/v2/products/' +id, {
        headers: {
            'x-access-token': token
        }
    })
    .then((res) => res.json())
    .then((data) => { 
        let product = data.product
        if (data.Message == 'This token is invalid'){
            alert('Please login first');
            window.location.replace('index.html')
        }
        if (data.Message == 'No products have been posted yet'){
            alert('No product is available for veiwing at the moment');
        }
        let result = '';
        result += `
        <div class="modal-content">
        <h2>Product information</h2>
        <hr>
        <ol>
          <li>Name: <strong>${product.name}</strong></li>
          <li>Quantity: <strong>${product.currentstock}</strong></li>
          <li>Minimum Stock: <strong>${product.minimumstock}</strong></li>
        </ol>
        </div>
        `
        singleproduct.innerHTML = result;
        localStorage.setItem('oneproduct', JSON.stringify(data.product) );
    });
    
    mymodal.style.display = "block";
    
}
function saleModal() {

    salemodal.style.display = "block"
}




window.onclick = function(event) {
    if (event.target === mymodal || event.target === salemodal) {
        
        mymodal.style.display = "none";
        salemodal.style.display = "none";
    }
}