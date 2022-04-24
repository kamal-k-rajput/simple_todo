import { useState } from "react";
import "./TodoItem.css";
const TodoItem = ({ item }) => {
  const [status, usestatus] = useState(item.staus);
  return (
    <div className="TodoItem">
      <span className="title">{item.title} </span>
      <button
        className="status toggle-btn"
        onClick={() => {
          usestatus(!status);
          console.log(status);
        }}
      >
        {status ? "DONE" : "NOT DONE"}
      </button>
    </div>
  );
};
export { TodoItem };
