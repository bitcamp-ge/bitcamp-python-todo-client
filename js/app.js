fetchTasks();

const addTaskForm = document.getElementById('add-task-form');
const addTaskButton = document.getElementById('add-task');
const updateTaskButton = document.getElementById('update-task');
addTaskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
});


addTaskButton.addEventListener('click', async function(e) {
    const formData = new FormData(addTaskForm);
    const task = {
        title: formData.get('title'),
        description: formData.get('description')
    }

    await createTask(task);
    fetchTasks();
    addTaskForm.reset();
});

updateTaskButton.addEventListener('click', async function(e) {
    const formData = new FormData(addTaskForm);
    const task = {
        title: formData.get('title'),
        description: formData.get('description')
    }
    const task_id = formData.get('task-id');
    await updateTask(task_id, task);
    fetchTasks();
    addTaskForm.reset();
    addTaskForm.classList.remove('editing-task');
})


const tasksList = document.getElementById('taskslist');
tasksList.addEventListener('click', async (e) => {
    if (e.target.nodeName == "BUTTON") {
        const action = e.target.getAttribute('data-action');
        if (action === "completed") {
            const li = e.target.parentNode;
            const task_id = li.getAttribute("data-task-id");
            const task = await fetchTask(task_id);
            await updateTask(task_id, {...task, completed: !task.completed});
            fetchTasks();
        }
        if (action === "delete") {
            const li = e.target.parentNode;
            const task_id = li.getAttribute("data-task-id");
            await deleteTask(task_id);
            fetchTasks();
        }

        if (action === "update") {
            // Get task id from parent element's data attribute.
            const li = e.target.parentNode;
            const task_id = li.getAttribute("data-task-id");
            // Fetch task from server.
            const task = await fetchTask(task_id);
            // Get input elements.
            const taskIdInputElement = document.getElementById('task-id');
            const titleInputElement = document.getElementById('task-title');
            const descriptionInputElement = document.getElementById('task-description');
            // Set input values/
            taskIdInputElement.value = task.id;
            titleInputElement.value = task.title;
            descriptionInputElement.value = task.description;
            addTaskForm.classList.add('editing-task')

        }

    }
})









