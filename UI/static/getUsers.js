window.onload = getAllusers()
function getAllusers(){
    let token = localStorage.getItem('token');
    let allusers = document.getElementById('allusers')

    fetch('https://lagatstores.herokuapp.com/api/v2/auth/attsignup', {
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
        let result = '';
        data.users.forEach(user => {
            result += `
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    
                </tr>
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.role}</td>

                    <td><span><i class="far fa-trash-alt"></i></span></td>
                </tr>
            `
            allusers.innerHTML = result;
        });
        localStorage.setItem('users', JSON.stringify(data.users));
    })
    .catch((error) => console.log(error))
}