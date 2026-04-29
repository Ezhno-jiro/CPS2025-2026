document.addEventListener("DOMContentLoaded", function(){
    // Contact form popup
    const form = document.getElementById("contactForm");
    if(form){
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Message Send!");
        });
    }
    
    // Login form popup + redirect
    const loginForm = document.getElementById("loginForm");
    if(loginForm){
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Login");
            window.location.href = "index.html";
        });
    } 

    // Register form popup 
    const registerForm = document.getElementById("registerForm");
    if(registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Register!");
        });
    }

    // // Add to cart button   
    // const addToCartButton = document.querySelectorAll(".add-to-cart");
    // addToCartButton.forEach(function(button) {
    //     button.addEventListener("click", function(event) {
    //         event.preventDefault(); 
    //         alert("Added to Cart!");
    //     });
    // });

    // Add to cart button
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
        addToCartButtons.forEach(function(button) {
            button.addEventListener("click", function(event) {
                event.preventDefault(); // stop default navigation
                alert("Added to Cart!");
        });
    });

    // Review form
    const reviewForm = document.getElementById("reviewForm");
    if(reviewForm) {
        reviewForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Thanks for your Valued Feedback!\nReview Submitted!")
        });
    }
})