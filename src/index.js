import './style.css';
import { ProjectFactory, ToDoFactory, projectList, toDoList } from './todos';

//interaction
ProjectFactory('Home');
ProjectFactory('Hardware Store');
ProjectFactory('test');
ProjectFactory('butterf;y');
ProjectFactory('Misc');

ToDoFactory('test action', 'test', '', '', '');
ToDoFactory(
  'Wash the dishes',
  'Home',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Thursday',
  'High priority'
);
ToDoFactory('Buy shop towels', 'Hardware Store', '', '', '');
ToDoFactory('Sweep the floor', 'Home', '', '', '');
console.log(projectList());
console.log(toDoList());

const ScreenController = () => {
  const content = document.querySelector('.content');

  //state of main
  let selection = 'Home';
  const pList = projectList();
  const tList = toDoList();
  const activeTList = () => tList.filter((x) => x.remove == false || !x.remove);

  const allProjectsText = 'All Projects';

  const resetMain = (selection) => {
    const main = document.querySelector('.main');
    content.removeChild(main);
    updateMain(selection);
  };

  const selectProject = (e) => {
    //remove active class from all divs
    //add active class to selected div

    //pass selected project to update main
    selection = e.target.innerText;
    resetMain(selection);
  };

  const addTask = () => {
    //evt.preventDefault();
    const task = document.getElementById('task').value;
    const project = document.getElementById('project').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const desc = document.getElementById('desc').value;
    //enter parameters
    ToDoFactory(task, project, desc, date, priority);
    console.log(tList);
    resetMain(selection);

    // const form = document.getElementById("myForm");
    // form.reset();
  };

  const removePopup = () => {
    //remove darken class
    darkenDiv.classList.remove('darken');
    //remove show popup class
    const popup = document.querySelector('.popup');
    popup.classList.remove('show-popup');
    content.removeChild(popup);
  };

  const darkenDiv = document.createElement('div');
  darkenDiv.classList.add('darken-div');
  content.appendChild(darkenDiv);
  darkenDiv.addEventListener('click', removePopup);

  const editTask = (e) => {
    const taskToEdit = tList.find((x) => x.taskId == e.target.dataset.taskId);
    //replace key/values with popup entries
    taskToEdit.action = document.getElementById('task').value;
    taskToEdit.project = document.getElementById('project').value;
    taskToEdit.date = document.getElementById('date').value;
    taskToEdit.priority = document.getElementById('priority').value;
    taskToEdit.desc = document.getElementById('desc').value;

    console.log('edit popup for', taskToEdit);
  };

  const showEditPopup = (e) => {
    const taskToEdit = tList.find((x) => x.taskId == e.target.dataset.taskId);
    showPopup(e);
    //prefill existing values
    document.getElementById('task').value = taskToEdit.action;
    document.getElementById('project').value = taskToEdit.project;
    document.getElementById('date').value = taskToEdit.date;
    document.getElementById('priority').option = taskToEdit.priority;
    document.getElementById('desc').value = taskToEdit.desc;

    const createPopupEditButton = () => {
      const popup = document.querySelector('.popup');
      const taskSubmit = document.createElement('button');
      taskSubmit.type = 'submit';
      taskSubmit.innerText = 'Save';
      taskSubmit.id = 'submit';
      popup.appendChild(taskSubmit);
      taskSubmit.addEventListener('click', () => {
        editTask(e);
        removePopup();
        resetMain(selection);
      });
    };

    createPopupEditButton();
  };

  const showAddPopup = (e) => {
    showPopup(e);
    const createPopupButton = () => {
      const popup = document.querySelector('.popup');
      const taskSubmit = document.createElement('button');
      taskSubmit.type = 'submit';
      taskSubmit.innerText = 'Add';
      taskSubmit.id = 'submit';
      popup.appendChild(taskSubmit);
      taskSubmit.addEventListener('click', () => {
        addTask();
        removePopup();
        resetMain(selection);
      });
    };

    createPopupButton();
  };

  const showPopup = (e) => {
    //add .darken to darkenDiv
    darkenDiv.classList.add('darken');

    createPopup(e);
    //add .show-popup to popup
    const popup = document.querySelector('.popup');
    popup.classList.add('show-popup');
  };

  const createPopup = (e) => {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.setAttribute('id', 'myForm');
    content.appendChild(popup);

    const taskForm = document.createElement('form');
    taskForm.classList.add('form-container');
    popup.appendChild(taskForm);

    const taskLabel = document.createElement('label');
    taskLabel.for = 'task';
    taskLabel.innerText = 'Task';
    taskForm.appendChild(taskLabel);
    taskForm.appendChild(document.createElement('br'));

    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.placeholder = 'Enter Task';
    taskInput.id = 'task';
    //taskInput.name = 'task';
    taskForm.appendChild(taskInput);
    taskForm.appendChild(document.createElement('br'));

    const projectLabel = document.createElement('label');
    projectLabel.for = 'project';
    projectLabel.innerText = 'Project';
    taskForm.appendChild(projectLabel);
    taskForm.appendChild(document.createElement('br'));

    const projectInput = document.createElement('select');
    projectInput.id = 'project';
    taskForm.appendChild(projectInput);

    const projectsToOptions = (e, array) => {
      //create option elements for each item in the array
      array.forEach((x) => {
        const option = document.createElement('option');
        option.innerText = `${x.name}`;
        if (x.name == e.target.dataset.project) {
          option.selected = true;
        }
        projectInput.appendChild(option);
      });
    };

    projectsToOptions(e, pList);
    taskForm.appendChild(document.createElement('br'));

    const dateLabel = document.createElement('label');
    dateLabel.for = 'date';
    dateLabel.innerText = 'Timeframe';
    taskForm.appendChild(dateLabel);
    taskForm.appendChild(document.createElement('br'));

    const dateInput = document.createElement('input');
    dateInput.type = 'text';
    dateInput.placeholder = 'Enter Timeframe';
    dateInput.id = 'date';
    dateInput.name = 'date';
    taskForm.appendChild(dateInput);
    taskForm.appendChild(document.createElement('br'));

    const priorityLabel = document.createElement('label');
    priorityLabel.for = 'priority';
    priorityLabel.innerText = 'Priority Level';
    taskForm.appendChild(priorityLabel);
    taskForm.appendChild(document.createElement('br'));

    const priorityInput = document.createElement('select');
    priorityInput.id = 'priority';
    taskForm.appendChild(priorityInput);

    const normalPriority = document.createElement('option');
    normalPriority.innerText = 'Normal Priority';
    priorityInput.appendChild(normalPriority);
    taskForm.appendChild(document.createElement('br'));

    const mediumPriority = document.createElement('option');
    mediumPriority.innerText = 'Medium Priority';
    priorityInput.appendChild(mediumPriority);

    const highPriority = document.createElement('option');
    highPriority.innerText = 'High Priority';
    priorityInput.appendChild(highPriority);

    const descLabel = document.createElement('label');
    descLabel.for = 'desc';
    descLabel.innerText = 'Description';
    taskForm.appendChild(descLabel);
    taskForm.appendChild(document.createElement('br'));

    const descInput = document.createElement('textarea');
    descInput.id = 'desc';
    descInput.name = 'desc';
    descInput.rows = '5';
    descInput.cols = '33';
    descInput.placeholder = 'Enter Description';
    taskForm.appendChild(descInput);
    taskForm.appendChild(document.createElement('br'));
  };

  function updateMain(s) {
    //create a main to be removed
    const main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(main);
    //create container to help with page layout
    const container = document.createElement('div');
    container.classList.add('container');
    main.appendChild(container);

    const expandTask = (e) => {
      //select .expand div in same .task container
      const expand = e.target.closest('.task').querySelector('.expand');
      //remove .active from all other .expand divs
      const allExpands = document.querySelectorAll('.expand');
      allExpands.forEach((x) => x.classList.remove('active'));
      //add .active to selected .task descendant
      expand.classList.add('active');
    };

    const collapseTask = () => {
      const allExpands = document.querySelectorAll('.expand');
      allExpands.forEach((x) => x.classList.remove('active'));
    };

    const clickTask = (e) => {
      if (e.target.classList.contains('delete-div')) {
        //add key/value remove:true
        //use find
        //add key value
        tList.find((x) => x.taskId == e.target.dataset.taskId).remove = true;
        //remove task from DOM
        // const taskToRemove = document.querySelectorAll(
        //   `.task[data-task-id='${e.target.dataset.taskId}']`
        // );
        resetMain(selection);
      } else if (e.target.classList.contains('checkbox')) {
        return;
      } else if (e.target.classList.contains('edit-div')) return;
      else if (
        e.target
          .closest('.task')
          .querySelector('.expand')
          .classList.contains('active')
      ) {
        console.log('active task');
        collapseTask(e);
      } else {
        //if tasks expand is active, remove active class and return
        expandTask(e);
      }
    };

    const layoutTask = (task, z) => {
      const taskMin = document.createElement('div');
      taskMin.classList.add('task-min');
      task.appendChild(taskMin);

      const checkbox = document.createElement('input');
      taskMin.appendChild(checkbox);
      checkbox.type = 'checkbox';
      checkbox.name = z.action;
      checkbox.id = z.action;
      checkbox.checked = false;
      checkbox.setAttribute('data-task-id', z.taskId);
      checkbox.classList.add('checkbox');
      checkbox.addEventListener('change', function (e) {
        const divToCross = e.target
          .closest('.task-min')
          .querySelector('.task-name');
        if (this.checked) {
          divToCross.classList.add('task-checked');
          tList.find(
            (x) => x.taskId == e.target.dataset.taskId
          ).complete = true;
        } else {
          divToCross.classList.remove('task-checked');
          tList.find(
            (x) => x.taskId == e.target.dataset.taskId
          ).complete = false;
        }
      });

      const taskContent = document.createElement('div');
      taskContent.classList.add('task-content');
      taskMin.appendChild(taskContent);

      const taskNameDate = document.createElement('div');
      taskNameDate.classList.add('task-name-date');
      taskContent.appendChild(taskNameDate);

      const taskName = document.createElement('div');
      taskName.classList.add('task-name');
      taskName.innerText = z.action;
      taskNameDate.appendChild(taskName);

      const dateDiv = document.createElement('div');
      dateDiv.classList.add('date-div');
      dateDiv.innerText = z.date;
      taskNameDate.appendChild(dateDiv);

      const priorityDelete = document.createElement('div');
      priorityDelete.classList.add('priority-delete');
      taskContent.appendChild(priorityDelete);

      const priorityDiv = document.createElement('div');
      priorityDiv.classList.add('priority-div');
      priorityDiv.innerText = z.priority;
      priorityDelete.appendChild(priorityDiv);

      const editDiv = document.createElement('button');
      editDiv.classList.add('edit-div');
      editDiv.setAttribute('data-task-id', z.taskId);
      editDiv.innerText = 'edit';
      priorityDelete.appendChild(editDiv);
      editDiv.addEventListener('click', showEditPopup);

      const deleteDiv = document.createElement('button');
      deleteDiv.classList.add('delete-div');
      deleteDiv.setAttribute('data-task-id', z.taskId);
      deleteDiv.innerText = 'x';
      priorityDelete.appendChild(deleteDiv);
      //
      const expand = document.createElement('div');
      expand.classList.add('expand');
      task.appendChild(expand);

      const desc = document.createElement('div');
      desc.classList.add('desc');
      desc.innerText = z.desc;
      expand.appendChild(desc);
      //expand.addEventListener('click', collapseTask);
    };

    const createTaskList = (p) => {
      const pHeading = document.createElement('div');
      pHeading.classList.add('p-heading');
      pHeading.textContent = p;
      container.appendChild(pHeading);
      //create task-container div
      const taskContainer = document.createElement('div');
      taskContainer.classList.add('task-container');
      container.appendChild(taskContainer);
      //filter tasks by project selection
      const tasks = tList.filter((x) => x.project == p);
      //append tasks for this project
      tasks.forEach((z) => {
        if (z.remove != true || !z.remove) {
          const task = document.createElement('div');
          task.classList.add('task');
          task.setAttribute('data-task-id', z.taskId);
          taskContainer.appendChild(task);
          layoutTask(task, z);
          task.addEventListener('click', clickTask);
          //append delete button
          //append checkbox
          //append expand arrow
        }
      });
      //add add task button
      const addTaskButton = document.createElement('button');
      addTaskButton.classList.add('add-task-button');
      addTaskButton.innerText = '+';
      addTaskButton.setAttribute('data-project', p);
      taskContainer.appendChild(addTaskButton);
      addTaskButton.addEventListener('click', showAddPopup);
    };

    //what list(s) to create
    if (s == allProjectsText) {
      pList.forEach((x) => createTaskList(x.name));
    } else createTaskList(s);
  }

  const projectSidebar = () => {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    content.appendChild(sidebar);
    //create sidebar buttons
    pList.forEach((x) => {
      const project = document.createElement('button');
      project.classList.add('sidebar-project');
      project.innerText = x.name;
      sidebar.appendChild(project);
      //add an eventlistener for each project displayed
      project.addEventListener('click', selectProject);
    });
    const all = document.createElement('button');
    all.classList.add('all', 'sidebar-project');
    all.innerText = allProjectsText;
    sidebar.appendChild(all);
    all.addEventListener('click', selectProject);
  };

  const displayPopup = () => {};

  projectSidebar();
  updateMain(selection);
  displayPopup();

  return { updateMain };
};

ScreenController();
