document.getElementById('login').addEventListener("click", userLogin);
let Message = document.getElementById("Message");

function userLogin(e){
    e.preventDefault();
    let email = document.getElementById('email').value;
    console.log(email)
    let password = document.getElementById('password').value;
    console.log(password)
    fetch('http://127.0.0.1:5000/api/v2/auth/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(res => res.json())
        .then((data) => {

            console.log(data.token)
            document.getElementById('message').innerHTML = data.Message;
            // Message.innerHTML = data.Message;
            console.log(data.Message)
            if(data.Message == 'user successfully logged in'){

                let token = data.token;
                console.log(token)
                localStorage.setItem('token', token);
                console.log(token)
                window.location.replace('home.html')
            }
        })
        .catch((err) => console.log(err))
    }