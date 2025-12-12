export const todoListItem = (title, description, dueDate,priority) => {
    const timeStamp = new Date();
    return { 
        title, 
        description, 
        currentDate: timeStamp.toDateString(), 
        currentTime: timeStamp.toLocaleDateString(), 
        dueDate, 
        priority
    }
}
