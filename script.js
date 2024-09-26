let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick =  () =>{
    navbar.classList.toggle('active');
} 




const btn = document.querySelector("#cart-btn");
const container = document.querySelector(".cart-item-container");
btn.addEventListener('click', () => {
    const container = document.querySelector(".cart-item-container");
   // container.style.margin = '165.2vh';
   // container.style.backgroundColor = 'white';
   // container.style.setProperty('height', '200px');
    container.style.setProperty('margin', '21.3vh 0px 0px 165.2vh');
    alert("hy");
})