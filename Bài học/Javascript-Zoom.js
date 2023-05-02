//BUỔI 6
/*Javascript (JS):
    - là ngôn ngữ lập trình
    - Tạo hành vi cho trang web
        + Bấm vào nút => hiển thị 1 thông báo
        + Lấy dữ liệu nơi khác => hiển thị trên trang web
        + Bộ đếm thời gian
Viết code JS:
    - External: viết code ở file khác ".js"
    - Internal: viết code trong html <script></script>
    - Inline: viết code trong thuộc tính của thẻ "onclick,...""
Biến và các thao tác:
    - Để lưu trữ cho tính toán, xử lý logic,...
    - Truy xuất giá trị của biến
    - Dùng let, const., var (không dùng) + Tên biến
    */


/* Example of JS*/
/*console: in lên màn hình console*/
console.log("Welcome to JS");
console.log("Welcome");
console.log("Hello 🍕");

console.error("Đây là 1 lỗi"); /*màu đỏ*/
console.warn("Đây là cảnh báo"); /*màu vàng*/

/* Tên biến: 
    + bắt đầu bằng chữ cái; dấu "_", dấu "$"
    + khác biệt giữa chữ hoa và chữ thường
    + không trùng với tên biến khác tại "website w3school" 
    + trong đặt tên biến, có thể đặt tên số, tuy nhiên phải sau "chữ" vd: name1 

Quy tắc đặt tên biến: 
    + camelCase Vd: myName, hasGirlfriend
    + id_card
LET  vs CONST: const không khai báo thêm biến như "let" => sẽ hiển thị "Uncaught TypeError: Assignment to constant variable" */

let name; // khai báo biến//
name = "Giá trị mới của name"; // gán giá trị cho biến//
name = "Hello morning"; //hiển thị giá trị theo thứ tự từ trên xuống dưới trước khai báo console//
console.log(name); // hiển thị giá trị của biến "name" lên màn hình console//
let age = 10; // khai báo và gán giá trị cho biến//

let something ="a";
// let something ="A";

const hello = "Khai báo const" //hằng số: không thể thay đổi giá trị//
// console.log(hello);

/* Kiểu dữ liệu: primitive types
    + number: kiểu số => thực hiện các phép toán số học
    + string: kiểu chuỗi ký tự => Thực hiện thao tác vs văn bản (nối/tách/ thay thế từ văn bản)
    + Boolean: kiểu nhị phân => có 2 giá trị: True, False
    + null: kiểu rỗng
    + undefined: kiểu dữ liệu không xác định
*/
//Number//
let number = 28;
console.log(number);
//String//
let slogan = "okay";
console.log(slogan)
//Boolean//
let hasGirlfriend = false;
console.log(hasGirlfriend)
//null//
let girlfriend = null;
console.log(girlfriend)
//undefined: khi không khai báo biến//
let future;
console.log(future)

/*TOÁN TỬ: */
// Kiểu number://
let a= 500
let b= 10;

console.log(a + b); 
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b); // luỹ thừa: a^b//
console.log(a++); // tăng lên 1//
console.log (b--); // giảm đi 1//
console.log (x=y); // = >>gán giá trị y vào x
console.log (x = x + y); //+= >> x = x + y; cộng thêm vào x giá trị y
console.log (x = x - y); // - =
console.log (x = x * y); // * =
console.log (x = x % y); // % =
console.log (x = x ?? y); //là phép gán khi null. Nếu x bằng null thì giá trị y gán cho x, nếu x đã khác null thì không thay đổi gì//
Math.sin(a)
Math.cos (b)
// (++b) khác (b++)//


//Kiểu string: nối văn bản//
let textA ="Welcome"
let textB =" Hura"
textA + textB; 

//So sánh: không so sánh chữ vs số//
let a = 10;
let b = 'chữ'; 
let c = 20;

console.log(a == b); //so sánh cho ra 1 giá trị boolean: True or False//
console.log(a === b); //bằng giá trị và kiểu dữ liệu
//Ví dụ:
let a = 5; // số
let b = "5"; //chuỗi
//==: 
console.log (a==b) //*ra kết quả True
console.log (a===b) //* ra kết quả false giống giá trị nhưng khác kiểu


