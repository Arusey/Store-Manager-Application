document.getElementById("loginform").addEventListener("submit", userLogin);
let Message = document.getElementById("Message");
function userLogin(e) {

    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    fetch('https://lagatstores.herokuapp.com/api/v2/auth/login', {
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


            document.getElementById('message').innerHTML = data.Message;
            // alert(data.Message)
            if (data.Message == 'user successfully logged in') {
                let token = data.token;
                localStorage.setItem('token', token);
                fetch('https://lagatstores.herokuapp.com/api/v2/auth/attsignup', {
                    headers: {
                        'x-access-token': token
                    }
                })
                .then((res) => res.json())
                .then((data) => {
                    data.users.forEach(user => {
                        if (user.email == email){
                            if (user.role == "admin"){
                             window.location.replace('admin.html');
                        }
                        else{
                            window.location.replace('home.html');
                        }
                    }
                    });
                    
                })

            }


        })
        .catch((err) => console.log(err))
}