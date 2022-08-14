//B1
const giaibt = (a , b) =>{
    if(a==0 && b==0){
        alert("Phương trình vô số nghiệm")
    }else if(a!=0 && b==0){
        alert("Phương trình có nghiệm X = 0")
    }else if(a==0 && b!=0){
        alert("Phương trình vô nghiệm")
    }else if(a!=0 && b!=0){
        alert("Phương trình có nghiệm x = "+(-b/a))
    }
}
let both = document.getElementById("giaiptb1");
giaiptb1.onclick = () =>{
    let a = document.getElementById("FirstNum").value;
    let b = document.getElementById("SecondNum").value;
    if(a=="" || b==""){
        alert("Put the number in or no result will showed")
    }else{
        a = Number(a)
        b = Number(b)
        giaibt(a,b)
    }
}
//B2
const tamgiacvuong = (a , b) =>{
    let canhhuyen = Math.sqrt(a**2 + b**2);
    let duongcao = (a * b) / canhhuyen;
    return "cạnh huyền =" + canhhuyen + "\n đường cao = " + duongcao ;
}
console.log(tamgiacvuong(3,4))