import React, { useState } from 'react'

const SimpleCount2 = () => {
    let [numA, setNumA] = useState(0)
    let [numB, setNumB] = useState(0)
    const [toggle, setToggle] = useState(true);
    const toggleComponent = () => {
        setToggle(prevstate => !prevstate)
    }
    return(
        <React.Fragment>
            <p>Hello SimpleCount2 Component</p>
            <button className="toggle" onClick={toggleComponent}>Toggle</button>
            {toggle ? 
            <Count num={numA} setNum={setNumA} key="A" title="A"/> : 
            <Count num={numB} setNum={setNumB} key="B" title="B"/>}
        </React.Fragment>
    )
}

const Count = ({title, num, setNum}) => {
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

export default SimpleCount2