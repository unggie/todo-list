import { createElement, appendChildren } from "./tools";

// creating the layout
export const layout = () => {
    const container = createElement("div", "container", "container");
    const header = createHeader();
    const sideBar = createSideBar();
    const main = createMain();

    appendChildren(container.render(), header.render(), sideBar.render(), main.render());
    return container;
}

// creating the header
const createHeader = () => {
    const header = createElement("header", "header-class", "header-class");

    const logo = createElement("h1", "logo");
    logo.setText("# LOGO");

    const appName = createElement("h1", "app-name");
    appName.setText("TaskFlow"); 

    const userDetails = createElement("div", "user-details");
    const userImage = createElement("div", "user-profile");
    userImage.setText("U");
    const userName = createElement("h1", "user-name");
    userName.setText("Hi, User");

    appendChildren(userDetails.render(), userImage.render(), userName.render());

    appendChildren(header.render(), logo.render(), appName.render(), userDetails.render());
    return header;
}

// creating the side bar
const createSideBar = () => {
    const sideBar = createElement("aside", "side-bar", "side-bar-id");
    const sideBarTop = createElement("div", "side-bar-top");
    const sideBarBottom = createElement("div", "side-bar-bottom");

    // side bar top
    const projects  = createElement("h1", "projects-heading", "","Projects");
    const addProjectsBtn = createElement("button", "add-project-btn", "add-project", "+ Add project");
    appendChildren(sideBarTop.render(), projects.render(), addProjectsBtn.render());

    // appending the children to the parent element
    appendChildren(sideBar.render(), sideBarTop.render(), sideBarBottom.render());

    return sideBar;
}

export const createProjectName = (name, dataNumber) => {
    const projectName = createElement("div", "project-name", "project-name");
    projectName.setAttr("data-id", dataNumber);
    projectName.setText(name);
    return projectName;
}

// creating the main
const createMain = () => {
    const main = createElement("main", "main", "main-id");
    const mainTop = createElement("div", "main-top", "main-top");
    const mainBottom = createElement("div", "main-bottom", "main-bottom");

    //main top elements
    const mainTopLeft = createElement("div", "main-top-left");
    const mainTopRight = createElement("div", "main-top-right");

    const projectTitle = createElement("h1", "project-title", "project-title");
    appendChildren(mainTopLeft.render(), projectTitle.render());

    const projectEdit = createElement("button", "project-btn", "project-edit-btn", "Edit");
    const projectDelete = createElement("button", "project-btn", "project-delete-btn", "Delete"); 
    appendChildren(mainTopRight.render(), projectEdit.render(), projectDelete.render());
    appendChildren(mainTop.render(), mainTopLeft.render(), mainTopRight.render());

    // main bottom elements
    const mainBottomTop = createElement("div", "main-bottom-top");
    const mainBottomBottom = createElement("div", "main-bottom-bottom");

    const addTaskBtn = createElement("button", "add-task-btn", "add-task-btn", "+ Add new task");
    appendChildren(mainBottomTop.render(), addTaskBtn.render());

    // const firstList = createListItem();
    // appendChildren(mainBottomBottom.render(), firstList.render());
    
    appendChildren(mainBottom.render(), mainBottomTop.render(), mainBottomBottom.render());

    // Appending to parent(main)
    appendChildren(main.render(), mainTop.render(), mainBottom.render());
    return main;
}

// todo list element
export const createListItem = (todoTitle='', date, priorityLevel) => {
    const listItemContainer = createElement("div", "list-item-container", "list-item-container");
    const priority = createElement("div", priorityLevel, "priority",);
    const info = createElement("div", "info", "info");
    appendChildren(listItemContainer.render(), priority.render(), info.render());
    const infoLeft = createElement("div", "info-left");
    const infoRight = createElement("div", "info-right");
    appendChildren(info.render(), infoLeft.render(), infoRight.render());
    const checkbox = createElement("input");
    checkbox.setAttr("type", "checkbox");
    const name = createElement("div", "list-name", "list-name", todoTitle);
    const dueDate = createElement("p", "due-date", "due-date", `Due: ${date}`);
    appendChildren(infoLeft.render(), checkbox.render(), name.render());
    appendChildren(infoRight.render(), dueDate.render());
    return listItemContainer;
}

