let removeproduct = document.getElementById('removeproduct')
let Message = document.getElementById('Message');

function deleteProduct(id) {
    localStorage.setItem('id', id)
    let token = localStorage.getItem('token')
     let choice  = confirm('Are you sure you want to delete?')
   
    if (choice) {
        fetch('https://lagatstores.herokuapp.com/api/v2/products/' +id, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'x-access-token': token
            }
        })
        .then((res) => res.json())
        .then((data) => {
      
            
            window.location.reload()
            document.getElementById('deletemessage').innerHTML = data.Message;
        })
    }



}