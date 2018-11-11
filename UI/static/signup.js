document.getElementById('signup').addEventListener("submit", userSignup);
let Message = document.getElementById("Message");

function userSignup(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let role = document.getElementById('role').value;
    let token = localStorage.getItem('token')
    fetch('https://lagatstores.herokuapp.com/api/v2/auth/attsignup', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            role: role
        })
    })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            document.getElementById('adminmessage').innerHTML = data.message;
        })
        .catch((err) => console.log(err))
}