window.onload = getAllsales()
function getAllsales(){
    let token = localStorage.getItem('token');
    let allsales = document.getElementById("totalsales")

    fetch('https://lagatstores.herokuapp.com/api/v2/sales', {
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
        if (data.Message == 'unfortunately no sale has been made'){
            alert('No sales have been made yet')
            window.location.replace('home.html')
        }
        let result = '';
        data.sales.forEach(sale => {
            console.log(data)
            result += `
            <table>
            <tr>
                <th>Sale ID</th>            
                <th>Product Type</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Sale made by</th>
            </tr>
            <tr>
                <td>${sale.saleid}</td>
                <td>${sale.productname}</td>
                <td>${sale.quantity}</td>
                <td>${sale.category}</td>
                <td>${sale.price}</td>
                <td>${sale.attendantname}</td>
       


            </tr>
            </table>
           
            
            `
            allsales.innerHTML = result;
        });
        localStorage.setItem('sales', JSON.stringify(data.sales));
        
    })
    .catch((error) => console.log(error))
}