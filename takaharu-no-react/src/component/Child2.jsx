import React, { useContext } from 'react'
import { MyContext } from './UseContextAdvance'

const Component = (props) => {
    const [state, setState, clickHandler] = useContext(MyContext)
    return (
        <React.Fragment>
            <p>Child2コンポーネント</p>
            <button onClick={clickHandler}>ボタン</button>
            <p>{ state ? 'ON' : 'OFF' }</p>
        </React.Fragment>
    )
}

export default Component