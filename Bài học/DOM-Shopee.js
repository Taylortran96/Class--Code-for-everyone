const data =[
    {
        id: 0;
        image: 'https://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tnhttps://cf.shopee.vn/file/vn-11134207-23030-2fbdeow3mxovf7_tn';
        title: "E - Sở hữu điện thoại chính hãng Xiaomi 12 Pro 5G chọn màu ngẫu nhiên ( đọc kỹ mô tả)";
        price: 109,000;
        sold: 93;
    }
    {
        id: 1;
        image: "";
        title: "Dép chữ C thêu máy Unisex";
        price: 3,800;
        sold: 1,000;
    }
    {
        id: 2;
        image: "";
        title: "Bánh tráng phơi sương";
        price: 57,000;
        sold: 12,900;
    }
    {
        id: 3;
        image: "";
        title: " Loa bluetooth";
        price: 60,000;
        sold: 5,400;
    }
    {
        id: 4;
        image: "";
        title: " Balo nữ thời trang to tiện lợi";
        price: 1,000;
        sold: 93;
    }
    {
        id: 5;
        image: "";
        title: "Dép lông con sóc siêu cute";
        price: 85,000;
        sold: 4,700;
    }
]

const container = document.getElementById ('container')

//truyền nội dung vào container
function createCard (cardInfor){
    const {id, image, title, price, sold} = cardInfor;

    // const priceElement = document.createElement ("span")
    // priceElement.innerHTML = 
    // priceElement.setAttribute ("price","card-bottom-left")
    
    return `
        <div class="card">
            <img  src = ${image} class="card-image" alt="Điện thoại" />
            <span class="card-title"> ${title}</span>
            <div class="card-bottom">
                <span class="card-bottom-left">đ${price}</span>
                <span class="card-bottom-right">${sold >0 && "Đã bán" + ${sold}} </span>
        </div>
    `
}
function renderData (data) {
    let str =''; //mỗi lần lặp qua "data" sẽ cộng dồn tất cả tới cuối cùng
    data.forEach(element => {
        const newCardString = createCard(element) //newcardstring là <div>
        str += createCard;
    });
    container.innerHTML = str;
}
renderData (data)




