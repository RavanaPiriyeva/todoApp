import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToDo , toggleTodo} from "../store/todoSlice";

const TodoList = () => {
  let dispatch = useDispatch();

  let { todoReducer } = useSelector((state) => state);
  const [styles, setStyles] = useState([]);

  let changeStyle = (index) => {
    // const updatedStyles = [...styles];
    // updatedStyles[index] = !updatedStyles[index];
    // setStyles(updatedStyles);
    const updatedTodos = todoReducer.todos.map((todo, i) =>(
    i === index ? { ...todo, active: !todo.active } : todo)
  ); 
  dispatch(toggleTodo(updatedTodos));

  console.log(todoReducer.todos[index]);
  };
  const removeToDos = (id) => {
    dispatch(removeToDo(id));
  };
  return (
    <ul className="todo-list">
      {todoReducer.todos &&
        todoReducer.todos.map((item, index) => (
          <li className={!item.active ? "completed" : ""} key={index}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onClick={() => changeStyle(index)}
              />
              <label>{item.item}</label>
              <button
                className="destroy"
                onClick={() => removeToDos(item.id)}
              ></button>
            </div>
          </li>
        ))}
      {/* <li className="completed">
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn JavaScript</label>
                <button className="destroy"></button>
            </div>
        </li>
        <li>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn React</label>
                <button className="destroy"></button>
            </div>
        </li>
        <li>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Have a life!</label>
                <button className="destroy"></button>
            </div>
        </li> */}
    </ul>
  );
};

export default TodoList;
