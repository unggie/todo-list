import { todoListItem } from "./todoListItem";
import { project } from "./projects";
import { projectList } from "./projectList";

const homework = todoListItem("Homework", "This is my science homework", "15th march 2026", "very important");
const poetry = todoListItem("Poetry", "This is a famous piece written by shakespare", "16th march 2026", "medium");
const chores = project("School Work", homework, poetry);

const dished = todoListItem("Plates", "This is my science homework", "15th march 2026", "very important");
const washing = todoListItem("clothes", "This is a famous piece written by shakespare", "16th march 2026", "medium");
const cleaning = project("Home Work", dished, washing);

console.log(projectList(chores, cleaning));
// console.log(chores);
// console.log(newNote);