import { createElement, appendChildren } from "./tools";

// creating the layout
export const layout = () => {
    const container = createElement("div", "container", "container");
    const header = createElement("header", "header-class", "header-class");
    const sideBar = createElement("aside", "side-bar", "side-bar-id");
    const main = createElement("main", "main", "main-id");

    appendChildren(container.render(), header.render(), sideBar.render(), main.render());
    return container;
}


// creating the header
// const createHeader = () => {
//     const header = document.querySelector(".header-class");
//     const logo = createElement("h1", "logo");
//     logo.setText("LOGO");
//     const appName = createElement("h1", "app-name");
//     appName.setText("TaskFlow");
//     const userDetails = createElement("div", "user-details");
//     appendChildren(header.render(), logo.render(), appName.render(), userDetails.render());
//     return header;
// }
// creating the side bar

// creating the main