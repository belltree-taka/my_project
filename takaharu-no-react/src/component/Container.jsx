import React from 'react'

class Container extends React.Component{
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
                <div className="Container">
                    <p>Hello Container Component</p>
                    {/*===============================
                        ↓childrenプロパティを使ってDOM
                        を流し込む場合は、pタグだとDOM構造が
                        適切でないとエラーがあるので、divタグ
                        で囲むと良い。
                    ================================*/}
                    <div>{this.props.children}</div>
                    {/*===============================
                        ↑親コンポーネントでchildrenの設定があれば読み込むしなければ無視される
                    ================================*/}
                    <div>{this.props.first}</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Container