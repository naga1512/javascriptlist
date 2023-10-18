document.addEventListener('DOMContentLoaded', function () {
   
    const signupForm = document.getElementById('signupForm');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginLink = document.getElementById('login-link');

    
    signupForm.addEventListener('submit', function (e) {
       
        emailError.style.display = 'none';
        passwordError.style.display = 'none';

    
        if (emailInput.value.trim() === '') {
            e.preventDefault(); 
            emailError.style.display = 'block';
        }

        
        if (passwordInput.value !== confirmPasswordInput.value) {
            e.preventDefault(); 
            passwordError.style.display = 'block';
        }
    });

    
    loginLink.addEventListener('click', function (e) {
        e.preventDefault(); 
        window.location.href = 'login.html'; 
    });
});