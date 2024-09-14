import React from 'react'

class Content1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            property1: 'value1'
        }
    }
    method(){
        this.setState({property2: 'value2'})
    }
    render(){
        return(
            <React.Fragment>
                <div className="content">
                    <p>Hello I am Content1 Component</p>
                    <p>{this.props.name}</p>
                    <p>{this.props.age}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Content1