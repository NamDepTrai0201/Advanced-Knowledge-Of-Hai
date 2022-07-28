let giohang = document.querySelectorAll('.Themvaogiohang');

for (let i = 0 ; i < giohang.length; i++){
    giohang[i].addEventListener("click",()=>{
            Soluonggiohang();
        });
};

function Soluonggiohang (){
    // localStorage.setItem('Số lượng giỏ hàng' , 1);
    let soluong = localStorage.getItem('Soluonggiohang');

    soluong = parseInt(soluong);

    if ( soluong ){
        localStorage.setItem('Soluonggiohang' , soluong + 1);
    }else{
        localStorage.setItem('Soluonggiohang' , 1);
    }
}