console.log(a != b); //không bằng
//so sánh khác giá trị (dấu khác trong javascript chỉ so sánh và giá trị không xét đến kiểu)//
console.log(a !== b); // không bằng giá trị và kiểu dữ liệu
//1. Ví dụ của "! ="
let c = 5; // số
let d = "5"; //chuỗi
//==: 
console.log (5 == 10) //*ra kết quả True (cùng kiểu)
console.log (5 == "5") //* ra kết quả false (khác kiểu)
//2. Ví dụ của "! =="
console.log (5! == 10) //*ra kết quả False (khác giá trị)
console.log (5! == "5") //* ra kết quả True (cùng kiểu cùng giá trị)


console.log(a > b);
console.log(a >=b);
console.log(a==b) && (b==c) // và (tất cả đều đúng)
console.log(a==b) || (b==c) // hoặc (1 trong 2 đúng là sẽ đúng)
console.log (a==b) //phủ định
console.log (x%y) //%: lấy phần dư của phép chia


//Chú ý://
const a = 5;

function test() {
    console.log("this is a:" +a);
    const a=2;
}

test()

let b = 7
console.log(b++) //8//
console.log (b) //7//

let b = 7;
console.log(++b) //8//

//========================================================================================================================
//BUỔI 7
//1. nhập dữ liệu từ bàn phím và gán giá trị vừa nhập vào trong 1 biến
// <!-- let a = "hello";
// let b = 10;
// let input = prompt("Hãy nhập giá trị để gán giá trị cho biến 'input':"); //input: string
// console.log("Bạn vừa nhập vào" + " " + input); -->

// let x = Number (prompt("Nhập số x"));
// let y = Number(prompt("Nhập số y"));
// let z = x + y;
// console.log(z);
// console.log(input);


//2. Block of code (khối lệnh)
  /* Khối lệnh:
  /* Phạm vi của biến: khai báo với "let","const" trong 1 khối lệnh không thể tồn tại bên ngoài khối lệnh đó*/
  // Ví dụ:
  let name ="Ai Thy";
  {
    // bên trong 1 khối lệnh
    // let name = "Someone";
    // let age1 = 27;  
    // {
    //     let address = "TPHCM"
    //     // age: tồn tại ở chỗ này
    //     // adress: tồn tại dc ở trong này
    //     console.log(address);
    // }
    // console.log (age1)
  }
  console.log (age)- không tồn tại ở ngoài let name

//3. Câu lệnh điều kiện: if-else/ if - else if
if (condition) {
    // block of code if condition is true
} else {
    // block of code if condition is false
}
Ví dụ: Nếu age < 18 thì không cho vào; nếu age > 18 => cho vào
 let age2 = prompt ("Nhập vào tuổi của bạn")
  if (age2 <18) {
    console.log ("Không cho vào")
  } else {
    console.log("cho vào")
  }
if (condition 1) {
    // block of code if condition is true
} else if (considition 2) {
    // block of code if condition is true
} else (condition ...) {}
Ví dụ: Phân loại học sinh: 1, 2, 3
let rank = prompt ("Nhập vào phân loại")
if(rank == "A"){
    console.log('Toán-Hoá-Lý')
} else if (rank == "B"){
    console.log ("Toán-Hoá-Sinh")
} else if (rank == "C"){
    console.log ("Văn-Sử-Địa")
} else (rank == "D"){
    console.log("Toán-Văn-Anh")
} 

let text = promt ("Nhập vào 1 chuỗi")
if (text.length < 8) {
    console.log ("chuỗi ngắn quá");
}else {
    console.log ("chuỗi này được")
}
    

//4. Vòng lặp: thực hiện 1 khối lệnh nhiều lần
/* For: 
- biết số lần lặp
- Thường dùng trong:
    + Duyệt mảng
    + Sắp xếp đơn giản
    + In ra 1 dãy có quy luật
    + Giải thuật tìm kiếm */
/* for (<statement1>;<statement2>; <statement3>)
   + Statement 1: let i = ... : điều kiện bắt đầu
   + Statement 2: điệu kiện chạy (vd: i <= 50)
   + Statement 3: i++ hoặc i-- */
 
// ví dụ: In ra dòng "I love you" 10 lần , mỗi dòng có đánh số thứ tự
for(let count = 1; count <= 10; count++){
    console.log(count + " . I love you")
}
// //Hãy tính tổng các số từ 1 đến 50
let sum = 0;
for (let i1 = 1; i1 <= 50; i1++ ){
    sum = sum + i1; //biến giá trị "sum" theo vòng lặp
}
console.log (sum)

for (let i2 = 100; i2 >= 100; i2--){
 console.log (i2)
}


