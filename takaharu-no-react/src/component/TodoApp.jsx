import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import '../todo.css'

const Component = (props) => {
    const todoItems = [
        {id: 1, name: '店を予約する'},
        {id: 2, name: '卵を買う'},
        {id: 3, name: '郵便を出す'},
    ]
    const [todos, setTodos] = useState([...todoItems])
	return(
        <React.Fragment>
                        <div className='TodoApp'>
                            <p>TodoApp.jsx</p>
                            <h1 className='reminder'>Reminder</h1>
                            <TodoList todos={todos} setTodos={setTodos}/>
                            <TodoForm todos={todos} setTodos={setTodos}/>
                        </div>
        </React.Fragment>
    )
}

export default Component