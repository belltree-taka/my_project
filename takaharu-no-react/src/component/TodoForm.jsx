import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const TodoForm = ({todos, setTodos}) => {
    const [ val, setVal ] = useState('');
    const changeHandler = (e) => {
        setVal(e.target.value)
    }
    const [ warning, setWarning ] = useState('');
    const clickHandler = (e) => {
        e.preventDefault();
        {/*重複警告*/}        
        const duplicationCheck = todos.some((todo) => {
            return todo.name === val
        })
        if( duplicationCheck === true ){
            setWarning('This items already exists');
        }else{
            setWarning('');
        }
        {/*空文字入力防止*/}
        const randomNum = nanoid();
        if( val !== ''){
            todos.push({id: randomNum, name: val});
        }else{
            setWarning('You can not add empty item')
        }
        {/*重複防止機能*/}
        const cleanList = todos.filter(function (x, i, self) { 
            return (self.findIndex(function (y) {
                return (x.name === y.name)
            }) === i);
        });
        setTodos([...cleanList])
        setVal('') //フォーム送信後にフォーム欄を空にする。
    }
    return(
        <React.Fragment>
            <div className='box'>
                <h2 className='TodoListTitle'>TodoForm.jsx</h2>
                <form onSubmit={clickHandler}>
                    <input
                    type="text"
                    value={val}
                    onChange={changeHandler}
                    />
                    <input
                    type="submit"
                    />
                </form>
                <p className='warning'>{warning}</p>
            </div>
        </React.Fragment>
    )
}

export default TodoForm

