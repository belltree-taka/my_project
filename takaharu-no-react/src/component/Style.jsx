import React from 'react'
import {useState} from 'react'
import './testStyle.css'
// CSS Modulesを使う場合は、ファイル名を「ファイル名.module.css」にする
import styles from '../testStyle.module.css'
// styled-componentsを使う場合は、styled-componentsをインポートする
import styled from 'styled-components'


// console.dir(styled); //styledオブジェクトの中身は、全てのHTMLタグが入っている

// syled-componentsを使う場合は、styled.タグ名`スタイル`でスタイルを当てる
// そして、そのスタイルを当てたコンポーネントを変数に代入する
//　styled-componentsの定義は、コンポーネントの外に書く
// styled-componentsではV6から、propsでboolean値を渡す際には、$をつけることでエラーを回避できる。
// これは、V6からの仕様で、V5までは、propsをそのまま渡していた。
//　transient propsという仕様で、propsをそのまま渡すと、styled-componentsがpropsとして認識してしまうため、
//  エラーが発生する。そのため、$をつけることで、styled-componentsがpropsとして認識しないようにする。

const StyledButton = styled.button`
    display: block;
    width: 100px;
    height: 100px;
    background: red;
    background: ${props => props.$isSelected4 ? 'black' : 'white'};
    color: ${({$isSelected4}) => $isSelected4 ? 'white' : 'black'};
`
// 下記のようにすればstyled-componentの継承もできる
const OrangeStyledButton = styled(StyledButton)`
    background-color: ${({$isSelected5}) => $isSelected5 ? 'orange' : 'white'};
    &:hover {
        color: red;
    }
    @media (max-width: 600px) {
        border-radius: 50%
    }
`;
const Style = (props) => {
    /*======================================
        インラインスタイルによるスタイルの当て方
        擬似要素・セレクタ並びにメディアクエリが
        使えないので非推奨
    =======================================*/

    const [ isSelected1, setIsSelected1 ] = useState(false);
    
    const clickHandler1 = () => {
        setIsSelected1((prevstate) => {
            return !prevstate
        })
    }

    const style = {
        display: 'block',
        width: '100px',
        height: '100px',
        background: isSelected1 ? 'black' : '',
        color: isSelected1 ? 'white' : ''
    }

    /*=======================================================
        外部CSSによるスタイルの当て方
        この方法の問題点は、仮にコンポーネントごとに外部CSSファイルを
        作りimportしたとしても、最終的に全てのコンポーネントにそのCSS
        が当たってしまうこと。最後に読み込まれたCSSファイルで上書きされて
        しまう。インラインスタイルの場合は、プロパティ値の設定時に三項演算子
        を使うが、外部CSSの場合は、クラス名を三項演算子で切り替える。
    ========================================================*/

    const [isSelected2, setIsSelected2 ] = useState(false)

    const clickHandler2 = () => {
        setIsSelected2((prevstate) => {
            return !prevstate
        })
    }

    /*==================================================
        CSS Modulesによるスタイルの当て方
        この方法は、近いうちに非推奨になる可能性がある。
        CSS in JSによるスタイルの当て方が主流になる可能性が高い。
        cssファイルの名前に「.module」をつけることで、
        クラス名がユニークになる。
        ちなにに、CSS Modulesを使う場合は、擬似要素や擬似セレクタ
        も使える。メディアクエリも使える。
        タグを指定してスタイルを当てると、グローバルに効いてしまうので
        注意が必要。
    ===================================================*/

    // console.log(styles); //stylesオブジェクトの中身を確認 {testBtn: '_testBtn_y45td_1', testBtnClicked: '_testBtnClicked_y45td_5'}
    
    const [isSelected3, setIsSelected3 ] = useState(false);
    const clickHandler3 = () => {
        setIsSelected3((prevstate) => {
            return !prevstate
        })
    }
    
    {/*=========================================================================
        CSS in JSによるスタイルの当て方
        CSS in JSの代表的なライブラリには、styled-componentsやemotionなどがある。
        コマンドで、npm i styled-componentsを実行してstyled-componentsをインストールする。
        styled-componentsを使う場合は、vscode-styled-componentsという拡張機能をインストールすると
        styled-componentsの記述がハイライトされ、コード形成がしやすくなる。
    ==========================================================================*/}
    const [isSelected4, setIsSelected4 ] = useState(false);
    
    const clickHandler4 = () => {
        setIsSelected4((prevstate) => {
            return !prevstate
        })
    }
    
    const [ isSelected5, setIsSelected5 ] = useState(false);
    const clickHandler5 = () => {
        setIsSelected5((prevstate) => {
            return !prevstate
        })
    }

	return(
        <React.Fragment>
            <p>Style Component</p>
            <button onClick={clickHandler1} style={style}>インラインスタイル</button>{/*インラインスタイル*/}
            <button className={`${isSelected2 ? 'selected' : 'notSelected'}`} onClick={clickHandler2}>外部CSS</button>{/*外部CSS*/}
            <button className={`${isSelected3 ? styles.testBtnClicked : styles.testBtn}`} onClick={clickHandler3}>CSSモジュール</button>{/*CSS Module*/}
            <StyledButton onClick={clickHandler4} $isSelected4={isSelected4}>styledButton</StyledButton>{/*styled-component*/}
            <OrangeStyledButton onClick={clickHandler5} $isSelected5={isSelected5}>Inherited Styled Button</OrangeStyledButton>{/*styled-component 継承編*/}
        </React.Fragment>
    )
}

export default Style
