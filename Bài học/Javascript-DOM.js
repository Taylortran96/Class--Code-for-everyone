//BUỔI 10: DOM & EVENT
/* 1. Document Object Model (DOM)
- thể hiện các phần tử trên trang web dưới dạng các Objects
- Document => Root element: <html> =>
    + Element: <head>
    + Element: <body>
*/
    // 1.1. Chức năng của DOM:
    // 1.1.1 Truy xuất phần tử trong trang 
//Vd: Truy xuất phần tử có id ="..." => let $myTitle = document.getElementById ('my-title')
/*Lưu ý:
- Id thì chỉ có 1
- Class thì 1 mảng (nhieu phần tử)
-
- quy ước: 
*/

//Ví dụ: liên quan
// a/ Truy xuất phần tử thông qua id (document.getElementById)
window.onload = function () { //khi window chạy thì load những dòng 'big-title'
    const $title = document.getElementById ('big-title')
    console.log ($title)
}
// Lưu ý: trong html khi console.log ra null => trong html, để <script></script> cuối cùng trước khi kết thúc chương trình

// b/Truy xuất phần tử thông qua class (document.getElementsByClassName)
const $paragraphs = document.getElementsByClassName ('red-paragraph');
for (const $paragraphs of $paragraphs) {
    console.log ($paragraphs); } //làm tương tự như for (let i = 0;...
//Lấy phần tử bên trong 'red-paragraph':
for (const $paragraphs of $paragraphs) {
    console.log ($paragraphs.children);
} 
console.log ($paragraphs); //nhiều class => paragraphs

// c/ Truy xuất phần tử thông qua tên thẻ (document.getElementsByTagName)
const $images = document.getElementsByTagName ('img');
console.log ($images) //trả về html collection img

// Ngoài document.getElement, còn có document.querySelector () và document.querySelectorAll ()

    // 1.1.2. Thay đổi phần tử: nội dụng, thuộc tính, định dạng
//a/ lấy ra nội dung của phần tử:
let titleContent =$title.innerHTML;
console.log (titleContent)

//b/ Thay đổi nội dung:
$title.innerHTML = "Nội dung mới"; //không cần console.log (gán giá trị cho 1 thuộc tính)

//c/ Lấy ra thuộc tính của 1 phần tử => $title.getAttribute ('Tên thuộc tính')
let titleAttributeValue = $title.getAttribute ('data-hello');
console.log (titleAttributeValue)

//d/ Thay đổi/thêm mới thuộc tính của 1 phần tử => $title.setAttribute
$title.setAttribute('data-goodbye', 'this is goodbye')
$title.setAttribute ('data-hello', 'This is hello')

//e/ Xoá thuộc tính của 1 phần tử => $title.revmoveAttribute()
$title.removeAttribute ('data-goodbye')

//f/ Thay đổi định dạng: thêm $title.style.color/display/....
$title.style.color = "red";
$title.style.backgroundColor = 'black';
$title.style.display = "flex";
    //hoặc
$title.setAttribute('style','color:red, background-color:blue')
    //hoặc
for (const $p of $paragraphs) {
    $p.style.color = 'red'; //không trỏ vào html collection
}
    //hoặc
$paragraphs[0].style.color = "blue";

    // 1.1.3 Thêm/Xoá phần tử trên trang web
//a/ Thêm phần tử:
//Bước 1: tạo
const $link = document.createElement ('a');
$link.innerHTML = "This is link to somewhere";
$link.setAttribute ('href', 'https://www.google.com.vn/')
//Bước 2:
document.body.append ($link) //append: thêm vào cuối
document.body.prepend ($link) //prepend: thêm vào đầu

$title.append ($link) //thêm vào đầu thẻ h1
$title.after ($link) //thêm $link vào sau $title
$title.before($link) //thêm $link vào trước $title
$title.append($link) //thêm $link vào trong $title

//b/ Xoá phần tử:
$title.parentElement.remove(); //xoá hết body
$title.remove ();

    // 1..1.4 Xử lý sự kiện xảy ra trên trang web (vd: click chuột, kéo thả chuột,...) 

/*2. EVENT
- Là sự kiện xảy ra trên trang Web */

/*3. LISTENERS
- Các function được xảy ra khi 1 event nào đó xuất hiện:
    + Khi click vào nút "hello" => Thông báo "Bạn đã click vào hello button"
    + Khi di chuột vào ảnh => Phóng to ảnh lên
*/ 
// 4. Thao tác Event và Listeners
/*Cách 1: 
- sử dụng thuộc tính: onclick trong html
- (khi nhập trên bàn phím thì alert) this thể hiện giá trị vừa nhập trên bàn phím */

