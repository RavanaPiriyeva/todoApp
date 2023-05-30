import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { empty, removeToDo } from '../store/todoSlice';

const Footer = () => {
    let { todoReducer } = useSelector(state => state);
    let dispatch = useDispatch();
    const removeToDos = () => {
        dispatch(empty())
    
    }
  return (
    <footer className="footer">
    <span className="todo-count">
        <strong>{todoReducer.todos.filter((item)=>item.active==false).length} </strong>
        items left
    </span>

    <ul className="filters">
        <li>
            <a href="#/" className="selected">All</a>
        </li>
        <li>
            <a href="#/">Active</a>
        </li>
        <li>
            <a href="#/">Completed</a>
        </li>
    </ul>

    <button className="clear-completed" onClick={removeToDos}>
        Clear completed
    </button>
</footer>
  )
}

export default Footer