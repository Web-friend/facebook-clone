const email = document.getElementById("wrap1");
const passwd = document.getElementById("secin");

if (email === null) {
     email.innerHTML="facebook@gmail.com"
}

if (passwd.lenght < 8) {
    alert("Please use full password")
}