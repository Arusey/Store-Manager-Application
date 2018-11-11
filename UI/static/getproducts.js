window.onload = getAllproducts()
function getAllproducts(){
    let token = localStorage.getItem('token');
    let allproducts = document.getElementById('products')

    fetch('https://lagatstores.herokuapp.com/api/v2/products', {
        headers: {
            'x-access-token': token
        }
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.Message == 'This token is invalid'){
            alert('Please login first');
            window.location.replace('index.html')
        }
        if (data.Message == 'No products available'){
            alert('No products are available at the the moment');
            window.location.replace('index.html')
        }
        let result = '';
        data.products.forEach(product => {
            result += `
            <div id="products" class="myprod">
            <img src="images/image1.jpg" alt="" srcset="">
            <p>${product.name}<br>${product.description}</p>
            <button onclick="saleModal()"><i class="fas fa-shopping-cart"></i>Add To Cart</button>
            <button id="infobtn" onclick="displayModal('${product.id}')"><i class="fas fa-info-circle">More info </i></button>
          </div>

            `
            
            allproducts.innerHTML = result;
        });
        localStorage.setItem('products', JSON.stringify(data.products));
    })
    .catch((error) => console.log(error))
}