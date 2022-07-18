import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function TodoList() {
  return (
    <>
      <header className="w-full min-h-fit bg-blue-500 flex items-center justify-center p-2">
        <h1 className="text-3xl font-bold text-white">Todo List</h1>
      </header>

      <main className=" mt-4">
        <div className="container mx-auto  flex flex-col items-center justify-center border-2 border-emerald-100">
          <form className=" p-4 flex justify-between w-full sm:w-1/2">
            <input
              type="text"
              className="border p-2 w-full sm:w-8/12 lg:w-10/12"
              placeholder="Add Your Task"
            />
            <input
              type="submit"
              value="Add Task"
              className="bg-slate-500 p-2 text-white font-medium"
            />
          </form>

          <ul className="w-full sm:w-1/2">
            <li className="flex items-center justify-between  p-4">
              <div className="flex  gap-4">
                <input type="checkbox" className=" w-7" />
                <label className="text-xl text-slate-500">Javascript</label>
              </div>
              <FaTrashAlt role="button" tabIndex="0" className="text-3xl" />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default TodoList;
