window.onload = getAllproducts()
function getAllproducts(){
    // e.preventDefault()
    let token = localStorage.getItem('token');
    let allproducts = document.getElementById('adminproducts')

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
            <table>
            <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Delete</th>
            <th>Update</th>
        </tr>   
                <tr>
                    <td>${product.name}</td>
                    <td>${product.currentstock}</td>
                    <td>${product.price}</td>
                    <td>${product.category}</td>
                    <td><i class="far fa-trash-alt" onclick="deleteProduct(${product.id})"></i></td>
                    <td><i class="fas fa-pen-alt" onclick="editModal(${product.id})"></i></td>

                </tr>
            </table>

            `
            
            allproducts.innerHTML = result;
        });
        localStorage.setItem('products', JSON.stringify(data.products));
    })
    .catch((error) => console.log(error))
}