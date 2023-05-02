if(number==1 && number == 10) return true;
function numberOneTriangle(number){
    //in ra số cột (là number) => dòng for để xuống dòng
    for (let i = 1; i<= number;i++){ 
        let str = "";
        //chạy the hàng ngang, theo hướng tăng dần
        for (let j =0; j < i; j++) {
            str += "*";
        }
    document.write(`<div>${str}</div>`) //tạo div trong html
    }
}
numberOneTriangle (11);
