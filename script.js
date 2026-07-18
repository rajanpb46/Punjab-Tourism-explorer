/*=========================================
        LIVE SEARCH
==========================================*/

function searchPlaces() {

let input = document
.getElementById("searchBox")
.value
.toLowerCase();

let cards =
document.querySelectorAll(".place-card");

cards.forEach(function(card){

let text =
card.innerText.toLowerCase();

if(text.indexOf(input)>-1){

card.style.display="block";

}
else{

card.style.display="none";

}

});

}

/*=========================================
        DARK MODE
==========================================*/

function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

localStorage.setItem(
"theme",
document.body.classList.contains("dark-mode")
? "dark"
: "light"
);

}

window.onload=function(){

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark-mode");

}

}

/*=========================================
        BACK TO TOP
==========================================*/

let topBtn =
document.getElementById("topBtn");

window.onscroll=function(){

scrollFunction();

}

function scrollFunction(){

if(document.body.scrollTop>300 ||

document.documentElement.scrollTop>300){

topBtn.style.display="block";

}
else{

topBtn.style.display="none";

}

}

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

/*=========================================
      SMOOTH NAVIGATION
==========================================*/

document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(

this.getAttribute("href")

).scrollIntoView({

behavior:"smooth"

});

});

});

/*=========================================
      CARD ANIMATION
==========================================*/

const cards =
document.querySelectorAll(".card");

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="0.8s";

observer.observe(card);

});

/*=========================================
      HERO BUTTON EFFECT
==========================================*/

const heroButton =
document.querySelector(".hero .btn");

if(heroButton){

heroButton.addEventListener("mouseover",()=>{

heroButton.style.transform="scale(1.05)";

});

heroButton.addEventListener("mouseout",()=>{

heroButton.style.transform="scale(1)";

});

}

/*=========================================
      IMAGE HOVER EFFECT
==========================================*/

document.querySelectorAll(".card img")
.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.filter="brightness(1.1)";

});

img.addEventListener("mouseleave",()=>{

img.style.filter="brightness(1)";

});

});

/*=========================================
      CONSOLE MESSAGE
==========================================*/

console.log(
"Punjab Tourism Explorer Loaded Successfully!"
);