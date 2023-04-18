const checkboxTheme = document.querySelector('#checkbox-theme');
const checkboxItem = document.querySelector('#checkbox-item');

const btnCheckItem = document.querySelector('.btn-check-item');
const btnAddItem = document.querySelector('#btn-add-item');
const btnAddItemClass = document.querySelector('.btn-add-item');
const newTodoEntry = document.querySelector('#new-todo-entry');
const listItens = document.querySelector('#list-itens');

const imageTheme = document.querySelector('#image-theme');
const imageBtnCheckItem = document.querySelector('#image-btn-check-item')
const imagesBg = document.querySelector('.header-image');

const qtdTodo = document.querySelector('#qtd-todos');
let counter = 0;

checkboxTheme.checked == false;



/*     ----Events----     */

function filterTodo() {

    let rdButton = document.getElementsByName("filter");
    let i = 0;

    for (i in rdButton) {
        if (rdButton[i].checked && rdButton[i].value == "all") {      
            filterAll();

        } else if (rdButton[i].checked && rdButton[i].value == "active") {
            filterAll();
            filterActive();

        } else if (rdButton[i].checked && rdButton[i].value == "completed") {
            filterAll();
            filterCompleted();
        }
    }
}

function filterAll() {
    const todo = listItens.getElementsByClassName("item");

    for( i=0; i< todo.length; i++ ) {
        
        todo[i].style.display = "flex";
        
    }
}

function filterActive() {
    const todo = listItens.getElementsByClassName("item");

    for( i=0; i< todo.length; i++ ) {
              
        if(todo[i].className == "item") {
            
            console.log(todo[i]);
        } else {
            todo[i].style.display = "none";
        }
    }
}

function filterCompleted() {
    const todo = listItens.getElementsByClassName("item");

    for( i=0; i< todo.length; i++ ) {
              
        if(todo[i].className == "item ok") {
            
            console.log(todo[i]);
        } else {
            todo[i].style.display = "none";
        }
    }    
}









/* Add new todo */
btnAddItem.addEventListener('click', (e) => {

    e.preventDefault();
    const addTodo = e.target;    

    if(addTodo.classList.contains("teste")) {
        const text = newTodoEntry.value;

        const todo = document.createElement("div");
        todo.classList.add("item")

        const alignContainer = document.createElement("div");
        alignContainer.classList.add("align");

        const butttonCheck = document.createElement("button");
        butttonCheck.classList.add("ck-button");

        const todoText = document.createElement("h2");
        todoText.classList.add("todo-text");
        todoText.innerHTML = text;      

        const buttonDelete = document.createElement("button");
        buttonDelete.classList.add("delete-button");

        alignContainer.appendChild(butttonCheck);
        alignContainer.appendChild(todoText);

        todo.appendChild(alignContainer);
        todo.appendChild(buttonDelete);
        
        listItens.appendChild(todo);    

        
        qtdTodo.innerHTML = counter += 1;


        clearNewTodo();
    }
});


/* Delete or mark as done */
listItens.addEventListener('click', (e) => {

    e.preventDefault();

    const buttonPress = e.target;
    const todoItem = buttonPress.closest("div");
    const todo = document.querySelector(".item");    

    if(buttonPress.classList.contains("delete-button")) {
        
        todo.parentNode.removeChild(todoItem);
        qtdTodo.innerHTML = counter -= 1;

    } else if(buttonPress.classList.contains("ck-button") ) {

        buttonPress.classList.toggle("done");
        todoItem.classList.toggle("done-text");
        todoItem.parentElement.classList.toggle("ok");
    }
});


/* Switch theme */
checkboxTheme.addEventListener('change', () => {
    if(checkboxTheme.checked == true) {
        imageTheme.src="./assets/images/icon-moon.svg";
        imagesBg.style.background = "url(assets/images/bg-desktop-light.jpg)";

        document.body.style.setProperty('--gbColorPrincipal', '#fafafa');
        document.body.style.setProperty('--bgColorTodoList', '#ffffff');
        document.body.style.setProperty('--itemBorderColor', '#e6e5e9');
        document.body.style.setProperty('--fontColorPlaceholder', '#61626f');

    } else {
        imageTheme.src="./assets/images/icon-sun.svg";
        imagesBg.style.background = "url(assets/images/bg-desktop-dark.jpg)";

        document.body.style.setProperty('--gbColorPrincipal', '#181824');
        document.body.style.setProperty('--bgColorTodoList', '#25273c');
        document.body.style.setProperty('--itemBorderColor', '#37394e');
        document.body.style.setProperty('--fontColorPlaceholder', '#787a91');
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


/*     ----Functions----     */

function btnEntryVisible(value) {
    if (value != "") {
        btnAddItemClass.style.visibility = 'visible';
    }
}

function clearNewTodo() {
    newTodoEntry.value = '';
    btnAddItemClass.style.visibility = 'hidden';
}





/* testes de filtro */

