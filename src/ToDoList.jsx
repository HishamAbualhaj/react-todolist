import { useState } from "react";

function ToDoList(props) {
  let [id, setId] = useState(0);

  let filterType = props.filterType;

  function getId(event) {
    id = event.target.getAttribute("id");
    setId(id);
  }

  function deleteTask(event) {
    let updatedTasksArr = [];
    getId(event);
    
    props.data.map((task) => {
      if (Number(task.id) === Number(id)) {
      } else {
        updatedTasksArr.push(task);
      }
    });
    console.log(updatedTasksArr);
    props.updateTasks(updatedTasksArr);
  }

  function markTaskCompleted(event) {
    let completedTasksArr = [];
    getId(event);
    props.data.map((task) => {
      if (Number(task.id) === Number(id)) {
        task.done = true;
        completedTasksArr.push(task);
      } else {
        completedTasksArr.push(task);
      }
    });
    props.doneTask(completedTasksArr);
  }

  function editTask(event) {
    props.setEditing(true);
    getId(event);
    props.setEditId(id);

    // getting task name to edit
    props.data.forEach((task) => {
      Number(task.id) === Number(id) ? props.setTaskName(task.name) : "";
    });
  }

  let filteredData = props.data.map((ele) => (
    <div
      key={ele.id}
      id={ele.id}
      done={String(ele.done)}
      className="flex justify-between items-center border border-slate-300 p-3 rounded-md mt-3"
    >
      {/* `text-black text-xl nameOfTask` */}
      <div
        className={
          ele.done
            ? `text-slate-300 line-through nameOfTask`
            : `text-black text-xl nameOfTask`
        }
      >
        {ele.name}
      </div>
      <div className="flex gap-2">
        {!ele.done ? (
          <div
            id={ele.id}
            onClick={editTask}
            className="bg-slate-200 p-3 rounded-md cursor-pointer"
          >
            Edit
          </div>
        ) : (
          <></>
        )}

        {!ele.done ? (
          <div
            onClick={markTaskCompleted}
            id={ele.id}
            className="bg-blue-500 p-3 rounded-md text-white cursor-pointer hover:bg-white hover:text-black border hover:border-blue-500 transition"
          >
            Done
          </div>
        ) : (
          <></>
        )}

        <div
          onClick={deleteTask}
          id={ele.id}
          className="bg-red-600 p-3 rounded-md text-white cursor-pointer hover:bg-white hover:text-black border hover:border-red-600 transition"
        >
          Delete
        </div>
      </div>
    </div>
  ));
  if (filterType === "All") {
    filteredData = filteredData;
  } else if (filterType === "Active") {
    filteredData = props.data.map((ele) =>
      !ele.done ? (
        <div
          key={ele.id}
          id={ele.id}
          done={String(ele.done)}
          className="flex justify-between items-center border border-slate-300 p-3 rounded-md mt-3"
        >
          <div className="text-black text-xl nameOfTask">{ele.name}</div>
          <div className="flex gap-2">
            <div
              id={ele.id}
              onClick={editTask}
              className="bg-slate-200 p-3 rounded-md cursor-pointer"
            >
              Edit
            </div>
            <div
              onClick={markTaskCompleted}
              id={ele.id}
              className="bg-blue-500 p-3 rounded-md text-white cursor-pointer hover:bg-white hover:text-black border hover:border-blue-500 transition"
            >
              Done
            </div>
            <div
              onClick={deleteTask}
              id={ele.id}
              className="bg-red-600 p-3 rounded-md text-white cursor-pointer hover:bg-white hover:text-black border hover:border-red-600 transition"
            >
              Delete
            </div>
          </div>
        </div>
      ) : (
        <></>
      )
    );
  } else {
    filteredData = props.data.map((ele) =>
      ele.done ? (
        <div
          key={ele.id}
          id={ele.id}
          done={String(ele.done)}
          className="flex justify-between items-center border border-slate-300 p-3 rounded-md mt-3"
        >
          <div className="text-slate-300 line-through text-xl nameOfTask ">
            {ele.name}
          </div>
          <div className="flex gap-2">
            <div
              onClick={deleteTask}
              id={ele.id}
              className="bg-red-600 p-3 rounded-md text-white cursor-pointer hover:bg-white hover:text-black border hover:border-red-600 transition"
            >
              Delete
            </div>
          </div>
        </div>
      ) : (
        <></>
      )
    );
  }
  return (
    <div className="flex flex-col mt-2 overflow-auto h-96">
      {/* {implicit return with map function} */}
      {filteredData}
    </div>
  );
}

export default ToDoList;
