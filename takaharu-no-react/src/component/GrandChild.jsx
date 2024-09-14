import React from 'react'
import { useContext } from 'react'
import { myContext } from './UseContextBasic'

const GrandChild = ({text}) => {
    const receivedContext = useContext(myContext)
	return(
        <React.Fragment>
            <p>Grand Childコンポーネント</p>
            <p>下記の「プロップス」というテキストを出すためにpropsのバケツリレーをしてる状態</p>
            <p>{text}</p>
            <p>ただし、useContextを使うことでバケツリレーをせずにグローバルな値を受け取ることができる</p>
            <p>useContext使って受け取った値→{receivedContext}</p>
        </React.Fragment>
    )
}

export default GrandChild