const checkbocTheme = document.querySelector('#checkbox-theme');
const checkboxItem = document.querySelector('#checkbox-item');

const btnCheckItem = document.querySelector('.btn-check-item');

const imageTheme = document.querySelector('#image-theme');
const imageBtnCheckItem = document.querySelector('#image-btn-check-item')
const imagesBg = document.querySelector('.header-image');



checkbocTheme.addEventListener('change', () => {
    if(checkbocTheme.checked == true) {
        imageTheme.src="./assets/images/icon-moon.svg";
        imagesBg.style.background = "url(assets/images/bg-desktop-light.jpg)";
    } else {
        imageTheme.src="./assets/images/icon-sun.svg";
        imagesBg.style.background = "url(assets/images/bg-desktop-dark.jpg)";
    }
})

checkboxItem.addEventListener('change', () => {
    if(checkboxItem.checked == true) {
        imageBtnCheckItem.src="";
        btnCheckItem.style.backgroundImage = 'none';
    } else {
        imageBtnCheckItem.src="./assets/images/icon-check.svg";
        btnCheckItem.style.backgroundImage = "linear-gradient(to right, var(--btnCheckItemColor1) , var(--btnCheckItemColor2))";
    }
})