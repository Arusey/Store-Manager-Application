window.onload = getSaleRecords()
function getSaleRecords(){
    let token = localStorage.getItem('token');
    let salerecord = document.getElementById('salerecords')
    fetch('http://127.0.0.1:5000/api/v2/sales', {
        headers: {
            'x-access-token': token
        }
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.Message = 'This token is invalid'){
            alert('Please login first');
            window.location.replace('index.html')
        }
        if(data.Message == 'unfortunately no sale has been made'){
            alert('No sales have been made yet')
            window.location.replace('home.html')
        }
        let result = '';
        data.sales.forEach(sale => {
            result += `
            <table>
        <tr>
            <th>Product Type</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Price</th>
        </tr>
        <tr>
            <td>${sale.productname}</td>
            <td>${sale.quantity}</td>
            <td>${sale.category}</td>
            <td>${sale.price}</td>
        </tr>
            </table>
            
            `
            salerecord.innerHTML = result;

        });
        localStorage.setItem('sales', JSON.stringify(data.sales));
    })
    .catch((error) => console.log(error))
}