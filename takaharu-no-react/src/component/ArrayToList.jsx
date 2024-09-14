import React from 'react'
import {useState} from 'react'

const ArrayToList = (props) => {
    /////////////////////////////////////////////////////////////////////
    //この書き方は少し煩雑でカッコ悪い
    const fruits = ['apple', 'banana', 'lemon', 'strawberry', 'orange']
    const fruitList = [];
    for(const fruit of fruits){
        fruitList.push(<li key={fruit}>{fruit}</li>) //JSXはJavascriptのオブジェクトなので、このように書ける
    }
    /////////////////////////////////////////////////////////////////////
    const animals = ['dog', 'cat', 'rat'];
    animals.map(animal => (<li>{animal}</li>))
	return(
        <React.Fragment>
            <p>Hello ArrayToList Component</p>
            <ul>
                {fruitList}
            </ul>
            <ul>
                {animals.map(animal => <li key={animal}>Hello, {animal}</li>)} {/*この記述は式になるのでJSX内にかける*/}
                {/*↑↑↑ここで行われている処理のイメージは以下の通り*/}
                {/*=========================================================
                    animalsの配列をmapメソッドを使って下記のように異なる配列に変更
                    [<li>dog</li>, <li>cat</li>, <li>rat</li>]
                    そして、jsxに配列を渡すと、配列の要素が一つずつ展開される
                    配列のような反復処理を繰り返す時はkey属性をつける必要がある。
                ==========================================================*/}
            </ul>
        </React.Fragment>
    )
}

export default ArrayToList