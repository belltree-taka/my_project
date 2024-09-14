import React from 'react'
import { useState, useRef, forwardRef } from 'react'

// 操作したい子コンポーネントをforwardRef関数でラップする。
// 複雑に見えるが、意外とシンプルな記述である
// まず、forwardRefをインポートし、forwardRef関数の引数にコンポーネントを記述する
//　その際にコンポーネントの第一引数にprops、第二引数にrefを記述する。
const Input = forwardRef(( props, ref ) => {
    return <input style={{display : 'block'}} ref={ref} type="text" />
})

const add = (a, b) => {
    return a + b;
}

const ForwardRef = (props) => {
    const InputRef = useRef();
	return(
        <React.Fragment>
            <Input ref={InputRef}/>
            <button onClick={() => {
                InputRef.current.focus();
            }}>インプット要素にフォーカス</button>
        </React.Fragment>
    )
}

export default ForwardRef

// forwardRefを使う場合は、後述のuseImperativeHandleを使ってバグを回避することが重要である。
//　そのためforwardRef単体での利用は理想的ではない。
