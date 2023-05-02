/*1. Các giá trị trong Javascript (8)
Kiểu dữ liệu nguyên thủy (Primitive datatype) 
1. Boolean: True and False
2. Null
null = null => True
3. Undefined
4. Number
5. BigInt
6. String
7. Symbol
Kiểu dữ liệu dạng tham chiếu (Non- primitive datatype)
8. Object
9. NaN 
//NaN == NaN => False */

/*2. THUỘC TÍNH: HOISTING
- di chuyển các khai báo biến lên đầu của đoạn mã, giúp cho chương trình không bị lỗi khi sử dụng biến trước khi khai báo
*/
    //Ví dụ 1:
    console.log(fullName)
    let fullName ="abc"; //Kq: error => bắt buộc phải để khai báo "let" trước

    //Ví dụ 2:
    function show_me(){
    console.log('Money');
    }
    show_me = function(){
    console.log('Diamond');
    }
    function show_me(){
    console.log('Gem');
    } //Kq: Gem

//2.1 Hoisting trong Javascript
    let x = 20, y = 10;
    
    let result = add(x,y);
    console.log(result);
    
    function add(a, b){
        return a + b;
    }
    /* Comment:
    - Sử dụng hàm add; sau đó mới khai báo mà không bị báo lỗi */
    //Tương đương với: 
    function add(a, b){
    return a + b;
    }
    let x = 20, y = 10;
    let result = add(x,y);
    console.log(result);

    //Tuy nhiên: nếu sử dụng function "add" trước khi khai báo => sẽ báo lỗi
    let x = 20,
        y = 10;
 
    let result = add(x,y);
    console.log(result);
    
    var add = function(x, y) {
        return x + y;
    }

//2.2 Hoisting trong Arrow
    var function_name = () => bieuthuc;



/*3. Các dấu trong Javascript
3.1.    ==	    so sánh bằng (và giá trị, không so sánh về kiểu dữ liệu)
3.2     ===	    so sánh giống nhau (true nếu cùng giá trị và kiểu dữ liệu)
3.3     !=	    so sánh khác giá trị (dấu khác trong javascript chỉ so sánh và giá trị không xét đến kiểu)
3.4     !==	    Khác giá trị và khác kiểu
3.5     &&	    phép và (toán tử && trong javascript) trả về true nếu 2 số hạng là true: a && b
3.5     ||	    phép hoặc (toán tử hoặc trong javascript) trả về true nếu 1 trong 2 số hạng là true : a || b
3.6     !	    phủ định (vd: !a trả về giá trị ngược với biểu thức a)
    Lưu ý:
    - a && b >> nếu a hoặc b hoặc a và b đều True => Cả biểu thức True
    - a || b >> nếu a hoặc b là False >> cả biểu thức đều False
3.7     ??=     phép gán khi null >> x ??= y >> Nếu x bằng null thì giá trị y gán cho x, nếu x đã khác null thì không thay đổi gì 
*/
    //Ví dụ 1 toán tử gán ??=
    let x = 100;
    x ??= 5;
    console.log (x) //* x = 5
    
    //Ví dụ 2 toán tử gán ??=
    let your_name = "XUANTHULAB";
    let your_addr = null;
    const name_default = "KHÔNG TÊN";
    const add_default = "KHÔNG ĐỊA CHỈ";

    your_name ??= name_default;
    console.log(your_name); // "XUANTHULAB"

    your_addr ??= add_default;
    console.log(your_addr); // "KHÔNG ĐỊA CHỈ" (your_addr = null => gán giá trị của "add_default" cho "your_addr")

// 3.8 Toán tử bậc 3
// Với điều kiện: một biểu thức để thực thi nếu điều kiện là đúng và một biểu thức để thực thi nếu điều kiện sai
    function checkCharge(charge) {
        return (charge > 0) ? 'Ready for use' : 'Needs to charge' 
    }
    console.log(checkCharge(20)) // => 'Ready for use'
    console.log(checkCharge(0)) // => 'Needs to charge'

// Toán tử bậc ba có thể được sử dụng để gán biến
    var x = 6
    var x = (x !== null || x !== undefined) ? x : 3
    console.log(x) // => 6

