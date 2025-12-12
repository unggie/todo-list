const projectListArray = [];

export const projectList = (...project) => {
    project.forEach((item) => {projectListArray.push(item)})
    return {projectListArray}
}