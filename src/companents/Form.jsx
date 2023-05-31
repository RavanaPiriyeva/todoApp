import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../store/todoSlice';

const Form = () => {
    let { todoReducer } = useSelector(state => state);
    const [item, setItem ] = useState('');

    let dispatch = useDispatch();

    const addNewTodo = (event) => {
      event.preventDefault();
        let newTodo = {
            id: Math.floor(Math.random() * 10000),
            item:item,
            active:true
        }

        dispatch(addToDo(newTodo))
         setItem('')
    }


  return (
    <form onSubmit={addNewTodo}>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus onChange={(e) => setItem(e.target.value) } value={item} />
    </form>
  )
}

export default Form