// Toán tử bậc ba trong PHP (thay thế cho if-else)
    (Conditional statement) ? (Statement_1) : (Statement_2);
    //Conditional statement: Đây là một biểu  thức PHP hợp lệ sẽ được đánh giá để trả về giá trị Boolean
    //Statement_1: Đây là câu lệnh sẽ được thực hiện khi kết quả của điều kiện trả về là true hoặc ở trạng thái true
    //Statement_2: Đây là câu lệnh sẽ được thực hiện khi kết quả điều kiện trả về true hoặc ở trạng false
    
    //Ví dụ:
    <?php
    $result = 62;
    echo ($result >= 40) ? "Passed" : " Failed";
    ?> //KQ = Passed

//3.9 Tốc ký bậc ba (?:): dc sử dụng bằng cách loại bỏ phần trung tâm của toán tử bậc ba
    expression1 ?: expression2

    //Ví dụ:
    $check = isset($value) && !empty($value) ?: 'default';

/*3.10 Thứ tự ưu tiên: 
    1. Phủ định (!) 
    2. And (&&)
    3. Or (||) */

/* 3.11 Truthy & Falsy
- là những giá trị mà JavaScript khi ép về kiểu Boolean, hoặc trong một ngữ cảnh Boolean, nó sẽ cho ra giá trị true hoặc false.
- Các giá trị được xem là truthy: 
    + chuỗi khác rỗng, số khác 0 và tất cả các object (Bao gồm cả mảng rỗng [ ] và chuỗi rỗng { }).
- Các giá trị được xem là falsy: false, 0, -0, 0n, "", null, undefined, and NaN

//4. Prefix (Tiền tố) và Postfix (Hậu tố)
    let a = 6; a++;
    console.log(a) // kq = 7
    let b = 6; ++b;
    console.log(b) // kq = 7
    // Kết quả giống nhau: do kq đưa ra sau khi thực thi a-- và --b;
    //Cách nhớ:
    // i++ >> trả về i rồi mới +1 ở câu lệnh sau. 
    // ++i >> tăng 1 ngay lập tức

//4.1. Tiền tố
    //Việc 1: +1 cho c >> c = c + 1 => c = 7
    //Việc 2: Trả về c sau khi được + 1
    let c = 6; 
    let output1 = ++c;
    console.log ("output1:", output1)

//5.2. Hậu tố
    // Ví dụ 1: 
    var d = 6; 
    var output2 = d++;
    console.log("d:",d)
    console.log("output2:",output2)
    //Giải thích:
    //Việc 1: d >> trả kq d = 6;
    //Việc 2: cộng 1 của d >> d = d+1 >> d=7
    //Việc 3: trả về d = 7

     // Ví dụ 2: 
    var number1= 6;
    var number2 = 7;
    output3 = number1++ + --number2;
    //number1++ >> KQ = 7
    // --number >> KQ= 6 
    console.log("number1:",number1)
    console.log("number2:",number2)
    console.log("output3:", output3)

//6. Toán tử: chuỗi
    const surName = "Tran";
    const firstName = "Thy";
    output4 = surName + " " + firstName; hoặc
    output4 = (` My name is ${surName} ${firstName}`)

//7. Điều kiện: If-else if- else
//If - Else
if (condition) {
    //  block of code to be executed if the condition is true
  } else {
    //  block of code to be executed if the condition is false
  }
//If-else if
if (condition1) {
    //  block of code to be executed if condition1 is true
  } else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
    //  block of code to be executed if the condition1 is false and condition2 is false
  }

//8. Switch: Trường hợp 1, 2, 3,...
switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
//Ví dụ
//Viết cấu trúc switch-case kiểm tra số chẳn và lẻ
const numberInput = prompt("Nhập số: ");
switch(numberInput%2){
    case 0:
        alert (`${numberInput} là số chẵn`)
        break;
    case 1:
        alert (`${numberInput} là số lẻ`);
        break;
    default:
    alert (`Không phải là số hoặc không phải số nguyên`);
}
//Viết cấu trúc switch case số ngày trong tuần //Function: Date().getDay()
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

//9. Loop (Vòng lăp)
/* 9.1. for 
  - loops through a block of code a number of times 
  - là vòng lặp được sử dụng lặp lại một nhiệm vụ nhất định với số lần lặp cho trước)*/

// Biểu thức 
  for (expression 1; expression 2; expression 3) {
  // code block to be executed
  }
/*
Expression 1 >> Khởi tạo biến lặp: Là khởi tạo một biến để đếm số lần lặp
Expression 2 >> Biểu thức điều kiện :Là biểu thức kiểm tra số lần lặp (giới hạn)
Expression 3 >> Cập nhật biến lặp :Là biểu thức kiểm tra số lần lặp (giới hạn)   */

