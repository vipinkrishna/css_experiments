// https://github.com/vipinkrishna

const togglebutton = document.getElementsByClassName('togglebutton')[0];
const navbarlinks = document.getElementsByClassName('navbarlinks')[0];

togglebutton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active');
})