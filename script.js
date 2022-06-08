const comprobacion = () => {
  const password = document.getElementById('password');
  const cPassword = document.getElementById('confirmP');
  const condicion = document.getElementById('condicion');
  const error = document.getElementsByClassName('error');

  if (password.value === cPassword.value) {
    condicion.innerText = '* Password Match';
    condicion.style.color = 'green';
    password.style.borderColor = 'green';
    cPassword.style.borderColor = 'green';

  } else {
    condicion.innerHTML = '* Password do not match!';
    condicion.style.color = 'red';
  }
};