export const createProject = () => {
    const projectContainer = createElement("form", "project-form");
    const createMsg = createElement("div", "form-title", "", "Create new project");
    const dataDiv = createElement("div", "data-div");
    const label = createElement("label", "project-input-label", "", "Project name");
    label.setAttr("for", "project-name-input");
    const projectName = createElement("input", "project-name-input", "project-name-input");
    appendChildren(dataDiv.render(), label.render(), projectName.render());
    projectName.setAttr("placeholder", "Type project name");
    projectName.setAttr("required", "");
    projectName.setAttr("type", "text");
    projectName.setAttr("name", "project-name")
    const btnContainer = createElement("div", "project-btn-container");
    const submit = createElement("button", "submit-project-btn", "submit-project-btn");
    submit.setText("Submit");
    const cancel = createElement("button", "cancel-project-btn", "cancel-project-btn");
    cancel.setText("Cancel");
    appendChildren(btnContainer.render(), submit.render(), cancel.render());
    appendChildren(projectContainer.render(), createMsg.render(), dataDiv.render(),btnContainer.render());
    return projectContainer;
}
export const editProject = () => {
    const projectContainer = createElement("form", "project-form");
    const createMsg = createElement("div", "form-title", "", "Edit project name");
    const dataDiv = createElement("div", "data-div");
    const label = createElement("label", "project-input-label", "", "New project name");
    label.setAttr("for", "new-project-name-input");
    const projectName = createElement("input", "new-project-name-input", "-new-project-name-input");
    appendChildren(dataDiv.render(), label.render(), projectName.render());
    projectName.setAttr("placeholder", "Type project name");
    projectName.setAttr("required", "");
    projectName.setAttr("type", "text");
    projectName.setAttr("name", "project-name")
    const btnContainer = createElement("div", "project-btn-container");
    const submit = createElement("button", "submit-project-btn", "submit-new-project-btn");
    submit.setText("Submit");
    const cancel = createElement("button", "cancel-project-btn", "cancel-new-project-btn");
    cancel.setText("Cancel");
    appendChildren(btnContainer.render(), submit.render(), cancel.render());
    appendChildren(projectContainer.render(), createMsg.render(), dataDiv.render(),btnContainer.render());
    return projectContainer;

}
export const createTask = () => {
    const form = createElement("form", "task-form");

    // Form title
    const createMsg = createElement("div", "form-title", "", "Create new task");

    // Task input
    const taskDiv = createElement("div", "task-div");
    const taskLabel = createElement("label", "task-input-label", "", "Task name");
    const taskInput = createElement("input", "task-name-input", "task-name-input");
    taskInput.setAttr("placeholder", "Type task name");
    taskInput.setAttr("type", "text");
    taskInput.setAttr("name", "task-name")
    taskLabel.setAttr("for", "task-name-input");
    appendChildren(taskDiv.render(), taskLabel.render(), taskInput.render());

    // Description input
    const desDiv = createElement("div", "description-div");
    const desLabel = createElement("label", "description-label", " ", "Description(optional)");
    const desInput = createElement("textarea", "description-input", "description-input");
    desInput.setAttr("placeholder", "Add description...");
    desLabel.setAttr("for", "description-input");
    appendChildren(desDiv.render(), desLabel.render(), desInput.render());

    // Priority and Due data inputs
    const additionalDiv = createElement("div", "additional-data");
    // Left
    const additionalDivLeft = createElement("div", "data-div");
    const selectLabel = createElement("label", "select-label", "", "Priority");
    const selectInput = createElement("select", "select-priority-input", "select-priority-input");
    selectLabel.setAttr("for", "select-priority-input");
    const lowOption = createElement("option", "", "", "Low");
    const mediumOption = createElement("option", "", "", "Medium");
    const highOption = createElement("option", "", "", "High");
    lowOption.setAttr("value", "low");
    lowOption.setAttr("selected", "");
    mediumOption.setAttr("value", "medium");
    highOption.setAttr("value", "high");
    appendChildren(selectInput.render(), lowOption.render(), mediumOption.render(), highOption.render());
    appendChildren(additionalDivLeft.render(), selectLabel.render(), selectInput.render());
    // Right
    const additionalDivRight = createElement("div", "data-div");
    const dateLabel = createElement("label", "date-label", "", "Due date");
    const dateInput = createElement("input", "date-input", "date-input");
    dateInput.setAttr("type", "date");
    dateLabel.setAttr("for", "date-input");
    appendChildren(additionalDivRight.render(), dateLabel.render(), dateInput.render());
    appendChildren(additionalDiv.render(), additionalDivLeft.render(), additionalDivRight.render());

    // Buttons
    const btnDiv = createElement("div", "task-btn-div");
    const submitBtn = createElement("button", "task-submit-btn", "task-submit-btn", "Create");
    const cancelBtn = createElement("button", "task-cancel-btn", "task-cancel-btn", "Cancel");
    appendChildren(btnDiv.render(), submitBtn.render(), cancelBtn.render());

    appendChildren(form.render(), createMsg.render(), taskDiv.render(), desDiv.render(), additionalDiv.render(), btnDiv.render());
    
    return form

}