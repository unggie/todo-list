import "./style.css";
import { layout } from "./main";
import { createElement, appendChildren } from "./tools";

const layoutContainer = layout();
console.log({layoutContainer});
document.body.appendChild(layoutContainer.render())

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