/* while: 
+ không biết số lần lặp
+ thường có 1 điều kiện để tiếp tục vòng lặp (Đúng thì tiếp vòng lặp, Sai thì dừng vòng lắp)*/
let num = 10;
while (num >= 6) {
    console.log(num)
    num = Math.floor(Math.random()*10)
}

// In ra dãy 1 đến 200
let index = 1;
while (index <= 200) {
    console.log(index);
    index ++;
}

//
let s = prompt ("chuỗi s");
let l = prompt ("số l");
while (s.length < 1) {
    s += 'a';
}
console.log (s);

//Nhập vào 2 số 0 <= x < y <=100
let x = prompt (" Nhập số x");
let y = prompt (" Nhập số y");
if (
    x >= 0
    && x < y
    && y <= 100
){
    while (x < y) {
        x++;
        y--;
    }
    console.log(x,y)
} else {
    console.log ("Nhập sai x và y")
}


/* Do {} While ()
- không biết số lần lặp
- Giống while
- Thực hiện khối lệnh do ít nhất 1 lần */
// let a = 5;
// do {
//     console.log("abc")
// } while (a>5);
// // chạy qua "do" 1 lần => rồi sao chép điều kiện, nếu kiện sai thì vẫn ra "do"

// let b = 5;
// while(b>5){
//     console.log("abc")
// }
//chaỵ while => sai => không ra >> undefined
//========================================================================================================================
//BUỔI 8:
/*1. Array (mảng):
- Mỗi phần tử trong array có 1 index
- Phần tử đầu tiên có index = 0
- Dùng array liên quan tới danh sách; tập hợp
vd: Tìm số lớn nhất, sắp xếp tăng dần, tính tổng doanh thu, vẽ biểu đồ, tính điểm trung bình

Cú pháp khai báo:
let array1 = [] // không có phần tử nào >> block
let array2 = [<Phần tử 1>, <Phần tử 2>, ...]*/

let names1 = [
    "IU"
    "Taylor"
    "Swift"
    "John"
] console.log(names1)

let isRich= false;
let isHandsome = true;
let hasGirlfriend = false;

let features = [isRich, isHandsome, hasGirlfriend]
//isRich = true;
//truy xuất giá trị 1 phần bất kỳ trong mảng >>> Phần tử thứ 2 (phần tử đầu tiên = 0)
console.log (features[0]); // lấy giá trị của phần tử thứ 1 trong array
console.log(features[1]); //lấy giá trị của phần tử thứ 2 trong array

//thay đổi giá trị index bất kỳ trong mảng?
names [0] ="Hello uWorld";
names [4] = "goodbye everyone";
console.log (names1)

console.log (features)

let array1 = ['a';'b';'c']
let array2 = ['a';'b';'c']

let array3=array1;
//kiểm tra kiểu dữ liệu của mảng?
console.log (typeof (array1)) //KQ: objective
console.log (array1 + array2) // a,b, // chương trình tự động ép kiểu mảng về string khi thực hiện phép cộng  
console.log (array1 == array2) //KQ: false
console.log (array1 == array3) //KQ: True. Tuy nhiên, nguy hiểm không nên dùng

array1 [0] = "Hello" //Thay đổi giá trị của index
console.log (array1)

//hoán đổi giá trị của 2 phần tử trong mảng
let tmp = names1[0];
names1 [0] = names1 [3];
names1 [3] = tmp;
console.log(names1)

/*Duyệt mảng: 
- duyệt qua từng index trong array
- tiền đề cho các thao tác: tìm kiếm, lọc, biến đổi,
- dùng vào lặp 
for (let i=0; i <arr.length, i++)
for (const item of arr)*/

for(let i =0; i< names1.length; i++) {
    let stt= i+1;
    // console.log(stt + ". " +names1[i])

    let name2 = names1[i];
    if (name == 'Taylor' || name = 'IU'){ //Tìm giá trị để repeat theo số lần của i
        console.log(stt + ". " + name2)
    }
}

//for..of
for (const name2 of names1) {
    //làm việc với name2 trong này
    i++;
}

const numbers = [1,7,8,-3,6,10,9]
// in ra số chẵn trong numbers
for (let i = 0; i < numbers.length; i++){
    const number = numbers[i]; //khai báo các phần tử trong numbers

    if(number%2 ==0) console.log(number); /// KQ có 8,6,10 : 2 >> có số dư = 0
}
//tính tổng
const sum = 0;
for (let i = 0; i < sum.length; i++){
    const number = numbers [i];
    sum+= number;
}
console.log(sum)

