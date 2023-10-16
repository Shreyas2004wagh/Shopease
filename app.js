// let searchForm = document.querySelectorAll('.search-form');

// document.querySelector('#search-btn').onclick=()=>{
//     searchForm.classList.toggle('active');
    
// }

// let shoppingCart = document.querySelectorAll('.shopping-cart');

// document.querySelector('#cart-btn').onclick = () =>{
//     shoppingCart.classList.toggle('active');
    
// }

// Select all elements with the class 'search-form' and 'shopping-cart'
let searchForms = document.querySelectorAll('.search-form');
let shoppingCart = document.querySelectorAll('.shopping-cart');

// Select the button elements with IDs 'search-btn' and 'cart-btn'
let searchButton = document.querySelector('#search-btn');
let cartButton = document.querySelector('#cart-btn');

// Add a click event listener for the search button
searchButton.onclick = () => {
    // Loop through all the search-form elements and toggle the 'active' class on each one
    searchForms.forEach(form => {
        form.classList.toggle('active');
    });
}

// Add a click event listener for the cart button
cartButton.onclick = () => {
    // Loop through all the shopping-cart elements and toggle the 'active' class on each one
    shoppingCart.forEach(cart => {
        cart.classList.toggle('active');
    });
}

let loginForms = document.querySelectorAll('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForms.forEach((loginForm) => {
        loginForm.classList.toggle('active');
    });
}

var swiper= new Swiper(".product-slider",{

loop:true,
spaceBetween :20,
autoplay:{
    delay:7500,
    disableOnInteraction:false,
},
centeredSlides:true,

breakpoints: {
0: {
slidesPerView: 1,
},
768: {
slidesPerView: 2,
},
1020: {
slidesPerView: 3,
},
},
});



  
