// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners

todoButton.addEventListener('click', addTodo);

// Functions

function addTodo(event) {
  // prevent form from submiting
  event.preventDefault();
  console.log('migas');

  // todo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // create li
  const newTodo = document.createElement('li');
  newTodo.innerText = 'Migas';
  newTodo.classList.add('item');
  todoDiv.appendChild(newTodo);
  // Button check mark
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
  // Button delete
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('complete-btn');
  todoDiv.appendChild(trashButton);
  // append child
  todoList.appendChild(todoDiv);
}
