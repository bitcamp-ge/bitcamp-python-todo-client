const BASE_URL = "http://localhost:8000/tasks/";

async function createTask(task) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        });

        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error(error);
    }
}

async function deleteTask(task_id){
    try {
        const response = await fetch(`${BASE_URL}${task_id}`, {
            method: 'DELETE',
        });

        return true;
    } catch (error) {
        throw new Error(error);
    }
}


async function updateTask(task_id, task) {
    try {
        const response = await fetch(`${BASE_URL}${task_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        });

        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error(error);
    }
}

const taskslist = document.getElementById("taskslist");
async function fetchTasks() {
    const response = await fetch(BASE_URL);
    const tasks = await response.json();
    let tasksListRenderString = "";
    for (let task of tasks) {
        tasksListRenderString = tasksListRenderString + rednderTaskTempalte(task);
    }

    taskslist.innerHTML = tasksListRenderString;
}


async function fetchTask(task_id) {
    const response = await fetch(`${BASE_URL}${task_id}/`);
    return await response.json();
}