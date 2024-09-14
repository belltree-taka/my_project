import React, { useState } from 'react'

// ここのコンポーネントで説明したいことは
// Reactはツリーの位置に基づいてstateの状態管理をしている
// そのため、下記のような条件によって同じ場所に異なるコンポーネントが
// 配置されるケースでは、stateが引き継がれることになる。
// 実際にトグルボタンを押してAとBを切り替えてもカウント数が残り続けているのがわかる

const SimpleCount = () => {
    const [toggle, setToggle] = useState(true);
    const toggleComponent = () => {
        setToggle(prevstate => !prevstate)
        //↓ 下記の記述でもOK
        // if(toggle){
        //     setToggle(false)
        // }else{
        //     setToggle(true)
        // }
    }
    return(
        <React.Fragment>
            <p>Hello SimpleCount Component</p>
            <button className="toggle" onClick={toggleComponent}>Toggle</button>
            {toggle ? <Count title="A"/> : <Count title="B"/>}
            {/*下記のようにkey属性をつけて別コンポーネントとして管理するとツリー上の位置が同じでもstateを別管理できる。*/}
            {/* {toggle ? <Count key="A" title="A"/> : <Count key="B" title="B"/>} */}
            <p>下記の実装はでは、親コンポーネント側でstateの状態を管理し、props経由でstateを
            子コンポーネントに渡すことで、<br/>コンポーネントの消滅後もstateの状態がキープできる。
            また、key属性を使うことで、異なるコンポーネントにstateの状態が継承されてしまう問題も解決されている。

            </p>
        </React.Fragment>
    )
}

const Count = ({title}) => {
    let [num, setNum] = useState(0)
    const countUp = () => {
        setNum(++num);
    }
    const countDown = () => {
        setNum(--num);
    }
    return(
        <React.Fragment>
            <p className="SimpleCount">SimpleCount Component</p>
            <span className="title">{title}</span>
            <span className="num">{num}</span>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </React.Fragment>
    )
}

export default SimpleCount