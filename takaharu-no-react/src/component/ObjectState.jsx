import React from 'react'
import {useState} from 'react'

const ObjectState = (props) => {
    // Stateには下記のようにオブジェクトを渡すこともできる。
    // オブジェクトで渡さないとコメントアウトした箇所のように記述が少し煩雑になる。
    const userProfile = {
        name: '',
        age: ''
    }
    const [user, setUser] = useState(userProfile);
    const reset = () => {
        setUser(userProfile)
        // setUser({...user})としても良い。Reactのルールとして、更新用関数の引数にstateの変数（今回の場合だと変数user）を入れることはできない。
        // スプレッド演算子を使うことで、異なるオブジェクトと判断されるので、このような記述はOK。
        // また、setUser({...user, name: 'Takaharu'})とすると、userと同じ内容の複製オブジェクトだが、nameプロパティだけTakaharuになった
        // オブジェクトを代入することができる。
    }
    return(
        <React.Fragment>
            <p>Hello ObjectState Component</p>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <input name="nameInput" className="nameInput" type="text" value={user.name} placeholder="名前を記入してください"
            onChange={(e) => {
                setUser({name: e.target.value, age: user.age})
            }}/>
            <input name="ageInput" className="ageInput" type="number" value={user.age} placeholder="年齢を記入してください"
            onChange={(e) => {
                setUser({name: user.name, age: e.target.value})
            }}/>
            <button onClick={reset}>リセット</button>
        </React.Fragment>
    )
    // let [name, setName] = useState('')
    // let [age, setAge] = useState('')
	// return(
    //     <React.Fragment>
    //         <p>Hello ObjectState Component</p>
    //         <p>Name: {name}</p>
    //         <p>Age: {age}</p>
    //         <input className="nameInput" name='nameInput' type="text" value={name} placeholder="名前を記入してください"onChange={(e) => {
    //             setName(e.target.value)
    //         }}/>
    //         <input className="ageInput" name='ageInput' type="number" value={age} placeholder="年齢を記入してください"onChange={(e) => {
    //             setAge(e.target.value)
    //         }}/>
    //         <button onClick={() => {
    //             setName('');
    //             setAge('')
    //         }}>リセット</button>
    //     </React.Fragment>
    // )
}

export default ObjectState