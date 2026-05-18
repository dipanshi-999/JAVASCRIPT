// Dom references 
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const searchInput = document.getElementById("searchInput");
const showAll = document.getElementById("showAll");
const showCompleted = document.getElementById("showCompleted");
const showPending = document.getElementById("showPending");
const darkModeBtn = document.getElementById("darkModeBtn");
let tasks = [];

// javascript can control webpage elements 


// Closure Counter 

function createIdGenerator() {

    let id = 0;

    return function () {

        id++;

        return id;
    };
}

const generateId = createIdGenerator();


// Add task function 

function addTask() {

    const text = taskInput.value.trim();

    if (text === "") return;

    const task = {

        id: generateId(),

        text,

        completed: false
    };

    tasks = [...tasks, task];

    renderTasks(tasks);

    taskInput.value = "";

    setTimeout(() => {

        console.log("task added successfully");

    }, 0);
}


function renderTasks(taskArray) {

    taskList.innerHTML = "";

    taskArray.forEach(task => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">
                ${task.text}
            </span>

            <button onclick="toggleTask(${task.id})">
                Toggle
            </button>

            <button onclick="deleteTask(${task.id})">
                Delete
            </button>
        `;

        taskList.appendChild(li);
    });

    updateCount();
}


function toggleTask(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {

            return {

                ...task,

                completed: !task.completed
            };
        }

        return task;
    });

    renderTasks(tasks);
}


function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    renderTasks(tasks);
}


function updateCount() {

    const completed =
        tasks.filter(task => task.completed).length;

    const pending =
        tasks.length - completed;

    taskCount.innerHTML = `
        Total: ${tasks.length} |
        Completed: ${completed} |
        Pending: ${pending}
    `;
}


searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();

    const filtered = tasks.filter(task => {

        return task.text
            .toLowerCase()
            .includes(value);
    });

    renderTasks(filtered);
});


showAll.addEventListener("click", () => {

    renderTasks(tasks);
});


showCompleted.addEventListener("click", () => {

    const completed =
        tasks.filter(task => task.completed);

    renderTasks(completed);
});


showPending.addEventListener("click", () => {

    const pending =
        tasks.filter(task => !task.completed);

    renderTasks(pending);
});


addBtn.addEventListener("click", addTask);

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});