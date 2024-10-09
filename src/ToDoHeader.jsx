import { useEffect, useState } from "react";

function ToDoHeader(props) {
  let [name, setName] = useState("");

  useEffect(()=>{
    setName(props.taskName);
  },[props.taskName])


  function handleTask() {
    props.addTast(name);
    setName("");
  }
  
  function handleEditTask() {
    let tempArr = props.data.map((task) => {
      if (Number(props.idEdit) === Number(task.id)) {
        task.name = name;
      }
      return task;
    });
    props.editTask(tempArr);
    setName("");
    props.setEditing(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  let isEditing = props.isEditing;
  let currentScreen;
  {
    currentScreen = isEditing ? (
      <>
        <div className="flex flex-col gap-5">
          <div className="text-slate-600 text-4xl text-center">TodoList</div>
          <div className="text-slate-600 text-3xl text-center">
            What are you about to edit?
          </div>
          <input
            value={name}
            onChange={handleChange}
            className="inputTask border-2 border-gray-700 text-2xl rounded-md focus:outline-none p-2 caret-gray-700 text-gray-700"
            type="text"
          />
          <div
            onClick={handleEditTask}
            className="bg-gray-700 text-white text-center py-3 text-2xl rounded-lg hover:bg-white hover:text-gray-700 hover:border-gray-700 border transition cursor-pointer"
          >
            Edit Task
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="flex flex-col gap-5">
          <div className="text-slate-600 text-4xl text-center">TodoList</div>
          <div className="text-slate-600 text-3xl text-center">
            What are you about to do?
          </div>
          <input
            value={name}
            onChange={handleChange}
            className="inputTask border-2 border-gray-700 text-2xl rounded-md focus:outline-none p-2 caret-gray-700 text-gray-700"
            type="text"
          />
          <div
            onClick={handleTask}
            className="bg-gray-700 text-white text-center py-3 text-2xl rounded-lg hover:bg-white hover:text-gray-700 hover:border-gray-700 border transition cursor-pointer"
          >
            Add Task
          </div>
        </div>
      </>
    );
  }

  return currentScreen;
}

export default ToDoHeader;
