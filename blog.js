const toggleBtn = document.querySelector('.links button'); 
const menu = document.querySelector('.links');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    social.classList.toggle('active');
});