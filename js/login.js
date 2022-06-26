const input = document.querySelector('.login-input');
const botton = document.querySelector('.login-botton');
const form = document.querySelector('.login-form')

const validateInput = ({ target }) =>{
    if (target.value.length > 2) {
        botton.removeAttribute('disabled');
    } else{
        botton.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) =>{
    event.preventDefault();
   localStorage.setItem('Player', input.value);
   window.location = 'pages/game.html';

}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);