//Ví dụ:
// Hãy tính tổng các số từ 1 đến 50
let sum = 0;
for (let i1 = 1; i1 <= 50; i1++ ){
    sum = sum + i1; //biến giá trị "sum" theo vòng lặp
}
console.log (sum)

/*9.2. for/in  (object-đối tượng)
- loops through the properties of an object
- dùng để lặp qua các thuộc tính của một đối tượng. 
- Khối lệnh bên trong vòng lặp sẽ được thực thi một lần cho mỗi thuộc tính.
- được sử dụng để debug bởi vì nó dễ dàng kiểm tra các thuộc tính của một đối tượng (object).*/

// Biểu thức 
  for (key in object) {
    // code block to be executed
  }
/*
Key >> biến Đại Diện: Là khai báo một biến đại diện cho tên thuộc tính của đối tượng
Object >> tên ĐốiTượnng: Là đối tượng cần được lặp qua */

  //Ví dụ 1:
  // Tạo một đối tượng sinhVien
  const sinhVien = {
    MSSV: "B1704863",
    hoVaTen: "Ngô Minh Trung",
    gioiTinh: "Nam",
  };
  // Lặp qua đối tượng
  for (const x in sinhVien) {
    // In ra giá trị của các thuộc tính
    // có trong đối tượng
    console.log(sinhVien[x]);
  }
  /* Kết quả như sau:
  B1704863 
  Ngô Minh Trung
  Nam*/

  // Ví dụ 2:
  // Lặp qua đối tượng
  for (const x in sinhVien) {
    // In ra cặp key: value của đối tượng
    console.log(`${x}: ${sinhVien[x]}`);
  }
  /*Kết quả như sau:
  MSSV: B1704863
  hoVaTen: Ngô Minh Trung
  gioiTinh: Nam/


/*9.3. for/of  (Mảng và chuỗi;  Arrays, Strings, Maps, NodeLists...)
- loops through the values of an iterable object
- lặp qua các đối tượng có thể lặp lại như mảng và chuỗi */

// Biểu thức 
  for (variable of iterable) {
    // code block to be executed
  }
  //A/ Lặp qua Array:
  const cars = ["BMW", "Volvo", "Mini"];
  let text = "";
  for (let x of cars) {
  text += x;
  }
  /*Kết quả:
  BMW
  Volvo
  Mini*/

//B/ Lặp qua String
  let language = "Study";
  let text = "";
  for (let x of language) {
  text += x;
  }
  /*Kết quả:
  S
  T
  U
  D
  Y
  */

/*9.4. while 
- loops through a block of code while a specified condition is true
- vòng lặp while sẽ kiểm tra điều kiện trước.
    + Nếu đúng thì thực thi khối lệnh.
    + Nếu sai thì thoát khỏi vòng lặp */

    // Biểu thức 
  while (condition) {
      // code block to be executed
    }
  //Condition >> bieuThucDieuKien: Là biểu thức kiểm tra điều kiện
  
  //Ví dụ: In ra 10 số chia hết cho 8 đầu tiên mà lớn hơn 10.
  let number = 10;
  let count = 0;
  while (count < 10) {
      if (number % 8 == 0) {
          // In ra số thỏa mãn
          console.log(number);
          ++count;
      }
      // Cập nhật số được lặp qua
      ++number;
  }
  console.log(number); 
  //Kết quả: 89
  //Giải thích:
  /*Bởi vì số phải lớn hơn 10 nên khi khởi tạo biến lặp ta sẽ cho nó bằng 10 luôn.
  Sau đó, trong chương trình sẽ kiểm tra xem có chia hết cho 8 không.
  Nếu đúng thì in ra màn hình console, đồng thời cập nhật số lượng số tìm thấy.
  Tiếp tục tăng biến đếm number lên 1 và tiếp tục kiểm tra... */
 
/*9.5. do/while 
- also loops through a block of code while a specified condition is true*/

// Biểu thức 
  do {
      // Các câu lệnh cần thực thi
  } while (bieuThucDieuKien);
  //bieuThucDieuKien:  Là biểu thức kiểm soát vòng lặp
  //Ví dụ:
  let i = 0;
  do {
      console.log("i = " + i);
      ++i;
  } while (i <= 5);
  /*Kết quả:
  i = 0;
  i = 1;
  ...
  i = 5; */

