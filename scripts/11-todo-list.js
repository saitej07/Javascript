const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
},{
  name: 'wash dishes',
dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {

  let todolistHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = 
    `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todolistHTML += html;

    //console.log(todolistHTML)

    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
  }
}
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  //console.log(name);

  const dueDateinputElement = document.querySelector('.js-due-date-input');
  const dueDate = dueDateinputElement.value;

  todoList.push({
    name,
    dueDate});

  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}