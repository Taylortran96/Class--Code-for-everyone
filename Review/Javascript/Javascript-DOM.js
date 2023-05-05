//1. Toggle: dùng để thực hiện luân phiên giữa việc hiện & ẩn một phần tử
//2. QuerySelector: trả về phần tử đầu tiên là phần tử con của phần tử mà nó được gọi ra khớp với nhóm bộ chọn được chỉ định.
document.querySelector('.btn') // class name
document.querySelector('#root') // id name
document.querySelector('button') // tag name
document.querySelector('div span') // theo kiểu css

// Ví dụ: tìm phần tử div đầu tiên và cho chữ màu đỏ.
var firstDiv = document.querySelector('div')
firstDiv.style.color = 'red'

//3. queryselectorAll: Trả về tất cả các phần tử bên trong khớp với bộ chọn CSS. Kết quả được trả về dưới dạng một đối tượng NodeList object.
// Ví dụ: tìm tất cả các phần tử p và cho chữ sang màu đỏ
const paragraphs = document.querySelectorAll('p')
for(var p of paragraphs) {
p.style.color = 'red'
}
//Element: classList
// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// 4. element.getElementById	=> tìm phần tử theo "ID"
// 5. element.getElementsByName	=> tìm phần tử theo "Name"
// 6. element.getElementsByTagName => => tìm phần tử theo tag "p" "div"
// 7. element.getElementsByClassName => => tìm phần tử theo "Class"
// 8. element.childNodes : trả về mảng các phần tử con của nó
// 9. element.firstChild : phần tử con đầu tiên
// 10. element.lastChild : phần tử con cuối cùng
// 11. element.hasChildNodes : trả về true nếu có phần tử con, ngược lại là false
// 12. element.nextSibling : phần tử cùng cấp tiếp theo
// 13. element.previousSibling : phần tử cùng cấp trước
// 14. element.parentNode : trả về nút cha


//Ví dụ
const element = document.querySelector('.example');

element.classList.add('new-class'); // thêm lớp CSS mới
element.classList.remove('old-class'); // xoá lớp CSS cũ
element.classList.toggle('active'); // bật hoặc tắt lớp CSS (nếu có)
element.classList.contains('example'); // kiểm tra lớp CSS có trong phần tử hay không
element.classList.replace('old-class', 'new-class'); // thay thế lớp CSS cũ bằng lớp CSS





// 10. CSS Pseudo-Elements (::) vs Pseudo-Class (:)
/* A. CSS Pseudo-Class (":")
    - selector:hover{}: di chuyển chuột vào đường dẫn
    - selector:link{}: dường dẫn khi chưa click 
    - selector:active{}: đường dẫn đã chọn
    - selector:first-child{}: kết nối một phần tử “đầu tiên” của phần tử khác.
    - selector:visited{}: Chọn tất cả liên kết đã truy cập
    - selector:lang{}: cho phép bạn định nghĩa một quy tắc đặc biệt cho các ngôn ngữ khác.
    - selector:root{}: Chọn phần tử gốc của tài liệu

B. CSS Pseudo-Elements ("::")
    - selector::before{}:  sử dụng để thêm text, hình ảnh hay bất kỳ nội dung gì phía trước nội dung của phần tử được chọn
    - selector::after{}: được sử dụng để thêm nội dung nhưng là vào phía sau phần tử được chọn.
    - selector::selection{}: dùng để style cho một vùng văn bản được người dùng chọn (hay còn gọi là "bôi đen"). [Thuộc tính css khả dụng: color, background, curso, và outline]
    - selector::first-line{}: dùng để style cho dòng đầu tiên của phần tử được chọn
    - selector::first-letter{}: dùng để thêm style đặc biệt vào chữ cái đầu tiên của văn bản.










*/