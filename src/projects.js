export const project = (name, ...args) => {
    const todoListItems = args;
    return {name, todoListItems}
}