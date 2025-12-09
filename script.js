// Get DOM elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;
    span.addEventListener('click', toggleTask);
    //kavin
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteTask);

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
//simple one
    taskInput.value = '';
}

// Toggle task completion
function toggleTask(e) {
    e.target.parentElement.classList.toggle('completed');
}

// Delete task
function deleteTask(e) {
    e.target.parentElement.remove();
}

// Event listeners
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
