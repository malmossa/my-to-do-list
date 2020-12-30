const input = document.querySelector('.form-control');
const btn = document.querySelector('.btn');
const ul = document.querySelector('.list-group');
const span = document.querySelector('.list-group');


btn.addEventListener('click', toDoItem);
ul.addEventListener('click', completedToDoItem);
span.addEventListener('click', removeToDo);

// Add a to do list item
function toDoItem () {

  if (input.value === '') {
    alert('Please add a to do item')
  } else {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'p-3');
    li.appendChild(document.createTextNode(input.value));

    const span = document.createElement('span');
    span.className = 'delete-icon';

    const delBtn = document.createTextNode("\u00D7");

    span.appendChild(delBtn);
    li.appendChild(span);
    ul.appendChild(li);
  }
  input.value = ''
};

// Completed to do item
function completedToDoItem (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
};

// Remove to do item
function removeToDo (e) {
  if (e.target.tagName === 'SPAN') {
    if (confirm( "ARE YOU SURE ")) {
      e.target.parentElement.remove();
    }
  }
};
