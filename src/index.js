import "./style.css";
import { layout, createProject, createProjectName, createListItem, createTask, editProject, editTask } from "./main";
import { todoListItem } from "./todoListItem";

const layoutContainer = layout();
document.body.appendChild(layoutContainer.render());
const taskForm = createTask();
const form =  createProject();
const edit = editProject();
const editTaskElement = editTask(); 

// project list array
let projects = [];
const createProjectItem = (name) => {
    let projectItem = {
        name: name,
        todoItems: [],
    }
    projectCollection.push(projectItem);
}

const defaultData = {
    name: "Learn TaskFlow",
    todoItems: [
        todoListItem("How to view to descrition[Click Me!!!].", "This is the description. It shows you additional information. To hide it just click it again", new Date().getDate(), "high"),
        todoListItem("How to edit and delete tasks", "To edit or delete a task, hover(move pointer on) over the task and two icons will appear. Click the pencil to edit and trash bin to delete", new Date().getDate(), "low")
    ]
}

// Local storage
const initializeProject = () => {
    let data = loadProject("projectCollection");
    if (!data) {
        projects.push(defaultData);
        saveProject(projects);
        return data = loadProject("projectCollection");
    }
    return data;
}
const saveProject = (projects) => {
    localStorage.setItem("projectCollection", JSON.stringify(projects));
}
const loadProject = (name) => {
    const data = JSON.parse(localStorage.getItem(name));
    return data;
}
let projectCollection = initializeProject();
// let projectCollection = [];


// Adding an event listener by add a listener to the body element
let currentProject = 0;
// let description = false;
const body = document.querySelector("body");
body.addEventListener("click", (event) => {
    if (event.target.type !== "checkbox") event.preventDefault();
    const target = event.target;
    const targetId = target.id;

    switch (targetId) {

        // create and add project to project collection
        case 'add-project':
            createFormFunction();
            break;
        case 'project-name':
            const selected = event.target;
            const index = selected.dataset.id;
            currentProject = index;
            displayInfo(projectCollection[index]);
            break; 
        case 'submit-project-btn':
            const name = document.querySelector(".project-name-input").value;
            if (name == null || name == '') return alert("Enter the project name");
            createProjectItem(name);
            removeFormFunction();
            addProject();
            displayInfo(projectCollection[projectCollection.length - 1]);
            break;
        case 'cancel-project-btn':
            removeFormFunction();
            break;

        // create and add task to task list
        case 'add-task-btn':
            createTaskForm();
            break;
        case 'task-submit-btn':
            const taskName = document.querySelector('.task-name-input').value;
            if (taskName === '' || taskName == null) return alert("Enter the task name.");
            projectCollection[currentProject].todoItems.push(createTaskItem(taskName));
            removeTaskForm();
            displayInfo(projectCollection[currentProject]);
            break;
        case 'task-cancel-btn':
            removeTaskForm();
            break;

        // Editing and Deleting projects
        case 'project-edit-btn':
            if (projectCollection.length == 0 || projectCollection == null) {
                alert("Can't edit non existing project. Create one.")
                createFormFunction();
            } else {
                editProjectForm();
            }
            break;
        case 'submit-new-project-btn':
            const newName = document.querySelector('.new-project-name-input').value;
            if (newName == null || newName == '') return alert("Enter the project name");
            projectCollection[currentProject].name = newName;
            removeEditForm();
            addProject();
            displayInfo(projectCollection[currentProject]);
            break;
        case 'cancel-new-project-btn':
            removeEditForm();
            displayInfo(projectCollection[currentProject]);
            break;
        case 'project-delete-btn':
            if (projectCollection == '') {
                const projectTitle = document.querySelector('.project-title');
                projectTitle.value = 'Project title';
            } else {
                projectCollection.splice(currentProject, 1);
                addProject();
                displayInfo(projectCollection[0]);
            }
            break;
        default:
            console.log("No function");
            break;

    }
});
document.addEventListener('pointerover', (e) => {
  const listInfo = e.target.closest('.list-info');
  if (listInfo) listInfo.classList.add('hover');
});

document.addEventListener('pointerout', (e) => {
  const listInfo = e.target.closest('.list-info');
  if (!listInfo) return;
  if (listInfo.contains(e.relatedTarget)) return;

  listInfo.classList.remove('hover');
});
let currentTask = 0;
document.addEventListener('click', (event) => {
    const deleteBtn = event.target.closest('.delete-task-btn');
    const editBtn = event.target.closest('.edit-task-btn');
    const editFinal = event.target.closest('.edit-submit-btn');
    const editCancel = event.target.closest('.edit-cancel-btn');
    const description = event.target.closest('.list-info');
    const checkBox = event.target.closest('.checkbox');

    if (checkBox) {
        let state = checkBox.checked;
        const item = event.target.closest('.list-item-container');
        const title = item.childNodes[1].childNodes[0].childNodes[0].childNodes[1];
        currentTask = item.dataset.count;
        projectCollection[currentProject].todoItems[currentTask].checked = state;
        if (state) {
            title.classList.add("checked-task");
        } else {
            title.classList.remove("checked-task");
        }
        return;
    }
    if (deleteBtn) {
        projectCollection[currentProject].todoItems.splice(deleteBtn.dataset.count, 1);
        displayInfo(projectCollection[currentProject]);
        return;
    }
    if (editBtn) {
        currentTask = editBtn.dataset.count;
        editTaskFunction();
        return;
    }
    if (editFinal) {
        rewriteTask(currentTask);
        removeTaskEdit();
        displayInfo(projectCollection[currentProject]);
        return;
    }
    if (editCancel) {
        removeTaskEdit();
        displayInfo(projectCollection[currentProject]);
        return;
    }
    if (description) {
        const item = event.target.closest('.list-item-container');
        item.classList.toggle('open');
        return;
    }

})