//----------------------------------------------------------------------------------------------------------------------
//BUỔI 9: ARRAY (OBJECTIVE)
/*1. Array (mảng):
- Mỗi phần tử trong array có 1 index
- Phần tử đầu tiên có index = 0
- Dùng array liên quan tới danh sách; tập hợp
vd: Tìm số lớn nhất, sắp xếp tăng dần, tính tổng doanh thu, vẽ biểu đồ, tính điểm trung bình
*/
//2. Khai báo array:
    // let array1 = [] // không có phần tử nào >> block
    // let array2 = [<Phần tử 1>, <Phần tử 2>, ...];
    // let array3 = new Array (1,2,3,4);
    
    // ví dụ 1: khai báo array
    let names1 = [
    "IU"
    "Taylor"
    "Swift"
    "John"
    ] console.log(names1)

    // ví dụ 2: khai báo array
    const cars = [];
    cars[0]= "Saab";
    cars[1]= "Volvo";
    cars[2]= "BMW";
    
    // ví dụ 3: khai báo array
    const cars = new Array("Saab", "Volvo", "BMW");

//3. Truy cập các phần tử trong Array
    let letters = ["a", "b", "c"];
    console.log(letters[0]); // a
    console.log(letters[1]); // b
    console.log(letters[2]); // c
    console.log(letters[-3]); // undefined

//4. Thay đổi/Thêm phần tử trong Array
//4.1 Thay đổi
    let letters = ["a", "b", "c"];
    letters[0] = "A"; // thay đổi giá trị của mảng tại chỉ số 0
    console.log(letters[0]); // A
//4.2 Thêm phần tử
    let letters = ["a", "b", "c"];
    letters[3] = "d"; // thêm phần tử vào mảng tại chỉ số 3
    console.log(letters); // Kq: ["a", "b", "c", "d"]

//5. Kiểm tra dữ liệu của array?
    let array1 = ['a';'b';'c']
    let array2 = ['a';'b';'c']
    let array3=array1;
    console.log (typeof (array1)) //KQ: objective
    console.log (array1 + array2) // a,b, ab // chương trình tự động ép kiểu mảng về string khi thực hiện phép cộng  
    console.log (array1 == array2) //KQ: false
    console.log (array1 == array3) //KQ: True. Tuy nhiên, nguy hiểm không nên dùng

//6. Hoán đổi giá trị của 2 index trong array
    let tmp = names1[0];
    names1 [0] = names1 [3];
    names1 [3] = tmp;
    console.log(names1)

//8. Trả về string chưa các index của array
    let letters = ["a", "b", "c"];
    console.log(letters.toString()); // a,b,c
    let letters = ["a", "b", "c"];
    console.log(letters.toString()); // a,b,c

    console.log([1, 2] + 3); // 1,23

//5. PROPERTY CỦA ARRAY: LENGTH (đưa ra độ dài của mảng)
    //Ví dụ 1:
    var foo = [];
    console.log(foo.length) // KQ = 0

  //Ví dụ 2:
    var number = [1, 2, 3];
    number[9] = 9;
    number[-3] = 'so am';
    number['string'] = 'String';
    console.log(number.length); // 10
    console.log(number); // [ 1, 2, 3, empty * 6, 9, '-3': 'so am', string: 'String']

  //Ví dụ 3: 
  //Giá trị của length bằng chỉ số lớn nhất trong mảng cộng thêm 1 đơn vị
        let arr = [];
        arr[1000] = "a";
        console.log(arr.length); // Kq = 1001

  //Ví dụ 4: 
  // Thuộc tính của length is writable => bạn có thể thay đổi giá trị của thuộc tính length.
        let letters = ["a", "b", "c"];
        console.log(letters.length); // 3

    // giảm length xuống thành 2
        letters.length = 2;
        console.log(letters); // (2) ['a', 'b']

    // tăng length thành 5
        letters.length = 5;
        console.log(letters[2]); // undefined - giá trị cũ là "c"

/*5. Duyệt Array:
- duyệt qua từng index trong array
- tiền đề cho các thao tác: tìm kiếm, lọc, biến đổi,
- dùng vào lặp (loop):
Loop 1: for (let i=0; i <arr.length, i++)
Loop 2: for (const item of arr)
Loop 3: for (let i in arr) [***Không tối ưu cho array, không nên dùng] */

  //Ví dụ 1:
    const numbers = [1,7,8,-3,6,10,9]
    // in ra số chẵn trong numbers
    for (let i = 0; i < numbers.length; i++){
        const number = numbers[i]; //khai báo các phần tử trong numbers
        if(number%2 ==0) console.log(number); /// KQ có 8,6,10 : 2 >> có số dư = 0
    }
  // ví dụ 2: tính tổng
    const sum = 0;
    for (let i = 0; i < sum.length; i++){
        const number = numbers [i];
        sum+= number;
    }
    console.log(sum)

  // Ví dụ 3: tìm phần tử nhỏ nhất
    const min = numbers [0];
    for (let i = 0; i < numbers.length; i++){
    const number = numbers 
    if ( min > number) min = number;
    }
    console.log(min)

