/* ===========================
   CARRUSEL PRINCIPAL
=========================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

if(!slides.length) return;

slides.forEach(slide=>{
slide.classList.remove("active");
});

dots.forEach(dot=>{
dot.classList.remove("active");
});

slides[index].classList.add("active");

if(dots[index]){
dots[index].classList.add("active");
}

}

function nextSlide(){

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

showSlide(currentSlide);

}

if(slides.length){

setInterval(()=>{
nextSlide();
},5000);

}

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

currentSlide=index;

showSlide(currentSlide);

});

});

/* ===========================
   CARRUSEL MÁS VENDIDOS
=========================== */

const track = document.getElementById("track");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

if(track && next){

next.addEventListener("click",()=>{

track.scrollBy({
left:320,
behavior:"smooth"
});

});

}

if(track && prev){

prev.addEventListener("click",()=>{

track.scrollBy({
left:-320,
behavior:"smooth"
});

});

}

/* ===========================
   CARRUSEL RECOMENDADOS
=========================== */

const track2 = document.getElementById("track2");
const next2 = document.getElementById("next2");
const prev2 = document.getElementById("prev2");

if(track2 && next2){

next2.addEventListener("click",()=>{

track2.scrollBy({
left:320,
behavior:"smooth"
});

});

}

if(track2 && prev2){

prev2.addEventListener("click",()=>{

track2.scrollBy({
left:-320,
behavior:"smooth"
});

});

}

/* ===========================
   BUSCADOR
=========================== */

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value =
searchInput.value.toLowerCase();

const products =
document.querySelectorAll(".product-card");

products.forEach(product=>{

const text =
product.innerText.toLowerCase();

if(text.includes(value)){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

}

/* ===========================
   FILTROS
=========================== */

const filterBtns =
document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

filterBtns.forEach(button=>{
button.classList.remove("active");
});

btn.classList.add("active");

const filter =
btn.dataset.filter;

const cards =
document.querySelectorAll(".product-card");

cards.forEach(card=>{

if(filter==="all"){

card.style.display="block";
return;

}

if(card.classList.contains(filter)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});

/* ===========================
   BOTONES + Y -
=========================== */

document
.querySelectorAll(".product-card")
.forEach(card=>{

const plus =
card.querySelector(".plus");

const minus =
card.querySelector(".minus");

const qty =
card.querySelector(".qty");

if(plus){

plus.addEventListener("click",()=>{

qty.value =
parseInt(qty.value)+1;

});

}

if(minus){

minus.addEventListener("click",()=>{

if(parseInt(qty.value)>1){

qty.value =
parseInt(qty.value)-1;

}

});

}

});

/* ===========================
   PEDIDO WHATSAPP
=========================== */

const phone = "51914450843";

document
.querySelectorAll(".whatsapp-order")
.forEach(button=>{

button.addEventListener("click",()=>{

const product = button.dataset.name;
const price = parseFloat(button.dataset.price);
const qty = parseInt(button.parentElement.querySelector(".qty").value);
const total = (price * qty).toFixed(2);

const message =
`🍩 Pedido Chocolate Divertido OLENKA

Producto: ${product}
Cantidad: ${qty}
Precio Unitario: S/${price}
Total: S/${total}

¡Hola! Quiero realizar este pedido.`;

window.open(
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
"_blank"
);

});

});

/* ===========================
   ANIMACIONES SCROLL
=========================== */

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:0.1
});

document
.querySelectorAll(
".card,.product-card,.banner"
)
.forEach(element=>{

element.style.opacity="0";

element.style.transform=
"translateY(40px)";

element.style.transition=
"all .7s ease";

observer.observe(element);

});

/* ===========================
   EFECTO BOTON +
=========================== */

document
.querySelectorAll(".add-btn")
.forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

btn.innerHTML="✓";

btn.style.background=
"#25d366";

setTimeout(()=>{

btn.innerHTML="+";

btn.style.background=
"#e6007e";

},1500);

});

});

/* ===========================
   DRAG CARRUSEL
=========================== */

document
.querySelectorAll(".carousel-track")
.forEach(carousel=>{

let isDown=false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown",(e)=>{

isDown=true;

startX=
e.pageX-carousel.offsetLeft;

scrollLeft=
carousel.scrollLeft;

});

carousel.addEventListener("mouseleave",()=>{

isDown=false;

});

carousel.addEventListener("mouseup",()=>{

isDown=false;

});

carousel.addEventListener("mousemove",(e)=>{

if(!isDown) return;

e.preventDefault();

const x =
e.pageX-carousel.offsetLeft;

const walk =
(x-startX)*2;

carousel.scrollLeft =
scrollLeft-walk;

});

});

/* ===========================
   CARGA SUAVE
=========================== */

document.body.style.opacity="0";
document.body.style.transition="opacity .5s ease";

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

/* ===========================
   MENU MOVIL
=========================== */

const menuBtn =
document.querySelector(".fa-bars");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

alert(
"🍩 Chocolate Divertido OLENKA"
);

});

}
