import React from 'react'

const Content2 = ({name, age, children}) => {
    return(
        <React.Fragment>
                <div className="content">
                    <p>Hello I am Content2 Component</p>
                    <p>{name}</p>
                    <p>{age}</p>
                    <p>{children}</p>
                </div>
            </React.Fragment>
    )
}

export default Content2