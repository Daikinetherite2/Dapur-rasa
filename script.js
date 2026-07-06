// ================= LOADER =================

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},500);

},1800);

});

// ================= DARK MODE =================

const darkBtn=document.getElementById("darkMode");

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

}else{

localStorage.setItem("theme","light");

}

});

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

}

// ================= SEARCH =================

const search=document.getElementById("searchInput");

const cards=document.querySelectorAll(".food-card");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

// ================= CART =================

const cart=[];

const cartBtn=document.getElementById("cartBtn");

const cartSide=document.getElementById("cartSidebar");

const overlay=document.getElementById("overlay");

const closeCart=document.getElementById("closeCart");

const cartItems=document.getElementById("cartItems");

const totalPrice=document.getElementById("totalPrice");

const cartCount=document.getElementById("cartCount");

cartBtn.onclick=()=>{

cartSide.classList.add("active");

overlay.classList.add("active");

}

closeCart.onclick=()=>{

cartSide.classList.remove("active");

overlay.classList.remove("active");

}

overlay.onclick=()=>{

cartSide.classList.remove("active");

overlay.classList.remove("active");

}

// ================= ADD CART =================

document.querySelectorAll(".add-cart").forEach(btn=>{

btn.addEventListener("click",()=>{

const name=btn.dataset.name;

const price=parseFloat(btn.dataset.price);

cart.push({

name,

price

});

updateCart();

});

});

function updateCart(){

cartItems.innerHTML="";

let total=0;

cart.forEach(item=>{

total+=item.price;

cartItems.innerHTML+=`

<div class="cart-item">

<div>

<h4>${item.name}</h4>

<p>RM ${item.price.toFixed(2)}</p>

</div>

</div>

`;

});

totalPrice.innerHTML="RM "+total.toFixed(2);

cartCount.innerHTML=cart.length;

  }
// ================= CHECKOUT WHATSAPP =================

const checkout=document.getElementById("checkout");

checkout.addEventListener("click",()=>{

if(cart.length===0){

alert("Keranjang masih kosong!");

return;

}

let message="Halo FoodVerse,%0A%0ASaya ingin memesan:%0A%0A";

let total=0;

cart.forEach((item,index)=>{

message+=`${index+1}. ${item.name} - RM ${item.price.toFixed(2)}%0A`;

total+=item.price;

});

message+=`%0A====================%0A`;

message+=`Total : RM ${total.toFixed(2)}%0A`;

message+=`%0ATerima kasih.`;

window.open(

`https://wa.me/60186671256?text=${message}`,

"_blank"

);

});

// ================= BACK TO TOP =================

const topBtn=document.getElementById("backTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ================= SCROLL REVEAL =================

const revealItems=document.querySelectorAll(

".food-card,.cat,.promo-card,.about,.contact,.delivery"

);

function reveal(){

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

// ================= RIPPLE EFFECT =================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.className="ripple";

const rect=this.getBoundingClientRect();

ripple.style.left=e.clientX-rect.left+"px";

ripple.style.top=e.clientY-rect.top+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ================= COUNTDOWN =================

let hour=2;

let minute=15;

let second=54;

const timer=document.querySelector(".countdown h2");

setInterval(()=>{

second--;

if(second<0){

second=59;

minute--;

}

if(minute<0){

minute=59;

hour--;

}

if(hour<0){

hour=23;

}

timer.innerHTML=

`${String(hour).padStart(2,"0")} : ${String(minute).padStart(2,"0")} : ${String(second).padStart(2,"0")}`;

},1000);

// ================= FREE DELIVERY BAR =================

let progress=70;

const progressBar=document.querySelector(".progress-fill");

setInterval(()=>{

progress++;

if(progress>=100){

progress=70;

}

progressBar.style.width=progress+"%";

},120);

// ================= LOCAL STORAGE =================

function saveCart(){

localStorage.setItem(

"foodverse-cart",

JSON.stringify(cart)

);

}

function loadCart(){

const data=localStorage.getItem("foodverse-cart");

if(data){

const items=JSON.parse(data);

items.forEach(item=>cart.push(item));

updateCart();

}

}

loadCart();

document.querySelectorAll(".add-cart").forEach(btn=>{

btn.addEventListener("click",saveCart);

});

// ================= SMALL EFFECT =================

document.addEventListener("mousemove",(e)=>{

document.documentElement.style.setProperty(

"--mouseX",

e.clientX+"px"

);

document.documentElement.style.setProperty(

"--mouseY",

e.clientY+"px"

);

});

console.log("🍔 FoodVerse Premium Loaded Successfully!");
