var title = document.getElementById("title");
var username = document.getElementById("userName");
var useremail = document.getElementById("userEmail");
var userpassword = document.getElementById("userPassword");
var confirmpassword = document.getElementById("confirmPassword");
var submitbtn = document.getElementById("submitBtn");
var loginbtn = document.getElementById("loginBtn")
var rigisterbtn = document.getElementById("rigisterBtn");

loginbtn.onclick= function(){
    title.innerHTML="LOGIN"
    username.style.display="none";
    confirmpassword.style.display="none";
    loginbtn.classList.remove("disable");
    rigisterbtn.classList.add("disable");
}


rigisterbtn.onclick= function(){
    title.innerHTML="RIGISTER"
    username.style.display="block";
    confirmpassword.style.display="block";
    loginbtn.classList.add("disable");
    rigisterbtn.classList.remove("disable");
}
