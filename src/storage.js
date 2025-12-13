// This function store data to the local storage using localStorage.setItem()
export const storeData = (name, data) => {
    localStorage.setItem(`${name}`, JSON.stringify(data));
}

// This function reads data from the local storage using localStorage.getItem()
export const readData = (name) => {
    const data = localStorage.getItem(`${name}`);
    return data ? JSON.parse(data): null;
}

// This function removes data from the local storage
export const removeData = (name) => {
    localStorage.removeItem(`${name}`);
}