import React, { useState } from "react";
import { addNewTodo } from "../redux/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const TodoForm = ({ token }) => {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(todoInput));
    setTodoInput("");
  };
  return (
    <section className="container w-2/4 mx-auto">
      <h1 className="text-center text-3xl font-bold">To-Do App</h1>
      <form onSubmit={submitHandler}>
        <div className="relative mb-2">
          <label
            htmlFor="Title"
            className="leading-7 text-sm md:text-lg font-bold text-gray-600"
          >
            Add To-Do
          </label>
          <input
            type="text"
            id="Title"
            required
            placeholder="Enter new todo"
            name="Title"
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
            value={todoInput}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        {token && (
          <button
            type="submit"
            className="text-white flex mx-auto bg-indigo-500 border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded"
          >
            ADD
          </button>
        )}

        {!token && (
          <Link
            className="text-white flex mx-auto bg-indigo-500 border-0 py-1 px-5
        focus:outline-none hover:bg-indigo-600 rounded w-20 text-center items-center"
            to={"/signup"}
          >
            Login
          </Link>
        )}
      </form>
    </section>
  );
};

export default TodoForm;
