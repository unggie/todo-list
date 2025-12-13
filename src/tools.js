export const createElement = (type, className="", idName="") => {

    const element = document.createElement(type);
    if (className) element.classList.add(className);
    if (idName) element.id = idName;

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
        // console.log(child);
        parent.appendChild(child);
    });
}

// export const appendChildren = (element, ...args) => {
//     args.forEach((item) => {
//         element.appendChild(item);
//     })
// }