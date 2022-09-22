function login(){
    let Username = document.getElementById('GmailOrUsername');
    let Password = document.getElementById('Passwords');
    if(Username.value == "HaiSoaiCa" && Password.value == "123"){
        alert("Log In Succesfully");
    }else{
        alert("Log in failed")
    }
};
// let giohang = document.querySelectorAll('.AddToCartButton2')

// for(let i = 0 ; i < giohang.length ; i++){
//     giohang[i].addEventListener("click" , ()=>{
//         Soluonggiohang()
//     })
// };
// function Soluonggiohang(){
//     let soluong = localStorage.getItem('Soluonggiohang')
//     soluong = parseInt(soluong)
//     if ( soluong ){
//         localStorage.setItem('Soluonggiohang' , soluong + 1);
//     }else{
//         localStorage.setItem('Soluonggiohang' , 1);
//     }
// }
