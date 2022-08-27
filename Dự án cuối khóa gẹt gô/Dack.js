let both = document.getElementById('SecondButtonInPart1')
window.onload = function(){
    both.onclick = function(){
    let Username = document.getElementById('GmailOrUsername');
    let Password = document.getElementById('Passwords');
    if(Username == "HaiSoaiCa" && Password == "123"){
        alert("Log In Succesfully");
    }else{
        alert("Log in failed")
    }
}
}