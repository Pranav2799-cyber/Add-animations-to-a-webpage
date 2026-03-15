// MENU FILTER

const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".menu-item");

buttons.forEach(button => {

button.addEventListener("click", ()=>{

let category = button.getAttribute("data-category");

items.forEach(item => {

if(category === "all" || item.classList.contains(category)){
item.style.display="block";
}
else{
item.style.display="none";
}

});

});

});


// SCROLL REVEAL ANIMATION

window.addEventListener("scroll", reveal);

function reveal(){

let elements=document.querySelectorAll(".reveal");

elements.forEach(el=>{

let windowHeight=window.innerHeight;
let elementTop=el.getBoundingClientRect().top;

if(elementTop < windowHeight-150){

el.classList.add("active");

}

});

}