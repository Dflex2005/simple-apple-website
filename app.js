//typing text
const text = ["Products"];

let count = 0;
let index = 0;
let currentItem = "";
let letter = "";

(function type(){
if(count === text.length){
    count = 0;
}
currentItem = text[count];
letter = currentItem.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentItem.length){
    count = 0;
    index = 0;
}

setTimeout(type, 400);

} ());

//main product

const product = [
    {
        id:1,
        category:"phone",
        img:"./images/phone1.jpg",
    },
    {
        id:2,
        category:"phone",
        img:"./images/phone2.jpg",
    },
    {
        id:37,
        category:"airpod",
        img:"./images/airpod7.jpg",
    },
    {
        id:38,
        category:"airpod",
        img:"./images/airpod8.jpg",
    },
    {
        id:39,
        category:"airpod",
        img:"./images/airpod9.jpg",
    },
    {
        id:3,
        category:"phone",
        img:"./images/phone3.jpg",
    },
    {
        id:4,
        category:"phone",
        img:"./images/phone4.jpg",
    },
    {
        id:5,
        category:"phone",
        img:"./images/phone5.jpg",
    },
    {
        id:19,
        category:"laptop",
        img:"./images/laptop9.jpg",
    },
    {
        id:20,
        category:"laptop",
        img:"./images/laptop10.jpg",
    },
    {
        id:21,
        category:"watch",
        img:"./images/watch1.jpg",
    },
    {
        id:9,
        category:"phone",
        img:"./images/phone9.jpg",
    },
    {
        id:10,
        category:"phone",
        img:"./images/phone10.jpg",
    },
    {
        id:11,
        category:"laptop",
        img:"./images/laptop1.jpg",
    },
    {
        id:28,
        category:"watch",
        img:"./images/watch8.jpg",
    },
    {
        id:29,
        category:"watch",
        img:"./images/watch9.jpg",
    },
    {
        id:30,
        category:"watch",
        img:"./images/watch10.jpg",
    },
    {
        id:12,
        category:"laptop",
        img:"./images/laptop2.jpg",
    },
    {
        id:13,
        category:"laptop",
        img:"./images/laptop3.jpg",
    },

    {
        id:14,
        category:"laptop",
        img:"./images/laptop4.jpg",
    },
    {
        id:15,
        category:"laptop",
        img:"./images/laptop5.jpg",
    },
    {
        id:16,
        category:"laptop",
        img:"./images/laptop6.jpg",
    },
    {
        id:17,
        category:"laptop",
        img:"./images/laptop7.jpg",
    },
    {
        id:18,
        category:"laptop",
        img:"./images/laptop8.jpg",
    },
    {
        id:22,
        category:"watch",
        img:"./images/watch2.jpg",
    },
    {
        id:23,
        category:"watch",
        img:"./images/watch3.jpg",
    },
    {
        id:6,
        category:"phone",
        img:"./images/phone6.jpg",
    },
    {
        id:7,
        category:"phone",
        img:"./images/phone7.jpg",
    },
    {
        id:8,
        category:"phone",
        img:"./images/phone8.jpg",
    },
    {
        id:24,
        category:"watch",
        img:"./images/watch4.jpg",
    },
    {
        id:25,
        category:"watch",
        img:"./images/watch5.jpg",
    },
    {
        id:31,
        category:"airpod",
        img:"./images/airpod1.jpg",
    },
    {
        id:32,
        category:"airpod",
        img:"./images/airpod2.jpg",
    },
    {
        id:33,
        category:"airpod",
        img:"./images/airpod3.jpg",
    },
    {
        id:26,
        category:"watch",
        img:"./images/watch6.jpg",
    },
    {
        id:27,
        category:"watch",
        img:"./images/watch7.jpg",
    },
    {
        id:34,
        category:"airpod",
        img:"./images/airpod4.jpg",
    },
    {
        id:35,
        category:"airpod",
        img:"./images/airpod5.jpg",
    },
    {
        id:36,
        category:"airpod",
        img:"./images/airpod6.jpg",
    },
  
    {
        id:40,
        category:"airpod",
        img:"./images/airpod10.jpg",
    }
];




const content = document.querySelector(".content");
const filterBtn = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function(){
displayProduct(product)
});

function displayProduct(productItem){
    let display = productItem.map(function(displayItem){
        return `<div class="card-img">
        <a href="${displayItem.img}">
            <img src="${displayItem.img}" class="photo" alt="">
        </a>
    </div>`
    });

    content.innerHTML = display.join("")
}

//filter btn
filterBtn.forEach(function(item){
    item.addEventListener("click", (e)=> {
        const selectItems = e.currentTarget.dataset.id;
        const filterItems = product.filter(function(filterProduct){
            if(selectItems === filterProduct.category){
                return filterProduct;
            }
            
        });
        
        
        if(selectItems === "all"){
            displayProduct(product);
        }else{
            displayProduct(filterItems);
        }
    });
    
});

const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button)=>{
const selectBtns = button.querySelector(".filter-btn");
const allItems = document.querySelector(".all-items");
selectBtns.addEventListener("click", ()=>{
   allItems.classList.remove("all-items");

   
buttons.forEach((butt)=>{
if(butt !== button){
    butt.classList.remove("show-style");
}
});



    button.classList.add("show-style");
});
});


