const loginForm = document.getElementById('login-form');
const userboxInputs = document.querySelectorAll('.user-box input');

// Add event listener to the login form
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Validate username and password
    if (username === '12345678' && password === '12345678') {
        // Successful login
        window.location.href = 'index1.html';
        // Perform additional actions after successful login (e.g., redirect to another page)
    } else {
        // Incorrect username or password
        alert('Username or password is incorrect!');
    }

    // Reset the form after submission
    loginForm.reset();
});

// Add event listeners for input field animations
userboxInputs.forEach(function(input) {
    input.addEventListener('focus', function() {
        this.parentNode.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentNode.classList.remove('focused');
        }
    });
});