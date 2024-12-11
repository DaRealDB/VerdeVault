document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('sign-in-popup');
    const createAccountBtn = document.getElementById('create-account-btn');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
  
    // Show the popup on page load
    popup.style.display = 'flex';
  
    // Handle Create Account button click
    createAccountBtn.addEventListener('click', () => {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
    
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
        } else {
            alert('Account successfully created!');
            // Redirect to blank.html after account creation
            window.location.href = 'evaluation.html';
        }
    });
  });