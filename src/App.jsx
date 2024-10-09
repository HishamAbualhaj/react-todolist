import ToDoHeader from "./ToDoHeader";
import FilterBtns from "./FilterBtns";
import ToDoList from "./ToDoList";
import { useEffect, useState } from "react";
function App() {
  let [tasks, setTask] = useState(getTaskStorage() === null ? [] : getTaskStorage());

  useEffect(() => {
    tasks = [
      { id: 1, name: "Learning React basic", done: false },
      { id: 2, name: "Learning Javascript DataTypes", done: false },
      { id: 3, name: "Working on graduation project", done: false },
      { id: 4, name: "Going to gym", done: false },
    ];
    localStorage.getItem("tasks") === null ? storeTasksStorage(tasks) : "";
  }, []);

  function getTaskStorage() {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  function storeTasksStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTask(getTaskStorage());
  }

  let [filterType, setFilteredType] = useState("All");

  // state where its editing or not
  let [isEditing, setEditing] = useState(false);

  // task id to edit
  let [idEdit, setEditId] = useState(0);

  // task name to edit
  let [taskName, setTaskName] = useState("");

  function addTask(taskName) {
    const newTast = {
      id: (Math.random() * 1_000_000_000 + Math.random() * 1_000).toFixed(0),
      name: taskName,
      done: false,
    };
    // add new elements to the local storage
    let temp = [...JSON.parse(localStorage.getItem("tasks")), newTast];
    storeTasksStorage(temp);
  }

  return (
    <>
      <div className="md:w-[700px] w-full p-2">
        <ToDoHeader
          data={tasks}
          addTast={addTask}
          editTask={storeTasksStorage}
          setEditing={setEditing}
          isEditing={isEditing}
          idEdit={idEdit}
          taskName={taskName}
        />
        <FilterBtns data={tasks} setFilteredType={setFilteredType} />
        <ToDoList
          data={tasks}
          updateTasks={storeTasksStorage}
          doneTask={storeTasksStorage}
          filterType={filterType}
          // for edit purposes
          setEditing={setEditing}
          setEditId={setEditId}
          setTaskName={setTaskName}
        />
      </div>
    </>
  );
}

export default App;