// ----- These functions are for the creating and removal of project forms and appending children to the side bar -----//

// This function creates the form
const createFormFunction = () => {
    document.body.removeChild(layoutContainer.render());
    document.body.appendChild(form.render());
    const name = document.querySelector('.project-name-input');
    name.focus();
    name.value = "";
}
// This function removes the form
const removeFormFunction = () => {
    document.body.removeChild(form.render());
    document.body.appendChild(layoutContainer.render());
}
// This function appends to the sideBar
const addProject = () => {
    let count = 0;
    const sideBar = document.querySelector('.side-bar-bottom');
    sideBar.replaceChildren();
    projectCollection.forEach(element => {
        sideBar.appendChild(createProjectName(element.name, count).render());
        count++;
    })
}
// This function create the edit project 
const editProjectForm = () => {
    document.body.removeChild(layoutContainer.render());
    document.body.appendChild(edit.render());
    const name = document.querySelector('.new-project-name-input');
    name.focus();
    name.value = "";
}
const removeEditForm = () => {
    document.body.removeChild(edit.render());
    document.body.appendChild(layoutContainer.render());
}

// Display info
const displayInfo = (element) => {
    saveProject(projectCollection);
    let count = 0;
    const projectTitle = document.querySelector('.project-title');
    if (projectCollection === ''|| projectCollection == null) projectTitle = 'Project title'; 
    const list = document.querySelector('.main-bottom-bottom');
    list.replaceChildren();
    if (projectCollection.length == 0 || projectCollection == '') {
        projectTitle.textContent = 'Project title';
    } else {
        projectTitle.textContent = element.name; 
        element.todoItems.forEach(element => {
            const item = createListItem(element.title, element.dueDate, element.priority, element.description, count).render();
            const title = item.childNodes[1].childNodes[0].childNodes[0].childNodes[1];
            const checkBox = item.childNodes[1].childNodes[0].childNodes[0].childNodes[0];
            if (element.checked == true) {
                title.classList.add("checked-task");
                checkBox.checked = true;
                list.appendChild(item);
            } else {
                list.appendChild(item);
            }
            count++;
        })
    }
}

// --------- These functions are for creating the create task form and items-----------//
const createTaskForm = () => {
    if (projectCollection.length == 0 || projectCollection == null) {
        alert("Tasks must be part of a project. Create project first.");
        return createFormFunction();
    }
    document.body.removeChild(layoutContainer.render());
    document.body.appendChild(taskForm.render());
    const taskName = document.querySelector('.task-name-input');
    const taskDescription = document.querySelector('.description-input');
    const dueDate = document.querySelector('.date-input');
    taskName.focus();
    taskName.value = '';
    taskDescription.value = '';
    dueDate.value = '';
}
const removeTaskForm = () => {
    document.body.removeChild(taskForm.render());
    document.body.appendChild(layoutContainer.render());
}
const createTaskItem = (name) => {
    const taskDescription = document.querySelector('.description-input').value;
    const priority = document.querySelector('.select-priority-input').value;
    const dueDate = document.querySelector('.date-input').value;
    return todoListItem(name, taskDescription, dueDate, priority);
}

const editTaskFunction = () => {
    document.body.removeChild(layoutContainer.render());
    document.body.appendChild(editTaskElement.render());
    const name = document.querySelector('.task-name-input');
    name.focus();
    name.value = "";
}
const rewriteTask = index => {
    const form = document.querySelector('.task-form');
    const data = Object.fromEntries(new FormData(form));
    projectCollection[currentProject].todoItems[index].title = (data.taskName == null || data.taskName == "") ? projectCollection[currentProject].todoItems[index].title: data.taskName;
    projectCollection[currentProject].todoItems[index].dueDate = (data.date == null || data.date == "") ? projectCollection[currentProject].todoItems[index].dueDate: data.date;
    projectCollection[currentProject].todoItems[index].description = data.description;
    projectCollection[currentProject].todoItems[index].priority = data.priority;
}
const removeTaskEdit = () => {
    document.body.removeChild(editTaskElement.render());
    document.body.appendChild(layoutContainer.render());
}
addProject();
displayInfo(projectCollection[0]);
