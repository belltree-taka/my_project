import React from 'react'
import GrandChild from './GrandChild'
import { useState } from 'react'

const Child = ({text}) => {
	return(
        <React.Fragment>
            <p>Childコンポーネント</p>
            <GrandChild text={text}/>
        </React.Fragment>
    )
}

export default Child