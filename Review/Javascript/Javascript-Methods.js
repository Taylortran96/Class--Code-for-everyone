/*1 Array.map:
- Tạo ra một array mới với các index là kết quả từ việc thực thi một hàm lên TỪNG PHẦN TỬ của mảng ban đầu
- KHÔNG làm thay đổi mảng ban đầu */
//Ví dụ 1:
var array = [1, 4, 9, 16];
var map = array.map(function(item) {
  return item * item;
});
console.log(map);   // > Array [1, 16, 81, 256]
console.log(array); // > Array [1, 4, 9, 16]

//Ví dụ 2:
let num = [1,10,5,6,-2]
num.map (item => item ** 2) //KQ: 1,100,25,36,-4

/*2. Array.concat: 
- dùng để nối 2 hay nhiều mảng với nhau
- KHÔNG làm thay đổi mảng ban đầu
- trả về 1 mảng mới sau khi nối*/
//Ví dụ 1:
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2);

console.log(array3); // > Array ["a", "b", "c", "d", "e", "f"]
console.log(array1); // > Array ["a", "b", "c"]
console.log(array2); // > Array ["d", "e", "f"]

/*3. Array.fliter:
- Lọc ra các index trong array thoả mãn một điều kiện nào đó
- KHÔNG làm thay đổi array xban đầu
- trả về 1 array mới sau khi lọc
- trả về một array [] nếu không có phần tử nào thỏa mãn điều kiện */
//Ví dụ:
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var result = words.filter(function(word) {
  return word.length > 6;
});

console.log(result); // > Array ["exuberant", "destruction", "present"]
console.log(words);  // > Array ["spray", "limit", "elite", "exuberant", "destruction", "present"]

/*4. Array.find
- lặp qua các phần tử của một mảng 
- trả về GIÁ TRỊ trị ĐẦU TIÊN tìm thấy ở trong mảng 
- hoặc trả về undefined nếu không tìm thấy */
  //Ví dụ 1:
  const arr = [2,4,6,3,4,5]
  const result = arr.find ((item) => item > 3);
  console.log (result); //Kq: 4 số (4,6,4,5)

  //Ví dụ 2:
  const trees = [ 
    "birch", 
    "maple", 
    "oak", 
    "poplar" 
  ];
  const resultFind = trees.find(tree => tree.startsWith("m"));
  console.log (resultFind) //"maple"

  //Ví dụ 3:
  const rappers = [
    { name: 'Eminem', born: 1972 },
    { name: 'Tupac', born: 1971 },
    { name: 'Biggie', born: 1972 },
    ];
    rappers.find((rapper) => rapper.name === 'Eminem') // {name: 'Eminem', born: 1972}

/*5. Array.findIndex: tìm vị trí
- Giống Array.find
- lặp qua các phần tử của một mảng 
- Khác: trả về CHỈ SỐ đầu tiên của index tìm được thoả điều kiện
- trả về (-1) => không có phần tử nào vượt qua điều kiện. */
    //Ví dụ 1:
    const arr = [2,4,6,3,4,5]
    const result = arr.findIndex ((item) => item > 3);
    console.log (result); //Kq: 1

    //Ví dụ 2:
    const inventory = [
        {name: "apple", quantity: 2}
        {name: "banana", quantity: 0}
        {name: "cherries", quantity: 5}
    ];
    const result = inventory.findIndex (({name}) => name === "cherries");
    console.log (result)
    

//6. Array.filter: 

    //Ví dụ 1:
    let marks = [13, 29, 25, 32, 71];
    let arr = marks.filter(val => val >= 30);
    console.log(arr); // [32, 71]

    //Ví dụ 2:
    const obj = [
        { ten: 'trang', tuoi: 22 },
        { ten: 'hung', tuoi: 23 },
        { ten: 'tuan', tuoi: 24 },
        { ten: 'nhi', tuoi: 25 },
    ];
    const friends = ['trang', 'nhi'];
    const users = obj.filter((item) => friends.indexOf(item.ten) !== -1);
    console.log(users); // [{ten: 'trang', tuoi: 22},{ten: 'nhi', tuoi: 25}]

