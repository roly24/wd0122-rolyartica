let todoList = [
  {
    id: 1,
    title: 'imparare angular',
    completed: false,
  },
  {
    id: 2,
    title: 'inserire funzione add',
    completed: false,
  },
  
];

function getTodos() {
  return todoList;
}


function setTodos(id: number) {
  todoList = todoList.map((t) =>
    t.id == id ? { ...t, completed: !t.completed } : t
  );
}
