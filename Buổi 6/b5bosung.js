function sum(a, b) {
    return a.toString() + " + " + b.toString() + " = " + (a + b);
}
let a = parseInt(prompt("nhập số a"));
let b = parseInt(prompt("nhập số b"));
console.log(sum(a, b));
let arr = [1,2,3,4,5,6,7,8,9,10];
let son = 0;
arr.forEach((num) => {
    sum += num % 2 == 1 ? num : 0;
})
console.log("Tổng các số lẻ là " + son);
function calcExpression(n) {
    result = 0;
    for (let i = 1; i <= n; i++) {
        result += i / n;
    }
    return result;
}

let tock = parseInt(prompt("nhập số"))

console.log(calcExpression(tock));

let bom = prompt("Nhập số")
        let n = parseInt(bom)
        let tong = 0;
        for(let c = 1 ; c <= n ; c++){
            tong = tong + (c/n)
        };
        console.log(tong);