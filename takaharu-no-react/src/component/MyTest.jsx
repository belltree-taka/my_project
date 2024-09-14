import React from 'react'
import {useState} from 'react'

const MyTest = (props) => {
    const button1 = 'ボタン1'
    const button2 = 'ボタン2'
    const button3 = 'ボタン3'
    let [val, setVal] = useState(0)
    let i = 0;
	return(
        <React.Fragment>
            <p>Hello MyTest Component</p>
            <p>{button1}が{val}回押されました</p>
            <button className="btnTest" onClick={() => {
                setVal(++val)
            }}>{button1}</button>
            {/* <p>{button2}が回押されました</p>
            <button className="btnTest" >{button2}</button>
            <p>{button3}が回押されました</p>
            <button className="btnTest" >{button3}</button> */}
        </React.Fragment>
    )
}

export default MyTest;