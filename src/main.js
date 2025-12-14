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

    // side bar bottom
    const firstProject = createProjectName("# School work");
    const secondProject = createProjectName("# Programming computer");
    const thirdProject = createProjectName("# House chores");
    // const fourthProject = createProjectName("# School work");
    // const fifthProject = createProjectName("# Programming");
    // const sixthProject = createProjectName("# House chores");
    // const projectName = createElement("div", "project-name");
    // projectName.setText("# Programming");
    // const projectName = createElement("h1", "project-name", "project-name");
    appendChildren(sideBarBottom.render(), firstProject.render(), secondProject.render(), thirdProject.render());/*, fourthProject.render(), fifthProject.render(), sixthProject.render());*/

    // appending the children to the parent element
    appendChildren(sideBar.render(), sideBarTop.render(), sideBarBottom.render());

    return sideBar;
}

const createProjectName = (name) => {
    const projectName = createElement("div", "project-name");
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

    const projectTitle = createElement("h1", "project-title", "project-title", "School Work");
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

    appendChildren(mainBottom.render(), mainBottomTop.render());


    // Appending to parent(main)
    appendChildren(main.render(), mainTop.render(), mainBottom.render());
    return main;
}