const registerButton = document.getElementById('register-button');
const formDiv = document.getElementById('hideOnSuccess')
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET'
}

registerButton.addEventListener('click', function (event) {
    event.preventDefault();
    let userId = document.getElementById("phoneNumber").value;
    fetch(`https://foodindo.onrender.com/api/v1/user/${userId}/register`, {
        method: "GET",
        headers: headers
    })
        .then(response => {
            console.log(response)
            if (response.ok) {
                return response.json()
            }
            throw new Error("Bad Request")
        })
        .then(data => {
            console.log(data)
            let src = data.qr_code_url;
            console.log(src)
            let img = document.createElement('img');
            if (src != '') {
                formDiv.classList.add('hide')
                img.src = src;
                document.body.appendChild(img);
            }
        })
        .catch(error => console.error(error));
});