import React from 'react'
import {useState} from 'react'

const Array = (props) => {
    const originalArray = [1, 2, 3, 4, 5]
    let [array, setArray] = useState(originalArray)
    const shuffle = () => {
        let newArray;
        const poppedValue = array.pop();
        array.unshift(poppedValue);
        // ↓ここの記述がミソで下記のようにするとNG
        // newArray = array;
        // 理由は、ObjectState.jsxの記述を確認。
        // newArray = arrayの記述は変数arrayが保持する参照をnewArrayに代入していることになるので
        // データのコピーとは意味合いが異なる。
        newArray = [...array]
        // ↑処理の最初にこの newArray = [...array]の記述をし、
        // newArrayを操作していく方法もある。最終的にsetArray()の引数が
        // arrayでなければ良いだけのこと。
        setArray(newArray);
    }
	return(
        <React.Fragment>
            <p>Hello Array Component</p>
            <h1>{array}</h1>
            <button onClick={shuffle}>シャッフル</button>
        </React.Fragment>
    )
}

export default Array;