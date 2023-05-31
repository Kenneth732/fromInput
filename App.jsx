// Get the form, input, and task list elements
const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Array to store tasks
let tasks = [];

// Function to handle form submission
function addTask(event) {
    event.preventDefault();

    // Get the task description from the input
    const taskDescription = input.value.trim();

    if (taskDescription === '') {
        alert('Please enter a task description.');
        return;
    }

    // Create a new task object
    const newTask = {
        id: Date.now(),
        description: taskDescription,
        completed: false
    };

    // Add the new task to the tasks array
    tasks.push(newTask);

    // Reset the input value
    input.value = '';

    // Update the task list
    updateTaskList();
}

// Function to update the task list
function updateTaskList() {
    // Clear the task list
    taskList.innerHTML = '';

    // Loop through the tasks array and create the list items
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-description">${task.description}</span>
            <button class="complete-button">${task.completed ? 'Incomplete' : 'Complete'}</button>
            <button class="delete-button">Delete</button>
        `;

        // Add event listeners to the complete and delete buttons
        const completeButton = li.querySelector('.complete-button');
        const deleteButton = li.querySelector('.delete-button');

        completeButton.addEventListener('click', () => toggleTaskCompletion(task.id));
        deleteButton.addEventListener('click', () => deleteTask(task.id));

        // Add completed class to completed tasks
        if (task.completed) {
            li.classList.add('completed');
        }

        // Append the list item to the task list
        taskList.appendChild(li);
    });
}

// Function to toggle task completion
function toggleTaskCompletion(taskId) {
    // Find the task in the tasks array by its ID
    const task = tasks.find(task => task.id === taskId);

    // Toggle the completed status of the task
    task.completed = !task.completed;

    // Update the task list
    updateTaskList();
}

// Function to delete a task
function deleteTask(taskId) {
    // Remove the task from the tasks array
    tasks = tasks.filter(task => task.id !== taskId);

    // Update the task list
    updateTaskList();
}

// Add event listener to the form's submit event
form.addEventListener('submit', addTask);

// Initial update of the task list
updateTaskList();