//7. Array.sort()
  // 7.1. Sắp xếp tăng dần theo chữ cái
  let fruits = ['Apples', 'Watermelon', 'Bananas', 'Cherries'];
  fruits.sort();
  console.log( fruits );
  // KQ: ["Apples", "Bananas", "Cherries", "Watermelon"]

  //7.2. Sắp xếp giảm dần theo chữ cái => dùng thêm String localeCompare() 
  let fruits = ['Apples', 'Watermelon', 'Bananas', 'Cherries'];
  fruits.sort((a, b) => b.localeCompare(a));
  console.log( fruits );
  // KQ: ["Watermelon", "Cherries", "Bananas", "Apples"]

/*8. Array.reduce:
- Phương thức giảm mảng xuống thành một giá trị duy nhất.
- Phương thức reduce() thực thi một hàm được cung cấp cho mỗi giá trị của mảng (từ trái sang phải).
- Giá trị trả về của hàm được lưu trữ trong bộ tích lũy (kết quả / tổng). */

    //Ví dụ:
    const reduced = [1, 2, 3, 4, 5].reduce((prev, next) => {
        console.log(prev, next);
        return prev + next;
    }, 0);
    //KQ:
    // 0  = initial value,             1 = first array item
    // 1  = previous result (0 + 1)    2 = second array item
    // 3  = previous result (1 + 2)    3 = third array item
    // 6  = previous result (3 + 3)    4 = fourth array item
    // 10 = previous result (6 + 4)    5 = fifth array item

/*9.Array.indexOf
- dùng để tìm kiếm vị trí của phần tử trong mảng
- KHÔNG làm thay đổi mảng ban đầu
- trả về giá trị index ĐẦU TIÊN của mảng nếu phần tử tồn tại trong mảng
- trả về -1 nếu phần tử không tồn tại trong mảng */
//Ví dụ:
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));    // > 1
console.log(beasts.indexOf('bison', 2)); // > 4
console.log(beasts.indexOf('giraffe'));  // > -1

/*10. Array.forEach:
- dùng để duyệt qua từng phần tử của mảng
- trả về undefined */
    //Ví dụ:
    let array = ['a', 'b', 'c'];
    array.forEach(function(element) {
    console.log(element);
    });
    //KQ:
    // > "a"
    // > "b"
    // > "c"
    console.log(array); // > Array ["a", "b", "c"]

/*11. Array.Includes ()
- kiểm tra xem phần tử đã cho có tồn tại trong mảng hay không
- KHÔNG làm thay đổi mảng ban đầu
- trả về kiểu Boolean: true nếu tìm thấy hoặc false nếu không tìm thấy */
    //Ví dụ:
    let array = [1, 2, 3];
    console.log(array.includes(2)); // > true
    console.log(array);             // > Array [1, 2, 3]- Không làm thay đổi mảng ban đầu

/*12. Array.Set
- cho phép bạn lưu trữ dữ liệu một cách duy nhất, không trùng lặp. 
- có thể dùng chung vs vòng lặp for..of 
- dùng chung với nhiều methods: forEach, filter,... */
    // ví dụ 1: 
    const obj1 = { x: 1, y: 2 };
    const obj2 = { x: 1, y: 2 };

    console.log(obj1 === obj2); //KQ: false

    const set1 = new Set([obj1, obj2]);
    console.log(set1.size); // KQ: 2

// Khởi tạo Set rỗng bằng cách không truyền tham số vào hàm khởi tạo
    const set1 = new Set();
    console.log(set1); // Set(0) {}

//Khởi tạo Set từ Array
    const set2 = new Set([1, 2, "a", "b", 1]);
    console.log(set2); // Set(4) {1, 2, "a", "b"}

//Khởi tạo Set từ String
    const set3 = new Set("abcba");
    console.log(set3); // Set(3) {"a", "b", "c"}

//Thêm phần tử vào Set => dùng add
    // khởi tạo set rỗng
    const set1 = new Set();

    // thêm phần tử 1
    set1.add(1);
    console.log(set1); // Set(1) {1}

    // thêm phần tử 2 (khác 1)
    set1.add(2);
    console.log(set1); // Set(2) {1, 2}

    // thêm phần tử 3 (khác 1 và 2)
    set1.add(1).add(2).add(3);
    console.log(set1); // Set(3) {1, 2, 3}

//Xoá một phần tử trong Set
    const set1 = new Set("abcdcba");
    console.log(set1); // Set(4) {a, b, c, d}

    set1.delete("a");
    console.log(set1); // Set(3) {b, c, d}

    set1.delete("d");
    console.log(set1); // Set(2) {b, c}