//6. Mảng nhiều chiều
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  // truy cập phần tử ở hàng 1, cột 1
  console.log(matrix[1][1]); // 5

/*7. Mỗi liên hệ giữa Array vs Object
- index ở array tương đương key của object. (Truy cập vào index của array arr[index] = object[key])*/
  // Ví dụ:
    let letters = ["a", "b", "c"];
    let copied = letters;  // giá trị của copied hoàn toàn giống letters
    console.log(copied); // (3) ['a', 'b', 'c']

    // khi thay đổi giá trị của copied
    copied[1] = "new value";

    // giá trị của letters cũng thay đổi
    console.log(letters[1]); // new value

//------------------------------------------------------------------------------------------------------------------------------
//FUNCTION
/*1. FUNCTION + Return
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
            4/ 2 inputs. 1 output */
/*2. Khai báo hàm - Function declaration
  - Dùng "function"
  - Tên hàm
  - Danh sách các tham số truyền vào hàm, được đặt trong ngoặc đơn và cách nhau bởi dấu phẩy.
  - Các câu lệnh của JavaScript để tạo ra một hàm, được đặt trong ngoặc nhọn {...}.
  */
  function add(num1, num2) {
    return num1 + num2;
  }
//3. Biểu thức hàm (Hàm trong biến)-Function expression
  var add = function (num1, num2) {
    return num1 + num2;
  };
  
//4. Gọi hàm
  //Ví dụ 1:
  function sayHello () {
    console.log("Hello World"); //hoặc alert ("Hello World")
  }
  sayHello(); // Gọi hàm
  
  // Ví dụ 2: 
  const myName = "Thy";
  const myName2 = "abc";
  function greeting(name) {
      console.log(`Hello, ${name}`);
  }
  greeting(myName); //KQ: Thy
  greeting(myName2); //Kq: abc
  
/* 5. Return trong function
  - hàm sẽ ngừng thực thi và trả về giá trị sau lệnh "return".
  - phải được đặt trong scope */
  //Ví dụ 1:
  let x = myFunction(4, 3);
  function myFunction(a, b) {
      return a * b;
  } //KQ: 12

  //Ví dụ 2: Nếu x  = 1 => gặp return1 => trả về true; nếu không thì return2 trả về false
  function myFunction(x) {
      if (x == 1){
          return true;
      } else {
          return false;
      }         
  } 

/*6 Function rút gọn (dùng ký hiệu "=>")
  // (1) Không có tham số
  () => { ... }
  //( 2) Có 1 tham số
  param => { ... }
  // (3) Dạng tổng quát
  (param1, param2) => { ... }

  Biểu thức hàm thông thường                                                  Sử dụng dạng =>
  1/ 
  let x = function() {                                                        let x = function(a, b) {
     console.log("Xin Chào");                                                   return a + b;
  }                                                                           }
                                                                              
  2/ 
  let x = function() {                                                        let x = a => {
    console.log("Xin Chào");                                                    console.log(a);                                     
  }                                                                           }
  3/
  let x = function(a, b) {                                                    let x = (a,b) => {
    return a + b;                                                               let x = (a,b) => {
  }                                                                           }

//----------------------------------------------------------------------------------------------------------------------------------------
//OBJECT
/*1 "This" dành cho objects
- ám chỉ đối tượng hiện tại đang được sử dụng hoặc đang truy cập tới
- global và local*/
//Ví dụ 1:
    const iphone7 = {
    //Property: thuộc tính
    name: 'iphone7'
    color: 'Pink'
    weight: 300;

    //Phương thức: Method
    takePhoto () {
        console.log(this)
    };
    objChild: {
        methodChild(){
        console.log (this)
        }
    }
    }
    iphone7.takePhoto(); //KQ: "this" thể hiện object "iphone 7"
    iphone7.objChild.methodChild (); //KQ: "this" thể hiện "objchild" 
    //Cách nhớ: "this" thể hiện đối tượng thể hiện method đó (đối tượng trước dấu ".") 

