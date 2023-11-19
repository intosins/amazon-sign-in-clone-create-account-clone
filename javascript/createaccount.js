document.getElementById('registration-button').addEventListener('click', function() {
    this.classList.add('active');
    alert('Create Account!');
});

document.getElementById('have-account-button').addEventListener('click', function() {
    this.classList.add('active');
    window.location.href = 'signin.html';
});