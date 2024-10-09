import { useState, useEffect } from "react";

function FilterBtns(props) {
  let activeBtn = `flex-1 bg-slate-300 cursor-pointer py-3 px-5 text-2xl rounded-md text-gray-900 text-center`;
  let notActiveBtn = `flex-1 bg-white border cursor-pointer border-slate-300 py-3 px-5 text-2xl rounded-md text-gray-900 text-center hover:bg-slate-300`;



  let [isActive, setActive] = useState("All");


  const filterTasks = (newFilter) => {
    setActive(newFilter);
    // called to re-render the tasks list 
    props.setFilteredType(newFilter);

  };

  return (
    <>
      <div className="flex mt-5 justify-between gap-3">
        <div
          onClick={() => {
            filterTasks("All");
          }}
          className={isActive === "All" ? activeBtn : notActiveBtn}
        >
          All
        </div>
        <div
          onClick={() => {
            filterTasks("Active");
          }}
          className={isActive === "Active" ? activeBtn : notActiveBtn}
        >
          Active
        </div>
        <div
          onClick={() => {
            filterTasks("Completed");
          }}
          className={isActive === "Completed" ? activeBtn : notActiveBtn}
        >
          Completed
        </div>
      </div>
    </>
  );
}

export default FilterBtns;