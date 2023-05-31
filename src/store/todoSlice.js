const { createSlice } = require("@reduxjs/toolkit");



const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: [],
        filtertodos: [],


    },
    reducers: {
        addToDo: (state, action) => {
          state.todos.push(action.payload)
          state.filtertodos=state.todos
        },
        removeToDo: (state,action) => {
            state.filtertodos = state.filtertodos.filter(q => q.id != action.payload)
            state.todos =state.filtertodos

        },
        empty: (state) => {
            state.filtertodos = []
        },
        toggleTodo:(state ,action) => {
          state.filtertodos =action.payload
            state.todos =action.payload

        },
        filterToDo: (state,action) => {
            action.payload !=undefined ?
            state.filtertodos = state.todos.filter(q => q.active != action.payload)
             :
             state.filtertodos=state.todos

        },
    }
})

export const {addToDo, removeToDo, empty,toggleTodo,filterToDo} = todoSlice.actions

export default todoSlice.reducer