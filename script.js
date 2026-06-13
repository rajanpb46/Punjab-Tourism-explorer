function searchPlaces(){

let input =
document.getElementById("searchBox")
.value
.toLowerCase();

let cards =
document.querySelectorAll(".place-card");

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

if(text.includes(input)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

}

function toggleDarkMode(){

document.body.classList.toggle(
"dark-mode"
);

}