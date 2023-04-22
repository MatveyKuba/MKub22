const openPopUpButton = document.getElementById('open_pop_up');
const closePopUpButton = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
const submitButton = document.getElementById('submit_button');
const password = document.getElementById('password');
const login = document.getElementById('login');

function open() {
    popUp.classList.add('open');
}

openPopUpButton.addEventListener('click', () => {
    if (openPopUpButton.textContent === 'Выйти'){
        location.reload();
    } else if (openPopUpButton.textContent === 'Войти') {
        open()
    }
});

closePopUpButton.addEventListener('click', () => {
    popUp.classList.remove('open');
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(login.value === 'Enter' && password.value === '12345') {
        openPopUpButton.textContent = 'Выйти';
        popUp.classList.remove('open');
    } else {
        alert('Неверный логин или пароль. Попробуйте еще раз')
    }
})
