// ================= LOADER =================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.pointerEvents = "none";

setTimeout(() => {

loader.remove();

},500);

},1000);

});

// ================= DARK MODE =================

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

localStorage.setItem(

"theme",

document.body.classList.contains("dark")

);

});

if(localStorage.getItem("theme")==="true"){

document.body.classList.add("dark");

}

// ================= SEARCH =================

const search = document.getElementById("searchInput");

const foods = document.querySelectorAll(".food-card");

search.addEventListener("keyup",()=>{

const value = search.value.toLowerCase();

foods.forEach(food=>{

food.style.display =

food.innerText.toLowerCase().includes(value)

?

"block"

:

"none";

});

});

// ================= CART =================

const cart=[];

const cartBtn=document.getElementById("cartBtn");

const cartSide=document.getElementById("cartSidebar");

const closeCart=document.getElementById("closeCart");

const cartItems=document.getElementById("cartItems");

const totalPrice=document.getElementById("totalPrice");

const cartCount=document.getElementById("cartCount");

cartBtn.onclick=()=>{

cartSide.classList.add("show");

}

closeCart.onclick=()=>{

cartSide.classList.remove("show");

}

document.querySelectorAll(".add-cart").forEach(btn=>{

btn.onclick=()=>{

cart.push({

name:btn.dataset.name,

price:Number(btn.dataset.price)

});

updateCart();

showToast();

saveCart();

}

});

function updateCart(){

cartItems.innerHTML="";

let total=0;

cart.forEach((item,index)=>{

total+=item.price;

cartItems.innerHTML+=`

<div class="cart-item">

<div>

<b>${item.name}</b>

<br>

RM ${item.price.toFixed(2)}

</div>

<button onclick="removeItem(${index})">

❌

</button>

</div>

`;

});

if(cart.length===0){

cartItems.innerHTML=

"<p>Keranjang masih kosong.</p>";

}

totalPrice.innerHTML=

"RM "+total.toFixed(2);

cartCount.innerHTML=

cart.length;

}

function removeItem(index){

cart.splice(index,1);

updateCart();

saveCart();

}

window.removeItem=removeItem;
// ================= LOCAL STORAGE =================

function saveCart(){

localStorage.setItem(

"foodverse-cart",

JSON.stringify(cart)

);

}

function loadCart(){

const data=

localStorage.getItem("foodverse-cart");

if(data){

const items=JSON.parse(data);

items.forEach(item=>cart.push(item));

updateCart();

}

}

loadCart();

// ================= CHECKOUT =================

const checkoutBtn=

document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click",()=>{

if(cart.length===0){

alert("Keranjang masih kosong!");

return;

}

let text="Halo FoodVerse!%0A%0ASaya ingin memesan:%0A";

let total=0;

cart.forEach((item,i)=>{

text+=`${i+1}. ${item.name} - RM ${item.price.toFixed(2)}%0A`;

total+=item.price;

});

text+=`%0ATotal : RM ${total.toFixed(2)}`;

window.open(

`https://wa.me/60186671256?text=${text}`,

"_blank"

);

});

// ================= TOAST =================

const toast=

document.getElementById("toast");

function showToast(){

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2000);

}

// ================= BACK TO TOP =================

const topBtn=

document.getElementById("backTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>250){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ================= MOBILE MENU =================

const menuBtn=

document.getElementById("menuBtn");

const navMenu=

document.getElementById("navMenu");

menuBtn.onclick=()=>{

if(navMenu.style.display==="flex"){

navMenu.style.display="none";

}else{

navMenu.style.display="flex";

navMenu.style.flexDirection="column";

navMenu.style.position="absolute";

navMenu.style.top="70px";

navMenu.style.right="20px";

navMenu.style.background="white";

navMenu.style.padding="20px";

navMenu.style.borderRadius="15px";

navMenu.style.boxShadow="0 10px 20px rgba(0,0,0,.15)";

}

};

// ================= PROGRESS =================

const progress=

document.querySelector(".progress-fill");

let width=70;

setInterval(()=>{

width++;

if(width>100){

width=70;

}

progress.style.width=width+"%";

},200);

// ================= FINISH =================

console.log("🍔 FoodVerse v2 Lite Loaded Successfully!");
