import { todoListItem } from "./todoListItem";
import { project } from "./projects";
import { projectList } from "./projectList";
import { storeData, readData, removeData } from "./storage";

const homework = todoListItem("Homework", "This is my science homework", "15th march 2026", "very important");
const poetry = todoListItem("Poetry", "This is a famous piece written by shakespare", "16th march 2026", "medium");
const chores = project("School Work", homework, poetry);

const dished = todoListItem("Plates", "This is my science homework", "15th march 2026", "very important");
const washing = todoListItem("clothes", "This is a famous piece written by shakespare", "16th march 2026", "medium");
const cleaning = project("Home Work", dished, washing);

const data = projectList(chores, cleaning);

storeData('demoData', data);

const storedData = readData('demoData');

console.log("This is the stored data: ", storedData);
// console.log("Data:", data);
// console.log(projectList(chores, cleaning));
// console.log(chores);
// console.log(newNote);