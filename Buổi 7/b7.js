// let a = prompt("Nhập số a")
// console.log("Số a là :" , a);

// let b = prompt("Nhập số b")
// console.log("Số b là :" , b);

// let tong = prompt("Nhập số tổng bạn muốn đặt")
// console.log("Số tổng là :" , tong);

// let lantinhdautien = console.log(tong - b)

// if(lantinhdautien > 0){
//     console.log(lantinhdautien / a)
// }
function giaibt(a , b){
    if(a==0 && b==0){
        alert("Phương trình vô số nghiệm")
    }else if(a!=0 && b==0){
        alert("Phương trình có nghiệm X = 0")
    }else if(a==0 && b!=0){
        alert("Phương trình vô nghiệm")
    }else if(a!=0 && b!=0){
        alert("Phương trình có nghiệm x = "+(-b/a))
    }
}//Kí hiệu != nghĩa là khác (ko bằng)
let both = document.getElementById("giaiptb1");
giaiptb1.onclick = function(){
    let a = document.getElementById("FirstNum").value;
    let b = document.getElementById("SecondNum").value;
    //Kí tự || có nghĩa là Or (Cái đầu về true , cái thứ 2 về false thì cả 2 đều là true)
    if(a=="" || b==""){
        alert("Put the number in or no result will showed")
    }else{
        a = Number(a)
        b = Number(b)
        giaibt(a,b)
    }
}
// a = parseInt(Number)
// b = parseInt(Number)
// console.log(a)
// console.log(b)