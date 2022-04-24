import "./Todo.css";
import { useState } from "react";
import { TodoList } from "./TodoList";
export const Todo = () => {
  const [text, settext] = useState("");
  const [todoList, settodoList] = useState([]);
  const addTask = (data) => {
    const tasks = { title: data, status: false };
    settodoList([...todoList, tasks]);
  };
  return (
    <div className="main">
      <h3>Write your tasks</h3>
      <TodoList list={todoList} />
      <div className="container">
        <label className="label">
          Title:
          <input
            placeholder="Write here.."
            type="text"
            id="title"
            onChange={(e) => {
              settext(e.target.value);
            }}
          />
        </label>
        <button
          onClick={() => {
            if (text !== "") {
              addTask(text);
            } else {
              alert("task cant be empty");
            }
          }}
        >
          Add task
        </button>
      </div>
    </div>
  );
};
