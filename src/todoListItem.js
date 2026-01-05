export const todoListItem = (title, description, dueDate, priority="low", checked=false, expand=false) => {
    const timeStamp = new Date();
    dueDate = (dueDate == ''|| dueDate == null) ? new Date().getDate(): dueDate;
    return { 
        title, 
        description, 
        currentDate: timeStamp.toDateString(), 
        currentTime: timeStamp.toLocaleDateString(), 
        dueDate, 
        priority,
        checked
    }
}
