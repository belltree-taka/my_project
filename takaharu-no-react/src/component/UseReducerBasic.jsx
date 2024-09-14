import React from 'react'
import { useState, useReducer } from 'react'
const style = {
    marginTop: '20px',
    fontSize: '30px',
    color: 'grey'
}
// useReducerはuseStateの代替手段として使われる。
// useReducer関数の第一引数には、stateとactionを引数に持つ関数を渡す。第二引数にはstateの初期値を渡す。
// 下記の例では、{type} として分割代入を使
const UseReducerBasic = (props) => {
    const [ state, dispatch ] = useReducer( ( state, { type } ) => {
        switch(type){
            case '+':
                return ++state;
                case '-':
                    return --state;
        }
        // if (action.type === '+' ){
        //     return ++prev;
        // } else if (action.type === '-') {
        //     return --prev;
        // }
    }, 0);
    const plus = () => {
        dispatch({ type: '+'});
    }
    const minus = () => {
        dispatch({ type: '-'});
    }
	return(
        <React.Fragment>
            <h1 style={style}>useReduce使用例1</h1>
            <p>{state}</p>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </React.Fragment>
    )
}

export default UseReducerBasic