function postSale() {
    if (localStorage.getItem("role") == "admin"){
        alert("This activity is for attendants only");
        salemodal.style.display = none;
    }else { 
        let currentstock = document.getElementById("thisquant").value;
        let id = document.getElementById('prodid').value;
        console.log(currentstock)
        fetch('http://127.0.0.1:5000/api/v2/sales', { 
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                id: id,
                currentstock: currentstock
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.Message == 'product successfully sold' || 'Alert Minimum stock reached'){
                alert("Sale has been made successfully")
                salemodal.style.display = "none";
            }
            
            document.getElementById('salemessage').innerHTML = data.Message;
            
        })
    }
    
    
}

