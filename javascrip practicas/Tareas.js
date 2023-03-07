/*En este desafío, debes implementar la lógica de un planificador de tareas que permita agregar, eliminar y marcar como completadas las tareas, así como también mostrar un registro de las mismas. Para ello, debes construir la lógica de la función closure llamada createTaskPlanner para que devuelva los siguientes métodos:

    addTask(task): recibe un objeto que contiene la tarea y la agrega al array de tareas. La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado completed se agrega automáticamente como falso al momento de agregar una tarea.
    removeTask(value): recibe el id o nombre de la tarea y la elimina del array de tareas.
    getTasks(): Devuelve el array de tareas.
    getPendingTasks(): Devuelve solo las tareas pendientes.
    getCompletedTasks(): Devuelve solo las tareas completadas.
    markTaskAsCompleted(value): Recibe el id o nombre de la tarea y la marca como completada.
    getSortedTasksByPriority(): Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
    filterTasksByTag(tag): Filtra las tareas por una etiqueta específica.
    updateTask(taskId, updates): Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates. */

export function createTaskPlanner() {

    let mylist = [];
  
    return {
      addTask(ptask) {
        ptask.completed = false;
        mylist.push(ptask);
      },
      getTasks() {
        return (mylist);
      },
      getPendingTasks() {
        return (mylist.filter((item) => { item.completed === false }));
      },
      removeTask(value) {
        if (typeof (value) === "number")
          mylist = mylist.filter((item) => { item.id !== value });
        else
          mylist = mylist.filter((item) => { item.name !== value });
      },
      getCompletedTasks() {
        return (mylist.filter((item) => item.completed));
      },
      markTaskAsCompleted(value) {
        let index = (typeof value === "number") ? mylist.findIndex(item => item.id === value) : mylist.findIndex((item) => item.name === value);
        mylist[index].completed = true;
      },
      getSortedTasksByPriority() {
        const newTasks = [...mylist].sort((a, b) => a.priority - b.priority);
  
        return newTasks;
      },
      filterTasksByTag(tag) {
        return mylist.filter((item) => item.tags.includes(tag));
      },
      updateTask(taskId, updates) {
        const index = mylist.findIndex((item) => item.id === taskId);
  
        mylist[index] = { ...mylist[index], ...updates };
      }
    }
  