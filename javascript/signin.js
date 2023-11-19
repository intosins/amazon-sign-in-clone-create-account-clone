document.getElementById('signin-button').addEventListener('click', function() {
    this.classList.add('active');
    alert('Sign in!');
});

document.getElementById('create-account-button').addEventListener('click', function() {
    this.classList.add('active');
    window.location.href = 'createaccount.html';
});