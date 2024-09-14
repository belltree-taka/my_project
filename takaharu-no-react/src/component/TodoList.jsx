import React from 'react'
import {useState} from 'react'

const TodoList = ({todos, setTodos}) => {
    const complete = (e) => {
        // ステート値であるtodosにfilterメソッドを使うことで配列要素のそれぞれのidプロパティ値が
        // completeハンドラがあるbutton要素のvalue(todo.id)と同じでない要素だけを配列に返し、表示する仕組み。
        // ここで一点注意しなくてはいけないのが、e.target.valueで返す値が数字の場合でも、文字列になるので、
        // 厳密比較演算子で比較すると同じ数字でも違う値として判断される。
        const todosAfterComplete = todos.filter((todo) => {
            if(typeof(todo.id) === 'string'){
                return todo.id !== e.target.value 
            }else{
                // ここの記述は、todoItemsの初期値で入っている3つのアイテムのid番号は、number型であり、
                // e.target.valueの値は、必ず文字列になっているので、pasrseIntで整数化して比較する必要がある。
                return todo.id !== parseInt(e.target.value) 
            }
        })
        setTodos(todosAfterComplete)
    }
	return(
        <React.Fragment>
                <div className='box'>
                    <h2 className='TodoListTitle'>List.jsx</h2>
                    <ul className='list'>
                        {todos.map( todo => (
                            <React.Fragment key={todo.id}>
                                <li>
                                    <button
                                    className='completeBtn'
                                    value={todo.id}
                                    onClick={complete}
                                    >done</button>
                                    <span>{todo.name}</span>
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
        </React.Fragment>
    )
}

export default TodoList