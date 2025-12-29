import "./style.css";
import { layout, createProject, createProjectName, createListItem, createTask, editProject } from "./main";
import { todoListItem } from "./todoListItem";

const layoutContainer = layout();
document.body.appendChild(layoutContainer.render());
const taskForm = createTask();
// document.body.appendChild(taskForm.render())
const form =  createProject();
const edit = editProject();

// project list array
let projectCollection = [];
const createProjectItem = (name) => {
    let projectItem = {
        name: name,
        todoItems: [],
    }
    projectCollection.push(projectItem);
}

// Adding an event listener by add a listener to the body element
let currentProject = 0;
const body = document.querySelector("body");
body.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target.id;

    switch (target) {

        // create and add project to project collection
        case 'add-project':
            createFormFunction();
            break;
        case 'project-name':
            const selected = event.target;
            const index = selected.dataset.id;
            currentProject = index;
            console.log(currentProject);
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
            // console.log(projectCollection);
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
            displayInfo(projectCollection[currentProject]);
            break;
        case 'cancel-new-project-btn':
            removeEditForm();
            displayInfo(projectCollection[currentProject]);
            break;
        default:
            console.log("No function");
            break;

    }
});

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
    const projectTitle = document.querySelector('.project-title');
    const list = document.querySelector('.main-bottom-bottom');
    list.replaceChildren();
    projectTitle.textContent = element.name;
    element.todoItems.forEach(element => {
        list.appendChild(createListItem(element.title, element.dueDate, element.priority).render());
    })
}

// --------- These functions are for creating the create task form and items-----------//
const createTaskForm = () => {
    if (projectCollection.length == 0 || projectCollection == null) return alert("Tasks must be part of a project. Create project first.");
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

// ------------------------This is for testing purposes only----------------------------

// import { todoListItem } from "./todoListItem";
// import { project } from "./projects";
// import { projectList } from "./projectList";
// import { storeData, readData, removeData } from "./storage";
// import { createElement } from "./tools"; 

// const homework = todoListItem("Homework", "This is my science homework", "15th march 2026", "very important");
// const poetry = todoListItem("Poetry", "This is a famous piece written by shakespare", "16th march 2026", "medium");
// const chores = project("School Work", homework, poetry);

// const dished = todoListItem("Plates", "This is my science homework", "15th march 2026", "very important");
// const washing = todoListItem("clothes", "This is a famous piece written by shakespare", "16th march 2026", "medium");
// const cleaning = project("Home Work", dished, washing);

// const data = projectList(chores, cleaning);

// storeData('demoData', data);

// const storedData = readData('demoData');

// console.log("This is the stored data: ", storedData);

// const title = createElement("h1", "","heading");
// title.setAttr("class", "headingclass")
// title.setText(data.projectListArray[0].todoListItems[0].description);
// // title.render();

// console.log(data.projectListArray[0].todoListItems[0].description);
// console.log("Data:", data);
// console.log(projectList(chores, cleaning));
// console.log(chores);
// console.log(newNote);

// const body = document..bdquerySelector(body);
// body.appendChild(title);

// document.body.appendChild(title.render());