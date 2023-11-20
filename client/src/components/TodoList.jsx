import React, { useEffect, useState } from "react";
import {
  deleteTodo,
  getAllTodo,
  toggleTodo,
  updateTodo,
} from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoHourglassOutline } from "react-icons/io5";
import { MdOutlineDownloadDone } from "react-icons/md";

const TodoList = () => {
  const [editTodos, setEditTodos] = useState([]);
  const [editTextTodo, setEditTextTodo] = useState("");
  const dispatch = useDispatch();
  let todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);
  if (currentTab === "ACTIVE_TODOS") {
    todos = todos.filter((todo) => !todo.done);
  } else if (currentTab === "DONE_TODOS") {
    todos = todos.filter((todo) => todo.done);
  }
  useEffect(() => {
    dispatch(getAllTodo());
    setEditTodos(Array(todos.length).fill(false));
  }, [dispatch, todos.length]);

  const handleEditClick = (index) => {
    setEditTodos((prevEditTodos) => {
      const newEditTodos = [...prevEditTodos];
      newEditTodos[index] = !newEditTodos[index];
      return newEditTodos;
    });
  };

  const editedTodoHandler = (e, id, done, index) => {
    e.preventDefault();
    setEditTodos((prevEditTodos) => {
      const newEditTodos = [...prevEditTodos];
      newEditTodos[index] = !newEditTodos[index];
      return newEditTodos;
    });

    dispatch(updateTodo(id, editTextTodo));
    done && dispatch(toggleTodo(id));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto">
        {todos.map((item, index) => {
          return (
            <div
              key={item._id}
              className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"
            >
              <div className="p-2 w-4/5 mx-auto">
                <div className="bg-gray-100 rounded flex p-4 h-full justify-between items-center">
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      dispatch(toggleTodo(item._id));
                    }}
                  >
                    {item.done ? (
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-6 h-6 flex-shrink-0 mr-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    ) : (
                      <IoHourglassOutline className="w-6 h-6 flex-shrink-0 mr-4 text-red-500" />
                    )}
                  </div>

                  {!editTodos[index] && (
                    <span className="title-font overflow-x-clip mr-auto font-medium">
                      {item.data}
                    </span>
                  )}
                  {editTodos[index] && (
                    <form
                      className="w-full flex items-center"
                      onSubmit={(e) => {
                        editedTodoHandler(e, item._id, item.done, index);
                      }}
                    >
                      <input
                        type="text"
                        id="edit"
                        className="bg-transparent border-b-2 border-b-indigo-500 w-full focus:outline-none"
                        value={editTextTodo}
                        onChange={(e) => {
                          setEditTextTodo(e.target.value);
                        }}
                      />
                      {editTodos[index] && (
                        <button type="submit">
                          <MdOutlineDownloadDone className="cursor-pointer text-2xl text-indigo-600 mx-4" />
                        </button>
                      )}
                    </form>
                  )}

                  <div className="flex gap-5 text-lg text-indigo-600 ">
                    {!editTodos[index] && (
                      <FaPen
                        className="cursor-pointer"
                        onClick={() => {
                          handleEditClick(index);
                          setEditTextTodo(item.data);
                        }}
                      />
                    )}

                    <MdDelete
                      className="cursor-pointer"
                      onClick={() => {
                        dispatch(deleteTodo(item._id));
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TodoList;
