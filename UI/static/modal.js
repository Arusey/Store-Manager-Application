
let editmodal = document.getElementsByClassName("editmodal")[0];
let updateproduct = document.getElementById('updateproduct') 
let token = localStorage.getItem('token')
function editModal(id) {
    localStorage.setItem('id', id)
    fetch('http://127.0.0.1:5000/api/v2/products/' +id, {
        headers: {
            'x-access-token': token
        }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let product = data.product
        if (data.Message == 'This token is invalid'){
            alert('Please login first');
            window.location.replace('index.html')
        }
        if (data.Message == 'No products have been posted yet'){
            alert('No product available at the moment');
        }
        let result = '';
        result += `

        <div class="edit-content" >
            <h2>Edit Product</h2><br>
                <form id="editproduct">
                    <table>
                        <tr>
                            <td><label for="name">Name</label></td>
                            <td><input type="text" id="thisname" placeholder="Enter Product name" value="${product.name}"></td>
                        </tr>
                        <br>
                        <br>
                        <tr>
                            <td><label for="Password">Quantity</label></td>
                            <td><input type="text" id="thisstock" placeholder="Enter Quantity" value="${product.currentstock}"></td>
                        </tr>
                        <br>
                        <tr>
                            <td><label for="Price">Price</label></td>
                            <td><input type="text" id="thisprice" placeholder="Enter price" value="${product.price}"></td>
                        </tr>
                        <tr>
                            <td><button class="button" type="submit" onclick="editProduct()">Edit</button></td>
                        </tr>
                    </table>
                </form>
        </div>
        `
        updateproduct.innerHTML = result;
        localStorage.setItem('updateproduct', JSON.stringify(data.product));
    });



    editmodal.style.display = "block";
}

function editProduct(){
    let name = document.getElementById("thisname").value;
        currentstock = document.getElementById("thisstock").value;
        price = document.getElementById("thisprice").value;
    
    let id = int(localStorage.getItem('id'));
    console.log(id)
    let choice = confirm("Sure you wannna update?");
    if (choice) {
        fetch(`http://127.0.0.1:5000/api/v2/products/` + id, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                name: name,
                currentstock: currentstock,
                price: price
            })
        })
            .then(res => res.json())
            .then(data => {
                alert(data)
                if (data.Message == 'This token is invalid') {
                    alert('Login again, session is over')
                    window.location.replace('index.html');
                }
                let updatemodal = document.getElementById('updateproduct');
                updatemodal.innerHTML = '';
                updatemodal.innerHTML = data.Message || data.Message;

            })
            .catch((err) => console.log(err))
    }

}
window.onclick = function(event) {
    if (event.target === editmodal) {
        editmodal.style.display = "none"; 
    }
}