//tìm phần tử nhỏ nhất
const min = numbers [0];
for (let i = 0; i < numbers.length; i++){
    const number = numbers 
    if ( min > number) min = number;
}
console.log(min)

//Thêm và xoá index trong array
/* 
- Thêm:
    + unshift: đầu array
    + push: cuối array
    + 
- Xoá
    + shift: xoá first index trong đầu array
    + pop: xoá 1 index trong đầu array
*/
//thêm 3 số vào đầu mảng
numbers.unshift (-2,11,12)
console.log (numbers);
//thêm 3 số vào cuối mảng
numbers.push (5,3,2,1);
console.log (numbers);
//xoá 1 index đầu tiên trong mảng
let deletedFirstNumber = numbers.shift()
console.log ("Giá trị phần tử đầu tiên bị xoá" + deletedFirstNumber)
//xoá 1 index cuối trong mảng
let deletedLastNumber = numbers.pop()
console.log ("Giá trị phần tử cuối bị xoá" + deletedLastNumber)

//Xoá hoặc thêm phần tử vào giữa array >> splice >>> Array.prototype.splice()

// Phương thức Array Iteration: Tìm kiếm/Lọc/Biến đổi 
//1. A.map:
//2. A.fliter:
//3. A.final:
//4. A.findIndex: tìm vị trí
//5. A.fill: Biến đổi
//6. A.copyWithin:
//7. A.Some: kiểm tra các phần tử xem có thoả mãn điều kiện >> Chỉ cần 1 phần tử thoả mãn thì True
//8. A.Every: kiểm tra các phần tử xem có thoả mãn điều kiện >> TẤt cả phần tử phải thoả mãn thì True
//9. A.reduce:

let num = [1,10,5,6,-2]
num.map (item => item ** 2) //KQ: 1,100,25,36,-4
num.filter (item => item > 3) //KQ: 10,5,6

//Thuật toán: BUBBLE SORT

//========================================================================================================================
//Buổi 9: OBJECT & FUNCTION
/* 1. Mảng đa chiều (Multi-Dimension Arrray):
- Mảng trong Mảng
- Mô tả ma trận toán học, số liệu tăng trưởng */
// Ví dụ: 
// Dữ liệu của năm: theo column
// Dữ liệu theo quý: theo row
let growth ={
    [5,8,9,10];
    [2,7,1,9];
    [5,2,10,6];
}

/*2. OBJECT:
- Object = Thuộc tính (Đặc điểm-Perspective) + Phương thức (Hành vi-Behaviours)
- Mô tả chi tiết và lưu trữ dữ liệu phức tạp
- Ví dụ
// Thuộc tính: Tên ; Giá trị của thuộc tính: Apple
// Thuộc tính: Giá ; Giá trị của thuộc tính: $1500
- Khi nào dùng Object?
    + Lập trình hướng đối tượng (OOP)
    + Cho các bài toán liên quan tới sự phức tạp của data
Ví dụ: Danh sách sinh viên (Tên, giới tính, điểm cuối kỳ)=> Lấy tên sv có điểm cuối kỳ cao nhất*/

