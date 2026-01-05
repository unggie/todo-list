export const createElement = (type, className="", idName="", text="") => {

    const element = document.createElement(type);
    if (className) element.classList.add(className);
    if (idName) element.id = idName;
    if (text) element.textContent = text;

    const setText = (text) => {
        element.textContent = text;
        return element; 
    }

    const setAttr = (name, value) => {
        element.setAttribute(name, value);
        return element;
    }

    const render = () => element;

    return {render, setText, setAttr}
}

export const appendChildren = (parent, ...children) => {
    children.forEach(child => {
        parent.appendChild(child);
    });
}
