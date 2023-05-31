import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { empty, filterToDo, removeToDo } from '../store/todoSlice';
import TodoList from './TodoList';

const Footer = () => {
    let { todoReducer } = useSelector(state => state);
    let dispatch = useDispatch();
    const removeToDos = () => {
        dispatch(empty())
    
    }
    const [choose, setChoose] = useState()
  return (
    <footer className="footer">
    <span className="todo-count">
        <strong>{todoReducer.filtertodos.filter((item)=>item.active==false).length} </strong>
        items left
    </span>

    <ul className="filters">
        <li>
            <a href="#" className="selected" onClick={()=>dispatch(filterToDo())}>All</a>
        </li>
        <li>
            <a href="#" onClick={()=>dispatch(filterToDo(false))}>Active</a>
        </li>
        <li>
            <a href="#" onClick={()=>dispatch(filterToDo(true))}> Completed</a>
        </li>
    </ul>

    <button className="clear-completed" onClick={removeToDos}>
        Clear completed
    </button>
    <div style={{display:'none'}}>
    <TodoList choose={choose}  />
    </div>
</footer>
  )
}

export default Footer

