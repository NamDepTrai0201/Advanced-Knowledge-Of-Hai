// Lưu trữ thông tin vào local

// let GmailOrUsernameInput = []
// const addBoth = ()=>{
//     let GmailOrUsername ={
//         GmailOrUsername: document.getElementById('GmailOrUsername').value,
//         Passwords: document.getElementById('Passwords').value
//     };
//     GmailOrUsernameInput.push(GmailOrUsername);
//     document.forms[0].reset();
//     console.log(GmailOrUsername);

//     localStorage.setItem("Thông tin người dùng" , JSON.stringify(GmailOrUsernameInput))
// };
//     document.getElementById('ButtonSignIn').addEventListener('click' , addBoth);
//------------------------------------------------------------------------------------------
// Đăng nhập và thông báo
ButtonSignIn.onclick = function(){
    var GmailOrUserName = document.getElementById("GmailOrUsername").value;
    var Password = document.getElementById("Passwords").value;
    if(GmailOrUserName==="27KQrtd.thn@gmail.com" && Password==="ohlord"){
        alert("login succesfully")
    }else{
        alert("login failed")
    }
}