// Cách 2:
$title.onclick = function (){
    console.log (`Vừa click vào title`)
}
//hoặc
function handleClickTitle (){
    console.log (`Vừa click vào title`)
}
//hoặc
$title.onclick = handleClickTitle1;
$title.onclick = handleClickTitle2;
function handleClickTitle1 (){
    console.log (`Vừa click vào title`)
}
function handleClickTitle2 (){
    console.log (`Hello`)
}
KQ: Hello => ghi đè (handleClickTitle2 đè lên handleClickTitle1)

//Cách 3: không phải ghi đè
$title.addEventListener ('click',handleClickTitle1);
$title.addEventListener ('click',handleClickTitle2);
function handleClickTitle1 (){
    console.log (`Vừa click vào title`)
}
function handleClickTitle2 (){
    console.log (`Hello`)
}
//Không ghi đè => thể hiện cả 2 thuộc tính

//----------------------------------------
//VÍ DỤ 1:
const $emailInput = document.getElementById ('my-email');
$emailInput.onchange = function () {
    let email = $emailInput.value; // lấy giá trị nhập vào của ô input
    let emailValid = isEmailValid(email)
    if (!emailValid) alert (`Hãy nhập lại email`) // Nếu không phải email thì hiện "Hãy nhập lại email"
}
//hoặc
$emailInput.addEventListener ('change', function(){
});

function isEmailValid (email) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

//VÍ DỤ 2:
const $numberA = document.getElementById('number-a')
const $numberB = document.getElementById('number-b')
const $plusbutton = document.getElementById('plus-btn')
const $minusbutton = document.getElementById('minus-btn')

$plusbutton.onclick = function () {
    let a = Number( $numberA.value);
    let b = Number ( $numberB.value);
}
$minusbuttonus.onclick = function () {
    let a = Number($numberA.value);
    let b = Number ($numberB.value);
}

//Tất cả nhập từ bàn phím đều là string => thêm Number
//-------------------------------------------------------------------------------------------------------------
// BUỔI 11: HTML Storage

//1. HTML Storage
    //1.1 Cách mở:
    //F12 >> Application >> Local / Session Storage

    // 1.2 Định nghĩa:
    /*Local storage:
        - giúp website lưu trữ dữ liệu vĩnh viễn trên trình duyệt 
        - Lưu cặp data: <key> + <value>
        - truyền dữ liệu là string
        - array, preference không phải string => convert về string
    */
    /*Session storage (~ Local storage)
        - Lưu cặp data: <key> + <value> 
        - Cho phép lưu trữ nhiều data(khoảng 10MB).
        - Mất dữ liệu khi đóng tab hoặc trình duyệt
    */    

    // 1.3 Thao tác lưu dữ liệu vào local Storage / session storage
        //Lưu dữ liệu: <key> + <value>
        localStorage.setItem ("name", "thy");
        localStorage.setItem ("address", "TPHCM");
        localStorage.setItem ("weight", "55")
        
        //Thay đổi => ghi đè lên
        localStorage.setItem ('Name'; "Hiếu")
        
        // Lấy dữ liệu ra => gọi hàm
        const value = localStorage.getItem ("address")
        console.log (value +10) //kiểu dữ liệu trả về string| null
        
        //xoá dữ liệu
        LocalStorage.clear()  //Xoá tất cả  
        LocalStorage.removeItem(‘name’) //xoá phần tử tên name
        
        //Kiểu dữ liệu
        localStorage.setItem ('favorites', ['a','b','c','d']) //k có lưu trực tiếp array ['a','b','c','d']; chỉ lưu favorites
        const favorites = localStorage.setItem ('favorites');
        console.log (favorites)

        localStorage.setItem ('pet', {type: 'cat', tên: 'kitty', age: "2" }) //lưu kiểu preference sẽ ra kết quả [Object Object]

