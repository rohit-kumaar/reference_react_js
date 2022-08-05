import React, { useState, useId } from "react";
import { FaTrashAlt } from "react-icons/fa";

function TodoList() {
  const id = useId();
  const [task, setTask] = useState("");
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Item 1",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const addTodoList = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (event) => {
    setTask(event.target.value);
  };

  const onSubmitHandler = () => {
    setItems([
      ...items,
      {
        id: { id },
        checked: false,
        item: task,
      },
    ]);

    setTask("");
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
  return (
    <>
      <header className="w-full min-h-fit bg-blue-500 flex items-center justify-center p-2">
        <h1 className="text-3xl font-bold text-white">Todo List</h1>
      </header>

      <main className=" mt-4">
        <div className="container mx-auto  flex flex-col items-center justify-center border-2 border-emerald-100">
          <form
            className=" p-4 flex justify-between w-full sm:w-1/2"
            onSubmit={addTodoList}
          >
            <input
              type="text"
              className="border p-2 w-full sm:w-8/12 lg:w-10/12"
              placeholder="Add Your Task"
              value={task}
              onChange={onChangeHandler}
            />
            <input
              type="submit"
              value="Add Task"
              className="bg-slate-500 p-2 text-white font-medium"
              onClick={onSubmitHandler}
            />
          </form>

          {items.length ? (
            <ul className="w-full sm:w-1/2">
              {items.map((item) => (
                <li
                  className="flex items-center justify-between  p-4"
                  key={item.id}
                >
                  <div className="flex  gap-4">
                    <input
                      className=" w-7"
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleCheck(item.id)}
                    />
                    <label
                      className="text-xl text-slate-500"
                      style={
                        item.checked ? { textDecoration: "line-through" } : null
                      }
                      onDoubleClick={() => handleCheck(item.id)}
                    >
                      {item.item}
                    </label>
                  </div>
                  <FaTrashAlt
                    role="button"
                    tabIndex="0"
                    className="text-3xl"
                    onClick={() => handleDelete(item.id)}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xl">Your list is empty.</p>
          )}
        </div>
      </main>
    </>
  );
}

export default TodoList;
