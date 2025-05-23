const category = [
    {
        categoryName: "Phones",
        img: "../image/phone.png"
    },
    {
        categoryName: "Computers",
        img: "../image/Computer.png"
    },
    {
        categoryName: "SmartWatch",
        img: "../image/SmartWatch.png"
    },
    {
        categoryName: "HeadPhones",
        img: "../image/Headphone.png" 
    },
    {
        categoryName: "Gaming",
        img: "../image/Gaming.png"
    },
    {
        categoryName: "Camera",
        img: "../image/camera.png"
    },
]
let ul = document.getElementById("Categories");

category.forEach(item => {
    let div = document.createElement('div');
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = item.img;
    img.alt = item.categoryName;
    let  p = document.createElement("p");
    p.textContent = item.categoryName;
    div.appendChild(img);
    div.appendChild(p);
    li.appendChild(div);
    ul.appendChild(li);
});

const products = [
    {
        productName : "Breed Dry Dog Food",
        productImg  : "../image/product1.jpg",
        price       : "$100",
        star        : "../image/Three Star.png",
        Count       : "(35)"
    },
    {
        productName : "CANON EOS DSLR Camera",
        productImg  : "../image/product2.png",
        price       : "$360",
        star        : "../image/Four Star.png",
        Count       : "(95)"
    },
    {
        productName : "ASUS FHD Gaming Laptop",
        productImg  : "../image/product3.png",
        price       : "$700",
        star        : "../image/Five Star.png",
        Count       : "(325)"
    },

    {
        productName : "Curology Product Set ",
        productImg  : "../image/product4.png",
        price       : "$500",
        star        : "../image/Four Star.png",
        Count       : "(145)"
    },

    {
        productName : "Kids Electric Car",
        productImg  : "../image/product5.png",
        price       : "$960",
        star        : "../image/Five Star.png",
        Count       : "(65)",
        color       : "../image/Colour Chnage.png",
        newButton   : "../image/New Button.png"
    },

    {
        productName : "Jr. Zoom Soccer Cleats",
        productImg  : "../image/product6.png",
        price       : "$1160",
        star        : "../image/Five Star.png",
        Count       : "(35)",
        color       : "../image/Colour Chnage1.png"
    },

    {
        productName : "GP11 Shooter USB Gamepad",
        productImg  : "../image/product7.png",
        price       : "$660",
        star        : "../image/Four Half Star.png",
        Count       : "(55)",
        color       : "../image/Colour Chnage2.png",
        newButton   : "../image/New Button.png"
    },

    {
        productName : "Quilted Satin Jacket",
        productImg  : "../image/product8.png",
        price       : "$660",
        star        : "../image/Four Half Star.png",
        Count       : "(55)",
        color       : "../image/Colour Chnage2.png"
    },


]
const mainUl = document.getElementById("main-ul");

products.forEach(item => {
    const mainLi =document.createElement("li")
    const innerHtml =`
                    <div class="img" id="main-img">
                        <img src="${item.productImg}" alt="${item.productName}">
                        <div class="icon">
                            <svg width="34" height="76" viewBox="0 0 34 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="17" cy="17" r="17" fill="white"/>
<path d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="17" cy="59" r="17" fill="white"/>
<path d="M26.257 57.962C26.731 58.582 26.731 59.419 26.257 60.038C24.764 61.987 21.182 66 17 66C12.818 66 9.23601 61.987 7.74301 60.038C7.51239 59.7411 7.38721 59.3759 7.38721 59C7.38721 58.6241 7.51239 58.2589 7.74301 57.962C9.23601 56.013 12.818 52 17 52C21.182 52 24.764 56.013 26.257 57.962V57.962Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 62C18.6569 62 20 60.6569 20 59C20 57.3431 18.6569 56 17 56C15.3431 56 14 57.3431 14 59C14 60.6569 15.3431 62 17 62Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                        <div id="new-icon">
                            <img src="${item.newButton}" alt="">
                        </div>
                        <div class="addcart">
                            <p>Add To Cart</p>
                        </div>
                    </div>
                    <p>${item.productName}</p>
                    <div class="pricetag" id="pricetag">
                        <P>${item.price}</P>
                        <img src="${item.star}" alt="">
                        <span>${item.Count}</span>
                    </div>
                    <div class="light-icon">
                        <img src="${item.color}" alt="">
                    </div>
            `
            mainLi.innerHTML = innerHtml
            mainUl.appendChild(mainLi);
});
function showSidebar(){
    const sidebar = document.getElementById("menu-bar");
    sidebar.style.display = "flex"
}
function closeSidebar(){
    const sidebar = document.getElementById("menu-bar");
    sidebar.style.display = "none"
}
function showSearchbar() {
    const search = document.getElementById("search");
    search.style.display = "inline"
}
function closeSearchbar() {
    const search = document.getElementById("search");
    search.style.display = "none"
}