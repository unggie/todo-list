export const projectList = (projectListArray, ...project) => {
    project.forEach((item) => {projectListArray.push(item)})
    return {projectListArray}
}