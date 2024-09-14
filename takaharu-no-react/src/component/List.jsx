import React from 'react'

class List extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <ul>
                    <li>item-1</li>
                    <li>item-2</li>
                    <li>item-3</li>
                    <li>item-4</li>
                    <li>item-5</li>
                </ul>
            </React.Fragment>
        )
    }
}

export default List