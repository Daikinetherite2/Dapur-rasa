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
