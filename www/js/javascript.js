var createTodoPage = document.getElementById('create_todo');
var indexPage = document.getElementById('index');

function toggleCreatePage(condition, e) {
    if (e) e.preventDefault();
    condition ? createTodoPage.classList.add('show') : createTodoPage.classList.remove('show');
    condition ? indexPage.classList.remove('show') : indexPage.classList.add('show');
}