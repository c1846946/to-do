const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 16 });

const pList = [];

const projectList = () => {
  return pList;
};

const ProjectFactory = (name) => {
  pList.push({ name });
};

const tList = [];

const toDoList = () => {
  return tList;
};

const ToDoFactory = (action, project, desc, date, priority) => {
  const taskId = uid();
  tList.push({
    action,
    taskId,
    complete: false,
    project,
    desc,
    date,
    priority,
  });
};

export { ProjectFactory, ToDoFactory, projectList, toDoList };