//2.1.Cách khai báo:
/*let <tên biến> ={
    <key-1>: <value-1>;
    <key-2>: <value-2>;
        ...
}*/
const thePet{ //mẫu chung cho thuộc tính pet ở introduction1 và 2
    pet: {
        age: 2;
        nationality: British;
    }
}
const introduction1 = { // đặc điểm (thuộc tính)
    fullName: "Tran Ai Thy"; // Hành vi (phương thức)
    //"1-first-name": "Thy";
    age: 27; // Hành vi (phương thức)
    dob: "07/09/1996" // Hành vi (phương thức)
    address: "TPHCM" // Hành vi (phương thức)
    pet: thePet
}
const introduction2 = { // đặc điểm (thuộc tính)
    fullName: "Tran Ai Thy"; // Hành vi (phương thức)
    //"1-first-name": "Thy";
    age: 27; // Hành vi (phương thức)
    dob: "07/09/1996" // Hành vi (phương thức)
    address: "TPHCM" // Hành vi (phương thức)
    pet: thePet
//introduction1 không bằng introduction2 do save ở 2 địa chỉ khác nhau
// Ngoại trừ:
const introduction3 = introduction1
console.log (introduction1 == introduction2 ); 
console.log (introduction1 == introduction3 );

//2.2.nCách sử dụng Object
//Lấy ra giá trị của thuộc tính "Fullname" trong introduction1
console.log(introduction1.fullName); //hoặc
console.log (introduction1 ['fullName']);
//hoặc
const key = "fullName"
console.log (introduction1 [key]);

consol.log(introduction1.pet == introduction2.pet) //KQ: true

//Thiết lập/thay đổi/xoá giá trị thuộc tính

//A. Thêm thuộc tính isHandsome cho introduction1
introduction1.isHandsome = true; //hoặc
introduction1["isHandsome"] = true;

//B. Thay đổi giá trị thuộc tính "fullName" trong introduction1
introduction1.fullName = "Thy Tran"; //hoặc
introduction1['fullName'] = "Thy Tran";
//C. Xoá thuộc tính dob trong introduction1
delete introduction1.dob
console.log(introduction1);

//Duyệt object: duyệt qua từng thuộc tính & phương thức trong object
// Dùng let...in
for (let key in introduction1) {
    console.log("Đặc điểm" + key + "có giá trị là:" + introduction1.key);
    //hoặc
    console.log("Đặc điểm" + key + "có giá trị là:" + introduction1[key]);
}
//key: biến
//introduction1.key hoặc introduction1 [key] : lấy thuộc tính hoặc truy xuất thuộc tính key trong introduction1 => dùng để check

//**************************** 

/*3. FUNCTION:
- Đóng gói 1 đoạn code để tái sử dụng nhiều lần
- Có thuộc tính hoisting
- dùng function khi nào?
    + LẬp trình hướng cấu trúc (POP)
    + Chia nhỏ chương trình thành các functions. Mỗi functions có 1 chức năng riêng biệt
- Các functions sử dụng nhiều lần => nên thực hiện 1 chức năng duy nhất
- Việc chia functions tuỳ theo kinh nghiệm từng người
- 1 function không dùng quá 100 dòng
- Khai báo function: /Nhiều input nhưng ra chỉ có 1 output
    + Tham số (Input)
    + Giá trị trả về (output) 
    + 4 kiểu functions: 
        1/ No input; no output
        2/ 2 inputs; no output
        3/ No input; 1 output
        4/ 2 inputs. 1 output 
*/
//ví dụ: Khai báo function nhập và check 1 số
// NaN = NaN => False
let a = 0;
let b = 0;
function inputNumber(label){
    let input = NaN; //NaN: không phải là số
    do{
        input = Number(prompt("Nhập số vào đây" + label + ": "))
    } while (isNaN (input)) //Không phải là số thì nhập khi nào là số

    return input;  //khi xài return thì coi như kết thúc 
    console.log("thực thi không")
}
//gọi function inputNumber
a = inputNumber ('a');
b = inputNumber ('b');
console.log (a+b)

//Ví dụ:
const myName = "Thy";
const myName2 = "abc";
function greeting(name) {
    console.log(`Hello, ${name}`);
}
greeting(myName); //KQ: Thy
greeting(myName2); //Kq: abc

//Callback: 
// After 3 seconds, call a function
function doSomething (){
    console.log ("Do sth here")
}
function sayhello (){
    console.log ("Hello World")
}
function executeAfterSeconds (seconds, work){
    console.log ("thực thi sau khi" + seconds + "giây");
    setTimeout(work, seconds *1000);
}
executeAfterSeconds (3,sayhello); // seconds: 3; work: sayhello
executeAfterSeconds (4,doSomething);
//setTimeout không đưa vào stack: thực hiện hàm đồng bộ trược và bất đồng bộ sau
// ví dụ:
/* KQ trả về:
- Thực thi sau khi 3 giây
- Thực thi sau khi 4 giây
- Do Sth here
- Hello World*/

/*Arrow function
- là function nhưng không có context this
- Cách khai báo: */
const doAnything =() =>{

}
const doNothing = () => "Hello";
//hoặc
const doNothing2 = (a,b,c,d) => {
    return "hello";
};
// function sum (a,b,c) {
//     return a + b + c;
// }
//hoặc
const sum (a,b,c) => a + b + c;

const thyTran ={
    name: "thy Tran",
    flir: () =>{ //Arrow function
        console.log (this); 
        //this đại diện cho "window" 
    }
    run: function {
        console.log(this);
        //this đại diện cho thyTran
    }
}
thyTran.flir ();
thyTran.run ();
//---------------------------------------------------------------------------------------------------------------------

