import React from 'react'
import {useState, useRef} from 'react'
import styled from 'styled-components' 

const StyledPTag = styled.p`
    margin-top: 20px;
    color: green;
    font-size: 30px;
`
const btn = {
    padding: '10px',
    width: '300px',
}

// useRefを使うことで直接、DOMを操作できる。
// 下記の例では、input要素のfocusメソッドをボタンタグがクリックされる時に発動させている。
// const inputRef = useRef()と記述し、それを操作したい要素のref属性に代入することで
// ref属性が付いた要素をコントロールできるようにする。
// コントロールする際には、inputRef.currentのようにcurrenプロパティにアクセスしてから
// 使用したいメソッドを呼び出す。

// 上記のようにref属性でuseRefを使いDOM操作をすることに使われるuseRefだが
// それ以外にuseStateと異なり、データの保持・変更が再レンダリングを発生させずにすることができる特徴がある。
// 下記の例では、currentプロパティで初期値にアクセスし、変更も10から100に変えてるわけだが、「再レンダリング」が
// コンソール出力されない。一方で、input要素に文字入力するとuseStateが使われているので「再レンダリング」とコンソールに
//　立て続けに出力される。

const UseRef = (props) => {
    // console.log('再レンダリング');
    const [ value, setValue] = useState('');
    const inputRef = useRef();
    const testRef = useRef(10);
    testRef.current = 100;
    // console.log(testRef); // { current: 100 }

    // 以下はvideo要素を操作するためのuseRefの使用例
    const videoRef = useRef();
    // console.log(videoRef); // { current: video }
    const [isPlaying, setIsPlaying] = useState(false);
    const videoToggle = () => {
        setIsPlaying( prevstate => !prevstate);
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
    }
	return(
        <React.Fragment>
            <StyledPTag>Hello Uref Component</StyledPTag>
            <input ref={inputRef} value={value} type="text" onChange={(e) => setValue(e.target.value)}/>
            <button onClick={() => {
                inputRef.current.focus();
                inputRef.current.style.color = 'red';
            }}>ボタン</button>
            <p>{testRef.current}</p>
            <video ref={videoRef} style={{ width: '600px', display: 'block'}} >
                <source src='./sample.mp4'></source>
            </video>
            <button style={btn} onClick={videoToggle} >{isPlaying ? 'stop' : 'play'}</button>
        </React.Fragment>
    )
}

export default UseRef

