import React from 'react'
import {useState, useRef, forwardRef, useImperativeHandle} from 'react'

// useImperativeHandleは、親コンポーネントから子コンポーネントのDOM操作を限定するためのカスタムフックである。
// このカスタムフックは、下記のようにuseRefとforwardRefと組み合わせて使うことが多い。

const Input = forwardRef(( props, ref ) => {

    const myRef = useRef(); //⭐️
    // ↓useImperativeHandle関数の第一引数に親コンポーネントから渡されたrefを、第二引数には使いたいメソッドを保有するオブジェクトを戻り値とする関数を記述する。
    //　もう一点注意が必要なのが、⭐️の部分からわかるように親コンポーネントから渡されたref属性を使わずに、useRefを使って新たにref属性を作成していて最終的にリターンする必要がある。
    useImperativeHandle(ref, () => ({
        myFocus: () => {
            myRef.current.focus(); //⭐️
        }
    }))
    
    return <input style={{display : 'block'}} ref={myRef} type="text" /> //⭐️
})

const UseImperativeHandle = (props) => {
    const InputRef = useRef();
	return(
        <React.Fragment>
            <Input ref={InputRef}/>
            <button onClick={() => {
                InputRef.current.myFocus();
            }}>インプット要素にフォーカス</button>
        </React.Fragment>
    )
}

export default UseImperativeHandle

// UseImperativeHandleを使うシチュエーションは、親コンポーネントから子コンポーネントのDOM操作を限定する場合に使われる。
// forwardRefを安全に使うためには、useImperativeHandleを使って、親コンポーネントから子コンポーネントのDOM操作を限定することが重要である。