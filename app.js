const form = document.querySelector('.form');
const input = document.querySelector('.input');
const todoList = document.querySelector('.todo-list');

function createTodo(){
    let todoValue = input.value;

    // Creating Li
    const todo = document.createElement('li');
    todo.classList.add('todo');
    todo.innerText = todoValue;
    todoList.appendChild(todo);
    // Creating button for trash
    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash-btn');
    trashBtn.innerHTML = `
        <span class="fas fa-trash"></span>
    `;
    todo.appendChild(trashBtn);
    input.value = '';

    todo.addEventListener('click', () => {
        todo.classList.toggle('done');
    });
    trashBtn.addEventListener('click', () => {
        todo.classList.add('rotate');
        setTimeout(() => {
            todo.remove();
        }, 500)
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    createTodo();
});