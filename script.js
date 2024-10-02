document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (email === 'test@mail.hei.school' && password === 'admin') {
        message.textContent = 'Bienvenue sur le site !';
        message.style.color = 'green';
    } else {
        message.textContent = 'Email ou mot de passe incorrect.';
        message.style.color = 'red';
    }
});
