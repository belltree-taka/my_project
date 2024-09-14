import React from 'react'

const objSet = (props) => {
    return(
        <div className = "objSet">
            <p>This is objSet Component</p>
            <p>{`My name is ${props.children.name} and my age is ${props.children.age}.`}</p>
        </div>
    )
}   

export default objSet