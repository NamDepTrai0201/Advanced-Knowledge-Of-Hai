let GmailOrUsernameInput = []
const addBoth = ()=>{
    let GmailOrUsername ={
        GmailOrUsername: document.getElementById('GmailOrUsername').value,
        Passwords: document.getElementById('Passwords').value
    };
    GmailOrUsernameInput.push(GmailOrUsername);
    document.forms[0].reset();
    console.log(GmailOrUsername);
    
    localStorage.setItem("Thông tin người dùng" , JSON.stringify(GmailOrUsernameInput))
};
    document.getElementById('ButtonSignIn').addEventListener('click' , addBoth);