//13. Array.copyWithin:
array.copyWithin(target, start, end)
 /*Trong đó:
+ target là vị trí mà hàm sẽ bắt đầu ghi đè các phần tử sao chép được.
+ start là vị trí bắt đầu sao chép, giá trị mặc định là 0.
+ end là vị trí kết thúc sao chép, nếu không nhập vào thì mặc định là vị trí cuối cùng của mảng. */
    // ví dụ:
    let numbers = [1, 2, 3, 4, 5]
    // Lặp lại phần tử từ vị trí thứ 2 cuối chuỗi.
    // Lấy từ phần tử bắt đầu start là 0, end là 4
    numbers.copyWithin (-2) // KQ: [1, 2, 3, 1, 2]

    // Lặp từ vị trí đầu tiên (0)
    // Lấy từ phần tử bắt đầu start là 3, end là 4
    numbers.copyWithin(0, 3) // KQ: [4, 5, 3, 4, 5]

/*13. Array.Some: 
- kiểm tra các phần tử xem có thoả mãn điều kiện 
- Chỉ cần 1 phần tử thoả mãn thì True */

/*14. Array.Every: 
- kiểm tra các phần tử xem có thoả mãn điều kiện 
- TẤt cả phần tử phải thoả mãn thì True */



/*19. CallBack
- giúp đảm bảo rằng một code nhất định sẽ không thực thi trừ khi một code khác hoàn thành thực thi. 
- synchronous (xử lý đồng bộ) và asynchronous (xử lý không đồng bộ).
- thường hay dùng chung Indexof, findindex*/

//20. Thêm và xoá index trong array
  /*20.1. Thêm index vào array:
    - Thêm vào đầu array:  
        + Array.unshift
    - Thêm vào cuối array: 
        + Array.push
        + Array.prototype.push() -- Thêm 1 index vào cuối array và trả về length của array

  /*20.2. Xoá index trong array:
    - Xoá vào đầu array:  
        + Array.shift
        + Array.prototype.shift() -- Xóa index đầu tiên của array và trả về index đó.
    - Xoá vào cuối array: 
        + Array.pop 
        + Array.prototype.pop(): Xóa phần tử cuối của array và trả về index đã xóa.*/

  /*20.3. Thêm và xoá bất kỳ index trong array
        + Array.splice
        + Array.prototype.splice(): chèn hoặc xóa đi một hay nhiều phần tử. */
  //Ví dụ 1:
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 0, "Lemon", "Kiwi"); //KQ: Banana,Orange,Lemon,Kiwi,Apple,Mango
    //Giải thích:
    // The first parameter (2): xác định số lượng  index thêm vào
    // The second parameter (0): xác định số lượng index phải xoá đi
    // Lemon, Kiwi thêm vào, và không có index nào bị xoá
  
    //Ví dụ 2:
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 2, "Lemon", "Kiwi"); 
    /*KQ: 
    - Array mới: Banana,Orange,Lemon,Kiwi
    - Có 2 index bị xoá: Apple,Mango */
  
    //Ví dụ 3:
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(0, 1);
    //KQ: Array mới: Orange,Apple,Mango (xoá 1 index, không có index nào thêm vào array)
  
/*21. Function "Bind"- Ràng buộc */
    this.firstName = "Minh";
    this.lastName = "Thu";
    const teacher = {
    firstName = "Minh";
    lastName = "Thảo";
    getFullName () {
        return (`${this.firstName} ${this.lastName}`)
    }
    }
    const student = {
    firstName = "Đặng";
    lastName = "Sơn";
    }
    //Trường hợp 1:
        console.log (teacher.getFullName()) //KQ: Minh Thảo- "this" trỏ về object "teacher"

    //Trường hợp 2:
        const getTeacherName = teacher.getFullName //getFullName không có dấu gọi hàm "()" 
        console.log (getTeacherName == teacher.getFullName) //KQ: True
        console.log (getTeacherName) //Kq: Minh Thu
    //Commment: "this" trở về global (window) do getTeacherName không có dấu "." đằng trước 


    //Trường hợp 3: Tuy nhiên muốn cho getTeacherName thành "Minh Thảo" => dùng "bind"
        const getTeacherName = teacher.getFullName.bind (teacher) //ràng buộc "teacher"
        console.log (getTeacherName) //KQ: Minh Thảo

    //Trường hợp 4: 
        const getTeacherName = teacher.getFullName.bind (student) //ràng buộc "student"
        console.log (getTeacherName === teacher.getFullName) //KQ= False- vùng mới
        console.log (getTeacherName) //KQ: Đặng Sơn

