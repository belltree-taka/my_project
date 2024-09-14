import React from 'react'
import Child from './Child.jsx'
import { useState } from 'react'

const Parent = ({text}) => {
	return(
        <React.Fragment>
            <p>Parentコンポーネント</p>
            <Child text={text}/>
        </React.Fragment>
    )
}

export default Parent