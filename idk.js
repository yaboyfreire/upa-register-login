
var login = false;
function register(){       
    var user = document.getElementById("user").value;
    var pass =document.getElementById("pass").value;
    var pass1=document.getElementById("pass1").value; 
    var email=document.getElementById("email").value;
    var birthday=document.getElementById("birth").value;
    if (pass == pass1) {
        fetch('http://192.168.123.204:8000/api/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user,
                email: email,
                password: pass,
                birthdate: birthday
            })
        }).then(res => res.json())
            .then(res => console.log(res));
    }

}
function login2() {
    alert("Login button pressed");

    var email = document.getElementById("emailLogin").value;
    var password = document.getElementById("passwordLogin").value;

    fetch('http://192.168.123.204:8000/api/login', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(res => res.json())
        .then(res => console.log(res));

}
document.addEventListener("DOMContentLoaded", function() {
   
  });
  function logout() 
  {
    if (login = true){
        getElementById("loginout").innerText="LOGOUT"
    }else{
        getElementById("loginout").innerText="LOGIN"
    }
  }
  
