function rednderTaskTempalte(task) {
    return `
        <li data-task-id="${task.id}" class="${task.completed ? "completed" : ""}"> 
            <button data-action="completed"> ${task.completed ? '✅' : '☑️ ' }   </button>
            id: ${task.id}, title: ${task.title}
            <button data-action="update"> ✏️ </button>
            <button data-action="delete"> ❌ </button>
        </li>
    `;
}