/* 2. Javascript Objective Notation (JSON)
    - Là 1 string, khi phân tích (parse) => mảng || object
    - Công dụng:
        + Lưu trữ mảng, object dưới dạng 1 string
        + Dùng trong việc trao đổi data trong máy tính */
    
    const favorites = ['money', 'sleeping', ' girl']
    const pet = {type: 'cat', name: 'Bob', age: 2};
    const users = [
        {id: 1, name: 'A', username: "user_a", password: '123456' }
        {id: 2, name: 'B', username: "user_b", password: '564123' }
    ]
    //biến đổi object | Array => String
    const favoritesJSON = JSON.stringify (favorites);
    console.log (favoritesJSON); // trả về kết quả là String, kp Object
    
    const petJSON = JSON.stringify (pet);
    console.log (petJSON); // trả về kết quả là String, kp Object

    const usersJSON = JSON.stringify (users);
    console.log(usersJSON); // trả về kết quả là String, được hiện thị theo dạng Array

    //biến đổi string (JSON) => object | Array
    const newPet = JSON.parse (petJSON)
    console.log (newPet) //KQ là object => có thể lấy các phần tử trong object đó

    const newFavorites = JSON.parse (favoritesJSON);
    console.log (newFavorites);

    //lưu "users" vào trong Local storage
    //biến đổi "users" => JSON
    const usersJSON = JSON.stringify (users);
    localStorage.setItem ('users', usersJSON);
    console.log(usersJSON);

    //lấy users từ local storage
    const value = localStorage.getItem ('users');
    const newUsers = JSON.parse (value);
    console.log (newUsers)

//3. Location và History  
    Location.href
    Location.hostname
    Location.pathname
    Location.assign('https://completejavascript.com/tim-hieu-ve-json-trong-javascript/') //Đi đến 1 trang mới
    //History: lưu trong trình duyệt, tắt trình duyệt => auto clear
    History.forward ()//bấm vào nút forward
    History.back () // bấm vào nút back

//4. Timer
    const $starTimerbtn = document.getElementById ('startTimerbtn')
    const $pauseTimerbtn = document.getElementById ('pauseTimerbtn')
    const $resetTimerbtn = document.getElementById ('resetTimerbtn')
    let timer = null;
    $starTimerbtn.onclick = function () {
        setInterval ( () => {
            let value = $seconds.innerHTML;
            $seconds.innerHTML = value - 1; //value--1 thì vô nghĩa
            //hoặc $seconds.innerHTML = value--; 
        }, 1000);
    }

    $starTimerbtn.onclick = function () {
        timer.setInterval ( () => {
            let value = $seconds.innerHTML;
            value = value - 1; 
            $seconds.innerHTML === value;
        }, 1000);
        if( value === 0) {
            clearInterval (timer)
        }
    }
    $pauseTimerbtn.onclick = function (){
        clearInterval (timer)
    }
    $resetTimerbtn.onclick = function () {
        clearInterval (timer)
        $seconds.innerHTML = 10;
    }
//5. ES6
    //Spread
    let numb1 = [1,2,3,4];
    let numb2 = [4,5,6,7];

    let res1 = [...numb1, 10,9, ...numb1];
    console.log (res1)

    let part1 = { type: "cat", name: "John"}
    let part2 = { age: 20}
    let summary = {...part1, ...part2, name: "Peter"} //ghi đè lên "name" => tên con mèo cuối cùng Peter
    console.log(summary)

    //Destructuring
    // let type = summary.type;
    // let name = summary.name;
    let {type, name} = summary;
    console.log(type, name)

    //Trùng
    let name ="a";
    const obj = {name: "b"; age: 26}
    const {name, age} = obj //KQ: name bị trùng ở trên
    //Cách sửa:
    const {name: newName, age} = obj //Khai báo name bằng 1 tên khác

//6. tạo một Image Slider trượt các ảnh đơn giản, các ảnh chuyển đổi bằng cách bấm vào nút Ảnh trước Ảnh sau
//Trong HTML: tạo 1 thẻ div chứa hình ảnh và nút bấm "Ảnh trước" và "Ảnh sau"
    // <div>
    //     <img id="slider" src="https://raw.githubusercontent.com/ichte/Planets-Android-Learning/master/earth.jpg">
    //     <button onclick="prev()"> Ảnh trước </button>
    //     <button onclick="next()"> Ảnh sau </button>        
    // </div>

//Javascript:
    // khai báo mảng images
    var images = [
        "https://raw.githubusercontent.com/ichte/Planets-Android-Learning/master/earth.jpg",
        "https://raw.githubusercontent.com/ichte/Planets-Android-Learning/master/jupiter.jpg",
        "https://raw.githubusercontent.com/ichte/Planets-Android-Learning/master/neptune.jpg"
    ];
    var num = 0;

    //Code cho ảnh trước
    function next() {
        var slider = document.getElementById("slider");
        num++;
        //Nếu người dùng bấm vào Ảnh tiếp chỉ số sẽ tăng thêm 1, nếu vượt qua số lượng ảnh có thì trở về 0.
        if(num >= images.length) {
            num = 0;
        }
        slider.src = images[num];
    }

    //code cho ảnh sau
    function prev() {
        var slider = document.getElementById("slider");
        num--;
        if(num < 0) {
            num = images.length-1;
        }
        slider.src = images[num];
    }

