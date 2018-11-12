window.onload = getSaleRecords()
function getSaleRecords(){
    let token = localStorage.getItem('token');
    let salerecord = document.getElementById('salerecords')
    fetch('https://lagatstores.herokuapp.com/api/v2/sales', {
        headers: {
            'x-access-token': token
        }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
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