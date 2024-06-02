// Developer: Roderick Bernardo
// Purpose: Todo app demo

import { useState } from "react";

function Todos() {
  const [addInputValue, setAddInputValue] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const addSubmitHandler = (event) => {
    event.preventDefault();

    if (addInputValue !== "") {
      if (!todos.includes(addInputValue)) {
        setTodos([...todos, addInputValue]);
        setFilteredTodos([...filteredTodos, addInputValue]);
        setAddInputValue("");
      } else {
        alert(`Entered value: ${addInputValue} already exits.`);
      }
    } else {
      alert(`Entered value: is blank.`);
    }
  };

  // You can also useRef
  const addChangeHandler = (event) => {
    setAddInputValue(event.target.value);
  };

  // You can also useRef
  const searchChangeHandler = (event) => {
    setSearchInputValue(event.target.value);
    if (event.target.value !== "") {
      setFilteredTodos(
        todos.filter((todo) => {
          return todo.toLowerCase().includes(event.target.value.toLowerCase());
        })
      );
    } else {
      setFilteredTodos(todos);
    }
  };

  return (
    <div className="container my-0 mx-auto p-4">
      <div className="bg-gray-100 p-4 rounded shadow-md w-full">
        <h1 className="text-center text-4xl font-bold">TODO app</h1>
      </div>

      <div className="bg-gray-100 p-4 rounded shadow-md w-full mt-4">
        <h2 className="text-center text-3xl font-bold">TODO app entry form</h2>
        <form onSubmit={addSubmitHandler}>
          <div className="mb-4">
            <label
              htmlFor="input"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Enter a todo item to add:
            </label>
            <input
              type="text"
              id="input"
              value={addInputValue}
              onChange={addChangeHandler}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="bg-gray-100 p-4 rounded shadow-md w-full mt-4">
        <h2 className="text-center text-3xl font-bold">
          TODO app list
          {todos.length > 0 &&
            `: ${filteredTodos.length} item${
              filteredTodos.length > 1 ? "s" : ""
            }`}
        </h2>

        {todos.length > 0 && (
          <div className="mb-4">
            <label
              htmlFor="input"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Enter a todo item to search:
            </label>
            <input
              type="text"
              id="input"
              value={searchInputValue}
              onChange={searchChangeHandler}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        )}

        <ol className="text-xl font-bold mt-4">
          {filteredTodos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Todos;
