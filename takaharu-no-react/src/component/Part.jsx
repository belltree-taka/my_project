import React from 'react'

class Part extends React.Component{
    constructor(props){
        // propsは、コンポーネントに微細な変化を与える時に使う？
        super(props)
        // stateは、コンポーネントの状態管理に使う。stateがないと再レンダリングが起きないし、イベントによって変更された値を保持することができない。
        // そしてuseStateの処理は非同期で行われる。
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
                <p className = "part">Hello Part Component</p>
                <button className = {`btn ${this.props.color}`} onClick={()=>{
                        // this.propsをPタグとかに入れてレンダリングしようとするとエラーになる     
                        this.method()
                        console.log(this.state);
                        console.log(this.props);
                }}>ボタン</button>
                <p>{this.props.color}</p>
                <p>{this.props.fn('関数をprops経由で渡したよ')}</p>
                <p>{this.props.name + ' ' + this.props.age}</p>
            </React.Fragment>
        )
    }
}



export default Part;