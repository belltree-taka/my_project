import React, { useReducer, useContext, createContext }from 'react'

export const ThemeContext = createContext()
export const ThemeUpdateContext = createContext()

//  ⭐️ useContextを使う側のファイルで毎回、useContextをインポートして、const [ themeStatus, dispatch ] = useContext(ThemeContext)と記述するのは煩雑なので
//  下記のようにuseContextを返す関数を用意して読み込み側でのその関数をインポートするだけでuseContextが使えるようにするとスマートな記述になる。
export const useThemeContext = () => {
    return useContext(ThemeContext)
}

export const useThemeUpdateContext = () => {
    return useContext(ThemeUpdateContext)
}

const ThemeProvider = ( {children} ) => {

    const reducer = ( state, { type, payload } ) => {
        switch( type ){
            case 'STATE_UPDATE':
            return payload
            default:
            return state
        }
    }
    const [ themeStatus, dispatch ] = useReducer( reducer, 'light')

    return (
        <React.Fragment>
            {/* useContextの弱点である更新用関数（今回の場合だとdispatch）だけを保有するコンポーネントがあった場合に本来そのコンポーネントは再レンダリングが必要ない
            わけだが、useContextを使ってステート管理をしているコンポーネントは全て無条件に再レンダリングが発生してしまう。この問題の回避策として下記のコメントアウト部分のように
            配列でまとめてステートと更新関数を渡すのではなく、ステートを渡すコンテクストと更新用関数を渡すコンテクストを分けて定義するとパフォーマンスの向上に繋がる。*/}
            <ThemeUpdateContext.Provider value={ dispatch }>
                <ThemeContext.Provider value={ themeStatus }>
                {/* 下記のように配列でステートと更新用関数を渡すこともある*/}
                {/* <ThemeContext.Provider value={ [ themeStatus, dispatch ] }> */}
                    {children}
                </ThemeContext.Provider>
            </ThemeUpdateContext.Provider>
        </React.Fragment>
    )
}

export default ThemeProvider