import React from 'react'
import {useState} from 'react'
import Modal from './Modal'
import { createPortal } from "react-dom"; // createPortalをimportする
import { background } from '@chakra-ui/react';
import { MdHeight } from 'react-icons/md';

const style = {
    margin: '0 auto',
    width: '80%',
    padding: '50px',
    background: 'grey',
    textAlign: 'center'
}

// createPortalは、コンポーネントを作成する関数である。
// 対象の子要素を現在の直接的な親要素から、別のDOM要素にマウントすることができる。
// createPortalは、そのポータルを作成するためのメソッド。
// 想定される使用例は、モーダル、ポップアップ、またはその他のDOM要素がページ全体に表示される場合などである。
// 下記の例のように、positionでモーダルの表示位置を制御したり、親要素からのスタイルを継承しないようにすることができる。
// また、createPortalを使うことで、モーダルの表示を親要素に依存させず、独立させることができる。

const ModalPortal = ({ children }) =>{ // 子要素を引数として受け取る
    const target = document.querySelector('body'); // targetがマウントする先のDOM要素
    return createPortal(children, target)
}

const CreatePortal = (props) => {
    const [ modalStatus, setModalStatus ] = useState(false);
    const clickHandler = () => {
        setModalStatus((prevstate) => {
            return !prevstate
        })
        console.log(modalStatus);
    }
	return(
        <React.Fragment>
            {/*-----------------------------------------------------------------------*/}
            {/*下記の記述の場所はどこでも良さそう。下記をコメントアウトして挙動を確認してみよう*/}
            {/*そうすると、createPortalを使う意味がわかる*/}

            {/* <ModalPortal>
                {modalStatus && <Modal closeClick={() => {setModalStatus(false)}}/>}
            </ModalPortal> */}

            {/*上の書き方でも機能したが、Udemyの解説動画では下記のように記述していた*/}
                {modalStatus && 
                <ModalPortal>
                    <Modal closeClick={() => {setModalStatus(false)}}/>
                </ModalPortal>
                }
            {/*-----------------------------------------------------------------------*/}
            <div style={style}>
                <p style={{fontSize: '50px', color: 'white', marginBottom: '30px'}}>Hello Create Portal Component</p>
                <button disabled={modalStatus} onClick={clickHandler}>モーダルを表示する</button> {/*disabled属性の使い方がミソ*/}
                {/* ↓この書き方だとモーダルの表示位置の基準がdiv要素になってしまう */}
                {/* ↓JSX内でundefinedやfalse、true、nullなどが返された場合、Reactはそれらを完全に無視される。つまり何もレンダーされない */}
                {/* {modalStatus && <Modal closeClick={() => {setModalStatus(false)}}/>} */}
            </div>
            {/*この書き方も当然OK*/}
            {/* <ModalPortal children={modalStatus && <Modal closeClick={() => {setModalStatus(false)}}/>}/> */}
        </React.Fragment>
    )
}

export default CreatePortal