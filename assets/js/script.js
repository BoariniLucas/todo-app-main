const checkboxTheme = document.querySelector('#checkbox-theme');
const btnAddItem = document.querySelector('#btn-add-item');
const btnAddItemClass = document.querySelector('.btn-add-item');
const btnClearCompleted = document.querySelector("#btn-clear-completed");

const newTodoEntry = document.querySelector('#new-todo-entry');
const listItens = document.querySelector('#list-itens');

const imageTheme = document.querySelector('#image-theme');
const imagesBg = document.querySelector('.header-image');

const qtdTodo = document.querySelector('#qtd-todos');

let theme = "dark";
let counter = 0;

checkboxTheme.checked == false;

let todoArray = new Array();


///criar função para deletar item especifico da array;;


loadPage();



/*       ------Start: Events------       */
/*              ------------             */

window.addEventListener('resize', () => {

    if (window.innerWidth > 375) {
        imagesBg.style.background = "url(assets/images/bg-desktop-"+theme+".jpg)";
    } else {
        imagesBg.style.background = "url(assets/images/bg-mobile-"+theme+".jpg)";        
    }
});

/* Clear Completed */
btnClearCompleted.addEventListener('click', (e) => {
    e.preventDefault();

    const todo = listItens.getElementsByClassName("item");

    for( i=0; i< todo.length; i++ ) {
              
        if(todo[i].className == "item ok") {

            console.log(todo);

            /*
            
            todo[i].remove();
            i--;
            
            qtdTodo.innerHTML = (counter -= 1);*/
        }
    }   
});

btnAddItem.addEventListener('click', (e) => {

    e.preventDefault();
    const addTodo = e.target;

    if(addTodo.classList.contains("todo-text")) {

        const textTodo = newTodoEntry.value;

        qtdTodo.innerHTML = (counter += 1);
        addNewTodo(textTodo);        
        todoArray.push({counter, textTodo});
        saveLocalStorage();

    }
});

/* Delete or mark as done */
listItens.addEventListener('click', (e) => {

    e.preventDefault();

    const buttonPress = e.target;
    const todoItem = buttonPress.closest("div");
    const todo = document.querySelector(".item");

    if(buttonPress.classList.contains("delete-button")) {

        for (let i = 0; i < todoArray.length; i++) {

            let message = todoArray[i].textTodo; 
          
            if(todoItem.firstChild.classList.contains(message)) {

                todoArray.splice(i, 1);
                todo.parentNode.removeChild(todoItem);
                qtdTodo.innerHTML = (counter -= 1);
                saveLocalStorage();

            }
        }

    } else if(buttonPress.classList.contains("ck-button") ) {


        buttonPress.classList.toggle("done");
        todoItem.classList.toggle("done-text");
        todoItem.parentElement.classList.toggle("ok");
    }
});


/* Switch theme */
checkboxTheme.addEventListener('change', () => {
    if(checkboxTheme.checked == true) {

        if (window.innerWidth > 375) {
            imagesBg.style.background = "url(assets/images/bg-desktop-light.jpg)";

        } else {
            imagesBg.style.background = "url(assets/images/bg-mobile-light.jpg)";
        }

        theme = "light";

        imageTheme.src="./assets/images/icon-moon.svg";        

        document.body.style.setProperty('--gbColorPrincipal', '#fafafa');
        document.body.style.setProperty('--bgColorTodoList', '#ffffff');
        document.body.style.setProperty('--itemBorderColor', '#e6e5e9');
        document.body.style.setProperty('--fontColorPlaceholder', '#c7c4c4');
        document.body.style.setProperty('--fontColor', '#4e4c61');
        document.body.style.setProperty('--ckTodoList', '#d8d6db');

    } else {

        if (window.innerWidth > 375) {
            imagesBg.style.background = "url(assets/images/bg-desktop-dark.jpg)";
        } else {
            imagesBg.style.background = "url(assets/images/bg-mobile-dark.jpg)";
        }

        theme = "dark";

        imageTheme.src="./assets/images/icon-sun.svg";       

        document.body.style.setProperty('--gbColorPrincipal', '#181824');
        document.body.style.setProperty('--bgColorTodoList', '#25273c');
        document.body.style.setProperty('--itemBorderColor', '#37394e');
        document.body.style.setProperty('--fontColorPlaceholder', '#787a91');
        document.body.style.setProperty('--fontColor', '#cbcde6');
        document.body.style.setProperty('--ckTodoList', '#303247');
    }
});

/*             ------------            */
/*       ------End: Events------       */


/*       ------End: Functions------       */
/*             ------------               */

/* Add new todo function */
function addNewTodo(txText) {
    
    const todo = document.createElement("div");
    todo.classList.add("item")

    const alignContainer = document.createElement("div");
    alignContainer.classList.add("align");
    alignContainer.classList.add(txText);

    const butttonCheck = document.createElement("button");
    butttonCheck.classList.add("ck-button");

    const todoText = document.createElement("h2");
    todoText.classList.add("todo-text");
    todoText.setAttribute("id", "todo-text");
    todoText.innerHTML = txText;      

    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("delete-button");

    alignContainer.appendChild(butttonCheck);
    alignContainer.appendChild(todoText);

    todo.appendChild(alignContainer);
    todo.appendChild(buttonDelete);
        
    listItens.appendChild(todo);    

    newTodoEntry.focus();
    clearNewTodo();
}

function btnEntryVisible(value) {
    if (value != "") {
        btnAddItemClass.style.visibility = 'visible';
    }
}

function clearNewTodo() {
    newTodoEntry.value = '';
    btnAddItemClass.style.visibility = 'hidden';
}

/* Filters */
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
              
        if(todo[i].className != "item") {

            todo[i].style.display = "none";
        }
    }
}

function filterCompleted() {
    const todo = listItens.getElementsByClassName("item");

    for( i=0; i< todo.length; i++ ) {
              
        if(todo[i].className != "item ok") {

            todo[i].style.display = "none";
        }
    }    
}

function saveLocalStorage() {    
    
    localStorage.setItem("todo", JSON.stringify(todoArray));
}

function loadPage() {

    let todoListLocalStorage = localStorage.getItem("todo");

    let todoListObj = JSON.parse(todoListLocalStorage);

    if(todoListObj != null) {

        todoArray = todoListObj;
        
        for (let i = 0; i < todoArray.length; i++) {

            addNewTodo(todoArray[i].textTodo);
            qtdTodo.innerHTML = todoArray.length;
            counter = todoArray.length;
        }

        //console.log(todoArray);
    }
}