//-----------------------------------------------------------------------------------------------------------------------------
//1. PHÂN BIỆT FIND >< FILTER trong Javascript
let jsonarr = [ 
    { 
        id: 1, 
        name: "joe"
    }, 
    { 
        id: -19, 
        name: "john"
    }, 
    { 
        id: 20, 
        name: "james"
    }, 
    { 
        id: 25, 
        name: "jack"
    }, 
    { 
        id: -10, 
        name: "joseph"
    }, 
    { 
        id: "not a number", 
        name: "jimmy"
    }, 
    { 
        id: null, 
        name: "jeff"
    }, 
] 
const resultFilter = jsonarr.filter(el => el.id > 0);
console.log('Filter trong javascript',resultFilter)
// KQ của Filter: [ {id: 1, name: "joe"}, {id: 20, name: "james"},{id: 25, name: "jack"}]

const resultFind = jsonarr.find(el => el.id > 0);
console.log('Find trong javascript', resultFind)
// KQ của Find: {id: 1, name: "joe"}

/* Comment:
+ Find: sẽ trả về 1 element ngay khi đúng điều kiện (el > 0)
+ Filter: sẽ trả về một Array mà thoả mãn điểu kiện (el > 0)
+ Filter dc sử dụng nhiều hơn find */

//2. PHÂN BIỆT FINDINDEX >< INDEXOF TRONG JAVASCRIPT
//2.1 Giống nhau
const myArray = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(myArray.findIndex( k => k === 2)); // 1

const myArray = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(myArray.indexOf(2));  // 1

//2.2. Khác nhau: Parameters or Arguments truyền vào (phân biệt arguments và params)
  //2.2.1. Array.findIndex
  //khi tìm index của một Array() non-primitive types (e.g. objects). Và tìm kiếm những điều kiện phức tạp hơn.
  array.findIndex(callback(element [, index [, array]]));

  //2.2.2. Array.indexOf
  //khi tìm index của một array kiểu primitive types (like string, number, or boolean).
  arr.indexOf(searchElement[, fromIndex])

//3. Dùng MAP/REDUCE/FILTER (Đặc biệt: REDUCE thay cho vòng lặp FOR
const animals = [

    {

        "name": "cat",

        "size": "small",

        "weight": 5

    },

    {

        "name": "dog",

        "size": "small",

        "weight": 10

    },

    {

        "name": "lion",

        "size": "medium",

        "weight": 150

    },

    {

        "name": "elephant",

        "size": "big",

        "weight": 5000

    }

]
//Một mảng mới chứa tên các con vật từ mảng đã có ở trên
    //Cách 1: dùng vòng lặp for
    let animal_names = [];

    for (let i = 0; i < animals.length; i++) {
        animal_names.push(animals[i].name);
     }

    //Cách 2: dùng Map ()
    let animal_names = animals.map((animal, index, animals) => {
        return animal.name
    })

// Muốn lấy ra một mảng gồm những con vật nhỏ
    //Cách 1: dùng vòng lặp for
    let small_animals = [];
    for (let i = 0; i < animals.length; i ++) {
        if (animals[i].size === "small") {
            small_animals.push(animals[i])
        }
    }

    //Cách 2: dùng filter ()
    let small_animals = animals.filter((animal) => {
        return animal.size === "small"
    })

// Tính tổng khối lượng các con vật.
    //Cách 1: dùng vòng lặp for
    let total_weight = 0;
    for (let i = 0; i < animals.length; i++) {
        total_weigth += animals[i].weight

    }
    //Cách 2: dùng reduce ()
    let total_weight = animals.reduce((weight, animal, index, animals) => {
        return weight += animal.weight

    }, 0)
//Comment:
/* 
1. Hàm map() nhận vào 3 tham số cho hàm callback:
    1/ Phần tử hiện tại của mảng
    2/ Index của phần tử hiển tại
    3/ Mảng đầu vào
Ưu điểm so với for-loop:
    + Không cần quản lý trạng thái vòng lặp
    + Không cần sử dụng index để truy cập phần tử của mảng
    + Không cần tạo thêm 1 mảng mới(animal_names) rồi thêm giá trị vào đó
** Lưu ý: Khi sử dụng map là bắt buộc phải sử dụng return. Nếu không sử dụng thì mảng trả lại sẽ chỉ chứa các giá trị undefined

2. Hàm filter() 
- Hàm callback của filter cũng nhận vào những tham số như hàm map. 
- Nhưng trong trường hợp này chúng ta không dùng đến 2 tham số Index của phần tử hiển tại 
- Mảng đầu vào nên chúng ta sẽ không đưa nó vào hàm callback. 
** Lưu ý: Khi sử dụng filter là bắt buộc phải sử dụng return vì filter luôn trả về giá trị Boolean.  
Nếu không có làm phần này thì hàm sẽ luôn trả về false

3. Hàm reduce ()
- Giá trị muốn trả về khi kết thúc hàm(trong ví dụ trên là total_weight)
- Program sẽ quét qua từng giá trị và sẽ được cộng dồn sau mỗi lần lặp và gán vào tham số đầu tiên của hàm callback(weight)
*/

