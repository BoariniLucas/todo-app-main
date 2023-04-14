const checkbocTheme = document.querySelector('#checkbox-theme');
const imageTheme = document.querySelector('#image-theme');


checkbocTheme.addEventListener('change', () => {
    if(checkbocTheme.checked == true) {
        imageTheme.src="./assets/images/icon-moon.svg"
    } else {
        imageTheme.src="./assets/images/icon-sun.svg"
    }
})