//Ví dụ 2:
    function Car (name, color, weight) {
    this.name = name
    this.color = color
    this.weight = weight
    this.run = function (){
        console.log ('Running...', this) //KQ: "this" trả về audi500x
    }
    }
    const audi500x = new Car ("Audi500x", "black", "500kg")
    console.log (audi500x.run())

//Ví dụ 3: "this" tham chiếu tới đối tượng "global"
    function myFunction () {
    console.log (this)
    }
    myFunction(); //unidentified
    window.myFunction () //"this" thể hiện window

//Ví dụ 4: Hàm tạo - "this" trong hàm tạo là đại diện đối tượng sẽ được tạo
    function Car (name, color){
    this.name = name;
    this.color = color;
    this.run = function (){
        console.log (this);
    }
    }
    const Porsche = new Car ("Porsche", "yellow")
    console.log (Porsche)
    /*KQ: 
    [object Object] {
    color: "yellow",
    name: "Porsche"
    } */
    console.log (Porsche.name) //KQ: Porsche
    console.log (Porsche.run()); //KQ: sẽ trả về object- Porsche

//Ví dụ 5: 
    function Car (name, color){
    this.name = name;
    this.color = color;
    }
    Car.prototype.run = function(){
    //context
    function test(){
        console.log (this) //"this" ở đây thành window
    }
    test()
    }
    const Porsche = new Car ("Porsche", "yellow")
    console.log (Porsche.run());

//Ví dụ 6: Arrow
const person = {
  name:'hue',
  getName: function(){
      return this.name
   }
}
person.getName() // "this" thể hiện object - person => KQ: 'hue'

const getNamePerson = person.getName()
getNamePerson() // sai -> not function -> this trỏ tới object window 

// Cách giải quyết nó : dùng "Bind"
const getNamePerson = person.getName.bind(person) // KQ = hue



//17. copy Array và object
const a = [1,2,3]
const b = [...a]
console.log(b)

//--------------------------------------------------------------------
//1. PHÂN BIỆT giữa ARRAY >< OBJECT // REGULAR FUNCTION >< ARROW
  //1.1. Array sử dụng number index. Có thể thao tác với mảng qua index(index bắt đầu từ 0)
  const fruits = ["Banana"; "Apple"; "Orange"]
  fruit [6] = "Lemon";
  
  const cars = ["Saab", "Volvo", "BMW"];
  let car = cars[0];
  
    //1.2.Object sử dụng name index. Có thể thao tác với object qua field name của object(ví dụ: fistName, lastName)
  const person ={
    firstName: "John";
    lastName: "Doe";
    id: "0563"
  };
  console.log (person.firstName)
    /*1.3. Function: 
  - Khai báo 1 hàm thông thường
  - Khai báo hàm một lần và sau đó gọi nó ở nhiều nơi khác nhau.
  - Sử dụng từ khoá "Function" 
  - Sử dụng kèm từ khoá "return"*/
  
  //Ví dụ 1:
  function sum(a, b) {
    return a + b;
  }
  sum(5, 6);           // => 11
  ([3, 7]).reduce(sum) // => 10


  /*1.4. Arrow: 
- sử dụng ký tự "=>" 
- Bỏ qua "return"
- không định nghĩa giá trị this của riêng nó giống như function.
- Thường sử dụng kèm với forEach, reduce, ....
- Không có hoisting
*/
  //1.5. Tính chất Regular Functions vs Arrow Function
    //1.5.1 Không sử dụng parameter
    //1.5.1.1. FUNCTION
    let prtLangReg = function () {
      console.log("JavaScript");
    }
    prtLangReg();
    //1.5.1.2.ARROW
    let prtLangArrow = _ => {console.log("JavaScript");}
    prtLangArrow();

    //1.5.2 Sử dụng một parameter
    //1.5.2.1. FUNCTION
    let prtLangReg = function (language) {
      console.log(language);
    }
    prtLangReg("JavaScript");
    
    //1.5.2.2. ARROW
    let prtLangArrow = (language) => { console.log(language); }
    prtLangArrow("JavaScript");

    //1.5.3 Sử dụng nhiều parameter
    //1.5.3.1. FUNCTION
    let prtLangReg = function (id, language) {
      console.log(id + ".) " + language);
      }
    prtLangReg(1, "JavaScript");
    
    //1.5.3.2. ARROW
    let prtLangArrow = (id, language) => { console.log(id + ".) " + language); }
    prtLangArrow(1, "JavaScript");





//-------------------------------------------------------------------------------------------------------------------
