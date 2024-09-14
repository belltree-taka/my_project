import React from 'react'
import { useState } from 'react';

const EventListener = (props) => {
    const clickHandler = () => {
        alert('ボタンがクリックされました');
    }
    const changeHandler = () => {
        console.log('changeHandlerが起動');
    }
    // const displayVal = useState('ステートを使っています') // 戻り値に下記の2つが入った配列を返す
    // console.log(displayVal[0]); // 出力: ステートを使っています（参照用の値）
    // console.log(displayVal[1]); // 出力: f(更新用の関数)
    {/*上記の内容を分割代入を使って利用することが多い*/}
    let [state, setState] = useState('初期値');
    {/*useStateはコンポーネントのトップレベルかCustomHookの中でしか使えない*/}
    {/*上記のstateとsetStateはJSXの中でしか使えない。更にsetStateはイベントの関数内でしか使えない模様*/}
    {/*通常の変数代入を使うか、state値を使うかで困った場合は、stateはJSXでレンダリングされる値でそれ以外は変数代入と考えると良さそう*/}
    {/*更新用関数であるsetStateは、実行される度にコンポーネントの再読み込みを指示する役割がある*/}
    
	return(
        <React.Fragment>
            <p>Hello EventListener Component</p>

            {/*onClickイベント*/}
            <button onClick={clickHandler}>クリックしてね！！！</button>
            {/*↓同じ結果になるけど記述方法が少し異なる。下記の書き方だとclickHandler以外の処理も
            混ぜ込めれるので便利だが、ケースバイケースの利用が良い。*/}
            <button onClick={() => {
                clickHandler()
            }}>クリックしてね！！！</button>

            {/*onChangeイベント、onBlurイベント、onFocusイベント*/}
            <input
            name="input1" 
            className="onChange"
            type="text"
            placeholder="プレイスホルダー"
            onChange={changeHandler}
            onBlur={() => {console.log('onBlur検知');}}
            onFocus={() => {console.log('onFocus検知');}}
            />
            
            <input
            name="input2"
            type="text"
            className = "useState"
            onChange={(e) => {
                console.log(e.target.value);
                setState(e.target.value)
            }}
            /> = 入力した値は「{state}」です
            
            <div
            className="hoverArea"
            onMouseEnter={() => {console.log('カーソルが入りました');}}
            onMouseLeave={() => {console.log('カーソルが出ていきました');}}          
            >ホバー空間</div>
            
        </React.Fragment>
    )
}

export default EventListener
