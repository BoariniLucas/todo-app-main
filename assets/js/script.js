const checkbocTheme = document.querySelector('#checkbox-theme');
const checkboxItem = document.querySelector('#checkbox-item');

const btnCheckItem = document.querySelector('.btn-check-item');
const btnAddItem = document.querySelector('#btn-add-item');
const btnAddItemClass = document.querySelector('.btn-add-item');
const newTodoEntry = document.querySelector('#new-todo-entry');

const imageTheme = document.querySelector('#image-theme');
const imageBtnCheckItem = document.querySelector('#image-btn-check-item')
const imagesBg = document.querySelector('.header-image');


/*   --Events--   */

btnAddItem.addEventListener('click', (e) => {

    const todo = newTodoEntry.value;

    console.log(todo);

    clearNewTodo();

});




checkbocTheme.addEventListener('change', () => {
    if(checkbocTheme.checked == true) {
        imageTheme.src="./assets/images/icon-moon.svg";
        imagesBg.style.background = "url(assets/images/bg-desktop-light.jpg)";
    } else {
        imageTheme.src="./assets/images/icon-sun.svg";
        imagesBg.style.background = "url(assets/images/bg-desktop-dark.jpg)";
    }
});

checkboxItem.addEventListener('change', () => {
    if(checkboxItem.checked == true) {
        imageBtnCheckItem.src="";
        btnCheckItem.style.backgroundImage = 'none';
    } else {
        imageBtnCheckItem.src="./assets/images/icon-check.svg";
        btnCheckItem.style.backgroundImage = "linear-gradient(to right, var(--btnCheckItemColor1) , var(--btnCheckItemColor2))";
    }
});

/*   --Functions--   */

function btnEntryVisible(value) {
    if (value != "") {
        btnAddItemClass.style.visibility = 'visible';
    }
}

function clearNewTodo() {
    newTodoEntry.value = '';
    btnAddItemClass.style.visibility = 'hidden';
}
