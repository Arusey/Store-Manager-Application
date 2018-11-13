document.getElementById('addProduct').addEventListener('submit', addProduct);
let Message = document.getElementById('Message');
function addProduct(e){
    e.preventDefault(e)
    let name = document.getElementById('name').value;
    let category = document.getElementById('category').value;
    let description = document.getElementById('description').value;
    let currentstock = document.getElementById('currentstock').value;
    let minimumstock = document.getElementById('minimumstock').value;
    let price = document.getElementById('price').value;

    fetch('https://lagatstores.herokuapp.com/api/v2/products', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        },
        body: JSON.stringify({
            name: name,
            category: category,
            description: description,
            currentstock : currentstock,
            minimumstock: minimumstock,
            price: price
        })
    })
    .then(res => res.json())
        .then((data) => {
            document.getElementById('prodmessage').innerHTML = data.Message;
            window.location.replace('stock.html')
        });
}
window.onload = getAllproducts();
function getAllproducts(){
    
}