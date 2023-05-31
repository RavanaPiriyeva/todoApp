
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToDo , toggleTodo} from "../store/todoSlice";

const TodoList = ({choose}) => {
  console.log(choose)
  let dispatch = useDispatch();

  let { todoReducer } = useSelector((state) => state);
  const [todosArr, setTodosArr] = useState([]);


  let changeStyle = (index) => {
    
    const updatedTodos = todoReducer.filtertodos.map((todo, i) =>(
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
      {/* {choose==undefined ? 
      todoReducer.todos &&
        todoReducer.todos.filter((item)=>item.active==true).map((item, index) => (
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
        ))
      : */}
      {
      todoReducer.filtertodos &&
        todoReducer.filtertodos.map((item, index) => (
          <li className={!item.active ? "completed" : ""} key={index}>
            <div className="view">
              <input
                className={item.active ? "toggle" : "toggle-checked"}
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
        ))
        
        }
     
    </ul>
  );
};

export default TodoList;
