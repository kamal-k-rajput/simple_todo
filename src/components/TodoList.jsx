import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";
export const TodoList = ({ list }) => {
  return (
    <div>
      {list.map((todo) => {
        return <TodoItem item={todo} key={nanoid(5)}></TodoItem>;
      })}
    </div>
  );
};
