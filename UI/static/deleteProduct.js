let removeproduct = document.getElementById('removeproduct')
let Message = document.getElementById('Message');

function deleteProduct(id) {
    localStorage.setItem('id', id)
    let token = localStorage.getItem('token')

    fetch('http://127.0.0.1:5000/api/v2/products/' +id, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'x-access-token': token
        }
    })
    .then((res) => res.json())
    .then((data) => {
        alert(data.message)
        window.location.reload()
        document.getElementById('deletemessage').innerHTML = data.Message;
    })

}