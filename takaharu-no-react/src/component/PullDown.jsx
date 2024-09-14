import React from 'react'
import {useState} from 'react'

const PullDown = (props) => {
    const OPTIONS = ['Apple', 'Banana', 'Cherry'];
    const [selected, setSelected ] = useState('Cherry')
    return(
        <React.Fragment>
            <p>Hello PullDown Component</p>
            <select
            value={selected}
            name="" 
            id=""
            onChange={(e) => {
                console.log(e.target.value);
                setSelected(e.target.value)
            }}> 
                {OPTIONS.map((item) => {
                    return(
                        <React.Fragment key={item}>
                            <option>{item}</option>
                        </React.Fragment>
                    )
                })}
            </select>
            <p>{selected}が選ばれています</p>
        </React.Fragment>
    )
}

export default PullDown;

