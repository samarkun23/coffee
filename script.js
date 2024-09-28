let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick =  () =>{
    navbar.classList.toggle('active');
} 

//search btn function 
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick =  () =>{
    searchForm.classList.toggle('active');
} 


//cart-btn fin
const btn = document.querySelector("#cart-btn");
const container = document.querySelector(".cart-item-container");
let marginset = false;
btn.addEventListener('click', () => {
    if (marginset) {
        container.style.marginLeft = '138.2vh'; // ye display kara rha hai 165.2vh
    } else {
        container.style.marginLeft = '277vh'; // ye hide kar raha hai //277
    }
    marginset = !marginset; // Toggle karna
});
