import { createElement, appendChildren } from "./tools";

// creating the layout
export const layout = () => {
    const container = createElement("div", "container", "container");
    // const header = createElement("header", "header-class", "header-class");
    const header = createHeader();
    // const sideBar = createElement("aside", "side-bar", "side-bar-id");
    const sideBar = createSideBar();
    const main = createElement("main", "main", "main-id");

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

    const projects  = createElement("h1", "projects-heading");
    projects.setText("Projects");
    const addProjectsBtn = createElement("button", "add-project-btn", "add-project");
    addProjectsBtn.setText("+ Add project");



    appendChildren(sideBarTop.render(), projects.render(), addProjectsBtn.render());

    appendChildren(sideBar.render(), sideBarTop.render(), sideBarBottom.render());

    return sideBar;
}
// creating the main