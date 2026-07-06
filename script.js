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
