import React from 'react'
import Parent from './Parent.jsx'
import { createContext } from 'react'

const myContext = createContext('createContextの引数')
// useContextを使う上で、下記の点に注意する
// 1. 大元のコンポーネントでcreateContextをimportする。
// 2. 大元のコンポーネントでcreateContextを使ってコンテキストを作成する。
// 3. 作成したコンテキストをexportする。
// 4. 子コンポーネントでuseContextをimportする。
// 5. 子コンポーネントでuseContextを使ってコンテキストを受け取り変数代入する（GrandChildコンポーネントを参照）。


const text = 'プロップス'
const UseContext = (props) => {
	return(
        <React.Fragment>
            <p style={{fontSize: '50px', color: 'blue', marginTop: '30px'}}>UseContextコンポーネント</p>
            <Parent text={text}/>
        </React.Fragment>
    )
}
export {myContext}
export default UseContext