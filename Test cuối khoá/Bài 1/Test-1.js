const button = document.getElementById ('button');
const result = document.getElementById ('result');
function checkSoNguyenTo (numbers){
    if(numbers < 2) return false
    for (let i = 2; i <= numbers; i++){
        if(numbers % i ===0) return false;
    } 
    return true;
} 
button.addEventListener ('click', () => {
    const number1 = Number.parseInt(document.getElementById ('number-1').value)
    const number2 = Number.parseInt(document.getElementById ('number-2').value)

    if(!Number.isInteger(number1)||!Number.isInteger(number2)){
        result.innerHTML = "Số bạn nhập không đúng";
        return;
    } 
    if(number1 > number2) {
        result.innerHTML = "Số thứ nhất không được nhỏ hơn thứ 2";
        return;
    }
    let sum = 0;
    for (let i = number1; i <= number2; i++){
        if(checkSoNguyenTo(i)) sum += i;
    }
    result.innerHTML = `Tổng các số nguyên tố trong đoạn từ ${number1} và ${number2} là ${sum}`; 
})