//4. Trường hợp sử dụng reduce javascript
    //4.1 Tính tổng và tích của array 
    function Accumulation(...vals) {
        return vals.reduce((t, v) => t + v, 0);
    }
    
    function Multiplication(...vals) {
        return vals.reduce((t, v) => t * v, 1);
    }
    
    Accumulation(1, 2, 3, 4, 5); // 15
    Multiplication(1, 2, 3, 4, 5); // 120
    
    //4.2 Thay thế Reverse()
    function Reverse(arr = []) {
        return arr.reduceRight((t, v) => (t.push(v), t), []);
    }
    Reverse([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

    //4.3 Thay thế map() or filter()
    const arr = [0, 1, 2, 3];
    //map: [0, 2, 4, 6]
    const a = arr.map(v => v * 2);
    const b = arr.reduce((t, v) => [...t, v * 2], []);

    //filter: [2, 3]
    const c = arr.filter(v => v > 1);
    const d = arr.reduce((t, v) => v > 1 ? [...t, v] : t, []);

    // reduce chấp cả hai map + fitler
    const e = arr.map(v => v * 2).filter(v => v > 2);
    const f = arr.reduce((t, v) => v * 2 > 2 ? [...t, v * 2] : t, []);
    
    //4.4 Thay thế some() or every()
    const scores = [
        { score: 45, subject: "chinese" },
        { score: 90, subject: "math" },
        { score: 60, subject: "english" }
    ];
    //some
    const isAtLeastOneQualified = scores.reduce((t, v) => t || v.score >= 60, false); // true
    
    //every
    const isAllQualified = scores.reduce((t, v) => t && v.score >= 60, true); // false
    
    //4.5 Thay thế max() và min()
    function Max(arr = []) {
        return arr.reduce((t, v) => t > v ? t : v);
    }
    
    function Min(arr = []) {
        return arr.reduce((t, v) => t < v ? t : v);
    }
    const arr = [12, 45, 21, 65, 38, 76, 108, 43];
    Max(arr); // 108
    Min(arr); // 12


    //4.6 Chunk array
    function Chunk(arr = [], size = 1) {
        return arr.length ? arr.reduce((t, v) => (t[t.length - 1].length === size ? t.push([v]) : t[t.length - 1].push(v), t), [[]]) : [];
    }
    const arr = [1, 2, 3, 4, 5];
    Chunk(arr, 2); // [[1, 2], [3, 4], [5]]
    
    //4.7 Tìm phần tử khác nhau giữa hai array
    function Difference(arr = [], oarr = []) {
        return arr.reduce((t, v) => (!oarr.includes(v) && t.push(v), t), []);
    }
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 3, 6]
    Difference(arr1, arr2); // [1, 4, 5]

    //4.8 Tách phần tử trong Array theo đúng type of
    function Unzip(arr = []) {
        return arr.reduce(
            (t, v) => (v.forEach((w, i) => t[i].push(w)), t),
            Array.from({ length: Math.max(...arr.map(v => v.length)) }).map(v => [])
        );
    }
    const arr = [["a", 1, true], ["b", 2, false]];
    Unzip(arr); // [["a", "b"], [1, 2], [true, false]]
    
    //4.9 Thống kê xem các từ khoá có trong array hay không?
    function Keyword(arr = [], keys = []) {
        return keys.reduce((t, v) => (arr.some(w => w.includes(v)) && t.push(v), t), []);
    }
    const text = [
        "blog javascript by anonystick.com",
        "anonystick.com",
        "tiki and lazada is better",
    ];
    const keyword = ["javascript", "anonystick", 'words' ,"lazada", 'tips javascript']
    console.log(Keyword(text, keyword)); //["javascript","anonystick","lazada"]
    
