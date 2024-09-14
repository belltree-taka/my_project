import React from 'react'
// React.useState()を使えば、下記の記述は不要
// import {useState} from 'react'

// ⭐️useStateを使う大前提として、stateの更新関数は非同期で動作することを理解しておく。
// そして、stateの更新関数は、イベントハンドラなどの関数内で複数回呼び出しても、
// その値が即座に変更されるわけではないことを理解しておく。


const Component = (props) => {
    let [count, setCount] = React.useState(0)
    const countUp = () => {
    {/*stateは更新関数が実行されるまで、値が書きかわらないので
    下記のsetCountは永遠に 0 + 1を繰り返していることになる。
    stateが更新されるのは、更新関数が実行されて再レンダリングが
    実行された時である*/} 
    {/*厳密にいうと更新関数はstateの値の変更と再レンダリングの指示を
    担っているわけだが、それら二つの処理を非同期で行う。そのため、下記のように
    何度もsetCountを実行しても値が更新されない*/} 
        setCount(count + 1) //非同期のタスクキューにjobが飛ぶ
        setCount(count + 1) //非同期のタスクキューにjobが飛ぶ
        setCount(count + 1) //非同期のタスクキューにjobが飛ぶ
        // console.log(count); // 出力 1 (3とはならない)
    // では、前の段階で更新関数で設定したstate値を変更できないかというとそうではない。
    // その場合は、以下のように引数にprevstate(名称はなんでも良いが)を当て、state値を変更することができる。
    // prevstateには前回のstate値すなわちcount + 1( 0 + 1 )の1が格納されている。
    // 前回のstateの意味は、前回の更新関数によってタスクキューに飛ばされたstate値。
    // イメージとしては、非同期処理でawaitを使って戻り値を変数代入する記述の代わり？
        setCount((prevstate) => {
            return prevstate + 10
        })
        // console.log(count); // 出力: 11

        //↓上記の記述は説明のためで、通常のカウントアップの記述は下記の２パターン
        //パターン１
        // setCount(++count);
        //パターン２
        // setCount(prevstate => prevstate + 1)
        // このprevstateを使った時の動作の仕組みは、カウントが0から1に変わる時は
        // 初期値の0をprevstateとして取得し、以降は前回の更新用関数で設定したstate値を
        // prevsateとして取得している。
    }
    const countDown = () => {
        setCount(--count)
    }
	return(
        <React.Fragment>
            <p className="count">カウントの仕組みを作ろう</p>
            <p>現在のカウント数: {count}回</p>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </React.Fragment>
    )
}

export default Component