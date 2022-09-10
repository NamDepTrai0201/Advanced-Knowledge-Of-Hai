function login(){
    let Username = document.getElementById('GmailOrUsername');
    let Password = document.getElementById('Passwords');
    if(Username.value == "HaiSoaiCa" && Password.value == "123"){
        alert("Log In Succesfully");
    }else{
        alert("Log in failed")
    }
}
