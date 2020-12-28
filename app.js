const input = document.querySelector('.form-control');
const btn = document.querySelector('.btn');
const ul = document.querySelector('.list-group');


btn.addEventListener('click', toDoItem);
ul.addEventListener('click', completedToDoItem);

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


function completedToDoItem (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
};
