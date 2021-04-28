const toggleBtn = document.querySelector('.navbar__toggleButton'); 
const  menu = document.querySelector('.navbar__menu');
const social = document.querySelector('.navbar__social');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    social.classList.toggle('active');
})