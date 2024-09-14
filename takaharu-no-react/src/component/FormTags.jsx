import React from 'react'
import { useState } from "react"

const FormTags = () => {
    const [inputVal, setInputVal] = useState('')
    const inputValHandler = (e) => {
        setInputVal(e.target.value)
    }
    const [textAreaVal, setTextAreaVal] = useState('')
    const textAreaValHandler = (e) => {
        setTextAreaVal(e.target.value)
    }
    {/*===================================================
        ↓おさらいになるが以下のような記述はNG
        const fruit = e.target.value
        Reactのコンポーネント管理は非同期なので、useStateを使う
    ====================================================*/}
    const [fruit, setFruit] = useState()
    const radioChange = (e) => {
        setFruit(e.target.value)
    }
    const RADIO_COLLECTION = ['Apple', 'Banana', 'Lemon']

    const [toggle, setToggle] = useState(true)
    const checkBoxHandler = () => {
        setToggle((prevstate) => {
            return !prevstate
        })
    }
    //あと一歩の例
    const familyMembers = [
        {name: 'Takaharu', age: 34},
        {name: 'Ayako', age: 47},
        {name: 'Ben', age: 6},
    ];
    const [value, setValue] = useState()
    const [ sum, setSum ] = useState(0)

    //正しい例
    const [ members, setMembers ] = useState([
        {name: 'Takaharu', age: 34, checked: false},
        {name: 'Ayako', age: 47, checked: false},
        {name: 'Ben', age: 6, checked: false},
    ])
    const [total, setTotal] = useState(0)

    // ループ処理の中のイベントハンドラの記述において、配列のメソッドを使った操作を必要とする場合は、以下のように改めてmapメソッドや
    // forEachメソッドなどを記述することになる。
    const handleChange = (e) => {
        // ここのhandleChange関数で実行する内容は、membersの各要素のcheckedのステータスを逆になった新しい配列を返すこと
        // そしてそのchecked属性がtrueになった要素のageプロパティをforEachを使って変数ageTotalに集計し、setTotalの引数に渡す
        const membersAfterChecked = members.map((member) => {
            if(member.name === e.target.value){
                member.checked = !member.checked //trueをfalseにfalseをtrueにする処理
            }
            return member // membersとしないように
        })
        setMembers(membersAfterChecked);

        let ageTotal = 0;
        // checked属性がtrueになった要素のageプロパティの総合計を取得する
        membersAfterChecked.forEach((memberAfterChecked) => {
            if(memberAfterChecked.checked === true){
                ageTotal += memberAfterChecked.age
            }
            setTotal(ageTotal)
        })
        
    }
    return(
        <>
            <p>Hello FormTags Component</p>
            {/*===============================
                インプットとテキストエリア
            ================================*/}
            <label htmlFor="inputLabel">INPUTAREA</label>
            <input 
            className="inputTag"
            id="inputLabel" 
            placeholder="入力してね"
            value={inputVal}
            onChange={inputValHandler} //上記のuseStateで空文字を初期値に設定しないとエラーになる
            type="text"/>

            <label htmlFor="textAreaTag">TEXTAREA</label>
            <textarea
            className="textAreaTag"
            id="textAreaTag"
            type="text"
            placeholder="入力してね"
            value={textAreaVal}
            onChange={textAreaValHandler}
            />
            {/*===============================
                ラジオボタン（複数から一つを選択）
            ================================*/}
            {RADIO_COLLECTION.map((fruitItem) => {
                return(
                    <React.Fragment key={fruitItem}>
                        <label htmlFor={fruitItem}>{fruitItem}</label>
                        <input
                        className="radio"
                        id={fruitItem}
                        value={fruitItem} //⭐️
                        checked={fruit === fruitItem} //この記述がないと一度チェックがつくと他のラジオボタンを押してもチェックがつきっぱなし。trueとfalseで管理
                        //↑ ⭐️setFruit(e.target.value)でセットしたState値であるfruitと配列RADIO_COLLECTIONの角要素を比較している
                        type="radio" 
                        onChange={radioChange}/>
                    </React.Fragment>
                )
            })}
            <p>私は{fruit}を食べたい</p>
            {/*===============================
                単一チェックボックス
            ================================*/}
            <label htmlFor="checkbox">Red</label>
            <input 
            type="checkbox"
            id="checkbox"
            onChange={checkBoxHandler}
            checked={toggle}/>
            <div>{toggle? "ON" : "OFF"}</div>
            {/*========================================================================================
                複数チェックボックス（複数選択可能）
            =========================================================================================*/}
            <div>--------------------------------------------------------------------------------------------</div>
            <p>複数チェックボックス（あと一歩の例）</p>
            {/*===================================================================================
                下記の記述だと、ラジオボタンの時のように他の要素のcheck属性がtrueになると、選択済みの要素の
                check属性がfalseになり、選択が外れてしまう。
                選択した状態を残すには、別の仕組みが必要で、checkフラグを管理するcheckプロパティを各配列要素に
                設定してあげる必要がある。
            ====================================================================================*/}
            <div>--------------------------------------------------------------------------------------------</div>
            {familyMembers.map((familyMember, index, array) => {
                return(
                    <React.Fragment key={familyMember.name}>
                        <input
                        className='multipleCheckBox'
                        type="checkbox"
                        value={familyMember.name}
                        checked={familyMember.name === value}
                        onChange={(e) => {
                            setValue(e.target.value)
                            setSum((prevstate) => {
                                return prevstate += familyMember.age
                            })
                            console.log(familyMember.name);
                            console.log(familyMember.age);
                        }}
                        />{familyMember.name}: {familyMember.age}
                    </React.Fragment>
                )
            })}
            <div>合計: {sum}</div>
            <div>--------------------------------------------------------------------------------------------</div>
            <p>複数チェックボックス（正しいの例）</p>
            <div>--------------------------------------------------------------------------------------------</div>
            {/*======================================================================================
                チェックボックスにチェックが残って欲しい場合は、下記のようにする
            =======================================================================================*/}
            {members.map((member) => {
                return (
                    <React.Fragment key={member.name}>
                        <input type="checkbox"
                        value={member.name}
                        checked={member.checked}
                        onChange={handleChange}
                        />{member.name}: {member.age}
                    </React.Fragment>
                )
            })}
            <div>合計: {total}</div>
        </>
    )
}


export default FormTags;