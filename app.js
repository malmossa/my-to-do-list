const input = document.querySelector('.form-control');
const btn = document.querySelector('.btn');
const ul = document.querySelector('.list-group');
const li = document.getElementsByTagName('li')

btn.addEventListener('click', toDoItem);
li.addEventListener('click', completedToDoItem);

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


function completedToDoItem () {
  li.classList.add('completed')
};
